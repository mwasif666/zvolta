import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { authApi, readAuthToken, writeAuthToken } from "../services/api";

const AuthContext = createContext({
  user: null,
  isAuthenticated: false,
  loading: true,
  login: async () => {},
  register: async () => {},
  updateProfile: async () => {},
  changePassword: async () => {},
  logout: async () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  // A stored token still has to be confirmed with the API, so the first render
  // reports "loading" rather than guessing that the session is valid.
  const [loading, setLoading] = useState(() => Boolean(readAuthToken()));

  useEffect(() => {
    if (!readAuthToken()) return undefined;

    let active = true;

    authApi
      .me()
      .then((result) => {
        if (!active) return;
        // `/auth/me` is optionally protected: a rejected token comes back as
        // data: null rather than an error status.
        if (result.data) setUser(result.data);
        else writeAuthToken("");
      })
      .catch(() => {
        if (active) writeAuthToken("");
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const adoptSession = useCallback((result) => {
    if (result.token) writeAuthToken(result.token);
    setUser(result.data || null);
    return result.data || null;
  }, []);

  const login = useCallback(
    async (credentials) => adoptSession(await authApi.login(credentials)),
    [adoptSession],
  );

  const register = useCallback(
    async (details) => adoptSession(await authApi.register(details)),
    [adoptSession],
  );

  const updateProfile = useCallback(async (details) => {
    const result = await authApi.updateProfile(details);
    setUser(result.data || null);
    return result.data || null;
  }, []);

  const changePassword = useCallback(
    (details) => authApi.changePassword(details),
    [],
  );

  const logout = useCallback(async () => {
    try {
      await authApi.logout();
    } catch {
      // The local session is dropped either way.
    }
    writeAuthToken("");
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      loading,
      login,
      register,
      updateProfile,
      changePassword,
      logout,
    }),
    [changePassword, loading, login, logout, register, updateProfile, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

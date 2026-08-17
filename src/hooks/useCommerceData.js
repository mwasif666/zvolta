import { useCallback, useEffect, useRef, useState } from "react";

export function useCommerceData(loader, dependencies = [], options = {}) {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: "",
    errorStatus: null,
  });
  const loaderRef = useRef(loader);
  const { refreshOnFocus = true } = options;
  loaderRef.current = loader;

  const load = useCallback(async ({ keepData = false } = {}) => {
    setState((current) => ({
      data: keepData ? current.data : null,
      loading: !keepData,
      error: "",
      errorStatus: null,
    }));

    try {
      const result = await loaderRef.current();
      setState({
        data: result.data,
        loading: false,
        error: "",
        errorStatus: null,
      });
    } catch (error) {
      setState((current) => ({
        data: keepData ? current.data : null,
        loading: false,
        error: error.message,
        errorStatus: error.status || null,
      }));
    }
  }, []);

  useEffect(() => {
    let active = true;
    setState((current) => ({
      ...current,
      loading: true,
      error: "",
      errorStatus: null,
    }));
    loaderRef
      .current()
      .then((result) => {
        if (active) {
          setState({
            data: result.data,
            loading: false,
            error: "",
            errorStatus: null,
          });
        }
      })
      .catch((error) => {
        if (active)
          setState({
            data: null,
            loading: false,
            error: error.message,
            errorStatus: error.status || null,
          });
      });
    return () => {
      active = false;
    };
  }, dependencies);

  useEffect(() => {
    if (!refreshOnFocus) return undefined;

    const refresh = () => load({ keepData: true });
    const refreshWhenVisible = () => {
      if (document.visibilityState === "visible") refresh();
    };

    window.addEventListener("focus", refresh);
    window.addEventListener("zvolta:data-refresh", refresh);
    document.addEventListener("visibilitychange", refreshWhenVisible);

    return () => {
      window.removeEventListener("focus", refresh);
      window.removeEventListener("zvolta:data-refresh", refresh);
      document.removeEventListener("visibilitychange", refreshWhenVisible);
    };
  }, [load, refreshOnFocus]);

  return { ...state, refetch: () => load({ keepData: true }) };
}

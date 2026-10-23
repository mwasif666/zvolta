// @vitest-environment jsdom
import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, expect, test, vi } from "vitest";
import MyAccountPage from "./MyAccountPage";
vi.mock("../../context/AuthContext", () => ({
  useAuth: () => ({
    user: {
      id: "u1",
      name: "",
      email: "shopper@example.com",
      phone: "03001234567",
    },
    loading: false,
    isAuthenticated: true,
  }),
}));
vi.mock("../../services/api", () => ({
  accountApi: { orders: async () => ({ data: [] }) },
}));
vi.mock("../../hooks/useRealtimeUpdates", () => ({ useRealtimeEvent() {} }));
afterEach(cleanup);
test("passwordless accounts explain email codes instead of offering password changes", () => {
  render(
    <MemoryRouter initialEntries={["/my-account?tab=security"]}>
      <MyAccountPage />
    </MemoryRouter>,
  );
  expect(screen.getByText("Email sign-in codes")).toBeTruthy();
  expect(screen.getByText(/No password is needed/)).toBeTruthy();
  expect(screen.queryByLabelText(/password/i)).toBeNull();
});
test("a profile edit cannot replace the sign-in email", () => {
  render(
    <MemoryRouter initialEntries={["/my-account?tab=profile"]}>
      <MyAccountPage />
    </MemoryRouter>,
  );
  expect(screen.getByLabelText("Email address").readOnly).toBe(true);
});

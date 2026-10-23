// @vitest-environment jsdom
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { afterEach, expect, test, vi } from "vitest";
import { AuthProvider } from "../../context/AuthContext";
import { StorefrontSettingsProvider } from "../../context/StorefrontSettingsContext";
import AccountAuthPage from "./AccountAuthPage";

const { requestCode, verifyCode } = vi.hoisted(() => ({
  requestCode: vi.fn(),
  verifyCode: vi.fn(),
}));
vi.mock("../../services/api", async (importOriginal) => ({
  ...(await importOriginal()),
  readAuthToken: () => "",
  authApi: { requestEmailCode: requestCode, verifyEmailCode: verifyCode },
  commerceApi: { settings: () => Promise.resolve({ data: null }) },
}));
afterEach(() => {
  cleanup();
  vi.resetAllMocks();
  localStorage.clear();
});

function renderAuth(mode, search = "") {
  return render(
    <MemoryRouter initialEntries={[`/${mode}${search}`]}>
      <StorefrontSettingsProvider>
        <AuthProvider>
          <Routes>
            <Route
              path={`/${mode}`}
              element={<AccountAuthPage mode={mode} />}
            />
            <Route path="/checkout" element={<p>Back at checkout</p>} />
            <Route path="/my-account" element={<p>Account ready</p>} />
          </Routes>
        </AuthProvider>
      </StorefrontSettingsProvider>
    </MemoryRouter>,
  );
}
function enterDetails(mode = "login") {
  fireEvent.change(screen.getByLabelText("Email"), {
    target: { value: "Ahmed.Raza@example.com" },
  });
  if (mode === "register")
    fireEvent.change(screen.getByLabelText("Phone"), {
      target: { value: "0300 1234567" },
    });
  fireEvent.click(screen.getByRole("button", { name: "Get Code" }));
}
test("login only asks for email and keeps the site logo", () => {
  renderAuth("login");
  expect(screen.getAllByAltText("ZVolta")[0].getAttribute("src")).toContain(
    "full_logowhite.png",
  );
  expect(screen.getByLabelText("Email")).toBeTruthy();
  expect(screen.queryByLabelText(/phone|password|full name/i)).toBeNull();
});
test("signup asks only for required email and phone", () => {
  renderAuth("register");
  expect(screen.getByLabelText("Email").required).toBe(true);
  expect(screen.getByLabelText("Phone").required).toBe(true);
  expect(document.querySelectorAll("input").length).toBe(2);
  expect(screen.queryByLabelText(/password|full name/i)).toBeNull();
});
test("signup validates email and phone before sending", () => {
  renderAuth("register");
  fireEvent.click(screen.getByRole("button", { name: "Get Code" }));
  expect(screen.getByRole("alert").textContent).toContain("valid email");
  fireEvent.change(screen.getByLabelText("Email"), {
    target: { value: "a@example.com" },
  });
  fireEvent.click(screen.getByRole("button", { name: "Get Code" }));
  expect(screen.getByRole("alert").textContent).toContain("valid phone");
  expect(document.activeElement).toBe(screen.getByLabelText("Phone"));
  expect(requestCode).not.toHaveBeenCalled();
});
test("email login verifies a code then returns to optional checkout", async () => {
  requestCode.mockResolvedValue({ success: true });
  verifyCode.mockResolvedValue({
    token: "session",
    data: { email: "ahmed.raza@example.com" },
  });
  renderAuth("login", "?next=%2Fcheckout");
  enterDetails();
  const input = await screen.findByLabelText("Verification code");
  expect(requestCode).toHaveBeenCalledWith({
    email: "ahmed.raza@example.com",
    intent: "login",
  });
  fireEvent.change(input, { target: { value: "123456" } });
  fireEvent.click(screen.getByRole("button", { name: "Verify & sign in" }));
  await screen.findByText("Back at checkout");
  expect(verifyCode).toHaveBeenCalledWith({
    email: "ahmed.raza@example.com",
    code: "123456",
    intent: "login",
  });
});
test("signup sends email and phone and creates the account only after verification", async () => {
  requestCode.mockResolvedValue({ success: true });
  verifyCode.mockResolvedValue({
    token: "session",
    data: { email: "ahmed.raza@example.com" },
  });
  renderAuth("register");
  enterDetails("register");
  const input = await screen.findByLabelText("Verification code");
  expect(requestCode).toHaveBeenCalledWith({
    email: "ahmed.raza@example.com",
    phone: "0300 1234567",
    intent: "register",
  });
  expect(verifyCode).not.toHaveBeenCalled();
  fireEvent.change(input, { target: { value: "123456" } });
  fireEvent.click(
    screen.getByRole("button", { name: "Verify & create account" }),
  );
  await screen.findByText("Account ready");
});
test("invalid code stays on the code screen and resend preserves signup details", async () => {
  requestCode.mockResolvedValue({ success: true });
  verifyCode.mockRejectedValueOnce(
    new Error("Verification code is invalid or has expired"),
  );
  renderAuth("register");
  enterDetails("register");
  const input = await screen.findByLabelText("Verification code");
  fireEvent.change(input, { target: { value: "123456" } });
  fireEvent.click(
    screen.getByRole("button", { name: "Verify & create account" }),
  );
  await screen.findByRole("alert");
  expect(screen.getByLabelText("Verification code")).toBeTruthy();
  fireEvent.click(screen.getByRole("button", { name: "Resend code" }));
  await waitFor(() => expect(requestCode).toHaveBeenCalledTimes(2));
  expect(requestCode.mock.calls[1][0]).toEqual(requestCode.mock.calls[0][0]);
  await waitFor(() =>
    expect(screen.getByRole("button", { name: "Change email" }).disabled).toBe(
      false,
    ),
  );
  fireEvent.click(screen.getByRole("button", { name: "Change email" }));
  expect(screen.getByLabelText("Email").value).toBe("ahmed.raza@example.com");
  expect(screen.getByLabelText("Phone").value).toBe("0300 1234567");
  expect(screen.queryByRole("alert")).toBeNull();
});
test("failed email delivery preserves details for retry", async () => {
  requestCode.mockRejectedValueOnce(
    new Error("Verification email could not be sent"),
  );
  renderAuth("login");
  enterDetails();
  await screen.findByRole("alert");
  expect(screen.getByLabelText("Email").value).toBe("Ahmed.Raza@example.com");
  expect(screen.queryByLabelText("Verification code")).toBeNull();
});

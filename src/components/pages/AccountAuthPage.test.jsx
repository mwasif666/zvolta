// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, expect, test, vi } from "vitest";
import { AuthProvider } from "../../context/AuthContext";
import { StorefrontSettingsProvider } from "../../context/StorefrontSettingsContext";
import AccountAuthPage from "./AccountAuthPage";

vi.mock("../../services/api", async (importOriginal) => ({
  ...(await importOriginal()),
  commerceApi: {
    settings: () => Promise.resolve({ data: null }),
    me: () => Promise.resolve({ data: null }),
  },
}));

afterEach(cleanup);

function renderAuth(mode) {
  return render(
    <MemoryRouter initialEntries={[`/${mode}`]}>
      <StorefrontSettingsProvider>
        <AuthProvider>
          <AccountAuthPage mode={mode} />
        </AuthProvider>
      </StorefrontSettingsProvider>
    </MemoryRouter>,
  );
}

test("login shows the site logo rather than a stand-in mark", () => {
  renderAuth("login");

  const logos = screen.getAllByAltText("ZVolta");
  expect(logos.length).toBeGreaterThan(0);
  for (const logo of logos) {
    expect(logo.getAttribute("src")).toContain("full_logowhite.png");
  }
  expect(screen.getByText("Welcome back.")).toBeTruthy();
});

test("password field offers a visibility toggle", () => {
  renderAuth("login");

  const toggle = screen.getByLabelText("Show password");
  expect(screen.getByPlaceholderText("At least 6 characters")).toHaveProperty(
    "type",
    "password",
  );
  fireEvent.click(toggle);
  expect(screen.getByPlaceholderText("At least 6 characters")).toHaveProperty(
    "type",
    "text",
  );
});

test("register adds the name and phone fields", () => {
  renderAuth("register");

  expect(screen.getByPlaceholderText("Ahmed Raza")).toBeTruthy();
  expect(screen.getByPlaceholderText("0300 1234567")).toBeTruthy();
});

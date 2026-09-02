// @vitest-environment jsdom
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, expect, test, vi } from "vitest";
import { AuthProvider } from "../../context/AuthContext";
import { StorefrontSettingsProvider } from "../../context/StorefrontSettingsContext";
import TrackOrderPage from "./TrackOrderPage";

const trackOrder = vi.fn();

vi.mock("../../services/api", async (importOriginal) => ({
  ...(await importOriginal()),
  readAuthToken: () => "",
  writeAuthToken: () => {},
  authApi: { me: () => Promise.resolve({ data: null }) },
  commerceApi: { settings: () => Promise.resolve({ data: null }) },
  accountApi: { trackOrder: (...args) => trackOrder(...args) },
}));

afterEach(() => {
  cleanup();
  trackOrder.mockReset();
});

function renderTracker(entry = "/track-order") {
  return render(
    <MemoryRouter initialEntries={[entry]}>
      <StorefrontSettingsProvider>
        <AuthProvider>
          <TrackOrderPage />
        </AuthProvider>
      </StorefrontSettingsProvider>
    </MemoryRouter>,
  );
}

const field = (name) => document.querySelector(`[name="${name}"]`);

test("prefills the order number a confirmation email links with", () => {
  renderTracker("/track-order?order=ZV-84807098-27NY");

  expect(field("orderNumber").value).toBe("ZV-84807098-27NY");
  // The contact is the shopper's to supply; nothing is guessed for a guest.
  expect(field("contact").value).toBe("");
});

test("sends the order number with the contact detail and shows the result", async () => {
  trackOrder.mockResolvedValue({
    data: {
      orderNumber: "ZV-84807098-27NY",
      orderStatus: "shipped",
      grandTotal: 449995,
      totalItems: 5,
      paymentMethod: "COD",
      items: [{ title: "ZVolta Smart 3kW Charger" }],
      shippingAddress: { city: "Lahore", country: "Pakistan" },
      createdAt: "2026-08-30T10:09:12.841Z",
    },
  });

  renderTracker();

  fireEvent.change(field("orderNumber"), {
    target: { value: "ZV-84807098-27NY" },
  });
  fireEvent.change(field("contact"), {
    target: { value: "buyer@example.com" },
  });
  fireEvent.click(screen.getByRole("button", { name: /track order/i }));

  // "Shipped" also appears as a step in the progress bar, so the assertion
  // targets the status badge specifically.
  await waitFor(() =>
    expect(document.querySelector(".account-status").textContent).toBe(
      "Shipped",
    ),
  );
  expect(trackOrder).toHaveBeenCalledWith({
    orderNumber: "ZV-84807098-27NY",
    contact: "buyer@example.com",
  });
  expect(screen.getByText("Lahore, Pakistan")).toBeTruthy();
});

test("surfaces a mismatch instead of silently showing nothing", async () => {
  trackOrder.mockRejectedValue(
    new Error("That order number and contact detail do not match."),
  );

  renderTracker();

  fireEvent.change(field("orderNumber"), { target: { value: "ZV-1-A" } });
  fireEvent.change(field("contact"), {
    target: { value: "wrong@example.com" },
  });
  fireEvent.click(screen.getByRole("button", { name: /track order/i }));

  await waitFor(() =>
    expect(screen.getByRole("alert").textContent).toContain("do not match"),
  );
});

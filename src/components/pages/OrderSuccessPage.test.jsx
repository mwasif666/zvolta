// @vitest-environment jsdom
import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, expect, test, vi } from "vitest";
import { StorefrontSettingsProvider } from "../../context/StorefrontSettingsContext";
import OrderSuccessPage from "./OrderSuccessPage";

vi.mock("../../services/api", async (importOriginal) => ({
  ...(await importOriginal()),
  commerceApi: {
    settings: () => Promise.resolve({ data: null }),
  },
}));

afterEach(cleanup);

function renderSuccess(entry) {
  return render(
    <MemoryRouter initialEntries={[entry]}>
      <StorefrontSettingsProvider>
        <OrderSuccessPage />
      </StorefrontSettingsProvider>
    </MemoryRouter>,
  );
}

function renderPlacedOrder(order) {
  return render(
    <MemoryRouter
      initialEntries={[{ pathname: "/order-success", state: { order } }]}
    >
      <StorefrontSettingsProvider>
        <OrderSuccessPage />
      </StorefrontSettingsProvider>
    </MemoryRouter>,
  );
}

test("shows the order reference, next steps and the site logo", () => {
  renderSuccess("/order-success?order=ZV-123-ABC");

  expect(screen.getByAltText("ZVolta").getAttribute("src")).toContain(
    "full_logowhite.png",
  );
  expect(screen.getByText("ZV-123-ABC")).toBeTruthy();
  expect(screen.getByText("Confirmation call")).toBeTruthy();
});

test("hides the reference block when no order number reached the page", () => {
  renderSuccess("/order-success");

  expect(screen.queryByText("Order reference")).toBeNull();
});

test("names the address the confirmation email was sent to", () => {
  renderPlacedOrder({
    orderNumber: "ZV-999-XYZ",
    grandTotal: 414997,
    customer: { email: "buyer@example.com" },
  });

  expect(screen.getByText("Confirmation sent to")).toBeTruthy();
  expect(screen.getByText("buyer@example.com")).toBeTruthy();
});

test("omits the confirmation row when the order carried no email", () => {
  renderPlacedOrder({ orderNumber: "ZV-999-XYZ", customer: { email: "" } });

  expect(screen.queryByText("Confirmation sent to")).toBeNull();
  expect(screen.getByText("ZV-999-XYZ")).toBeTruthy();
});

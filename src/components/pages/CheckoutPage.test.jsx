// @vitest-environment jsdom
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, expect, test, vi } from "vitest";
import { AuthProvider } from "../../context/AuthContext";
import { StorefrontSettingsProvider } from "../../context/StorefrontSettingsContext";
import CheckoutPage from "./CheckoutPage";

// The saved account only carries part of a delivery address, which is what the
// page has to cope with: fill what exists, leave the rest for the shopper.
const savedProfile = {
  id: "user-1",
  name: "Ahmed Raza",
  email: "ahmed.raza@example.com",
  phone: "0300 1234567",
  addresses: [
    {
      _id: "address-1",
      isDefault: true,
      fullName: "Ahmed Raza",
      phone: "0311 7654321",
      addressLine1: "House 24, Street 7, DHA Phase 5",
      addressLine2: "",
      city: "Lahore",
      state: "",
      postalCode: "54000",
    },
  ],
};

vi.mock("../../services/api", async (importOriginal) => ({
  ...(await importOriginal()),
  readAuthToken: () => "test-token",
  writeAuthToken: () => {},
  authApi: { me: () => Promise.resolve({ data: savedProfile }) },
  commerceApi: { settings: () => Promise.resolve({ data: null }) },
  shippingApi: {
    calculate: () => Promise.resolve({ data: { shippingFee: 0 } }),
  },
}));

vi.mock("../../context/CartContext", () => ({
  useCart: () => ({
    clearCart: () => {},
    coupon: null,
    discountTotal: 0,
    isServerCart: false,
    items: [{ productId: "product-1", quantity: 1 }],
    subtotal: 1000,
  }),
}));

vi.mock("../../hooks/useLiveCartItems", () => ({
  useLiveCartItems: () => ({
    hasBlockingIssues: false,
    liveItems: [],
    liveSubtotal: 1000,
  }),
}));

afterEach(cleanup);

function renderCheckout() {
  return render(
    <MemoryRouter initialEntries={["/checkout"]}>
      <StorefrontSettingsProvider>
        <AuthProvider>
          <CheckoutPage />
        </AuthProvider>
      </StorefrontSettingsProvider>
    </MemoryRouter>,
  );
}

const fieldValue = (name) =>
  document.querySelector(`[name="${name}"]`)?.value ?? null;

test("fills checkout from the saved account and leaves missing details blank", async () => {
  renderCheckout();

  expect(fieldValue("fullName")).toBe("");

  await waitFor(() => expect(fieldValue("fullName")).toBe("Ahmed Raza"));

  // The address phone is the delivery contact, so it wins over the profile one.
  expect(fieldValue("phone")).toBe("0311 7654321");
  expect(fieldValue("email")).toBe("ahmed.raza@example.com");
  expect(fieldValue("addressLine1")).toBe("House 24, Street 7, DHA Phase 5");
  expect(fieldValue("city")).toBe("Lahore");
  expect(fieldValue("postalCode")).toBe("54000");
  // Nothing is invented for the fields the account never saved.
  expect(fieldValue("addressLine2")).toBe("");
  expect(fieldValue("state")).toBe("");
  expect(
    screen.getByText(/Filled in from your saved account details/),
  ).toBeTruthy();
});

test("a prefilled city quotes delivery without waiting for a blur", async () => {
  renderCheckout();

  await waitFor(() => expect(screen.getByText("Free")).toBeTruthy());
});

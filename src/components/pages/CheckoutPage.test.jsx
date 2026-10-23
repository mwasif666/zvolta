// @vitest-environment jsdom
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, beforeEach, expect, test, vi } from "vitest";
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

const { createOrderMock, authState } = vi.hoisted(() => ({
  createOrderMock: vi.fn(),
  authState: { guest: false },
}));

vi.mock("../../services/api", async (importOriginal) => ({
  ...(await importOriginal()),
  readAuthToken: () => (authState.guest ? "" : "test-token"),
  writeAuthToken: () => {},
  authApi: {
    me: () => Promise.resolve({ data: authState.guest ? null : savedProfile }),
  },
  commerceApi: {
    settings: () => Promise.resolve({ data: null }),
    createOrder: createOrderMock,
  },
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

beforeEach(() => {
  authState.guest = false;
  createOrderMock.mockReset();
});
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

test("places an order without showing a payment plan", () => {
  renderCheckout();

  expect(screen.getByRole("button", { name: /Place Order/i })).toBeTruthy();
  expect(screen.queryByText(/PayFast/i)).toBeNull();
  expect(screen.getByText(/No online payment is required/i)).toBeTruthy();
});

test("submits a contact order and shows the confirmation message", async () => {
  createOrderMock.mockResolvedValueOnce({
    data: { orderNumber: "ZV-TEST-1001" },
  });
  renderCheckout();

  await waitFor(() => expect(fieldValue("fullName")).toBe("Ahmed Raza"));
  fireEvent.click(screen.getByRole("button", { name: /Place Order/i }));

  await waitFor(() =>
    expect(screen.getByText(/Our team will contact you soon/i)).toBeTruthy(),
  );
  expect(createOrderMock).toHaveBeenCalledWith(
    expect.objectContaining({ paymentMethod: "CONTACT" }),
  );
});

test("guests can place an order with sign-in remaining optional", async () => {
  authState.guest = true;
  createOrderMock.mockResolvedValueOnce({
    data: { orderNumber: "ZV-GUEST-1001" },
  });
  renderCheckout();
  expect(screen.getByText(/An account is optional/)).toBeTruthy();
  expect(
    screen.getByRole("link", { name: "sign in" }).getAttribute("href"),
  ).toBe("/login?next=%2Fcheckout");
  for (const [name, value] of Object.entries({
    fullName: "Guest Shopper",
    email: "guest@example.com",
    phone: "03001234567",
    addressLine1: "House 1",
    city: "Karachi",
  })) {
    fireEvent.change(document.querySelector(`[name="${name}"]`), {
      target: { value },
    });
  }
  fireEvent.click(screen.getByRole("button", { name: /Place Order/i }));
  await screen.findByText(/Our team will contact you soon/i);
  expect(createOrderMock).toHaveBeenCalledWith(
    expect.objectContaining({
      customer: {
        name: "Guest Shopper",
        email: "guest@example.com",
        phone: "03001234567",
      },
      paymentMethod: "CONTACT",
    }),
  );
});

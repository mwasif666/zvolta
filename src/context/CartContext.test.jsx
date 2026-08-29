// @vitest-environment jsdom
import { act, cleanup, render, screen, waitFor } from "@testing-library/react";
import { useEffect } from "react";
import { afterEach, beforeEach, expect, test, vi } from "vitest";
import { AuthProvider, useAuth } from "./AuthContext";
import { CartProvider, useCart } from "./CartContext";

const authApi = { login: vi.fn(), logout: vi.fn(), me: vi.fn() };
const cartApi = {
  get: vi.fn(),
  sync: vi.fn(),
  applyCoupon: vi.fn(),
  removeCoupon: vi.fn(),
  addItem: vi.fn(),
  updateItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};
let storedToken = "";

vi.mock("../services/api", () => ({
  authApi: {
    login: (...args) => authApi.login(...args),
    logout: (...args) => authApi.logout(...args),
    me: (...args) => authApi.me(...args),
  },
  cartApi: {
    get: (...args) => cartApi.get(...args),
    sync: (...args) => cartApi.sync(...args),
    applyCoupon: (...args) => cartApi.applyCoupon(...args),
    removeCoupon: (...args) => cartApi.removeCoupon(...args),
    addItem: (...args) => cartApi.addItem(...args),
    updateItem: (...args) => cartApi.updateItem(...args),
    removeItem: (...args) => cartApi.removeItem(...args),
    clear: (...args) => cartApi.clear(...args),
  },
  readAuthToken: () => storedToken,
  writeAuthToken: (token) => {
    storedToken = token || "";
  },
}));

const guestItem = {
  productId: "p1",
  slug: "zv-home-7kw",
  title: "ZVolta Smart 7kW Charger",
  sku: "ZV-HOME-7KW",
  image: "/img.png",
  price: 149999,
  originalPrice: 149999,
  stock: 4,
  quantity: 2,
};

function serverCart({ discountTotal = 0, code = "" } = {}) {
  return {
    data: {
      items: [
        {
          product: {
            _id: "p1",
            title: "ZVolta Smart 7kW Charger",
            slug: "zv-home-7kw",
            sku: "ZV-HOME-7KW",
            images: ["/server-img.png"],
            price: 140000,
            originPrice: 149999,
            stock: 4,
          },
          quantity: 2,
          price: 140000,
        },
      ],
      subtotal: 280000,
      discountTotal,
      appliedCoupon: code ? { code, discountAmount: discountTotal } : null,
      couponError: "",
      grandTotal: 280000 - discountTotal,
    },
  };
}

let cart;
let auth;

// The latest context values are published from an effect so the probe stays a
// pure component.
function publish(next) {
  cart = next.cart;
  auth = next.auth;
}

function Probe() {
  const cartValue = useCart();
  const authValue = useAuth();

  useEffect(() => {
    publish({ cart: cartValue, auth: authValue });
  }, [authValue, cartValue]);

  return (
    <div>
      <span data-testid="subtotal">{cartValue.subtotal}</span>
      <span data-testid="discount">{cartValue.discountTotal}</span>
      <span data-testid="total">{cartValue.grandTotal}</span>
      <span data-testid="coupon">{cartValue.coupon?.code || "none"}</span>
      <span data-testid="server">{String(cartValue.isServerCart)}</span>
    </div>
  );
}

function renderApp() {
  return render(
    <AuthProvider>
      <CartProvider>
        <Probe />
      </CartProvider>
    </AuthProvider>,
  );
}

beforeEach(() => {
  storedToken = "";
  let bin = { "zvolta-cart-v1": JSON.stringify([guestItem]) };
  vi.stubGlobal("localStorage", {
    getItem: (key) => bin[key] ?? null,
    setItem: (key, value) => {
      bin[key] = value;
    },
    removeItem: (key) => {
      delete bin[key];
    },
  });
});

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  vi.clearAllMocks();
});

test("a guest cart is priced locally and exposes no coupon", () => {
  renderApp();

  expect(screen.getByTestId("server").textContent).toBe("false");
  expect(screen.getByTestId("subtotal").textContent).toBe("299998");
  expect(screen.getByTestId("coupon").textContent).toBe("none");
  expect(cartApi.sync).not.toHaveBeenCalled();
});

test("signing in merges the guest cart into the account cart", async () => {
  authApi.login.mockResolvedValue({
    data: { _id: "u1", name: "Ahmed", email: "ahmed@example.com" },
    token: "jwt-token",
  });
  cartApi.sync.mockResolvedValue(serverCart());
  renderApp();

  await act(async () => {
    await auth.login({ email: "ahmed@example.com", password: "secret1" });
  });

  await waitFor(() =>
    expect(screen.getByTestId("server").textContent).toBe("true"),
  );
  expect(cartApi.sync).toHaveBeenCalledWith({
    items: [{ product: "p1", quantity: 2 }],
  });
  // Server pricing replaces the stored snapshot.
  expect(screen.getByTestId("subtotal").textContent).toBe("280000");
  expect(cart.items[0].image).toBe("/server-img.png");
  expect(storedToken).toBe("jwt-token");
});

test("applying a coupon takes the discount from the server cart", async () => {
  authApi.login.mockResolvedValue({
    data: { _id: "u1", name: "Ahmed", email: "ahmed@example.com" },
    token: "jwt-token",
  });
  cartApi.sync.mockResolvedValue(serverCart());
  cartApi.applyCoupon.mockResolvedValue(
    serverCart({ discountTotal: 28000, code: "ZVOLTA10" }),
  );
  renderApp();

  await act(async () => {
    await auth.login({ email: "ahmed@example.com", password: "secret1" });
  });
  await waitFor(() =>
    expect(screen.getByTestId("server").textContent).toBe("true"),
  );

  await act(async () => {
    await cart.applyCoupon("ZVOLTA10");
  });

  expect(cartApi.applyCoupon).toHaveBeenCalledWith("ZVOLTA10");
  expect(screen.getByTestId("coupon").textContent).toBe("ZVOLTA10");
  expect(screen.getByTestId("discount").textContent).toBe("28000");
  expect(screen.getByTestId("total").textContent).toBe("252000");
});

test("a rejected coupon surfaces the API message and keeps the cart", async () => {
  authApi.login.mockResolvedValue({
    data: { _id: "u1", name: "Ahmed", email: "ahmed@example.com" },
    token: "jwt-token",
  });
  cartApi.sync.mockResolvedValue(serverCart());
  cartApi.applyCoupon.mockRejectedValue(new Error("Coupon has expired"));
  renderApp();

  await act(async () => {
    await auth.login({ email: "ahmed@example.com", password: "secret1" });
  });
  await waitFor(() =>
    expect(screen.getByTestId("server").textContent).toBe("true"),
  );

  await act(async () => {
    await expect(cart.applyCoupon("OLD")).rejects.toThrow("Coupon has expired");
  });

  expect(cart.cartError).toBe("Coupon has expired");
  expect(screen.getByTestId("subtotal").textContent).toBe("280000");
});

test("an established session reads the account cart instead of re-merging", async () => {
  storedToken = "jwt-token";
  localStorage.setItem("zvolta-cart-owner-v1", "u1");
  authApi.me.mockResolvedValue({
    data: { _id: "u1", name: "Ahmed", email: "ahmed@example.com" },
  });
  cartApi.get.mockResolvedValue(serverCart());
  renderApp();

  await waitFor(() =>
    expect(screen.getByTestId("server").textContent).toBe("true"),
  );
  expect(cartApi.get).toHaveBeenCalled();
  expect(cartApi.sync).not.toHaveBeenCalled();
});

test("signing out clears the local cart so it cannot reach another account", async () => {
  authApi.login.mockResolvedValue({
    data: { _id: "u1", name: "Ahmed", email: "ahmed@example.com" },
    token: "jwt-token",
  });
  authApi.logout.mockResolvedValue({ success: true });
  cartApi.sync.mockResolvedValue(serverCart());
  renderApp();

  await act(async () => {
    await auth.login({ email: "ahmed@example.com", password: "secret1" });
  });
  await waitFor(() =>
    expect(screen.getByTestId("server").textContent).toBe("true"),
  );

  await act(async () => {
    await auth.logout();
  });

  await waitFor(() => expect(cart.items).toHaveLength(0));
  expect(localStorage.getItem("zvolta-cart-owner-v1")).toBe(null);
});

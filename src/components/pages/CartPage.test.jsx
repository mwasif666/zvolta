// @vitest-environment jsdom
import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, expect, test, vi } from "vitest";
import { CartProvider } from "../../context/CartContext";
import CartPage from "./CartPage";

const product = vi.fn();

vi.mock("../../services/api", () => ({
  commerceApi: {
    product: (...args) => product(...args),
    settings: () => Promise.resolve({ data: null }),
  },
}));

const storedItem = {
  productId: "1",
  slug: "zv-home-7kw",
  title: "ZVolta Smart 7kW Charger",
  sku: "ZV-HOME-7KW",
  image: "/img.png",
  price: 149999,
  originalPrice: 149999,
  stock: 4,
  quantity: 2,
};

function renderCart() {
  let storedCart = JSON.stringify([storedItem]);
  vi.stubGlobal("localStorage", {
    getItem: () => storedCart,
    setItem: (_key, value) => {
      storedCart = value;
    },
  });

  return render(
    <MemoryRouter>
      <CartProvider>
        <CartPage />
      </CartProvider>
    </MemoryRouter>,
  );
}

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  product.mockReset();
});

test("shows the live price instead of the stored snapshot", async () => {
  product.mockResolvedValue({
    data: { ...storedItem, price: 120000, discountPrice: 0, stock: 4 },
  });
  renderCart();

  expect(
    await screen.findByText("Price updated from Rs. 149,999"),
  ).toBeTruthy();
  // Live unit price and the recomputed 2 x 120,000 total.
  expect(screen.getAllByText("Rs. 120,000").length).toBeGreaterThan(0);
  expect(screen.getAllByText("Rs. 240,000").length).toBeGreaterThan(0);
  expect(product).toHaveBeenCalledWith("zv-home-7kw");
});

test("blocks checkout when live stock is gone", async () => {
  product.mockResolvedValue({
    data: { ...storedItem, price: 149999, discountPrice: 0, stock: 0 },
  });
  renderCart();

  expect(await screen.findByText("Out of stock right now")).toBeTruthy();
  expect(
    screen.getByText("Some items need attention before you can check out."),
  ).toBeTruthy();
  expect(screen.queryByRole("link", { name: /Continue to checkout/ })).toBe(
    null,
  );
});

test("flags an item that has been removed from the catalog", async () => {
  product.mockRejectedValue(
    Object.assign(new Error("Not found"), { status: 404 }),
  );
  renderCart();

  expect(
    await screen.findByText("No longer sold — remove it to continue"),
  ).toBeTruthy();
});

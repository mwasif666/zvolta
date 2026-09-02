// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { CartProvider, useCart } from "../../context/CartContext";
import { ProductCard } from "./ProductsPage";

const product = {
  _id: "charger-3kw",
  slug: "3kw-smart-ev-charger",
  title: "3kW Smart EV Charger",
  sku: "ZV-3KW",
  price: 74999,
  stock: 5,
  images: [{ url: "/img/3kw-charger/smart-3kw-charger.png" }],
  category: { name: "EV Chargers" },
};

function CartCount() {
  const { itemCount } = useCart();
  return <output aria-label="Cart count">{itemCount}</output>;
}

function renderProductCard(overrides = {}) {
  return render(
    <MemoryRouter initialEntries={["/products"]}>
      <CartProvider>
        <CartCount />
        <Routes>
          <Route
            path="/products"
            element={<ProductCard product={{ ...product, ...overrides }} />}
          />
        </Routes>
      </CartProvider>
    </MemoryRouter>,
  );
}

beforeEach(() => {
  let storedCart = null;
  vi.stubGlobal("localStorage", {
    getItem: () => storedCart,
    setItem: (_key, value) => {
      storedCart = value;
    },
  });
});

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

describe("ProductCard purchase actions", () => {
  it("adds an available product to the cart from the cart icon", () => {
    renderProductCard();

    fireEvent.click(
      screen.getByRole("button", {
        name: "Add 3kW Smart EV Charger to cart",
      }),
    );

    expect(screen.getByLabelText("Cart count").textContent).toBe("1");
    expect(
      screen.getByRole("button", {
        name: "3kW Smart EV Charger added to cart",
      }),
    ).toBeTruthy();
  });

  it("links to the product detail page", () => {
    renderProductCard();

    expect(
      screen.getByRole("link", { name: /view details/i }).getAttribute("href"),
    ).toBe("/3kw-charger");
  });

  it("disables the cart action when the product is out of stock", () => {
    renderProductCard({ stock: 0 });

    expect(
      screen.getByRole("button", {
        name: "3kW Smart EV Charger is out of stock",
      }).disabled,
    ).toBe(true);
  });
});

describe("ProductCard specification rows", () => {
  it("shows the charger power parsed from the product title", () => {
    renderProductCard();

    expect(screen.getByText("Upto 3kW")).toBeTruthy();
  });

  it("falls back to the SKU when no power rating is present", () => {
    renderProductCard({ title: "ZVolta Wall Mount", sku: "ZV-MOUNT" });

    expect(screen.getByText("Power")).toBeTruthy();
    expect(screen.getByText("ZV-MOUNT")).toBeTruthy();
  });

  it("shows the API-managed host card details", () => {
    renderProductCard({
      power: "Upto 3.3kW",
      bestFor: "Homes and bikes",
      location: "Indoor parking",
    });

    expect(screen.getByText("Upto 3.3kW")).toBeTruthy();
    expect(screen.getByText("Homes and bikes")).toBeTruthy();
    expect(screen.getByText("Indoor parking")).toBeTruthy();
  });
});

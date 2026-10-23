// @vitest-environment jsdom
import { act, cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, expect, test, vi } from "vitest";
import ProductsPage from "./ProductsPage";

const { allProducts } = vi.hoisted(() => ({ allProducts: vi.fn() }));
vi.mock("../../services/api", () => ({ commerceApi: { allProducts } }));
afterEach(() => {
  cleanup();
  vi.resetAllMocks();
});
function renderShop() {
  return render(
    <MemoryRouter>
      <ProductsPage />
    </MemoryRouter>,
  );
}

test("pending API products show card skeletons alongside the available CITA catalogue", async () => {
  let resolve;
  allProducts.mockImplementation(
    () =>
      new Promise((done) => {
        resolve = done;
      }),
  );
  renderShop();
  expect(screen.getByText("Loading products…")).toBeTruthy();
  expect(document.querySelectorAll(".product-card-skeleton").length).toBe(3);
  expect(document.querySelectorAll(".cita-shop-card").length).toBeGreaterThan(
    0,
  );
  await act(async () =>
    resolve({
      data: [
        {
          _id: "p1",
          title: "ZVolta Charger",
          slug: "zvolta-charger",
          brand: "ZVolta",
          price: 1000,
          stock: 5,
          images: [{ url: "/charger.png" }],
        },
      ],
    }),
  );
  expect(document.querySelectorAll(".product-card-skeleton").length).toBe(0);
  expect(screen.getByRole("heading", { name: "ZVolta Charger" })).toBeTruthy();
  expect(document.querySelector('[aria-busy="true"]')).toBeNull();
});

test("a failed API request replaces skeletons with the existing recovery message", async () => {
  let reject;
  allProducts.mockImplementation(
    () =>
      new Promise((resolve, fail) => {
        reject = fail;
      }),
  );
  renderShop();
  await act(async () => reject(new Error("Network unavailable")));
  expect(document.querySelectorAll(".product-card-skeleton").length).toBe(0);
  expect(
    screen.getByText(/live products are temporarily unavailable/),
  ).toBeTruthy();
  expect(document.querySelectorAll(".cita-shop-card").length).toBeGreaterThan(
    0,
  );
});

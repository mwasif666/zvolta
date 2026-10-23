// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, expect, test, vi } from "vitest";
import ProductsPage from "./ProductsPage";
import { citaChargers } from "../../data/citaChargers";

const { allProducts } = vi.hoisted(() => ({ allProducts: vi.fn() }));
vi.mock("../../services/api", () => ({ commerceApi: { allProducts } }));
const products = [
  {
    _id: "ac",
    title: "ZVolta Home 7kW",
    slug: "home-7",
    chargerType: "ac",
    price: 1000,
    stock: 3,
  },
  {
    _id: "dc",
    title: "ZVolta Rapid 60kW DC",
    slug: "rapid-60",
    chargerType: "dc",
    price: 5000,
    stock: 3,
  },
  {
    _id: "adapter",
    title: "ZVolta DC Adapter",
    slug: "adapter",
    chargerType: "accessory",
    price: 100,
    stock: 3,
  },
  {
    _id: "duplicate-cita",
    title: "CITA Smart 30 DC",
    slug: "cita-duplicate",
    brand: "CITA",
    price: 6000,
  },
];
afterEach(() => {
  cleanup();
  vi.resetAllMocks();
});
function renderShop(url = "/products") {
  allProducts.mockResolvedValue({ data: products });
  return render(
    <MemoryRouter initialEntries={[url]}>
      <ProductsPage />
    </MemoryRouter>,
  );
}
const cards = () => [
  ...document.querySelectorAll("#shop-product-grid > article"),
];
async function waitForCatalogue() {
  await screen.findByRole("heading", { name: "ZVolta Home 7kW" });
}

test("All uses one mixed grid and avoids duplicating API CITA variants", async () => {
  renderShop();
  await waitForCatalogue();
  expect(document.querySelectorAll("#shop-product-grid")).toHaveLength(1);
  expect(cards()).toHaveLength(citaChargers.length + 3);
  expect(cards()[0].textContent).toContain("ZVolta Home 7kW");
  expect(cards()[1].textContent).toContain(citaChargers[0].name);
  expect(cards()[2].textContent).toContain("ZVolta Rapid 60kW DC");
});

test("brand filters show only the selected brand without another API call", async () => {
  renderShop();
  await waitForCatalogue();
  fireEvent.click(screen.getByRole("button", { name: "ZVolta", exact: true }));
  expect(cards()).toHaveLength(3);
  expect(document.querySelectorAll(".cita-shop-card")).toHaveLength(0);
  fireEvent.click(screen.getByRole("button", { name: "CITA EV", exact: true }));
  expect(cards()).toHaveLength(citaChargers.length);
  expect(document.querySelectorAll(".cita-shop-card")).toHaveLength(
    citaChargers.length,
  );
  expect(allProducts).toHaveBeenCalledTimes(1);
});

test("DC filter includes both brands' chargers and excludes AC models and DC accessories", async () => {
  renderShop();
  await waitForCatalogue();
  fireEvent.click(
    screen.getByRole("button", { name: "DC Chargers", exact: true }),
  );
  expect(cards()).toHaveLength(4);
  expect(
    screen.getByRole("heading", { name: "ZVolta Rapid 60kW DC" }),
  ).toBeTruthy();
  expect(
    screen.getByRole("heading", { name: "CITA Smart 30 DC" }),
  ).toBeTruthy();
  expect(screen.queryByRole("heading", { name: "ZVolta Home 7kW" })).toBeNull();
  expect(
    screen.queryByRole("heading", { name: "ZVolta DC Adapter" }),
  ).toBeNull();
});

test("a saved filter and search restore together, and clear keeps the brand selected", async () => {
  renderShop("/products?filter=cita&q=Smart+30");
  await screen.findByRole("heading", { name: "CITA Smart 30 DC" });
  expect(cards()).toHaveLength(1);
  expect(
    screen
      .getByRole("button", { name: "CITA EV", exact: true })
      .getAttribute("aria-pressed"),
  ).toBe("true");
  fireEvent.click(screen.getByRole("button", { name: "Clear product search" }));
  expect(cards()).toHaveLength(citaChargers.length);
  expect(document.activeElement).toBe(screen.getByRole("searchbox"));
});

test("no results offers a reset to all products", async () => {
  renderShop();
  await waitForCatalogue();
  fireEvent.click(screen.getByRole("button", { name: "ZVolta", exact: true }));
  fireEvent.change(screen.getByRole("searchbox"), {
    target: { value: "no-such-product" },
  });
  expect(
    screen.getByRole("heading", { name: "No products found" }),
  ).toBeTruthy();
  fireEvent.click(screen.getByRole("button", { name: "Show all products" }));
  expect(cards()).toHaveLength(citaChargers.length + 3);
  expect(screen.getByRole("searchbox").value).toBe("");
});

test("CITA can be browsed while live products are still loading", () => {
  allProducts.mockImplementation(() => new Promise(() => {}));
  render(
    <MemoryRouter>
      <ProductsPage />
    </MemoryRouter>,
  );
  fireEvent.click(screen.getByRole("button", { name: "CITA EV", exact: true }));
  expect(document.querySelectorAll(".product-card-skeleton")).toHaveLength(0);
  expect(cards()).toHaveLength(citaChargers.length);
  fireEvent.click(screen.getByRole("button", { name: "ZVolta", exact: true }));
  expect(document.querySelectorAll(".product-card-skeleton")).toHaveLength(3);
});

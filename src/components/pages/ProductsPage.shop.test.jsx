// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { citaChargers } from "../../data/citaChargers";
import { CITA_SHOP_DC_SLUGS, getApprovedCitaShopPrices } from "./ProductsPage";

describe("CITA Shop PDF-only DC product catalog", () => {
  it("has exactly the three DC families from the 2026 company profile", () => {
    expect(CITA_SHOP_DC_SLUGS).toEqual([
      "smart-30-dc",
      "smart-dc-eco",
      "smart-dc-pro",
    ]);
    const selected = citaChargers.filter((item) =>
      CITA_SHOP_DC_SLUGS.includes(item.slug),
    );
    expect(selected.map((item) => item.name)).toEqual([
      "CITA Smart 30 DC",
      "CITA Smart DC Eco",
      "CITA Smart DC Pro",
    ]);
    for (const item of selected) {
      expect(item.productImage).toMatch(/^\/CITA_Charger_Images\//);
      expect(item.specs.length).toBeGreaterThan(5);
    }
  });

  it("rejects unrelated 60/90kW products and wrong-brand prices", () => {
    const eco = citaChargers.find((item) => item.slug === "smart-dc-eco");
    expect(
      getApprovedCitaShopPrices(
        [
          {
            title: "ZVolta 60 kW DC Charger",
            power: "60 kW",
            chargerType: "dc",
            price: 999,
          },
          {
            title: "ZVolta 90 kW DC Charger",
            power: "90 kW",
            chargerType: "dc",
            price: 999,
          },
          {
            title: "ZVolta 80 kW DC Charger",
            power: "80 kW",
            chargerType: "dc",
            price: 999,
          },
          {
            title: "CITA Smart DC Eco 120 kW",
            power: "120 kW",
            chargerType: "dc",
            price: 3780000,
          },
        ],
        eco,
      ),
    ).toEqual([{ power: "120 kW", price: 3780000 }]);
  });

  it("does not invent a product price if API data is unavailable", () => {
    const charger = citaChargers.find((item) => item.slug === "smart-30-dc");
    expect(getApprovedCitaShopPrices(null, charger)).toEqual([]);
  });
});

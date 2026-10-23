import { describe, expect, it } from "vitest";
import {
  CITA_SHOP_CHARGERS,
  getZvoltaShopProducts,
} from "./unifiedShopCatalog";

describe("Unified Shop catalogue", () => {
  it("lists all original CITA charger families, AC and DC", () => {
    expect(CITA_SHOP_CHARGERS).toHaveLength(10);
    expect(
      CITA_SHOP_CHARGERS.filter((c) => c.slug.includes("dc")),
    ).toHaveLength(3);
    expect(
      CITA_SHOP_CHARGERS.find((c) => c.slug === "smart-pro-7"),
    ).toBeTruthy();
    expect(
      CITA_SHOP_CHARGERS.find((c) => c.slug === "smart-dc-pro"),
    ).toBeTruthy();
    for (const charger of CITA_SHOP_CHARGERS) {
      expect(charger.productImage).toMatch(/^\/CITA_Charger_Images\//);
    }
  });

  it("preserves every ZVolta backend product while avoiding duplicate CITA variants", () => {
    const all = [
      { _id: "1", title: "ZVolta Smart 3kW Charger" },
      { _id: "2", title: "ZVolta DC 60kW Charger" },
      { _id: "3", title: "CITA Smart DC Eco 120kW" },
      { _id: "4", title: "ZVolta Business 22kW Charger" },
      { _id: "2", title: "ZVolta DC 60kW Charger" },
      { _id: "5", title: "CITA Smart DC Pro", brand: "CITA" },
    ];
    expect(getZvoltaShopProducts(all).map((p) => p._id)).toEqual([
      "1",
      "2",
      "4",
    ]);
    expect(getZvoltaShopProducts(null)).toEqual([]);
  });
});

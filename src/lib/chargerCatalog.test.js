import { describe, expect, it } from "vitest";
import {
  findChargerProduct,
  getChargerCardDetails,
  getChargerDetailHref,
} from "./chargerCatalog";

describe("charger catalog mapping", () => {
  it("matches products using the admin-managed power field", () => {
    const product = { power: "Upto 7kW", title: "Connected charger" };

    expect(findChargerProduct([product], "7kW Charger")).toBe(product);
  });

  it("routes charger products to their existing rich detail pages", () => {
    expect(getChargerDetailHref({ title: "ZVolta Business 22kW" })).toBe(
      "/22kw-charger",
    );
  });

  it("uses a supported title rating when the admin power label is more exact", () => {
    expect(
      getChargerDetailHref({
        power: "Upto 3.3kW",
        title: "ZVolta Smart 3kW Charger",
      }),
    ).toBe("/3kw-charger");
  });

  it("prefers API-managed card details and keeps legacy fallbacks", () => {
    expect(
      getChargerCardDetails({
        sku: "ZV-HOME-3KW",
        bestFor: "Daily commuters",
      }),
    ).toEqual({
      power: "Upto 3kW",
      bestFor: "Daily commuters",
      location: "Homes, Shops & Small Offices",
    });
  });
});

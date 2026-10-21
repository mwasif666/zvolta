import { describe, expect, it } from "vitest";
import { selectHostChargers } from "./hostChargerSelection";

const product = (title, extra = {}) => ({ title, ...extra });

describe("Host-only approved charger models", () => {
  it("renders only Business 22kW, Smart 7kW and Smart 3kW in that order", () => {
    const products = [
      product("CITA Smart Pro 22"),
      product("ZVolta Smart 3kW Charger", { power: "Upto 3kW" }),
      product("ZVolta Business 22kW Charger"),
      product("ZVolta Smart 11kW Charger"),
      product("ZVolta Smart 7kW Charger"),
      product("ZVolta Business 50kW Charger"),
    ];
    expect(selectHostChargers(products).map((item) => item.title)).toEqual([
      "ZVolta Business 22kW Charger",
      "ZVolta Smart 7kW Charger",
      "ZVolta Smart 3kW Charger",
    ]);
  });
  it("does not substitute a CITA charger or round 7.4 kW to 7 kW", () => {
    expect(selectHostChargers([
      product("CITA Smart Pro 7kW"),
      product("ZVolta Smart 7.4kW Charger"),
      product("ZVolta Smart 3kW Charger"),
    ])).toEqual([product("ZVolta Smart 3kW Charger")]);
  });
  it("prefers the exact approved name over a variant with the same rating", () => {
    const products = [
      product("ZVolta Smart 7kW Charger Pro"),
      product("ZVolta Smart 7kW Charger"),
    ];
    expect(selectHostChargers(products)).toEqual([products[1]]);
  });
});

import { describe, expect, it } from "vitest";
import {
  getCanonicalPathname,
  getRouteLocationKey,
  routeEntries,
} from "./routes";

describe("route registry", () => {
  it("contains unique production paths", () => {
    const paths = routeEntries.flatMap((route) => route.paths);
    expect(new Set(paths).size).toBe(paths.length);
    expect(paths).not.toContain("/testing");
  });

  it("registers business routes that were previously unreachable", () => {
    const paths = routeEntries.flatMap((route) => route.paths);
    expect(paths).toEqual(
      expect.arrayContaining([
        "/vehicles",
        "/driver-network",
        "/invest",
        "/invest-form",
        "/dc-chargers",
      ]),
    );
  });

  it("canonicalizes the home alias", () => {
    expect(getCanonicalPathname("/home")).toBe("/");
  });
});

it("keeps the Shop mounted when local filters or search change", () => {
  expect(
    getRouteLocationKey({
      pathname: "/products",
      search: "?filter=dc&q=charger",
    }),
  ).toBe("/products");
  expect(
    getRouteLocationKey({ pathname: "/products", search: "?filter=cita" }),
  ).toBe("/products");
  expect(
    getRouteLocationKey({ pathname: "/login", search: "?next=/checkout" }),
  ).toBe("/login?next=/checkout");
});

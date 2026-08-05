import { describe, expect, it } from "vitest";
import { getCanonicalPathname, routeEntries } from "./routes";

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
      ]),
    );
  });

  it("canonicalizes the home alias", () => {
    expect(getCanonicalPathname("/home")).toBe("/");
  });
});

import { describe, expect, test } from "vitest";
import { formatStoreCurrency } from "./StorefrontSettingsContext";

describe("formatStoreCurrency", () => {
  test("uses a custom symbol when the configured code is not supported", () => {
    expect(
      formatStoreCurrency(12500, {
        code: "INVALID",
        symbol: "ZV",
        position: "after",
      }),
    ).toBe("12,500 ZV");
  });
});

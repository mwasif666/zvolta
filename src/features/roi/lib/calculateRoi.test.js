import { describe, expect, it } from "vitest";
import { calculateRoi } from "./calculateRoi";

describe("calculateRoi", () => {
  it("calculates a base 3.3 kW charging investment", () => {
    const result = calculateRoi({
      avgConsumption: 1,
      baseCost: 75_000,
      baseUsage: 10,
      marginPerUnit: 5,
      moduleCost: 75_000,
      moduleSize: 2,
      moduleUsages: [],
    });

    expect(result.totalInvestment).toBe(75_000);
    expect(result.annualUnits).toBe(3_650);
    expect(result.annualRevenue).toBe(18_250);
    expect(result.annualRoi).toBeCloseTo(24.33, 2);
  });

  it("handles zero revenue without infinite payback values", () => {
    const result = calculateRoi({
      avgConsumption: 0,
      baseCost: 75_000,
      baseUsage: 0,
      marginPerUnit: 0,
      moduleCost: 75_000,
      moduleSize: 2,
      moduleUsages: [],
    });

    expect(result.annualRevenue).toBe(0);
    expect(result.paybackMonths).toBe(0);
    expect(result.breakEvenUnits).toBe(0);
  });
});

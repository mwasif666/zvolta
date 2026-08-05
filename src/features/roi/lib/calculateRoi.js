export function calculateRoi({
  avgConsumption,
  baseCost,
  baseUsage,
  marginPerUnit,
  moduleCost,
  moduleSize,
  moduleUsages,
}) {
  const totalInvestment = baseCost + moduleCost * moduleUsages.length;
  const totalChargers = 1 + moduleUsages.length * moduleSize;
  const moduleHours = moduleUsages.reduce(
    (sum, hours) => sum + hours * moduleSize,
    0,
  );
  const totalHoursPerDay = baseUsage + moduleHours;
  const annualUnits = totalHoursPerDay * avgConsumption * 365;
  const annualRevenue = annualUnits * marginPerUnit;
  const fiveYearRevenue = annualRevenue * 5;

  return {
    annualRevenue,
    annualRoi:
      totalInvestment > 0 ? (annualRevenue / totalInvestment) * 100 : 0,
    annualUnits,
    breakEvenUnits: marginPerUnit > 0 ? totalInvestment / marginPerUnit : 0,
    dailyRevenue: annualRevenue / 365,
    fiveYearProfit: fiveYearRevenue - totalInvestment,
    fiveYearRevenue,
    monthlyRevenue: annualRevenue / 12,
    paybackMonths:
      annualRevenue > 0 ? (totalInvestment / annualRevenue) * 12 : 0,
    threeYearRevenue: annualRevenue * 3,
    totalChargers,
    totalInvestment,
  };
}

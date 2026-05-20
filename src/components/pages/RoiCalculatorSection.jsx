import { useMemo, useState } from "react";

const CHARGER_OPTIONS = {
  "3.3kw": {
    label: "3.3 kW Charger",
    baseCost: 75000,
    moduleCost: 75000,
    moduleSize: 2,
    maxConsumption: 3.3,
  },
  "7kw": {
    label: "7 kW Charger",
    baseCost: 200000,
    moduleCost: 150000,
    moduleSize: 1,
    maxConsumption: 7,
  },
};

function formatPKR(value) {
  return `Rs ${Math.round(value).toLocaleString("en-PK")}`;
}

function formatNumber(value) {
  return Number(value || 0).toLocaleString("en-PK", {
    maximumFractionDigits: 2,
  });
}

function formatPayback(months) {
  if (!Number.isFinite(months) || months <= 0) {
    return "N/A";
  }

  const years = Math.floor(months / 12);
  const remainingMonths = Math.round(months % 12);

  if (years > 0 && remainingMonths > 0) {
    return `${years} Year${years > 1 ? "s" : ""} ${remainingMonths} Month${
      remainingMonths > 1 ? "s" : ""
    }`;
  }

  if (years > 0) {
    return `${years} Year${years > 1 ? "s" : ""}`;
  }

  return `${remainingMonths} Month${remainingMonths > 1 ? "s" : ""}`;
}

export default function RoiCalculatorSection() {
  const [activeCharger, setActiveCharger] = useState("3.3kw");
  const [baseCost, setBaseCost] = useState(CHARGER_OPTIONS["3.3kw"].baseCost);
  const [moduleCost, setModuleCost] = useState(
    CHARGER_OPTIONS["3.3kw"].moduleCost,
  );
  const [marginPerUnit, setMarginPerUnit] = useState(5);
  const [avgConsumption, setAvgConsumption] = useState(1);
  const [baseUsage, setBaseUsage] = useState(10);
  const [moduleUsages, setModuleUsages] = useState([]);

  const option = CHARGER_OPTIONS[activeCharger];

  const results = useMemo(() => {
    const totalInvestment = baseCost + moduleCost * moduleUsages.length;
    const totalChargers = 1 + moduleUsages.length * option.moduleSize;
    const moduleHours = moduleUsages.reduce(
      (sum, hours) => sum + hours * option.moduleSize,
      0,
    );
    const totalHoursPerDay = baseUsage + moduleHours;
    const annualUnits = totalHoursPerDay * avgConsumption * 365;
    const annualRevenue = annualUnits * marginPerUnit;
    const monthlyRevenue = annualRevenue / 12;
    const dailyRevenue = annualRevenue / 365;
    const paybackMonths =
      annualRevenue > 0 ? (totalInvestment / annualRevenue) * 12 : 0;
    const annualRoi =
      totalInvestment > 0 ? (annualRevenue / totalInvestment) * 100 : 0;
    const fiveYearRevenue = annualRevenue * 5;

    return {
      annualRevenue,
      annualRoi,
      annualUnits,
      breakEvenUnits: marginPerUnit > 0 ? totalInvestment / marginPerUnit : 0,
      dailyRevenue,
      fiveYearProfit: fiveYearRevenue - totalInvestment,
      fiveYearRevenue,
      monthlyRevenue,
      paybackMonths,
      threeYearRevenue: annualRevenue * 3,
      totalChargers,
      totalInvestment,
    };
  }, [
    avgConsumption,
    baseCost,
    baseUsage,
    marginPerUnit,
    moduleCost,
    moduleUsages,
    option.moduleSize,
  ]);

  const switchCharger = (chargerKey) => {
    const nextOption = CHARGER_OPTIONS[chargerKey];

    setActiveCharger(chargerKey);
    setBaseCost(nextOption.baseCost);
    setModuleCost(nextOption.moduleCost);
    setAvgConsumption(1);
    setBaseUsage(10);
    setModuleUsages([]);
  };

  const updateModuleUsage = (index, value) => {
    setModuleUsages((current) =>
      current.map((usage, usageIndex) =>
        usageIndex === index ? value : usage,
      ),
    );
  };

  const addModule = () => {
    setModuleUsages((current) => [...current, 10]);
  };

  const removeModule = (index) => {
    setModuleUsages((current) =>
      current.filter((_, usageIndex) => usageIndex !== index),
    );
  };

  const inputClass =
    "h-12 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 text-white outline-none transition focus:border-emerald-500";

  return (
    <section
      id="roi-calculator"
      className="relative bg-[#050505] py-24 text-white"
    >
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-12 max-w-3xl">
          <div className="mb-4 inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-emerald-400">
            Investment Calculator
          </div>
          <h2 className="text-4xl font-display font-bold tracking-tight md:text-6xl">
            Invest in EV Charging Stations.
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-400">
            Estimate charger investment, yearly usage, payback period, and
            projected revenue for a ZVolta charging station.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {Object.entries(CHARGER_OPTIONS).map(([key, charger]) => (
            <button
              key={key}
              type="button"
              onClick={() => switchCharger(key)}
              className={`rounded-full border px-5 py-3 text-sm font-bold transition ${
                activeCharger === key
                  ? "border-emerald-400 bg-emerald-500 text-black"
                  : "border-white/10 bg-zinc-900 text-zinc-300 hover:border-emerald-500/60 hover:text-white"
              }`}
            >
              {charger.label}
            </button>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-white/10 bg-zinc-950 p-6 md:p-8">
            <h3 className="text-2xl font-bold">Investment Parameters</h3>
            <div className="mt-8 grid gap-5">
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-zinc-400">
                  Base Charger Cost
                </span>
                <input
                  className={inputClass}
                  min="0"
                  step="1000"
                  type="number"
                  value={baseCost}
                  onChange={(event) => setBaseCost(Number(event.target.value))}
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-zinc-400">
                  Additional Module Cost ({option.moduleSize} Charger
                  {option.moduleSize > 1 ? "s" : ""})
                </span>
                <input
                  className={inputClass}
                  min="0"
                  step="1000"
                  type="number"
                  value={moduleCost}
                  onChange={(event) =>
                    setModuleCost(Number(event.target.value))
                  }
                />
              </label>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-zinc-400">
                    Margin Per Unit
                  </span>
                  <input
                    className={inputClass}
                    min="0"
                    step="0.5"
                    type="number"
                    value={marginPerUnit}
                    onChange={(event) =>
                      setMarginPerUnit(Number(event.target.value))
                    }
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-zinc-400">
                    Consumption Per Hour
                  </span>
                  <input
                    className={inputClass}
                    max={option.maxConsumption}
                    min="0.1"
                    step="0.1"
                    type="number"
                    value={avgConsumption}
                    onChange={(event) =>
                      setAvgConsumption(Number(event.target.value))
                    }
                  />
                </label>
              </div>
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-zinc-400">
                  Base Charger Daily Usage
                </span>
                <input
                  className={inputClass}
                  max="24"
                  min="0"
                  step="0.5"
                  type="number"
                  value={baseUsage}
                  onChange={(event) => setBaseUsage(Number(event.target.value))}
                />
              </label>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <div className="flex items-center justify-between gap-4">
                <h4 className="font-bold text-white">Additional Modules</h4>
                <span className="text-sm text-zinc-500">
                  {moduleUsages.length} Module
                  {moduleUsages.length === 1 ? "" : "s"}
                </span>
              </div>
              <div className="mt-4 grid gap-3">
                {moduleUsages.map((usage, index) => (
                  <div
                    key={`${activeCharger}-${index}`}
                    className="grid gap-3 rounded-lg border border-white/10 bg-black p-4 sm:grid-cols-[1fr_auto]"
                  >
                    <label className="grid gap-2">
                      <span className="text-sm font-semibold text-zinc-400">
                        Module #{index + 1} Daily Usage
                      </span>
                      <input
                        className={inputClass}
                        max="24"
                        min="0"
                        step="0.5"
                        type="number"
                        value={usage}
                        onChange={(event) =>
                          updateModuleUsage(index, Number(event.target.value))
                        }
                      />
                    </label>
                    <button
                      type="button"
                      onClick={() => removeModule(index)}
                      className="self-end rounded-lg border border-red-500/30 px-4 py-3 text-sm font-bold text-red-300 transition hover:bg-red-500 hover:text-white"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={addModule}
                className="mt-4 w-full rounded-lg border border-dashed border-emerald-500/70 px-4 py-3 font-bold text-emerald-400 transition hover:bg-emerald-500 hover:text-black"
              >
                Add Module ({option.moduleSize} Charger
                {option.moduleSize > 1 ? "s" : ""})
              </button>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Total Investment", formatPKR(results.totalInvestment)],
                ["Annual Revenue", formatPKR(results.annualRevenue)],
                ["Monthly Revenue", formatPKR(results.monthlyRevenue)],
                ["Daily Revenue", formatPKR(results.dailyRevenue)],
                ["Total Units/Year", formatNumber(results.annualUnits)],
                ["Total Chargers", results.totalChargers],
                ["Payback Period", formatPayback(results.paybackMonths)],
                ["Annual ROI", `${formatNumber(results.annualRoi)}%`],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-lg border border-white/10 bg-zinc-950 p-5"
                >
                  <p className="text-sm font-semibold text-zinc-500">{label}</p>
                  <p className="mt-3 text-2xl font-bold text-white">{value}</p>
                </div>
              ))}
            </div>

            <div className="rounded-lg border border-white/10 bg-zinc-950 p-6">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-bold">ROI Progress</h3>
                <span className="text-sm font-semibold text-emerald-400">
                  {formatNumber(results.annualRoi)}%
                </span>
              </div>
              <div className="mt-5 h-4 overflow-hidden rounded-full bg-zinc-800">
                <div
                  className="h-full rounded-full bg-emerald-500 transition-all"
                  style={{ width: `${Math.min(results.annualRoi, 100)}%` }}
                />
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-zinc-950 p-6">
              <h3 className="text-xl font-bold">Investment Insights</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-zinc-500">3-Year Projection</p>
                  <p className="mt-1 text-lg font-bold">
                    {formatPKR(results.threeYearRevenue)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-zinc-500">5-Year Net Profit</p>
                  <p className="mt-1 text-lg font-bold">
                    {formatPKR(results.fiveYearProfit)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Break-even Units</p>
                  <p className="mt-1 text-lg font-bold">
                    {formatNumber(results.breakEvenUnits)} kWh
                  </p>
                </div>
                <div>
                  <p className="text-sm text-zinc-500">5-Year Revenue</p>
                  <p className="mt-1 text-lg font-bold">
                    {formatPKR(results.fiveYearRevenue)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

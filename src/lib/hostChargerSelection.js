import { parseChargerPower } from "./chargerCatalog";

/*
 * Host-only selection: exactly the three ZVolta models approved for the
 * Host page. Never use category-only matching (which added extra products).
 * Power may come from admin product.power, title, or SKU.
 */
const HOST_MODELS = [
  { rating: 22, qualifier: "business", name: "ZVolta Business 22kW Charger" },
  { rating: 7, qualifier: "smart", name: "ZVolta Smart 7kW Charger" },
  { rating: 3, qualifier: "smart", name: "ZVolta Smart 3kW Charger" },
];

function matchesHostModel(product, model) {
  const title = String(product?.title || "").toLowerCase();
  if (!/z\s*volta/.test(title) || !title.includes(model.qualifier)) {
    return false;
  }
  const titleRating = parseChargerPower(title);
  return titleRating === model.rating;
}

export function selectHostChargers(products) {
  return HOST_MODELS.flatMap((model) => {
    const matches = (products || []).filter((product) => matchesHostModel(product, model));
    if (!matches.length) return [];
    // Prefer the exact approved display name if duplicated in the catalog.
    const exact = matches.find(
      (product) => product.title?.trim().toLowerCase() === model.name.toLowerCase(),
    );
    return [exact || matches[0]];
  });
}

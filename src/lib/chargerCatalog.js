const POWER_PATTERN = /(\d+(?:\.\d+)?)\s*kw/i;
const CHARGER_ROUTES = new Map([
  [3, "/3kw-charger"],
  [7, "/7kw-charger"],
  [22, "/22kw-charger"],
]);
const CHARGER_DETAILS = new Map([
  [
    3,
    {
      power: "Upto 3kW",
      bestFor: "Two-Wheelers & Four-Wheelers",
      location: "Homes, Shops & Small Offices",
    },
  ],
  [
    7,
    {
      power: "Upto 7kW",
      bestFor: "Cars & Daily Charging",
      location: "Apartments, Workplaces & Commercial Spaces",
    },
  ],
  [
    22,
    {
      power: "Upto 22kW",
      bestFor: "High Traffic Charging",
      location: "Commercial, Public & Fleet Use",
    },
  ],
]);

export function parseChargerPower(text) {
  const match = POWER_PATTERN.exec(String(text || ""));
  return match ? Number(match[1]) : null;
}

export function findChargerProduct(products, title) {
  const power = parseChargerPower(title);

  if (power === null) return null;

  return (
    (products || []).find(
      (product) =>
        parseChargerPower(product?.power) === power ||
        parseChargerPower(product?.title) === power ||
        parseChargerPower(product?.sku) === power,
    ) || null
  );
}

export function getChargerDetailHref(product, fallbackHref = "/products") {
  const power = [product?.power, product?.title, product?.sku]
    .map(parseChargerPower)
    .find((rating) => CHARGER_ROUTES.has(rating));

  return CHARGER_ROUTES.get(power) || fallbackHref;
}

export function getChargerCardDetails(product, fallback = {}) {
  const powerRatings = [
    product?.power,
    product?.title,
    product?.sku,
    fallback.power,
    fallback.title,
  ].map(parseChargerPower);
  const powerRating =
    powerRatings.find((rating) => CHARGER_DETAILS.has(rating)) ??
    powerRatings.find((rating) => rating !== null);
  const defaults = CHARGER_DETAILS.get(powerRating) || {};

  return {
    power:
      product?.power ||
      fallback.power ||
      defaults.power ||
      product?.sku ||
      "EV charger",
    bestFor:
      product?.bestFor ||
      fallback.bestFor ||
      defaults.bestFor ||
      product?.category?.name ||
      "EV charging",
    location:
      product?.location ||
      fallback.location ||
      defaults.location ||
      "Contact us for site compatibility",
  };
}

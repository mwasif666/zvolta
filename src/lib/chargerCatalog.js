const POWER_PATTERN = /(\d+(?:\.\d+)?)\s*kw/i;

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
        parseChargerPower(product?.title) === power ||
        parseChargerPower(product?.sku) === power,
    ) || null
  );
}

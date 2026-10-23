import { citaChargers } from "../data/citaChargers";

// One original CITA card per model family (AC and DC).  The backend can
// separately contain CITA power variants; avoid repeating these as extra cards.
export const CITA_SHOP_CHARGERS = citaChargers;

export function isCitaProduct(product) {
  const title = String(product?.title || "");
  const brand = String(product?.brand?.name || product?.brand || "");
  return (
    /^cita(?:\s|\b)/i.test(title.trim()) || /^cita(?:\s|\b)/i.test(brand.trim())
  );
}

export function getZvoltaShopProducts(products) {
  const seen = new Set();
  return (products || []).filter((product) => {
    if (!product || isCitaProduct(product)) return false;
    // Don't drop genuine variants with different IDs, only API duplicates.
    const key = String(product._id || product.id || product.slug || "").trim();
    if (!key) return true;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

// Alternate brands while preserving each catalogue's existing product order.
export function getUnifiedShopItems(products) {
  const zvolta = getZvoltaShopProducts(products).map((product) => {
    const type = String(product.chargerType || "").toLowerCase();
    return {
      key: `zvolta-${product._id || product.id || product.slug || product.title}`,
      brand: "zvolta",
      isDc:
        type === "dc" ||
        (!["ac", "accessory"].includes(type) &&
          /\bdc\b/i.test(product.title || "")),
      searchText:
        `${product.title} ${product.shortDescription || ""} ${product.description || ""} ${product.power || ""}`.toLowerCase(),
      product,
    };
  });
  const cita = CITA_SHOP_CHARGERS.map((charger) => ({
    key: `cita-${charger.slug}`,
    brand: "cita",
    isDc: charger.slug.includes("-dc"),
    searchText:
      `${charger.name} ${charger.subtitle} ${charger.power} ${charger.description}`.toLowerCase(),
    product: charger,
  }));
  return Array.from(
    { length: Math.max(zvolta.length, cita.length) },
    (_, i) => [zvolta[i], cita[i]],
  )
    .flat()
    .filter(Boolean);
}

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

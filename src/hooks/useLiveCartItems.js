import { useCallback, useEffect, useMemo, useState } from "react";
import { useCart } from "../context/CartContext";
import { commerceApi } from "../services/api";
import { useCommerceData } from "./useCommerceData";

function toLivePatch(product) {
  return {
    title: product.title,
    sku: product.sku,
    image: product.images?.[0]?.url || "",
    price: Number(product.discountPrice || product.price || 0),
    originalPrice: Number(product.price || 0),
    stock: Number(product.stock || 0),
  };
}

/**
 * Reconciles the locally stored cart against the live catalog so the cart and
 * checkout show current prices and stock instead of the snapshot that was saved
 * when the item was added. The stored snapshot is refreshed as a side effect,
 * while quantities are left alone and only flagged so nothing changes silently.
 */
export function useLiveCartItems() {
  const { items, syncItems } = useCart();
  const slugKey = items.map((item) => item.slug || "").join("|");

  // Prices as they were when this page was opened, so "price updated" survives
  // the write-back that refreshes the stored snapshot.
  const [baselinePrices] = useState(() =>
    items.reduce((prices, item) => {
      prices[item.productId] = Number(item.price) || 0;
      return prices;
    }, {}),
  );

  const loader = useCallback(async () => {
    const slugs = slugKey ? slugKey.split("|") : [];
    const results = await Promise.allSettled(
      slugs.map((slug) =>
        slug
          ? commerceApi.product(slug)
          : Promise.reject(new Error("Missing product slug")),
      ),
    );

    return {
      data: slugs.reduce((catalog, slug, index) => {
        const result = results[index];
        catalog[slug] =
          result.status === "fulfilled" ? result.value.data || null : null;
        return catalog;
      }, {}),
    };
  }, [slugKey]);

  const { data, error, loading, refetch } = useCommerceData(loader, [slugKey]);

  useEffect(() => {
    if (!data) return;

    const updates = {};
    items.forEach((item) => {
      const product = data[item.slug];
      if (product) updates[item.productId] = toLivePatch(product);
    });

    if (Object.keys(updates).length) syncItems(updates);
  }, [data, items, syncItems]);

  const liveItems = useMemo(
    () =>
      items.map((item) => {
        const product = data ? data[item.slug] || null : null;
        const baseline = baselinePrices[item.productId] ?? item.price;

        if (!product) {
          return {
            ...item,
            previousPrice: baseline,
            unavailable: Boolean(data),
            outOfStock: false,
            exceedsStock: false,
            priceChanged: false,
          };
        }

        const live = toLivePatch(product);

        return {
          ...item,
          ...live,
          previousPrice: baseline,
          unavailable: false,
          outOfStock: live.stock <= 0,
          exceedsStock: live.stock > 0 && item.quantity > live.stock,
          priceChanged: live.price !== baseline,
        };
      }),
    [baselinePrices, data, items],
  );

  const liveSubtotal = liveItems.reduce(
    (sum, item) =>
      item.unavailable || item.outOfStock
        ? sum
        : sum + item.price * item.quantity,
    0,
  );

  return {
    liveItems,
    liveSubtotal,
    // Any of these would make the order fail, so checkout stays blocked.
    hasBlockingIssues: liveItems.some(
      (item) => item.unavailable || item.outOfStock || item.exceedsStock,
    ),
    priceUpdateCount: liveItems.filter((item) => item.priceChanged).length,
    synced: Boolean(data) && !loading,
    loading,
    error,
    refetch,
  };
}

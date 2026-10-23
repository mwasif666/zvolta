import { ContactMarquee } from "../commerce/ContactMarquee";
import { SkeletonImage } from "../SkeletonImage";
import { ProductCardSkeletons } from "../commerce/ProductCardSkeletons";
import { useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./ProductsPage.module.css";
import { commerceApi } from "../../services/api";
import { useCommerceData } from "../../hooks/useCommerceData";
import { useCart } from "../../context/CartContext";
import { citaChargers } from "../../data/citaChargers";
import { citaCardDetails } from "../../data/citaCardDetails";
import { getUnifiedShopItems } from "../../lib/unifiedShopCatalog";
import {
  getChargerCardDetails,
  getChargerDetailHref,
} from "../../lib/chargerCatalog";
import { SmartLink } from "../SmartLink";
import {
  defaultStorefrontSettings,
  formatStoreCurrency,
  useStorefrontSettings,
} from "../../context/StorefrontSettingsContext";

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

export function formatPkr(value) {
  return formatStoreCurrency(value, defaultStorefrontSettings.currency);
}

export function ProductCard({ product, index = 0 }) {
  const { addItem } = useCart();
  const { settings } = useStorefrontSettings();
  const [added, setAdded] = useState(false);
  const price = product.discountPrice || product.price;
  const isAvailable = Number(product.stock) > 0;
  const details = getChargerCardDetails(product);
  const detailHref = getChargerDetailHref(product);
  const cartLabel = isAvailable
    ? added
      ? `${product.title} added to cart`
      : `Add ${product.title} to cart`
    : `${product.title} is out of stock`;

  return (
    <article className="commerce-card">
      <span className="commerce-card__index">
        {String(index + 1).padStart(2, "0")}
      </span>
      {product.isNewArrival ? (
        <span className="commerce-card__badge">New</span>
      ) : null}
      <div className="commerce-card__intro">
        <span className={styles.brand}>ZVolta</span>
        <h2>
          <SmartLink href={detailHref}>{product.title}</SmartLink>
        </h2>
        <p>{product.shortDescription || product.description}</p>
      </div>
      <SmartLink
        className="commerce-card__art product-image-loading"
        href={detailHref}
      >
        <SkeletonImage
          skeletonTone="dark"
          loading="lazy"
          decoding="async"
          src={product.images?.[0]?.url}
          alt={product.images?.[0]?.alt || product.title}
        />
      </SmartLink>
      <div className="commerce-card__specs">
        <div className="commerce-card__spec-row">
          <span>Power</span>
          <strong>{details.power}</strong>
        </div>
        <div className="commerce-card__spec-row">
          <span>Best for</span>
          <strong>{details.bestFor}</strong>
        </div>
        <div className="commerce-card__spec-row">
          <span>Location</span>
          <strong>{details.location}</strong>
        </div>
        <div className="commerce-card__spec-row">
          <span>Price</span>
          {product.pricingTiers?.length ? (
            <span className="commerce-card__price-options">
              {product.pricingTiers.map((tier) => (
                <span key={`${tier.label}-${tier.price}`}>
                  <small>{tier.label}</small>
                  <strong>
                    {formatStoreCurrency(tier.price, settings.currency)}
                  </strong>
                </span>
              ))}
            </span>
          ) : (
            <strong>
              {formatStoreCurrency(price, settings.currency)}
              {product.discountPrice ? (
                <del>
                  {formatStoreCurrency(product.price, settings.currency)}
                </del>
              ) : null}
            </strong>
          )}
        </div>
      </div>
      <div className="commerce-card__actions">
        <SmartLink className="commerce-card__learn" href={detailHref}>
          View details
          <svg {...iconProps} className="h-4 w-4">
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </SmartLink>
        <button
          type="button"
          className={`commerce-card__cart ${added ? "is-added" : ""}`}
          aria-label={cartLabel}
          title={cartLabel}
          disabled={!isAvailable}
          onClick={() => {
            addItem(product);
            setAdded(true);
          }}
        >
          {added ? (
            <svg {...iconProps} className="h-5 w-5">
              <path d="m5 12 4 4L19 6" />
            </svg>
          ) : (
            <svg {...iconProps} className="h-5 w-5">
              <circle cx="9" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
              <path d="M3 4h2l2.4 10.2a2 2 0 0 0 2 1.5h7.8a2 2 0 0 0 2-1.6L21 7H6" />
            </svg>
          )}
        </button>
      </div>
    </article>
  );
}

// CITA EV 2026 lists all ten AC/DC families. Keep the original image,
// specifications and detailed pages; backend prices are a separate source.
export const CITA_SHOP_DC_SLUGS = [
  "smart-30-dc",
  "smart-dc-eco",
  "smart-dc-pro",
];
const BACKEND_CITA_POWER_VARIANTS = {
  "smart-30-dc": [30],
  "smart-dc-eco": [80, 120, 160],
  "smart-dc-pro": [200, 240, 280, 320, 360, 400, 440, 480],
};

export function getApprovedCitaShopPrices(products, charger) {
  const allowed = BACKEND_CITA_POWER_VARIANTS[charger.slug] || [];
  const pattern = {
    "smart-30-dc": /^CITA Smart 30 DC$/i,
    "smart-dc-eco": /^CITA Smart DC Eco\s+(\d+)\s*kW$/i,
    "smart-dc-pro": /^CITA Smart DC Pro\s+(\d+)\s*kW$/i,
  }[charger.slug];
  if (!pattern || !allowed.length) return [];
  return (products || [])
    .filter(
      (product) =>
        product.chargerType === "dc" &&
        pattern.test(String(product.title || "")),
    )
    .filter((product) => {
      const power = Number.parseInt(
        String(product.power || product.title || ""),
        10,
      );
      return allowed.includes(power);
    })
    .map((product) => ({
      power: product.power,
      price:
        Number(product.discountPrice) > 0
          ? Number(product.discountPrice)
          : Number(product.price),
    }))
    .filter(({ price }) => Number.isFinite(price) && price > 0);
}

function CitaShopCard({ charger, index, liveProducts }) {
  const { settings } = useStorefrontSettings();
  const prices = getApprovedCitaShopPrices(liveProducts, charger);
  const fromPrice = prices.length
    ? Math.min(...prices.map(({ price }) => price))
    : null;
  const specifications = Object.fromEntries(charger.specs);
  const href = `/cita-ev-chargers/${charger.slug}`;
  const bestFor = citaCardDetails[charger.slug]?.bestFor || "EV charging";
  const location =
    citaCardDetails[charger.slug]?.location || "Ask about installation";

  return (
    <article className="commerce-card cita-shop-card" data-model={charger.slug}>
      <span className="commerce-card__index">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="commerce-card__intro">
        <span className={styles.brand}>CITA EV</span>
        <h2>
          <SmartLink href={href}>{charger.name}</SmartLink>
        </h2>
        <p>{charger.description}</p>
      </div>
      <SmartLink
        className="commerce-card__art product-image-loading"
        href={href}
        aria-label={`View full technical specifications for ${charger.name}`}
      >
        <SkeletonImage
          skeletonTone="dark"
          src={charger.productImage}
          alt={charger.name}
          loading="lazy"
          decoding="async"
        />
      </SmartLink>
      <div className="commerce-card__specs">
        <div className="commerce-card__spec-row">
          <span>Power</span>
          <strong>{charger.power}</strong>
        </div>
        <div className="commerce-card__spec-row">
          <span>Best for</span>
          <strong>{bestFor}</strong>
        </div>
        <div className="commerce-card__spec-row">
          <span>Location</span>
          <strong>{location}</strong>
        </div>
        {specifications["Protection Rating"] ? (
          <div className="commerce-card__spec-row">
            <span>Protection</span>
            <strong>{specifications["Protection Rating"]}</strong>
          </div>
        ) : null}
        <div className="commerce-card__spec-row">
          <span>Warranty</span>
          <strong>{charger.warranty}</strong>
        </div>
        <div className="commerce-card__spec-row">
          <span>Price</span>
          <strong>
            {fromPrice === null
              ? "Enquire for pricing"
              : `From ${formatStoreCurrency(fromPrice, settings.currency)}`}
          </strong>
        </div>
      </div>
      <div className="commerce-card__actions">
        <SmartLink className="commerce-card__learn" href={href}>
          View specifications
          <svg {...iconProps} className="h-4 w-4">
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </SmartLink>
      </div>
    </article>
  );
}

const shopFilters = [
  { value: "all", label: "All" },
  { value: "zvolta", label: "ZVolta" },
  { value: "cita", label: "CITA EV" },
  { value: "dc", label: "DC Chargers" },
];

export default function ProductsPage() {
  const [params, setParams] = useSearchParams();
  const searchRef = useRef(null);
  const search = params.get("q") || "";
  const filter =
    shopFilters.find((item) => item.value === params.get("filter")) ||
    shopFilters[0];
  const updateParams = (changes) => {
    const next = new URLSearchParams(params);
    Object.entries(changes).forEach(([key, value]) => {
      if (!value || (key === "filter" && value === "all")) next.delete(key);
      else next.set(key, value);
    });
    setParams(next, { replace: true });
  };
  const liveCatalog = useCommerceData(
    () => commerceApi.allProducts({ sort: "featured" }),
    [],
  );
  const items = useMemo(
    () => getUnifiedShopItems(liveCatalog.data),
    [liveCatalog.data],
  );
  const visibleItems = useMemo(() => {
    const term = search.trim().toLowerCase();
    return items.filter(
      (item) =>
        (filter.value === "all" ||
          (filter.value === "dc" ? item.isDc : item.brand === filter.value)) &&
        (!term || item.searchText.includes(term)),
    );
  }, [items, filter.value, search]);
  const needsLiveProducts = filter.value !== "cita";
  const loading = needsLiveProducts && liveCatalog.loading;

  return (
    <main className="commerce-page cita-shop-page">
      <section className="commerce-hero">
        <div className="commerce-container">
          <p className="commerce-kicker">ZVolta · Shop</p>
          <h1>
            EV charging products.
            <br />
            <em>ZVolta &amp; CITA EV.</em>
          </h1>
          <p>
            Find the right charger for your home, business or charging network.
            Explore ZVolta and CITA EV in one catalogue.
          </p>
        </div>
      </section>
      <section
        className="commerce-catalog commerce-container"
        aria-labelledby="shop-products-title"
      >
        <div className="commerce-toolbar">
          <div
            className={`commerce-filters ${styles.filters}`}
            role="group"
            aria-label="Filter products"
          >
            {shopFilters.map((item) => (
              <button
                key={item.value}
                type="button"
                className={filter.value === item.value ? "active" : ""}
                aria-pressed={filter.value === item.value}
                aria-controls="shop-product-grid"
                onClick={() => updateParams({ filter: item.value })}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className={styles.search}>
            <label className="commerce-search">
              <span className="sr-only">Search shop products</span>
              <input
                ref={searchRef}
                type="search"
                value={search}
                onChange={(event) => updateParams({ q: event.target.value })}
                placeholder="Search chargers & products"
              />
            </label>
            {search && (
              <button
                className={styles.clearSearch}
                type="button"
                aria-label="Clear product search"
                onClick={() => {
                  updateParams({ q: "" });
                  searchRef.current?.focus();
                }}
              >
                ×
              </button>
            )}
          </div>
        </div>
        <div className={styles.heading}>
          <h2 id="shop-products-title">
            {filter.value === "all" ? "All products" : filter.label}
          </h2>
          <p aria-live="polite">
            {visibleItems.length}{" "}
            {visibleItems.length === 1 ? "product" : "products"}
            {loading ? " · Loading more…" : ""}
          </p>
        </div>
        {needsLiveProducts && liveCatalog.error && (
          <p className="cita-shop-loading" role="status">
            ZVolta live products are temporarily unavailable. You can still
            browse the available CITA EV range.
          </p>
        )}
        <div
          id="shop-product-grid"
          className="commerce-grid"
          aria-busy={loading}
        >
          {loading && <ProductCardSkeletons />}
          {visibleItems.map((item, index) =>
            item.brand === "cita" ? (
              <CitaShopCard
                key={item.key}
                charger={item.product}
                index={index}
                liveProducts={liveCatalog.data}
              />
            ) : (
              <ProductCard
                key={item.key}
                product={item.product}
                index={index}
              />
            ),
          )}
        </div>
        {!loading && visibleItems.length === 0 && (
          <div className={styles.empty}>
            <h3>
              {liveCatalog.error && needsLiveProducts
                ? "Products are temporarily unavailable"
                : "No products found"}
            </h3>
            <p>
              {liveCatalog.error && needsLiveProducts
                ? "Try again, or browse the available CITA EV chargers."
                : "Try another search or choose a different filter."}
            </p>
            {liveCatalog.error && needsLiveProducts && (
              <button type="button" onClick={liveCatalog.refetch}>
                Try again
              </button>
            )}
            <button
              type="button"
              onClick={() => updateParams({ filter: "all", q: "" })}
            >
              Show all products
            </button>
          </div>
        )}
        <ContactMarquee />
      </section>
    </main>
  );
}

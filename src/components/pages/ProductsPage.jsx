import { useMemo, useState } from "react";
import { commerceApi } from "../../services/api";
import { useCommerceData } from "../../hooks/useCommerceData";
import { useCart } from "../../context/CartContext";
import { citaChargers } from "../../data/citaChargers";
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
        <h2>
          <SmartLink href={detailHref}>{product.title}</SmartLink>
        </h2>
        <p>{product.shortDescription || product.description}</p>
      </div>
      <SmartLink className="commerce-card__art" href={detailHref}>
        <img
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

// The CITA 2026 company profile specifies these three DC families. It does
// NOT contain prices: those can only be obtained separately from the backend.
export const CITA_SHOP_DC_SLUGS = ["smart-30-dc", "smart-dc-eco", "smart-dc-pro"];
const CITA_SHOP_FAMILIES = citaChargers.filter((charger) =>
  CITA_SHOP_DC_SLUGS.includes(charger.slug),
);
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
  return (products || [])
    .filter((product) => product.chargerType === "dc" && pattern.test(String(product.title || "")))
    .filter((product) => {
      const power = Number.parseInt(String(product.power || product.title || ""), 10);
      return allowed.includes(power);
    })
    .map((product) => ({
      power: product.power,
      price: Number(product.discountPrice) > 0 ? Number(product.discountPrice) : Number(product.price),
    }))
    .filter(({ price }) => Number.isFinite(price) && price > 0);
}

function CitaShopCard({ charger, index, liveProducts }) {
  const { settings } = useStorefrontSettings();
  const prices = getApprovedCitaShopPrices(liveProducts, charger);
  const fromPrice = prices.length ? Math.min(...prices.map(({ price }) => price)) : null;
  const specifications = Object.fromEntries(charger.specs);
  const href = `/cita-ev-chargers/${charger.slug}`;
  const bestFor = {
    "smart-30-dc": "Compact DC charging",
    "smart-dc-eco": "Fleets, commercial & public sites",
    "smart-dc-pro": "Highways, fleets & public stations",
  }[charger.slug];

  return (
    <article className="commerce-card cita-shop-card" data-model={charger.slug}>
      <span className="commerce-card__index">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="commerce-card__intro">
        <h2><SmartLink href={href}>{charger.name}</SmartLink></h2>
        <p>{charger.description}</p>
      </div>
      <SmartLink
        className="commerce-card__art"
        href={href}
        aria-label={`View full technical specifications for ${charger.name}`}
      >
        <img src={charger.productImage} alt={charger.name} loading="lazy" decoding="async" />
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
          <span>Protection</span>
          <strong>{specifications["Protection Rating"]}</strong>
        </div>
        <div className="commerce-card__spec-row">
          <span>Warranty</span>
          <strong>{charger.warranty}</strong>
        </div>
        <div className="commerce-card__spec-row">
          <span>Price</span>
          <strong>{fromPrice === null ? "Enquire for pricing" : `From ${formatStoreCurrency(fromPrice, settings.currency)}`}</strong>
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
        <SmartLink
          className="commerce-card__cart cita-shop-card__enquire"
          href="/contact-us"
          aria-label={`Enquire about ${charger.name}`}
        >
          <svg {...iconProps} className="h-5 w-5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"/></svg>
        </SmartLink>
      </div>
    </article>
  );
}

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  // Availability/prices are optional. The PDF product catalogue renders
  // immediately, even when the commerce backend is down.
  const liveCatalog = useCommerceData(
    () => commerceApi.allProducts({ chargerType: "dc", sort: "price_low" }),
    [],
  );
  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return CITA_SHOP_FAMILIES.filter(
      (charger) =>
        !query ||
        `${charger.name} ${charger.power} ${charger.description}`
          .toLowerCase()
          .includes(query),
    );
  }, [search]);

  return (
    <main className="commerce-page cita-shop-page">
      <section className="commerce-hero">
        <div className="commerce-container">
          <p className="commerce-kicker">Shop · CITA EV DC chargers</p>
          <h1>
            CITA EV DC Chargers.
            <br />
            <em>30 kW to 480 kW.</em>
          </h1>
          <p>
            Explore the original CITA Smart 30 DC, Smart DC Eco and Smart DC Pro
            models from the CITA EV 2026 company profile.
          </p>
        </div>
      </section>
      <section className="commerce-catalog commerce-container">
        <div className="commerce-toolbar">
          <p className="cita-shop-count">DC Chargers <strong>{CITA_SHOP_FAMILIES.length} models</strong></p>
          <label className="commerce-search">
            <span className="sr-only">Search CITA DC chargers</span>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search DC chargers"
            />
          </label>
        </div>
        <div className="commerce-grid">
          {filtered.map((charger) => (
            <CitaShopCard
              key={charger.slug}
              index={CITA_SHOP_FAMILIES.indexOf(charger)}
              charger={charger}
              liveProducts={liveCatalog.data}
            />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="commerce-state">
            No CITA DC charger matches your search.
          </div>
        )}
        <p className="cita-shop-pricing-note">
          Technical details and charger images are from the CITA EV 2026 company profile.
          The PDF does not specify prices. Any displayed prices are from the
          ZVolta live catalogue; contact us to confirm a current quotation.
        </p>
      </section>
    </main>
  );
}

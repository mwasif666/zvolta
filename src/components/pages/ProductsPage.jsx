import { useMemo, useState } from "react";
import { commerceApi } from "../../services/api";
import { useCommerceData } from "../../hooks/useCommerceData";
import { useCart } from "../../context/CartContext";
import { citaChargers } from "../../data/citaChargers";
import { citaCardDetails } from "../../data/citaCardDetails";
import {
  CITA_SHOP_CHARGERS,
  getZvoltaShopProducts,
} from "../../lib/unifiedShopCatalog";
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

// CITA EV 2026 lists all ten AC/DC families. Keep the original image,
// specifications and detailed pages; backend prices are a separate source.
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
  const bestFor = citaCardDetails[charger.slug]?.bestFor || "EV charging";
  const location = citaCardDetails[charger.slug]?.location || "Ask about installation";

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
      </div>
    </article>
  );
}

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  // The full CITA PDF catalogue is always available even if the API is offline.
  // API products supply the additional ZVolta range and approved CITA prices.
  const liveCatalog = useCommerceData(
    () => commerceApi.allProducts({ sort: "featured" }),
    [],
  );
  const zvoltaProducts = useMemo(
    () => getZvoltaShopProducts(liveCatalog.data),
    [liveCatalog.data],
  );
  const [visibleCita, visibleZvolta] = useMemo(() => {
    const term = search.trim().toLowerCase();
    return [
      CITA_SHOP_CHARGERS.filter((charger) =>
        !term ||
        `${charger.name} ${charger.subtitle} ${charger.power} ${charger.description}`
          .toLowerCase().includes(term),
      ),
      zvoltaProducts.filter((product) =>
        !term ||
        `${product.title} ${product.shortDescription || ""} ${product.description || ""} ${product.power || ""}`
          .toLowerCase().includes(term),
      ),
    ];
  }, [search, zvoltaProducts]);

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
            Explore the full ZVolta product range alongside all original CITA EV
            AC and DC chargers, with their authentic product imagery and specifications.
          </p>
        </div>
      </section>
      <section className="commerce-catalog commerce-container">
        <div className="commerce-toolbar">
          <p className="cita-shop-count">
            All products
            <strong>
              {CITA_SHOP_CHARGERS.length + zvoltaProducts.length} available models
            </strong>
          </p>
          <label className="commerce-search">
            <span className="sr-only">Search shop products</span>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search chargers & products"
            />
          </label>
        </div>

        <section className="cita-shop-section" aria-labelledby="shop-cita-title">
          <h2 id="shop-cita-title" className="cita-shop-section-title">
            CITA EV Chargers <small>AC &amp; DC · {CITA_SHOP_CHARGERS.length} models</small>
          </h2>
          <div className="commerce-grid">
            {visibleCita.map((charger) => (
              <CitaShopCard
                key={charger.slug}
                index={CITA_SHOP_CHARGERS.indexOf(charger)}
                charger={charger}
                liveProducts={liveCatalog.data}
              />
            ))}
          </div>
          {visibleCita.length === 0 && (
            <p className="cita-shop-empty">No CITA EV products match this search.</p>
          )}
        </section>

        <section className="cita-shop-section" aria-labelledby="shop-zvolta-title">
          <h2 id="shop-zvolta-title" className="cita-shop-section-title">
            ZVolta Products <small>{zvoltaProducts.length} products</small>
          </h2>
          {liveCatalog.loading && (
            <p className="cita-shop-loading" role="status">Loading ZVolta products…</p>
          )}
          {liveCatalog.error && (
            <p className="cita-shop-loading" role="status">
              ZVolta live products are temporarily unavailable. CITA products
              remain visible above.
            </p>
          )}
          <div className="commerce-grid">
            {visibleZvolta.map((product, index) => (
              <ProductCard
                product={product}
                index={index}
                key={product._id || product.slug || `zvolta-${index}`}
              />
            ))}
          </div>
          {!liveCatalog.loading && !liveCatalog.error && visibleZvolta.length === 0 && (
            <p className="cita-shop-empty">No ZVolta products match this search.</p>
          )}
        </section>

        <p className="cita-shop-pricing-note">
          CITA product images and technical specifications follow the supplied
          CITA EV company profile. Prices are not supplied in that document;
          where available, prices come from the ZVolta catalogue. Contact us to
          confirm current prices and product availability.
        </p>
      </section>
    </main>
  );
}

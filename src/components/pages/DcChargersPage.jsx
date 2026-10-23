import { Link } from "react-router-dom";
import { useCommerceData } from "../../hooks/useCommerceData";
import {
  formatStoreCurrency,
  useStorefrontSettings,
} from "../../context/StorefrontSettingsContext";
import { commerceApi } from "../../services/api";
import { citaChargers } from "../../data/citaChargers";

const highlights = [
  ["bolt", "30–480 kW", "CITA DC power range"],
  ["plug", "CCS2 / CHAdeMO", "Flexible connector options"],
  ["stack", "Up to 4 EVs", "Multi-vehicle charging"],
  ["gear", "OCPP Ready", "Smart and future-ready"],
];

const benefits = [
  [
    "bolt",
    "Smart charging",
    "Intelligent, efficient and reliable charging for maximum uptime.",
  ],
  [
    "chart",
    "Scalable power",
    "Grow from a compact 30kW charger to a 480kW superfast charging hub.",
  ],
  [
    "support",
    "Local support",
    "Expert guidance, installation and after-sales support.",
  ],
  ["link", "Connected", "OCPP-ready hardware with intelligent monitoring."],
];

const citaDcChargers = citaChargers.filter((charger) =>
  ["smart-30-dc", "smart-dc-eco", "smart-dc-pro"].includes(charger.slug),
);

function Icon({ name }) {
  if (name === "plug") return <span aria-hidden="true">♧</span>;
  if (name === "stack") return <span aria-hidden="true">▣</span>;
  if (name === "gear") return <span aria-hidden="true">⚙</span>;
  if (name === "chart") return <span aria-hidden="true">▥</span>;
  if (name === "support") return <span aria-hidden="true">◉</span>;
  if (name === "link") return <span aria-hidden="true">↗</span>;
  return <span aria-hidden="true">ϟ</span>;
}

function ProductImage({ product }) {
  const src =
    product.images?.[0]?.url ||
    product.image ||
    "/CITA_Charger_Images/24_Smart_DC_Eco_Product.png";
  return (
    <img
      src={src}
      alt={product.images?.[0]?.alt || product.title}
      loading="lazy"
      onError={(event) => {
        event.currentTarget.src =
          "/CITA_Charger_Images/24_Smart_DC_Eco_Product.png";
      }}
    />
  );
}

function ChargerCard({ product, currency }) {
  const tiers = Array.isArray(product.pricingTiers)
    ? product.pricingTiers.filter(
        (tier) => tier?.label && Number(tier?.price) >= 0,
      )
    : [];
  const connector = product.connectorType || "CCS2";
  const guns =
    product.gunConfiguration || product.bestFor || "Single / Dual gun";

  return (
    <article className="dc-product-card">
      <div className="dc-product-media">
        <ProductImage product={product} />
      </div>
      <h3>{product.title}</h3>
      <p className="dc-product-meta">
        <span>ϟ</span> {product.power || "DC Charging"}
      </p>
      <p className="dc-product-meta">
        <span>⌁</span> {connector} · {guns}
      </p>
      <div className="dc-price-list">
        {tiers.length ? (
          tiers.map((tier) => (
            <div key={`${tier.label}-${tier.price}`}>
              <span>{tier.label}</span>
              <strong>{formatStoreCurrency(tier.price, currency)}</strong>
            </div>
          ))
        ) : (
          <div>
            <span>{product.priceLabel || "Starting from"}</span>
            <strong>
              {formatStoreCurrency(
                product.discountPrice || product.price,
                currency,
              )}
            </strong>
          </div>
        )}
      </div>
    </article>
  );
}

export default function DcChargersPage({ routeClassName = "" }) {
  const { settings } = useStorefrontSettings();
  const catalog = useCommerceData(
    () => commerceApi.allProducts({ chargerType: "dc", sort: "price_low" }),
    [],
  );
  const liveChargers = Array.isArray(catalog.data)
    ? catalog.data.filter((product) => {
        const category = `${product.category?.name || ""} ${product.category?.slug || ""}`;
        return product.chargerType === "dc" || /\bdc\b/i.test(category);
      })
    : [];

  return (
    <div className={`dc-page ${routeClassName}`}>
      <section className="dc-hero">
        <img
          className="dc-hero-bg"
          src="/CITA_Charger_Images/27_Smart_DC_Pro_Lifestyle.png"
          alt=""
        />
        <span className="dc-hero-shade" aria-hidden="true" />
        <div className="dc-shell dc-hero-grid">
          <div className="dc-hero-copy">
            <p className="dc-kicker">CITA EV DC charging solutions</p>
            <h1>
              Fast charging.
              <br />A cleaner tomorrow.
            </h1>
            <p className="dc-lead">
              From compact 30kW charging to 480kW superfast infrastructure, CITA
              EV delivers reliable DC charging for commercial, fleet, public and
              highway applications.
            </p>
            <div className="dc-actions">
              <a className="dc-button is-green" href="#cita-dc-range">
                Explore CITA DC chargers <span>→</span>
              </a>
              <Link className="dc-button is-dark" to="/contact-us">
                Talk to an expert
              </Link>
            </div>
          </div>
        </div>
        <div className="dc-shell dc-highlight-grid">
          {highlights.map(([icon, title, copy]) => (
            <div className="dc-highlight" key={title}>
              <i>
                <Icon name={icon} />
              </i>
              <span>
                <strong>{title}</strong>
                <small>{copy}</small>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="dc-range-section" id="cita-dc-range">
        <div className="dc-shell">
          <div className="dc-section-head">
            <div>
              <p className="dc-label">CITA EV DC range</p>
              <h2>Choose the power that fits your site.</h2>
              <p>
                Accurate product families, imagery and specifications from the
                supplied CITA EV 2026 profile.
              </p>
            </div>
            <Link className="dc-outline-link" to="/cita-ev-chargers">
              View full CITA range →
            </Link>
          </div>
          <div className="dc-range-grid">
            {citaDcChargers.map((charger) => (
              <article key={charger.slug}>
                <div>
                  <h3>{charger.name}</h3>
                  <p>{charger.description}</p>
                </div>
                <img src={charger.productImage} alt={charger.name} />
                <Link to={`/cita-ev-chargers/${charger.slug}`}>
                  {charger.power} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dc-pricing-section" id="dc-pricing">
        <div className="dc-shell">
          <div className="dc-section-head dc-pricing-head">
            <div>
              <p className="dc-label">Live pricing</p>
              <h2>DC charger rate comparison</h2>
              <p>
                Prices below update automatically from the ZVolta admin panel.
              </p>
            </div>
            <div className="dc-segment" aria-label="Selected charger type">
              <span>DC Chargers</span>
            </div>
          </div>
          {catalog.loading ? (
            <div className="dc-catalog-state" role="status">
              Loading live DC charger prices…
            </div>
          ) : null}
          {!catalog.loading && catalog.error ? (
            <div className="dc-catalog-state is-error" role="alert">
              Live DC charger pricing is temporarily unavailable. Please try
              again shortly.
            </div>
          ) : null}
          {!catalog.loading && !catalog.error && !liveChargers.length ? (
            <div className="dc-catalog-state">
              No DC chargers are published yet. Add and activate products from
              the DC Chargers admin tab.
            </div>
          ) : null}
          {liveChargers.length ? (
            <div className="dc-product-grid">
              {liveChargers.map((product) => (
                <ChargerCard
                  key={product._id || product.sku || product.title}
                  product={product}
                  currency={settings.currency}
                />
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="dc-why-section">
        <div className="dc-shell">
          <div className="dc-why-head">
            <div>
              <p className="dc-kicker">Why ZVolta + CITA EV</p>
              <h2>Built for a brighter, cleaner future.</h2>
            </div>
            <p>
              Complete EV charging solutions with proven hardware, connected
              software, support and scalability for demanding applications.
            </p>
          </div>
          <div className="dc-benefit-grid">
            {benefits.map(([icon, title, copy]) => (
              <article key={title}>
                <i>
                  <Icon name={icon} />
                </i>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dc-cta">
        <div className="dc-shell">
          <div>
            <p className="dc-label">Ready to get started?</p>
            <h2>Let's build your charging solution.</h2>
            <p>
              Talk to our team for the right charger, pricing and deployment
              support.
            </p>
          </div>
          <div className="dc-actions">
            <Link className="dc-button is-green" to="/contact-us">
              Get a quote →
            </Link>
            <Link className="dc-button is-light" to="/cita-ev-chargers">
              Explore CITA EV
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

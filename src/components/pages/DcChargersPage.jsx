import { Link } from "react-router-dom";
import { useCommerceData } from "../../hooks/useCommerceData";
import {
  formatStoreCurrency,
  useStorefrontSettings,
} from "../../context/StorefrontSettingsContext";
import { commerceApi } from "../../services/api";

const highlights = [
  ["bolt", "30–360 kW", "Wide power range"],
  ["plug", "Single / Dual", "Flexible configurations"],
  ["stack", "Scalable", "Fleet and public sites"],
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
    "Grow from one rapid charger to a complete charging hub.",
  ],
  [
    "support",
    "Local support",
    "Expert guidance, installation and after-sales support.",
  ],
  ["link", "OCPP compatible", "Open, connected and ready for the future."],
];

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
    product.images?.[0]?.url || product.image || "/img/charging station.png";
  return (
    <img
      src={src}
      alt={product.images?.[0]?.alt || product.title}
      loading="lazy"
      onError={(event) => {
        event.currentTarget.src = "/img/charging station.png";
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
        <span>ϟ</span> DC Charging
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
          src="/img/Hero/Zv - Main Banner.png"
          alt=""
        />
        <span className="dc-hero-shade" aria-hidden="true" />
        <div className="dc-shell dc-hero-grid">
          <div className="dc-hero-copy">
            <p className="dc-kicker">EV charging solutions</p>
            <h1>
              Fast charging.
              <br />A cleaner tomorrow.
            </h1>
            <p className="dc-lead">
              From everyday AC charging to high-power DC infrastructure, ZVolta
              powers a cleaner, smarter future.
            </p>
            <div className="dc-actions">
              <a className="dc-button is-green" href="#dc-pricing">
                Explore chargers <span>→</span>
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

      <section className="dc-range-section">
        <div className="dc-shell">
          <div className="dc-section-head">
            <div>
              <p className="dc-label">Our charger range</p>
              <h2>
                Choose the power that
                <br />
                fits your needs.
              </h2>
              <p>
                AC for everyday charging. DC for faster turnaround and higher
                traffic sites.
              </p>
            </div>
            <Link className="dc-outline-link" to="/contact-us">
              Talk to an expert →
            </Link>
          </div>
          <div className="dc-range-grid">
            <article>
              <div>
                <h3>
                  AC
                  <br />
                  Charging
                </h3>
                <p>
                  Reliable and efficient charging for homes, workplaces and
                  destinations.
                </p>
              </div>
              <img
                src="/img/3kw-charger/smart-3kw-charger.png"
                alt="ZVolta AC charger"
              />
              <span>3–22 kW →</span>
            </article>
            <article>
              <div>
                <h3>
                  Compact
                  <br />
                  DC
                </h3>
                <p>
                  Space-saving rapid chargers for businesses and commercial
                  sites.
                </p>
              </div>
              <img src="/img/charging station.png" alt="Compact DC charger" />
              <span>30–60 kW →</span>
            </article>
            <article>
              <div>
                <h3>
                  High-Power
                  <br />
                  DC
                </h3>
                <p>
                  High-performance charging for highways, fleets and
                  high-traffic locations.
                </p>
              </div>
              <img
                src="/img/charging station.png"
                alt="High-power DC charger"
              />
              <span>80–360 kW →</span>
            </article>
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
              <p className="dc-kicker">Why ZVolta</p>
              <h2>
                Built for a<br />
                brighter, cleaner future.
              </h2>
            </div>
            <p>
              More than just chargers — we deliver complete EV charging
              solutions with the technology, support and scalability to power
              your journey ahead.
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
            <Link className="dc-button is-light" to="/contact-us">
              Talk to an expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

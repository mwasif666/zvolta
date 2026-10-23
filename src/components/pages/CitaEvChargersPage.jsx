import { SkeletonImage } from "../SkeletonImage";
import "../commerce/ProductSkeleton.css";
import { Link } from "react-router-dom";
import { citaChargers, citaSolutions } from "../../data/citaChargers";
import CitaReelHero from "./CitaReelHero";
import StatsBento from "../ui/stats-bento";
import { FaWhatsapp } from "react-icons/fa6";
import { citaCardDetails, CITA_PRICING_NOTE } from "../../data/citaCardDetails";

const differences = [
  [
    "Innovative Technology",
    "Advanced features and future-ready capabilities for faster, safer and more efficient charging.",
  ],
  [
    "Range & Performance",
    "From compact home units to high-powered commercial stations, CITA EV supports every charging environment.",
  ],
  [
    "Sustainability at its Core",
    "Efficient charging solutions designed to support cleaner transportation and a lower-emission future.",
  ],
  [
    "Charging Infrastructure",
    "End-to-end charging infrastructure spanning hardware, software, installation and support.",
  ],
];

function ArrowIcon() {
  return <span aria-hidden="true">→</span>;
}

// Only format the display text. Original CITA data and specification values
// remain untouched; e.g. "7kW" is rendered as "7 kW".
function formatPowerLabel(value) {
  return value
    .replace(/(\d+(?:\.\d+)?)\s*kW\b/g, "$1 kW")
    .replace(/\b2\s*x\s*(?=\d)/g, "2 × ");
}

function FeatureIcon({ index }) {
  const shapes = [
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a16 16 0 0 1 0 18M12 3a16 16 0 0 0 0 18" />
    </>,
    <>
      <path d="m13.5 2-9 11h6l-1 9 10-12h-6z" />
    </>,
    <>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M8 22h8M12 18v4M7 9h10M7 12h6" />
    </>,
    <>
      <path d="m3 11 9-7 9 7v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM9 21v-7h6v7" />
    </>,
  ];
  return (
    <span className="cita-feature-icon" aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {shapes[index] || shapes[0]}
      </svg>
    </span>
  );
}

function DashboardPreview() {
  return (
    <div
      className="cita-dashboard-assets"
      role="group"
      aria-label="Screenshots of ZVolta Host dashboard and mobile app"
    >
      <img
        className="cita-dashboard-laptop-img"
        src="/img/Host/laptop.png"
        alt="ZVolta charging dashboard"
      />
      <img
        className="cita-dashboard-mobile-img"
        src="/img/Host/mobile.png"
        alt="ZVolta host mobile app interface"
      />
    </div>
  );
}

export default function CitaEvChargersPage({ routeClassName = "" }) {
  return (
    <div className={`cita-page ${routeClassName}`}>
      <CitaReelHero />

      <StatsBento />

      <section className="cita-products" id="cita-range">
        <div className="cita-shell">
          <div className="cita-section-head">
            <div>
              <p className="cita-eyebrow">Our products</p>
              <h2>Explore the CITA Charger Range</h2>
            </div>
            <p>
              A complete range of AC and DC chargers designed for homes,
              workplaces, fleets, commercial spaces and public charging
              networks.
            </p>
          </div>
          <div className="cita-product-grid">
            {citaChargers.map((charger) => (
              <article
                className="cita-product-card"
                key={charger.slug}
                data-model={charger.slug}
              >
                <header className="cita-product-intro">
                  <p className="cita-product-subtitle">{charger.subtitle}</p>
                  <h3>{charger.name}</h3>
                  <p className="cita-product-description">
                    {charger.description}
                  </p>
                </header>
                <Link
                  to={`/cita-ev-chargers/${charger.slug}`}
                  className="cita-product-media product-image-loading"
                  aria-label={`See ${charger.name} product details`}
                >
                  <SkeletonImage
                    className="cita-product-image"
                    src={charger.productImage}
                    alt={charger.name}
                    loading="lazy"
                    decoding="async"
                  />
                  {charger.slug.startsWith("smart-pro-") && (
                    <span className="cita-product-variant" aria-hidden="true">
                      {charger.power.replace("Up to ", "")}
                    </span>
                  )}
                </Link>
                <div
                  className="cita-product-specs"
                  aria-label={`${charger.name} overview`}
                >
                  <div className="cita-product-spec-row">
                    <span>Power</span>
                    <strong>{formatPowerLabel(charger.power)}</strong>
                  </div>
                  <div className="cita-product-spec-row">
                    <span>Best for</span>
                    <strong>{citaCardDetails[charger.slug].bestFor}</strong>
                  </div>
                  <div className="cita-product-spec-row">
                    <span>Location</span>
                    <strong>{citaCardDetails[charger.slug].location}</strong>
                  </div>
                  <div className="cita-product-spec-row">
                    <span>Price</span>
                    <strong className="cita-product-price-note">
                      {CITA_PRICING_NOTE}
                    </strong>
                  </div>
                </div>
                <div className="cita-product-actions">
                  <Link
                    className="cita-product-cta"
                    to={`/cita-ev-chargers/${charger.slug}`}
                  >
                    View details{" "}
                    <span className="cita-product-cta-icon" aria-hidden="true">
                      →
                    </span>
                  </Link>
                  <a
                    className="cita-product-contact"
                    href={`https://wa.me/923104446529?text=${encodeURIComponent(`Hi ZVolta, I'd like details and pricing for ${charger.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Contact support about ${charger.name} on WhatsApp`}
                  >
                    <FaWhatsapp aria-hidden="true" />
                    <span>Contact support</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cita-solutions">
        <div className="cita-shell">
          <div className="cita-dark-head">
            <div>
              <p className="cita-eyebrow">Solutions</p>
              <h2>
                Charging Solutions for <span>Every Environment</span>
              </h2>
            </div>
            <p>
              From homes to high-traffic networks, CITA EV delivers scalable
              charging solutions for residential, commercial, fleet and public
              environments.
            </p>
          </div>
          <div className="cita-solutions-grid">
            {citaSolutions.map((solution) => (
              <article key={solution.title}>
                <div className="cita-solution-media">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    loading="lazy"
                  />
                </div>
                <div className="cita-solution-copy">
                  <span className="cita-solution-icon">{solution.icon}</span>
                  <div>
                    <h3>{solution.title}</h3>
                    <p>{solution.copy}</p>
                  </div>
                  <Link
                    className="cita-round-arrow"
                    to="/contact-us"
                    aria-label={`Enquire about ${solution.title} charging`}
                  >
                    <ArrowIcon />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cita-difference">
        <div className="cita-shell">
          <div className="cita-section-head">
            <div>
              <p className="cita-eyebrow">Why CITA EV</p>
              <h2>The CITA EV Difference</h2>
            </div>
            <p>
              Advanced technology, proven reliability and flexible solutions for
              a cleaner, more connected world.
            </p>
          </div>
          <div className="cita-difference-grid">
            {differences.map(([title, copy], index) => (
              <article key={title}>
                <span className="cita-diff-icon">
                  <FeatureIcon index={index} />
                </span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cita-software">
        <div className="cita-software-backdrop" aria-hidden="true" />
        <div className="cita-shell cita-software-grid">
          <div className="cita-software-copy">
            <p className="cita-eyebrow">Smarter Charging</p>
            <h2>
              CITA EV <span>App & CPMS</span>
            </h2>
            <p>
              Manage and monitor your chargers with ease. Real-time insights,
              remote control, scheduled charging, uptime and operations
              management.
            </p>
            <Link className="cita-btn cita-btn-primary" to="/software">
              Learn More <ArrowIcon />
            </Link>
            <div className="cita-software-features">
              <div>
                <span className="cita-software-feature-icon">
                  <FeatureIcon index={2} />
                </span>
                <strong>Real-time Monitoring</strong>
                <span>Live status, alerts and performance.</span>
              </div>
              <div>
                <span className="cita-software-feature-icon">
                  <FeatureIcon index={1} />
                </span>
                <strong>Smart Scheduling</strong>
                <span>Optimise charging and energy costs.</span>
              </div>
              <div>
                <span className="cita-software-feature-icon">
                  <FeatureIcon index={0} />
                </span>
                <strong>Usage Analytics</strong>
                <span>Insights for smarter decisions.</span>
              </div>
              <div>
                <span className="cita-software-feature-icon">
                  <FeatureIcon index={3} />
                </span>
                <strong>Remote Management</strong>
                <span>Control chargers anywhere.</span>
              </div>
            </div>
          </div>
          <DashboardPreview />
        </div>
      </section>

      <section className="cita-cta">
        <img
          src="/CITA_Charger_Images/25_Smart_DC_Eco_Lifestyle.png"
          alt="CITA EV public charging network"
        />
        <span className="cita-cta-shade" />
        <div className="cita-shell cita-cta-inner">
          <div>
            <p className="cita-eyebrow">Get started</p>
            <h2>Power the Future of Mobility with CITA EV</h2>
            <p>
              From AC and DC chargers to CITA EV App and CPMS, build a practical
              charging solution for your site.
            </p>
          </div>
          <Link className="cita-btn cita-btn-primary" to="/contact-us">
            Enquire Now <ArrowIcon />
          </Link>
        </div>
      </section>
    </div>
  );
}

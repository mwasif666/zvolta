import { Link } from "react-router-dom";
import { citaChargers, citaSolutions } from "../../data/citaChargers";

const stats = [
  ["35+", "Countries", "Global presence and growing"],
  ["AC & DC", "Hardware", "Complete charging portfolio"],
  ["CITA EV", "App & CPMS", "Smart, connected charging"],
  ["Home to Public", "Charging", "For every environment"],
];

const differences = [
  ["Innovative Technology", "Advanced features and future-ready capabilities for faster, safer and more efficient charging."],
  ["Range & Performance", "From compact home units to high-powered commercial stations, CITA EV supports every charging environment."],
  ["Sustainability at its Core", "Efficient charging solutions designed to support cleaner transportation and a lower-emission future."],
  ["Charging Infrastructure", "End-to-end charging infrastructure spanning hardware, software, installation and support."],
];

function ArrowIcon() {
  return <span aria-hidden="true">→</span>;
}

function FeatureIcon({ index }) {
  const shapes = [
    <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a16 16 0 0 1 0 18M12 3a16 16 0 0 0 0 18" /></>,
    <><path d="m13.5 2-9 11h6l-1 9 10-12h-6z" /></>,
    <><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M8 22h8M12 18v4M7 9h10M7 12h6" /></>,
    <><path d="m3 11 9-7 9 7v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM9 21v-7h6v7" /></>,
  ];
  return (
    <span className="cita-feature-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        {shapes[index] || shapes[0]}
      </svg>
    </span>
  );
}

function DashboardPreview() {
  return (
    <div className="cita-dashboard-assets" role="group" aria-label="Screenshots of ZVolta Host dashboard and mobile app">
      <img className="cita-dashboard-laptop-img" src="/img/Host/laptop.png" alt="ZVolta charging dashboard" />
      <img className="cita-dashboard-mobile-img" src="/img/Host/mobile.png" alt="ZVolta host mobile app interface" />
    </div>
  );
}

export default function CitaEvChargersPage({ routeClassName = "" }) {
  return (
    <div className={`cita-page ${routeClassName}`}>
      <section className="cita-hero">
        <img
          className="cita-hero-bg"
          src="/CITA_Charger_Images/27_Smart_DC_Pro_Lifestyle.png"
          alt=""
          aria-hidden="true"
        />
        <span className="cita-hero-shade" aria-hidden="true" />
        <span className="cita-hero-light" aria-hidden="true" />

        <div className="cita-shell cita-hero-grid">
          <div className="cita-hero-copy">
            <p className="cita-eyebrow">CITA EV Chargers</p>
            <h1>CITA EV <span>Chargers</span></h1>
            <h2>Simple, Safe & Reliable</h2>
            <p className="cita-hero-subtitle">Home, Commercial & Fleet EV Charging Solutions</p>
            <p className="cita-hero-text">
              CITA EV is committed to delivering innovative, world-class EV charging solutions that support the transition to sustainable mobility.
            </p>
            <div className="cita-actions">
              <a className="cita-btn cita-btn-primary" href="#cita-range">Explore the Range <ArrowIcon /></a>
              <Link className="cita-btn cita-btn-ghost-dark" to="/contact-us">Enquire Now <ArrowIcon /></Link>
            </div>
          </div>
        </div>

        <div className="cita-shell cita-stat-grid">
          {stats.map(([value, label, copy], index) => (
            <article key={value}>
              <FeatureIcon index={index} />
              <div><strong>{value}</strong><b>{label}</b><small>{copy}</small></div>
            </article>
          ))}
        </div>
      </section>

      <section className="cita-products" id="cita-range">
        <div className="cita-shell">
          <div className="cita-section-head">
            <div>
              <p className="cita-eyebrow">Our products</p>
              <h2>Explore the CITA Charger Range</h2>
            </div>
            <p>A complete range of AC and DC chargers designed for homes, workplaces, fleets, commercial spaces and public charging networks.</p>
          </div>
          <div className="cita-product-grid">
            {citaChargers.map((charger) => (
              <article className="cita-product-card" key={charger.slug}>
                <Link to={`/cita-ev-chargers/${charger.slug}`} className="cita-product-media">
                  <img src={charger.productImage} alt={charger.name} loading="lazy" />
                </Link>
                <div className="cita-product-copy">
                  <p>{charger.subtitle}</p>
                  <h3>{charger.name}</h3>
                  <strong>{charger.power}</strong>
                  <Link to={`/cita-ev-chargers/${charger.slug}`}>View Details <ArrowIcon /></Link>
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
              <h2>Charging Solutions for <span>Every Environment</span></h2>
            </div>
            <p>From homes to high-traffic networks, CITA EV delivers scalable charging solutions for residential, commercial, fleet and public environments.</p>
          </div>
          <div className="cita-solutions-grid">
            {citaSolutions.map((solution) => (
              <article key={solution.title}>
                <div className="cita-solution-media"><img src={solution.image} alt={solution.title} loading="lazy" /></div>
                <div className="cita-solution-copy">
                  <span className="cita-solution-icon">{solution.icon}</span>
                  <div><h3>{solution.title}</h3><p>{solution.copy}</p></div>
                  <Link className="cita-round-arrow" to="/contact-us" aria-label={`Enquire about ${solution.title} charging`}><ArrowIcon /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cita-difference">
        <div className="cita-shell">
          <div className="cita-section-head">
            <div><p className="cita-eyebrow">Why CITA EV</p><h2>The CITA EV Difference</h2></div>
            <p>Advanced technology, proven reliability and flexible solutions for a cleaner, more connected world.</p>
          </div>
          <div className="cita-difference-grid">
            {differences.map(([title, copy], index) => (
              <article key={title}>
                <span className="cita-diff-icon"><FeatureIcon index={index} /></span>
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
            <h2>CITA EV <span>App & CPMS</span></h2>
            <p>Manage and monitor your chargers with ease. Real-time insights, remote control, scheduled charging, uptime and operations management.</p>
            <Link className="cita-btn cita-btn-primary" to="/software">Learn More <ArrowIcon /></Link>
            <div className="cita-software-features">
              <div><span className="cita-software-feature-icon"><FeatureIcon index={2} /></span><strong>Real-time Monitoring</strong><span>Live status, alerts and performance.</span></div>
              <div><span className="cita-software-feature-icon"><FeatureIcon index={1} /></span><strong>Smart Scheduling</strong><span>Optimise charging and energy costs.</span></div>
              <div><span className="cita-software-feature-icon"><FeatureIcon index={0} /></span><strong>Usage Analytics</strong><span>Insights for smarter decisions.</span></div>
              <div><span className="cita-software-feature-icon"><FeatureIcon index={3} /></span><strong>Remote Management</strong><span>Control chargers anywhere.</span></div>
            </div>
          </div>
          <DashboardPreview />
        </div>
      </section>

      <section className="cita-cta">
        <img src="/CITA_Charger_Images/25_Smart_DC_Eco_Lifestyle.png" alt="CITA EV public charging network" />
        <span className="cita-cta-shade" />
        <div className="cita-shell cita-cta-inner">
          <div><p className="cita-eyebrow">Get started</p><h2>Power the Future of Mobility with CITA EV</h2><p>From AC and DC chargers to CITA EV App and CPMS, build a practical charging solution for your site.</p></div>
          <Link className="cita-btn cita-btn-primary" to="/contact-us">Enquire Now <ArrowIcon /></Link>
        </div>
      </section>
    </div>
  );
}

import { Link } from "react-router-dom";
import { citaChargers, citaSolutions } from "../../data/citaChargers";

const stats = [
  ["35+", "Countries", "Global presence and growing"],
  ["AC & DC", "Hardware", "Complete charging portfolio"],
  ["CITA EV", "App & CPMS", "Smart, connected charging"],
  ["Home to Public", "Charging", "For every environment"],
];

const differences = [
  ["Reliable AC & DC Portfolio", "Wide range of chargers from 7kW to 480kW, designed for every use case."],
  ["Smart Connected Ecosystem", "CITA EV App and CPMS enable real-time insights, control and operations management."],
  ["Scalable Infrastructure", "Hardware, software, installation and support for future-ready charging networks."],
  ["Sustainable Mobility", "Efficient charging solutions designed to support cleaner transportation."],
];

function ArrowIcon() {
  return <span aria-hidden="true">→</span>;
}

function FeatureIcon({ index }) {
  const icons = ["⌘", "◎", "▥", "◈"];
  return <span aria-hidden="true">{icons[index] || "●"}</span>;
}

function DashboardPreview() {
  return (
    <div className="cita-dashboard-wrap" aria-label="CITA EV CPMS dashboard preview">
      <div className="cita-float cita-float-online">
        <span className="cita-status-dot" />
        <div>
          <small>Charger Online</small>
          <strong>CITA Smart DC</strong>
          <span>120 kW · Site A</span>
        </div>
      </div>
      <div className="cita-float cita-float-energy">
        <small>Energy Delivered</small>
        <strong>12,480 kWh</strong>
        <span>+18% this month</span>
      </div>
      <div className="cita-laptop">
        <div className="cita-laptop-screen">
          <aside>
            <b>ZVOLTA</b>
            <span className="is-active">Dashboard</span>
            <span>Chargers</span>
            <span>Sessions</span>
            <span>Users</span>
            <span>Payments</span>
            <span>Analytics</span>
            <span>Maintenance</span>
            <span>Settings</span>
          </aside>
          <main>
            <div className="cita-dash-head">
              <div>
                <small>Overview</small>
                <strong>Charging network</strong>
              </div>
              <span>Last 30 Days</span>
            </div>
            <div className="cita-dash-stats">
              <div><small>Total Chargers</small><strong>142</strong></div>
              <div><small>Online Chargers</small><strong>128</strong></div>
              <div><small>Energy Delivered</small><strong>12,480</strong></div>
              <div><small>Total Sessions</small><strong>3,842</strong></div>
            </div>
            <div className="cita-dash-panels">
              <div className="cita-chart-card">
                <div className="cita-chart-bars">
                  {[34, 54, 42, 70, 49, 63, 38, 56, 46, 69, 52, 43].map((height, index) => (
                    <i key={index} style={{ height: `${height}%` }} />
                  ))}
                </div>
                <small>Charging Activity</small>
              </div>
              <div className="cita-ring-card">
                <div className="cita-ring"><strong>90%</strong><span>Online</span></div>
                <small>Charger Status</small>
              </div>
            </div>
          </main>
        </div>
        <div className="cita-laptop-base" />
      </div>
      <div className="cita-phone">
        <div className="cita-phone-notch" />
        <b>ZVOLTA</b>
        <img src="/CITA_Charger_Images/24_Smart_DC_Eco_Product.png" alt="CITA Smart DC Eco" />
        <strong>Charging</strong>
        <span>CITA Smart DC</span>
        <div className="cita-charge-ring">78%</div>
        <small>32 min remaining</small>
        <button type="button">Stop Charging</button>
      </div>
    </div>
  );
}

export default function CitaEvChargersPage({ routeClassName = "" }) {
  return (
    <div className={`cita-page ${routeClassName}`}>
      <section className="cita-hero">
        <div className="cita-shell cita-hero-grid">
          <div className="cita-hero-copy">
            <p className="cita-eyebrow">CITA EV Chargers</p>
            <h1>CITA EV <span>Chargers</span></h1>
            <h2>Simple, Safe & Reliable</h2>
            <p className="cita-hero-subtitle">Home, Commercial & Fleet EV Charging Solutions</p>
            <p className="cita-hero-text">
              CITA EV delivers innovative AC and DC charging hardware with smart software for homes, workplaces, fleets, commercial spaces and public charging networks.
            </p>
            <div className="cita-actions">
              <a className="cita-btn cita-btn-primary" href="#cita-range">Explore the Range <ArrowIcon /></a>
              <Link className="cita-btn cita-btn-ghost" to="/contact-us">Enquire Now <ArrowIcon /></Link>
            </div>
          </div>
          <div className="cita-hero-art">
            <span className="cita-hero-glow" />
            <img src="/CITA_Charger_Images/28_All_in_One_Hardware_Portfolio_Lineup.png" alt="CITA EV charger portfolio" />
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
            <p>A complete range of AC and DC chargers designed for homes, businesses and public charging networks.</p>
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
                  <span className="cita-round-arrow"><ArrowIcon /></span>
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
        <div className="cita-shell cita-software-grid">
          <div className="cita-software-copy">
            <p className="cita-eyebrow">Smarter Charging</p>
            <h2>CITA EV <span>App & CPMS</span></h2>
            <p>Manage and monitor your chargers with ease. Real-time insights, remote control, scheduled charging, uptime and operations management.</p>
            <Link className="cita-btn cita-btn-primary" to="/software">Learn More <ArrowIcon /></Link>
            <div className="cita-software-features">
              <div><b>▥</b><strong>Real-time Monitoring</strong><span>Live status, alerts and performance.</span></div>
              <div><b>◫</b><strong>Smart Scheduling</strong><span>Optimise charging and energy costs.</span></div>
              <div><b>◩</b><strong>Usage Analytics</strong><span>Insights for smarter decisions.</span></div>
              <div><b>☁</b><strong>Remote Management</strong><span>Control chargers anywhere.</span></div>
            </div>
          </div>
          <DashboardPreview />
        </div>
      </section>

      <section className="cita-cta">
        <img src="/CITA_Charger_Images/27_Smart_DC_Pro_Lifestyle.png" alt="CITA EV public charging network" />
        <span className="cita-cta-shade" />
        <div className="cita-shell cita-cta-inner">
          <div><p className="cita-eyebrow">Get started</p><h2>Power the Future of Mobility with CITA EV</h2><p>Build a cleaner, smarter charging ecosystem with reliable hardware, intelligent software and scalable support.</p></div>
          <Link className="cita-btn cita-btn-primary" to="/contact-us">Enquire Now <ArrowIcon /></Link>
        </div>
      </section>
    </div>
  );
}

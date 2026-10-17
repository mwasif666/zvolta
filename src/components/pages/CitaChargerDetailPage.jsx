import { Link, useParams } from "react-router-dom";
import { citaChargers, getCitaCharger } from "../../data/citaChargers";

export default function CitaChargerDetailPage({ routeClassName = "" }) {
  const { slug } = useParams();
  const charger = getCitaCharger(slug);

  if (!charger) {
    return (
      <div className={`cita-detail-page ${routeClassName}`}>
        <section className="cita-detail-not-found">
          <div className="cita-shell">
            <p className="cita-eyebrow">CITA EV</p>
            <h1>Charger not found.</h1>
            <Link className="cita-btn cita-btn-primary" to="/cita-ev-chargers">Back to CITA EV Chargers →</Link>
          </div>
        </section>
      </div>
    );
  }

  const related = citaChargers.filter((item) => item.slug !== charger.slug).slice(0, 3);

  return (
    <div className={`cita-detail-page ${routeClassName}`}>
      <section className="cita-detail-hero">
        <img
          className="cita-detail-hero-bg"
          src={charger.lifestyleImage}
          alt=""
          aria-hidden="true"
        />
        <span className="cita-detail-hero-shade" aria-hidden="true" />

        <div className="cita-shell cita-detail-hero-grid">
          <div className="cita-detail-copy">
            <Link className="cita-back-link" to="/cita-ev-chargers">← CITA EV Chargers</Link>
            <p className="cita-eyebrow">{charger.subtitle}</p>
            <h1>{charger.name}</h1>
            <div className="cita-detail-power">{charger.power}</div>
            <p>{charger.description}</p>
            <div className="cita-detail-badges">
              <span>{charger.warranty} warranty</span>
              <span>Certified charging solution</span>
            </div>
            <div className="cita-actions">
              <Link className="cita-btn cita-btn-primary" to="/contact-us">Enquire Now →</Link>
              <a className="cita-btn cita-btn-ghost-dark" href="#specifications">View Specifications ↓</a>
            </div>
          </div>

          <div className="cita-detail-product-stage">
            <span className="cita-detail-glow" />
            <span className="cita-detail-floor" />
            <img src={charger.productImage} alt={charger.name} />
            <div className="cita-detail-product-meta">
              <small>CITA EV</small>
              <strong>{charger.name}</strong>
              <span>{charger.power}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="cita-detail-intro">
        <div className="cita-shell cita-detail-intro-grid">
          <div>
            <p className="cita-eyebrow">Designed for real-world charging</p>
            <h2>Smart technology. Reliable performance.</h2>
          </div>
          <p>{charger.description}</p>
        </div>

        <div className="cita-shell cita-detail-feature-strip">
          {charger.highlights.map((item, index) => (
            <div key={item}>
              <span>0{index + 1}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="cita-detail-lifestyle">
        <div className="cita-shell cita-detail-lifestyle-grid">
          <div className="cita-detail-lifestyle-image">
            <img src={charger.lifestyleImage} alt={`${charger.name} installed`} loading="lazy" />
            <span className="cita-lifestyle-caption">CITA EV charging solution</span>
          </div>
          <div className="cita-detail-highlights">
            <p className="cita-eyebrow">CITA EV charging ecosystem</p>
            <h2>Built to fit your charging environment.</h2>
            <p>{charger.description}</p>
            <div className="cita-highlight-list">
              {charger.highlights.map((item) => (
                <div key={item}><span>✓</span><strong>{item}</strong></div>
              ))}
            </div>
            <Link className="cita-detail-inline-link" to="/contact-us">Discuss your site requirements →</Link>
          </div>
        </div>
      </section>

      <section className="cita-spec-section" id="specifications">
        <div className="cita-shell">
          <div className="cita-section-head cita-spec-head">
            <div><p className="cita-eyebrow">Technical aspects</p><h2>Specifications</h2></div>
            <p>Specifications below follow the supplied CITA EV 2026 company profile.</p>
          </div>
          <div className="cita-spec-layout">
            <aside className="cita-spec-product-card">
              <img src={charger.productImage} alt={charger.name} loading="lazy" />
              <small>{charger.subtitle}</small>
              <h3>{charger.name}</h3>
              <strong>{charger.power}</strong>
            </aside>
            <div className="cita-spec-card">
              {charger.specs.map(([label, value]) => (
                <div className="cita-spec-row" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cita-detail-cta">
        <img src={charger.lifestyleImage} alt="" aria-hidden="true" />
        <span className="cita-detail-cta-shade" />
        <div className="cita-shell cita-detail-cta-inner">
          <div><p className="cita-eyebrow">Need a charging solution?</p><h2>Talk to ZVolta about {charger.name}.</h2><p>Get product selection, installation and deployment support for your site.</p></div>
          <Link className="cita-btn cita-btn-primary" to="/contact-us">Talk to an Expert →</Link>
        </div>
      </section>

      <section className="cita-related">
        <div className="cita-shell">
          <div className="cita-section-head"><div><p className="cita-eyebrow">Explore more</p><h2>Other CITA EV Chargers</h2></div></div>
          <div className="cita-related-grid">
            {related.map((item) => (
              <Link to={`/cita-ev-chargers/${item.slug}`} key={item.slug}>
                <div className="cita-related-media"><img src={item.productImage} alt={item.name} loading="lazy" /></div>
                <div><h3>{item.name}</h3><strong>{item.power}</strong><span>View details →</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

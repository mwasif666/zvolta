import { SmartLink } from "../../CareerPage.shared.jsx";
export function PageHeroSection() {
  return (
    <section className="career-page__hero">
      <div className="career-page__container">
        <nav className="career-page__crumbs" aria-label="Breadcrumb">
          <SmartLink href="/">Home</SmartLink>
          <span>Careers</span>
        </nav>
        <p className="career-page__eyebrow">Join ZVolta</p>
        <h1 className="career-page__hero-title">Careers</h1>
        <p className="career-page__hero-copy">
          Help build Pakistan's electric mobility network across charging,
          vehicles, software, operations, and customer experience.
        </p>

        <div className="career-page__stats" aria-label="Career highlights">
          <div className="career-page__stat">
            <strong>EV</strong>
            <span>Infrastructure roles across charging and mobility.</span>
          </div>
          <div className="career-page__stat">
            <strong>5</strong>
            <span>Open role tracks for the next growth phase.</span>
          </div>
          <div className="career-page__stat">
            <strong>PK</strong>
            <span>Work on clean transport built for local communities.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

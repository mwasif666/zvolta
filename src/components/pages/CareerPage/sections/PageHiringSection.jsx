import { aivoraAssetBase, hiringSteps } from "../../CareerPage.shared.jsx";
export function PageHiringSection({ activeStep, setActiveStep }) {
  return (
    <section className="career-page__hiring">
      <div className="career-page__container">
        <div className="career-page__hiring-grid">
          <div>
            <span className="career-page__subtitle">Hiring Process</span>
            <h2 className="career-page__section-title">Our hiring process</h2>

            <ul className="career-page__accordion">
              {hiringSteps.map((step, index) => {
                const isOpen = activeStep === index;
                return (
                  <li className="career-page__accordion-item" key={step.number}>
                    <button
                      type="button"
                      className="career-page__accordion-button"
                      aria-expanded={isOpen}
                      aria-controls={`career-step-${step.number}`}
                      onClick={() => setActiveStep(isOpen ? -1 : index)}
                    >
                      <span>
                        <span className="number">{step.number}</span>{" "}
                        {step.title}
                      </span>
                      <span className="career-page__accordion-icon" />
                    </button>
                    <div
                      id={`career-step-${step.number}`}
                      className={`career-page__accordion-body ${isOpen ? "is-open" : ""}`}
                    >
                      <div className="career-page__accordion-content">
                        <p>{step.content}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="career-page__process-card">
            <img
              src={`${aivoraAssetBase}/process-img.png`}
              alt="Illustration of the ZVolta hiring process"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

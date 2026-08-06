import { Icon, threeKwFaqs, useState } from "../../ChargerSpecPage.shared.jsx";

export function UseCasesRecommendationFaq({ spec }) {
  const [openFaq, setOpenFaq] = useState(0);
  const faqs = spec.faqs?.length ? spec.faqs.slice(0, 8) : threeKwFaqs;
  return (
    <>
      <section className="three-section">
        <div className="three-container">
          <p className="three-eyebrow">FAQs</p>
          <h2 className="three-section-title">Frequently asked questions</h2>
          <div className="three-faq-list">
            {faqs.map(([question, answer], index) => {
              const isOpen = openFaq === index;
              return (
                <article
                  className={`three-faq-item ${isOpen ? "is-open" : ""}`}
                  key={question}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span>
                      {isOpen ? (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          strokeLinecap="round"
                          className="h-3.5 w-3.5"
                        >
                          <path d="M5 12h14" />
                        </svg>
                      ) : (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          strokeLinecap="round"
                          className="h-3.5 w-3.5"
                        >
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      )}
                    </span>
                    <strong>{question}</strong>
                    <Icon name="chevron" className="h-5 w-5" />
                  </button>
                  <div>
                    <p>{answer}</p>
                  </div>
                </article>
              );
            })}
          </div>

          {/* <div className="three-final-cta">
            <img
              src="https://res.cloudinary.com/diywraupt/image/upload/v1780392810/7Watt22W_zdchgq.png"
              alt="3kW smart charger"
            />
            <div>
              <h2>Start with a 3kW smart charger.</h2>
              <p>Simple to install. Easy to manage. Ready when you are.</p>
              <div className="three-hero-actions">
                <PrimaryButton className="three-primary">
                  <Icon name="calendar" className="h-5 w-5" />
                  Get Started
                </PrimaryButton>
                <SecondaryButton className="three-secondary">
                  <Icon name="chat" className="h-5 w-5" />
                  Request a Callback
                </SecondaryButton>
              </div>
            </div>
           </div> */}
        </div>
      </section>
    </>
  );
}

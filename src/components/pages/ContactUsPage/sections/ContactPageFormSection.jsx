import {
  ArrowIcon,
  FieldIcon,
  assetBase,
} from "../../ContactUsPage.shared.jsx";
export function ContactPageFormSection({
  handleSubmit,
  resetFormState,
  submitState,
}) {
  return (
    <section className="contact-page__form-section">
      <div className="contact-page__container">
        <div className="contact-page__contact-wrap">
          <div className="contact-page__form-card">
            <div className="contact-page__form-heading">
              <h2>Ready to collaborate with us?</h2>
              <p>Who knows where a single message might lead you.</p>
            </div>

            <form
              id="contact-form"
              action="https://formspree.io/f/mvgrykro"
              method="POST"
              onSubmit={handleSubmit}
              onChange={() => {
                if (submitState === "success" || submitState === "error") {
                  resetFormState();
                }
              }}
              className="contact-page__form"
            >
              <div className="contact-page__form-grid">
                <div className="contact-page__field">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    required
                    autoComplete="given-name"
                    placeholder=" "
                  />
                  <label htmlFor="first-name">First Name*</label>
                  <FieldIcon src={`${assetBase}/user-icon.svg`} alt="" />
                </div>

                <div className="contact-page__field">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    required
                    autoComplete="family-name"
                    placeholder=" "
                  />
                  <label htmlFor="last-name">Last Name*</label>
                  <FieldIcon src={`${assetBase}/user-icon.svg`} alt="" />
                </div>

                <div className="contact-page__field">
                  <input
                    type="email"
                    name="business-email"
                    id="business-email"
                    required
                    autoComplete="email"
                    placeholder=" "
                  />
                  <label htmlFor="business-email">Business Email*</label>
                  <FieldIcon src={`${assetBase}/email-icon.svg`} alt="" />
                </div>

                <div className="contact-page__field">
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    required
                    autoComplete="tel"
                    placeholder=" "
                  />
                  <label htmlFor="phone-number">Phone Number*</label>
                  <FieldIcon src={`${assetBase}/phone-icon.svg`} alt="" />
                </div>

                <div className="contact-page__field contact-page__field--full">
                  <input
                    type="text"
                    name="company-name"
                    id="company-name"
                    autoComplete="organization"
                    placeholder=" "
                  />
                  <label htmlFor="company-name">Company Name</label>
                  <FieldIcon src={`${assetBase}/company-icon.svg`} alt="" />
                </div>

                <div className="contact-page__field contact-page__field--full contact-page__field--message">
                  <textarea
                    id="how-can-we-help"
                    name="how-can-we-help"
                    rows={5}
                    required
                    placeholder=" "
                    defaultValue=""
                  />
                  <label htmlFor="how-can-we-help">How can we help?*</label>
                  <FieldIcon src={`${assetBase}/message-icon.svg`} alt="" />
                </div>

                <label className="contact-page__checkbox" htmlFor="offers">
                  <input id="offers" name="offers" type="checkbox" />
                  <span>
                    Yes, I'd like to receive occasional news and tips.
                  </span>
                </label>

                {submitState === "success" && (
                  <div className="contact-page__status contact-page__status--success">
                    Message sent. We'll get back to you shortly.
                  </div>
                )}

                {submitState === "error" && (
                  <div className="contact-page__status contact-page__status--error">
                    Submission failed. Please try again.
                  </div>
                )}

                <div className="contact-page__submit">
                  <button
                    type="submit"
                    disabled={submitState === "loading"}
                    className="contact-page__button"
                  >
                    {submitState === "loading"
                      ? "Sending..."
                      : "Submit Inquiry"}
                    <ArrowIcon />
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="contact-page__map">
            <iframe
              title="ZVolta Karachi office map"
              src="https://www.google.com/maps?q=36F%2C%20Street%2036%2C%20Block%206%2C%20P.E.C.H.S%2C%20Karachi%2C%20Pakistan&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import { SmartLink } from "../../ContactUsPage.shared.jsx";
export function ContactPageHeroSection() {
  return (
    <section className="contact-page__hero">
      <div className="contact-page__container">
        <ul className="contact-page__breadcrumbs">
          <li>
            <SmartLink href="/">Home</SmartLink>
          </li>
          <li>
            <span>Contact us</span>
          </li>
        </ul>
        <h1 className="contact-page__hero-title">Contact us</h1>
      </div>
    </section>
  );
}

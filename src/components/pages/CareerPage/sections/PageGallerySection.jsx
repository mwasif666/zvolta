import {
  CareerButton,
  SmartLink,
  galleryImages,
} from "../../CareerPage.shared.jsx";
export function PageGallerySection() {
  return (
    <section
      className="career-page__gallery-section"
      aria-label="Life at ZVolta"
    >
      <div className="career-page__container career-page__gallery-container">
        <div className="career-page__gallery">
          {galleryImages.map((image) => (
            <div className="career-page__image-item" key={image.src}>
              <SmartLink
                href="/contact-us"
                className="career-page__image-stack"
              >
                <img src={image.src} alt={image.alt} />
              </SmartLink>
            </div>
          ))}
        </div>

        <div className="career-page__gallery-cta">
          <CareerButton
            href="/contact-us"
            className="career-page__button--gallery"
          >
            Begin today with us
          </CareerButton>
        </div>
      </div>
    </section>
  );
}

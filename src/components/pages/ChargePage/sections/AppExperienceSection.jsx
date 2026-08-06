import {
  APP_LINK,
  HeroDownloadButton,
  Icon,
  SkeletonImage,
  appExperienceFeatures,
  appExperienceSlides,
  useEffect,
  useState,
} from "../../ChargePage.shared.jsx";

export function AppExperienceSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) {
      return undefined;
    }
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % appExperienceSlides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="aex-section" data-no-reveal>
      <div className="charge-container">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="charge-reveal">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#16a34a]/30 bg-[#16a34a]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#16a34a]">
              <Icon name="bolt" className="h-4 w-4" />
              App Experience
            </p>
            <h2 className="mt-7 text-[40px] font-extrabold leading-[1.05] tracking-tight text-white md:text-[54px]">
              Everything You Need in the App
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-[#A1A1A1]">
              The Zvolta app puts complete control of your charging experience
              in your hands.
            </p>

            <div className="aex-list">
              <span className="aex-rail" aria-hidden="true" />
              {appExperienceFeatures.map((feature) => (
                <div key={feature.title} className="aex-item">
                  <span className="aex-dot" aria-hidden="true" />
                  <div className="aex-card">
                    <span className="aex-icon">
                      <Icon name={feature.icon} className="h-5 w-5" />
                    </span>
                    <div className="aex-card-text">
                      <h3>{feature.title}</h3>
                      <p>{feature.copy}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="charge-reveal aex-slider">
            {appExperienceSlides.map((src, index) => (
              <SkeletonImage
                key={src}
                src={src}
                alt={`Zvolta app screen ${index + 1}`}
                className={`aex-slide ${index === activeSlide ? "is-active" : ""}`}
                showSkeleton={index === activeSlide}
                skeletonTone="dark"
                loading="lazy"
              />
            ))}
            <div className="aex-dots">
              {appExperienceSlides.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  aria-label={`Show app screen ${index + 1}`}
                  className={`aex-dot-btn ${index === activeSlide ? "is-active" : ""}`}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="charge-reveal aex-trustbar">
          <span className="aex-trust-icon">
            <Icon name="shield" className="h-5 w-5" />
          </span>
          <strong className="aex-trust-title">
            Secure. Reliable. Built for every EV driver.
          </strong>
          <span className="aex-trust-divider" aria-hidden="true" />
          <span className="aex-trust-note">
            Trusted by hundreds of EV drivers across Karachi.
          </span>
          <HeroDownloadButton href={APP_LINK} className="aex-trust-cta">
            Download App
          </HeroDownloadButton>
        </div>
      </div>
    </section>
  );
}

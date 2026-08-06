import {
  Icon,
  Navigation,
  Pagination,
  PrimaryButton,
  Reveal,
  RotatingText,
  Swiper,
  SwiperSlide,
  hostRotatingWords,
  hostWhoBenefits,
  hostWhoCards,
} from "../../HostPage.shared.jsx";
export function WhoSection({ setShowHostingSections, showHostingSections }) {
  return (
    <section id="who" className="host-who-section">
      <div className="host-container host-who-inner">
        <div className="host-who-top">
          <Reveal className="host-who-copy">
            <p className="host-who-eyebrow">
              <span className="host-who-number">04</span>
              Who
            </p>
            <h2 className="host-who-title">
              For location owners who want to <span>host chargers.</span>
            </h2>
            <p className="host-who-copy-text">
              Whether you manage one location or many, it's easy to get started.
            </p>
          </Reveal>

          <Reveal className="host-who-cards" delay={0.08}>
            <button
              type="button"
              className="host-who-nav host-who-nav-prev"
              aria-label="Previous category"
            >
              <Icon name="arrow" className="h-6 w-6" />
            </button>
            <Swiper
              modules={[Navigation, Pagination]}
              className="host-who-slider"
              slidesPerView="auto"
              spaceBetween={18}
              navigation={{
                prevEl: ".host-who-nav-prev",
                nextEl: ".host-who-nav-next",
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: "auto",
                  spaceBetween: 18,
                },
                1024: {
                  slidesPerView: "auto",
                  spaceBetween: 20,
                },
              }}
            >
              {hostWhoCards.map((item) => (
                <SwiperSlide key={item.title}>
                  <article className="host-who-card">
                    <img src={item.image} alt={item.title} />
                    <div className="host-who-card-content">
                      <h3 className="host-who-card-title">{item.title}</h3>
                      <span className="host-who-card-line" />
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              type="button"
              className="host-who-nav host-who-nav-next"
              aria-label="Next category"
            >
              <Icon name="arrow" className="h-6 w-6" />
            </button>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="host-who-strip">
          <h3 className="host-who-strip-title">
            You set the
            <br />
            <RotatingText
              texts={hostRotatingWords}
              mainClassName="host-rotating-text"
              staggerFrom="last"
              initial={{
                y: "100%",
              }}
              animate={{
                y: 0,
              }}
              exit={{
                y: "-120%",
              }}
              staggerDuration={0.025}
              splitLevelClassName="host-rotating-text-split"
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 400,
              }}
              rotationInterval={2000}
              splitBy="characters"
              auto
              loop
            />
          </h3>
          <span className="host-who-divider" />
          {hostWhoBenefits.map((item) => (
            <div className="host-who-benefit" key={item.title}>
              <span className="host-who-benefit-icon">
                <Icon name={item.icon} className="h-6 w-6" />
              </span>
              <span>
                <h4>{item.title}</h4>
                <p>{item.copy}</p>
              </span>
            </div>
          ))}
          <div className="host-who-actions">
            <PrimaryButton href="/contact-us" className="host-who-primary">
              Get started
            </PrimaryButton>
            {!showHostingSections ? (
              <button
                type="button"
                className="host-expand-button"
                onClick={() => setShowHostingSections(true)}
              >
                View host stories
                <Icon name="arrow" className="h-4 w-4" />
              </button>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import {
  Icon,
  Navigation,
  Pagination,
  Swiper,
  SwiperSlide,
  carouselSlides,
} from "../../AppstorePage.shared.jsx";
export function AppScreenshotsSection() {
  return (
    <section className="appstore-container appstore-carousel-section">
      <button
        type="button"
        className="appstore-carousel-button appstore-carousel-prev"
        aria-label="Previous screenshot"
      >
        <Icon name="arrow" />
      </button>
      <button
        type="button"
        className="appstore-carousel-button appstore-carousel-next"
        aria-label="Next screenshot"
      >
        <Icon name="arrow" />
      </button>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: ".appstore-carousel-prev",
          nextEl: ".appstore-carousel-next",
        }}
        pagination={{
          clickable: true,
        }}
        loop
        spaceBetween={24}
        slidesPerView={1.08}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 22,
          },
          980: {
            slidesPerView: 3,
            spaceBetween: 26,
          },
        }}
        className="appstore-swiper"
      >
        {carouselSlides.map((slide) => (
          <SwiperSlide key={slide.image}>
            <article className="appstore-slide-card">
              <img src={slide.image} alt={slide.alt} />
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

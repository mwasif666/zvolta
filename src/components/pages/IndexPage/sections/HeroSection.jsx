import { SmartLink } from "../../IndexPage.shared.jsx";
export function HeroSection() {
  return (
    <section
      id="hero-section"
      className="relative w-full h-screen bg-gray-900 flex flex-col items-center justify-end text-center group overflow-hidden p-0 m-0 pb-20"
    >
      <img
        id="hero-bg-img"
        src="https://res.cloudinary.com/diywraupt/image/upload/v1778829470/Day_New-clean_xksizj.png"
        alt="ZVolta Background"
        className="absolute inset-0 w-full h-full object-cover z-0 select-none pointer-events-none"
        data-critical="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 3xl:text-8xl font-display font-medium tracking-tight text-white leading-[1.1] mb-6 drop-shadow-lg">
          <span id="hero-changing-word" className="word-swapper text-white" />{" "}
          Should Feel Easy
        </h1>
        <p className="text-base sm:text-lg md:text-xl 3xl:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light mb-10 fade-in-up delay-100 px-4">
          And we are building the charging network that enables the future of
          electric mobility in Pakistan.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full fade-in-up delay-200">
          <SmartLink
            href="/coming-soon"
            className="w-full sm:w-auto px-10 py-4 bg-white text-black rounded-full font-bold hover:bg-emerald-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg text-lg"
          >
            Learn How <i className="bi bi-arrow-right" />
          </SmartLink>
          <SmartLink
            href="/contact-us"
            className="w-full sm:w-auto px-10 py-4 bg-zinc-900/40 backdrop-blur-md border border-white/10 text-white rounded-full font-bold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 text-lg"
          >
            Contact Us
          </SmartLink>
        </div>
      </div>
    </section>
  );
}

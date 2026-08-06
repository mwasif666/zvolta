import { SmartLink } from "../../IndexPage.shared.jsx";
export function PartnersSection() {
  return (
    <section
      id="partners-section"
      className="py-24 bg-white border-t border-gray-200 overflow-hidden relative"
    >
      <div className="max-w-[1400px] 3xl:max-w-[2000px] mx-auto px-4 md:px-8 text-center mb-16">
        <h2 className="text-3xl md:text-5xl 3xl:text-7xl font-display font-bold tracking-tight text-zinc-900 mb-4">
          Trusted by partners <br /> shaping the electric future
        </h2>
      </div>
      <div className="relative w-full max-w-[100vw] overflow-hidden py-4 mb-12 group flex flex-col justify-center">
        <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-zinc-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-zinc-50 to-transparent z-10 pointer-events-none" />
        <div className="w-full overflow-hidden mb-6">
          <div
            id="partner-track-top"
            className="flex items-center gap-6 md:gap-8 3xl:gap-16 w-max will-change-transform px-4"
          >
            <div className="partner-item w-28 h-28 md:w-36 md:h-36 3xl:w-48 3xl:h-48 overflow-hidden border-2 border-white  shrink-0 bg-white grayscale hover:grayscale-0 transition-all duration-500">
              <img
                src="https://revoo-ev.com.pk/static/home/images/logofiamfz1-1.svg"
                className="w-full h-full object-contain p-4"
                alt="Revoo"
              />
            </div>
            <div className="partner-item w-28 h-28 md:w-36 md:h-36 3xl:w-48 3xl:h-48 overflow-hidden border-2 border-white  shrink-0 bg-white grayscale hover:grayscale-0 transition-all duration-500">
              <img
                src="https://vlektra.com/wp-content/uploads/2025/03/image-42-e1755686386806.png"
                className="w-full h-full object-contain p-4 invert"
                alt="Vlektra"
              />
            </div>
            <div className="partner-item w-28 h-28 md:w-36 md:h-36 3xl:w-48 3xl:h-48  overflow-hidden border-2 border-white  shrink-0 bg-white grayscale hover:grayscale-0 transition-all duration-500">
              <img
                src="https://workhall.co/_next/image?url=%2Fimages%2Fwh.png&w=128&q=100"
                className="w-full h-full object-contain p-4"
                alt="Orko"
              />
            </div>
            <div className="partner-item w-28 h-28 md:w-36 md:h-36 3xl:w-48 3xl:h-48 overflow-hidden border-2 border-white shrink-0 bg-white grayscale hover:grayscale-0 transition-all duration-500">
              <img
                src="https://aim-motors.com/wp-content/uploads/2024/08/logo-w1.jpg"
                className="w-full h-full object-contain p-4"
                alt="AIM Motors"
              />
            </div>
          </div>
        </div>
        <div className="w-full overflow-hidden">
          <div
            id="partner-track-bottom"
            className="flex items-center gap-6 md:gap-8 3xl:gap-16 w-max will-change-transform px-4"
          >
            <div className="partner-item w-28 h-28 md:w-36 md:h-36 3xl:w-48 3xl:h-48  overflow-hidden border-2 border-white  shrink-0 bg-white grayscale hover:grayscale-0 transition-all duration-500">
              <img
                src="img/Black-logo.webp"
                className="w-full h-full object-contain p-4"
                alt="Sazgar"
              />
            </div>
            <div className="partner-item w-28 h-28 md:w-36 md:h-36 3xl:w-48 3xl:h-48 overflow-hidden border-2 border-white  shrink-0 bg-white grayscale hover:grayscale-0 transition-all duration-500">
              <img
                src="https://ecodost.com.pk/wp-content/uploads/2024/05/Ecodost-01.svg"
                className="w-full h-full object-contain p-4 invert"
                alt="Ecodost"
              />
            </div>
            <div className="partner-item w-28 h-28 md:w-36 md:h-36 3xl:w-48 3xl:h-48  overflow-hidden border-2 border-white shrink-0 bg-white grayscale hover:grayscale-0 transition-all duration-500">
              <img
                src="https://workhall.co/_next/image?url=%2Fimages%2Fwh.png&w=128&q=100"
                className="w-full h-full object-contain p-4"
                alt="Workhall"
              />
            </div>
            <div className="partner-item w-28 h-28 md:w-36 md:h-36 3xl:w-48 3xl:h-48 overflow-hidden border-2 border-white  shrink-0 bg-white grayscale hover:grayscale-0 transition-all duration-500">
              <img
                src="https://www.ignitesportspavilion.com/images/ignite_logo.png"
                className="w-full h-full object-contain p-4 invert"
                alt="Ignite"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-3xl 3xl:max-w-5xl mx-auto px-4 text-center">
        <p className="text-lg md:text-xl 3xl:text-3xl text-zinc-500 mb-12 leading-relaxed font-light">
          From local businesses to large operators, we work with groups bringing
          cleaner energy to more places.
        </p>
        <div className="flex justify-center items-center gap-3 group/partner cursor-pointer">
          <SmartLink
            href="/charging-partners"
            className="px-8 py-4 3xl:px-12 3xl:py-6 bg-zinc-900 text-white rounded-full font-bold text-base md:text-lg 3xl:text-2xl transition-colors duration-300 group-hover/partner:bg-emerald-600 shadow-xl"
          >
            Become A Partner
          </SmartLink>
          <SmartLink
            href="/charging-partners"
            className="w-14 h-14 3xl:w-20 3xl:h-20 flex items-center justify-center bg-gray-100 border border-zinc-200 rounded-full text-black transition-all duration-300 group-hover/partner:bg-emerald-600 group-hover/partner:text-white group-hover/partner:border-emerald-600 shadow-md"
          >
            <i className="bi bi-arrow-right text-xl 3xl:text-2xl group-hover/partner:-rotate-45 transition-transform duration-300" />
          </SmartLink>
        </div>
      </div>
    </section>
  );
}

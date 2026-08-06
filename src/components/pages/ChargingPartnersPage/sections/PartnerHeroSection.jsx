import { SmartLink } from "../../ChargingPartnersPage.shared.jsx";
export function PartnerHeroSection() {
  return (
    <section
      id="partner-hero"
      className="relative w-full min-h-screen bg-[#050505] flex flex-col items-center justify-center text-center group overflow-hidden p-0 m-0 pb-20 pt-32"
    >
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none animate-pulse-slow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-900/10 blur-[100px] rounded-full pointer-events-none animate-pulse-slow"
        style={{
          animationDelay: "2s",
        }}
      />
      <div className="max-w-[1400px] w-full mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        <div className="text-center lg:text-left order-2 lg:order-1 fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
            <span className="w-2 h-2 rounded-full bg-emerald-500 absolute" />
            Partnership Program
          </div>
          <h1 className="text-5xl md:text-7xl 3xl:text-8xl font-display font-medium tracking-tight text-white leading-[1.1] mb-6 drop-shadow-lg">
            Powering <br />
            <span className="text-emerald-500">Pakistan</span>
            Together.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light mb-10">
            Transform your location into a revenue-generating EV hub. We
            install, manage, and maintain the chargers. You simply provide the
            space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <SmartLink
              href="#apply"
              className="w-full sm:w-auto px-10 py-4 bg-white text-black rounded-full font-bold hover:bg-emerald-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg text-lg"
            >
              Host a Charger <i className="bi bi-arrow-right" />
            </SmartLink>
            <SmartLink
              href="#horizontal-scroll-section"
              className="w-full sm:w-auto px-10 py-4 bg-zinc-900/40 backdrop-blur-md border border-white/10 text-white rounded-full font-bold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 text-lg"
            >
              How It Works
            </SmartLink>
          </div>
        </div>
        <div className="relative h-[400px] md:h-[500px] lg:h-[700px] w-full flex items-center justify-center order-1 lg:order-2 perspective-1000 group">
          <div className="absolute inset-0 border border-white/5 rounded-full scale-90 animate-spin-slow" />
          <div
            className="absolute inset-0 border border-emerald-500/10 rounded-full scale-75 animate-spin-slow"
            style={{
              animationDirection: "reverse",
            }}
          />
          <div className="relative z-10 w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1 animate-float-slow">
            <img
              src="/img/ev-charging-station-blue.png"
              alt="ZVolta Charger"
              className="w-auto h-full max-h-[600px] object-contain drop-shadow-[0_20px_50px_rgba(22, 163, 74,0.15)]"
              data-critical="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

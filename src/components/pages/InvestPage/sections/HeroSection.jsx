import { SmartLink } from "../../InvestPage.shared.jsx";
export function HeroSection() {
  return (
    <section
      id="hero-section"
      className="relative w-full min-h-[90vh] flex items-center bg-white overflow-hidden"
    >
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-emerald-100/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 w-full h-full flex flex-col md:flex-row items-center gap-12 lg:gap-20 pt-32 pb-20 relative z-10">
        <div className="md:w-1/2 flex flex-col items-start text-left">
          <div className="inline-block mb-6 px-5 py-2 rounded-full border border-emerald-600/20 bg-emerald-50 text-emerald-700 text-xs md:text-sm font-bold tracking-widest uppercase shadow-sm">
            New Asset Class
          </div>
          <h1 className="text-5xl md:text-7xl 3xl:text-8xl font-display font-bold tracking-tight text-zinc-900 leading-[1.1] mb-6">
            Invest in an <br /> EV Rickshaw.
          </h1>
          <h2 className="text-3xl md:text-5xl 3xl:text-6xl font-display font-medium text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 mb-8">
            Earn Monthly Income.
          </h2>
          <p className="text-lg md:text-xl text-zinc-500 max-w-lg leading-relaxed font-light mb-10">
            A new asset class for smart investors. We manage the vehicle, you
            enjoy the passive returns. It's that simple.
          </p>
          <SmartLink
            href="#invest-form-section"
            className="group relative inline-flex items-center gap-3 px-10 py-4 bg-zinc-900 text-white rounded-full font-bold text-lg transition-all duration-300 hover:bg-emerald-600 hover:scale-[1.02] shadow-xl shadow-zinc-900/20 hover:shadow-emerald-600/30 overflow-hidden"
          >
            <span className="relative z-10">Become an Investor</span>
            <i className="bi bi-arrow-right relative z-10 group-hover:translate-x-1 transition-transform" />
          </SmartLink>
        </div>
        <div className="md:w-1/2 relative w-full h-full flex items-center justify-center">
          <div className="relative w-full aspect-[4/3] rounded-[3rem] overflow-hidden border border-zinc-200 shadow-2xl shadow-zinc-200/50 group">
            <img
              src="/img/zvolta-1.jpg"
              alt="Modern EV Rickshaw"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-inline-onerror="this.onerror=null;this.src='https://fastly.restofworld.org/uploads/2025/02/2025-P0124-Mehboob-41-scaled.jpg?width=1200&dpr=2';"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[3rem] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

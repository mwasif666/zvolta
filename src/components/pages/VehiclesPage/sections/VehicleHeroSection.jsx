import { SmartLink } from "../../VehiclesPage.shared.jsx";
export function VehicleHeroSection() {
  return (
    <section id="vehicle-hero" className="dark-hero">
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-flex rounded-full bg-gradient-to-r from-yellow-400 to-green-600 p-[1px] mb-8 fade-in-up">
          <div className="inline-flex items-center bg-gray-800 text-white text-sm font-semibold px-4 py-1.5 rounded-full font-sans">
            ZVolta Electric Rickshaws
            <SmartLink
              href="#vehicle-showcase"
              className="ml-3 inline-flex items-center justify-center px-2.5 py-1 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </SmartLink>
          </div>
        </div>
        <div className="text-center mb-12 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6 leading-tight">
            <span className="inline-block animate-fade-in delay-100 bg-gradient-to-r from-white via-yellow-300 to-green-600 bg-clip-text text-transparent">
              Discover the
            </span>
            <span className="inline-block animate-fade-in delay-200 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              Right EV
            </span>
            <span className="inline-block animate-fade-in delay-300 bg-gradient-to-r from-green-400 to-white bg-clip-text text-transparent">
              for Every Role
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed animate-fade-in delay-400 font-light">
            From daily routes to deliveries, our electric rickshaws are built
            for impact—efficient, GPS-enabled, and ready to earn.
          </p>
        </div>
        <div className="mt-8 flex items-center justify-center fade-in-up delay-200">
          <button
            id="magnetic-cta"
            className="flex items-center gap-2 px-8 py-3 bg-white text-black font-bold tracking-wide uppercase rounded-full hover:bg-emerald-400 transition-all duration-300 text-sm shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 17L17 7M7 7h10v10"
              />
            </svg>
            See Investment Plans
          </button>
        </div>
        <div className="mt-20 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto fade-in-up delay-200">
          <SmartLink
            href="#vehicle-showcase"
            className="hero-feature-card group"
          >
            <div className="text-left z-10">
              <h3 className="font-display font-bold text-2xl text-white mb-2">
                For Every Passenger
              </h3>
              <p className="text-green-400 font-semibold flex items-center gap-2 font-mono text-sm">
                Explore Passenger EVs{" "}
                <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform" />
              </p>
            </div>
            <div className="z-10">
              <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center text-green-500 text-2xl">
                <i className="fas fa-users" />
              </div>
            </div>
          </SmartLink>
          <SmartLink
            href="#vehicle-showcase"
            className="hero-feature-card group"
          >
            <div className="text-left z-10">
              <h3 className="font-display font-bold text-2xl text-white mb-2">
                For Every Load
              </h3>
              <p className="text-green-400 font-semibold flex items-center gap-2 font-mono text-sm">
                Explore Loader EVs{" "}
                <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform" />
              </p>
            </div>
            <div className="z-10">
              <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center text-green-500 text-2xl">
                <i className="fas fa-truck-loading" />
              </div>
            </div>
          </SmartLink>
        </div>
      </div>
    </section>
  );
}

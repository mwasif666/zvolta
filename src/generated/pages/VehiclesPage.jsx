import { SmartLink } from '../../components/SmartLink';

export default function VehiclesPage() {
  return (
    <>
      <style data-page-style="vehicles.html:1">{`/* =========================================
           PAGE-SPECIFIC STYLING (Preserved)
           ========================================= */

        /* Dark Hero Base */
        .dark-hero {
            position: relative;
            background-color: #0d131e; /* dark slate blue */
            color: #e5e7eb;
            padding-top: 10rem; /* Extra padding for Floating Dock */
            padding-bottom: 6rem;
            overflow: hidden;
            min-height: 85vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        /* The Green Elliptical Fade */
        .dark-hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 300%;
            height: 700px;
            background: radial-gradient(
                ellipse 100% 50% at 50% 0%,
                rgba(34, 197, 94, 0.15),
                transparent 80%
            );
            pointer-events: none;
            z-index: 0;
        }

        /* Feature Cards (Glassmorphism + Gradient) */
        .hero-feature-card {
            background: linear-gradient(135deg, #1f2937, #111827);
            border: 1px solid #374151;
            border-radius: 1rem;
            padding: 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            z-index: 1;
        }

        /* Card Hover Effect */
        .hero-feature-card:before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 50%;
            height: 100%;
            background: radial-gradient(circle at top right, rgba(34, 197, 94, 0.15), transparent 70%);
            transition: all 0.5s ease;
        }

        .hero-feature-card:hover {
            border-color: #22c55e;
            transform: translateY(-5px);
            box-shadow: 0 10px 30px -5px rgba(0,0,0,0.3);
        }

        .hero-feature-card:hover:before {
            background: radial-gradient(circle at top right, rgba(34, 197, 94, 0.25), transparent 70%);
            transform: scale(1.5);
        }

        /* Magnetic Button Transition */
        #magnetic-cta { transition: transform 0.1s linear; }`}</style>
      <div>
        <SmartLink
          id="dynamic-logo"
          href="/"
          className="fixed top-6 left-6 z-[900] w-12 h-12 rounded-full bg-zinc-900/90 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-xl transition-all duration-500 hover:scale-105"
        >
          <img src="img/symbol logo.png" alt="ZVolta" className="h-6 w-auto" />
        </SmartLink>
        <button
          id="dynamic-sidebar-btn"
          className="fixed top-6 right-6 z-[900] w-12 h-12 rounded-full bg-[#006b45] backdrop-blur-md border border-emerald-500/30 text-white flex items-center justify-center shadow-xl transition-all duration-500 hover:bg-[#008f5d] hover:scale-105 group"
        >
          <i className="bi bi-list text-2xl group-hover:rotate-180 transition-transform duration-500" />
        </button>
        <div
          id="floating-dock-container"
          className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-[900] -translate-y-[200%] transition-transform duration-700 cubic-bezier(0.34, 1.56, 0.64, 1)"
        >
          <div className="flex items-center gap-1 p-1.5 bg-[#111]/90 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl ring-1 ring-white/5 px-2">
            <SmartLink
              href="/"
              className="dock-pill-link group w-10 h-10 flex items-center justify-center rounded-full text-white/60 hover:text-white transition-colors relative z-10"
            >
              <i className="bi bi-house-door-fill text-lg" />
            </SmartLink>
            <div className="w-px h-5 bg-white/10 mx-1" />
            <SmartLink
              href="/vehicles"
              className="dock-pill-link px-4 py-2 rounded-full text-xs font-bold text-white transition-colors relative z-10 bg-white/10"
            >
              Vehicles
            </SmartLink>
            <SmartLink
              href="/charging-partners"
              className="dock-pill-link px-4 py-2 rounded-full text-xs font-bold text-white/60 hover:text-white transition-colors relative z-10"
            >
              Charging
            </SmartLink>
            <SmartLink
              href="/contact-us"
              className="dock-pill-link px-4 py-2 rounded-full text-xs font-bold text-white/60 hover:text-white transition-colors relative z-10"
            >
              Contact
            </SmartLink>
          </div>
        </div>
        <div
          id="mobile-menu-overlay"
          className="fixed inset-0 z-[10000] invisible opacity-0 pointer-events-none"
        >
          <div
            id="mobile-menu-backdrop"
            className="absolute inset-0 bg-zinc-200/80 backdrop-blur-3xl opacity-0 transition-opacity duration-500"
          />
          <div className="absolute top-6 right-6 z-50">
            <button
              id="mobile-menu-close"
              className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center hover:bg-emerald-600 hover:rotate-90 transition-all duration-300 shadow-2xl opacity-0 translate-y-[-20px]"
            >
              <i className="bi bi-x-lg text-xl" />
            </button>
          </div>
          <div className="absolute inset-0 w-full h-[100dvh] overflow-y-auto overflow-x-hidden no-scrollbar">
            <div className="w-full min-h-full max-w-[1600px] mx-auto p-4 pt-24 md:p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-4 pb-24">
              <div className="menu-card lg:col-span-5 bg-black rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group min-h-[500px] opacity-0 translate-y-[50px]">
                <div className="absolute top-8 right-8 w-32 h-32 opacity-20 bg-[radial-gradient(#10b981_2px,transparent_2px)] [background-size:8px_8px] rounded-full pointer-events-none" />
                <nav className="flex flex-col gap-4 mt-4 relative z-10">
                  <SmartLink
                    href="/"
                    className="mobile-menu-link text-5xl md:text-6xl font-display font-bold text-white hover:text-emerald-500 transition-colors flex items-center justify-between group/link"
                  >
                    Home
                  </SmartLink>
                  <div className="h-px bg-white/10 w-full" />
                  <SmartLink
                    href="/vehicles"
                    className="mobile-menu-link text-5xl md:text-6xl font-display font-bold text-emerald-500 transition-colors flex items-center justify-between group/link"
                  >
                    Vehicles
                  </SmartLink>
                  <div className="h-px bg-white/10 w-full" />
                  <SmartLink
                    href="/charging-partners"
                    className="mobile-menu-link text-5xl md:text-6xl font-display font-bold text-white hover:text-emerald-500 transition-colors flex items-center justify-between group/link"
                  >
                    Charging
                  </SmartLink>
                  <div className="h-px bg-white/10 w-full" />
                  <SmartLink
                    href="/contact-us"
                    className="mobile-menu-link text-5xl md:text-6xl font-display font-bold text-white hover:text-emerald-500 transition-colors flex items-center justify-between group/link"
                  >
                    Contact
                  </SmartLink>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div
          id="custom-loader"
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center pointer-events-none"
        >
          <div
            id="loader-blind-top"
            className="absolute top-0 left-0 w-full h-[51%] bg-z-black z-0 pointer-events-auto border-b border-white/5"
          />
          <div
            id="loader-blind-bottom"
            className="absolute bottom-0 left-0 w-full h-[51%] bg-z-black z-0 pointer-events-auto border-t border-white/5"
          />
          <div
            id="loader-content"
            className="relative z-10 flex flex-col items-center pointer-events-auto will-change-transform"
          >
            <div
              id="loader-glow"
              className="absolute inset-0 bg-z-green/10 blur-[100px] rounded-full scale-0 animate-pulse-slow"
            />
            <div className="relative mb-10 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
              <img
                src="img/symbol logo.png"
                id="loader-logo"
                className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(22,163,74,0.3)] will-change-transform"
                alt="ZVolta Loading"
              />
            </div>
            <div
              id="loader-bar-container"
              className="w-64 h-[2px] bg-zinc-800 rounded-full overflow-hidden relative mb-4"
            >
              <div
                id="loader-bar"
                className="absolute top-0 left-0 h-full w-0 bg-white shadow-[0_0_15px_2px_rgba(255,255,255,0.8)]"
              />
            </div>
            <div
              id="loader-status-container"
              className="h-6 overflow-hidden flex flex-col items-center"
            >
              <div
                id="loader-status"
                className="font-mono text-[10px] tracking-[0.4em] text-gray-500 uppercase"
              >
                INITIALIZING...
              </div>
            </div>
          </div>
        </div>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main className="w-full bg-white">
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
                      From daily routes to deliveries, our electric rickshaws
                      are built for impact—efficient, GPS-enabled, and ready to
                      earn.
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
                          Explore Passenger EVs{' '}
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
                          Explore Loader EVs{' '}
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
              <div className="content-overlap bg-white">
                <section
                  id="vehicle-showcase"
                  className="py-24 px-4 md:px-8 bg-zinc-50 border-t border-zinc-200 flex flex-col justify-center"
                >
                  <div className="max-w-[1600px] 3xl:max-w-[2200px] mx-auto w-full">
                    <div className="mb-12 md:mb-24 px-4">
                      <h2 className="text-4xl md:text-6xl font-display font-bold text-black mb-4">
                        Choose Your EV
                      </h2>
                      <p className="text-zinc-500 text-xl max-w-xl">
                        We offer a range of electric vehicles tailored to your
                        needs.
                      </p>
                    </div>
                    <div className="flex flex-col md:grid md:grid-cols-3 gap-6 w-full">
                      <div className="group relative w-full md:w-auto h-[500px] 3xl:h-[700px] overflow-hidden bg-white rounded-[2.5rem] border border-gray-200 shadow-xl transition-transform duration-500 hover:-translate-y-2">
                        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 to-white z-0" />
                        <div className="absolute inset-0 flex items-center justify-center p-8 z-10 transition-transform duration-700 group-hover:scale-105">
                          <img
                            src="img/3-seater.png"
                            alt="3-Seater Rickshaw"
                            className="w-full h-auto max-h-[60%] object-contain drop-shadow-2xl"
                            data-inline-onerror="this.src='https://placehold.co/600x400/transparent/333?text=3-Seater'"
                          />
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-8 3xl:p-12 z-20 bg-white/80 backdrop-blur-md border-t border-gray-100">
                          <h3 className="text-2xl md:text-4xl font-display font-bold mb-2">
                            3-Seater Rickshaw
                          </h3>
                          <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
                            Compact and efficient. Perfect for city streets.
                          </p>
                          <SmartLink
                            href="#contact-section"
                            className="inline-flex items-center gap-2 font-bold text-emerald-600 hover:text-emerald-800 transition-colors"
                          >
                            View Details <i className="bi bi-arrow-right" />
                          </SmartLink>
                        </div>
                      </div>
                      <div className="group relative w-full md:w-auto h-[500px] 3xl:h-[700px] overflow-hidden bg-zinc-900 rounded-[2.5rem] border border-zinc-800 shadow-xl transition-transform duration-500 hover:-translate-y-2">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/20 to-black z-0" />
                        <div className="absolute inset-0 flex items-center justify-center p-8 z-10 transition-transform duration-700 group-hover:scale-105">
                          <img
                            src="img/bike-ev.png"
                            alt="Electric Bike"
                            className="w-full h-auto max-h-[60%] object-contain drop-shadow-2xl"
                            data-inline-onerror="this.src='https://placehold.co/600x400/transparent/fff?text=EV+Bike'"
                          />
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-8 3xl:p-12 z-20 bg-zinc-900/90 backdrop-blur-md border-t border-white/10">
                          <h3 className="text-2xl md:text-4xl font-display font-bold text-white mb-2">
                            Electric Bike
                          </h3>
                          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
                            Ideal for delivery riders. Agile and cost-effective.
                          </p>
                          <SmartLink
                            href="#contact-section"
                            className="inline-flex items-center gap-2 font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                          >
                            View Details <i className="bi bi-arrow-right" />
                          </SmartLink>
                        </div>
                      </div>
                      <div className="group relative w-full md:w-auto h-[500px] 3xl:h-[700px] overflow-hidden bg-white rounded-[2.5rem] border border-gray-200 shadow-xl transition-transform duration-500 hover:-translate-y-2">
                        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 to-white z-0" />
                        <div className="absolute inset-0 flex items-center justify-center p-8 z-10 transition-transform duration-700 group-hover:scale-105">
                          <img
                            src="img/loader-ev.jpg"
                            alt="EV Loader"
                            className="w-full h-auto max-h-[60%] object-contain drop-shadow-2xl"
                            data-inline-onerror="this.src='https://placehold.co/600x400/transparent/333?text=Heavy+Loader'"
                          />
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-8 3xl:p-12 z-20 bg-white/80 backdrop-blur-md border-t border-gray-100">
                          <h3 className="text-2xl md:text-4xl font-display font-bold mb-2">
                            EV Loader
                          </h3>
                          <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
                            800kg capacity. The perfect pickup replacement.
                          </p>
                          <SmartLink
                            href="#contact-section"
                            className="inline-flex items-center gap-2 font-bold text-emerald-600 hover:text-emerald-800 transition-colors"
                          >
                            View Details <i className="bi bi-arrow-right" />
                          </SmartLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="py-24 px-4 md:px-8 bg-white text-zinc-900">
                  <div className="max-w-[1200px] mx-auto">
                    <div className="text-center mb-16">
                      <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                        Standard on All Vehicles
                      </h2>
                      <p className="text-gray-500 text-lg">
                        Every ZVolta vehicle comes smart-enabled.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-zinc-50 border border-zinc-200 rounded-[2rem] p-8 hover:border-emerald-500/50 transition-colors group">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-emerald-600 text-2xl shadow-sm mb-6 group-hover:scale-110 transition-transform">
                          <i className="fas fa-location-crosshairs" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">GPS Tracking</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          Real-time location updates via the ZVolta App.
                        </p>
                      </div>
                      <div className="bg-zinc-900 text-white border border-zinc-800 rounded-[2rem] p-8 hover:border-emerald-500/50 transition-colors group">
                        <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center text-emerald-400 text-2xl shadow-sm mb-6 group-hover:scale-110 transition-transform">
                          <i className="fas fa-file-alt" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                          Daily Reporting
                        </h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          Automated trip logs, earning reports, and efficiency
                          metrics.
                        </p>
                      </div>
                      <div className="bg-zinc-50 border border-zinc-200 rounded-[2rem] p-8 hover:border-emerald-500/50 transition-colors group">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-emerald-600 text-2xl shadow-sm mb-6 group-hover:scale-110 transition-transform">
                          <i className="fas fa-battery-full" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                          Battery Health
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          Predictive maintenance alerts. Monitor voltage and
                          range.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <footer className="bg-black text-white pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
                  <div className="max-w-[1400px] mx-auto px-6 mb-20 text-center">
                    <h2 className="text-4xl md:text-6xl 3xl:text-8xl font-display font-bold tracking-tight mb-4">
                      Let's move electric <br /> forward together.
                    </h2>
                  </div>
                  <div className="border-y border-white/10 bg-black">
                    <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
                      <div className="group p-8 md:p-12 hover:bg-white/5 transition-colors duration-300 flex flex-col h-full min-h-[300px]">
                        <div className="mb-auto">
                          <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">
                            Host A Charger
                          </h3>
                          <ul className="space-y-4 text-zinc-400">
                            <li>
                              <SmartLink
                                href="/charging-partners"
                                className="hover:text-emerald-400 transition-colors block py-1"
                              >
                                Charging Partners
                              </SmartLink>
                            </li>
                            <li>
                              <SmartLink
                                href="/invest"
                                className="hover:text-emerald-400 transition-colors block py-1"
                              >
                                For Investors
                              </SmartLink>
                            </li>
                            <li>
                              <SmartLink
                                href="/invest-form"
                                className="hover:text-emerald-400 transition-colors block py-1"
                              >
                                Site requirements
                              </SmartLink>
                            </li>
                            <li>
                              <SmartLink
                                href="/about-us"
                                className="hover:text-emerald-400 transition-colors block py-1"
                              >
                                About Us
                              </SmartLink>
                            </li>
                          </ul>
                        </div>
                        <div className="mt-8 pt-6 border-t border-white/10">
                          <SmartLink
                            href="/invest-form"
                            className="flex items-center justify-between text-white font-bold group-hover:text-emerald-400 transition-colors"
                          >
                            Start hosting{' '}
                            <i className="bi bi-arrow-right -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                          </SmartLink>
                        </div>
                      </div>
                      <div className="group p-8 md:p-12 hover:bg-white/5 transition-colors duration-300 flex flex-col h-full min-h-[300px]">
                        <div className="mb-auto">
                          <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">
                            Charge Your EV
                          </h3>
                          <ul className="space-y-4 text-zinc-400">
                            <li>
                              <SmartLink
                                href="/driver-network"
                                className="hover:text-emerald-400 transition-colors block py-1"
                              >
                                Drivers Network
                              </SmartLink>
                            </li>
                            <li>
                              <SmartLink
                                href="/driver-network"
                                className="hover:text-emerald-400 transition-colors block py-1"
                              >
                                Using the app
                              </SmartLink>
                            </li>
                            <li>
                              <SmartLink
                                href="/contact-us"
                                className="hover:text-emerald-400 transition-colors block py-1"
                              >
                                Charging support
                              </SmartLink>
                            </li>
                            <li>
                              <SmartLink
                                href="/policy#standard-service-policy"
                                className="hover:text-emerald-400 transition-colors block py-1"
                              >
                                Service Policy
                              </SmartLink>
                            </li>
                          </ul>
                        </div>
                        <div className="mt-8 pt-6 border-t border-white/10">
                          <SmartLink
                            href="/driver-network"
                            className="flex items-center justify-between text-white font-bold group-hover:text-emerald-400 transition-colors"
                          >
                            Find A Station{' '}
                            <i className="bi bi-arrow-right -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                          </SmartLink>
                        </div>
                      </div>
                      <div className="group p-8 md:p-12 hover:bg-white/5 transition-colors duration-300 flex flex-col h-full min-h-[300px]">
                        <div className="mb-auto">
                          <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">
                            Software For Operators
                          </h3>
                          <ul className="space-y-4 text-zinc-400">
                            <li>
                              <SmartLink
                                href="/contact-us"
                                className="hover:text-emerald-400 transition-colors block py-1"
                              >
                                Platform overview
                              </SmartLink>
                            </li>
                            <li>
                              <SmartLink
                                href="/contact-us"
                                className="hover:text-emerald-400 transition-colors block py-1"
                              >
                                OCPP compatibility
                              </SmartLink>
                            </li>
                            <li>
                              <SmartLink
                                href="/contact-us"
                                className="hover:text-emerald-400 transition-colors block py-1"
                              >
                                Integrations
                              </SmartLink>
                            </li>
                            <li>
                              <SmartLink
                                href="/contact-us"
                                className="hover:text-emerald-400 transition-colors block py-1"
                              >
                                Contact Support
                              </SmartLink>
                            </li>
                          </ul>
                        </div>
                        <div className="mt-8 pt-6 border-t border-white/10">
                          <SmartLink
                            href="/contact-us"
                            className="flex items-center justify-between text-white font-bold group-hover:text-emerald-400 transition-colors"
                          >
                            Book a demo{' '}
                            <i className="bi bi-arrow-right -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                          </SmartLink>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="max-w-[1400px] mx-auto px-6 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <img
                        src="img/full_logowhite.png"
                        alt="ZVolta"
                        className="h-8 md:h-10 opacity-90"
                      />
                      <div className="hidden md:block w-px h-6 bg-zinc-800" />
                      <div className="text-zinc-500 text-sm flex gap-6">
                        <span>© 2025 ZVolta Inc.</span>
                        <SmartLink
                          href="/policy#privacy-policy"
                          className="hover:text-white transition-colors"
                        >
                          Privacy
                        </SmartLink>
                        <SmartLink
                          href="/policy#terms-and-conditions"
                          className="hover:text-white transition-colors"
                        >
                          Terms
                        </SmartLink>
                        <SmartLink
                          href="/policy#returns-policy"
                          className="hover:text-white transition-colors"
                        >
                          Returns
                        </SmartLink>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <SmartLink
                        href="https://www.facebook.com/share/1FUNJfnPd5/?mibextid=wwXIfr"
                        target="_blank"
                        className="text-zinc-500 hover:text-white transition-colors"
                      >
                        <i className="bi bi-facebook text-xl" />
                      </SmartLink>
                      <SmartLink
                        href="https://www.instagram.com/zvolta.pk"
                        target="_blank"
                        className="text-zinc-500 hover:text-white transition-colors"
                      >
                        <i className="bi bi-instagram text-xl" />
                      </SmartLink>
                      <SmartLink
                        href="https://wa.me/+923104446529"
                        target="_blank"
                        className="text-zinc-500 hover:text-white transition-colors"
                      >
                        <i className="bi bi-whatsapp text-xl" />
                      </SmartLink>
                      <SmartLink
                        href="mailto:admin@zvolta.com"
                        className="text-zinc-500 hover:text-white transition-colors"
                      >
                        <i className="bi bi-envelope text-xl" />
                      </SmartLink>
                    </div>
                  </div>
                </footer>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

import { SmartLink } from '../../components/SmartLink';

export default function HomePage() {
  return (
    <>
      <div>
        <SmartLink
          id="dynamic-logo"
          href="#hero-section"
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
              href="#hero-section"
              className="dock-pill-link group w-10 h-10 flex items-center justify-center rounded-full text-white/60 hover:text-white transition-colors relative z-10"
            >
              <i className="bi bi-house-door-fill text-lg" />
            </SmartLink>
            <div className="w-px h-5 bg-white/10 mx-1" />
            <SmartLink
              href="/charging-partners"
              className="dock-pill-link px-4 py-2 rounded-full text-xs font-bold text-white/60 hover:text-white transition-colors relative z-10"
            >
              Hosting
            </SmartLink>
            <SmartLink
              href="/charge"
              className="dock-pill-link px-4 py-2 rounded-full text-xs font-bold text-white/60 hover:text-white transition-colors relative z-10"
            >
              Charging
            </SmartLink>
            <SmartLink
              href="/software"
              className="dock-pill-link px-4 py-2 rounded-full text-xs font-bold text-white/60 hover:text-white transition-colors relative z-10"
            >
              Software
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
                    href="#hero-section"
                    className="mobile-menu-link text-5xl md:text-6xl font-display font-bold text-white hover:text-emerald-500 transition-colors flex items-center justify-between group/link"
                  >
                    Home
                    <i className="bi bi-arrow-right text-3xl opacity-0 -translate-x-8 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-emerald-500" />
                  </SmartLink>
                  <div className="h-px bg-white/10 w-full" />
                  <SmartLink
                    href="/charging-partners"
                    className="mobile-menu-link text-5xl md:text-6xl font-display font-bold text-white hover:text-emerald-500 transition-colors flex items-center justify-between group/link"
                  >
                    Hosting
                    <i className="bi bi-arrow-right text-3xl opacity-0 -translate-x-8 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-emerald-500" />
                  </SmartLink>
                  <div className="h-px bg-white/10 w-full" />
                  <SmartLink
                    href="/charge"
                    className="mobile-menu-link text-5xl md:text-6xl font-display font-bold text-white hover:text-emerald-500 transition-colors flex items-center justify-between group/link"
                  >
                    Charging
                    <i className="bi bi-arrow-right text-3xl opacity-0 -translate-x-8 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-emerald-500" />
                  </SmartLink>
                  <div className="h-px bg-white/10 w-full" />
                  <SmartLink
                    href="/software"
                    className="mobile-menu-link text-5xl md:text-6xl font-display font-bold text-white hover:text-emerald-500 transition-colors flex items-center justify-between group/link"
                  >
                    Software
                    <i className="bi bi-arrow-right text-3xl opacity-0 -translate-x-8 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-emerald-500" />
                  </SmartLink>
                </nav>
                <div className="mt-12 relative z-10">
                  <p className="text-zinc-500 text-xs uppercase tracking-[0.2em] mb-2 font-bold">
                    Contact us
                  </p>
                  <SmartLink
                    href="mailto:support@zvolta.com"
                    className="text-xl md:text-2xl text-white font-mono hover:text-emerald-400 transition-colors border-b border-transparent hover:border-emerald-400 pb-1"
                  >
                    support@zvolta.com
                  </SmartLink>
                </div>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 h-full content-start">
                <SmartLink
                  href="/charging-partners"
                  className="menu-card bg-black rounded-[2.5rem] p-8 relative group overflow-hidden flex flex-col justify-end h-[280px] lg:h-auto opacity-0 translate-y-[50px]"
                >
                  <div className="absolute inset-0 bg-zinc-900 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.2,0,0,1)]" />
                  <div className="absolute top-8 right-8 w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300 shadow-xl z-10">
                    <i className="bi bi-buildings-fill text-3xl" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white group-hover:translate-x-1 transition-transform">
                      Host A Charger
                    </h3>
                    <p className="text-zinc-500 mt-2 opacity-100 group-hover:text-zinc-300 transition-colors">
                      Turn your parking into revenue.
                    </p>
                  </div>
                </SmartLink>
                <SmartLink
                  href="/charge"
                  className="menu-card bg-black rounded-[2.5rem] p-8 relative group overflow-hidden flex flex-col justify-end h-[280px] lg:h-auto opacity-0 translate-y-[50px]"
                >
                  <div className="absolute inset-0 bg-zinc-900 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.2,0,0,1)]" />
                  <div className="absolute top-8 right-8 w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300 shadow-xl z-10">
                    <i className="bi bi-geo-alt-fill text-3xl" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white group-hover:translate-x-1 transition-transform">
                      Find Stations
                    </h3>
                    <p className="text-zinc-500 mt-2 opacity-100 group-hover:text-zinc-300 transition-colors">
                      Locate chargers nearby instantly.
                    </p>
                  </div>
                </SmartLink>
                <SmartLink
                  href="/software"
                  className="menu-card bg-black rounded-[2.5rem] p-8 relative group overflow-hidden flex flex-col justify-end h-[280px] lg:h-auto opacity-0 translate-y-[50px]"
                >
                  <div className="absolute inset-0 bg-zinc-900 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.2,0,0,1)]" />
                  <div className="absolute top-8 right-8 w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300 shadow-xl z-10">
                    <i className="bi bi-laptop-fill text-3xl" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white group-hover:translate-x-1 transition-transform">
                      Software
                    </h3>
                    <p className="text-zinc-500 mt-2 opacity-100 group-hover:text-zinc-300 transition-colors">
                      Powerful tools for operators.
                    </p>
                  </div>
                </SmartLink>
                <SmartLink
                  href="/coming-soon"
                  className="menu-card bg-black rounded-[2.5rem] p-8 relative group overflow-hidden flex flex-col justify-end h-[280px] lg:h-auto opacity-0 translate-y-[50px]"
                >
                  <div className="absolute inset-0 bg-zinc-900 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.2,0,0,1)]" />
                  <div className="absolute top-8 right-8 w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300 shadow-xl z-10">
                    <i className="bi bi-people-fill text-3xl" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white group-hover:translate-x-1 transition-transform">
                      Company
                    </h3>
                    <p className="text-zinc-500 mt-2 opacity-100 group-hover:text-zinc-300 transition-colors">
                      Our mission and careers.
                    </p>
                  </div>
                </SmartLink>
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
            <main className="w-full">
              <section
                id="hero-section"
                className="relative w-full h-screen bg-gray-900 flex flex-col items-center justify-end text-center group overflow-hidden p-0 m-0 pb-20"
              >
                <img
                  id="hero-bg-img"
                  src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770803382/Zv_-_Main_Banner_Day_tquqsm.png"
                  alt="ZVolta Background"
                  className="absolute inset-0 w-full h-full object-cover z-0 select-none pointer-events-none"
                  data-critical="true"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-0" />
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 3xl:text-8xl font-display font-medium tracking-tight text-white leading-[1.1] mb-6 drop-shadow-lg">
                    <span
                      id="hero-changing-word"
                      className="word-swapper text-white"
                    />{' '}
                    Should Feel Easy
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl 3xl:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light mb-10 fade-in-up delay-100 px-4">
                    And we build the tools that support people, places, and all
                    the possibilities ahead.
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
              <div className="content-overlap rounded-t-[3rem] overflow-hidden">
                <section
                  id="horizontal-scroll-section"
                  className="py-12 px-4 md:px-8 bg-transparent border-t border-white/10 md:min-h-screen flex flex-col justify-center"
                >
                  <div className="max-w-[1600px] 3xl:max-w-[2200px] mx-auto w-full">
                    <div
                      id="cards-wrapper"
                      className="flex flex-col md:grid md:grid-cols-3 gap-6 w-full"
                    >
                      <div className="card-hover-trigger group relative w-full md:w-auto h-[450px] md:h-[550px] 3xl:h-[750px] overflow-hidden bg-zinc-900 rounded-[2.5rem] transition-transform duration-500 hover:-translate-y-2 border border-white/5">
                        <div className="absolute inset-0 w-full h-full card-slideshow">
                          <img
                            src="img/Host/03.jpg"
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out scale-110 opacity-100"
                            alt="Host Slide 1"
                          />
                          <img
                            src="img/Host/02.png"
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out scale-110 opacity-0"
                            alt="Host Slide 2"
                          />
                          <img
                            src="img/Host/03.png"
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out scale-110 opacity-0"
                            alt="Host Slide 3"
                          />
                          <img
                            src="img/Host/04.png"
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out scale-110 opacity-0"
                            alt="Host Slide 4"
                          />
                          <img
                            src="img/Host/05.png"
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out scale-110 opacity-0"
                            alt="Host Slide 5"
                          />
                          <img
                            src="img/Host/Host.png"
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out scale-110 opacity-0"
                            alt="Host Slide 6"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-transparent z-10 pointer-events-none" />
                        <div className="absolute inset-0 p-8 3xl:p-12 flex flex-col justify-between text-white z-20 pointer-events-none">
                          <div className="pt-2">
                            <h3 className="text-3xl md:text-4xl 3xl:text-6xl font-display font-bold mb-4 leading-tight">
                              Host A Charger
                            </h3>
                            <p className="text-gray-300 text-sm md:text-base 3xl:text-xl leading-relaxed max-w-sm font-light opacity-90">
                              Place a charger at your site, earn steady revenue,
                              and support your ESG goals.
                            </p>
                          </div>
                          <div className="flex justify-end pointer-events-auto">
                            <SmartLink
                              href="/host"
                              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-bold text-sm 3xl:text-lg transition-transform duration-300 hover:scale-105 hover:bg-emerald-400 hover:text-white shadow-lg"
                            >
                              Start Hosting <i className="bi bi-arrow-right" />
                            </SmartLink>
                          </div>
                        </div>
                      </div>
                      <div className="card-hover-trigger group relative w-full md:w-auto h-[450px] md:h-[550px] 3xl:h-[750px] overflow-hidden bg-zinc-900 rounded-[2.5rem] transition-transform duration-500 hover:-translate-y-2 border border-white/5">
                        <div className="absolute inset-0 w-full h-full card-slideshow">
                          <img
                            src="img/Charge/01.png"
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out scale-110 opacity-100"
                            alt="Charge Slide 1"
                          />
                          <img
                            src="img/Charge/02.png"
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out scale-110 opacity-0"
                            alt="Charge Slide 2"
                          />
                          <img
                            src="img/Charge/03.png"
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out scale-110 opacity-0"
                            alt="Charge Slide 3"
                          />
                          <img
                            src="img/Charge/04.png"
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out scale-110 opacity-0"
                            alt="Charge Slide 4"
                          />
                          <img
                            src="img/Charge/05.png"
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out scale-110 opacity-0"
                            alt="Charge Slide 5"
                          />
                          <img
                            src="img/Charge/06.png"
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out scale-110 opacity-0"
                            alt="Charge Slide 6"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-transparent z-10 pointer-events-none" />
                        <div className="absolute inset-0 p-8 3xl:p-12 flex flex-col justify-between text-white z-20 pointer-events-none">
                          <div className="pt-2">
                            <h3 className="text-3xl md:text-4xl 3xl:text-6xl font-display font-bold mb-4 leading-tight">
                              Charge your vehicle
                            </h3>
                            <p className="text-gray-300 text-sm md:text-base 3xl:text-xl leading-relaxed max-w-sm font-light opacity-90">
                              Fast and simple charging for cars, bikes, and
                              everything electric.
                            </p>
                          </div>
                          <div className="flex justify-end pointer-events-auto">
                            <SmartLink
                              href="/charge"
                              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-bold text-sm 3xl:text-lg transition-transform duration-300 hover:scale-105 hover:bg-emerald-400 hover:text-white shadow-lg"
                            >
                              Find a station <i className="bi bi-arrow-right" />
                            </SmartLink>
                          </div>
                        </div>
                      </div>
                      <div className="card-hover-trigger group relative w-full md:w-auto h-[450px] md:h-[550px] 3xl:h-[750px] overflow-hidden bg-zinc-900 rounded-[2.5rem] transition-transform duration-500 hover:-translate-y-2 border border-white/5">
                        <div className="absolute inset-0 w-full h-full card-slideshow">
                          <img
                            src="img/Operate/01.png"
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out scale-110 opacity-100"
                            alt="Operate Slide 1"
                          />
                          <img
                            src="img/Operate/02.png"
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out scale-110 opacity-0"
                            alt="Operate Slide 2"
                          />
                          <img
                            src="img/Operate/03.png"
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out scale-110 opacity-0"
                            alt="Operate Slide 3"
                          />
                          <img
                            src="img/Operate/04.png"
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out scale-110 opacity-0"
                            alt="Operate Slide 4"
                          />
                          <img
                            src="img/Operate/05.png"
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out scale-110 opacity-0"
                            alt="Operate Slide 5"
                          />
                          <img
                            src="img/Operate/Operate.png"
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out scale-110 opacity-0"
                            alt="Operate Slide 6"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-transparent z-10 pointer-events-none" />
                        <div className="absolute inset-0 p-8 3xl:p-12 flex flex-col justify-between text-white z-20 pointer-events-none">
                          <div className="pt-2">
                            <h3 className="text-3xl md:text-4xl 3xl:text-6xl font-display font-bold mb-4 leading-tight">
                              Software for operators
                            </h3>
                            <p className="text-gray-300 text-sm md:text-base 3xl:text-xl leading-relaxed max-w-sm font-light opacity-90">
                              Open software that helps operators connect
                              hardware and manage stations.
                            </p>
                          </div>
                          <div className="flex justify-end pointer-events-auto">
                            <SmartLink
                              href="/software"
                              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-bold text-sm 3xl:text-lg transition-transform duration-300 hover:scale-105 hover:bg-emerald-400 hover:text-white shadow-lg"
                            >
                              Book a demo <i className="bi bi-arrow-right" />
                            </SmartLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <section
                id="mission"
                className="py-24 px-4 md:px-8 bg-white relative"
              >
                <div className="max-w-[1400px] 3xl:max-w-[2000px] mx-auto">
                  <h2 className="reveal-text w-full max-w-full text-2xl sm:text-3xl md:text-5xl 2xl:text-7xl font-display font-bold leading-[1.1] text-black mb-16 text-left">
                    We create practical tools for a world moving electric,
                    building simple and reliable systems that help more people
                    make the switch.
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 3xl:gap-8">
                    <div
                      className="stat-container group relative p-8 flex flex-col h-[320px] 3xl:h-[450px] rounded-[2rem] bg-zinc-900 border-none shadow-xl overflow-hidden"
                      style={{ backgroundImage: 'none' }}
                    >
                      <img
                        src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770809680/Electricity_Reduced_segp20.png"
                        className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                        alt="Energy Delivered"
                      />
                      <div className="relative z-10 flex-grow flex items-center justify-center">
                        <div className="flex items-baseline gap-1">
                          <span
                            className="stat-number text-6xl 3xl:text-8xl text-white font-bold tracking-tighter"
                            data-target={700}
                          >
                            0
                          </span>
                          <span className="stat-unit text-emerald-500 text-3xl 3xl:text-5xl font-bold ml-1">
                            KWh
                          </span>
                        </div>
                      </div>
                      <div className="relative z-10 stat-label text-center text-zinc-300 text-xs 3xl:text-base tracking-[0.2em] font-bold group-hover:text-white uppercase mb-2">
                        Energy Delivered
                      </div>
                    </div>
                    <div
                      className="stat-container group relative p-8 flex flex-col h-[320px] 3xl:h-[450px] rounded-[2rem] bg-zinc-900 border-none shadow-xl overflow-hidden"
                      style={{ backgroundImage: 'none' }}
                    >
                      <img
                        src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770809685/C02_Reduced_mggfhr.png"
                        className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                        alt="CO2 Reduced"
                      />
                      <div className="relative z-10 flex-grow flex items-center justify-center">
                        <div className="flex items-baseline gap-1">
                          <span
                            className="stat-number text-6xl 3xl:text-8xl text-white font-bold tracking-tighter"
                            data-target={770}
                          >
                            0
                          </span>
                          <span className="stat-unit text-emerald-500 text-3xl 3xl:text-5xl font-bold ml-1">
                            Kg
                          </span>
                        </div>
                      </div>
                      <div className="relative z-10 stat-label text-center text-zinc-300 text-xs 3xl:text-base tracking-[0.2em] font-bold group-hover:text-white uppercase mb-2">
                        CO2 Reduced
                      </div>
                    </div>
                    <div
                      className="stat-container group relative p-8 flex flex-col h-[320px] 3xl:h-[450px] rounded-[2rem] bg-zinc-900 border-none shadow-xl overflow-hidden"
                      style={{ backgroundImage: 'none' }}
                    >
                      <img
                        src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770809679/Charging_Netwrok_oof6dg.png"
                        className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                        alt="Active Chargers"
                      />
                      <div className="relative z-10 flex-grow flex items-center justify-center">
                        <div className="flex items-baseline gap-1">
                          <span
                            className="stat-number text-6xl 3xl:text-8xl text-white font-bold tracking-tighter"
                            data-target={20}
                          >
                            0
                          </span>
                          <span className="stat-unit text-emerald-500 text-3xl 3xl:text-5xl font-bold ml-1">
                            +
                          </span>
                        </div>
                      </div>
                      <div className="relative z-10 stat-label text-center text-zinc-300 text-xs 3xl:text-base tracking-[0.2em] font-bold group-hover:text-white uppercase mb-2">
                        Active Chargers
                      </div>
                    </div>
                    <div
                      className="stat-container group relative p-8 flex flex-col h-[320px] 3xl:h-[450px] rounded-[2rem] bg-zinc-900 border-none shadow-xl overflow-hidden"
                      style={{ backgroundImage: 'none' }}
                    >
                      <img
                        src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770809582/Sites_pcc9iv.png"
                        className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                        alt="Sites Powered"
                      />
                      <div className="relative z-10 flex-grow flex items-center justify-center">
                        <div className="flex items-baseline gap-1">
                          <span
                            className="stat-number text-6xl 3xl:text-8xl text-white font-bold tracking-tighter"
                            data-target={10}
                          >
                            0
                          </span>
                          <span className="stat-unit text-emerald-500 text-3xl 3xl:text-5xl font-bold ml-1">
                            +
                          </span>
                        </div>
                      </div>
                      <div className="relative z-10 stat-label text-center text-zinc-300 text-xs 3xl:text-base tracking-[0.2em] font-bold group-hover:text-white uppercase mb-2">
                        Sites Powered
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section
                id="how-it-works"
                className="relative bg-zinc-50 text-black overflow-hidden py-10 -mt-px"
              >
                <div className="absolute inset-x-0 top-0 h-[4px] bg-zinc-50 z-[60] pointer-events-none" />
                <div className="absolute right-6 top-1/2 -translate-y-1/2 h-[200px] 3xl:h-[400px] w-[4px] bg-gray-200 rounded-full z-50 hidden md:block overflow-hidden">
                  <div
                    id="scroll-progress-bar"
                    className="w-full h-1/3 bg-emerald-600 rounded-full absolute top-0 left-0 transition-all duration-500 ease-out shadow-[0_0_15px_currentColor]"
                  />
                </div>
                <div
                  id="how-pin-container"
                  className="w-full min-h-[90vh] md:h-screen flex flex-col items-center justify-center gap-6 md:gap-12 relative px-4 md:px-8 py-10 will-change-transform"
                >
                  <div className="text-center z-20 w-full max-w-[1400px] 3xl:max-w-[2000px] shrink-0">
                    <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl 3xl:text-9xl font-display font-bold tracking-tighter text-black flex flex-wrap justify-center items-center gap-x-4 leading-tight">
                      <span>How</span>
                      <div className="grid grid-cols-1 grid-rows-1 items-center justify-items-center w-auto h-[1.2em] overflow-hidden relative z-10">
                        <span
                          className="dynamic-word col-start-1 row-start-1 block text-emerald-700 font-bold"
                          data-state={0}
                        >
                          Hosting
                        </span>
                        <span
                          className="dynamic-word col-start-1 row-start-1 block text-lime-600 font-bold"
                          data-state={1}
                        >
                          Charging
                        </span>
                        <span
                          className="dynamic-word col-start-1 row-start-1 block text-[#1a4031] font-bold"
                          data-state={2}
                        >
                          Software
                        </span>
                      </div>
                      <span>Works</span>
                    </h2>
                  </div>
                  <div className="w-full max-w-[1400px] 3xl:max-w-[2000px] grid grid-cols-2 md:grid-cols-4 gap-4 md:h-[60vh] 3xl:h-[55vh] shrink-0">
                    <div className="relative rounded-[2.5rem] bg-gray-100 shadow-2xl card-column aspect-[3/4] md:aspect-auto group border border-white/50">
                      <div className="sleek-card-layer bg-white" data-state={0}>
                        <img
                          src="img/Grids/05.png"
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          style={{ objectPosition: '0% 50%' }}
                          alt="Assessment"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-900/20 to-transparent" />
                        <span className="sleek-number text-7xl md:text-8xl text-white/20">
                          01
                        </span>
                        <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                          <div className="w-12 h-1 bg-emerald-400 mb-4 rounded-full" />
                          <h3 className="text-2xl 3xl:text-4xl font-bold text-white mb-2">
                            Assessment
                          </h3>
                          <p className="text-base 3xl:text-xl text-emerald-50 leading-snug">
                            Tell us about your site, your goals, and how many
                            chargers you want.
                          </p>
                        </div>
                      </div>
                      <div
                        className="sleek-card-layer bg-zinc-900"
                        data-state={1}
                      >
                        <img
                          src="img/Grids/02.png"
                          className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                          style={{ objectPosition: '0% 50%' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-lime-900/40 to-transparent" />
                        <span className="sleek-number text-7xl md:text-8xl text-white/20">
                          01
                        </span>
                        <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                          <div className="w-12 h-1 bg-lime-400 mb-4 rounded-full" />
                          <h3 className="text-2xl 3xl:text-4xl font-bold text-white mb-2">
                            Locate
                          </h3>
                          <p className="text-base 3xl:text-xl text-gray-200 leading-snug">
                            Open the app to find a nearby charger that fits your
                            vehicle.
                          </p>
                        </div>
                      </div>
                      <div
                        className="sleek-card-layer bg-[#051810]"
                        data-state={2}
                      >
                        <img
                          src="img/Grids/03.png"
                          className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                          style={{ objectPosition: '0% 50%' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#02120a] via-[#064e3b]/30 to-transparent" />
                        <span className="sleek-number text-7xl md:text-8xl text-white/10">
                          01
                        </span>
                        <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                          <div className="w-12 h-1 bg-[#6ee7b7] mb-4 rounded-full" />
                          <h3 className="text-2xl 3xl:text-4xl font-bold text-[#d1fae5] mb-2">
                            Hardware
                          </h3>
                          <p className="text-base 3xl:text-xl text-gray-400 leading-snug">
                            Share your hardware details and how you run your
                            charging operations today.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="relative rounded-[2.5rem] bg-gray-100 shadow-2xl card-column aspect-[3/4] md:aspect-auto group border border-white/50">
                      <div className="sleek-card-layer bg-white" data-state={0}>
                        <img
                          src="img/Grids/05.png"
                          className="absolute inset-0 w-full h-full object-cover"
                          style={{ objectPosition: '33.33% 50%' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-900/20 to-transparent" />
                        <span className="sleek-number text-7xl md:text-8xl text-white/20">
                          02
                        </span>
                        <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                          <div className="w-12 h-1 bg-emerald-400 mb-4 rounded-full" />
                          <h3 className="text-2xl 3xl:text-4xl font-bold text-white mb-2">
                            Planning
                          </h3>
                          <p className="text-base 3xl:text-xl text-emerald-50 leading-snug">
                            We assess your layout and power needs and guide you
                            to the best setup.
                          </p>
                        </div>
                      </div>
                      <div
                        className="sleek-card-layer bg-zinc-900"
                        data-state={1}
                      >
                        <img
                          src="img/Grids/02.png"
                          className="absolute inset-0 w-full h-full object-cover opacity-80"
                          style={{ objectPosition: '33.33% 50%' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-lime-900/40 to-transparent" />
                        <span className="sleek-number text-7xl md:text-8xl text-white/20">
                          02
                        </span>
                        <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                          <div className="w-12 h-1 bg-lime-400 mb-4 rounded-full" />
                          <h3 className="text-2xl 3xl:text-4xl font-bold text-white mb-2">
                            Plug In
                          </h3>
                          <p className="text-base 3xl:text-xl text-gray-200 leading-snug">
                            Park, plug in, and start a session with a tap or by
                            scanning the code.
                          </p>
                        </div>
                      </div>
                      <div
                        className="sleek-card-layer bg-[#051810]"
                        data-state={2}
                      >
                        <img
                          src="img/Grids/03.png"
                          className="absolute inset-0 w-full h-full object-cover opacity-80"
                          style={{ objectPosition: '33.33% 50%' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#02120a] via-[#064e3b]/30 to-transparent" />
                        <span className="sleek-number text-7xl md:text-8xl text-white/10">
                          02
                        </span>
                        <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                          <div className="w-12 h-1 bg-[#6ee7b7] mb-4 rounded-full" />
                          <h3 className="text-2xl 3xl:text-4xl font-bold text-[#d1fae5] mb-2">
                            Connect
                          </h3>
                          <p className="text-base 3xl:text-xl text-gray-400 leading-snug">
                            We connect your chargers to our OCPP-ready platform
                            and set up your pricing.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="relative rounded-[2.5rem] bg-gray-100 shadow-2xl card-column aspect-[3/4] md:aspect-auto group border border-white/50">
                      <div className="sleek-card-layer bg-white" data-state={0}>
                        <img
                          src="img/Grids/05.png"
                          className="absolute inset-0 w-full h-full object-cover"
                          style={{ objectPosition: '66.66% 50%' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-900/20 to-transparent" />
                        <span className="sleek-number text-7xl md:text-8xl text-white/20">
                          03
                        </span>
                        <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                          <div className="w-12 h-1 bg-emerald-400 mb-4 rounded-full" />
                          <h3 className="text-2xl 3xl:text-4xl font-bold text-white mb-2">
                            Install
                          </h3>
                          <p className="text-base 3xl:text-xl text-emerald-50 leading-snug">
                            We install the chargers, connect the software, and
                            prepare everything for launch.
                          </p>
                        </div>
                      </div>
                      <div
                        className="sleek-card-layer bg-zinc-900"
                        data-state={1}
                      >
                        <img
                          src="img/Grids/02.png"
                          className="absolute inset-0 w-full h-full object-cover opacity-80"
                          style={{ objectPosition: '66.66% 50%' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-lime-900/40 to-transparent" />
                        <span className="sleek-number text-7xl md:text-8xl text-white/20">
                          03
                        </span>
                        <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                          <div className="w-12 h-1 bg-lime-400 mb-4 rounded-full" />
                          <h3 className="text-2xl 3xl:text-4xl font-bold text-white mb-2">
                            Charge
                          </h3>
                          <p className="text-base 3xl:text-xl text-gray-200 leading-snug">
                            Watch your charging progress in real time with
                            simple, clear pricing.
                          </p>
                        </div>
                      </div>
                      <div
                        className="sleek-card-layer bg-[#051810]"
                        data-state={2}
                      >
                        <img
                          src="img/Grids/03.png"
                          className="absolute inset-0 w-full h-full object-cover opacity-80"
                          style={{ objectPosition: '66.66% 50%' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#02120a] via-[#064e3b]/30 to-transparent" />
                        <span className="sleek-number text-7xl md:text-8xl text-white/10">
                          03
                        </span>
                        <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                          <div className="w-12 h-1 bg-[#6ee7b7] mb-4 rounded-full" />
                          <h3 className="text-2xl 3xl:text-4xl font-bold text-[#d1fae5] mb-2">
                            Monitor
                          </h3>
                          <p className="text-base 3xl:text-xl text-gray-400 leading-snug">
                            You monitor status, manage users, and handle
                            payments from one dashboard.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="relative rounded-[2.5rem] bg-gray-100 shadow-2xl card-column aspect-[3/4] md:aspect-auto group border border-white/50">
                      <div className="sleek-card-layer bg-white" data-state={0}>
                        <img
                          src="img/Grids/05.png"
                          className="absolute inset-0 w-full h-full object-cover"
                          style={{ objectPosition: '100% 50%' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-900/20 to-transparent" />
                        <span className="sleek-number text-7xl md:text-8xl text-white/20">
                          04
                        </span>
                        <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                          <div className="w-12 h-1 bg-emerald-400 mb-4 rounded-full" />
                          <h3 className="text-2xl 3xl:text-4xl font-bold text-white mb-2">
                            Go Live
                          </h3>
                          <p className="text-base 3xl:text-xl text-emerald-50 leading-snug">
                            You go live, earn from every session, and track your
                            impact over time.
                          </p>
                        </div>
                      </div>
                      <div
                        className="sleek-card-layer bg-zinc-900"
                        data-state={1}
                      >
                        <img
                          src="img/Grids/02.png"
                          className="absolute inset-0 w-full h-full object-cover opacity-80"
                          style={{ objectPosition: '100% 50%' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-lime-900/40 to-transparent" />
                        <span className="sleek-number text-7xl md:text-8xl text-white/20">
                          04
                        </span>
                        <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                          <div className="w-12 h-1 bg-lime-400 mb-4 rounded-full" />
                          <h3 className="text-2xl 3xl:text-4xl font-bold text-white mb-2">
                            Go
                          </h3>
                          <p className="text-base 3xl:text-xl text-gray-200 leading-snug">
                            Unplug when you are ready and continue on your way.
                          </p>
                        </div>
                      </div>
                      <div
                        className="sleek-card-layer bg-[#051810]"
                        data-state={2}
                      >
                        <img
                          src="img/Grids/03.png"
                          className="absolute inset-0 w-full h-full object-cover opacity-80"
                          style={{ objectPosition: '100% 50%' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#02120a] via-[#064e3b]/30 to-transparent" />
                        <span className="sleek-number text-7xl md:text-8xl text-white/10">
                          04
                        </span>
                        <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                          <div className="w-12 h-1 bg-[#6ee7b7] mb-4 rounded-full" />
                          <h3 className="text-2xl 3xl:text-4xl font-bold text-[#d1fae5] mb-2">
                            Scale
                          </h3>
                          <p className="text-base 3xl:text-xl text-gray-400 leading-snug">
                            Use insights and reports to improve uptime and grow
                            your network.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4 z-20 w-full relative shrink-0 min-h-[120px]">
                    <div
                      className="btn-group absolute top-0 flex justify-center gap-2 transition-all duration-300 opacity-100 w-full"
                      data-state={0}
                    >
                      <SmartLink
                        href="/charging-partners"
                        className="btn-glow hosting w-62 xl:w-86"
                      >
                        <div className="btn-content xl:text-xl xl:py-4">
                          Start Hosting for 74,999 PKR{' '}
                          <i className="bi bi-arrow-right" />
                        </div>
                      </SmartLink>
                    </div>
                    <div
                      className="btn-group absolute top-0 flex justify-center gap-2 transition-all duration-300 opacity-0 pointer-events-none w-full"
                      data-state={1}
                    >
                      <SmartLink
                        href="https://zvolta.com/mobile"
                        className="btn-glow charging w-62 xl:w-86"
                      >
                        <div className="btn-content xl:text-xl xl:py-4">
                          See Stations Nearby{' '}
                          <i className="bi bi-arrow-right" />
                        </div>
                      </SmartLink>
                    </div>
                    <div
                      className="btn-group absolute top-0 flex justify-center gap-2 transition-all duration-300 opacity-0 pointer-events-none w-full"
                      data-state={2}
                    >
                      <SmartLink
                        href="/software"
                        className="btn-glow software w-62 xl:w-86"
                      >
                        <div className="btn-content xl:text-xl xl:py-4">
                          Book A Demo <i className="bi bi-arrow-right" />
                        </div>
                      </SmartLink>
                    </div>
                  </div>
                </div>
              </section>
              <section
                id="app-section"
                className="relative py-24 px-6 overflow-hidden bg-[#050505] text-white"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#16a34a]/10 blur-[120px] rounded-full pointer-events-none z-0" />
                <div className="relative z-10 max-w-7xl 3xl:max-w-[1800px] mx-auto flex flex-col items-center text-center">
                  <div className="max-w-4xl mx-auto mb-8 app-content-animate">
                    <h2 className="text-3xl md:text-5xl 3xl:text-7xl font-display font-bold tracking-tight mb-6">
                      Everything you need <br />
                      <span className="text-[#16a34a]">in one simple app.</span>
                    </h2>
                  </div>
                  <div className="relative p-1 bg-zinc-900/80 backdrop-blur-md rounded-full inline-flex items-center gap-1 border border-white/5 mb-12 shadow-2xl z-20">
                    <div
                      id="app-tab-bg"
                      className="absolute left-1 top-1 h-[calc(100%-8px)] w-[calc(50%-4px)] bg-[#16a34a] rounded-full transition-all duration-300 ease-[cubic-bezier(0.2,0,0.2,1)] shadow-[0_0_20px_rgba(22,163,74,0.4)]"
                    />
                    <button
                      className="app-tab active relative z-10 px-8 py-3 3xl:py-5 rounded-full text-sm md:text-base 3xl:text-xl font-bold transition-colors duration-300 text-white w-[140px] md:w-[180px] 3xl:w-[240px]"
                      data-target="user"
                    >
                      For EV Users
                    </button>
                    <button
                      className="app-tab relative z-10 px-8 py-3 3xl:py-5 rounded-full text-sm md:text-base 3xl:text-xl font-bold transition-colors duration-300 text-gray-400 hover:text-white w-[140px] md:w-[180px] 3xl:w-[240px]"
                      data-target="host"
                    >
                      For Hosts
                    </button>
                  </div>
                  <div className="relative w-full max-w-[1000px] 3xl:max-w-[1400px] h-[550px] md:h-[650px] 3xl:h-[850px] flex justify-center items-center perspective-1000">
                    <div
                      id="card-1"
                      className="hidden md:block absolute top-[10%] left-[12%] z-30 floating-card"
                    >
                      <div className="floating-card-base light-from-br py-3 px-5 3xl:py-6 3xl:px-8 flex items-center gap-4 min-w-[200px] 3xl:min-w-[300px]">
                        <div className="w-10 h-10 3xl:w-14 3xl:h-14 rounded-full bg-[#16a34a]/10 text-[#16a34a] flex items-center justify-center icon-box shrink-0">
                          <i className="bi bi-geo-alt-fill text-lg 3xl:text-2xl" />
                        </div>
                        <div className="text-left">
                          <div className="text-white text-sm 3xl:text-lg font-bold leading-tight mb-0.5 card-title">
                            Live Map
                          </div>
                          <div className="text-gray-500 text-[11px] 3xl:text-sm leading-tight card-desc">
                            Find chargers nearby
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="card-2"
                      className="hidden md:block absolute bottom-[20%] left-[8%] z-30 floating-card"
                      style={{ animationDelay: '1s' }}
                    >
                      <div className="floating-card-base light-from-tr py-3 px-5 3xl:py-6 3xl:px-8 flex items-center gap-4 min-w-[200px] 3xl:min-w-[300px]">
                        <div className="w-10 h-10 3xl:w-14 3xl:h-14 rounded-full bg-[#16a34a]/10 text-[#16a34a] flex items-center justify-center icon-box shrink-0">
                          <i className="bi bi-qr-code text-lg 3xl:text-2xl" />
                        </div>
                        <div className="text-left">
                          <div className="text-white text-sm 3xl:text-lg font-bold leading-tight mb-0.5 card-title">
                            Instant Start
                          </div>
                          <div className="text-gray-500 text-[11px] 3xl:text-sm leading-tight card-desc">
                            Scan to charge
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="card-3"
                      className="hidden md:block absolute top-[15%] right-[12%] z-30 floating-card"
                      style={{ animationDelay: '0.5s' }}
                    >
                      <div className="floating-card-base light-from-bl py-3 px-5 3xl:py-6 3xl:px-8 flex items-center gap-4 min-w-[200px] 3xl:min-w-[300px]">
                        <div className="w-10 h-10 3xl:w-14 3xl:h-14 rounded-full bg-[#16a34a]/10 text-[#16a34a] flex items-center justify-center icon-box shrink-0">
                          <i className="bi bi-tag-fill text-lg 3xl:text-2xl" />
                        </div>
                        <div className="text-left">
                          <div className="text-white text-sm 3xl:text-lg font-bold leading-tight mb-0.5 card-title">
                            Clear Pricing
                          </div>
                          <div className="text-gray-500 text-[11px] 3xl:text-sm leading-tight card-desc">
                            See rates instantly
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="card-4"
                      className="hidden md:block absolute bottom-[25%] right-[8%] z-30 floating-card"
                      style={{ animationDelay: '1.5s' }}
                    >
                      <div className="floating-card-base light-from-tl py-3 px-5 3xl:py-6 3xl:px-8 flex items-center gap-4 min-w-[200px] 3xl:min-w-[300px]">
                        <div className="w-10 h-10 3xl:w-14 3xl:h-14 rounded-full bg-[#16a34a]/10 text-[#16a34a] flex items-center justify-center icon-box shrink-0">
                          <i className="bi bi-wallet2 text-lg 3xl:text-2xl" />
                        </div>
                        <div className="text-left">
                          <div className="text-white text-sm 3xl:text-lg font-bold leading-tight mb-0.5 card-title">
                            History
                          </div>
                          <div className="text-gray-500 text-[11px] 3xl:text-sm leading-tight card-desc">
                            Track your spending
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative w-[280px] md:w-[320px] 3xl:w-[420px] h-full transition-transform duration-700 ease-out will-change-transform z-20">
                      <div className="phone-mockup border-zinc-800 bg-zinc-950 border-[10px] rounded-[3rem] h-full w-full shadow-2xl relative overflow-hidden">
                        <img
                          id="app-screen-img"
                          src="img/Gray and Black Modern Handphone Mockup Instagram Story(5).png"
                          className=""
                          alt="App Screen"
                        />
                        <div />
                      </div>
                      <div
                        id="app-phone-glow"
                        className=""
                      />
                    </div>
                  </div>
                  <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center w-full z-20">
                    <SmartLink
                      href="/appstore"
                      className="store-btn group bg-zinc-900 border-zinc-700 hover:bg-white hover:border-white 3xl:px-8 3xl:py-4 rounded-full"
                    >
                      <i className="bi bi-apple text-2xl 3xl:text-3xl group-hover:text-black transition-colors" />
                      <div className="flex flex-col items-start leading-none">
                        <span className="text-[10px] 3xl:text-xs uppercase tracking-wider opacity-70 group-hover:text-black">
                          Download on the
                        </span>
                        <span className="text-lg 3xl:text-2xl font-bold group-hover:text-black">
                          App Store
                        </span>
                      </div>
                    </SmartLink>
                    <SmartLink
                      href="https://play.google.com/store/apps/details?id=app.zvolta.android"
                      className="store-btn group bg-zinc-900 border-zinc-700 hover:bg-white hover:border-white 3xl:px-8 3xl:py-4 rounded-full"
                    >
                      <i className="bi bi-google-play text-2xl 3xl:text-3xl group-hover:text-black transition-colors" />
                      <div className="flex flex-col items-start leading-none">
                        <span className="text-[10px] 3xl:text-xs uppercase tracking-wider opacity-70 group-hover:text-black">
                          Get it on
                        </span>
                        <span className="text-lg 3xl:text-2xl font-bold group-hover:text-black">
                          Google Play
                        </span>
                      </div>
                    </SmartLink>
                  </div>
                </div>
              </section>
              <section
                id="bento-section"
                className="py-24 px-4 md:px-8 bg-white text-zinc-900 overflow-hidden"
              >
                <div className="max-w-[1200px] 3xl:max-w-[1800px] mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-auto md:grid-rows-[minmax(350px,auto)_minmax(350px,auto)] 3xl:grid-rows-[minmax(500px,auto)_minmax(500px,auto)] gap-6 3xl:gap-10">
                    <div className="md:col-span-2 bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-8 md:p-12 3xl:p-16 relative overflow-hidden group hover:border-emerald-500/50 hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)] transition-all duration-500 text-white">
                      <div className="relative z-10 flex flex-col h-full justify-between">
                        <div>
                          <h2 className="text-3xl md:text-5xl 3xl:text-7xl font-display font-bold mb-6 tracking-tight text-white group-hover:text-emerald-50 transition-colors duration-300">
                            A cleaner way forward
                          </h2>
                          <ul className="space-y-4 text-zinc-400 text-sm md:text-lg 3xl:text-2xl max-w-2xl 3xl:max-w-4xl">
                            <li className="flex items-start gap-3 group-hover:translate-x-2 transition-transform duration-300 delay-0">
                              <i className="bi bi-check-circle-fill text-emerald-500 mt-1 shrink-0" />
                              <span>
                                Every charge on our network replaces fossil fuel
                                use.
                              </span>
                            </li>
                            <li className="flex items-start gap-3 group-hover:translate-x-2 transition-transform duration-300 delay-75">
                              <i className="bi bi-check-circle-fill text-emerald-500 mt-1 shrink-0" />
                              <span>
                                Every hosted site brings more clean energy into
                                communities.
                              </span>
                            </li>
                            <li className="flex items-start gap-3 group-hover:translate-x-2 transition-transform duration-300 delay-100">
                              <i className="bi bi-check-circle-fill text-emerald-500 mt-1 shrink-0" />
                              <span>
                                Every operator using our software helps expand
                                electric access.
                              </span>
                            </li>
                            <li className="flex items-start gap-3 group-hover:translate-x-2 transition-transform duration-300 delay-150">
                              <i className="bi bi-check-circle-fill text-emerald-500 mt-1 shrink-0" />
                              <span>
                                Together, we make the shift to electric easier
                                for everyone.
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="mt-8">
                          <SmartLink
                            href="/about-us"
                            className="inline-flex items-center gap-2 text-emerald-400 font-bold hover:text-emerald-300 transition-colors group/link 3xl:text-2xl"
                          >
                            Learn more about our sustainability goals
                            <i className="bi bi-arrow-right group-hover/link:translate-x-1 transition-transform" />
                          </SmartLink>
                        </div>
                      </div>
                      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none transition-transform duration-700 group-hover:scale-150 group-hover:-translate-y-10 group-hover:translate-x-10" />
                    </div>
                    <div className="md:col-span-1 bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-8 relative overflow-hidden group hover:border-emerald-500/50 hover:shadow-2xl transition-all duration-500 flex flex-col text-white">
                      <div className="flex justify-between items-start mb-4 z-10">
                        <h3 className="text-5xl 3xl:text-7xl font-bold text-white tracking-tighter group-hover:text-emerald-400 transition-colors">
                          770 Kg
                        </h3>
                        <span className="text-[10px] 3xl:text-sm uppercase tracking-widest text-zinc-500 border border-zinc-700 px-2 py-1 rounded-full group-hover:border-emerald-500/30 group-hover:text-emerald-500 transition-colors">
                          CO2 Saved
                        </span>
                      </div>
                      <div className="flex-grow flex items-end relative w-full h-full pt-8">
                        <div className="w-full h-full transition-transform duration-500 group-hover:scale-110 origin-bottom">
                          <svg
                            viewBox="0 0 100 50"
                            className="w-full h-full overflow-visible drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                          >
                            <path
                              d="M0,40 C20,40 25,20 40,30 C55,40 60,10 80,15 C90,18 95,5 100,0"
                              fill="none"
                              stroke="#10b981"
                              strokeWidth={3}
                              strokeLinecap="round"
                              className="transition-all duration-500 group-hover:stroke-[4px]"
                            />
                            <path
                              d="M0,40 C20,40 25,20 40,30 C55,40 60,10 80,15 C90,18 95,5 100,0 V50 H0 Z"
                              fill="url(#greenGradient)"
                              opacity="0.2"
                              className="group-hover:opacity-0.4 transition-opacity duration-500"
                            />
                            <defs>
                              <linearGradient
                                id="greenGradient"
                                x1={0}
                                x2={0}
                                y1={0}
                                y2={1}
                              >
                                <stop offset="0%" stopColor="#10b981" />
                                <stop offset="100%" stopColor="transparent" />
                              </linearGradient>
                            </defs>
                            <circle
                              cx={100}
                              cy={0}
                              r={4}
                              fill="#10b981"
                              stroke="#050505"
                              strokeWidth={2}
                              className="group-hover:r-[6px] transition-all duration-300"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-between text-xs 3xl:text-base text-zinc-500 font-mono relative z-10">
                        <span>JAN</span>
                        <span>DEC</span>
                      </div>
                    </div>
                    <div className="md:col-span-1 bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-8 relative overflow-hidden group hover:border-lime-500/50 hover:shadow-2xl transition-all duration-500 flex flex-col text-white">
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-2xl 3xl:text-4xl font-bold text-white group-hover:text-lime-400 transition-colors">
                          Capacity
                        </h3>
                        <span className="text-[10px] 3xl:text-sm uppercase tracking-widest text-zinc-500 border border-zinc-700 px-2 py-1 rounded-full group-hover:border-lime-500/30 group-hover:text-lime-500 transition-colors">
                          Real-time
                        </span>
                      </div>
                      <div className="flex items-end justify-between h-40 3xl:h-60 gap-2 mt-auto">
                        <div className="w-full bg-zinc-800 rounded-t-sm h-[40%] group-hover:h-[55%] group-hover:bg-zinc-700 transition-all duration-500 ease-out delay-0" />
                        <div className="w-full bg-lime-500 rounded-t-sm h-[80%] group-hover:h-[95%] group-hover:shadow-[0_0_20px_rgba(132,204,22,0.6)] transition-all duration-500 ease-out delay-75" />
                        <div className="w-full bg-zinc-800 rounded-t-sm h-[50%] group-hover:h-[60%] group-hover:bg-zinc-700 transition-all duration-500 ease-out delay-100" />
                        <div className="w-full bg-zinc-800 rounded-t-sm h-[30%] group-hover:h-[45%] group-hover:bg-zinc-700 transition-all duration-500 ease-out delay-150" />
                        <div className="w-full bg-lime-500/50 rounded-t-sm h-[65%] group-hover:h-[75%] transition-all duration-500 ease-out delay-200" />
                        <div className="w-full bg-zinc-800 rounded-t-sm h-[45%] group-hover:h-[50%] group-hover:bg-zinc-700 transition-all duration-500 ease-out delay-300" />
                      </div>
                      <div className="mt-4 flex justify-between text-xs 3xl:text-base text-zinc-500 font-mono uppercase">
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                      </div>
                    </div>
                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 3xl:gap-10 h-full">
                      <div className="bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-8 relative overflow-hidden group hover:border-emerald-500/50 transition-all duration-500 flex flex-col justify-between text-white">
                        <div className="z-10 relative">
                          <h3 className="text-xl 3xl:text-3xl font-bold mb-1 group-hover:text-emerald-400 transition-colors">
                            Connector Types
                          </h3>
                          <p className="text-xs 3xl:text-base text-zinc-500">
                            Universal compatibility
                          </p>
                        </div>
                        <div className="relative h-32 3xl:h-48 flex items-center justify-center my-4">
                          <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                            <div className="absolute w-20 h-20 3xl:w-28 3xl:h-28 rounded-full border-[6px] border-emerald-500/20 border-t-emerald-500 animate-spin-slow" />
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-10 h-10 3xl:w-14 3xl:h-14 rounded-full bg-lime-500 flex items-center justify-center text-black font-bold text-[10px] 3xl:text-xs shadow-lg transition-transform duration-500 group-hover:-translate-y-4">
                              CCS
                            </div>
                            <div className="absolute bottom-2 right-4 w-10 h-10 3xl:w-14 3xl:h-14 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-[10px] 3xl:text-xs shadow-lg transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2">
                              Universal
                            </div>
                            <div className="absolute bottom-2 left-4 w-10 h-10 3xl:w-14 3xl:h-14 rounded-full bg-zinc-700 flex items-center justify-center text-white font-bold text-[10px] 3xl:text-xs shadow-lg border border-white/10 transition-transform duration-500 group-hover:-translate-x-2 group-hover:translate-y-2">
                              Type2
                            </div>
                          </div>
                          <div className="absolute w-16 h-16 3xl:w-20 3xl:h-20 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700 group-hover:border-zinc-500 transition-colors">
                            <i className="bi bi-lightning-charge-fill text-2xl 3xl:text-3xl text-white group-hover:text-yellow-400 transition-colors" />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-6 3xl:gap-10">
                        <div className="flex-1 bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-6 relative overflow-hidden group hover:border-zinc-600 transition-all duration-300 flex items-center justify-between text-white cursor-pointer hover:bg-zinc-800">
                          <div>
                            <h4 className="font-bold text-lg 3xl:text-2xl text-white group-hover:text-emerald-400 transition-colors">
                              Explore Network
                            </h4>
                            <div className="flex gap-2 mt-2">
                              <span className="text-[10px] 3xl:text-sm bg-emerald-500/10 text-emerald-500 px-2 py-1 rounded border border-emerald-500/20">
                                Available
                              </span>
                              <span className="text-[10px] 3xl:text-sm bg-zinc-800 text-zinc-400 px-2 py-1 rounded border border-white/5">
                                Fast
                              </span>
                            </div>
                          </div>
                          <i className="bi bi-sliders text-2xl 3xl:text-4xl text-zinc-600 group-hover:text-white group-hover:rotate-90 transition-all duration-500" />
                        </div>
                        <div className="flex-1 bg-gradient-to-r from-zinc-800 to-zinc-900 border border-zinc-700 rounded-[2.5rem] p-2 pr-6 relative overflow-hidden group hover:border-emerald-500/50 hover:from-zinc-800 hover:to-emerald-900/20 transition-all duration-300 flex items-center gap-4 text-white cursor-pointer">
                          <div className="w-14 h-14 3xl:w-20 3xl:h-20 rounded-full bg-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <i className="bi bi-map-fill text-black text-xl 3xl:text-2xl" />
                          </div>
                          <div className="flex-grow">
                            <div className="text-sm 3xl:text-lg font-bold text-white">
                              Plan your route
                            </div>
                            <div className="text-[11px] 3xl:text-base text-zinc-400 group-hover:text-emerald-300 transition-colors">
                              View Map in App
                            </div>
                          </div>
                          <div className="w-10 h-10 3xl:w-14 3xl:h-14 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-emerald-500 group-hover:border-emerald-500 group-hover:text-black transition-all duration-300">
                            <i className="bi bi-arrow-right 3xl:text-xl group-hover:-rotate-45 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section
                id="stories-section"
                className="h-screen max-h-screen bg-white text-zinc-900 border-t border-gray-100 overflow-hidden relative flex flex-col justify-center py-4"
              >
                <div className="max-w-[1400px] 3xl:max-w-[2000px] mx-auto px-4 md:px-8 mb-6 shrink-0 z-10">
                  <div className="text-center max-w-3xl 3xl:max-w-5xl mx-auto mb-6">
                    <h2 className="text-3xl md:text-5xl 3xl:text-6xl font-display font-bold tracking-tight mb-2">
                      Stories from the people <br />
                      and places we support
                    </h2>
                  </div>
                  <div
                    className="flex flex-wrap justify-center gap-2"
                    id="stories-filters"
                  >
                    <button
                      className="filter-btn active px-4 py-1.5 3xl:px-6 3xl:py-3 rounded-full border border-zinc-200 bg-zinc-900 text-white text-xs md:text-sm 3xl:text-base font-semibold transition-all hover:bg-zinc-800"
                      data-filter="all"
                    >
                      All Stories
                    </button>
                    <button
                      className="filter-btn px-4 py-1.5 3xl:px-6 3xl:py-3 rounded-full border border-zinc-200 bg-white text-zinc-600 text-xs md:text-sm 3xl:text-base font-semibold transition-all hover:bg-gray-100 hover:border-gray-300"
                      data-filter="ev-users"
                    >
                      EV Users
                    </button>
                    <button
                      className="filter-btn px-4 py-1.5 3xl:px-6 3xl:py-3 rounded-full border border-zinc-200 bg-white text-zinc-600 text-xs md:text-sm 3xl:text-base font-semibold transition-all hover:bg-gray-100 hover:border-gray-300"
                      data-filter="hosts"
                    >
                      Hosts
                    </button>
                    <button
                      className="filter-btn px-4 py-1.5 3xl:px-6 3xl:py-3 rounded-full border border-zinc-200 bg-white text-zinc-600 text-xs md:text-sm 3xl:text-base font-semibold transition-all hover:bg-gray-100 hover:border-gray-300"
                      data-filter="operators"
                    >
                      Operators
                    </button>
                    <button
                      className="filter-btn px-4 py-1.5 3xl:px-6 3xl:py-3 rounded-full border border-zinc-200 bg-white text-zinc-600 text-xs md:text-sm 3xl:text-base font-semibold transition-all hover:bg-gray-100 hover:border-gray-300"
                      data-filter="sustainability"
                    >
                      Sustainability
                    </button>
                  </div>
                </div>
                <div
                  id="stories-track"
                  className="flex gap-4 3xl:gap-8 w-fit pl-4 md:pl-8 pr-8 items-center h-auto"
                >
                  <div
                    className="story-card group relative min-w-[280px] md:min-w-[320px] 3xl:min-w-[450px] h-[350px] md:h-[380px] 3xl:h-[550px] rounded-[1.5rem] overflow-hidden cursor-pointer border border-gray-100 shadow-md shadow-gray-200/50"
                    data-category="ev-users impact"
                  >
                    <img
                      src="https://placehold.co/400x600/18181b/ffffff?text=Urban+Living"
                      alt="EV User Story"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    <div className="absolute inset-0 p-6 3xl:p-10 flex flex-col justify-end text-white">
                      <div className="mb-2">
                        <span className="text-[9px] 3xl:text-xs uppercase tracking-widest bg-white/20 backdrop-blur-md px-2 py-1 rounded-full border border-white/10">
                          EV Users
                        </span>
                      </div>
                      <h3 className="text-xl 3xl:text-3xl font-bold leading-tight mb-1">
                        The Urban Commuter
                      </h3>
                      <p className="text-xs 3xl:text-base text-gray-300 line-clamp-2">
                        How Sarah switched to electric without a home charger.
                      </p>
                    </div>
                  </div>
                  <div
                    className="story-card group relative min-w-[280px] md:min-w-[320px] 3xl:min-w-[450px] h-[350px] md:h-[380px] 3xl:h-[550px] rounded-[1.5rem] overflow-hidden cursor-pointer border border-gray-100 shadow-md shadow-gray-200/50"
                    data-category="hosts places"
                  >
                    <img
                      src="https://placehold.co/400x600/064e3b/ffffff?text=Green+Plaza"
                      alt="Host Story"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    <div className="absolute inset-0 p-6 3xl:p-10 flex flex-col justify-end text-white">
                      <div className="mb-2">
                        <span className="text-[9px] 3xl:text-xs uppercase tracking-widest bg-emerald-500/80 backdrop-blur-md px-2 py-1 rounded-full border border-emerald-400/20">
                          Hosts
                        </span>
                      </div>
                      <h3 className="text-xl 3xl:text-3xl font-bold leading-tight mb-1">
                        The Green Plaza Hotel
                      </h3>
                      <p className="text-xs 3xl:text-base text-gray-300 line-clamp-2">
                        Attracting new guests with seamless destination
                        charging.
                      </p>
                    </div>
                  </div>
                  <div
                    className="story-card group relative min-w-[280px] md:min-w-[320px] 3xl:min-w-[450px] h-[350px] md:h-[380px] 3xl:h-[550px] rounded-[1.5rem] overflow-hidden cursor-pointer border border-gray-100 shadow-md shadow-gray-200/50"
                    data-category="operators sustainability"
                  >
                    <img
                      src="https://placehold.co/400x600/3f3f46/ffffff?text=Fleet+Ops"
                      alt="Operator Story"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    <div className="absolute inset-0 p-6 3xl:p-10 flex flex-col justify-end text-white">
                      <div className="mb-2">
                        <span className="text-[9px] 3xl:text-xs uppercase tracking-widest bg-blue-500/80 backdrop-blur-md px-2 py-1 rounded-full border border-blue-400/20">
                          Operators
                        </span>
                      </div>
                      <h3 className="text-xl 3xl:text-3xl font-bold leading-tight mb-1">
                        City Fleet Systems
                      </h3>
                      <p className="text-xs 3xl:text-base text-gray-300 line-clamp-2">
                        Managing 500+ chargers with 99.9% uptime.
                      </p>
                    </div>
                  </div>
                  <div
                    className="story-card group relative min-w-[280px] md:min-w-[320px] 3xl:min-w-[450px] h-[350px] md:h-[380px] 3xl:h-[550px] rounded-[1.5rem] overflow-hidden cursor-pointer border border-gray-100 shadow-md shadow-gray-200/50"
                    data-category="sustainability impact"
                  >
                    <img
                      src="https://placehold.co/400x600/14532d/ffffff?text=Reforest"
                      alt="Sustainability Story"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    <div className="absolute inset-0 p-6 3xl:p-10 flex flex-col justify-end text-white">
                      <div className="mb-2">
                        <span className="text-[9px] 3xl:text-xs uppercase tracking-widest bg-lime-500/80 text-black backdrop-blur-md px-2 py-1 rounded-full border border-lime-400/20">
                          Sustainability
                        </span>
                      </div>
                      <h3 className="text-xl 3xl:text-3xl font-bold leading-tight mb-1">
                        Carbon Zero Project
                      </h3>
                      <p className="text-xs 3xl:text-base text-gray-300 line-clamp-2">
                        Offsetting emissions one kilowatt at a time.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="max-w-[1400px] 3xl:max-w-[2000px] mx-auto px-4 md:px-8 mt-8 shrink-0 z-10">
                  <div className="flex justify-center items-center gap-3 group/explore cursor-pointer">
                    <SmartLink
                      href="/blogs"
                      className="px-6 py-3 3xl:px-10 3xl:py-5 bg-zinc-900 text-white rounded-full font-bold text-xs md:text-sm 3xl:text-lg transition-colors duration-300 group-hover/explore:bg-emerald-600"
                    >
                      Explore All Pages
                    </SmartLink>
                    <SmartLink
                      href="/blogs"
                      className="w-10 h-10 md:w-12 md:h-12 3xl:w-16 3xl:h-16 flex items-center justify-center bg-gray-100 border border-zinc-200 rounded-full text-black transition-all duration-300 group-hover/explore:bg-emerald-600 group-hover/explore:text-white group-hover/explore:border-emerald-600"
                    >
                      <i className="bi bi-arrow-right text-base md:text-lg 3xl:text-xl" />
                    </SmartLink>
                  </div>
                </div>
              </section>
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
                    From local businesses to large operators, we work with
                    groups bringing cleaner energy to more places.
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
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '\n    /* Custom Keyframes for the Team Marquee */\n    @keyframes marquee-up {\n        0% { transform: translateY(0); }\n        100% { transform: translateY(-50%); }\n    }\n    @keyframes marquee-down {\n        0% { transform: translateY(-50%); }\n        100% { transform: translateY(0); }\n    }\n    .animate-marquee-up {\n        animation: marquee-up 30s linear infinite;\n    }\n    .animate-marquee-down {\n        animation: marquee-down 30s linear infinite;\n    }\n    /* Hover state: Pause or Slow down */\n    .group\\/card:hover .animate-marquee-up,\n    .group\\/card:hover .animate-marquee-down {\n        animation-play-state: paused;\n    }\n',
                }}
              />
              <section
                id="team-section"
                className="relative w-full min-h-screen bg-[#e5e5e5] text-black flex flex-col justify-center z-20 py-24"
              >
                <div className="max-w-[1400px] w-full mx-auto px-6 relative flex flex-col justify-center">
                  <div className="text-center mb-16 shrink-0">
                    <h2 className="text-3xl md:text-5xl 3xl:text-6xl font-display font-bold leading-tight max-w-7xl mx-auto text-zinc-900 tracking-tight">
                      With a team moving electric forward{' '}
                      <br className="hidden md:block" />
                      using simple tools and a lot of care.
                    </h2>
                  </div>
                  <div
                    className="team-list w-full border-t border-black/10"
                    id="team-accordion-wrapper"
                  >
                    <div className="team-member border-b border-black/10 overflow-hidden relative">
                      <div className="team-header flex justify-between items-center py-6 cursor-pointer group">
                        <h3 className="text-3xl md:text-5xl font-bold group-hover:text-[#16a34a] transition-colors">
                          Nashit Iqbal
                        </h3>
                        <span className="text-sm font-mono uppercase tracking-widest opacity-60 group-hover:opacity-100">
                          Founder
                        </span>
                      </div>
                      <div className="team-content overflow-hidden h-0 opacity-0">
                        <div className="pb-8 pt-4">
                          <div className="bg-[#022c22] rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center shadow-2xl text-white">
                            <div className="w-full md:w-[320px] h-[380px] bg-white/10 rounded-3xl shrink-0 relative overflow-hidden group/img">
                              <img
                                src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Nashit_q5zunh.png"
                                className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
                                alt="Nashit Iqbal"
                              />
                              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-50" />
                            </div>
                            <div className="relative pl-0 md:pl-4 max-w-3xl">
                              <i className="bi bi-quote text-7xl text-[#16a34a] absolute -top-10 -left-8 opacity-30" />
                              <p className="text-3xl md:text-4xl 3xl:text-5xl font-display font-bold leading-tight">
                                Who makes things look intentional
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="team-member border-b border-black/10 overflow-hidden relative">
                      <div className="team-header flex justify-between items-center py-6 cursor-pointer group">
                        <h3 className="text-3xl md:text-5xl font-bold group-hover:text-[#16a34a] transition-colors">
                          Anusha Shahid
                        </h3>
                        <span className="text-sm font-mono uppercase tracking-widest opacity-60 group-hover:opacity-100">
                          Founder
                        </span>
                      </div>
                      <div className="team-content overflow-hidden h-0 opacity-0">
                        <div className="pb-8 pt-4">
                          <div className="bg-[#022c22] rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center shadow-2xl text-white">
                            <div className="w-full md:w-[320px] h-[380px] bg-white/10 rounded-3xl shrink-0 relative overflow-hidden group/img">
                              <img
                                src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Anusha_vzwcmd.png"
                                className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
                                alt="Anusha"
                              />
                              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-50" />
                            </div>
                            <div className="relative pl-0 md:pl-4 max-w-3xl">
                              <i className="bi bi-quote text-7xl text-[#16a34a] absolute -top-10 -left-8 opacity-30" />
                              <p className="text-3xl md:text-4xl 3xl:text-5xl font-display font-bold leading-tight">
                                who makes sure things feel right
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="team-member border-b border-black/10 overflow-hidden relative">
                      <div className="team-header flex justify-between items-center py-6 cursor-pointer group">
                        <h3 className="text-3xl md:text-5xl font-bold group-hover:text-[#16a34a] transition-colors">
                          The Team
                        </h3>
                        <span className="text-sm font-mono uppercase tracking-widest opacity-60 group-hover:opacity-100">
                          See All Members
                        </span>
                      </div>
                      <div className="team-content overflow-hidden h-0 opacity-0">
                        <div className="pb-8 pt-4">
                          <SmartLink
                            href="/team"
                            className="relative block w-full h-[550px] bg-[#022c22] rounded-[2.5rem] overflow-hidden group/card shadow-2xl isolate"
                          >
                            <div className="absolute inset-0 grid grid-cols-5 gap-3 p-3 opacity-40 group-hover/card:opacity-20 transition-opacity duration-500">
                              <div className="relative overflow-hidden h-full rounded-2xl bg-white/5">
                                <div className="animate-marquee-up flex flex-col gap-3 w-full">
                                  <img
                                    src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Nashit_q5zunh.png"
                                    className="w-full aspect-[3/4] object-cover rounded-xl"
                                    alt="Member"
                                  />
                                  <img
                                    src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Anusha_vzwcmd.png"
                                    className="w-full aspect-[3/4] object-cover rounded-xl"
                                    alt="Member"
                                  />
                                  <img
                                    src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Anila_tpqzqx.png"
                                    className="w-full aspect-[3/4] object-cover rounded-xl"
                                    alt="Member"
                                  />
                                  <img
                                    src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Nashit_q5zunh.png"
                                    className="w-full aspect-[3/4] object-cover rounded-xl"
                                    alt="Member"
                                  />
                                  <img
                                    src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Anusha_vzwcmd.png"
                                    className="w-full aspect-[3/4] object-cover rounded-xl"
                                    alt="Member"
                                  />
                                  <img
                                    src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Anila_tpqzqx.png"
                                    className="w-full aspect-[3/4] object-cover rounded-xl"
                                    alt="Member"
                                  />
                                </div>
                              </div>
                              <div className="relative overflow-hidden h-full rounded-2xl bg-white/5 mt-8">
                                <div className="animate-marquee-down flex flex-col gap-3 w-full">
                                  <img
                                    src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Anila_tpqzqx.png"
                                    className="w-full aspect-[3/4] object-cover rounded-xl"
                                    alt="Member"
                                  />
                                  <img
                                    src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Nashit_q5zunh.png"
                                    className="w-full aspect-[3/4] object-cover rounded-xl"
                                    alt="Member"
                                  />
                                  <img
                                    src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Anusha_vzwcmd.png"
                                    className="w-full aspect-[3/4] object-cover rounded-xl"
                                    alt="Member"
                                  />
                                  <img
                                    src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Anila_tpqzqx.png"
                                    className="w-full aspect-[3/4] object-cover rounded-xl"
                                    alt="Member"
                                  />
                                  <img
                                    src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Nashit_q5zunh.png"
                                    className="w-full aspect-[3/4] object-cover rounded-xl"
                                    alt="Member"
                                  />
                                  <img
                                    src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Anusha_vzwcmd.png"
                                    className="w-full aspect-[3/4] object-cover rounded-xl"
                                    alt="Member"
                                  />
                                </div>
                              </div>
                              <div />
                              <div className="relative overflow-hidden h-full rounded-2xl bg-white/5">
                                <div
                                  className="animate-marquee-up flex flex-col gap-3 w-full"
                                  style={{ animationDelay: '-5s' }}
                                >
                                  <img
                                    src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Anusha_vzwcmd.png"
                                    className="w-full aspect-[3/4] object-cover rounded-xl"
                                    alt="Member"
                                  />
                                  <img
                                    src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Anila_tpqzqx.png"
                                    className="w-full aspect-[3/4] object-cover rounded-xl"
                                    alt="Member"
                                  />
                                  <img
                                    src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Nashit_q5zunh.png"
                                    className="w-full aspect-[3/4] object-cover rounded-xl"
                                    alt="Member"
                                  />
                                  <img
                                    src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Anusha_vzwcmd.png"
                                    className="w-full aspect-[3/4] object-cover rounded-xl"
                                    alt="Member"
                                  />
                                  <img
                                    src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Anila_tpqzqx.png"
                                    className="w-full aspect-[3/4] object-cover rounded-xl"
                                    alt="Member"
                                  />
                                  <img
                                    src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Nashit_q5zunh.png"
                                    className="w-full aspect-[3/4] object-cover rounded-xl"
                                    alt="Member"
                                  />
                                </div>
                              </div>
                              <div className="relative overflow-hidden h-full rounded-2xl bg-white/5 mt-8">
                                <div
                                  className="animate-marquee-down flex flex-col gap-3 w-full"
                                  style={{ animationDelay: '-5s' }}
                                >
                                  <img
                                    src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Nashit_q5zunh.png"
                                    className="w-full aspect-[3/4] object-cover rounded-xl"
                                    alt="Member"
                                  />
                                  <img
                                    src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Anusha_vzwcmd.png"
                                    className="w-full aspect-[3/4] object-cover rounded-xl"
                                    alt="Member"
                                  />
                                  <img
                                    src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Anila_tpqzqx.png"
                                    className="w-full aspect-[3/4] object-cover rounded-xl"
                                    alt="Member"
                                  />
                                  <img
                                    src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Nashit_q5zunh.png"
                                    className="w-full aspect-[3/4] object-cover rounded-xl"
                                    alt="Member"
                                  />
                                  <img
                                    src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Anusha_vzwcmd.png"
                                    className="w-full aspect-[3/4] object-cover rounded-xl"
                                    alt="Member"
                                  />
                                  <img
                                    src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Anila_tpqzqx.png"
                                    className="w-full aspect-[3/4] object-cover rounded-xl"
                                    alt="Member"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 bg-gradient-to-r from-[#022c22]/10 via-[#022c22]/90 to-[#022c22]/10">
                              <h4 className="text-4xl md:text-7xl font-display font-bold text-white mb-4 drop-shadow-xl">
                                Meet the
                                <br />
                                Whole Team
                              </h4>
                              <span className="text-emerald-400 font-mono text-sm md:text-base uppercase tracking-[0.2em] mb-8 bg-[#022c22]/80 px-4 py-1 rounded-full border border-emerald-500/20">
                                10+ Passionate Builders
                              </span>
                              <div className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-transform duration-500 group-hover/card:scale-110 group-hover/card:rotate-[-45deg]">
                                <i className="bi bi-arrow-right text-3xl" />
                              </div>
                            </div>
                          </SmartLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section
                id="contact-section"
                className="py-24 bg-white text-zinc-900 relative border-t border-gray-100 overflow-hidden"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
                <div className="max-w-4xl mx-auto px-6 relative z-10">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl 3xl:text-7xl font-display font-bold tracking-tight text-zinc-900 mb-6">
                      Here to help you
                      <br />
                      take the next step
                    </h2>
                    <p className="text-zinc-500 text-lg md:text-xl font-light max-w-xl mx-auto">
                      Reach out to us for hosting, charging, or software solutions.
                    </p>
                  </div>
                  <div className="relative bg-zinc-900 p-8 md:p-14 rounded-[3rem] border border-zinc-800 shadow-2xl shadow-emerald-900/10 overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />
                    <form
                      id="contact-form"
                      action="https://formspree.io/f/mvgrykro"
                      method="POST"
                      className="relative z-10 space-y-8 transition-opacity duration-500"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="group space-y-3">
                          <label
                            htmlFor="name"
                            className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-5 group-focus-within:text-emerald-400 transition-colors"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            placeholder="John Doe"
                            className="w-full h-14 bg-black border border-zinc-800 rounded-full px-6 text-lg text-white placeholder:text-zinc-700 focus:border-emerald-500/50 focus:bg-zinc-950 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300"
                          />
                        </div>
                        <div className="group space-y-3">
                          <label
                            htmlFor="email"
                            className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-5 group-focus-within:text-emerald-400 transition-colors"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            placeholder="john@example.com"
                            className="w-full h-14 bg-black border border-zinc-800 rounded-full px-6 text-lg text-white placeholder:text-zinc-700 focus:border-emerald-500/50 focus:bg-zinc-950 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300"
                          />
                        </div>
                        <div className="group space-y-3 md:col-span-2">
                          <label
                            htmlFor="phone"
                            className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-5 group-focus-within:text-emerald-400 transition-colors"
                          >
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            id="phone"
                            required
                            placeholder="+1 (555) 000-0000"
                            className="w-full h-14 bg-black border border-zinc-800 rounded-full px-6 text-lg text-white placeholder:text-zinc-700 focus:border-emerald-500/50 focus:bg-zinc-950 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300"
                          />
                        </div>
                      </div>
                      <div className="group space-y-3 relative">
                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-5 group-focus-within:text-emerald-400 transition-colors">
                          How can we help?
                        </label>
                        <div id="custom-dropdown" className="relative w-full">
                          <button
                            type="button"
                            id="dropdown-trigger"
                            className="w-full h-14 bg-black border border-zinc-800 rounded-full px-6 text-lg text-white flex items-center justify-between focus:border-emerald-500/50 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300"
                          >
                            <span
                              id="dropdown-selected-text"
                              className="text-zinc-500"
                            >
                              Select an option
                            </span>
                            <i
                              className="bi bi-chevron-down text-emerald-500 transition-transform duration-300"
                              id="dropdown-arrow"
                            />
                          </button>
                          <ul
                            id="dropdown-menu"
                            className="absolute z-[100] w-full mt-2 bg-zinc-900 border border-zinc-800 rounded-[2rem] overflow-hidden shadow-2xl opacity-0 translate-y-[-10px] pointer-events-none transition-all duration-300"
                          >
                            <li
                              className="dropdown-item px-6 py-4 hover:bg-emerald-500 hover:text-white cursor-pointer transition-colors text-white border-b border-white/5"
                              data-value="Hosting"
                            >
                              Hosting
                            </li>
                            <li
                              className="dropdown-item px-6 py-4 hover:bg-emerald-500 hover:text-white cursor-pointer transition-colors text-white border-b border-white/5"
                              data-value="Charging"
                            >
                              Charging
                            </li>
                            <li
                              className="dropdown-item px-6 py-4 hover:bg-emerald-500 hover:text-white cursor-pointer transition-colors text-white border-b border-white/5"
                              data-value="Software"
                            >
                              Software
                            </li>
                            <li
                              className="dropdown-item px-6 py-4 hover:bg-emerald-500 hover:text-white cursor-pointer transition-colors text-white border-b border-white/5"
                              data-value="General Query"
                            >
                              General Query
                            </li>
                            <li
                              className="dropdown-item px-6 py-4 hover:bg-emerald-500 hover:text-white cursor-pointer transition-colors text-white border-b border-white/5"
                              data-value="Career"
                            >
                              Career Opportunity
                            </li>
                            <li
                              className="dropdown-item px-6 py-4 hover:bg-emerald-500 hover:text-white cursor-pointer transition-colors text-white"
                              data-value="Support"
                            >
                              Customer Support
                            </li>
                          </ul>
                          <input
                            type="hidden"
                            name="subject"
                            id="dropdown-hidden-input"
                            required
                          />
                        </div>
                      </div>
                      <div className="group space-y-3">
                        <label
                          htmlFor="message"
                          className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-5 group-focus-within:text-emerald-400 transition-colors"
                        >
                          Message
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          rows={5}
                          required
                          placeholder="Tell us how we can help..."
                          className="w-full bg-black border border-zinc-800 rounded-3xl px-6 py-6 text-lg text-white placeholder:text-zinc-700 focus:border-emerald-500/50 focus:bg-zinc-950 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300 resize-none"
                          defaultValue={''}
                        />
                      </div>
                      <div className="flex flex-col items-center pt-6">
                        <button
                          type="submit"
                          id="contact-submit-btn"
                          className="group relative px-12 py-5 bg-white text-black rounded-full font-bold text-lg transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)] w-full md:w-auto min-w-[240px] overflow-hidden"
                        >
                          <span
                            id="btn-text"
                            className="relative z-10 flex items-center gap-3 justify-center"
                          >
                            Send Message{' '}
                            <i className="bi bi-arrow-right group-hover:translate-x-1 transition-transform" />
                          </span>
                          <div
                            id="btn-loader"
                            className="hidden absolute inset-0 z-20 flex items-center justify-center bg-zinc-900"
                          >
                            <div className="w-6 h-6 border-2 border-white/30 border-t-emerald-500 rounded-full animate-spin" />
                          </div>
                        </button>
                        <p
                          id="form-error"
                          className="hidden text-red-400 text-sm mt-4 font-medium flex items-center gap-2"
                        >
                          <i className="bi bi-exclamation-circle-fill" /> Oops!
                          Submission failed. Please try again.
                        </p>
                      </div>
                    </form>
                    <div
                      id="contact-success"
                      className="hidden absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-8 opacity-0 transition-opacity duration-500 bg-zinc-900/95 backdrop-blur-md rounded-[3rem]"
                    >
                      <div className="w-24 h-24 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-emerald-500/10 border border-emerald-500/20 animate-[bounce_1s_ease-in-out_infinite]">
                        <i className="bi bi-check-lg text-5xl" />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
                        Message Sent!
                      </h3>
                      <p className="text-zinc-400 max-w-md text-lg mb-10 leading-relaxed">
                        Thanks for reaching out. We'll get back to you shortly.
                      </p>
                      <button
                        id="reset-form-btn"
                        className="px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-emerald-500 hover:text-white transition-all duration-300"
                      >
                        Send another message
                      </button>
                    </div>
                  </div>
                </div>
              </section>
              <footer className="bg-black text-white pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 mb-20 text-center">
                  <h2 className="text-3xl md:text-5xl 3xl:text-7xl font-display font-bold tracking-tight mb-4 md:whitespace-nowrap">
                    Let's move electric forward together.
                  </h2>
                </div>
                <div className="border-t border-white/10 bg-black">
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
                          href="/charging-partners"
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
                              href="https://zvolta.com/mobile"
                              className="hover:text-emerald-400 transition-colors block py-1"
                            >
                              Using the app
                            </SmartLink>
                          </li>
                          <li>
                            <SmartLink
                              href="https://wa.me/+923104446529"
                              target="_blank"
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
                          href="https://zvolta.com/mobile"
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
                          <li className="py-1 opacity-60 cursor-default">
                            Platform overview{' '}
                            <span className="text-xs bg-zinc-800 px-2 py-0.5 rounded ml-2 text-zinc-400">
                              Coming Soon
                            </span>
                          </li>
                          <li className="py-1 opacity-60 cursor-default">
                            OCPP compatibility{' '}
                            <span className="text-xs bg-zinc-800 px-2 py-0.5 rounded ml-2 text-zinc-400">
                              Coming Soon
                            </span>
                          </li>
                          <li className="py-1 opacity-60 cursor-default">
                            Integrations{' '}
                            <span className="text-xs bg-zinc-800 px-2 py-0.5 rounded ml-2 text-zinc-400">
                              Coming Soon
                            </span>
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
                <div className="border-y border-white/10 bg-black">
                  <div className="max-w-[1400px] mx-auto py-10 px-6 md:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-4 text-zinc-400 text-base font-medium">
                      <div className="flex flex-col gap-2">
                        <SmartLink
                          href="/coming-soon"
                          className="hover:text-white transition-colors"
                        >
                          About
                        </SmartLink>
                        <SmartLink
                          href="/coming-soon"
                          className="hover:text-white transition-colors"
                        >
                          Careers
                        </SmartLink>
                      </div>
                      <div className="flex flex-col gap-2">
                        <SmartLink
                          href="/blogs"
                          className="hover:text-white transition-colors"
                        >
                          Stories
                        </SmartLink>
                        <SmartLink
                          href="/coming-soon"
                          className="hover:text-white transition-colors"
                        >
                          Contact
                        </SmartLink>
                      </div>
                      <div className="flex flex-col gap-2">
                        <SmartLink
                          href="/coming-soon"
                          className="hover:text-white transition-colors"
                        >
                          Sustainability
                        </SmartLink>
                        <SmartLink
                          href="/policy#privacy-policy"
                          className="hover:text-white transition-colors"
                        >
                          Privacy Policy
                        </SmartLink>
                      </div>
                      <div className="flex flex-col gap-2">
                        <SmartLink
                          href="/coming-soon"
                          className="hover:text-white transition-colors"
                        >
                          Team
                        </SmartLink>
                        <SmartLink
                          href="/charging-partners"
                          className="hover:text-white transition-colors"
                        >
                          Partners
                        </SmartLink>
                      </div>
                      <div className="flex flex-col gap-2">
                        <SmartLink
                          href="/policy#terms-and-conditions"
                          className="hover:text-white transition-colors"
                        >
                          Terms of Service
                        </SmartLink>
                        <SmartLink
                          href="/coming-soon"
                          className="hover:text-white transition-colors"
                        >
                          Submit a Report
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
                      href="mailto:support@zvolta.com"
                      className="text-zinc-500 hover:text-white transition-colors"
                    >
                      <i className="bi bi-envelope text-xl" />
                    </SmartLink>
                  </div>
                </div>
              </footer>
            </main>
          </div>
        </div>
        <div
          id="virtual-scrollbar-track"
          className="fixed top-0 right-1 h-full w-1.5 z-[9999] pointer-events-none mix-blend-difference hidden md:block"
        >
          <div
            id="virtual-scrollbar-thumb"
            className="w-full bg-emerald-500 rounded-full absolute top-0 right-0 opacity-0 transition-opacity duration-300"
          />
        </div>
      </div>
    </>
  );
}

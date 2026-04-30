import { SmartLink } from "../components/SmartLink";

export default function AppstorePage() {
  return (
    <>
      <style data-page-style="appstore:1">{`html, body {
          overflow-x: hidden;
          background-color: #0a0a0a;
      }
      .no-scrollbar::-webkit-scrollbar { display: none; }
      .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

      /* Carousel Mask */
      .carousel-mask {
          mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
      }

      /* Input Autofill Fix */
      input:-webkit-autofill,
      input:-webkit-autofill:hover,
      input:-webkit-autofill:focus,
      input:-webkit-autofill:active{
          -webkit-box-shadow: 0 0 0 30px #0a0a0a inset !important;
          -webkit-text-fill-color: white !important;
      }`}</style>
      <div>
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
        <SmartLink
          id="dynamic-logo"
          href="/"
          className="fixed top-6 left-6 z-[900] w-12 h-12 rounded-full bg-zinc-900/90 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-xl hover:scale-105 transition-transform"
        >
          <img src="img/symbol logo.png" alt="ZVolta" className="h-6 w-auto" />
        </SmartLink>
        <button
          id="dynamic-sidebar-btn"
          className="fixed top-6 right-6 z-[900] w-12 h-12 rounded-full bg-[#006b45] backdrop-blur-md border border-emerald-500/30 text-white flex items-center justify-center shadow-xl hover:bg-[#008f5d] hover:scale-105 transition-all group"
        >
          <i className="bi bi-list text-2xl group-hover:rotate-180 transition-transform duration-500" />
        </button>
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
                    href="/#hero-section"
                    className="mobile-menu-link text-5xl md:text-6xl font-display font-bold text-white hover:text-emerald-500 transition-colors flex items-center justify-between group/link"
                  >
                    Home{" "}
                    <i className="bi bi-arrow-right text-3xl opacity-0 -translate-x-8 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-emerald-500" />
                  </SmartLink>
                  <div className="h-px bg-white/10 w-full" />
                  <SmartLink
                    href="/#host"
                    className="mobile-menu-link text-5xl md:text-6xl font-display font-bold text-white hover:text-emerald-500 transition-colors flex items-center justify-between group/link"
                  >
                    Hosting{" "}
                    <i className="bi bi-arrow-right text-3xl opacity-0 -translate-x-8 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-emerald-500" />
                  </SmartLink>
                  <div className="h-px bg-white/10 w-full" />
                  <SmartLink
                    href="/#map"
                    className="mobile-menu-link text-5xl md:text-6xl font-display font-bold text-white hover:text-emerald-500 transition-colors flex items-center justify-between group/link"
                  >
                    Charging{" "}
                    <i className="bi bi-arrow-right text-3xl opacity-0 -translate-x-8 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-emerald-500" />
                  </SmartLink>
                  <div className="h-px bg-white/10 w-full" />
                  <SmartLink
                    href="/#software"
                    className="mobile-menu-link text-5xl md:text-6xl font-display font-bold text-white hover:text-emerald-500 transition-colors flex items-center justify-between group/link"
                  >
                    Software{" "}
                    <i className="bi bi-arrow-right text-3xl opacity-0 -translate-x-8 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-emerald-500" />
                  </SmartLink>
                </nav>
                <div className="mt-12 relative z-10">
                  <p className="text-zinc-500 text-xs uppercase tracking-[0.2em] mb-2 font-bold">
                    Contact us
                  </p>
                  <SmartLink
                    href="mailto:admin@zvolta.com"
                    className="text-xl md:text-2xl text-white font-mono hover:text-emerald-400 transition-colors border-b border-transparent hover:border-emerald-400 pb-1"
                  >
                    admin@zvolta.com
                  </SmartLink>
                </div>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 h-full content-start">
                <SmartLink
                  href="/#host"
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
                  href="/#map"
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
              </div>
            </div>
          </div>
        </div>
        <div className="fixed top-[-20%] left-[-20%] w-[120vw] h-[120vw] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none z-0" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[100vw] h-[100vw] bg-lime-500/5 blur-[120px] rounded-full pointer-events-none z-0" />
        <main className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen px-4 pt-28 pb-20 max-w-4xl mx-auto">
          <div className="text-center mb-12 w-full reveal-element opacity-0 translate-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Arriving 2026
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 leading-[1.05]">
              The ZVolta App <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-emerald-200 to-emerald-500">
                Is Almost Here.
              </span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-lg mx-auto mb-8">
              Available now on Android. Coming to iOS in 2026.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <SmartLink
                href="https://play.google.com/store/apps/details?id=app.zvolta.android"
                target="_blank"
                className="group relative px-6 py-3 bg-white text-black border border-white rounded-xl flex items-center gap-3 hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition-all duration-300 shadow-xl hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transform hover:scale-105"
              >
                <i className="bi bi-google-play text-2xl group-hover:scale-110 transition-transform duration-300" />
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider font-bold opacity-80">
                    Get it on
                  </div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </SmartLink>
              <div className="group relative px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center gap-3 cursor-not-allowed opacity-70">
                <i className="bi bi-apple text-2xl text-zinc-500" />
                <div className="text-left">
                  <div className="text-[10px] text-zinc-600 uppercase tracking-wider font-bold">
                    Coming 2026
                  </div>
                  <div className="text-sm font-bold text-zinc-500">
                    App Store
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="relative w-full group reveal-element opacity-0 translate-y-4"
            style={{ transitionDelay: "0.2s" }}
          >
            <button
              id="scroll-left"
              className="hidden md:flex absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/50 hover:bg-black/80 text-white rounded-full items-center justify-center backdrop-blur-md border border-white/10 transition-all duration-300 shadow-xl opacity-0 group-hover:opacity-100 disabled:opacity-0 active:scale-95"
            >
              <i className="bi bi-chevron-left text-xl" />
            </button>
            <div
              id="screenshot-container"
              className="carousel-mask w-full overflow-x-auto no-scrollbar flex gap-6 px-16 snap-x snap-mandatory scroll-smooth pb-4"
            >
              <div className="snap-center shrink-0">
                <img
                  src="img/mobile1.png"
                  className="w-[260px] md:w-[340px] rounded-3xl shadow-2xl border border-white/10"
                  alt="App Screenshot 1"
                />
              </div>
              <div className="snap-center shrink-0">
                <img
                  src="img/mobile2.png"
                  className="w-[260px] md:w-[340px] rounded-3xl shadow-2xl border border-white/10"
                  alt="App Screenshot 2"
                />
              </div>
              <div className="snap-center shrink-0">
                <img
                  src="img/mobile3.png"
                  className="w-[260px] md:w-[340px] rounded-3xl shadow-2xl border border-white/10"
                  alt="App Screenshot 3"
                />
              </div>
              <div className="snap-center shrink-0">
                <img
                  src="img/mobile4.png"
                  className="w-[260px] md:w-[340px] rounded-3xl shadow-2xl border border-white/10"
                  alt="App Screenshot 4"
                />
              </div>
            </div>
            <button
              id="scroll-right"
              className="hidden md:flex absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/50 hover:bg-black/80 text-white rounded-full items-center justify-center backdrop-blur-md border border-white/10 transition-all duration-300 shadow-xl opacity-0 group-hover:opacity-100 active:scale-95"
            >
              <i className="bi bi-chevron-right text-xl" />
            </button>
          </div>
        </main>
        <footer className="bg-black text-white pt-24 pb-12 border-t border-white/10 relative overflow-hidden z-20">
          <div className="max-w-[1400px] mx-auto px-6 mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">
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
                    Start hosting{" "}
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
                    Find A Station{" "}
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
                    Book a demo{" "}
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
    </>
  );
}

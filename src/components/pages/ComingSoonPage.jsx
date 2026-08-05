import { SmartLink } from "../SmartLink";

export default function ComingSoonPage() {
  return (
    <>
      <style data-page-style="coming-soon:1">{`html, body {
          overflow-x: hidden;
          background-color: #0a0a0a;
      }
      .no-scrollbar::-webkit-scrollbar { display: none; }
      .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

      /* Loader specific utilities */
      #loader-blind-top { transform-origin: top; will-change: transform; }
      #loader-blind-bottom { transform-origin: bottom; will-change: transform; }`}</style>
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
                src="/img/symbol logo.png"
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
          <img src="/img/symbol logo.png" alt="ZVolta" className="h-6 w-auto" />
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
                <div className="absolute top-8 right-8 w-32 h-32 opacity-20 bg-[radial-gradient(#16a34a_2px,transparent_2px)] [background-size:8px_8px] rounded-full pointer-events-none" />
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
        <div className="fixed top-[-20%] left-[-20%] w-[120vw] h-[120vw] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none z-0 animate-pulse-slow" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[100vw] h-[100vw] bg-lime-500/5 blur-[120px] rounded-full pointer-events-none z-0" />
        <main className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-24 text-center">
          <div className="mb-8 w-24 h-24 rounded-full bg-zinc-900 border border-emerald-500/30 flex items-center justify-center shadow-[0_0_40px_rgba(22, 163, 74,0.15)] animate-pulse-slow opacity-0 translate-y-4 reveal-element">
            <i className="bi bi-cone-striped text-4xl text-emerald-500" />
          </div>
          <h1
            className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 opacity-0 translate-y-4 reveal-element"
            style={{ transitionDelay: "0.1s" }}
          >
            Powering <br />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-400 to-emerald-600">
              Up Soon
            </span>
          </h1>
          <p
            className="text-zinc-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed opacity-0 translate-y-4 reveal-element"
            style={{ transitionDelay: "0.2s" }}
          >
            This page is currently plugged in and charging. We are building
            something electric for you.
          </p>
          <SmartLink
            href="/"
            className="group relative px-8 py-4 bg-zinc-900 text-white rounded-full font-bold text-lg border border-zinc-700 hover:border-emerald-500 transition-all duration-300 opacity-0 translate-y-4 reveal-element hover:bg-emerald-600 hover:text-black hover:shadow-[0_0_30px_rgba(22, 163, 74,0.4)]"
            style={{ transitionDelay: "0.3s" }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Return Home{" "}
              <i className="bi bi-arrow-right transition-transform group-hover:translate-x-1" />
            </span>
          </SmartLink>
        </main>
      </div>
    </>
  );
}

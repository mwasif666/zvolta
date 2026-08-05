import { SmartLink } from "../SmartLink";

export default function MobilePage() {
  return (
    <>
      <style data-page-style="mobile:1">{`body {
          background-color: #0a0a0a;
      }
      .glass-panel {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
      }
      .no-scrollbar::-webkit-scrollbar { display: none; }
      .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

      /* GRADIENT FADE MASK FOR CAROUSEL */
      .carousel-mask {
          /* Fades out the left and right edges (15% from each side) */
          mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
      }`}</style>
      <div>
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
          className="fixed inset-0 z-[10000] invisible opacity-0 pointer-events-none transition-opacity duration-300"
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
        <main className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen px-0 pt-28 pb-16 max-w-lg mx-auto">
          <div className="text-center mb-8 w-full px-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(22, 163, 74,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Location Detected
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tight mb-4 leading-[1.05]">
              Ready to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-emerald-200 to-emerald-500">
                Charge?
              </span>
            </h1>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-xs mx-auto">
              Scan, Pay, and Go.
            </p>
          </div>
          <div className="relative w-full group mb-10">
            <button
              id="scroll-left"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-md border border-white/10 transition-all duration-300 shadow-xl opacity-0 group-hover:opacity-100 disabled:opacity-0 active:scale-95"
            >
              <i className="bi bi-chevron-left text-xl" />
            </button>
            <div
              id="screenshot-container"
              className="carousel-mask w-full overflow-x-auto no-scrollbar flex gap-6 px-16 snap-x snap-mandatory pb-4"
            >
              <div className="snap-center shrink-0">
                <img
                  src="img/mobile1.png"
                  className="w-[260px] md:w-[340px] rounded-2xl shadow-2xl border border-white/10"
                  alt="App Screenshot 1"
                />
              </div>
              <div className="snap-center shrink-0">
                <img
                  src="img/mobile2.png"
                  className="w-[260px] md:w-[340px] rounded-2xl shadow-2xl border border-white/10"
                  alt="App Screenshot 2"
                />
              </div>
              <div className="snap-center shrink-0">
                <img
                  src="img/mobile3.png"
                  className="w-[260px] md:w-[340px] rounded-2xl shadow-2xl border border-white/10"
                  alt="App Screenshot 3"
                />
              </div>
              <div className="snap-center shrink-0">
                <img
                  src="img/mobile4.png"
                  className="w-[260px] md:w-[340px] rounded-2xl shadow-2xl border border-white/10"
                  alt="App Screenshot 4"
                />
              </div>
            </div>
            <button
              id="scroll-right"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-md border border-white/10 transition-all duration-300 shadow-xl opacity-0 group-hover:opacity-100 active:scale-95"
            >
              <i className="bi bi-chevron-right text-xl" />
            </button>
          </div>
          <div className="w-full flex flex-col gap-3 px-6">
            <SmartLink
              href="https://play.google.com/store/apps/details?id=com.zvolta.app"
              // href="https://play.google.com/store/apps/details?id=app.zvolta.android"
              className="group relative w-full rounded-2xl overflow-hidden transform transition-transform active:scale-95 duration-200"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-lime-400 to-emerald-600 animate-gradient-x opacity-100" />
              <div className="relative m-[1px] bg-zinc-900 hover:bg-zinc-800 transition-colors rounded-[15px] px-5 py-3 flex items-center justify-between group-hover:bg-zinc-800/90">
                <div className="flex items-center gap-3">
                  <i className="bi bi-google-play text-2xl text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-left">
                    <div className="text-[9px] uppercase tracking-wider text-emerald-400/80 font-bold mb-0.5">
                      Recommended
                    </div>
                    <div className="text-base font-bold text-white leading-none">
                      Get the App
                    </div>
                  </div>
                </div>
                <i className="bi bi-chevron-right text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
              </div>
            </SmartLink>
            <div className="flex items-center gap-4 w-full py-1">
              <div className="h-px bg-white/5 flex-grow" />
              <span className="text-zinc-600 text-[10px] font-mono uppercase tracking-widest">
                Or instant web access
              </span>
              <div className="h-px bg-white/5 flex-grow" />
            </div>
            <SmartLink
              href="https://evrental-app.orkofleet.com/login"
              className="group w-full glass-panel hover:bg-white/5 text-zinc-300 hover:text-white rounded-2xl px-5 py-3 flex items-center justify-between transition-all duration-200 active:scale-95 border border-white/5 hover:border-white/20"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center border border-white/5">
                  <i className="bi bi-globe text-base" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold leading-none">
                    Use Web Browser
                  </div>
                  <div className="text-[10px] text-zinc-500 mt-1">
                    No download required
                  </div>
                </div>
              </div>
              <i className="bi bi-box-arrow-up-right text-sm text-zinc-600 group-hover:text-zinc-300 transition-colors" />
            </SmartLink>
          </div>
        </main>
      </div>
    </>
  );
}

import { SmartLink } from "../../IndexPage.shared.jsx";
export function AppSection() {
  return (
    <section
      id="app-section"
      className="relative py-16 md:py-20 px-6 overflow-hidden bg-[#050505] text-white"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#16a34a]/10 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="relative z-10 max-w-7xl 3xl:max-w-[1800px] mx-auto flex flex-col items-center text-center">
        <div className="max-w-5xl mx-auto mb-6 app-content-animate">
          <h2 className="text-3xl md:text-5xl 3xl:text-6xl font-display font-bold tracking-tight leading-[1.05]">
            One connected platform for seamless EV charging
            <span className="text-[#16a34a]"> management.</span>
          </h2>
        </div>
        <div className="relative p-1 bg-zinc-900/80 backdrop-blur-md rounded-full inline-flex items-center gap-1 border border-white/5 mb-8 shadow-2xl z-20">
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
        <div
          id="app-visual-stage"
          className="app-visual-stage relative w-full max-w-[1000px] 3xl:max-w-[1400px] h-[490px] md:h-[570px] 3xl:h-[740px] flex justify-center items-center perspective-1000"
        >
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
            style={{
              animationDelay: "1s",
            }}
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
            style={{
              animationDelay: "0.5s",
            }}
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
            style={{
              animationDelay: "1.5s",
            }}
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
          <div
            id="app-phone-shell"
            className="app-phone-shell relative w-[270px] md:w-[270px] 3xl:w-[360px] h-full transition-transform duration-700 ease-out will-change-transform z-20"
          >
            <div
              id="app-image-frame"
              className="app-image-frame phone-mockup h-full w-full shadow-2xl relative overflow-hidden"
            >
              <img
                id="app-screen-img"
                src="https://res.cloudinary.com/diywraupt/image/upload/v1778762258/d60c7cfe-e7c3-40f4-a386-3082cbd21bbf.png"
                data-user-src="https://res.cloudinary.com/diywraupt/image/upload/v1778762258/d60c7cfe-e7c3-40f4-a386-3082cbd21bbf.png"
                data-host-src="https://res.cloudinary.com/diywraupt/image/upload/v1778837244/4661725e-e5ca-4b5b-b3ed-5f38934a4d9e.png"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                alt="App Screen"
              />
              <div className="app-phone-speaker" aria-hidden="true" />
              <div className="" />
            </div>
            <div id="app-phone-glow" className="" />
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
            href="https://play.google.com/store/apps/details?id=com.zvolta.app"
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
  );
}

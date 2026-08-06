import { SmartLink } from "../../IndexPage.shared.jsx";
export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="hidden relative bg-zinc-50 text-black overflow-hidden py-10 -mt-px"
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
                className="dynamic-word col-start-1 row-start-1 block text-[#16a34a] font-bold"
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
                style={{
                  objectPosition: "0% 50%",
                }}
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
                <p className="text-base 3xl:text-xl text-white leading-snug min-h-[4.2em]">
                  Tell us about your site, your goals, and how many chargers you
                  want.
                </p>
              </div>
            </div>
            <div className="sleek-card-layer bg-zinc-900" data-state={1}>
              <img
                src="img/Grids/02.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                style={{
                  objectPosition: "0% 50%",
                }}
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
                <p className="text-base 3xl:text-xl text-white leading-snug min-h-[4.2em]">
                  Open the app to find a nearby charger that fits your vehicle.
                </p>
              </div>
            </div>
            <div className="sleek-card-layer bg-[#051810]" data-state={2}>
              <img
                src="img/Grids/03.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                style={{
                  objectPosition: "0% 50%",
                }}
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
                <p className="text-base 3xl:text-xl text-white leading-snug min-h-[4.2em]">
                  Share your hardware details and how you run your charging
                  operations today.
                </p>
              </div>
            </div>
          </div>
          <div className="relative rounded-[2.5rem] bg-gray-100 shadow-2xl card-column aspect-[3/4] md:aspect-auto group border border-white/50">
            <div className="sleek-card-layer bg-white" data-state={0}>
              <img
                src="img/Grids/05.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  objectPosition: "33.33% 50%",
                }}
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
                <p className="text-base 3xl:text-xl text-white leading-snug min-h-[4.2em]">
                  We assess your layout and power needs and guide you to the
                  best setup.
                </p>
              </div>
            </div>
            <div className="sleek-card-layer bg-zinc-900" data-state={1}>
              <img
                src="img/Grids/02.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-80"
                style={{
                  objectPosition: "33.33% 50%",
                }}
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
                <p className="text-base 3xl:text-xl text-white leading-snug min-h-[4.2em]">
                  Park, top-up wallet, and start a session by scanning the QR
                  code on screen.
                </p>
              </div>
            </div>
            <div className="sleek-card-layer bg-[#051810]" data-state={2}>
              <img
                src="img/Grids/03.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-80"
                style={{
                  objectPosition: "33.33% 50%",
                }}
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
                <p className="text-base 3xl:text-xl text-white leading-snug min-h-[4.2em]">
                  We connect your chargers to our OCPP-ready platform and set up
                  your pricing.
                </p>
              </div>
            </div>
          </div>
          <div className="relative rounded-[2.5rem] bg-gray-100 shadow-2xl card-column aspect-[3/4] md:aspect-auto group border border-white/50">
            <div className="sleek-card-layer bg-white" data-state={0}>
              <img
                src="img/Grids/05.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  objectPosition: "66.66% 50%",
                }}
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
                <p className="text-base 3xl:text-xl text-white leading-snug min-h-[4.2em]">
                  We install the chargers, connect the software, and prepare
                  everything for launch.
                </p>
              </div>
            </div>
            <div className="sleek-card-layer bg-zinc-900" data-state={1}>
              <img
                src="img/Grids/02.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-80"
                style={{
                  objectPosition: "66.66% 50%",
                }}
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
                <p className="text-base 3xl:text-xl text-white leading-snug min-h-[4.2em]">
                  Watch your charging progress in real time with simple, clear
                  pricing.
                </p>
              </div>
            </div>
            <div className="sleek-card-layer bg-[#051810]" data-state={2}>
              <img
                src="img/Grids/03.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-80"
                style={{
                  objectPosition: "66.66% 50%",
                }}
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
                <p className="text-base 3xl:text-xl text-white leading-snug min-h-[4.2em]">
                  You monitor status, manage users, and handle payments from one
                  dashboard.
                </p>
              </div>
            </div>
          </div>
          <div className="relative rounded-[2.5rem] bg-gray-100 shadow-2xl card-column aspect-[3/4] md:aspect-auto group border border-white/50">
            <div className="sleek-card-layer bg-white" data-state={0}>
              <img
                src="img/Grids/05.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  objectPosition: "100% 50%",
                }}
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
                <p className="text-base 3xl:text-xl text-white leading-snug min-h-[4.2em]">
                  You go live, earn from every session, and track your impact
                  over time.
                </p>
              </div>
            </div>
            <div className="sleek-card-layer bg-zinc-900" data-state={1}>
              <img
                src="img/Grids/02.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-80"
                style={{
                  objectPosition: "100% 50%",
                }}
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
                <p className="text-base 3xl:text-xl text-white leading-snug min-h-[4.2em]">
                  Unplug when you are ready and continue on your way.
                </p>
              </div>
            </div>
            <div className="sleek-card-layer bg-[#051810]" data-state={2}>
              <img
                src="img/Grids/03.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-80"
                style={{
                  objectPosition: "100% 50%",
                }}
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
                <p className="text-base 3xl:text-xl text-white leading-snug min-h-[4.2em]">
                  Use insights and reports to improve uptime and grow your
                  network.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 z-20 w-full relative shrink-0 min-h-[120px]">
          <div
            className="btn-group absolute top-0 flex justify-center gap-2 opacity-100 w-full"
            data-state={0}
          >
            <SmartLink
              href="/charging-partners"
              className="btn-glow hosting w-62 xl:w-86"
            >
              <div className="btn-content xl:text-xl xl:py-4">
                Start Hosting for 74,999 PKR <i className="bi bi-arrow-right" />
              </div>
            </SmartLink>
          </div>
          <div
            className="btn-group absolute top-0 flex justify-center gap-2 opacity-0 pointer-events-none w-full"
            data-state={1}
          >
            <SmartLink
              href="https://zvolta.com/mobile"
              className="btn-glow charging w-62 xl:w-86"
            >
              <div className="btn-content xl:text-xl xl:py-4">
                See Stations Nearby <i className="bi bi-arrow-right" />
              </div>
            </SmartLink>
          </div>
          <div
            className="btn-group absolute top-0 flex justify-center gap-2 opacity-0 pointer-events-none w-full"
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
  );
}

import { SmartLink } from "../../IndexPage.shared.jsx";
export function BentoSection() {
  return (
    <section id="bento-section" className="hidden">
      <div className="max-w-[1200px] 3xl:max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-auto md:grid-rows-[minmax(350px,auto)_minmax(350px,auto)] 3xl:grid-rows-[minmax(500px,auto)_minmax(500px,auto)] gap-6 3xl:gap-10">
          <div className="md:col-span-2 bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-8 md:p-12 3xl:p-16 relative overflow-hidden group hover:border-emerald-500/50 hover:shadow-[0_0_40px_-10px_rgba(22, 163, 74,0.3)] transition-all duration-500 text-white">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <h2 className="text-3xl md:text-5xl 3xl:text-7xl font-display font-bold mb-6 tracking-tight text-white group-hover:text-emerald-50 transition-colors duration-300">
                  A cleaner way forward
                </h2>
                <ul className="space-y-4 text-zinc-400 text-sm md:text-lg 3xl:text-2xl max-w-2xl 3xl:max-w-4xl">
                  <li className="flex items-start gap-3 group-hover:translate-x-2 transition-transform duration-300 delay-0">
                    <i className="bi bi-check-circle-fill text-emerald-500 mt-1 shrink-0" />
                    <span>
                      Every charge on our network replaces fossil fuel use.
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
                      Every operator using our software helps expand electric
                      access.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 group-hover:translate-x-2 transition-transform duration-300 delay-150">
                    <i className="bi bi-check-circle-fill text-emerald-500 mt-1 shrink-0" />
                    <span>
                      Together, we make the shift to electric easier for
                      everyone.
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
                  className="w-full h-full overflow-visible drop-shadow-[0_0_10px_rgba(22, 163, 74,0.3)]"
                >
                  <path
                    d="M0,40 C20,40 25,20 40,30 C55,40 60,10 80,15 C90,18 95,5 100,0"
                    fill="none"
                    stroke="#16a34a"
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
                      <stop offset="0%" stopColor="#16a34a" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx={100}
                    cy={0}
                    r={4}
                    fill="#16a34a"
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
              <div className="w-full bg-lime-500 rounded-t-sm h-[80%] group-hover:h-[95%] group-hover:shadow-[0_0_20px_rgba(22,163,74,0.6)] transition-all duration-500 ease-out delay-75" />
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
  );
}

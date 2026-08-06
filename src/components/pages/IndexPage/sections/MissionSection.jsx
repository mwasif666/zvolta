export function MissionSection() {
  return (
    <section id="mission" className="py-24 px-4 md:px-8 bg-white relative">
      <div className="max-w-[1400px] 3xl:max-w-[2000px] mx-auto">
        <h2 className="reveal-text w-full max-w-full text-2xl sm:text-3xl md:text-5xl 2xl:text-7xl font-display font-bold leading-[1.1] text-black mb-16 text-left">
          We create practical tools for a world moving electric, building
          simple, reliable systems that make EV adoption easier for everyone.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 3xl:gap-8">
          <div
            className="stat-container group relative p-8 flex flex-col h-[320px] 3xl:h-[450px] rounded-[2rem] bg-zinc-900 border-none shadow-xl overflow-hidden"
            style={{
              backgroundImage: "none",
            }}
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
                  data-target={750}
                >
                  0
                </span>
                <span className="stat-unit text-emerald-500 text-3xl 3xl:text-5xl font-bold ml-1">
                  kW
                </span>
              </div>
            </div>
            <div className="relative z-10 stat-label text-center text-zinc-300 text-xs 3xl:text-base tracking-[0.2em] font-bold group-hover:text-white uppercase mb-2">
              Energy Delivered
            </div>
          </div>
          <div
            className="stat-container group relative p-8 flex flex-col h-[320px] 3xl:h-[450px] rounded-[2rem] bg-zinc-900 border-none shadow-xl overflow-hidden"
            style={{
              backgroundImage: "none",
            }}
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
                  data-target={820}
                >
                  0
                </span>
                <span className="stat-unit text-emerald-500 text-3xl 3xl:text-5xl font-bold ml-1">
                  KG
                </span>
              </div>
            </div>
            <div className="relative z-10 stat-label text-center text-zinc-300 text-xs 3xl:text-base tracking-[0.2em] font-bold group-hover:text-white uppercase mb-2">
              CO2 Reduced
            </div>
          </div>
          <div
            className="stat-container group relative p-8 flex flex-col h-[320px] 3xl:h-[450px] rounded-[2rem] bg-zinc-900 border-none shadow-xl overflow-hidden"
            style={{
              backgroundImage: "none",
            }}
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
            style={{
              backgroundImage: "none",
            }}
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
                  data-target={14}
                >
                  0
                </span>
                <span className="stat-unit text-emerald-500 text-3xl 3xl:text-5xl font-bold ml-1">
                  Sites
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
  );
}

import "../../MobilePage.module.css";
export function AppScreenshotsSection() {
  return (
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
            src="/img/mobile1.png"
            className="w-[260px] md:w-[340px] rounded-2xl shadow-2xl border border-white/10"
            alt="App Screenshot 1"
          />
        </div>
        <div className="snap-center shrink-0">
          <img
            src="/img/mobile2.png"
            className="w-[260px] md:w-[340px] rounded-2xl shadow-2xl border border-white/10"
            alt="App Screenshot 2"
          />
        </div>
        <div className="snap-center shrink-0">
          <img
            src="/img/mobile3.png"
            className="w-[260px] md:w-[340px] rounded-2xl shadow-2xl border border-white/10"
            alt="App Screenshot 3"
          />
        </div>
        <div className="snap-center shrink-0">
          <img
            src="/img/mobile4.png"
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
  );
}

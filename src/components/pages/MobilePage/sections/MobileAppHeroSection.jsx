import "../../MobilePage.module.css";
export function MobileAppHeroSection() {
  return (
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
  );
}

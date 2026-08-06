export function HorizontalScrollSection() {
  return (
    <section
      id="horizontal-scroll-section"
      className="py-24 bg-zinc-900/30 border-y border-white/5 relative backdrop-blur-sm"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
            Simple Path to <span className="text-emerald-500">Income</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Three easy steps to start earning from the green transport
            revolution.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-black/50 border border-white/10 rounded-[2.5rem] p-8 md:p-12 hover:border-emerald-500/50 transition-all duration-500 group hover:-translate-y-2">
            <div className="w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center mb-8 group-hover:bg-emerald-500 group-hover:text-black transition-colors text-emerald-500 shadow-lg">
              <i className="bi bi-geo-alt-fill text-3xl" />
            </div>
            <span className="block text-4xl font-display font-bold text-zinc-800 mb-4 group-hover:text-emerald-900/50 transition-colors">
              01
            </span>
            <h3 className="text-2xl font-bold text-white mb-3">
              Share Your Space
            </h3>
            <p className="text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
              Tell us about your available shop, home, or parking location.
              We'll assess its suitability for our network.
            </p>
          </div>
          <div className="bg-black/50 border border-white/10 rounded-[2.5rem] p-8 md:p-12 hover:border-emerald-500/50 transition-all duration-500 group hover:-translate-y-2">
            <div className="w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center mb-8 group-hover:bg-emerald-500 group-hover:text-black transition-colors text-emerald-500 shadow-lg">
              <i className="bi bi-lightning-charge-fill text-3xl" />
            </div>
            <span className="block text-4xl font-display font-bold text-zinc-800 mb-4 group-hover:text-emerald-900/50 transition-colors">
              02
            </span>
            <h3 className="text-2xl font-bold text-white mb-3">We Install</h3>
            <p className="text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
              Our expert team handles the complete installation of a
              state-of-the-art smart charger at zero cost to you.
            </p>
          </div>
          <div className="bg-black/50 border border-white/10 rounded-[2.5rem] p-8 md:p-12 hover:border-emerald-500/50 transition-all duration-500 group hover:-translate-y-2">
            <div className="w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center mb-8 group-hover:bg-emerald-500 group-hover:text-black transition-colors text-emerald-500 shadow-lg">
              <i className="bi bi-wallet-fill text-3xl" />
            </div>
            <span className="block text-4xl font-display font-bold text-zinc-800 mb-4 group-hover:text-emerald-900/50 transition-colors">
              03
            </span>
            <h3 className="text-2xl font-bold text-white mb-3">You Earn</h3>
            <p className="text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
              Receive passive income automatically every time a driver uses your
              charger. We handle all payments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

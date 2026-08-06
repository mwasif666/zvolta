export function PartnerBenefitsSection() {
  return (
    <section className="py-24 bg-zinc-900/30 text-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Why Partner with ZVolta?
            </h2>
            <p className="text-zinc-400 text-lg mb-12">
              We're not just providing a charger; we're offering a partnership
              for a cleaner, more profitable future.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex gap-4 group">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                  <i className="bi bi-check-lg text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">
                    Zero Upfront Cost
                  </h4>
                  <p className="text-sm text-zinc-500">
                    Free installation of smart chargers.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                  <i className="bi bi-check-lg text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Hassle-Free</h4>
                  <p className="text-sm text-zinc-500">
                    We manage payments &amp; maintenance.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                  <i className="bi bi-check-lg text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Boost Image</h4>
                  <p className="text-sm text-zinc-500">
                    Show commitment to sustainability.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                  <i className="bi bi-check-lg text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">More Traffic</h4>
                  <p className="text-sm text-zinc-500">
                    Attract EV drivers to your spot.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group perspective-1000">
            <div className="absolute inset-0 bg-emerald-500/20 blur-[80px] rounded-full pointer-events-none animate-pulse-slow" />
            <img
              src="/img/zvolta-maidan.jpg"
              alt="ZVolta Location"
              className="relative z-10 rounded-[2.5rem] border border-white/10 shadow-2xl rotate-2 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

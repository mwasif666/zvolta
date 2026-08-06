export function LocationTypesSection() {
  return (
    <section className="py-24 relative bg-[#050505]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">
            Perfect For Any Location
          </h2>
          <p className="text-zinc-400">
            Transform your property into a high-demand amenity.
          </p>
        </div>
        <div className="space-y-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[16/9] group border border-white/5 shadow-2xl">
              <img
                src="/img/small-chai-business.jpg"
                alt="Retail"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div>
              <div className="inline-block px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono mb-4">
                Retail &amp; Hospitality
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">
                Small Businesses
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Attract eco-conscious customers to your retail store, cafe, or
                workshop. An EV charger is a modern amenity that keeps them
                on-site longer.
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2 relative rounded-[2.5rem] overflow-hidden aspect-[16/9] group border border-white/5 shadow-2xl">
              <img
                src="/img/home-owners.jpg"
                alt="Home"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="lg:order-1">
              <div className="inline-block px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono mb-4">
                Residential
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">Homeowners</h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Have a driveway or a dedicated parking spot? Monetize your
                unused space by offering a convenient charging solution to
                neighbors.
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[16/9] group border border-white/5 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1617886322207-6f504e7472c5?q=80&w=1974&auto=format&fit=crop"
                alt="Parking"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div>
              <div className="inline-block px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono mb-4">
                Commercial
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">
                Parking Owners
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Turn your empty parking lots or individual spaces into a
                profitable, future-proof asset. Ideal for plazas and office
                parks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { SmartLink } from '../../components/SmartLink';

export default function ChargingPartnersPage() {
  return (
    <>
      <div>
        <SmartLink
          id="dynamic-logo"
          href="/"
          className="fixed top-6 left-6 z-[900] w-12 h-12 rounded-full bg-zinc-900/90 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-xl transition-all duration-500 hover:scale-105"
          style={{ opacity: 1, pointerEvents: 'auto' }}
        >
          <img src="img/symbol logo.png" alt="ZVolta" className="h-6 w-auto" />
        </SmartLink>
        <button
          id="dynamic-sidebar-btn"
          className="fixed top-6 right-6 z-[900] w-12 h-12 rounded-full bg-[#006b45] backdrop-blur-md border border-emerald-500/30 text-white flex items-center justify-center shadow-xl transition-all duration-500 hover:bg-[#008f5d] hover:scale-105 group"
          style={{ opacity: 1, pointerEvents: 'auto' }}
        >
          <i className="bi bi-list text-2xl group-hover:rotate-180 transition-transform duration-500" />
        </button>
        <div
          id="floating-dock-container"
          className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-[900] -translate-y-[200%] transition-transform duration-700 cubic-bezier(0.34, 1.56, 0.64, 1)"
        >
          <div className="flex items-center gap-1 p-1.5 bg-[#111]/90 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl ring-1 ring-white/5 px-2">
            <SmartLink
              href="/"
              className="dock-pill-link group w-10 h-10 flex items-center justify-center rounded-full text-white/60 hover:text-white transition-colors relative z-10"
            >
              <i className="bi bi-house-door-fill text-lg" />
            </SmartLink>
            <div className="w-px h-5 bg-white/10 mx-1" />
            <SmartLink
              href="/charging-partners"
              className="dock-pill-link px-4 py-2 rounded-full text-xs font-bold text-white bg-white/10 relative z-10"
            >
              Hosting
            </SmartLink>
            <SmartLink
              href="/charge"
              className="dock-pill-link px-4 py-2 rounded-full text-xs font-bold text-white/60 hover:text-white transition-colors relative z-10"
            >
              Charging
            </SmartLink>
            <SmartLink
              href="/software"
              className="dock-pill-link px-4 py-2 rounded-full text-xs font-bold text-white/60 hover:text-white transition-colors relative z-10"
            >
              Software
            </SmartLink>
          </div>
        </div>
        <div
          id="mobile-menu-overlay"
          className="fixed inset-0 z-[10000] invisible opacity-0 pointer-events-none"
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
                <div className="absolute top-8 right-8 w-32 h-32 opacity-20 bg-[radial-gradient(#10b981_2px,transparent_2px)] [background-size:8px_8px] rounded-full pointer-events-none" />
                <nav className="flex flex-col gap-4 mt-4 relative z-10">
                  <SmartLink
                    href="/"
                    className="mobile-menu-link text-5xl md:text-6xl font-display font-bold text-white hover:text-emerald-500 transition-colors flex items-center justify-between group/link"
                  >
                    Home
                  </SmartLink>
                  <div className="h-px bg-white/10 w-full" />
                  <SmartLink
                    href="/charging-partners"
                    className="mobile-menu-link text-5xl md:text-6xl font-display font-bold text-white hover:text-emerald-500 transition-colors flex items-center justify-between group/link"
                  >
                    Hosting
                  </SmartLink>
                  <div className="h-px bg-white/10 w-full" />
                  <SmartLink
                    href="/charge"
                    className="mobile-menu-link text-5xl md:text-6xl font-display font-bold text-white hover:text-emerald-500 transition-colors flex items-center justify-between group/link"
                  >
                    Charging
                  </SmartLink>
                  <div className="h-px bg-white/10 w-full" />
                  <SmartLink
                    href="/software"
                    className="mobile-menu-link text-5xl md:text-6xl font-display font-bold text-white hover:text-emerald-500 transition-colors flex items-center justify-between group/link"
                  >
                    Software
                  </SmartLink>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div
          id="custom-loader"
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center pointer-events-none"
        >
          <div
            id="loader-blind-top"
            className="absolute top-0 left-0 w-full h-[51%] bg-z-black z-0 pointer-events-auto border-b border-white/5"
          />
          <div
            id="loader-blind-bottom"
            className="absolute bottom-0 left-0 w-full h-[51%] bg-z-black z-0 pointer-events-auto border-t border-white/5"
          />
          <div
            id="loader-content"
            className="relative z-10 flex flex-col items-center pointer-events-auto will-change-transform"
          >
            <div
              id="loader-glow"
              className="absolute inset-0 bg-z-green/10 blur-[100px] rounded-full scale-0 animate-pulse-slow"
            />
            <div className="relative mb-10 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
              <img
                src="img/symbol logo.png"
                id="loader-logo"
                className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(22,163,74,0.3)] will-change-transform"
                alt="ZVolta Loading"
              />
            </div>
            <div
              id="loader-bar-container"
              className="w-64 h-[2px] bg-zinc-800 rounded-full overflow-hidden relative mb-4"
            >
              <div
                id="loader-bar"
                className="absolute top-0 left-0 h-full w-0 bg-white shadow-[0_0_15px_2px_rgba(255,255,255,0.8)]"
              />
            </div>
            <div
              id="loader-status-container"
              className="h-6 overflow-hidden flex flex-col items-center"
            >
              <div
                id="loader-status"
                className="font-mono text-[10px] tracking-[0.4em] text-gray-500 uppercase"
              >
                INITIALIZING...
              </div>
            </div>
          </div>
        </div>
        <main className="w-full">
          <section
            id="partner-hero"
            className="relative w-full min-h-screen bg-[#050505] flex flex-col items-center justify-center text-center group overflow-hidden p-0 m-0 pb-20 pt-32"
          >
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none animate-pulse-slow" />
            <div
              className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-900/10 blur-[100px] rounded-full pointer-events-none animate-pulse-slow"
              style={{ animationDelay: '2s' }}
            />
            <div className="max-w-[1400px] w-full mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
              <div className="text-center lg:text-left order-2 lg:order-1 fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-6 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
                  <span className="w-2 h-2 rounded-full bg-emerald-500 absolute" />
                  Partnership Program
                </div>
                <h1 className="text-5xl md:text-7xl 3xl:text-8xl font-display font-medium tracking-tight text-white leading-[1.1] mb-6 drop-shadow-lg">
                  Powering <br />
                  <span className="text-emerald-500">Pakistan</span>
                  Together.
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light mb-10">
                  Transform your location into a revenue-generating EV hub. We
                  install, manage, and maintain the chargers—you simply provide
                  the space.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <SmartLink
                    href="#apply"
                    className="w-full sm:w-auto px-10 py-4 bg-white text-black rounded-full font-bold hover:bg-emerald-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg text-lg"
                  >
                    Host a Charger <i className="bi bi-arrow-right" />
                  </SmartLink>
                  <SmartLink
                    href="#horizontal-scroll-section"
                    className="w-full sm:w-auto px-10 py-4 bg-zinc-900/40 backdrop-blur-md border border-white/10 text-white rounded-full font-bold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                  >
                    How It Works
                  </SmartLink>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px] lg:h-[700px] w-full flex items-center justify-center order-1 lg:order-2 perspective-1000 group">
                <div className="absolute inset-0 border border-white/5 rounded-full scale-90 animate-spin-slow" />
                <div
                  className="absolute inset-0 border border-emerald-500/10 rounded-full scale-75 animate-spin-slow"
                  style={{ animationDirection: 'reverse' }}
                />
                <div className="relative z-10 w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1 animate-float-slow">
                  <img
                    src="img/ev-charging-station-blue.png"
                    alt="ZVolta Charger"
                    className="w-auto h-full max-h-[600px] object-contain drop-shadow-[0_20px_50px_rgba(16,185,129,0.15)]"
                    data-critical="true"
                  />
                </div>
              </div>
            </div>
          </section>
          <section
            id="horizontal-scroll-section"
            className="py-24 bg-zinc-900/30 border-y border-white/5 relative backdrop-blur-sm"
          >
            <div className="max-w-[1400px] mx-auto px-6">
              <div className="text-center mb-20">
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
                  Simple Path to{' '}
                  <span className="text-emerald-500">Income</span>
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
                    Tell us about your available shop, home, or parking
                    location. We'll assess its suitability for our network.
                  </p>
                </div>
                <div className="bg-black/50 border border-white/10 rounded-[2.5rem] p-8 md:p-12 hover:border-emerald-500/50 transition-all duration-500 group hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center mb-8 group-hover:bg-emerald-500 group-hover:text-black transition-colors text-emerald-500 shadow-lg">
                    <i className="bi bi-lightning-charge-fill text-3xl" />
                  </div>
                  <span className="block text-4xl font-display font-bold text-zinc-800 mb-4 group-hover:text-emerald-900/50 transition-colors">
                    02
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    We Install
                  </h3>
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
                  <h3 className="text-2xl font-bold text-white mb-3">
                    You Earn
                  </h3>
                  <p className="text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
                    Receive passive income automatically every time a driver
                    uses your charger. We handle all payments.
                  </p>
                </div>
              </div>
            </div>
          </section>
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
                      src="img/small-chai-business.jpg"
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
                      Attract eco-conscious customers to your retail store,
                      cafe, or workshop. An EV charger is a modern amenity that
                      keeps them on-site longer.
                    </p>
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="lg:order-2 relative rounded-[2.5rem] overflow-hidden aspect-[16/9] group border border-white/5 shadow-2xl">
                    <img
                      src="img/home-owners.jpg"
                      alt="Home"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div className="lg:order-1">
                    <div className="inline-block px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono mb-4">
                      Residential
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-white">
                      Homeowners
                    </h3>
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
                      profitable, future-proof asset. Ideal for plazas and
                      office parks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-24 bg-zinc-900/30 text-white">
            <div className="max-w-[1400px] mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                    Why Partner with ZVolta?
                  </h2>
                  <p className="text-zinc-400 text-lg mb-12">
                    We're not just providing a charger; we're offering a
                    partnership for a cleaner, more profitable future.
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
                        <h4 className="font-bold text-white mb-1">
                          Hassle-Free
                        </h4>
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
                        <h4 className="font-bold text-white mb-1">
                          Boost Image
                        </h4>
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
                        <h4 className="font-bold text-white mb-1">
                          More Traffic
                        </h4>
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
                    src="img/zvolta-maidan.jpg"
                    alt="ZVolta Location"
                    className="relative z-10 rounded-[2.5rem] border border-white/10 shadow-2xl rotate-2 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="py-24 text-white">
            <div className="max-w-3xl mx-auto px-6">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-16">
                Questions?
              </h2>
              <div className="space-y-4">
                <div
                  className="bg-zinc-900 rounded-[1.5rem] border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/10"
                  data-inline-onclick="toggleAccordion(this)"
                >
                  <button className="w-full flex justify-between items-center p-6 text-left font-bold text-lg focus:outline-none">
                    <span>Who takes care of maintenance?</span>
                    <i className="bi bi-plus-lg text-emerald-500 text-2xl transition-transform duration-300" />
                  </button>
                  <div className="grid grid-rows-[0fr] accordion-content transition-all duration-300">
                    <div className="overflow-hidden">
                      <div className="p-6 pt-0 text-zinc-400 leading-relaxed">
                        We manage all maintenance and servicing tasks completely
                        free of charge for the host.
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-zinc-900 rounded-[1.5rem] border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/10"
                  data-inline-onclick="toggleAccordion(this)"
                >
                  <button className="w-full flex justify-between items-center p-6 text-left font-bold text-lg focus:outline-none">
                    <span>How much can I earn?</span>
                    <i className="bi bi-plus-lg text-emerald-500 text-2xl transition-transform duration-300" />
                  </button>
                  <div className="grid grid-rows-[0fr] accordion-content transition-all duration-300">
                    <div className="overflow-hidden">
                      <div className="p-6 pt-0 text-zinc-400 leading-relaxed">
                        Earnings vary based on location and usage, but we offer
                        transparent profit-sharing models or fixed rent options.
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-zinc-900 rounded-[1.5rem] border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/10"
                  data-inline-onclick="toggleAccordion(this)"
                >
                  <button className="w-full flex justify-between items-center p-6 text-left font-bold text-lg focus:outline-none">
                    <span>Is it safe and legal?</span>
                    <i className="bi bi-plus-lg text-emerald-500 text-2xl transition-transform duration-300" />
                  </button>
                  <div className="grid grid-rows-[0fr] accordion-content transition-all duration-300">
                    <div className="overflow-hidden">
                      <div className="p-6 pt-0 text-zinc-400 leading-relaxed">
                        Yes, we install government-approved, safety-tested
                        chargers and handle all necessary permits.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            id="apply"
            className="relative py-24 bg-zinc-900 border-t border-white/10 overflow-hidden text-white"
          >
            <div className="absolute inset-0 bg-[url('img/twisty-gradient-2-comp.jpg')] bg-cover bg-center opacity-10" />
            <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-16 relative z-10">
              <div className="flex flex-col justify-center">
                <img
                  src="img/LOGO-WHITE.png"
                  alt="ZVolta"
                  className="h-10 w-auto object-contain object-left mb-10 opacity-80"
                />
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                  Become a <br />{' '}
                  <span className="text-emerald-500">Partner</span>.
                </h2>
                <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
                  Join ZVolta’s nationwide network. Fill out the form, and our
                  team will get back to you to assess your site.
                </p>
                <ul className="space-y-4 text-zinc-300">
                  <li className="flex gap-3">
                    <i className="bi bi-check-circle-fill text-emerald-500" />{' '}
                    <span>Daily passive income</span>
                  </li>
                  <li className="flex gap-3">
                    <i className="bi bi-check-circle-fill text-emerald-500" />{' '}
                    <span>Full technical support</span>
                  </li>
                  <li className="flex gap-3">
                    <i className="bi bi-check-circle-fill text-emerald-500" />{' '}
                    <span>Part of Pakistan's future</span>
                  </li>
                </ul>
              </div>
              <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />
                <form
                  id="partner-form"
                  action="https://formspree.io/f/movwbyqn"
                  method="POST"
                  className="space-y-6 relative z-10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-4">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        required
                        className="w-full h-14 bg-zinc-900 border border-zinc-800 rounded-full px-6 text-white placeholder:text-zinc-700 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div className="group space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-4">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        required
                        className="w-full h-14 bg-zinc-900 border border-zinc-800 rounded-full px-6 text-white placeholder:text-zinc-700 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-4">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full h-14 bg-zinc-900 border border-zinc-800 rounded-full px-6 text-white placeholder:text-zinc-700 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div className="group space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-4">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        className="w-full h-14 bg-zinc-900 border border-zinc-800 rounded-full px-6 text-white placeholder:text-zinc-700 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all"
                        placeholder="+92 300..."
                      />
                    </div>
                  </div>
                  <div className="group space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-4">
                      Company/Property Name
                    </label>
                    <input
                      type="text"
                      name="company-name"
                      required
                      className="w-full h-14 bg-zinc-900 border border-zinc-800 rounded-full px-6 text-white placeholder:text-zinc-700 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all"
                      placeholder="e.g. City Mall"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-4">
                        Property Type
                      </label>
                      <div className="relative">
                        <select
                          name="property-type"
                          required
                          className="w-full h-14 bg-zinc-900 border border-zinc-800 rounded-full px-6 text-white appearance-none focus:border-emerald-500 focus:outline-none cursor-pointer"
                        >
                          <option value disabled selected>
                            Select...
                          </option>
                          <option>Home</option>
                          <option>Shop / Business</option>
                          <option>Parking Lot</option>
                          <option>Petrol Pump</option>
                          <option>Other</option>
                        </select>
                        <i className="bi bi-chevron-down absolute right-6 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
                      </div>
                    </div>
                    <div className="group space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-4">
                        Location
                      </label>
                      <div className="relative">
                        <select
                          name="location"
                          required
                          className="w-full h-14 bg-zinc-900 border border-zinc-800 rounded-full px-6 text-white appearance-none focus:border-emerald-500 focus:outline-none cursor-pointer"
                        >
                          <option value disabled selected>
                            Select...
                          </option>
                          <option>Karachi</option>
                          <option>Lahore</option>
                          <option>Islamabad</option>
                          <option>Other</option>
                        </select>
                        <i className="bi bi-chevron-down absolute right-6 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-4">
                      Do you have Solar Panels?
                    </label>
                    <div
                      id="solar-option-group"
                      className="grid grid-cols-2 gap-4"
                    >
                      <label className="cursor-pointer">
                        <input
                          type="radio"
                          name="solar-option"
                          defaultValue="Yes"
                          className="peer sr-only"
                        />
                        <div className="h-12 flex items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 peer-checked:bg-emerald-500 peer-checked:text-black peer-checked:border-emerald-500 peer-checked:font-bold transition-all">
                          Yes
                        </div>
                      </label>
                      <label className="cursor-pointer">
                        <input
                          type="radio"
                          name="solar-option"
                          defaultValue="No"
                          className="peer sr-only"
                        />
                        <div className="h-12 flex items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 peer-checked:bg-zinc-700 peer-checked:text-white transition-all">
                          No
                        </div>
                      </label>
                    </div>
                  </div>
                  <div
                    id="solar-capacity-container"
                    className="overflow-hidden max-h-0 opacity-0 transition-all duration-500 ease-in-out"
                  >
                    <div className="group space-y-2 pt-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-4">
                        Solar Capacity (kW)
                      </label>
                      <input
                        type="number"
                        name="solar-capacity"
                        id="solar-capacity"
                        className="w-full h-14 bg-zinc-900 border border-zinc-800 rounded-full px-6 text-white placeholder:text-zinc-700 focus:border-emerald-500 focus:outline-none"
                        placeholder="e.g., 10"
                      />
                    </div>
                  </div>
                  <div className="group space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-4">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-3xl px-6 py-4 text-white placeholder:text-zinc-700 focus:border-emerald-500 focus:outline-none resize-none"
                      placeholder="Additional details..."
                      defaultValue={''}
                    />
                  </div>
                  <button
                    type="submit"
                    id="submit-button"
                    className="w-full h-16 bg-white text-black rounded-full font-bold text-xl hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-lg mt-4 flex items-center justify-center gap-3 group"
                  >
                    Submit Application{' '}
                    <i className="bi bi-arrow-right group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
                <div
                  id="success-message"
                  className="hidden absolute inset-0 z-20 bg-black/95 flex flex-col items-center justify-center text-center p-8"
                >
                  <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mb-6 border border-emerald-500/20">
                    <i className="bi bi-check-lg text-4xl" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Request Sent!
                  </h3>
                  <p className="text-zinc-400">
                    We'll review your site and get back to you shortly.
                  </p>
                </div>
                <div
                  id="error-message"
                  className="hidden absolute inset-0 z-20 bg-black/95 flex flex-col items-center justify-center text-center p-8"
                >
                  <div className="w-20 h-20 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mb-6 border border-red-500/20">
                    <i className="bi bi-exclamation-lg text-4xl" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Something went wrong.
                  </h3>
                  <button
                    data-inline-onclick="document.getElementById('error-message').classList.add('hidden')"
                    className="mt-4 px-6 py-2 bg-white text-black rounded-full font-bold"
                  >
                    Try Again
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="bg-black text-white pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 mb-20 text-center">
            <h2 className="text-3xl md:text-5xl 3xl:text-7xl font-display font-bold tracking-tight mb-4 md:whitespace-nowrap">
              Let's move electric forward together.
            </h2>
          </div>
          <div className="border-t border-white/10 bg-black">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="group p-8 md:p-12 hover:bg-white/5 transition-colors duration-300 flex flex-col h-full min-h-[300px]">
                <div className="mb-auto">
                  <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">
                    Host A Charger
                  </h3>
                  <ul className="space-y-4 text-zinc-400">
                    <li>
                      <SmartLink
                        href="/charging-partners"
                        className="hover:text-emerald-400 transition-colors block py-1"
                      >
                        Charging Partners
                      </SmartLink>
                    </li>
                    <li>
                      <SmartLink
                        href="/about-us"
                        className="hover:text-emerald-400 transition-colors block py-1"
                      >
                        About Us
                      </SmartLink>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <SmartLink
                    href="/charging-partners"
                    className="flex items-center justify-between text-white font-bold group-hover:text-emerald-400 transition-colors"
                  >
                    Start hosting{' '}
                    <i className="bi bi-arrow-right -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </SmartLink>
                </div>
              </div>
              <div className="group p-8 md:p-12 hover:bg-white/5 transition-colors duration-300 flex flex-col h-full min-h-[300px]">
                <div className="mb-auto">
                  <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">
                    Charge Your EV
                  </h3>
                  <ul className="space-y-4 text-zinc-400">
                    <li>
                      <SmartLink
                        href="https://zvolta.com/mobile"
                        className="hover:text-emerald-400 transition-colors block py-1"
                      >
                        Using the app
                      </SmartLink>
                    </li>
                    <li>
                      <SmartLink
                        href="https://wa.me/+923104446529"
                        target="_blank"
                        className="hover:text-emerald-400 transition-colors block py-1"
                      >
                        Charging support
                      </SmartLink>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <SmartLink
                    href="/charge"
                    className="flex items-center justify-between text-white font-bold group-hover:text-emerald-400 transition-colors"
                  >
                    Find A Station{' '}
                    <i className="bi bi-arrow-right -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </SmartLink>
                </div>
              </div>
              <div className="group p-8 md:p-12 hover:bg-white/5 transition-colors duration-300 flex flex-col h-full min-h-[300px]">
                <div className="mb-auto">
                  <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">
                    Software For Operators
                  </h3>
                  <ul className="space-y-4 text-zinc-400">
                    <li className="py-1 opacity-60 cursor-default">
                      Platform overview{' '}
                      <span className="text-xs bg-zinc-800 px-2 py-0.5 rounded ml-2 text-zinc-400">
                        Coming Soon
                      </span>
                    </li>
                    <li>
                      <SmartLink
                        href="/contact-us"
                        className="hover:text-emerald-400 transition-colors block py-1"
                      >
                        Contact Support
                      </SmartLink>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <SmartLink
                    href="/contact-us"
                    className="flex items-center justify-between text-white font-bold group-hover:text-emerald-400 transition-colors"
                  >
                    Book a demo{' '}
                    <i className="bi bi-arrow-right -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </SmartLink>
                </div>
              </div>
            </div>
          </div>
          <div className="border-y border-white/10 bg-black">
            <div className="max-w-[1400px] mx-auto py-10 px-6 md:px-12">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-4 text-zinc-400 text-base font-medium">
                <div className="flex flex-col gap-2">
                  <SmartLink
                    href="/coming-soon"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </SmartLink>
                  <SmartLink
                    href="/coming-soon"
                    className="hover:text-white transition-colors"
                  >
                    Careers
                  </SmartLink>
                </div>
                <div className="flex flex-col gap-2">
                  <SmartLink
                    href="/blogs"
                    className="hover:text-white transition-colors"
                  >
                    Stories
                  </SmartLink>
                  <SmartLink
                    href="/coming-soon"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </SmartLink>
                </div>
                <div className="flex flex-col gap-2">
                  <SmartLink
                    href="/coming-soon"
                    className="hover:text-white transition-colors"
                  >
                    Sustainability
                  </SmartLink>
                  <SmartLink
                    href="/policy#privacy-policy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </SmartLink>
                </div>
                <div className="flex flex-col gap-2">
                  <SmartLink
                    href="/coming-soon"
                    className="hover:text-white transition-colors"
                  >
                    Team
                  </SmartLink>
                  <SmartLink
                    href="/charging-partners"
                    className="hover:text-white transition-colors"
                  >
                    Partners
                  </SmartLink>
                </div>
                <div className="flex flex-col gap-2">
                  <SmartLink
                    href="/policy#terms-and-conditions"
                    className="hover:text-white transition-colors"
                  >
                    Terms of Service
                  </SmartLink>
                  <SmartLink
                    href="/coming-soon"
                    className="hover:text-white transition-colors"
                  >
                    Submit a Report
                  </SmartLink>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[1400px] mx-auto px-6 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img
                src="img/full_logowhite.png"
                alt="ZVolta"
                className="h-8 md:h-10 opacity-90"
              />
              <div className="hidden md:block w-px h-6 bg-zinc-800" />
              <div className="text-zinc-500 text-sm flex gap-6">
                <span>© 2025 ZVolta Inc.</span>
              </div>
            </div>
            <div className="flex gap-6">
              <SmartLink
                href="https://www.facebook.com/share/1FUNJfnPd5/?mibextid=wwXIfr"
                target="_blank"
                className="text-zinc-500 hover:text-white transition-colors"
              >
                <i className="bi bi-facebook text-xl" />
              </SmartLink>
              <SmartLink
                href="https://www.instagram.com/zvolta.pk"
                target="_blank"
                className="text-zinc-500 hover:text-white transition-colors"
              >
                <i className="bi bi-instagram text-xl" />
              </SmartLink>
              <SmartLink
                href="https://wa.me/+923104446529"
                target="_blank"
                className="text-zinc-500 hover:text-white transition-colors"
              >
                <i className="bi bi-whatsapp text-xl" />
              </SmartLink>
              <SmartLink
                href="mailto:support@zvolta.com"
                className="text-zinc-500 hover:text-white transition-colors"
              >
                <i className="bi bi-envelope text-xl" />
              </SmartLink>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

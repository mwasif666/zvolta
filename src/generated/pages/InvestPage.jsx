import { SmartLink } from '../../components/SmartLink';

export default function InvestPage() {
  return (
    <>
      <div>
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
                className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(22,163,74,0.3)]"
                alt="ZVolta"
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
        <SmartLink
          id="dynamic-logo"
          href="/"
          className="fixed top-6 left-6 z-[900] w-12 h-12 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200 flex items-center justify-center shadow-xl transition-all duration-500 hover:scale-105"
        >
          <img src="img/symbol logo.png" alt="ZVolta" className="h-6 w-auto" />
        </SmartLink>
        <button
          id="dynamic-sidebar-btn"
          className="fixed top-6 right-6 z-[900] w-12 h-12 rounded-full bg-[#006b45] backdrop-blur-md border border-emerald-500/30 text-white flex items-center justify-center shadow-xl transition-all duration-500 hover:bg-[#008f5d] hover:scale-105 group"
        >
          <i className="bi bi-list text-2xl group-hover:rotate-180 transition-transform duration-500" />
        </button>
        <div
          id="floating-dock-container"
          className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-[900] -translate-y-[200%] transition-transform duration-700 cubic-bezier(0.34, 1.56, 0.64, 1)"
        >
          <div className="flex items-center gap-1 p-1.5 bg-[#111]/90 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl ring-1 ring-black/5 px-2">
            <SmartLink
              href="/"
              className="dock-pill-link group w-10 h-10 flex items-center justify-center rounded-full text-white/60 hover:text-white transition-colors relative z-10"
            >
              <i className="bi bi-house-door-fill text-lg" />
            </SmartLink>
            <div className="w-px h-5 bg-white/10 mx-1" />
            <SmartLink
              href="/about-us"
              className="dock-pill-link px-4 py-2 rounded-full text-xs font-bold text-white/60 hover:text-white transition-colors relative z-10"
            >
              About
            </SmartLink>
            <SmartLink
              href="/charging-partners"
              className="dock-pill-link px-4 py-2 rounded-full text-xs font-bold text-white/60 hover:text-white transition-colors relative z-10"
            >
              Charge
            </SmartLink>
            <SmartLink
              href="/vehicles"
              className="dock-pill-link px-4 py-2 rounded-full text-xs font-bold text-white/60 hover:text-white transition-colors relative z-10"
            >
              Rent
            </SmartLink>
            <SmartLink
              href="/contact-us"
              className="dock-pill-link px-4 py-2 rounded-full text-xs font-bold text-white/60 hover:text-white transition-colors relative z-10"
            >
              Contact
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
                    <i className="bi bi-arrow-right text-3xl opacity-0 -translate-x-8 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-emerald-500" />
                  </SmartLink>
                  <div className="h-px bg-white/10 w-full" />
                  <SmartLink
                    href="/invest"
                    className="mobile-menu-link text-5xl md:text-6xl font-display font-bold text-white hover:text-emerald-500 transition-colors flex items-center justify-between group/link"
                  >
                    Invest
                    <i className="bi bi-arrow-right text-3xl opacity-0 -translate-x-8 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-emerald-500" />
                  </SmartLink>
                  <div className="h-px bg-white/10 w-full" />
                  <SmartLink
                    href="/charging-partners"
                    className="mobile-menu-link text-5xl md:text-6xl font-display font-bold text-white hover:text-emerald-500 transition-colors flex items-center justify-between group/link"
                  >
                    Charge
                    <i className="bi bi-arrow-right text-3xl opacity-0 -translate-x-8 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-emerald-500" />
                  </SmartLink>
                </nav>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 h-full content-start">
                <SmartLink
                  href="/about-us"
                  className="menu-card bg-black rounded-[2.5rem] p-8 relative group overflow-hidden flex flex-col justify-end h-[280px] lg:h-auto opacity-0 translate-y-[50px]"
                >
                  <div className="absolute inset-0 bg-zinc-900 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.2,0,0,1)]" />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white group-hover:translate-x-1 transition-transform">
                      About Us
                    </h3>
                    <p className="text-zinc-500 mt-2 opacity-100 group-hover:text-zinc-300 transition-colors">
                      Our mission and story.
                    </p>
                  </div>
                </SmartLink>
                <SmartLink
                  href="/contact-us"
                  className="menu-card bg-black rounded-[2.5rem] p-8 relative group overflow-hidden flex flex-col justify-end h-[280px] lg:h-auto opacity-0 translate-y-[50px]"
                >
                  <div className="absolute inset-0 bg-zinc-900 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.2,0,0,1)]" />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white group-hover:translate-x-1 transition-transform">
                      Contact
                    </h3>
                    <p className="text-zinc-500 mt-2 opacity-100 group-hover:text-zinc-300 transition-colors">
                      Get in touch with us.
                    </p>
                  </div>
                </SmartLink>
              </div>
            </div>
          </div>
        </div>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main className="w-full">
              <section
                id="hero-section"
                className="relative w-full min-h-[90vh] flex items-center bg-white overflow-hidden"
              >
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-emerald-100/50 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 w-full h-full flex flex-col md:flex-row items-center gap-12 lg:gap-20 pt-32 pb-20 relative z-10">
                  <div className="md:w-1/2 flex flex-col items-start text-left">
                    <div className="inline-block mb-6 px-5 py-2 rounded-full border border-emerald-600/20 bg-emerald-50 text-emerald-700 text-xs md:text-sm font-bold tracking-widest uppercase shadow-sm">
                      New Asset Class
                    </div>
                    <h1 className="text-5xl md:text-7xl 3xl:text-8xl font-display font-bold tracking-tight text-zinc-900 leading-[1.1] mb-6">
                      Invest in an <br /> EV Rickshaw.
                    </h1>
                    <h2 className="text-3xl md:text-5xl 3xl:text-6xl font-display font-medium text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 mb-8">
                      Earn Monthly Income.
                    </h2>
                    <p className="text-lg md:text-xl text-zinc-500 max-w-lg leading-relaxed font-light mb-10">
                      A new asset class for smart investors. We manage the
                      vehicle, you enjoy the passive returns. It's that simple.
                    </p>
                    <SmartLink
                      href="#invest-form-section"
                      className="group relative inline-flex items-center gap-3 px-10 py-4 bg-zinc-900 text-white rounded-full font-bold text-lg transition-all duration-300 hover:bg-emerald-600 hover:scale-[1.02] shadow-xl shadow-zinc-900/20 hover:shadow-emerald-600/30 overflow-hidden"
                    >
                      <span className="relative z-10">Become an Investor</span>
                      <i className="bi bi-arrow-right relative z-10 group-hover:translate-x-1 transition-transform" />
                    </SmartLink>
                  </div>
                  <div className="md:w-1/2 relative w-full h-full flex items-center justify-center">
                    <div className="relative w-full aspect-[4/3] rounded-[3rem] overflow-hidden border border-zinc-200 shadow-2xl shadow-zinc-200/50 group">
                      <img
                        src="img/zvolta-1.jpg"
                        alt="Modern EV Rickshaw"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        data-inline-onerror="this.onerror=null;this.src='https://fastly.restofworld.org/uploads/2025/02/2025-P0124-Mehboob-41-scaled.jpg?width=1200&dpr=2';"
                      />
                      <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[3rem] pointer-events-none" />
                    </div>
                  </div>
                </div>
              </section>
              <section className="py-24 px-6 bg-white relative border-t border-gray-100">
                <div className="max-w-7xl mx-auto text-center mb-20">
                  <h2 className="text-4xl md:text-6xl font-display font-bold text-zinc-900 mb-6">
                    A Simple Path to <br />{' '}
                    <span className="text-emerald-600">Passive Income</span>
                  </h2>
                  <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
                    In three easy steps, you can start earning from the green
                    transport revolution.
                  </p>
                </div>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="group bg-white border border-zinc-100 rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-zinc-100 hover:shadow-2xl hover:shadow-zinc-200/50 hover:border-emerald-100 hover:-translate-y-2 transition-all duration-300 cursor-default relative overflow-hidden">
                    <div className="w-20 h-20 rounded-2xl bg-zinc-900 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <i className="bi bi-check-circle-fill text-3xl text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-900 mb-4">
                      Choose Your Rickshaw
                    </h3>
                    <p className="text-zinc-500 leading-relaxed">
                      Select a 3 or 6-seater passenger model, or a versatile
                      loader EV rickshaw to match your investment goals.
                    </p>
                  </div>
                  <div className="group bg-white border border-zinc-100 rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-zinc-100 hover:shadow-2xl hover:shadow-zinc-200/50 hover:border-emerald-100 hover:-translate-y-2 transition-all duration-300 cursor-default relative overflow-hidden">
                    <div className="w-20 h-20 rounded-2xl bg-zinc-900 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <i className="bi bi-currency-exchange text-3xl text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-900 mb-4">
                      We Rent It Out
                    </h3>
                    <p className="text-zinc-500 leading-relaxed">
                      Our team finds, verifies, and contracts professional
                      drivers, ensuring your asset is in good hands.
                    </p>
                  </div>
                  <div className="group bg-white border border-zinc-100 rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-zinc-100 hover:shadow-2xl hover:shadow-zinc-200/50 hover:border-emerald-100 hover:-translate-y-2 transition-all duration-300 cursor-default relative overflow-hidden">
                    <div className="w-20 h-20 rounded-2xl bg-zinc-900 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <i className="bi bi-graph-up-arrow text-3xl text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-900 mb-4">
                      Fixed Monthly Return
                    </h3>
                    <p className="text-zinc-500 leading-relaxed">
                      Receive a consistent, fixed monthly return directly to
                      your account. Predictable income, zero effort.
                    </p>
                  </div>
                </div>
              </section>
              <section className="py-24 bg-black text-white relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
                  <img
                    src="img/symbol-doublearrow-green.png"
                    alt="Arrow"
                    className="w-48 h-48 animate-pulse-slow"
                  />
                </div>
                <div className="max-w-7xl mx-auto px-6">
                  <div className="bg-zinc-900/50 border border-zinc-800 rounded-[3rem] overflow-hidden flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 h-[400px] md:h-[600px] relative">
                      <img
                        src="https://propakistani.pk/wp-content/uploads/2024/01/Sazgar-rickshaw.jpg.avif"
                        alt="Managed Fleet"
                        className="absolute inset-0 w-full h-full object-cover"
                        data-inline-onerror="this.onerror=null;this.src='https://placehold.co/600x400/18181b/333?text=EV+Fleet';"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/90 via-transparent to-transparent md:hidden" />
                    </div>
                    <div className="md:w-1/2 p-10 md:p-16">
                      <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                        No Driving. No Maintenance. <br />{' '}
                        <span className="text-emerald-500">
                          We Manage Everything.
                        </span>
                      </h2>
                      <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                        Your investment is completely passive. We handle the A-Z
                        of vehicle management: from routine maintenance and
                        insurance to driver support and payment collections. You
                        just sit back and watch your investment grow.
                      </p>
                      <SmartLink
                        href="/vehicles"
                        className="inline-flex items-center gap-2 text-white font-bold border-b border-emerald-500 pb-1 hover:text-emerald-400 transition-colors"
                      >
                        View Our Vehicles <i className="bi bi-arrow-right" />
                      </SmartLink>
                    </div>
                  </div>
                </div>
              </section>
              <section className="py-24 px-6 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12 lg:gap-24">
                  <div className="md:w-1/3 sticky top-32">
                    <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 shadow-md flex items-center justify-center mb-8">
                      <i className="bi bi-question-lg text-3xl text-emerald-600" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 mb-6">
                      What would you like to know about{' '}
                      <span className="text-emerald-600">ZVolta?</span>
                    </h2>
                    <SmartLink
                      href="/contact-us"
                      className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-gray-300 bg-white hover:bg-gray-50 transition-colors text-zinc-600 hover:text-zinc-900 font-medium"
                    >
                      <i className="bi bi-chat-dots" /> Talk to us
                    </SmartLink>
                  </div>
                  <div className="md:w-2/3 w-full space-y-4">
                    <div className="accordion-item bg-white border border-gray-200 rounded-[2rem] overflow-hidden group shadow-sm">
                      <button className="accordion-header w-full flex justify-between items-center text-left p-8 focus:outline-none">
                        <span className="text-xl font-bold text-zinc-900 group-hover:text-emerald-600 transition-colors">
                          Who maintains the rickshaws?
                        </span>
                        <i className="bi bi-chevron-down text-zinc-400 transition-transform duration-300 group-[.active]:rotate-180" />
                      </button>
                      <div className="accordion-content h-0 overflow-hidden transition-all duration-300 group-[.active]:h-auto">
                        <p className="px-8 pb-8 text-zinc-600 leading-relaxed">
                          We handle all maintenance and service. Our dedicated
                          fleet team ensures every vehicle is in top condition
                          to maximize uptime and returns.
                        </p>
                      </div>
                    </div>
                    <div className="accordion-item bg-white border border-gray-200 rounded-[2rem] overflow-hidden group shadow-sm">
                      <button className="accordion-header w-full flex justify-between items-center text-left p-8 focus:outline-none">
                        <span className="text-xl font-bold text-zinc-900 group-hover:text-emerald-600 transition-colors">
                          How much can I earn?
                        </span>
                        <i className="bi bi-chevron-down text-zinc-400 transition-transform duration-300 group-[.active]:rotate-180" />
                      </button>
                      <div className="accordion-content h-0 overflow-hidden transition-all duration-300 group-[.active]:h-auto">
                        <p className="px-8 pb-8 text-zinc-600 leading-relaxed">
                          Returns depend on the model you choose (3-seater vs
                          6-seater), but we generally offer a fixed monthly
                          income model to provide stability for our investors.
                        </p>
                      </div>
                    </div>
                    <div className="accordion-item bg-white border border-gray-200 rounded-[2rem] overflow-hidden group shadow-sm">
                      <button className="accordion-header w-full flex justify-between items-center text-left p-8 focus:outline-none">
                        <span className="text-xl font-bold text-zinc-900 group-hover:text-emerald-600 transition-colors">
                          Is hosting a charger safe?
                        </span>
                        <i className="bi bi-chevron-down text-zinc-400 transition-transform duration-300 group-[.active]:rotate-180" />
                      </button>
                      <div className="accordion-content h-0 overflow-hidden transition-all duration-300 group-[.active]:h-auto">
                        <p className="px-8 pb-8 text-zinc-600 leading-relaxed">
                          Yes, we install government-approved chargers and
                          handle all permits. Safety and compliance are our top
                          priorities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section
                id="invest-form-section"
                className="py-24 px-6 bg-white text-zinc-900 relative border-t border-gray-100 overflow-hidden"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
                  <div className="lg:w-1/2 pt-10">
                    <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4 block">
                      INVEST WITH ZVOLTA
                    </span>
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-zinc-900 mb-8 leading-tight">
                      Invest in the Future of <br /> Mobility.
                    </h2>
                    <p className="text-xl text-zinc-500 mb-12 leading-relaxed">
                      ZVolta is pioneering the shift to sustainable transport in
                      Pakistan. Gain exclusive access to a high-growth
                      opportunity.
                    </p>
                    <div className="space-y-8">
                      <div className="flex gap-5">
                        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                          <i className="bi bi-graph-up-arrow text-xl" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-zinc-900">
                            High-Growth Market
                          </h3>
                          <p className="text-zinc-500 mt-1">
                            Tap into the rapidly expanding EV market in one of
                            the world's most populous countries.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-5">
                        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                          <i className="bi bi-shield-check text-xl" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-zinc-900">
                            Proven Business Model
                          </h3>
                          <p className="text-zinc-500 mt-1">
                            Our integrated ecosystem of vehicles, charging, and
                            driver networks is built for scalability.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-5">
                        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                          <i className="bi bi-tree text-xl" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-zinc-900">
                            Sustainable Impact
                          </h3>
                          <p className="text-zinc-500 mt-1">
                            Drive meaningful change by investing in clean energy
                            and reducing carbon emissions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="bg-zinc-900 p-8 md:p-12 rounded-[3rem] border border-zinc-800 shadow-2xl shadow-emerald-900/10 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />
                      <div id="form-wrapper" className="relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          Register Your Interest
                        </h3>
                        <p className="text-zinc-500 mb-8">
                          Our team will be in touch with detailed information.
                        </p>
                        <form
                          id="invest-form"
                          action="https://formspree.io/f/xblyerpq"
                          method="POST"
                          className="space-y-6"
                        >
                          <div className="group space-y-2">
                            <label
                              htmlFor="full-name"
                              className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-4"
                            >
                              Full Name*
                            </label>
                            <input
                              type="text"
                              name="full-name"
                              id="full-name"
                              required
                              autoComplete="name"
                              className="w-full h-14 bg-black border border-zinc-800 rounded-2xl px-6 text-white placeholder:text-zinc-700 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all"
                            />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="group space-y-2">
                              <label
                                htmlFor="email"
                                className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-4"
                              >
                                Email*
                              </label>
                              <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                autoComplete="email"
                                className="w-full h-14 bg-black border border-zinc-800 rounded-2xl px-6 text-white placeholder:text-zinc-700 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all"
                              />
                            </div>
                            <div className="group space-y-2">
                              <label
                                htmlFor="phone"
                                className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-4"
                              >
                                Phone*
                              </label>
                              <input
                                type="tel"
                                name="phone"
                                id="phone"
                                required
                                autoComplete="tel"
                                className="w-full h-14 bg-black border border-zinc-800 rounded-2xl px-6 text-white placeholder:text-zinc-700 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all"
                              />
                            </div>
                          </div>
                          <div className="group space-y-3">
                            <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-4">
                              I am investing as*
                            </label>
                            <div className="flex gap-4">
                              <label className="flex items-center gap-2 cursor-pointer bg-black border border-zinc-800 px-6 py-3 rounded-xl hover:border-emerald-500 transition-colors">
                                <input
                                  type="radio"
                                  id="individual"
                                  name="investor-type"
                                  defaultValue="Individual"
                                  className="text-emerald-500 focus:ring-emerald-500"
                                  required
                                />
                                <span className="text-white text-sm font-bold">
                                  Individual
                                </span>
                              </label>
                              <label className="flex items-center gap-2 cursor-pointer bg-black border border-zinc-800 px-6 py-3 rounded-xl hover:border-emerald-500 transition-colors">
                                <input
                                  type="radio"
                                  id="company"
                                  name="investor-type"
                                  defaultValue="Company"
                                  className="text-emerald-500 focus:ring-emerald-500"
                                />
                                <span className="text-white text-sm font-bold">
                                  Company
                                </span>
                              </label>
                            </div>
                          </div>
                          <div
                            id="company-name-field"
                            className="hidden transition-all duration-300 group space-y-2"
                          >
                            <label
                              htmlFor="company-name"
                              className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-4"
                            >
                              Company Name*
                            </label>
                            <input
                              type="text"
                              name="company-name"
                              id="company-name"
                              autoComplete="organization"
                              className="w-full h-14 bg-black border border-zinc-800 rounded-2xl px-6 text-white placeholder:text-zinc-700 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all"
                            />
                          </div>
                          <div className="pt-4">
                            <button
                              type="submit"
                              className="w-full h-14 bg-white text-black rounded-full font-bold text-lg hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-emerald-500/30"
                            >
                              Request Information
                            </button>
                          </div>
                        </form>
                      </div>
                      <div
                        id="success-message"
                        className="hidden absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-8 bg-zinc-900/95 backdrop-blur-md"
                      >
                        <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mb-6 animate-bounce">
                          <i className="bi bi-check-lg text-4xl" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          Inquiry Received!
                        </h3>
                        <p className="text-zinc-400">
                          Thank you for your interest. Our investment relations
                          team will be in touch shortly.
                        </p>
                      </div>
                      <div
                        id="error-message"
                        className="hidden absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-8 bg-zinc-900/95 backdrop-blur-md"
                      >
                        <div className="w-20 h-20 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mb-6">
                          <i className="bi bi-exclamation-lg text-4xl" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          Submission Failed
                        </h3>
                        <p className="text-zinc-400">
                          Sorry, there was an error sending your message. Please
                          try again later.
                        </p>
                        <button
                          data-inline-onclick="location.reload()"
                          className="mt-4 text-sm text-emerald-500 hover:underline"
                        >
                          Try Again
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <footer className="bg-black text-white pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 mb-20 text-center">
                  <h2 className="text-4xl md:text-6xl 3xl:text-8xl font-display font-bold tracking-tight mb-4">
                    Let's move electric <br /> forward together.
                  </h2>
                </div>
                <div className="border-y border-white/10 bg-black">
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
                              href="/invest"
                              className="hover:text-emerald-400 transition-colors block py-1"
                            >
                              For Investors
                            </SmartLink>
                          </li>
                          <li>
                            <SmartLink
                              href="/invest-form"
                              className="hover:text-emerald-400 transition-colors block py-1"
                            >
                              Site requirements
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
                          href="/invest-form"
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
                              href="/driver-network"
                              className="hover:text-emerald-400 transition-colors block py-1"
                            >
                              Drivers Network
                            </SmartLink>
                          </li>
                          <li>
                            <SmartLink
                              href="/driver-network"
                              className="hover:text-emerald-400 transition-colors block py-1"
                            >
                              Using the app
                            </SmartLink>
                          </li>
                          <li>
                            <SmartLink
                              href="/contact-us"
                              className="hover:text-emerald-400 transition-colors block py-1"
                            >
                              Charging support
                            </SmartLink>
                          </li>
                          <li>
                            <SmartLink
                              href="/policy#standard-service-policy"
                              className="hover:text-emerald-400 transition-colors block py-1"
                            >
                              Service Policy
                            </SmartLink>
                          </li>
                        </ul>
                      </div>
                      <div className="mt-8 pt-6 border-t border-white/10">
                        <SmartLink
                          href="/driver-network"
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
                          <li>
                            <SmartLink
                              href="/contact-us"
                              className="hover:text-emerald-400 transition-colors block py-1"
                            >
                              Platform overview
                            </SmartLink>
                          </li>
                          <li>
                            <SmartLink
                              href="/contact-us"
                              className="hover:text-emerald-400 transition-colors block py-1"
                            >
                              OCPP compatibility
                            </SmartLink>
                          </li>
                          <li>
                            <SmartLink
                              href="/contact-us"
                              className="hover:text-emerald-400 transition-colors block py-1"
                            >
                              Integrations
                            </SmartLink>
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
                      <SmartLink
                        href="/policy#privacy-policy"
                        className="hover:text-white transition-colors"
                      >
                        Privacy
                      </SmartLink>
                      <SmartLink
                        href="/policy#terms-and-conditions"
                        className="hover:text-white transition-colors"
                      >
                        Terms
                      </SmartLink>
                      <SmartLink
                        href="/policy#returns-policy"
                        className="hover:text-white transition-colors"
                      >
                        Returns
                      </SmartLink>
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
                      href="mailto:admin@zvolta.com"
                      className="text-zinc-500 hover:text-white transition-colors"
                    >
                      <i className="bi bi-envelope text-xl" />
                    </SmartLink>
                  </div>
                </div>
              </footer>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

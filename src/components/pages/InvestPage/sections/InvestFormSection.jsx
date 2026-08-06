export function InvestFormSection() {
  return (
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
            ZVolta is pioneering the shift to sustainable transport in Pakistan.
            Gain exclusive access to a high-growth opportunity.
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
                  Tap into the rapidly expanding EV market in one of the world's
                  most populous countries.
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
                  Our integrated ecosystem of vehicles, charging, and driver
                  networks is built for scalability.
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
                  Drive meaningful change by investing in clean energy and
                  reducing carbon emissions.
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
                Thank you for your interest. Our investment relations team will
                be in touch shortly.
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
                Sorry, there was an error sending your message. Please try again
                later.
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
  );
}

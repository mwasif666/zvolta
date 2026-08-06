export function ContactSection() {
  return (
    <section
      id="contact-section"
      className="py-24 bg-white text-zinc-900 relative border-t border-gray-100 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl 3xl:text-7xl font-display font-bold tracking-tight text-zinc-900 mb-6">
            Here to help you
            <br />
            take the next step
          </h2>
          <p className="text-zinc-500 text-lg md:text-xl font-light max-w-xl mx-auto">
            Reach out to us for hosting, charging, or software solutions.
          </p>
        </div>
        <div
          id="contact-form-shell"
          data-contact-form-shell="true"
          className="relative bg-zinc-900 p-8 md:p-14 rounded-[3rem] border border-zinc-800 shadow-2xl shadow-emerald-900/10 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />
          <form
            id="contact-form"
            action="https://formspree.io/f/mvgrykro"
            method="POST"
            className="relative z-10 space-y-8 transition-opacity duration-500"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group space-y-3">
                <label
                  htmlFor="name"
                  className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-5 group-focus-within:text-emerald-400 transition-colors"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Ahmad Ali"
                  className="w-full h-14 bg-black border border-zinc-800 rounded-full px-6 text-lg text-white placeholder:text-zinc-700 focus:border-emerald-500/50 focus:bg-zinc-950 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300"
                />
              </div>
              <div className="group space-y-3">
                <label
                  htmlFor="email"
                  className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-5 group-focus-within:text-emerald-400 transition-colors"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="ahmad@example.com"
                  className="w-full h-14 bg-black border border-zinc-800 rounded-full px-6 text-lg text-white placeholder:text-zinc-700 focus:border-emerald-500/50 focus:bg-zinc-950 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300"
                />
              </div>
              <div className="group space-y-3 md:col-span-2">
                <label
                  htmlFor="phone"
                  className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-5 group-focus-within:text-emerald-400 transition-colors"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  placeholder="+92 300 0000000"
                  className="w-full h-14 bg-black border border-zinc-800 rounded-full px-6 text-lg text-white placeholder:text-zinc-700 focus:border-emerald-500/50 focus:bg-zinc-950 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300"
                />
              </div>
            </div>
            <div className="group space-y-3 relative">
              <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-5 group-focus-within:text-emerald-400 transition-colors">
                How can we help?
              </label>
              <div id="custom-dropdown" className="relative w-full">
                <button
                  type="button"
                  id="dropdown-trigger"
                  className="w-full h-14 bg-black border border-zinc-800 rounded-full px-6 text-lg text-white flex items-center justify-between focus:border-emerald-500/50 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300"
                >
                  <span id="dropdown-selected-text" className="text-zinc-500">
                    Select an option
                  </span>
                  <i
                    className="bi bi-chevron-down text-emerald-500 transition-transform duration-300"
                    id="dropdown-arrow"
                  />
                </button>
                <ul
                  id="dropdown-menu"
                  className="absolute z-[100] w-full mt-2 bg-zinc-900 border border-zinc-800 rounded-[2rem] overflow-hidden shadow-2xl opacity-0 translate-y-[-10px] pointer-events-none transition-all duration-300"
                >
                  <li
                    className="dropdown-item px-6 py-4 hover:bg-emerald-500 hover:text-white cursor-pointer transition-colors text-white border-b border-white/5"
                    data-value="Hosting"
                  >
                    Hosting
                  </li>
                  <li
                    className="dropdown-item px-6 py-4 hover:bg-emerald-500 hover:text-white cursor-pointer transition-colors text-white border-b border-white/5"
                    data-value="Charging"
                  >
                    Charging
                  </li>
                  <li
                    className="dropdown-item px-6 py-4 hover:bg-emerald-500 hover:text-white cursor-pointer transition-colors text-white border-b border-white/5"
                    data-value="Software"
                  >
                    Software
                  </li>
                  <li
                    className="dropdown-item px-6 py-4 hover:bg-emerald-500 hover:text-white cursor-pointer transition-colors text-white border-b border-white/5"
                    data-value="General Query"
                  >
                    General Query
                  </li>
                  <li
                    className="dropdown-item px-6 py-4 hover:bg-emerald-500 hover:text-white cursor-pointer transition-colors text-white border-b border-white/5"
                    data-value="Career"
                  >
                    Career Opportunity
                  </li>
                  <li
                    className="dropdown-item px-6 py-4 hover:bg-emerald-500 hover:text-white cursor-pointer transition-colors text-white"
                    data-value="Support"
                  >
                    Customer Support
                  </li>
                </ul>
                <input
                  type="hidden"
                  name="subject"
                  id="dropdown-hidden-input"
                  required
                />
                <input
                  type="hidden"
                  name="How can we help"
                  id="dropdown-help-input"
                />
              </div>
            </div>
            <div className="group space-y-3">
              <label
                htmlFor="message"
                className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-5 group-focus-within:text-emerald-400 transition-colors"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                required
                placeholder="Tell us how we can help..."
                className="w-full bg-black border border-zinc-800 rounded-3xl px-6 py-6 text-lg text-white placeholder:text-zinc-700 focus:border-emerald-500/50 focus:bg-zinc-950 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300 resize-none"
                defaultValue={""}
              />
            </div>
            <div className="flex flex-col items-center pt-6">
              <button
                type="submit"
                id="contact-submit-btn"
                className="group relative px-12 py-5 bg-white text-black rounded-full font-bold text-lg transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_rgba(22, 163, 74,0.4)] w-full md:w-auto min-w-[240px] overflow-hidden"
              >
                <span
                  id="btn-text"
                  className="relative z-10 flex items-center gap-3 justify-center"
                >
                  Send Message{" "}
                  <i className="bi bi-arrow-right group-hover:translate-x-1 transition-transform" />
                </span>
                <div
                  id="btn-loader"
                  className="hidden absolute inset-0 z-20 flex items-center justify-center bg-zinc-900"
                >
                  <div className="w-6 h-6 border-2 border-white/30 border-t-emerald-500 rounded-full animate-spin" />
                </div>
              </button>
              <p
                id="form-error"
                className="hidden text-red-400 text-sm mt-4 font-medium flex items-center gap-2"
              >
                <i className="bi bi-exclamation-circle-fill" /> Oops! Submission
                failed. Please try again.
              </p>
            </div>
          </form>
          <div
            id="contact-success"
            className="hidden absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-8 opacity-0 transition-opacity duration-500 bg-zinc-900/95 backdrop-blur-md rounded-[3rem]"
          >
            <div className="w-24 h-24 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-emerald-500/10 border border-emerald-500/20 animate-[bounce_1s_ease-in-out_infinite]">
              <i className="bi bi-check-lg text-5xl" />
            </div>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
              Message Sent!
            </h3>
            <p className="text-zinc-400 max-w-md text-lg mb-10 leading-relaxed">
              Thanks for reaching out. We'll get back to you shortly.
            </p>
            <button
              id="reset-form-btn"
              className="px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-emerald-500 hover:text-white transition-all duration-300"
            >
              Send another message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

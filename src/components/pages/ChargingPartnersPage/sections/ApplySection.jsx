export function ApplySection() {
  return (
    <section
      id="apply"
      className="relative py-24 bg-zinc-900 border-t border-white/10 overflow-hidden text-white"
    >
      <div className="absolute inset-0 bg-[url('/img/twisty-gradient-2-comp.jpg')] bg-cover bg-center opacity-10" />
      <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-16 relative z-10">
        <div className="flex flex-col justify-center">
          <img
            src="/img/full_logowhite.png"
            alt="Zvolta"
            className="h-10 w-auto object-contain object-left mb-10 opacity-80"
          />
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Become a <br /> <span className="text-emerald-500">Partner</span>.
          </h2>
          <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
            Join the Zvolta nationwide network. Fill out the form, and our team
            will get back to you to assess your site.
          </p>
          <ul className="space-y-4 text-zinc-300">
            <li className="flex gap-3">
              <i className="bi bi-check-circle-fill text-emerald-500" />{" "}
              <span>Daily passive income</span>
            </li>
            <li className="flex gap-3">
              <i className="bi bi-check-circle-fill text-emerald-500" />{" "}
              <span>Full technical support</span>
            </li>
            <li className="flex gap-3">
              <i className="bi bi-check-circle-fill text-emerald-500" />{" "}
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
                  placeholder="Ali"
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
                  placeholder="Khan"
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
                  placeholder="+92 300 1234567"
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
                    defaultValue=""
                    className="w-full h-14 bg-zinc-900 border border-zinc-800 rounded-full px-6 text-white appearance-none focus:border-emerald-500 focus:outline-none cursor-pointer"
                  >
                    <option value="" disabled>
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
                    defaultValue=""
                    className="w-full h-14 bg-zinc-900 border border-zinc-800 rounded-full px-6 text-white appearance-none focus:border-emerald-500 focus:outline-none cursor-pointer"
                  >
                    <option value="" disabled>
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
              <div id="solar-option-group" className="grid grid-cols-2 gap-4">
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
                defaultValue={""}
              />
            </div>
            <button
              type="submit"
              id="submit-button"
              className="w-full h-16 bg-white text-black rounded-full font-bold text-xl hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-lg mt-4 flex items-center justify-center gap-3 group"
            >
              Submit Application{" "}
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
  );
}

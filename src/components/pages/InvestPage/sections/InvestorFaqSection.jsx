import { SmartLink } from "../../InvestPage.shared.jsx";
export function InvestorFaqSection() {
  return (
    <section className="py-24 px-6 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12 lg:gap-24">
        <div className="md:w-1/3 sticky top-32">
          <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 shadow-md flex items-center justify-center mb-8">
            <i className="bi bi-question-lg text-3xl text-emerald-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 mb-6">
            What would you like to know about{" "}
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
                We handle all maintenance and service. Our dedicated fleet team
                ensures every vehicle is in top condition to maximize uptime and
                returns.
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
                Returns depend on the model you choose (3-seater vs 6-seater),
                but we generally offer a fixed monthly income model to provide
                stability for our investors.
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
                Yes, we install government-approved chargers and handle all
                permits. Safety and compliance are our top priorities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

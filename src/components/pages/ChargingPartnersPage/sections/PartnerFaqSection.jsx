import { faqItems } from "../../ChargingPartnersPage.shared.jsx";
export function PartnerFaqSection({ openFaqIndex, setOpenFaqIndex }) {
  return (
    <section className="py-24 text-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-16">
          Questions?
        </h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={item.question}
                className="bg-zinc-900 rounded-[1.5rem] border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/10"
              >
                <button
                  type="button"
                  className="w-full flex justify-between items-center p-6 text-left font-bold text-lg focus:outline-none"
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                >
                  <span>{item.question}</span>
                  <i
                    className={`bi bi-plus-lg text-2xl transition-all duration-300 ${isOpen ? "rotate-45 text-white" : "text-emerald-500"}`}
                  />
                </button>
                <div
                  className={`grid accordion-content transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <div className="p-6 pt-0 text-zinc-400 leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

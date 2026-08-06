import { SmartLink } from "../../InvestPage.shared.jsx";
export function ManagedInvestmentSection() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
        <img
          src="/img/symbol-doublearrow-green.png"
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
              No Driving. No Maintenance. <br />{" "}
              <span className="text-emerald-500">We Manage Everything.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Your investment is completely passive. We handle the A-Z of
              vehicle management: from routine maintenance and insurance to
              driver support and payment collections. You just sit back and
              watch your investment grow.
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
  );
}

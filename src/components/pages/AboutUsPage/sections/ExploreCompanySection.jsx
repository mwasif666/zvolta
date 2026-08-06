import { SmartLink } from "../../AboutUsPage.shared.jsx";
export function ExploreCompanySection() {
  return (
    <section className="pb-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#07110d] via-[#0a1711] to-black p-8 shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">
                Next stop
              </span>
              <h2 className="mt-4 text-4xl font-medium leading-tight tracking-[-0.05em] sm:text-5xl">
                Meet the people and partner model behind the rollout.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
                If you want the fuller picture, the next useful pages are
                `Team`, `Partners`, and `Stories`. Together they explain how
                ZVolta thinks, who it builds with, and how the work looks in
                motion.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <SmartLink
                  href="/team"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-7 py-3.5 text-sm font-bold text-[#04120c] transition-transform duration-300 hover:-translate-y-1"
                >
                  Meet the team
                </SmartLink>
                <SmartLink
                  href="/partners"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:border-emerald-400/40 hover:bg-white/10"
                >
                  See partner model
                </SmartLink>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-[1.75rem] border border-white/10">
                <img
                  src="/img/Team/ZV%20-%20Nashit.png"
                  alt="Nashit Iqbal"
                  className="h-full min-h-[250px] w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-[1.75rem] border border-white/10">
                <img
                  src="/img/Team/ZV%20-%20Anusha.png"
                  alt="Anusha Shahid"
                  className="h-full min-h-[250px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

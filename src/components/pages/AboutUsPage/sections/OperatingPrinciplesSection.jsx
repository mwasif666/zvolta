import { stats } from "../../AboutUsPage.shared.jsx";
export function OperatingPrinciplesSection() {
  return (
    <section className="py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="rounded-[2.25rem] border border-white/10 bg-[#08120d] p-8">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
            Working principles
          </span>
          <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl">
            We expand carefully, operate visibly, and learn quickly.
          </h2>
          <ul className="mt-8 space-y-5 text-sm leading-7 text-white/72">
            <li className="border-l-2 border-emerald-400/40 pl-4">
              Sites should be easy to explain to a host and easy to use for a
              driver.
            </li>
            <li className="border-l-2 border-emerald-400/40 pl-4">
              Support feedback should improve the next product or operating
              decision.
            </li>
            <li className="border-l-2 border-emerald-400/40 pl-4">
              Growth should make the network stronger, not noisier.
            </li>
          </ul>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {stats.map((item) => (
            <div
              key={item.value}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6"
            >
              <p className="text-2xl font-medium tracking-[-0.04em] text-emerald-300">
                {item.value}
              </p>
              <p className="mt-3 text-sm leading-7 text-white/70">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

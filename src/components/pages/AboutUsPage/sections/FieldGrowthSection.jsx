export function FieldGrowthSection() {
  return (
    <section className="relative border-b border-white/10 py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-[1.75rem] border border-white/10">
            <img
              src="/img/clean-volta.jpg"
              alt="ZVolta electric mobility"
              className="h-[280px] w-full object-cover sm:h-[380px]"
            />
          </div>
          <div>
            <span className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
              Who we are
            </span>
            <h2 className="mt-5 text-3xl font-medium leading-tight tracking-[-0.05em] text-white sm:text-4xl">
              We grow the network by staying close to the field.
            </h2>
            <p className="mt-4 text-base leading-8 text-white/70">
              The ZVolta story has a strong image-led rhythm. Here we keep that
              spirit, but the story is fully ZVolta: access, uptime, clarity,
              and support working together so electric mobility feels more
              practical every month.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

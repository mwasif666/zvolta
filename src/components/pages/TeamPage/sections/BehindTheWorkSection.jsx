import { Section, SectionIntro, behindWork } from "../../TeamPage.shared.jsx";
export function BehindTheWorkSection() {
  return (
    <Section>
      <SectionIntro
        eyebrow="Behind the work"
        title="Behind the work."
        copy="Some days are code. Some days are site visits. Some days are charger testing in the heat. Most days are all three."
      />
      <div className="team-carousel mt-12 flex snap-x gap-6 overflow-x-auto pb-4">
        {behindWork.map((item, index) => (
          <article
            key={item.title}
            className="team-reveal group w-[260px] shrink-0 snap-start rounded-lg border border-[#1F1F1F] bg-[#111111] p-4 transition duration-300 hover:-translate-y-1 hover:border-[#00E5A8]/40 sm:w-[310px]"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-lg border border-[#1F1F1F] bg-[#0B0B0B]">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full flex-col justify-between p-5">
                  <span className="w-fit rounded-lg border border-[#1F1F1F] bg-[#111111] px-3 py-2 text-xs font-semibold text-[#00E5A8]">
                    Reel
                  </span>
                  <p className="text-5xl font-semibold text-white/12">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
              )}
            </div>
            <p className="mt-5 text-xl font-semibold text-white">
              {item.title}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}

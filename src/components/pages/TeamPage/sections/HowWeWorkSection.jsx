import { Section, SectionIntro, workSteps } from "../../TeamPage.shared.jsx";
export function HowWeWorkSection({ processLineRef }) {
  return (
    <Section>
      <SectionIntro
        eyebrow="How we work"
        title="How we work."
        copy="That is how we build chargers, software, and support people can trust."
      />
      <div className="team-reveal mt-12 rounded-lg border border-[#1F1F1F] bg-[#111111] p-6 md:p-8">
        <div className="relative grid gap-5 lg:grid-cols-4">
          <div
            ref={processLineRef}
            className="absolute left-0 top-8 hidden h-px w-full bg-[#00E5A8]/45 lg:block"
          />
          {workSteps.map((step, index) => (
            <div
              key={step}
              className="relative z-10 rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] p-5"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#00E5A8] text-sm font-semibold text-black">
                0{index + 1}
              </span>
              <p className="mt-8 text-lg font-semibold text-white">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

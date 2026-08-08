import { PrimaryButton } from "../../TeamPage.shared.jsx";
export function CareersCtaSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#16a34a]/8 blur-[120px]" />
      <div className="team-container relative">
        <div className="team-reveal mx-auto max-w-4xl text-center">
          <h2 className="text-[40px] font-semibold leading-[1.04] text-white md:text-[56px]">
            Come help us move electric forward.
          </h2>
          <div className="mt-9">
            <PrimaryButton>Join the team</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}

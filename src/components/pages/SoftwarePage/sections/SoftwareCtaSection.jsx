import {
  CONTACT_LINK,
  DEMO_LINK,
  PrimaryButton,
  SecondaryButton,
} from "../../SoftwarePage.shared.jsx";
export function SoftwareCtaSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#16a34a]/8 blur-[120px]" />
      <div className="software-container relative">
        <div className="software-reveal mx-auto max-w-4xl text-center">
          <h2 className="text-[40px] font-semibold leading-[1.04] text-white md:text-[56px]">
            Build your charging network without building the software from zero.
          </h2>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <PrimaryButton href={DEMO_LINK}>Book a demo</PrimaryButton>
            <SecondaryButton href={CONTACT_LINK}>Talk to sales</SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}

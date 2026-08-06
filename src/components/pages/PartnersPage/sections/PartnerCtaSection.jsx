import { PrimaryButton, SecondaryButton } from "../../PartnersPage.shared.jsx";
export function PartnerCtaSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00E5A8]/8 blur-[120px]" />
      <div className="partners-container relative">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-[40px] font-semibold leading-[1.04] text-white md:text-[56px]">
            Your space, network, or business could be part of what comes next.
          </h2>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <PrimaryButton>Become a partner</PrimaryButton>
            <SecondaryButton>Contact us</SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}

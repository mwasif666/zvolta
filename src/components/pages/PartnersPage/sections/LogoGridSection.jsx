import {
  PrimaryButton,
  Section,
  SectionIntro,
  partnerLogos,
} from "../../PartnersPage.shared.jsx";
export function LogoGridSection() {
  return (
    <Section>
      <SectionIntro
        eyebrow="Logo grid"
        title="Trusted by people building the electric future."
        copy="Hosts, businesses, operators, communities, and companies use Zvolta to support charging, software, and cleaner transport."
      />
      <div className="partners-reveal mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {partnerLogos.map((logo) => (
          <div
            key={logo.alt ?? logo.label}
            className="flex h-28 items-center justify-center rounded-lg border border-[#1F1F1F] bg-[#111111] px-5 grayscale transition duration-300 hover:scale-[1.02] hover:border-[#00E5A8]/35 hover:grayscale-0"
          >
            {logo.src ? (
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-10 max-w-full object-contain opacity-70"
              />
            ) : (
              <p className="text-center text-sm font-semibold text-[#A1A1A1]">
                {logo.label}
              </p>
            )}
          </div>
        ))}
      </div>
      <PrimaryButton className="mt-10">Talk to us</PrimaryButton>
    </Section>
  );
}

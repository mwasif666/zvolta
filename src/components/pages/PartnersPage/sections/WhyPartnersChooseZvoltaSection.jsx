import {
  PrimaryButton,
  Section,
  SectionIntro,
  benefits,
} from "../../PartnersPage.shared.jsx";
export function WhyPartnersChooseZvoltaSection() {
  return (
    <Section>
      <SectionIntro
        eyebrow="Why partners choose Zvolta"
        title="Why partners choose Zvolta."
        copy="EV charging partners in Pakistan work with Zvolta to host EV chargers, support cleaner energy, and make charging easier for people."
      />
      <div className="partners-reveal mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit) => (
          <article
            key={benefit.title}
            className="rounded-lg border border-[#1F1F1F] bg-[#111111] p-6"
          >
            <h3 className="text-xl font-semibold text-white">
              {benefit.title}
            </h3>
            <p className="mt-4 text-sm leading-6 text-[#A1A1A1]">
              {benefit.copy}
            </p>
          </article>
        ))}
      </div>
      <PrimaryButton className="mt-10">Get in touch</PrimaryButton>
    </Section>
  );
}

import {
  CONTACT_LINK,
  PageSection,
  PrimaryButton,
  SectionIntro,
  useCases,
} from "../../SoftwarePage.shared.jsx";
export function UseCasesSection() {
  return (
    <PageSection>
      <SectionIntro
        eyebrow="Use cases"
        title="Use it for different charging models."
      />
      <div className="software-stagger mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {useCases.map(([title, copy]) => (
          <article
            key={title}
            className="rounded-lg border border-[#1F1F1F] bg-[#111111] p-6"
          >
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-[#A1A1A1]">{copy}</p>
          </article>
        ))}
      </div>
      <PrimaryButton href={CONTACT_LINK} className="mt-10">
        Find your use case
      </PrimaryButton>
    </PageSection>
  );
}

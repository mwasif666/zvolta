import {
  CONTACT_LINK,
  Icon,
  PageSection,
  PrimaryButton,
  SectionIntro,
  audienceCards,
} from "../../SoftwarePage.shared.jsx";
export function WhoThisIsForSection() {
  return (
    <PageSection>
      <SectionIntro
        eyebrow="Who this is for"
        title="Built for teams launching or managing EV charging."
        copy="For companies that want to manage EV chargers without building their own software from scratch."
      />
      <div className="software-stagger mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {audienceCards.map((card) => (
          <article
            key={card.title}
            className="rounded-lg border border-[#1F1F1F] bg-[#111111] p-6 transition duration-300 hover:scale-[1.02] hover:border-[#16a34a]/45"
          >
            <div className="mb-10 grid h-10 w-10 place-items-center rounded-lg bg-[#0B0B0B] text-[#16a34a]">
              <Icon name="node" className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-semibold text-white">{card.title}</h3>
            <p className="mt-3 text-sm leading-6 text-[#A1A1A1]">{card.copy}</p>
          </article>
        ))}
      </div>
      <PrimaryButton href={CONTACT_LINK} className="mt-10">
        Book a consultation
      </PrimaryButton>
    </PageSection>
  );
}

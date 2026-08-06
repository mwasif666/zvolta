import {
  PARTNERS_LINK,
  SecondaryButton,
  Section,
  SectionIntro,
} from "../../TeamPage.shared.jsx";
export function BuiltWithPeopleWhoCareSection() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[0.82fr_1fr] lg:items-center">
        <div>
          <SectionIntro
            eyebrow="Built with people who care"
            title="Built with people who care."
            copy="The chargers, app, dashboard, installations, and support all come from the same place. A team trying to make electric power easier for real people in real places."
          />
          <SecondaryButton href={PARTNERS_LINK} className="mt-9">
            Work with us
          </SecondaryButton>
        </div>
        <div className="team-reveal grid gap-4 sm:grid-cols-2">
          {[
            "/img/Team/ZV%20-%20Anila.png",
            "/img/zvolta-maidan.jpg",
            "/img/Host/03.png",
            "/img/app-2.png",
          ].map((image, index) => (
            <div
              key={image}
              className={`overflow-hidden rounded-lg border border-[#1F1F1F] bg-[#111111] ${index % 2 === 1 ? "sm:translate-y-8" : ""}`}
            >
              <img src={image} alt="" className="h-64 w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

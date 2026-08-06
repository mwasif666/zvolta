import {
  MediaCard,
  Section,
  SectionIntro,
  teamMembers,
} from "../../TeamPage.shared.jsx";
export function MeetTheTeamSection() {
  return (
    <Section>
      <SectionIntro
        eyebrow="Meet the team"
        title="Meet the team."
        copy="The people behind the app, chargers, dashboard, installations, and support."
      />
      <div className="team-stagger mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {teamMembers.map((member, index) => (
          <MediaCard key={member.name} member={member} index={index} />
        ))}
      </div>
    </Section>
  );
}

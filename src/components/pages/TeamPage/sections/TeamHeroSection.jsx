import { PrimaryButton, teamMembers } from "../../TeamPage.shared.jsx";
export function TeamHeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-[#1F1F1F] pt-32 md:pt-40">
      <div className="pointer-events-none absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#00E5A8]/8 blur-[120px]" />
      <div className="team-container relative grid min-h-[calc(100vh-120px)] gap-14 pb-24 lg:grid-cols-[0.92fr_0.88fr] lg:items-center">
        <div className="team-hero-copy max-w-3xl">
          <p className="text-xs font-semibold uppercase text-[#00E5A8]">
            Zvolta team
          </p>
          <h1 className="mt-5 text-[42px] font-semibold leading-[1.04] text-white md:text-[62px]">
            The people moving Zvolta forward.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#A1A1A1] md:text-lg">
            A small team building chargers, software, and charging experiences
            that make electric power easier to use every day.
          </p>
          <div className="mt-9">
            <PrimaryButton>Join the team</PrimaryButton>
          </div>
          <p className="mt-6 max-w-xl text-sm leading-6 text-[#A1A1A1]">
            Meet the EV charging team Pakistan is seeing grow across chargers,
            app work, installations, and support. As an EV charging company
            Pakistan can see up close, our electric mobility team Pakistan
            includes EV charger engineers, an EV charging app team, and a clean
            energy team working in one place.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:rotate-1">
          {teamMembers.slice(0, 3).map((member, index) => (
            <div
              key={member.name}
              className={`team-hero-card rounded-lg border border-[#1F1F1F] bg-[#111111] p-3 ${index === 1 ? "sm:translate-y-8" : ""}`}
            >
              <div className="aspect-[4/5] overflow-hidden rounded-lg bg-[#0B0B0B]">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                ) : null}
              </div>
              <p className="mt-3 text-sm font-semibold text-white">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

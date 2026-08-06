import {
  PageSection,
  Reveal,
  SecondaryButton,
  SectionIntro,
  stories,
} from "../../HostPage.shared.jsx";
export function RealStoriesSection() {
  return (
    <PageSection>
      <SectionIntro
        eyebrow="Real stories"
        title="How hosts use charging to create site value."
        copy="Practical examples from workspaces, restaurants, and sustainability-led businesses."
      />
      <div className="host-stories mt-12 flex snap-x gap-6 overflow-x-auto pb-4">
        {stories.map((story, index) => (
          <Reveal key={story.title} delay={index * 0.05}>
            <article className="w-[320px] shrink-0 snap-start overflow-hidden rounded-lg border border-white/10 bg-zinc-900 sm:w-[390px]">
              <img
                src={story.image}
                alt=""
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase text-z-green">
                  {story.category}
                </p>
                <h3 className="mt-4 text-[24px] font-semibold leading-tight text-white">
                  {story.title}
                </h3>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <SecondaryButton href="/stories" className="mt-8">
        Explore stories
      </SecondaryButton>
    </PageSection>
  );
}

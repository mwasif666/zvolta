import {
  PageSection,
  SecondaryButton,
  SectionIntro,
  stories,
} from "../../SoftwarePage.shared.jsx";
export function RealStoriesSection() {
  return (
    <PageSection>
      <SectionIntro
        eyebrow="Real stories"
        title="Real stories from growing charging networks."
      />
      <div className="software-story-scroll mt-12 flex snap-x gap-6 overflow-x-auto pb-4">
        {stories.map((story, index) => (
          <article
            key={story}
            className="software-reveal w-[320px] shrink-0 snap-start rounded-lg border border-[#1F1F1F] bg-[#111111] p-6 sm:w-[390px]"
          >
            <p className="text-xs font-semibold uppercase text-[#16a34a]">
              Story 0{index + 1}
            </p>
            <h3 className="mt-5 text-[24px] font-semibold leading-tight text-white">
              {story}
            </h3>
          </article>
        ))}
      </div>
      <SecondaryButton href="/stories" className="mt-8">
        Explore stories
      </SecondaryButton>
    </PageSection>
  );
}

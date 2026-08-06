import {
  Icon,
  STORIES_LINK,
  SecondaryButton,
  Section,
  SectionIntro,
  SmartLink,
  stories,
} from "../../PartnersPage.shared.jsx";
export function PartnerStoriesSection() {
  return (
    <Section>
      <SectionIntro
        eyebrow="Partner stories"
        title="Real places. Real use. Real impact."
        copy="See how different partners use Zvolta to bring charging, software, and cleaner energy to their spaces."
      />
      <div className="partners-story-scroll mt-12 flex snap-x gap-6 overflow-x-auto pb-4">
        {stories.map((story) => (
          <article
            key={story.title}
            className="w-[320px] shrink-0 snap-start overflow-hidden rounded-lg border border-[#1F1F1F] bg-[#111111] sm:w-[390px]"
          >
            <img
              src={story.image}
              alt=""
              className="h-52 w-full object-cover"
            />
            <div className="p-6">
              <p className="text-xs font-semibold uppercase text-[#00E5A8]">
                {story.tag}
              </p>
              <h3 className="mt-4 text-[24px] font-semibold leading-tight text-white">
                {story.title}
              </h3>
              <SmartLink
                href={STORIES_LINK}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#00E5A8]"
              >
                Read story
                <Icon name="arrow" className="h-4 w-4" />
              </SmartLink>
            </div>
          </article>
        ))}
      </div>
      <SecondaryButton href={STORIES_LINK} className="mt-8">
        Explore all stories
      </SecondaryButton>
    </Section>
  );
}

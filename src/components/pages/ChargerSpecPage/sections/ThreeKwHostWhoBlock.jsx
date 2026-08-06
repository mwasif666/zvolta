import {
  AnimatePresence,
  Icon,
  IoClose,
  PrimaryButton,
  Reveal,
  RotatingText,
  ShutterExpand,
  SmartLink,
  chargerPartnerLogos,
  chargerStories,
  hostRotatingWords,
  hostWhoBenefits,
} from "../../ChargerSpecPage.shared.jsx";

export function ThreeKwHostWhoBlock({
  showHostingSections,
  onShowHostingSections,
  onHideHostingSections,
}) {
  return (
    <>
      <div className="host-who-section-wrap">
        <Reveal className="host-who-strip">
          <h3 className="host-who-strip-title">
            You set the
            <br />
            <RotatingText
              texts={hostRotatingWords}
              mainClassName="host-rotating-text"
              staggerFrom="last"
              initial={{
                y: "100%",
              }}
              animate={{
                y: 0,
              }}
              exit={{
                y: "-120%",
              }}
              staggerDuration={0.025}
              splitLevelClassName="host-rotating-text-split"
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 400,
              }}
              rotationInterval={2000}
              splitBy="characters"
              auto
              loop
            />
          </h3>
          <span className="host-who-divider" />
          {hostWhoBenefits.map((item) => (
            <div className="host-who-benefit" key={item.title}>
              <span className="host-who-benefit-icon">
                <Icon name={item.icon} className="h-6 w-6" />
              </span>
              <span>
                <h4>{item.title}</h4>
                <p>{item.copy}</p>
              </span>
            </div>
          ))}
          <div className="host-who-actions">
            <PrimaryButton href="/contact-us" className="host-who-primary">
              Get started
            </PrimaryButton>
            {!showHostingSections ? (
              <button
                type="button"
                className="host-expand-button"
                onClick={onShowHostingSections}
              >
                View host stories
                <Icon name="arrow" className="h-4 w-4" />
              </button>
            ) : null}
          </div>
        </Reveal>
      </div>

      <AnimatePresence initial={false}>
        {showHostingSections ? (
          <ShutterExpand key="hosting-sections">
            <section className="host-partners-section">
              <button
                type="button"
                className="host-collapse-button"
                aria-label="Collapse host stories"
                onClick={onHideHostingSections}
              >
                <IoClose className="h-6 w-6" aria-hidden="true" />
              </button>
              <span className="host-partners-bolt" aria-hidden="true" />
              <span className="host-partners-bolt-soft" aria-hidden="true" />
              <div className="host-stories-container">
                <Reveal>
                  <p className="host-partners-eyebrow">Already hosting</p>
                  <h2 className="host-partners-title">
                    Businesses use Zvolta chargers to earn and support
                    sustainability<span>.</span>
                  </h2>
                  <p className="host-partners-copy">
                    Partner sites get app visibility, cleaner customer service,
                    and a practical ESG action.
                  </p>
                </Reveal>
                <Reveal className="host-partner-logo-grid" delay={0.08}>
                  {chargerPartnerLogos.map((logo) => (
                    <div className="host-partner-logo-card" key={logo.alt}>
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className={logo.invert ? "is-inverted" : ""}
                      />
                    </div>
                  ))}
                </Reveal>
                <Reveal className="host-partners-action">
                  <SmartLink
                    href="/host"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/10 bg-[#111111] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-[1.02] hover:border-[#16a34a]/50"
                  >
                    Explore hosting
                    <Icon name="arrow" className="h-4 w-4" />
                  </SmartLink>
                </Reveal>
              </div>
            </section>

            <section className="host-stories-section">
              <div className="host-stories-container">
                <p className="mb-2 text-xs font-semibold uppercase text-[#16a34a]">
                  Real stories
                </p>
                <h2 className="text-[32px] font-semibold leading-tight text-white md:text-[36px]">
                  How hosts use charging to create site value.
                </h2>
                <div className="host-stories mt-10 flex snap-x gap-6 overflow-x-auto pb-4">
                  {chargerStories.map((story, index) => (
                    <Reveal key={story.title} delay={index * 0.05}>
                      <article className="w-[300px] shrink-0 snap-start overflow-hidden rounded-lg border border-white/10 bg-zinc-900 sm:w-[370px]">
                        <img
                          src={story.image}
                          alt=""
                          className="h-52 w-full object-cover"
                        />
                        <div className="p-6">
                          <p className="text-xs font-semibold uppercase text-[#16a34a]">
                            {story.category}
                          </p>
                          <h3 className="mt-3 text-[22px] font-semibold leading-tight text-white">
                            {story.title}
                          </h3>
                        </div>
                      </article>
                    </Reveal>
                  ))}
                </div>
                <SmartLink
                  href="/host"
                  className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/10 bg-[#111111] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-[1.02] hover:border-[#16a34a]/50"
                >
                  Explore stories
                  <Icon name="arrow" className="h-4 w-4" />
                </SmartLink>
              </div>
            </section>
          </ShutterExpand>
        ) : null}
      </AnimatePresence>
    </>
  );
}

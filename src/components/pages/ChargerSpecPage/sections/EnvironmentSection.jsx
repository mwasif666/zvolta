import {
  AnimatePresence,
  Icon,
  Reveal,
  Section,
  ShutterExpand,
  SmartLink,
  chargerStories,
  environmentTabs,
  getChargerAudienceCards,
  useState,
} from "../../ChargerSpecPage.shared.jsx";

export function EnvironmentSection({ spec }) {
  const [activeTabId, setActiveTabId] = useState(environmentTabs[0].id);
  const [openIndex, setOpenIndex] = useState(0);
  const [activeExpandPanel, setActiveExpandPanel] = useState(null);
  const activeTab =
    environmentTabs.find((tab) => tab.id === activeTabId) ?? environmentTabs[0];
  const audienceCards = getChargerAudienceCards(spec);
  const showAudienceCards = activeExpandPanel === "audience";
  const showUseCases = activeExpandPanel === "use-cases";
  return (
    <Section className="charger-environments-section">
      <div className="charger-environments-intro">
        <p className="charger-eyebrow">Built for every environment</p>
        <h2>One charger. Multiple environments.</h2>
        <p>
          Whether you are charging at home, in a shared parking area, or in a
          public-facing space, the {spec.power} charger stays simple, safe, and
          ready to grow with you.
        </p>
      </div>

      <div className="charger-env-tabs" role="tablist" aria-label="Use types">
        {environmentTabs.map((tab) => (
          <button
            type="button"
            key={tab.id}
            role="tab"
            aria-selected={activeTab.id === tab.id}
            className={`charger-env-tab ${activeTab.id === tab.id ? "is-active" : ""}`}
            onClick={() => {
              setActiveTabId(tab.id);
              setOpenIndex(0);
            }}
          >
            <Icon name={tab.icon} className="h-6 w-6" />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="charger-env-panel">
        <div className="charger-env-left">
          <p className="charger-env-copy">{activeTab.intro}</p>

          <div className="charger-env-accordion">
            {activeTab.accordions.map(([title, copy, icon], index) => {
              const isOpen = openIndex === index;
              return (
                <article
                  key={`${activeTab.id}-${title}`}
                  className={`charger-env-accordion-item ${isOpen ? "is-open" : ""}`}
                >
                  <button
                    type="button"
                    className="charger-env-accordion-button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span className="charger-env-accordion-icon">
                      <Icon name={icon} className="h-6 w-6" />
                    </span>
                    <span>{title}</span>
                    <Icon name="chevron" className="h-5 w-5" />
                  </button>
                  <div className="charger-env-accordion-body">
                    <p>{copy}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <aside className="charger-env-card">
          <span className="charger-env-card-icon">
            <Icon name={activeTab.icon} className="h-7 w-7" />
          </span>
          <h3>{activeTab.cardTitle}</h3>
          <span className="charger-env-card-line" />
          <div className="charger-env-point-list">
            {activeTab.points.map((point) => (
              <div className="charger-env-point" key={point}>
                <Icon name="check" className="h-4 w-4" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <div className="charger-expand-actions">
        <button
          type="button"
          className={`charger-expand-button ${showAudienceCards ? "is-active" : ""}`}
          aria-expanded={showAudienceCards}
          onClick={() =>
            setActiveExpandPanel((prev) =>
              prev === "audience" ? null : "audience",
            )
          }
        >
          Who should use this charger?
          <Icon name="arrow" className="h-4 w-4" />
        </button>
        <button
          type="button"
          className={`charger-expand-button ${showUseCases ? "is-active" : ""}`}
          aria-expanded={showUseCases}
          onClick={() =>
            setActiveExpandPanel((prev) =>
              prev === "use-cases" ? null : "use-cases",
            )
          }
        >
          View use cases
          <Icon name="arrow" className="h-4 w-4" />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {showAudienceCards ? (
          <ShutterExpand key="charger-audience">
            <div className="charger-expand-section">
              <p className="three-eyebrow">Who should use this charger?</p>
              <h2 className="three-section-title">
                Perfect for everyday charging needs
              </h2>
              <div className="three-audience-grid">
                {audienceCards.map(([icon, title, copy]) => (
                  <article
                    className="three-info-card three-audience-card"
                    key={title}
                  >
                    <span className="three-card-icon">
                      <Icon name={icon} className="h-9 w-9" />
                    </span>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </ShutterExpand>
        ) : null}
      </AnimatePresence>

      <AnimatePresence initial={false}>
        {showUseCases ? (
          <ShutterExpand key="charger-use-cases">
            <div className="charger-expand-section charger-env-use-cases">
              <div className="charger-host-stories-panel">
                <p className="mb-2 text-xs font-semibold uppercase text-[#16a34a]">
                  Real stories
                </p>
                <h2 className="text-[32px] font-semibold leading-tight text-white md:text-[36px]">
                  How hosts use charging to create site value.
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-400">
                  Practical examples from workspaces, restaurants, and
                  sustainability-led businesses.
                </p>
                <div className="host-stories mt-12 flex snap-x gap-6 overflow-x-auto pb-4">
                  {chargerStories.map((story, index) => (
                    <Reveal key={story.title} delay={index * 0.05}>
                      <article className="w-[320px] shrink-0 snap-start overflow-hidden rounded-lg border border-white/10 bg-zinc-900 sm:w-[390px]">
                        <img
                          src={story.image}
                          alt=""
                          className="h-56 w-full object-cover"
                        />
                        <div className="p-6">
                          <p className="text-xs font-semibold uppercase text-[#16a34a]">
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
                <SmartLink
                  href="/stories"
                  className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/10 bg-[#111111] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-[1.02] hover:border-[#16a34a]/50"
                >
                  Explore stories
                  <Icon name="arrow" className="h-4 w-4" />
                </SmartLink>
              </div>
            </div>
          </ShutterExpand>
        ) : null}
      </AnimatePresence>
    </Section>
  );
}

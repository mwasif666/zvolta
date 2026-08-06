import {
  AnimatePresence,
  Icon,
  Reveal,
  hostWhereLocations,
  motion,
} from "../../HostPage.shared.jsx";
export function RequirementsSection({
  activeWhereIndex,
  activeWhereLocation,
  activeWherePanel,
  setActiveWhereIndex,
  setWherePanelMode,
  wherePanelMode,
}) {
  return (
    <section id="requirements" className="host-where-section">
      <div className="host-container host-where-inner">
        <Reveal className="host-where-copy">
          <p className="host-where-eyebrow">
            <span className="host-where-number">03</span>
            Where
          </p>
          <h2 className="host-where-title">
            Built for places where people already stop.
          </h2>
          {/* <p className="host-where-copy-text">
                High dwell time. Clear access. Everyday footfall.
               </p> */}
          {/* <PrimaryButton href="/charge" className="host-where-button">
                See charger map
               </PrimaryButton> */}
        </Reveal>

        <div className="host-where-grid">
          {hostWhereLocations.map((location, index) => (
            <Reveal key={location.title} delay={index * 0.035}>
              <button
                type="button"
                className={`host-where-card ${activeWhereIndex === index ? "is-active" : ""}`}
                aria-pressed={activeWhereIndex === index}
                onClick={() => setActiveWhereIndex(index)}
              >
                <img src={location.image} alt={location.title} />
                <span className="host-where-active-check" aria-hidden="true">
                  <Icon name="check" className="h-5 w-5" />
                </span>
                <div className="host-where-card-content">
                  <span className="host-where-card-icon">
                    <Icon name={location.icon} className="h-9 w-9" />
                  </span>
                  <h3 className="host-where-card-title">{location.title}</h3>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={0.12}
          className={`host-where-panel is-${wherePanelMode}`}
        >
          <div className="host-where-panel-content">
            <div className="host-where-panel-location">
              <span className="host-where-panel-location-icon">
                <Icon name={activeWhereLocation.icon} className="h-7 w-7" />
              </span>
              <h3>{activeWhereLocation.title}</h3>
            </div>

            <div className="host-where-tabs" role="tablist">
              {["problems", "benefits"].map((mode) => (
                <button
                  type="button"
                  key={mode}
                  role="tab"
                  aria-selected={wherePanelMode === mode}
                  className={`host-where-tab ${wherePanelMode === mode ? "is-active" : ""}`}
                  onClick={() => setWherePanelMode(mode)}
                >
                  <Icon
                    name={mode === "problems" ? "alert" : "chart"}
                    className="h-4 w-4"
                  />
                  <span>{mode === "problems" ? "Problems" : "Solutions"}</span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`${activeWhereLocation.title}-${wherePanelMode}`}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                }}
              >
                <h3 className="host-where-panel-title">
                  {activeWherePanel.title}
                </h3>
                <div className="host-where-panel-list">
                  {activeWherePanel.items.map((item) => (
                    <div className="host-where-panel-item" key={item.title}>
                      <span className="host-where-panel-item-icon">
                        <Icon name={item.icon} className="h-7 w-7" />
                      </span>
                      <span>
                        <h4>{item.title}</h4>
                        <p>{item.copy}</p>
                      </span>
                    </div>
                  ))}
                </div>
                <div className="host-where-panel-footer">
                  <Icon
                    name={activeWherePanel.footerIcon}
                    className="h-7 w-7"
                  />
                  <span>{activeWherePanel.footer}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

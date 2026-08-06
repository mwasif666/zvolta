import {
  CareerButton,
  aivoraAssetBase,
  filters,
} from "../../CareerPage.shared.jsx";
export function PageJobsSection({
  activeFilter,
  setActiveFilter,
  visibleJobs,
}) {
  return (
    <section className="career-page__jobs">
      <div className="career-page__container">
        <div className="career-page__jobs-heading">
          <p className="career-page__subtitle">Open Positions</p>
          <h2 className="career-page__job-title">
            Be part of
            <img
              src={`${aivoraAssetBase}/diamond-icon02.gif`}
              alt=""
              aria-hidden="true"
            />
            the team
          </h2>
          <div
            className="career-page__filters"
            role="list"
            aria-label="Filter jobs"
          >
            {filters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                className={activeFilter === filter.value ? "is-active" : ""}
                aria-pressed={activeFilter === filter.value}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="career-page__job-list">
          {visibleJobs.length > 0 ? (
            visibleJobs.map((job) => (
              <article className="career-page__job-card" key={job.id}>
                <div className="career-page__job-content">
                  <h3>{job.title}</h3>
                  <ul className="career-page__job-meta">
                    <li>
                      <img
                        src={`${aivoraAssetBase}/location-icon02.svg`}
                        alt=""
                        aria-hidden="true"
                      />
                      {job.location}
                    </li>
                    <li>
                      <img
                        src={`${aivoraAssetBase}/clock-icon.svg`}
                        alt=""
                        aria-hidden="true"
                      />
                      {job.type}
                    </li>
                  </ul>
                </div>

                <div className="career-page__job-actions">
                  <CareerButton href="/contact-us">View job</CareerButton>
                </div>
              </article>
            ))
          ) : (
            <div className="career-page__job-empty">
              No open roles match this filter right now.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

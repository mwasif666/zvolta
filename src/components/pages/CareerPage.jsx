import { jobs, useMemo, useState } from "./CareerPage.shared.jsx";
import { PageHeroSection } from "./CareerPage/sections/PageHeroSection.jsx";
import { PageGallerySection } from "./CareerPage/sections/PageGallerySection.jsx";
import { PageHiringSection } from "./CareerPage/sections/PageHiringSection.jsx";
import { PageJobsSection } from "./CareerPage/sections/PageJobsSection.jsx";
import { PageVideoSection } from "./CareerPage/sections/PageVideoSection.jsx";
export default function CareerPage() {
  const [activeFilter, setActiveFilter] = useState("*");
  const [activeStep, setActiveStep] = useState(0);
  const visibleJobs = useMemo(() => {
    if (activeFilter === "*") {
      return jobs;
    }
    return jobs.filter((job) => job.category.includes(activeFilter));
  }, [activeFilter]);
  return (
    <>
      <div className="career-page">
        <PageHeroSection />

        <PageGallerySection />

        <PageHiringSection
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />

        <PageJobsSection
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          visibleJobs={visibleJobs}
        />

        <PageVideoSection />
      </div>
    </>
  );
}

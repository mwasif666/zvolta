import { SmartLink } from "../SmartLink";
const imageColumns = [
  "/img/zvolta-1.jpg",
  "/img/zvolta-2.jpg",
  "/img/zvolta-3.jpg",
  "/img/zvolta-4.jpg",
];
const aboutBg = "/img/backgrounds/img.png";
const featureCards = [
  {
    title: "Charging with real-world logic",
    copy: "We plan around access, dwell time, uptime, and driver behavior so chargers become useful infrastructure, not decorative hardware.",
  },
  {
    title: "Vehicle programs that stay grounded",
    copy: "ZVolta connects EV access with onboarding, charging guidance, and support so adoption works beyond the first handover.",
  },
  {
    title: "Software that keeps operators aligned",
    copy: "Sessions, payments, field issues, and site visibility all need one rhythm. Our software layer helps teams stay coordinated.",
  },
];
const stats = [
  {
    value: "Charging",
    label: "Built around practical site usage",
  },
  {
    value: "Drivers",
    label: "Supported through onboarding and field realities",
  },
  {
    value: "Hosts",
    label: "Connected to a cleaner revenue model",
  },
  {
    value: "Operators",
    label: "Given better visibility across the network",
  },
];
const partnerPills = [
  "Host locations",
  "Driver programs",
  "Fleet movement",
  "Site operations",
  "Charging software",
  "Support systems",
  "Field maintenance",
  "Local rollout",
];
function AboutColumn({ image, reverse = false }) {
  const images = [image, image, image];
  return (
    <div
      className={`hidden h-[540px] overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 lg:block ${reverse ? "about-page__column--reverse" : ""}`}
    >
      <div className="about-page__column-track flex flex-col gap-4 p-4">
        {[...images, ...images].map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="overflow-hidden rounded-[1.5rem] border border-white/10"
          >
            <img
              src={item}
              alt="ZVolta about visual"
              className="h-40 w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export {
  AboutColumn,
  SmartLink,
  aboutBg,
  featureCards,
  imageColumns,
  partnerPills,
  stats,
};

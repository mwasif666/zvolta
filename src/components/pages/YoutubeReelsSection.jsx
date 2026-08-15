import styles from "./YoutubeReelsSection.module.css";
import { SmartLink } from "../SmartLink";
import { commerceApi } from "../../services/api";
import { useCommerceData } from "../../hooks/useCommerceData";
const fallbackYoutubeReels = [
  {
    id: "593J_FRoru4",
    title: "This is us. Not announcing anything yet",
  },
  {
    id: "avV8EaQIlsw",
    title: "We're now live at IBA main campus",
  },
  {
    id: "CJuGPOKuTpU",
    title: "How to sign up on ZVolta app",
  },
  {
    id: "yV9kVHreNgs",
    title: "ZVolta YouTube reel",
  },
];
function ReelsIcon({ name, className = "h-5 w-5" }) {
  const props = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };
  if (name === "play") {
    return (
      <svg {...props}>
        <path d="m8 5 11 7-11 7V5Z" />
      </svg>
    );
  }
  return (
    <svg {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}
export default function YoutubeReelsSection() {
  const videos = useCommerceData(commerceApi.videos, []);
  const youtubeReels = videos.error
    ? fallbackYoutubeReels
    : (videos.data || fallbackYoutubeReels).map((video) => ({
        id: video.youtubeId || video.id,
        title: video.title,
      }));

  if (!videos.loading && youtubeReels.length === 0) {
    return null;
  }

  return (
    <section
      className={`host-youtube-reels-section ${styles.routeStyles}`}
    >
      <span
        className="host-reels-glow host-reels-glow-left"
        aria-hidden="true"
      />
      <span
        className="host-reels-glow host-reels-glow-right"
        aria-hidden="true"
      />
      <div className="host-container">
        <div className="host-youtube-reels-header">
          <div className="host-youtube-reels-intro">
            <h2>Zvolta reels from the road</h2>
            <p>
              Short videos from our YouTube channel showing app flows, live
              sites, and EV charging moments.
            </p>
          </div>
        </div>

        <div className="host-youtube-reels-grid">
          {youtubeReels.map((reel) => (
            <article className="host-youtube-reel-card" key={reel.id}>
              <iframe
                src={`https://www.youtube.com/embed/${reel.id}?rel=0&modestbranding=1&playsinline=1`}
                title={reel.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </article>
          ))}
        </div>

        <div className="host-youtube-reels-action">
          <SmartLink
            href="https://www.youtube.com/@zvoltaPK"
            target="_blank"
            className="host-youtube-reels-button"
          >
            See more
            <ReelsIcon name="arrow" className="h-5 w-5" />
          </SmartLink>
        </div>
      </div>
    </section>
  );
}

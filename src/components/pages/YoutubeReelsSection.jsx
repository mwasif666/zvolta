import { SmartLink } from "../SmartLink";

const youtubeReels = [
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
  return (
    <section className="host-youtube-reels-section">
      <style>{`
        .host-youtube-reels-section {
          position: relative;
          overflow: hidden;
          padding: 82px 0 96px;
          border-block: 1px solid #E5E7EB;
          background:
            radial-gradient(circle at 50% 0%, rgba(22, 163, 74, 0.10), transparent 34%),
            radial-gradient(circle at 8% 58%, rgba(22, 163, 74, 0.07), transparent 30%),
            radial-gradient(circle at 92% 54%, rgba(22, 163, 74, 0.07), transparent 30%),
            #FFFFFF;
          isolation: isolate;
        }

        .host-youtube-reels-section::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -2;
          background:
            linear-gradient(90deg, rgba(248, 250, 249, 0.82), transparent 48%, rgba(248, 250, 249, 0.82)),
            repeating-linear-gradient(90deg, rgba(17, 24, 39, 0.035) 0 1px, transparent 1px 96px);
          opacity: 0.62;
        }

        .host-reels-glow {
          position: absolute;
          z-index: -1;
          top: 28%;
          height: 340px;
          width: 340px;
          border-radius: 999px;
          background: rgba(22, 163, 74, 0.10);
          filter: blur(72px);
          pointer-events: none;
        }

        .host-reels-glow-left {
          left: -120px;
        }

        .host-reels-glow-right {
          right: -120px;
        }

        .host-container {
          width: min(1240px, calc(100% - 40px));
          margin: 0 auto;
        }

        .host-youtube-reels-header {
          display: block;
          margin-bottom: 34px;
          text-align: center;
        }

        .host-youtube-reels-intro {
          max-width: 720px;
          margin: 0 auto;
          text-align: center;
        }

        .host-youtube-reels-intro h2 {
          color: #0B0B0B;
          font-size: clamp(34px, 4vw, 64px);
          font-weight: 900;
          line-height: 0.98;
          letter-spacing: 0;
          text-shadow: none;
        }

        .host-youtube-reels-intro p {
          margin: 18px auto 0;
          max-width: 680px;
          color: #4B5563;
          font-size: clamp(15px, 1.15vw, 19px);
          line-height: 1.55;
        }

        .host-youtube-reels-label {
          display: flex;
          width: max-content;
          max-width: 100%;
          align-items: center;
          justify-content: flex-end;
          margin: 0;
          color: #0B0B0B;
        }

        .host-youtube-reels-label > span {
          display: none;
        }

        .host-youtube-reels-label strong {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #111827;
          font-size: 18px;
          font-weight: 850;
          line-height: 1;
          white-space: nowrap;
          border: 1px solid #E5E7EB;
          border-radius: 14px;
          background: #FFFFFF;
          padding: 12px 18px 12px 12px;
          box-shadow: 0 18px 44px rgba(17, 24, 39, 0.08);
        }

        .host-youtube-reels-icon {
          display: grid;
          height: 28px;
          width: 36px;
          place-items: center;
          border: 1px solid rgba(22, 163, 74, 0.28);
          border-radius: 10px;
          color: #16a34a;
          background: rgba(22, 163, 74, 0.08);
        }

        .host-youtube-reels-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 24px;
          align-items: start;
        }

        .host-youtube-reel-card {
          position: relative;
          overflow: hidden;
          aspect-ratio: 9 / 16;
          border: 1px solid #E5E7EB;
          border-radius: 18px;
          background: #F8FAF9;
          box-shadow:
            0 1px 0 rgba(255, 255, 255, 0.85),
            0 18px 48px rgba(17, 24, 39, 0.12);
          transition:
            border-color 0.24s ease,
            box-shadow 0.24s ease,
            transform 0.24s ease;
        }

        .host-youtube-reel-card::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.10), transparent 16%),
            linear-gradient(0deg, rgba(0, 0, 0, 0.12), transparent 34%);
        }

        .host-youtube-reel-card:hover {
          border-color: rgba(22, 163, 74, 0.45);
          box-shadow:
            0 1px 0 rgba(255, 255, 255, 0.95),
            0 24px 56px rgba(17, 24, 39, 0.16);
          transform: translateY(-4px);
        }

        .host-youtube-reel-card iframe {
          display: block;
          width: 100%;
          height: 100%;
          border: 0;
        }

        .host-youtube-reels-action {
          display: flex;
          justify-content: center;
          margin-top: 38px;
        }

        .host-youtube-reels-button {
          display: inline-flex;
          min-height: 54px;
          min-width: 180px;
          align-items: center;
          justify-content: center;
          gap: 12px;
          border: 1px solid #16a34a;
          border-radius: 10px;
          background: #16a34a;
          padding: 0 24px;
          color: #FFFFFF;
          font-size: 16px;
          font-weight: 850;
          box-shadow: 0 16px 34px rgba(22, 163, 74, 0.22);
          transition:
            background 0.24s ease,
            border-color 0.24s ease,
            color 0.24s ease,
            transform 0.24s ease;
        }

        .host-youtube-reels-button:hover {
          border-color: #0f8a3f;
          background: #0f8a3f;
          color: #FFFFFF;
          transform: translateY(-1px);
        }

        @media (max-width: 1100px) {
          .host-youtube-reels-header {
            display: block;
          }

          .host-youtube-reels-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .host-youtube-reels-section {
            padding: 56px 0 64px;
          }

          .host-container {
            width: min(100% - 28px, 1240px);
          }

          .host-youtube-reels-header {
            margin-bottom: 28px;
          }

          .host-youtube-reels-intro {
            text-align: center;
          }

          .host-youtube-reels-grid {
            display: flex;
            gap: 18px;
            margin: 0 -14px;
            overflow-x: auto;
            padding: 0 14px 12px;
            scroll-snap-type: x mandatory;
          }

          .host-youtube-reel-card {
            min-width: min(78vw, 300px);
            scroll-snap-align: center;
          }

          .host-youtube-reels-label {
            width: 100%;
            justify-content: flex-start;
          }

          .host-youtube-reels-label strong {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
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

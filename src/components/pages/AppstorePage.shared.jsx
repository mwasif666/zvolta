import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SmartLink } from "../SmartLink";
const PLAY_STORE_LINK =
  "https://play.google.com/store/apps/details?id=com.zvolta.app";
const ALTERNATIVE_LINK = "https://evrental-app.orkofleet.com/login";
const appHighlights = [
  ["bolt", "Smart Charging", "Optimized for you"],
  ["calendar", "Easy Booking", "In just a few taps"],
  ["chart", "Real-time Insights", "Track every session"],
];
const carouselSlides = [
  {
    image: "/img/mobile3.png",
    alt: "Zvolta wallet and charging payments",
  },
  {
    image: "/img/mobile4.png",
    alt: "Zvolta seamless charging ecosystem",
  },
  {
    image: "/img/mobile1.png",
    alt: "Zvolta intelligent charging experience",
  },
  {
    image: "/img/mobile2.png",
    alt: "Zvolta booking details",
  },
  {
    image: "/img/mobile5.png",
    alt: "Zvolta nearby charging stations",
  },
];
function Icon({ name, size = 24, className = "" }) {
  const props = {
    className,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };
  if (name === "arrow") {
    return (
      <svg {...props}>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    );
  }
  if (name === "calendar") {
    return (
      <svg {...props}>
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <path d="M3 10h18" />
      </svg>
    );
  }
  if (name === "chart") {
    return (
      <svg {...props}>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="M8 16v-4" />
        <path d="M12 16V8" />
        <path d="M16 16v-7" />
      </svg>
    );
  }
  if (name === "bag") {
    return (
      <svg {...props}>
        <path d="M6 8h12l-1 12H7L6 8Z" />
        <path d="M9 8a3 3 0 0 1 6 0" />
      </svg>
    );
  }
  if (name === "shield") {
    return (
      <svg {...props}>
        <path d="M12 3 20 6v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6l8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  }
  return (
    <svg {...props}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  );
}
function GooglePlayMark() {
  return (
    <svg viewBox="0 0 40 44" className="appstore-play-icon" aria-hidden="true">
      <path
        fill="#34A853"
        d="M2.3 1.5 24 22 2.3 42.5A4 4 0 0 1 0 38.9V5.1a4 4 0 0 1 2.3-3.6Z"
      />
      <path
        fill="#FBBC04"
        d="m24 22 6.2-5.9 7.5 4.3a2 2 0 0 1 0 3.2l-7.5 4.3L24 22Z"
      />
      <path fill="#4285F4" d="M2.3 1.5 30.2 16.1 24 22 2.3 1.5Z" />
      <path fill="#EA4335" d="M2.3 42.5 24 22l6.2 5.9L2.3 42.5Z" />
    </svg>
  );
}
export {
  ALTERNATIVE_LINK,
  GooglePlayMark,
  Icon,
  Navigation,
  PLAY_STORE_LINK,
  Pagination,
  SmartLink,
  Swiper,
  SwiperSlide,
  appHighlights,
  carouselSlides,
};

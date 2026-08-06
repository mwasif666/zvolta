import { useState } from "react";
import { SmartLink } from "../SmartLink";
const assetBase = "/img/aivora-contact";
const contactCards = [
  {
    title: "Karachi, Pakistan",
    description: "Head office and local EV charging operations",
    image: "/img/zvolta-1.jpg",
    ctaLabel: "View location",
    ctaHref: "https://maps.google.com/?q=ZVolta+Karachi",
  },
  {
    title: "Host a Charger",
    description:
      "Bring ZVolta charging to your office, campus, restaurant, apartment, hospital or public site",
    image: "/img/zvolta-2.jpg",
    ctaLabel: "Become a host",
    ctaHref: "/become-charging-partner",
  },
  {
    title: "Customer Support",
    description: "",
    phone: "+92 310 444 6529",
    email: "support@zvolta.com",
    image: "/img/charging-post.jpg",
    ctaLabel: "Contact support",
    ctaHref: "#contact-form",
  },
];
function FieldIcon({ src, alt }) {
  return <img src={src} alt={alt} aria-hidden="true" />;
}
function ArrowIcon() {
  return (
    <span className="contact-page__button-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path
          d="M5 12h12m0 0-5-5m5 5-5 5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
      <svg viewBox="0 0 24 24">
        <path
          d="M5 12h12m0 0-5-5m5 5-5 5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </span>
  );
}
export { ArrowIcon, FieldIcon, SmartLink, assetBase, contactCards, useState };

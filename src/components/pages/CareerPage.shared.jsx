import { useMemo, useState } from "react";
import { SmartLink } from "../SmartLink";
const aivoraAssetBase = "/img/aivora-career";
const galleryImages = [
  {
    src: "/img/zvolta-1.jpg",
    alt: "ZVolta electric rickshaw in the field",
  },
  {
    src: "/img/zvolta-2.jpg",
    alt: "ZVolta electric rickshaw side view",
  },
  {
    src: "/img/zvolta-maidan.jpg",
    alt: "ZVolta charging station setup",
  },
  {
    src: "/img/charging%20station.png",
    alt: "EV charging station interface",
  },
  {
    src: "/img/zvolta-3.jpg",
    alt: "ZVolta electric vehicle close view",
  },
];
const filters = [
  {
    label: "View all",
    value: "*",
  },
  {
    label: "Operations",
    value: "operations",
  },
  {
    label: "Engineering",
    value: "engineering",
  },
  {
    label: "Growth",
    value: "growth",
  },
  {
    label: "Field Teams",
    value: "field",
  },
];
const jobs = [
  {
    id: 1,
    title: "Charging Network Operations Associate",
    category: ["operations", "field"],
    location: "Karachi, Pakistan",
    type: "Full time",
  },
  {
    id: 2,
    title: "EV Fleet Maintenance Technician",
    category: ["engineering", "field"],
    location: "Karachi, Pakistan",
    type: "Full time",
  },
  {
    id: 3,
    title: "Site Acquisition and Partnerships Lead",
    category: ["growth", "operations"],
    location: "Hybrid",
    type: "Full time",
  },
  {
    id: 4,
    title: "Customer Success Specialist",
    category: ["growth"],
    location: "Karachi, Pakistan",
    type: "Full time",
  },
  {
    id: 5,
    title: "Charging Software Support Engineer",
    category: ["engineering", "operations"],
    location: "Remote / Karachi",
    type: "Full time",
  },
];
const hiringSteps = [
  {
    number: "01",
    title: "_Send your CV",
    content:
      "Share your resume, portfolio, or LinkedIn profile so we can understand your experience and the role you are targeting.",
  },
  {
    number: "02",
    title: "_Initial screening",
    content:
      "Our team reviews your application, checks role fit, and schedules a short introductory conversation.",
  },
  {
    number: "03",
    title: "_Job interview",
    content:
      "You meet the hiring team to discuss your skills, working style, and the problems you will help ZVolta solve.",
  },
  {
    number: "04",
    title: "_Test task",
    content:
      "For selected roles, we may ask for a focused practical task that reflects the real work of the position.",
  },
  {
    number: "05",
    title: "_You're hired!",
    content:
      "Once both sides are aligned, we finalize the offer and help you get ready for your first day.",
  },
];
function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="career-page__arrow">
      <path
        d="M5 12h12m0 0-5-5m5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
function CareerButton({ children, href, className = "" }) {
  return (
    <SmartLink href={href} className={`career-page__button ${className}`}>
      <span>{children}</span>
      <span className="career-page__button-icon">
        <ArrowIcon />
      </span>
    </SmartLink>
  );
}
export {
  ArrowIcon,
  CareerButton,
  SmartLink,
  aivoraAssetBase,
  filters,
  galleryImages,
  hiringSteps,
  jobs,
  useMemo,
  useState,
};

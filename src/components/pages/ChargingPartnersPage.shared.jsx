import { useState } from "react";
import { SmartLink } from "../SmartLink";
import RoiCalculatorSection from "./RoiCalculatorSection";
const faqItems = [
  {
    question: "Who takes care of maintenance?",
    answer:
      "We manage all maintenance and servicing tasks completely free of charge for the host.",
  },
  {
    question: "How much can I earn?",
    answer:
      "Earnings vary based on location and usage, with transparent fixed rent options available.",
  },
  {
    question: "Is it safe and legal?",
    answer:
      "Yes, we install government-approved, safety-tested chargers and handle all necessary permits.",
  },
];
export { RoiCalculatorSection, SmartLink, faqItems, useState };

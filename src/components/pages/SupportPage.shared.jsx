import { useState } from "react";
import { SmartLink } from "../SmartLink";
const supportCards = [
  {
    title: "Driver help",
    phone: "+92 310 444 6529",
    email: "support@zvolta.com",
    image: "/img/aivora-contact/img01.png",
    note: "Charging questions, onboarding clarity, and day-to-day usage support.",
  },
  {
    title: "Host support",
    phone: "+92 310 444 6529",
    email: "support@zvolta.com",
    image: "/img/aivora-contact/img02.png",
    note: "Site behavior, charger issues, and partner-side coordination.",
  },
  {
    title: "Operator support",
    phone: "+92 310 444 6529",
    email: "support@zvolta.com",
    image: "/img/aivora-contact/img03.png",
    note: "Software visibility, reporting questions, and operational escalations.",
  },
];
const steps = [
  "Share the site, program, or issue detail as clearly as you can.",
  "We route it to the right lane instead of treating every request the same way.",
  "The goal is a response that tells you what happens next, not just that the message was received.",
  "Repeated support signals feed back into product and operations improvements.",
];
const faqs = [
  {
    question: "How do I report a charger or site issue?",
    answer:
      "Use the contact page or support email with the clearest location detail you can provide. That helps us route the request faster.",
  },
  {
    question: "Is support different for drivers, hosts, and operators?",
    answer:
      "Yes. The response paths are related, but the people and next steps can differ depending on whether the issue is usage, site-side, or software-side.",
  },
  {
    question: "Can I use support for policy or privacy questions too?",
    answer:
      "Yes. If the question is really legal or privacy-related, we route it against the right policy path instead of leaving you to guess.",
  },
];
export { SmartLink, faqs, steps, supportCards, useState };

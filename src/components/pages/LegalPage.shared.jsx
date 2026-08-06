import { useState } from "react";
import { SmartLink } from "../SmartLink";
const legalCards = [
  {
    title: "Terms and responsibilities",
    copy: "What ZVolta services expect from users, hosts, and partners, and where responsibilities sit in active programs.",
  },
  {
    title: "Privacy and data use",
    copy: "How service, contact, and operational information may be used to run support, compliance, and product workflows.",
  },
  {
    title: "Payments and refunds",
    copy: "The commercial side of charging, program participation, and how disputes or correction requests should be handled.",
  },
  {
    title: "Program-specific rules",
    copy: "Additional conditions that may apply to partner sites, managed programs, or service types with extra operational detail.",
  },
];
const sections = [
  {
    title: "Using ZVolta services",
    body: "ZVolta's legal framework is there to set expectations clearly. That includes appropriate service use, accurate information where onboarding depends on it, and responsible use of network access and support channels.",
  },
  {
    title: "How we handle information",
    body: "We use service and contact data to operate the network, support users, improve reliability, and meet compliance-related obligations where they apply. If your question is specifically about privacy, the contact route is the right place to start.",
  },
  {
    title: "Commercial clarity and disputes",
    body: "Where payments or service fees are involved, the aim is to keep pricing scope and issue handling understandable. If something needs review or correction, the request should include enough detail for the right team to assess it quickly.",
  },
  {
    title: "Partner or program-specific conditions",
    body: "Some offerings, especially those involving charging sites, hardware, or managed EV programs, can depend on more specific terms. This page is the clearer overview; deeper operational details are handled through the related workflow.",
  },
];
export { SmartLink, legalCards, sections, useState };

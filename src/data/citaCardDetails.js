/*
 * Presentation-only categories inferred from the approved CITA charger
 * descriptions, not additional technical/performance specifications.
 * Numerical pricing is not in the supplied CITA data: never invent a price.
 */
export const citaCardDetails = {
  "smart-pro-7": { bestFor: "Home & workplace charging", location: "Homes & workplaces" },
  "smart-pro-11": { bestFor: "Three-phase AC charging", location: "Homes, workplaces & commercial spaces" },
  "smart-pro-22": { bestFor: "Higher-power AC charging", location: "Homes, apartments & commercial spaces" },
  "smart-eco": { bestFor: "App-connected AC charging", location: "Homes & workplaces" },
  "smart-dual": { bestFor: "Charging two EVs at once", location: "Site suitability on enquiry" },
  "smart-44-gen-3": { bestFor: "Two-vehicle AC charging", location: "Commercial sites, public transport & taxis" },
  "dual-ecopillar": { bestFor: "Space-saving dual charging", location: "Commercial fleets, taxis & public EV bays" },
  "smart-30-dc": { bestFor: "CCS2-compatible EV charging", location: "Site suitability on enquiry" },
  "smart-dc-eco": { bestFor: "Up to four EVs at once", location: "Fleet, commercial & public charging" },
  "smart-dc-pro": { bestFor: "Fast & superfast DC charging", location: "Highways, fleets & public stations" },
};

export const CITA_PRICING_NOTE = "Enquire for pricing";

export const blogPosts = [
  {
    id: "charging-network-growth",
    slug: "charging-network-growth",
    category: "Charging Network",
    date: "April 18, 2026",
    readTime: "5 min read",
    author: "ZVolta Team",
    image: "/img/zvolta-maidan.jpg",
    cardImage: "/img/zvolta-maidan.jpg",
    title:
      "How ZVolta is building a practical EV charging network for Pakistan",
    excerpt:
      "A look at how host locations, rider demand, and reliable charging operations come together to make electric mobility work on the ground.",
    content: [
      "Pakistan's electric mobility shift needs more than chargers on a map. It needs dependable sites, simple payments, visible support, and a network that matches how riders and businesses actually move through the city.",
      "ZVolta's charging model is designed around practical access. Host partners can turn high-footfall spaces into useful charging points, while drivers get predictable charging options close to their daily routes.",
      "The work ahead is operational as much as technical. Every charging site must be easy to find, maintained consistently, and supported by software that gives operators a clear view of usage and uptime.",
    ],
    points: [
      "Host-first site planning",
      "Reliable field operations",
      "Simple app-led discovery and payments",
      "Usage visibility for operators",
    ],
  },
  {
    id: "ev-rickshaw-economics",
    slug: "ev-rickshaw-economics",
    category: "EV Programs",
    date: "April 12, 2026",
    readTime: "4 min read",
    author: "Mobility Desk",
    image: "/img/zvolta-1.jpg",
    cardImage: "/img/zvolta-1.jpg",
    title: "Why electric rickshaws can change daily transport economics",
    excerpt:
      "Lower running costs and cleaner operations can help drivers, fleet owners, and communities move toward a more sustainable transport model.",
    content: [
      "Electric rickshaws make the most sense when the full operating picture is considered: energy cost, maintenance, route consistency, charging access, and rider demand.",
      "For drivers, predictable charging and a managed vehicle program can reduce friction. For fleet operators, the benefit comes from clear utilization data and a support system that keeps vehicles on the road.",
      "The strongest EV programs connect vehicle access with charging access. That pairing is what turns electric mobility from a one-time purchase into a working transport system.",
    ],
    points: [
      "Reduced fuel dependency",
      "Managed fleet support",
      "Better cost visibility",
      "Cleaner last-mile movement",
    ],
  },
  {
    id: "charging-partner-sites",
    slug: "charging-partner-sites",
    category: "Host Partners",
    date: "April 6, 2026",
    readTime: "6 min read",
    author: "Partnership Team",
    image: "/img/host%20An%20EV%20charging.jpg",
    cardImage: "/img/host%20An%20EV%20charging.jpg",
    title: "What makes a strong location for an EV charging site?",
    excerpt:
      "The best charging sites combine access, safety, power readiness, and a reason for drivers to stop there regularly.",
    content: [
      "A strong charging site is not just a place with electricity. It is a location where drivers already pass through, where parking is manageable, and where the experience feels safe and predictable.",
      "Retail shops, workplaces, apartment buildings, and transport corridors can all become valuable charging locations when they are planned around real usage patterns.",
      "ZVolta evaluates site potential with partner goals in mind, then helps align installation, operations, and ongoing support so the site can earn and serve drivers consistently.",
    ],
    points: [
      "High visibility and easy access",
      "Power readiness",
      "Driver dwell-time potential",
      "Simple support and maintenance access",
    ],
  },
  {
    id: "software-for-operators",
    slug: "software-for-operators",
    category: "Software",
    date: "March 28, 2026",
    readTime: "5 min read",
    author: "Product Team",
    image: "/img/app-1.png",
    cardImage: "/img/app-1.png",
    title: "The software layer behind a reliable charging operation",
    excerpt:
      "Charging networks need dashboards, alerts, payment visibility, and operational workflows that help teams move quickly.",
    content: [
      "EV charging reliability depends on the software layer as much as the hardware. Operators need to know which sites are active, where sessions are happening, and when a field response is needed.",
      "A clear dashboard reduces guesswork. It helps teams understand utilization, track payments, and prioritize maintenance before small issues become driver-facing problems.",
      "As networks expand, software becomes the control room for cleaner mobility: connecting hosts, drivers, field teams, and business owners in one operating rhythm.",
    ],
    points: [
      "Live charger visibility",
      "Payment and session tracking",
      "Field issue workflows",
      "Operator reporting",
    ],
  },
  {
    id: "driver-network-support",
    slug: "driver-network-support",
    category: "Driver Network",
    date: "March 15, 2026",
    readTime: "4 min read",
    author: "Operations Team",
    image: "/img/zvolta-2.jpg",
    cardImage: "/img/zvolta-2.jpg",
    title: "Supporting drivers through the shift to electric mobility",
    excerpt:
      "Driver adoption improves when vehicle access, charging guidance, and support are designed around everyday work.",
    content: [
      "Drivers need a mobility program that respects daily earning pressure. Electric vehicles should be easy to access, easy to charge, and backed by a team that understands field realities.",
      "Support starts before the first ride. Orientation, charging education, and responsive operations help drivers build confidence with electric vehicles.",
      "When drivers succeed, the EV network grows stronger. Reliable support keeps utilization high and helps communities see clean mobility as a practical option.",
    ],
    points: [
      "Driver onboarding",
      "Charging education",
      "Maintenance coordination",
      "Operational support",
    ],
  },
];

export function getBlogPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug) ?? blogPosts[0];
}

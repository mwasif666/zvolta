export const routeEntries = [
  {
    pageId: "404",
    paths: ["/404"],
    meta: { title: "Page Not Found", description: "" },
    load: () => import("../pages/NotFoundPage.jsx"),
  },
  {
    pageId: "about-us",
    paths: ["/about-us"],
    meta: {
      title: "About ZVolta | Building The Practical Electric Layer",
      description:
        "Learn how ZVolta connects charging, vehicle programs, software, and support to make electric mobility more practical across Pakistan.",
    },
    load: () => import("../pages/AboutUsPage.jsx"),
  },
  {
    pageId: "appstore",
    paths: ["/appstore"],
    meta: {
      title: "ZVolta App - Coming Soon",
      description:
        "The ZVolta App is launching soon. Get ready to charge smarter.",
    },
    load: () => import("../pages/AppstorePage.jsx"),
  },
  {
    pageId: "become-charging-partner",
    paths: ["/become-charging-partner"],
    meta: {
      title: "Become a ZVolta Charging Partner | Earn with Your Property",
      description:
        "Join ZVolta's nationwide EV charging network. Turn your property into a smart charging station, earn passive income, and be part of Pakistan's clean energy future.",
    },
    load: () => import("../pages/BecomeChargingPartnerPage.jsx"),
  },
  {
    pageId: "blogs",
    paths: ["/blogs"],
    meta: {
      title: "ZVolta Blog | EV Charging, Mobility & Operator Insights",
      description:
        "Read ZVolta updates and practical insights on EV charging, electric rickshaws, host partners, driver support, and clean mobility in Pakistan.",
    },
    load: () => import("../pages/BlogsPage.jsx"),
  },
  {
    pageId: "blog-detail",
    paths: ["/blog-details", "/blogs/:slug"],
    meta: {
      title: "ZVolta Blog Details | Clean Mobility Insights",
      description:
        "Detailed ZVolta insight on EV charging, mobility operations, driver programs, host partnerships, and charging software.",
    },
    load: () => import("../pages/BlogDetailPage.jsx"),
  },
  {
    pageId: "careers",
    paths: ["/careers"],
    meta: {
      title: "Careers at ZVolta | Join Pakistan Electric Mobility Network",
      description:
        "Explore open roles at ZVolta across EV charging, fleet operations, engineering, partnerships, and customer success.",
    },
    load: () => import("../pages/CareerPage.jsx"),
  },
  {
    pageId: "charge",
    paths: ["/charge"],
    meta: {
      title: "ZVolta - Coming Soon",
      description: "This page is currently under development.",
    },
    load: () => import("../pages/ChargePage.jsx"),
  },
  {
    pageId: "charging-partners",
    paths: ["/charging-partners"],
    meta: {
      title: "Become a ZVolta Charging Partner | Host an EV Charger",
      description: "Turn your location into an EV charging hub with ZVolta.",
    },
    load: () => import("../pages/ChargingPartnersPage.jsx"),
  },
  {
    pageId: "coming-soon",
    paths: ["/coming-soon"],
    meta: {
      title: "ZVolta - Coming Soon",
      description: "This page is currently under development.",
    },
    load: () => import("../pages/ComingSoonPage.jsx"),
  },
  {
    pageId: "contact-us",
    paths: ["/contact-us"],
    meta: {
      title: "Contact ZVolta | EV Charging &amp; Clean Mobility Solutions",
      description:
        "Get in touch with ZVolta for support, partnerships, or investment inquiries. Join us in powering Pakistan's clean transportation future.",
    },
    load: () => import("../pages/ContactUsPage.jsx"),
  },
  {
    pageId: "partners",
    paths: ["/partners"],
    meta: {
      title: "Partners | ZVolta Charging And Mobility Partnerships",
      description:
        "Explore how ZVolta works with host locations, fleet operators, and rollout collaborators to expand practical electric mobility.",
    },
    load: () => import("../pages/PartnersPage.jsx"),
  },
  {
    pageId: "driver-network",
    paths: ["/driver-network"],
    meta: {
      title: "Driver Network | ZVolta - Driving Jobs Made Easy",
      description:
        "Join ZVolta's driver network with zero down payment. Rent an electric rickshaw with our flexible rent-and-earn model and get 24/7 support. Start your driving job today!",
    },
    load: () => import("../pages/DriverNetworkPage.jsx"),
  },
  {
    pageId: "home",
    paths: ["/home"],
    meta: {
      title: "ZVolta - Charging Should Feel Easy",
      description:
        "ZVolta builds the tools that support people, places, and all the possibilities ahead in the electric future.",
    },
    load: () => import("../pages/HomePage.jsx"),
  },
  {
    pageId: "host",
    paths: ["/host"],
    meta: {
      title: "ZVolta - Coming Soon",
      description: "This page is currently under development.",
    },
    load: () => import("../pages/HostPage.jsx"),
  },
  {
    pageId: "index",
    paths: ["/"],
    meta: {
      title: "ZVolta - Charging Should Feel Easy",
      description:
        "ZVolta builds the tools that support people, places, and all the possibilities ahead in the electric future.",
    },
    load: () => import("../pages/IndexPage.jsx"),
  },
  {
    pageId: "invest-form",
    paths: ["/invest-form"],
    meta: {
      title: "Invest in ZVolta | Shape the Future of EV in Pakistan",
      description:
        "Explore investment opportunities with ZVolta. Join us in revolutionizing Pakistan's transport sector with clean, electric mobility solutions.",
    },
    load: () => import("../pages/InvestFormPage.jsx"),
  },
  {
    pageId: "invest",
    paths: ["/invest"],
    meta: {
      title: "Invest in EV Rickshaws | ZVolta Passive Income Opportunities",
      description:
        "Join ZVolta's EV revolution: invest in 3- or 6-seater electric rickshaws and earn fixed monthly returns, fully managed. Clean, hassle-free passive income in Pakistan.",
    },
    load: () => import("../pages/InvestPage.jsx"),
  },
  {
    pageId: "loader",
    paths: ["/loader"],
    meta: { title: "ZVOLTA | LOADER", description: "" },
    load: () => import("../pages/LoaderPage.jsx"),
  },
  {
    pageId: "mobile",
    paths: ["/mobile"],
    meta: {
      title: "ZVolta - Start Charging",
      description: "Scan, Pay, and Charge instantly with ZVolta.",
    },
    load: () => import("../pages/MobilePage.jsx"),
  },
  {
    pageId: "policy",
    paths: ["/legal", "/policy"],
    meta: {
      title: "Legal | ZVolta Policies And Terms",
      description:
        "Review ZVolta's legal information covering terms, privacy, program responsibilities, and payment-related policy areas.",
    },
    load: () => import("../pages/LegalPage.jsx"),
  },
  {
    pageId: "roi-calculator",
    paths: ["/roi-calculator"],
    meta: { title: "EV Charger ROI Calculator - Zvolta", description: "" },
    load: () => import("../pages/RoiCalculatorPage.jsx"),
  },
  {
    pageId: "software",
    paths: ["/software"],
    meta: {
      title: "ZVolta - Coming Soon",
      description: "This page is currently under development.",
    },
    load: () => import("../pages/SoftwarePage.jsx"),
  },
  {
    pageId: "stories",
    paths: ["/stories"],
    meta: {
      title: "Stories | ZVolta Field, Partner And Driver Stories",
      description:
        "Read ZVolta stories from the field across host locations, drivers, operators, and the network behind practical EV adoption.",
    },
    load: () => import("../pages/StoriesPage.jsx"),
  },
  {
    pageId: "support",
    paths: ["/support"],
    meta: {
      title: "Support | ZVolta Help For Drivers, Hosts And Operators",
      description:
        "Get support information for ZVolta drivers, host partners, operators, and policy-related questions across the electric mobility network.",
    },
    load: () => import("../pages/SupportPage.jsx"),
  },
  {
    pageId: "team",
    paths: ["/team"],
    meta: {
      title: "Team | ZVolta People, Culture And Operating Mindset",
      description:
        "Meet the ZVolta team and learn how founders, field operators, partnerships, support, and product work together across the network.",
    },
    load: () => import("../pages/TeamPage.jsx"),
  },
  {
    pageId: "testing",
    paths: ["/testing"],
    meta: { title: "The Modern Capital Platform", description: "" },
    load: () => import("../pages/TestingPage.jsx"),
  },
  {
    pageId: "vehicles",
    paths: ["/vehicles"],
    meta: {
      title:
        "ZVolta Electric Vehicles | Passenger & Loader EVs | Invest, Drive, Charge",
      description:
        "Explore ZVolta's electric rickshaws (3-seater, 6-seater, loader EVs) for passengers and cargo. Invest in EV fleets, become a charging partner, or rent an EV.",
    },
    load: () => import("../pages/VehiclesPage.jsx"),
  },
];

export const pageRegistry = Object.fromEntries(
  routeEntries.map((entry) => [entry.pageId, entry.load]),
);

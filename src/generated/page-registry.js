export const routeEntries = [
  {
    pageId: '404.html',
    paths: ['/404', '/404.html'],
    meta: { title: 'Page Not Found', description: '' },
    load: () => import('./pages/NotFoundPage.jsx'),
  },
  {
    pageId: 'about-us.html',
    paths: ['/about-us', '/about-us.html'],
    meta: {
      title: 'About ZVolta - The Future of Electric Mobility in Pakistan',
      description:
        'ZVolta is transforming electric mobility in Pakistan. Learn how we are empowering local communities through electric vehicle (EV) investments, charging stations, and rental opportunities.',
    },
    load: () => import('./pages/AboutUsPage.jsx'),
  },
  {
    pageId: 'appstore.html',
    paths: ['/appstore', '/appstore.html'],
    meta: {
      title: 'ZVolta App - Coming Soon',
      description:
        'The ZVolta App is launching soon. Get ready to charge smarter.',
    },
    load: () => import('./pages/AppstorePage.jsx'),
  },
  {
    pageId: 'become-charging-partner.html',
    paths: ['/become-charging-partner', '/become-charging-partner.html'],
    meta: {
      title: 'Become a ZVolta Charging Partner | Earn with Your Property',
      description:
        "Join ZVolta’s nationwide EV charging network. Turn your property into a smart charging station, earn passive income, and be part of Pakistan's clean energy future.",
    },
    load: () => import('./pages/BecomeChargingPartnerPage.jsx'),
  },
  {
    pageId: 'blogs.html',
    paths: ['/blogs', '/blogs.html'],
    meta: {
      title: 'ZVolta - Coming Soon',
      description: 'This page is currently under development.',
    },
    load: () => import('./pages/BlogsPage.jsx'),
  },
  {
    pageId: 'charge.html',
    paths: ['/charge', '/charge.html'],
    meta: {
      title: 'ZVolta - Coming Soon',
      description: 'This page is currently under development.',
    },
    load: () => import('./pages/ChargePage.jsx'),
  },
  {
    pageId: 'charging-partners.html',
    paths: ['/charging-partners', '/charging-partners.html'],
    meta: {
      title: 'Become a ZVolta Charging Partner | Host an EV Charger',
      description: 'Turn your location into an EV charging hub with ZVolta.',
    },
    load: () => import('./pages/ChargingPartnersPage.jsx'),
  },
  {
    pageId: 'coming-soon.html',
    paths: ['/coming-soon', '/coming-soon.html'],
    meta: {
      title: 'ZVolta - Coming Soon',
      description: 'This page is currently under development.',
    },
    load: () => import('./pages/ComingSoonPage.jsx'),
  },
  {
    pageId: 'contact-us.html',
    paths: ['/contact-us', '/contact-us.html'],
    meta: {
      title: 'Contact ZVolta | EV Charging &amp; Clean Mobility Solutions',
      description:
        "Get in touch with ZVolta for support, partnerships, or investment inquiries. Join us in powering Pakistan's clean transportation future.",
    },
    load: () => import('./pages/ContactUsPage.jsx'),
  },
  {
    pageId: 'driver-network.html',
    paths: ['/driver-network', '/driver-network.html'],
    meta: {
      title: 'Driver Network | ZVolta - Driving Jobs Made Easy',
      description:
        "Join ZVolta's driver network with zero down payment. Rent an electric rickshaw with our flexible rent-and-earn model and get 24/7 support. Start your driving job today!",
    },
    load: () => import('./pages/DriverNetworkPage.jsx'),
  },
  {
    pageId: 'home.html',
    paths: ['/home', '/home.html'],
    meta: {
      title: 'ZVolta - Charging Should Feel Easy',
      description:
        'ZVolta builds the tools that support people, places, and all the possibilities ahead in the electric future.',
    },
    load: () => import('./pages/HomePage.jsx'),
  },
  {
    pageId: 'host.html',
    paths: ['/host', '/host.html'],
    meta: {
      title: 'ZVolta - Coming Soon',
      description: 'This page is currently under development.',
    },
    load: () => import('./pages/HostPage.jsx'),
  },
  {
    pageId: 'index.html',
    paths: ['/', '/index.html'],
    meta: {
      title: 'ZVolta - Charging Should Feel Easy',
      description:
        'ZVolta builds the tools that support people, places, and all the possibilities ahead in the electric future.',
    },
    load: () => import('./pages/IndexPage.jsx'),
  },
  {
    pageId: 'invest-form.html',
    paths: ['/invest-form', '/invest-form.html'],
    meta: {
      title: 'Invest in ZVolta | Shape the Future of EV in Pakistan',
      description:
        "Explore investment opportunities with ZVolta. Join us in revolutionizing Pakistan's transport sector with clean, electric mobility solutions.",
    },
    load: () => import('./pages/InvestFormPage.jsx'),
  },
  {
    pageId: 'invest.html',
    paths: ['/invest', '/invest.html'],
    meta: {
      title: 'Invest in EV Rickshaws | ZVolta Passive Income Opportunities',
      description:
        'Join ZVolta’s EV revolution: invest in 3- or 6-seater electric rickshaws and earn fixed monthly returns, fully managed. Clean, hassle-free passive income in Pakistan.',
    },
    load: () => import('./pages/InvestPage.jsx'),
  },
  {
    pageId: 'Loader.html',
    paths: ['/loader', '/Loader.html'],
    meta: { title: 'ZVOLTA | LOADER', description: '' },
    load: () => import('./pages/LoaderPage.jsx'),
  },
  {
    pageId: 'mobile.html',
    paths: ['/mobile', '/mobile.html'],
    meta: {
      title: 'ZVolta - Start Charging',
      description: 'Scan, Pay, and Charge instantly with ZVolta.',
    },
    load: () => import('./pages/MobilePage.jsx'),
  },
  {
    pageId: 'Policy.html',
    paths: ['/policy', '/Policy.html'],
    meta: {
      title: 'Policies | Zvolta',
      description:
        'Review the Terms and Conditions, Privacy Policy, Returns Policy, and Standard Service Policy for Zvolta Private Limited.',
    },
    load: () => import('./pages/PolicyPage.jsx'),
  },
  {
    pageId: 'roi-calculator.html',
    paths: ['/roi-calculator', '/roi-calculator.html'],
    meta: { title: 'EV Charger ROI Calculator - Zvolta', description: '' },
    load: () => import('./pages/RoiCalculatorPage.jsx'),
  },
  {
    pageId: 'software.html',
    paths: ['/software', '/software.html'],
    meta: {
      title: 'ZVolta - Coming Soon',
      description: 'This page is currently under development.',
    },
    load: () => import('./pages/SoftwarePage.jsx'),
  },
  {
    pageId: 'team.html',
    paths: ['/team', '/team.html'],
    meta: {
      title: 'ZVolta - Coming Soon',
      description: 'This page is currently under development.',
    },
    load: () => import('./pages/TeamPage.jsx'),
  },
  {
    pageId: 'testing.html',
    paths: ['/testing', '/testing.html'],
    meta: { title: 'The Modern Capital Platform', description: '' },
    load: () => import('./pages/TestingPage.jsx'),
  },
  {
    pageId: 'vehicles.html',
    paths: ['/vehicles', '/vehicles.html'],
    meta: {
      title:
        'ZVolta Electric Vehicles | Passenger & Loader EVs | Invest, Drive, Charge',
      description:
        "Explore ZVolta's electric rickshaws (3-seater, 6-seater, loader EVs) for passengers and cargo. Invest in EV fleets, become a charging partner, or rent an EV.",
    },
    load: () => import('./pages/VehiclesPage.jsx'),
  },
];

export const pageRegistry = Object.fromEntries(
  routeEntries.map((entry) => [entry.pageId, entry.load]),
);

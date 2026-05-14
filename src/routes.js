import {
  pageRegistry,
  routeEntries as pageRouteEntries,
} from "./page-registry";

const routeLabels = {
  404: "Page Not Found",
  "about-us": "About Us",
  appstore: "App Store",
  "become-charging-partner": "Become Charging Partner",
  "blog-detail": "Blog Details",
  blogs: "Blogs",
  careers: "Careers",
  charge: "Charge",
  "3kw-charger": "3kW Charger",
  "7kw-charger": "7kW Charger",
  "22kw-charger": "22kW Charger",
  "charging-partners": "Charging Partners",
  "coming-soon": "Coming Soon",
  "contact-us": "Contact Us",
  "driver-network": "Driver Network",
  home: "Home Page",
  host: "Host a Charger",
  index: "Home",
  "invest-form": "Investment Form",
  invest: "Invest",
  loader: "Loader",
  mobile: "Mobile App",
  partners: "Partners",
  policy: "Legal",
  "roi-calculator": "ROI Calculator",
  software: "Software",
  stories: "Stories",
  support: "Support",
  team: "Team",
  testing: "Testing",
  vehicles: "Vehicles",
};

const shortRouteLabels = {
  "become-charging-partner": "Become Partner",
  careers: "Careers",
  "charging-partners": "Partners",
  "contact-us": "Contact",
  "driver-network": "Drivers",
  "invest-form": "Invest Form",
  policy: "Legal",
  "roi-calculator": "ROI",
  support: "Support",
};

const primaryNavigationPageIds = [
  "index",
  "vehicles",
  "host",
  "charge",
  "software",
  "invest",
  "careers",
  "contact-us",
];

const hiddenNavigationPageIds = new Set(["404"]);

function labelFromPageId(pageId) {
  return (
    routeLabels[pageId] ??
    pageId
      .replace(/[-_]+/g, " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase())
  );
}

export const routeEntries = pageRouteEntries;
export { pageRegistry };

export const siteRoutes = routeEntries.map((entry) => {
  const label = labelFromPageId(entry.pageId);

  return {
    ...entry,
    path: entry.paths[0],
    aliases: entry.paths.slice(1),
    label,
    shortLabel: shortRouteLabels[entry.pageId] ?? label,
    showInNavigation: !hiddenNavigationPageIds.has(entry.pageId),
  };
});

const siteRoutesByPageId = new Map(
  siteRoutes.map((route) => [route.pageId, route]),
);

const siteRoutesByPath = new Map(
  siteRoutes.flatMap((route) =>
    route.paths.map((path) => [path.toLowerCase(), route]),
  ),
);

function routesFromPageIds(pageIds) {
  return pageIds
    .map((pageId) => siteRoutesByPageId.get(pageId))
    .filter(Boolean);
}

export const navLinks = routesFromPageIds(primaryNavigationPageIds);

export const moreNavLinks = siteRoutes.filter(
  (route) =>
    route.showInNavigation && !primaryNavigationPageIds.includes(route.pageId),
);

export const allRouteLinks = siteRoutes.map(
  ({ pageId, path, aliases, label, shortLabel, meta, showInNavigation }) => ({
    pageId,
    path,
    aliases,
    label,
    shortLabel,
    title: meta?.title ?? label,
    showInNavigation,
  }),
);

export const footerLinkGroups = [
  {
    title: "Company",
    links: routesFromPageIds([
      "index",
      "about-us",
      "team",
      "partners",
      "stories",
      "careers",
    ]),
  },
  {
    title: "Charging",
    links: routesFromPageIds([
      "charge",
      "charging-partners",
      "become-charging-partner",
      "software",
      "host",
      "3kw-charger",
      "7kw-charger",
      "22kw-charger",
      "mobile",
      "appstore",
    ]),
  },
  {
    title: "EV Programs",
    links: routesFromPageIds([
      "vehicles",
      "driver-network",
      "invest",
      "invest-form",
      "loader",
      "roi-calculator",
    ]),
  },
  {
    title: "Help",
    links: routesFromPageIds([
      "support",
      "contact-us",
      "policy",
      "blogs",
      "home",
    ]),
  },
];

export function getRouteByPageId(pageId) {
  return siteRoutesByPageId.get(pageId);
}

export function getRouteByPathname(pathname) {
  return siteRoutesByPath.get(pathname.toLowerCase());
}

export function getCanonicalPathname(pathname) {
  return getRouteByPathname(pathname)?.path ?? pathname;
}

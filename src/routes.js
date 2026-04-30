import {
  pageRegistry,
  routeEntries as generatedRouteEntries,
} from "./generated/page-registry";

const routeLabels = {
  404: "Page Not Found",
  "about-us": "About Us",
  appstore: "App Store",
  "become-charging-partner": "Become Charging Partner",
  blogs: "Blogs",
  careers: "Careers",
  charge: "Charge",
  "charging-partners": "Charging Partners",
  "coming-soon": "Coming Soon",
  "contact-us": "Contact Us",
  "driver-network": "Driver Network",
  home: "Home Page",
  host: "Host",
  index: "Home",
  "invest-form": "Investment Form",
  invest: "Invest",
  loader: "Loader",
  mobile: "Mobile App",
  policy: "Policy",
  "roi-calculator": "ROI Calculator",
  software: "Software",
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
  "roi-calculator": "ROI",
};

const primaryNavigationPageIds = [
  "index",
  "vehicles",
  "charging-partners",
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

export const routeEntries = generatedRouteEntries;
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
      "careers",
      "blogs",
      "contact-us",
      "policy",
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
    title: "Other Pages",
    links: routesFromPageIds(["home", "coming-soon", "testing"]),
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

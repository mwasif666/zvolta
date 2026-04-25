import {
  pageRegistry,
  routeEntries as generatedRouteEntries,
} from "./generated/page-registry";

const routeLabels = {
  "404.html": "Page Not Found",
  "about-us.html": "About Us",
  "appstore.html": "App Store",
  "become-charging-partner.html": "Become Charging Partner",
  "blogs.html": "Blogs",
  "charge.html": "Charge",
  "charging-partners.html": "Charging Partners",
  "coming-soon.html": "Coming Soon",
  "contact-us.html": "Contact Us",
  "driver-network.html": "Driver Network",
  "home.html": "Home Page",
  "host.html": "Host",
  "index.html": "Home",
  "invest-form.html": "Investment Form",
  "invest.html": "Invest",
  "Loader.html": "Loader",
  "mobile.html": "Mobile App",
  "Policy.html": "Policy",
  "roi-calculator.html": "ROI Calculator",
  "software.html": "Software",
  "team.html": "Team",
  "testing.html": "Testing",
  "vehicles.html": "Vehicles",
};

const shortRouteLabels = {
  "become-charging-partner.html": "Become Partner",
  "charging-partners.html": "Partners",
  "contact-us.html": "Contact",
  "driver-network.html": "Drivers",
  "invest-form.html": "Invest Form",
  "roi-calculator.html": "ROI",
};

const primaryNavigationPageIds = [
  "index.html",
  "vehicles.html",
  "charging-partners.html",
  "charge.html",
  "software.html",
  "invest.html",
  "contact-us.html",
];

const hiddenNavigationPageIds = new Set(["404.html"]);

function labelFromPageId(pageId) {
  return (
    routeLabels[pageId] ??
    pageId
      .replace(/\.html$/i, "")
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
      "index.html",
      "about-us.html",
      "team.html",
      "blogs.html",
      "contact-us.html",
      "Policy.html",
    ]),
  },
  {
    title: "Charging",
    links: routesFromPageIds([
      "charge.html",
      "charging-partners.html",
      "become-charging-partner.html",
      "software.html",
      "host.html",
      "mobile.html",
      "appstore.html",
    ]),
  },
  {
    title: "EV Programs",
    links: routesFromPageIds([
      "vehicles.html",
      "driver-network.html",
      "invest.html",
      "invest-form.html",
      "Loader.html",
      "roi-calculator.html",
    ]),
  },
  {
    title: "Other Pages",
    links: routesFromPageIds(["home.html", "coming-soon.html", "testing.html"]),
  },
];

export function getRouteByPageId(pageId) {
  return siteRoutesByPageId.get(pageId);
}

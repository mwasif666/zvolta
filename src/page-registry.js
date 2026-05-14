import notFoundPageData from "./data/pages/not-found/pageData";
import aboutUsPageData from "./data/pages/about-us/pageData";
import appstorePageData from "./data/pages/appstore/pageData";
import becomeChargingPartnerPageData from "./data/pages/become-charging-partner/pageData";
import blogsPageData from "./data/pages/blogs/pageData";
import blogDetailPageData from "./data/pages/blog-detail/pageData";
import careersPageData from "./data/pages/careers/pageData";
import chargePageData from "./data/pages/charge/pageData";
import threeKwChargerPageData from "./data/pages/3kw-charger/pageData";
import sevenKwChargerPageData from "./data/pages/7kw-charger/pageData";
import twentyTwoKwChargerPageData from "./data/pages/22kw-charger/pageData";
import chargingPartnersPageData from "./data/pages/charging-partners/pageData";
import comingSoonPageData from "./data/pages/coming-soon/pageData";
import contactUsPageData from "./data/pages/contact-us/pageData";
import partnersPageData from "./data/pages/partners/pageData";
import driverNetworkPageData from "./data/pages/driver-network/pageData";
import homePageData from "./data/pages/home/pageData";
import hostPageData from "./data/pages/host/pageData";
import homepagePageData from "./data/pages/homepage/pageData";
import investFormPageData from "./data/pages/invest-form/pageData";
import investPageData from "./data/pages/invest/pageData";
import loaderPageData from "./data/pages/loader/pageData";
import mobilePageData from "./data/pages/mobile/pageData";
import legalPageData from "./data/pages/legal/pageData";
import roiCalculatorPageData from "./data/pages/roi-calculator/pageData";
import softwarePageData from "./data/pages/software/pageData";
import storiesPageData from "./data/pages/stories/pageData";
import supportPageData from "./data/pages/support/pageData";
import teamPageData from "./data/pages/team/pageData";
import testingPageData from "./data/pages/testing/pageData";
import vehiclesPageData from "./data/pages/vehicles/pageData";

export const routeEntries = [
  {
    pageId: notFoundPageData.pageId,
    paths: notFoundPageData.paths,
    meta: notFoundPageData.meta,
    load: () => import("./pages/not-found/index.jsx"),
  },
  {
    pageId: aboutUsPageData.pageId,
    paths: aboutUsPageData.paths,
    meta: aboutUsPageData.meta,
    load: () => import("./pages/about-us/index.jsx"),
  },
  {
    pageId: appstorePageData.pageId,
    paths: appstorePageData.paths,
    meta: appstorePageData.meta,
    load: () => import("./pages/appstore/index.jsx"),
  },
  {
    pageId: becomeChargingPartnerPageData.pageId,
    paths: becomeChargingPartnerPageData.paths,
    meta: becomeChargingPartnerPageData.meta,
    load: () => import("./pages/become-charging-partner/index.jsx"),
  },
  {
    pageId: blogsPageData.pageId,
    paths: blogsPageData.paths,
    meta: blogsPageData.meta,
    load: () => import("./pages/blogs/index.jsx"),
  },
  {
    pageId: blogDetailPageData.pageId,
    paths: blogDetailPageData.paths,
    meta: blogDetailPageData.meta,
    load: () => import("./pages/blog-detail/index.jsx"),
  },
  {
    pageId: careersPageData.pageId,
    paths: careersPageData.paths,
    meta: careersPageData.meta,
    load: () => import("./pages/careers/index.jsx"),
  },
  {
    pageId: chargePageData.pageId,
    paths: chargePageData.paths,
    meta: chargePageData.meta,
    load: () => import("./pages/charge/index.jsx"),
  },
  {
    pageId: threeKwChargerPageData.pageId,
    paths: threeKwChargerPageData.paths,
    meta: threeKwChargerPageData.meta,
    load: () => import("./pages/3kw-charger/index.jsx"),
  },
  {
    pageId: sevenKwChargerPageData.pageId,
    paths: sevenKwChargerPageData.paths,
    meta: sevenKwChargerPageData.meta,
    load: () => import("./pages/7kw-charger/index.jsx"),
  },
  {
    pageId: twentyTwoKwChargerPageData.pageId,
    paths: twentyTwoKwChargerPageData.paths,
    meta: twentyTwoKwChargerPageData.meta,
    load: () => import("./pages/22kw-charger/index.jsx"),
  },
  {
    pageId: chargingPartnersPageData.pageId,
    paths: chargingPartnersPageData.paths,
    meta: chargingPartnersPageData.meta,
    load: () => import("./pages/charging-partners/index.jsx"),
  },
  {
    pageId: comingSoonPageData.pageId,
    paths: comingSoonPageData.paths,
    meta: comingSoonPageData.meta,
    load: () => import("./pages/coming-soon/index.jsx"),
  },
  {
    pageId: contactUsPageData.pageId,
    paths: contactUsPageData.paths,
    meta: contactUsPageData.meta,
    load: () => import("./pages/contact-us/index.jsx"),
  },
  {
    pageId: partnersPageData.pageId,
    paths: partnersPageData.paths,
    meta: partnersPageData.meta,
    load: () => import("./pages/partners/index.jsx"),
  },
  {
    pageId: driverNetworkPageData.pageId,
    paths: driverNetworkPageData.paths,
    meta: driverNetworkPageData.meta,
    load: () => import("./pages/driver-network/index.jsx"),
  },
  {
    pageId: homePageData.pageId,
    paths: homePageData.paths,
    meta: homePageData.meta,
    load: () => import("./pages/home/index.jsx"),
  },
  {
    pageId: hostPageData.pageId,
    paths: hostPageData.paths,
    meta: hostPageData.meta,
    load: () => import("./pages/host/index.jsx"),
  },
  {
    pageId: homepagePageData.pageId,
    paths: homepagePageData.paths,
    meta: homepagePageData.meta,
    load: () => import("./pages/homepage/index.jsx"),
  },
  {
    pageId: investFormPageData.pageId,
    paths: investFormPageData.paths,
    meta: investFormPageData.meta,
    load: () => import("./pages/invest-form/index.jsx"),
  },
  {
    pageId: investPageData.pageId,
    paths: investPageData.paths,
    meta: investPageData.meta,
    load: () => import("./pages/invest/index.jsx"),
  },
  {
    pageId: loaderPageData.pageId,
    paths: loaderPageData.paths,
    meta: loaderPageData.meta,
    load: () => import("./pages/loader/index.jsx"),
  },
  {
    pageId: mobilePageData.pageId,
    paths: mobilePageData.paths,
    meta: mobilePageData.meta,
    load: () => import("./pages/mobile/index.jsx"),
  },
  {
    pageId: legalPageData.pageId,
    paths: legalPageData.paths,
    meta: legalPageData.meta,
    load: () => import("./pages/legal/index.jsx"),
  },
  {
    pageId: roiCalculatorPageData.pageId,
    paths: roiCalculatorPageData.paths,
    meta: roiCalculatorPageData.meta,
    load: () => import("./pages/roi-calculator/index.jsx"),
  },
  {
    pageId: softwarePageData.pageId,
    paths: softwarePageData.paths,
    meta: softwarePageData.meta,
    load: () => import("./pages/software/index.jsx"),
  },
  {
    pageId: storiesPageData.pageId,
    paths: storiesPageData.paths,
    meta: storiesPageData.meta,
    load: () => import("./pages/stories/index.jsx"),
  },
  {
    pageId: supportPageData.pageId,
    paths: supportPageData.paths,
    meta: supportPageData.meta,
    load: () => import("./pages/support/index.jsx"),
  },
  {
    pageId: teamPageData.pageId,
    paths: teamPageData.paths,
    meta: teamPageData.meta,
    load: () => import("./pages/team/index.jsx"),
  },
  {
    pageId: testingPageData.pageId,
    paths: testingPageData.paths,
    meta: testingPageData.meta,
    load: () => import("./pages/testing/index.jsx"),
  },
  {
    pageId: vehiclesPageData.pageId,
    paths: vehiclesPageData.paths,
    meta: vehiclesPageData.meta,
    load: () => import("./pages/vehicles/index.jsx"),
  },
];

export const pageRegistry = Object.fromEntries(
  routeEntries.map((entry) => [entry.pageId, entry.load]),
);

import { chargerSpecs } from "../../chargerSpecs";

const spec = chargerSpecs["3kw"];

const threeKwChargerPageData = {
  pageId: spec.pageId,
  routeFolder: "3kw-charger",
  componentFile: "ChargerSpecPage.jsx",
  paths: [spec.path],
  meta: {
    title: spec.seoTitle,
    description: spec.seoDescription,
  },
};

export default threeKwChargerPageData;

import { chargerSpecs } from "../../chargerSpecs";

const spec = chargerSpecs["22kw"];

const twentyTwoKwChargerPageData = {
  pageId: spec.pageId,
  routeFolder: "22kw-charger",
  componentFile: "ChargerSpecPage.jsx",
  paths: [spec.path],
  meta: {
    title: spec.seoTitle,
    description: spec.seoDescription,
  },
};

export default twentyTwoKwChargerPageData;

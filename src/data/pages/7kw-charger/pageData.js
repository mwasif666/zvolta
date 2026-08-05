import { chargerSpecs } from "../../chargerSpecs.js";

const spec = chargerSpecs["7kw"];

const sevenKwChargerPageData = {
  pageId: spec.pageId,
  routeFolder: "7kw-charger",
  componentFile: "ChargerSpecPage.jsx",
  paths: [spec.path],
  meta: {
    title: spec.seoTitle,
    description: spec.seoDescription,
  },
};

export default sevenKwChargerPageData;

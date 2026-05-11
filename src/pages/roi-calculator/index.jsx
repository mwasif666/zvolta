import styles from "./page.module.css";
import pageData from "../../data/pages/roi-calculator/pageData";
import PageView from "../../components/pages/RoiCalculatorPage.jsx";

void styles;

export default function RoiCalculatorPage() {
  return <PageView pageData={pageData} />;
}

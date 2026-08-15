import styles from "./page.module.css";
import pageData from "../../data/pages/roi-calculator/pageData";
import PageView from "../../components/pages/RoiCalculatorPage.jsx";

export default function RoiCalculatorPage() {
  return <PageView pageData={pageData} routeClassName={styles.page} />;
}

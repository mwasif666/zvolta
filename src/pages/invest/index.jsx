import styles from "./page.module.css";
import pageData from "../../data/pages/invest/pageData";
import PageView from "../../components/pages/InvestPage.jsx";

export default function InvestPage() {
  return <PageView pageData={pageData} routeClassName={styles.page} />;
}

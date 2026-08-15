import styles from "./page.module.css";
import pageData from "../../data/pages/charge/pageData";
import PageView from "../../components/pages/ChargePage.jsx";

export default function ChargePage() {
  return <PageView pageData={pageData} routeClassName={styles.routeStyles} />;
}

import styles from "./page.module.css";
import pageData from "../../data/pages/legal/pageData";
import PageView from "../../components/pages/PolicyPage.jsx";

void pageData;

export default function LegalPage() {
  return <PageView routeClassName={styles.routeStyles} />;
}

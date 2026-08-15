import styles from "./page.module.css";
import pageData from "../../data/pages/support/pageData";
import PageView from "../../components/pages/SupportPage.jsx";

export default function SupportPage() {
  return <PageView pageData={pageData} routeClassName={styles.page} />;
}

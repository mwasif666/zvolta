import styles from "./page.module.css";
import pageData from "../../data/pages/software/pageData";
import PageView from "../../components/pages/SoftwarePage.jsx";

export default function SoftwarePage() {
  return <PageView pageData={pageData} routeClassName={styles.routeStyles} />;
}

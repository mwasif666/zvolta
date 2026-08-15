import styles from "./page.module.css";
import pageData from "../../data/pages/careers/pageData";
import PageView from "../../components/pages/CareerPage.jsx";

export default function CareersPage() {
  return <PageView pageData={pageData} routeClassName={styles.routeStyles} />;
}

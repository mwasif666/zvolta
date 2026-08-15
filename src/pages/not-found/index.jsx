import styles from "./page.module.css";
import pageData from "../../data/pages/not-found/pageData";
import PageView from "../../components/pages/NotFoundPage.jsx";

export default function NotFoundPage() {
  return <PageView pageData={pageData} routeClassName={styles.page} />;
}

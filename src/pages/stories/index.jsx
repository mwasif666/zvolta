import styles from "./page.module.css";
import pageData from "../../data/pages/stories/pageData";
import PageView from "../../components/pages/StoriesPage.jsx";

export default function StoriesPage() {
  return <PageView pageData={pageData} routeClassName={styles.page} />;
}

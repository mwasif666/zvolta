import styles from "./page.module.css";
import pageData from "../../data/pages/blog-detail/pageData";
import PageView from "../../components/pages/BlogDetailPage.jsx";

export default function BlogDetailPage() {
  return <PageView pageData={pageData} routeClassName={styles.routeStyles} />;
}

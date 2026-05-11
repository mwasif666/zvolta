import styles from "./page.module.css";
import pageData from "../../data/pages/blogs/pageData";
import PageView from "../../components/pages/BlogsPage.jsx";

void styles;

export default function BlogsPage() {
  return <PageView pageData={pageData} />;
}

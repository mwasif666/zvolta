import styles from "./page.module.css";
import pageData from "../../data/pages/coming-soon/pageData";
import PageView from "../../components/pages/ComingSoonPage.jsx";

void styles;

export default function ComingSoonPage() {
  return <PageView pageData={pageData} />;
}

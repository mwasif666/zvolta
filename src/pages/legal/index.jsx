import styles from "./page.module.css";
import pageData from "../../data/pages/legal/pageData";
import PageView from "../../components/pages/LegalPage.jsx";

void styles;

export default function LegalPage() {
  return <PageView pageData={pageData} />;
}

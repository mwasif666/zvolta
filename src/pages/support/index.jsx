import styles from "./page.module.css";
import pageData from "../../data/pages/support/pageData";
import PageView from "../../components/pages/SupportPage.jsx";

void styles;

export default function SupportPage() {
  return <PageView pageData={pageData} />;
}

import styles from "./page.module.css";
import pageData from "../../data/pages/partners/pageData";
import PageView from "../../components/pages/PartnersPage.jsx";

void styles;

export default function PartnersPage() {
  return <PageView pageData={pageData} />;
}

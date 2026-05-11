import styles from "./page.module.css";
import pageData from "../../data/pages/invest-form/pageData";
import PageView from "../../components/pages/InvestFormPage.jsx";

void styles;

export default function InvestFormPage() {
  return <PageView pageData={pageData} />;
}

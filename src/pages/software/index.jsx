import styles from "./page.module.css";
import pageData from "../../data/pages/software/pageData";
import PageView from "../../components/pages/SoftwarePage.jsx";

void styles;

export default function SoftwarePage() {
  return <PageView pageData={pageData} />;
}

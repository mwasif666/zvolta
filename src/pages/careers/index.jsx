import styles from "./page.module.css";
import pageData from "../../data/pages/careers/pageData";
import PageView from "../../components/pages/CareerPage.jsx";

void styles;

export default function CareersPage() {
  return <PageView pageData={pageData} />;
}

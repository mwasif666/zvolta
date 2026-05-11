import styles from "./page.module.css";
import pageData from "../../data/pages/testing/pageData";
import PageView from "../../components/pages/TestingPage.jsx";

void styles;

export default function TestingPage() {
  return <PageView pageData={pageData} />;
}

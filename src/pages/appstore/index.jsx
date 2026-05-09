import styles from "./page.module.css";
import pageData from "../../data/pages/appstore/pageData";
import PageView from "../../components/pages/AppstorePage.jsx";

void styles;

export default function AppstorePage() {
  return <PageView pageData={pageData} />;
}

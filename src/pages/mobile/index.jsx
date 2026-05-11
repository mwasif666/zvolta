import styles from "./page.module.css";
import pageData from "../../data/pages/mobile/pageData";
import PageView from "../../components/pages/MobilePage.jsx";

void styles;

export default function MobilePage() {
  return <PageView pageData={pageData} />;
}

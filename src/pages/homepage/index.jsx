import styles from "./page.module.css";
import pageData from "../../data/pages/homepage/pageData";
import PageView from "../../components/pages/IndexPage.jsx";

void styles;

export default function HomepagePage() {
  return <PageView pageData={pageData} />;
}

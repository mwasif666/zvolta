import styles from "./page.module.css";
import pageData from "../../data/pages/about-us/pageData";
import PageView from "../../components/pages/AboutUsPage.jsx";

void styles;

export default function AboutUsPage() {
  return <PageView pageData={pageData} />;
}

import styles from "./page.module.css";
import pageData from "../../data/pages/home/pageData";
import PageView from "../../components/pages/HomePage.jsx";

void styles;

export default function HomePage() {
  return <PageView pageData={pageData} />;
}

import styles from "./page.module.css";
import pageData from "../../data/pages/team/pageData";
import PageView from "../../components/pages/TeamPage.jsx";

void styles;

export default function TeamPage() {
  return <PageView pageData={pageData} />;
}

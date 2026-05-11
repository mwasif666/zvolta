import styles from "./page.module.css";
import pageData from "../../data/pages/loader/pageData";
import PageView from "../../components/pages/LoaderPage.jsx";

void styles;

export default function LoaderPage() {
  return <PageView pageData={pageData} />;
}

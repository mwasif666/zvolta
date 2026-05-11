import styles from "./page.module.css";
import pageData from "../../data/pages/host/pageData";
import PageView from "../../components/pages/HostPage.jsx";

void styles;

export default function HostPage() {
  return <PageView pageData={pageData} />;
}

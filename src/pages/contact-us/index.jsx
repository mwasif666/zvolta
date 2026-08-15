import styles from "./page.module.css";
import pageData from "../../data/pages/contact-us/pageData";
import PageView from "../../components/pages/ContactUsPage.jsx";

export default function ContactUsPage() {
  return <PageView pageData={pageData} routeClassName={styles.page} />;
}

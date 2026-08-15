import styles from "./page.module.css";
import pageData from "../../data/pages/charging-partners/pageData";
import PageView from "../../components/pages/ChargingPartnersPage.jsx";

export default function ChargingPartnersPage() {
  return <PageView pageData={pageData} routeClassName={styles.page} />;
}

import styles from "./page.module.css";
import pageData from "../../data/pages/become-charging-partner/pageData";
import PageView from "../../components/pages/BecomeChargingPartnerPage.jsx";

export default function BecomeChargingPartnerPage() {
  return <PageView pageData={pageData} routeClassName={styles.routeStyles} />;
}

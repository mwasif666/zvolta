import styles from "./page.module.css";
import pageData from "../../data/pages/become-charging-partner/pageData";
import PageView from "../../components/pages/BecomeChargingPartnerPage.jsx";

void styles;

export default function BecomeChargingPartnerPage() {
  return <PageView pageData={pageData} />;
}

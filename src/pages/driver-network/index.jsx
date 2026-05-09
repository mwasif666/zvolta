import styles from "./page.module.css";
import pageData from "../../data/pages/driver-network/pageData";
import PageView from "../../components/pages/DriverNetworkPage.jsx";

void styles;

export default function DriverNetworkPage() {
  return <PageView pageData={pageData} />;
}

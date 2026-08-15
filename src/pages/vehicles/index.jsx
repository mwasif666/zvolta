import styles from "./page.module.css";
import pageData from "../../data/pages/vehicles/pageData";
import PageView from "../../components/pages/VehiclesPage.jsx";

export default function VehiclesPage() {
  return <PageView pageData={pageData} routeClassName={styles.routeStyles} />;
}

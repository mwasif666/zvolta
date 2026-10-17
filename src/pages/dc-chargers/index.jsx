import DcChargersPage from "../../components/pages/DcChargersPage";
import styles from "./page.module.css";
import "./cita-overrides.css";

export default function DcChargersRoute() {
  return <DcChargersPage routeClassName={styles.routeStyles} />;
}

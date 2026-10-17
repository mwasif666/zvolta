import CitaChargerDetailPage from "../../components/pages/CitaChargerDetailPage";
import styles from "../cita-ev-chargers/page.module.css";
import "../cita-ev-chargers/premium.module.css";

export default function CitaChargerDetailRoute() {
  return <CitaChargerDetailPage routeClassName={styles.routeStyles} />;
}

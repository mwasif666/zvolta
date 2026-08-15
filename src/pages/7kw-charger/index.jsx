import styles from "./page.module.css";
import { chargerSpecs } from "../../data/chargerSpecs";
import PageView from "../../components/pages/ChargerSpecPage.jsx";

export default function SevenKwChargerPage() {
  return <PageView spec={chargerSpecs["7kw"]} routeClassName={styles.page} />;
}

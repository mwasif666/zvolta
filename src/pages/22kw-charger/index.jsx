import styles from "./page.module.css";
import { chargerSpecs } from "../../data/chargerSpecs";
import PageView from "../../components/pages/ChargerSpecPage.jsx";

export default function TwentyTwoKwChargerPage() {
  return <PageView spec={chargerSpecs["22kw"]} routeClassName={styles.page} />;
}

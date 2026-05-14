import styles from "./page.module.css";
import { chargerSpecs } from "../../data/chargerSpecs";
import PageView from "../../components/pages/ChargerSpecPage.jsx";

void styles;

export default function ThreeKwChargerPage() {
  return <PageView spec={chargerSpecs["3kw"]} />;
}

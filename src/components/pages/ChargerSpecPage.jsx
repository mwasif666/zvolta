import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import {
  formatStoreCurrency,
  useStorefrontSettings,
} from "../../context/StorefrontSettingsContext";
import { useCommerceData } from "../../hooks/useCommerceData";
import { findChargerProduct } from "../../lib/chargerCatalog";
import { commerceApi } from "../../services/api";
import styles from "./ChargerSpecPage.module.css";
import { DecisionSection } from "./ChargerSpecPage/sections/DecisionSection.jsx";
import { EnvironmentSection } from "./ChargerSpecPage/sections/EnvironmentSection.jsx";
import { ThreeKwHero } from "./ChargerSpecPage/sections/ThreeKwHero.jsx";
import { ThreeKwHostWhoBlock } from "./ChargerSpecPage/sections/ThreeKwHostWhoBlock.jsx";
import { ThreeKwQuickSection } from "./ChargerSpecPage/sections/ThreeKwQuickSection.jsx";
import { UseCasesRecommendationFaq } from "./ChargerSpecPage/sections/UseCasesRecommendationFaq.jsx";

export default function ChargerSpecPage({ routeClassName = "", spec }) {
  const [showHostingSections, setShowHostingSections] = useState(false);
  const { addItem } = useCart();
  const { settings } = useStorefrontSettings();
  const navigate = useNavigate();
  const catalog = useCommerceData(
    () => commerceApi.allProducts({ sort: "featured" }),
    [],
  );
  const product = findChargerProduct(catalog.data, spec.power);
  const isSoldOut = Boolean(product) && Number(product.stock) <= 0;

  function shopNow() {
    if (!product) {
      navigate("/products");
      return;
    }

    addItem(product);
    navigate("/checkout");
  }

  return (
    <div
      className={`three-page font-sans ${styles.routeStyles} ${routeClassName}`}
    >
      <ThreeKwHero
        shopDisabled={catalog.loading || isSoldOut}
        shopLabel={
          catalog.loading
            ? "Loading price"
            : isSoldOut
              ? "Out of stock"
              : "Shop now"
        }
        shopPrice={
          product && !isSoldOut
            ? formatStoreCurrency(
                product.discountPrice || product.price,
                settings.currency,
              )
            : ""
        }
        onShopNow={shopNow}
        spec={spec}
      />
      <ThreeKwQuickSection spec={spec} />
      <EnvironmentSection spec={spec} />
      <DecisionSection spec={spec} />
      <UseCasesRecommendationFaq spec={spec} />
      <ThreeKwHostWhoBlock
        showHostingSections={showHostingSections}
        onShowHostingSections={() => setShowHostingSections(true)}
        onHideHostingSections={() => setShowHostingSections(false)}
      />
    </div>
  );
}

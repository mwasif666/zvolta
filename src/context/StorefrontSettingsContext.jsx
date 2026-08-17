import { createContext, useContext, useMemo } from "react";
import { useCommerceData } from "../hooks/useCommerceData";
import { commerceApi } from "../services/api";

export const defaultStorefrontSettings = {
  storeName: "ZVolta",
  storeTagline: "",
  supportEmail: "support@zvolta.com",
  supportPhone: "+923104446529",
  whatsappPhone: "+923104446529",
  address: "",
  currency: { code: "PKR", symbol: "Rs.", position: "before" },
  socialLinks: {
    facebook: "https://www.facebook.com/share/1FUNJfnPd5/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/zvolta.pk",
    tiktok: "",
    youtube: "https://www.youtube.com/@zvoltaPK",
    x: "",
    threads: "",
    linkedin: "",
  },
  seo: {
    metaTitle: "ZVolta | Electric Mobility in Pakistan",
    metaDescription:
      "ZVolta builds reliable electric vehicle charging and mobility solutions across Pakistan.",
    siteIconUrl: "",
  },
  branding: { navbarLogoUrl: "", footerLogoUrl: "" },
  announcement: { enabled: false, text: "" },
  popupBanner: { enabled: false, imageUrl: "", altText: "Promotional banner" },
};

function mergeSettings(settings) {
  if (!settings) return defaultStorefrontSettings;

  return {
    ...defaultStorefrontSettings,
    ...settings,
    currency: { ...defaultStorefrontSettings.currency, ...settings.currency },
    socialLinks: {
      ...defaultStorefrontSettings.socialLinks,
      ...settings.socialLinks,
    },
    seo: { ...defaultStorefrontSettings.seo, ...settings.seo },
    branding: { ...defaultStorefrontSettings.branding, ...settings.branding },
    announcement: {
      ...defaultStorefrontSettings.announcement,
      ...settings.announcement,
    },
    popupBanner: {
      ...defaultStorefrontSettings.popupBanner,
      ...settings.popupBanner,
    },
  };
}

export function formatStoreCurrency(
  value,
  currency = defaultStorefrontSettings.currency,
) {
  const amount = Number(value || 0);
  const code = String(currency?.code || "PKR").toUpperCase();
  const symbol = currency?.symbol || code;
  const formatted = new Intl.NumberFormat("en-PK", {
    maximumFractionDigits: 0,
  }).format(amount);
  return currency?.position === "after"
    ? `${formatted} ${symbol}`
    : `${symbol} ${formatted}`;
}

const StorefrontSettingsContext = createContext({
  settings: defaultStorefrontSettings,
  loading: false,
  error: "",
  refetch: () => {},
});

export function StorefrontSettingsProvider({ children }) {
  const query = useCommerceData(commerceApi.settings, []);
  const settings = useMemo(() => mergeSettings(query.data), [query.data]);
  const value = useMemo(() => ({ ...query, settings }), [query, settings]);

  return (
    <StorefrontSettingsContext.Provider value={value}>
      {children}
    </StorefrontSettingsContext.Provider>
  );
}

export function useStorefrontSettings() {
  return useContext(StorefrontSettingsContext);
}

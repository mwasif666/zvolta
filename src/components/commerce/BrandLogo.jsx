import { useStorefrontSettings } from "../../context/StorefrontSettingsContext";

// The same settings key and fallback asset the footer reads, so commerce pages
// can never drift onto a different logo than the rest of the site.
export const DEFAULT_LOCKUP_LOGO = "/img/full_logowhite.png";

/** Full ZVolta wordmark, for light-on-dark surfaces. */
export function BrandLockup({ className }) {
  const { settings } = useStorefrontSettings();

  return (
    <img
      src={settings.branding.footerLogoUrl || DEFAULT_LOCKUP_LOGO}
      alt={settings.storeName}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}

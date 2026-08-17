import { Helmet } from "react-helmet-async";
import { useStorefrontSettings } from "../../context/StorefrontSettingsContext";

const SITE_URL = "https://zvolta.com";
const DEFAULT_IMAGE = `${SITE_URL}/img/og-image.jpg`;

function absoluteUrl(pathname) {
  const normalizedPath = pathname === "/home" ? "/" : pathname;
  return new URL(normalizedPath, SITE_URL).toString();
}

export function PageSeo({ meta = {}, pathname = "/" }) {
  const { settings } = useStorefrontSettings();
  const title = meta.title ?? settings.seo.metaTitle;
  const description = meta.description ?? settings.seo.metaDescription;
  const canonical = absoluteUrl(pathname);
  const image = meta.image
    ? new URL(meta.image, SITE_URL).toString()
    : DEFAULT_IMAGE;

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={settings.storeName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {settings.seo.siteIconUrl ? (
        <link rel="icon" href={settings.seo.siteIconUrl} />
      ) : null}
      {meta.noIndex ? <meta name="robots" content="noindex, nofollow" /> : null}
    </Helmet>
  );
}

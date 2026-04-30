import { Link } from "react-router-dom";
import { getCanonicalPathname } from "../routes";

function isInternalHref(href) {
  return (
    typeof href === "string" && href.startsWith("/") && !href.startsWith("//")
  );
}

function getRouterDestination(destination) {
  const url = new URL(destination, "https://zvolta.local");
  const pathname = getCanonicalPathname(url.pathname);

  return `${pathname}${url.search}${url.hash}`;
}

export function SmartLink({ href, to, target, download, rel, ...props }) {
  const destination = to ?? href;
  const isExternalLink =
    !destination ||
    target === "_blank" ||
    typeof download !== "undefined" ||
    !isInternalHref(destination);

  if (isExternalLink) {
    const safeRel = target === "_blank" ? (rel ?? "noopener noreferrer") : rel;

    return (
      <a
        href={href ?? to}
        target={target}
        download={download}
        rel={safeRel}
        {...props}
      />
    );
  }

  return <Link to={getRouterDestination(destination)} rel={rel} {...props} />;
}

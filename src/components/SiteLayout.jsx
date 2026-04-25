import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import { footerLinkGroups, getRouteByPageId } from "../routes";
import { SmartLink } from "./SmartLink";

const MENU_CLOSE_DURATION_MS = 620;

function isRouteActive(route, pathname) {
  const normalizedPathname = pathname.toLowerCase();

  return route.paths.some(
    (routePath) => routePath.toLowerCase() === normalizedPathname,
  );
}

function MenuIcon({ isOpen }) {
  if (isOpen) {
    return (
      <span aria-hidden="true" className="relative h-4 w-4">
        <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 rotate-45 rounded-full bg-current" />
        <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 -rotate-45 rounded-full bg-current" />
      </span>
    );
  }

  return (
    <span aria-hidden="true" className="grid w-4 gap-1">
      <span className="h-px rounded-full bg-current" />
      <span className="h-px rounded-full bg-current" />
      <span className="h-px rounded-full bg-current" />
    </span>
  );
}

function MenuCardIcon({ type }) {
  const commonProps = {
    "aria-hidden": "true",
    viewBox: "0 0 24 24",
    className: "h-8 w-8",
    fill: "currentColor",
  };

  if (type === "pin") {
    return (
      <svg {...commonProps}>
        <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
      </svg>
    );
  }

  if (type === "laptop") {
    return (
      <svg {...commonProps}>
        <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5V15H4V5.5Zm-2 11h20V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1.5Z" />
      </svg>
    );
  }

  if (type === "people") {
    return (
      <svg {...commonProps}>
        <path d="M8.5 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM2.5 19.5c.4-3.7 2.55-6 6-6 1.2 0 2.23.28 3.08.8-1.1 1.1-1.78 2.67-2.08 4.7a.45.45 0 0 1-.45.5H2.5Zm10.1 0a.5.5 0 0 1-.5-.58c.48-3.5 2.58-5.42 5.4-5.42 2.85 0 5 1.98 5 6h-9.9Z" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M4 21V9l8-5 8 5v12h-6v-6h-4v6H4Zm3-2h1v-2H7v2Zm0-4h1v-2H7v2Zm0-4h1V9H7v2Zm4 0h2V9h-2v2Zm5 0h1V9h-1v2Zm0 4h1v-2h-1v2Zm0 4h1v-2h-1v2Z" />
    </svg>
  );
}

function DockLink({ route, pathname, children, className = "", onClick }) {
  const isActive = isRouteActive(route, pathname);

  return (
    <SmartLink
      href={route.path}
      className={[
        "dock-pill-link relative z-10 rounded-full px-4 py-2 text-xs font-bold transition-colors",
        isActive ? "bg-white/10 text-white" : "text-white/60 hover:text-white",
        className,
      ].join(" ")}
      onClick={onClick}
    >
      {children ?? route.shortLabel}
    </SmartLink>
  );
}

function MenuLink({ item, pathname, onClick, index, totalCount }) {
  const { route, label } = item;
  const closeDelay = Math.max(0, totalCount - index - 1) * 45;

  return (
    <SmartLink
      href={route.path}
      style={{
        "--menu-link-delay": `${260 + index * 55}ms`,
        "--menu-link-close-delay": `${closeDelay}ms`,
      }}
      className={[
        "mobile-menu-link site-menu-link flex items-center justify-between text-5xl font-bold transition-colors sm:text-6xl md:text-7xl",
        "text-white hover:text-emerald-500",
      ].join(" ")}
      onClick={onClick}
    >
      {label}
    </SmartLink>
  );
}

function getIsSmoothFooterRoute(pathname) {
  const normalizedPathname = pathname.toLowerCase();

  return ["/", "/index.html", "/home", "/home.html"].includes(
    normalizedPathname,
  );
}

function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuMounted, setIsMenuMounted] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);
  const closeTimerRef = useRef(null);
  const { pathname } = useLocation();
  const homeRoute = getRouteByPageId("index.html");
  const hostingRoute = getRouteByPageId("charging-partners.html");
  const chargingRoute = getRouteByPageId("charge.html");
  const softwareRoute = getRouteByPageId("software.html");
  const companyRoute = getRouteByPageId("coming-soon.html");
  const dockRoutes = useMemo(
    () => [hostingRoute, chargingRoute, softwareRoute].filter(Boolean),
    [hostingRoute, chargingRoute, softwareRoute],
  );
  const menuLinks = useMemo(
    () =>
      [
        homeRoute ? { route: homeRoute, label: "Home" } : null,
        hostingRoute ? { route: hostingRoute, label: "Hosting" } : null,
        chargingRoute ? { route: chargingRoute, label: "Charging" } : null,
        softwareRoute ? { route: softwareRoute, label: "Software" } : null,
      ].filter(Boolean),
    [chargingRoute, homeRoute, hostingRoute, softwareRoute],
  );
  const menuCards = useMemo(
    () =>
      [
        hostingRoute
          ? {
              route: hostingRoute,
              title: "Host A Charger",
              description: "Turn your parking into revenue.",
              icon: "building",
            }
          : null,
        chargingRoute
          ? {
              route: chargingRoute,
              title: "Find Stations",
              description: "Locate chargers nearby instantly.",
              icon: "pin",
            }
          : null,
        softwareRoute
          ? {
              route: softwareRoute,
              title: "Software",
              description: "Powerful tools for operators.",
              icon: "laptop",
            }
          : null,
        companyRoute
          ? {
              route: companyRoute,
              title: "Company",
              description: "Our mission and careers.",
              icon: "people",
            }
          : null,
      ].filter(Boolean),
    [chargingRoute, companyRoute, hostingRoute, softwareRoute],
  );

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openMobileMenu = () => {
    clearCloseTimer();
    setIsMenuMounted(true);
    setIsMenuClosing(false);
    setIsMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    if (!isMenuMounted) {
      return;
    }

    clearCloseTimer();
    setIsMobileMenuOpen(false);
    setIsMenuClosing(true);

    closeTimerRef.current = window.setTimeout(() => {
      setIsMenuMounted(false);
      setIsMenuClosing(false);
      closeTimerRef.current = null;
    }, MENU_CLOSE_DURATION_MS);
  };

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen && !isMenuClosing) {
      closeMobileMenu();
      return;
    }

    openMobileMenu();
  };

  useEffect(() => {
    document.body.style.overflow = isMenuMounted ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuMounted]);

  useEffect(() => {
    return () => {
      clearCloseTimer();
    };
  }, []);

  return (
    <header className="site-header pointer-events-none fixed inset-x-0 top-0 z-[950]">
      <nav
        className="pointer-events-auto fixed left-1/2 top-6 flex max-w-[calc(100vw-2rem)] -translate-x-1/2 items-center gap-1 rounded-full border border-white/10 bg-[#111]/90 px-2 py-1.5 shadow-2xl ring-1 ring-white/5 backdrop-blur-xl"
        aria-label="Main"
      >
        {homeRoute ? (
          <SmartLink
            href={homeRoute.path}
            className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white/80 transition-colors hover:text-white"
            aria-label="ZVolta home"
            onClick={closeMobileMenu}
          >
            <img
              src="/img/symbol logo.png"
              alt="ZVolta"
              className="h-6 w-auto"
            />
          </SmartLink>
        ) : null}
        <div className="mx-1 hidden h-5 w-px bg-white/10 sm:block" />
        <div className="hidden items-center gap-1 sm:flex">
          {dockRoutes.map((route) => (
            <DockLink key={route.pageId} route={route} pathname={pathname}>
              {route.pageId === "charging-partners.html"
                ? "Hosting"
                : route.pageId === "charge.html"
                  ? "Charging"
                  : route.shortLabel}
            </DockLink>
          ))}
        </div>
        <div className="mx-1 h-5 w-px bg-white/10" />

        <button
          type="button"
          id="site-menu-button"
          className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full  text-white shadow-lg transition-all duration-300 hover:scale-105"
          aria-controls="site-mobile-menu"
          aria-expanded={isMobileMenuOpen && !isMenuClosing}
          onClick={toggleMobileMenu}
        >
          <span className="sr-only">Open menu</span>
          <MenuIcon isOpen={isMobileMenuOpen} />
        </button>
      </nav>

      {isMenuMounted ? (
        <div
          id="site-mobile-menu"
          className={`site-menu-overlay pointer-events-auto fixed inset-0 z-[10000] ${
            isMenuClosing ? "is-closing" : ""
          }`}
        >
          <div className="site-menu-backdrop absolute inset-0 bg-zinc-200/95 backdrop-blur-3xl" />
          <button
            type="button"
            id="site-menu-close"
            className="site-menu-close fixed right-6 top-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-black text-white shadow-2xl transition-all duration-300 hover:rotate-90 hover:bg-emerald-600"
            onClick={closeMobileMenu}
          >
            <span className="sr-only">Close menu</span>
            <MenuIcon isOpen />
          </button>

          <div className="h-[100dvh] overflow-y-auto overflow-x-hidden p-4 pt-16 sm:p-6 sm:pt-16 lg:p-10 lg:pt-14">
            <div className="mx-auto grid min-h-full w-full max-w-[1820px] grid-cols-1 gap-4 lg:grid-cols-12">
              <div className="relative flex min-h-[500px] flex-col justify-between overflow-hidden rounded-[2rem] bg-black p-8 sm:p-10 lg:col-span-5">
                <div className="pointer-events-none absolute right-8 top-8 h-32 w-32 rounded-full bg-[radial-gradient(#10b981_2px,transparent_2px)] opacity-20 [background-size:8px_8px]" />
                <nav className="relative z-10 mt-4 flex flex-col gap-4">
                  {menuLinks.map((route, index) => (
                    <div key={route.route.pageId} className="site-menu-nav-row">
                      {index > 0 ? (
                        <div className="mb-4 h-px w-full bg-white/10" />
                      ) : null}
                      <MenuLink
                        item={route}
                        index={index}
                        totalCount={menuLinks.length}
                        pathname={pathname}
                        onClick={closeMobileMenu}
                      />
                    </div>
                  ))}
                </nav>

                <div className="relative z-10 mt-12">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                    Contact us
                  </p>
                  <SmartLink
                    href="mailto:support@zvolta.com"
                    className="border-b border-transparent pb-1 font-mono text-xl text-white transition-colors hover:border-emerald-400 hover:text-emerald-400 md:text-2xl"
                  >
                    support@zvolta.com
                  </SmartLink>
                </div>
              </div>

              <div className="grid content-start gap-4 md:grid-cols-2 lg:col-span-7">
                {menuCards.map((card, index) => (
                  <SmartLink
                    key={card.title}
                    href={card.route.path}
                    style={{
                      "--menu-card-delay": `${120 + index * 80}ms`,
                      "--menu-card-close-delay": `${
                        Math.max(0, menuCards.length - index - 1) * 55
                      }ms`,
                    }}
                    className="menu-card site-menu-card group relative flex h-[160px] flex-col justify-center overflow-hidden rounded-[2rem] bg-black p-8 md:h-[160px]"
                    onClick={closeMobileMenu}
                  >
                    <div className="absolute inset-0 origin-bottom scale-y-0 bg-zinc-900 transition-transform duration-500 group-hover:scale-y-100" />
                    <div className="absolute right-8 top-1/2 z-10 flex h-20 w-20 -translate-y-1/2 items-center justify-center rounded-md bg-zinc-900 text-emerald-500 transition-colors duration-300 group-hover:bg-emerald-500 group-hover:text-black">
                      <MenuCardIcon type={card.icon} />
                    </div>
                    <div className="relative z-10 max-w-[70%]">
                      <h3 className="text-2xl font-bold text-white">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-zinc-500 transition-colors group-hover:text-zinc-300">
                        {card.description}
                      </p>
                    </div>
                  </SmartLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function SiteFooterHost() {
  const { pathname } = useLocation();
  const isSmoothFooterRoute = getIsSmoothFooterRoute(pathname);
  const [portalTarget, setPortalTarget] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const timers = [];
    const animationFrames = [];

    const refreshSmoothScroll = () => {
      window.ScrollTrigger?.refresh?.();
    };

    const findTarget = () => {
      if (cancelled) {
        return;
      }

      const target = isSmoothFooterRoute
        ? document.querySelector(".legacy-page-shell #smooth-content main")
        : null;

      setPortalTarget(target);

      if (target) {
        timers.push(window.setTimeout(refreshSmoothScroll, 60));
        timers.push(window.setTimeout(refreshSmoothScroll, 500));
      }
    };

    setPortalTarget(null);

    if (isSmoothFooterRoute) {
      animationFrames.push(window.requestAnimationFrame(findTarget));
      timers.push(window.setTimeout(findTarget, 120));
      timers.push(window.setTimeout(findTarget, 500));
      timers.push(window.setTimeout(findTarget, 1200));
    }

    return () => {
      cancelled = true;
      timers.forEach((timer) => window.clearTimeout(timer));
      animationFrames.forEach((frame) => window.cancelAnimationFrame(frame));
    };
  }, [isSmoothFooterRoute, pathname]);

  const footer = <SiteFooter />;

  if (isSmoothFooterRoute) {
    return portalTarget ? createPortal(footer, portalTarget) : null;
  }

  return footer;
}

function SiteFooter() {
  return (
    <footer className="site-footer bg-zinc-950 text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_2fr] lg:px-8">
        <div>
          <SmartLink
            href="/"
            className="inline-flex rounded-md p-2 transition-colors hover:bg-white/10"
            aria-label="ZVolta home"
          >
            <img
              src="/img/full_logowhite.png"
              alt="ZVolta"
              className="h-10 w-auto max-w-[160px] object-contain"
            />
          </SmartLink>
          <p className="mt-5 max-w-sm text-sm leading-6 text-zinc-400">
            Pakistan's clean mobility network for charging, vehicles, drivers,
            hosts, and operators.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <SmartLink
              href="mailto:support@zvolta.com"
              className="rounded-md border border-white/15 px-3 py-2 text-sm text-zinc-200 transition-colors hover:border-emerald-400 hover:text-white"
            >
              support@zvolta.com
            </SmartLink>
            <SmartLink
              href="tel:+923104446529"
              className="rounded-md border border-white/15 px-3 py-2 text-sm text-zinc-200 transition-colors hover:border-emerald-400 hover:text-white"
            >
              +92 310 444 6529
            </SmartLink>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {footerLinkGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-semibold uppercase text-zinc-300">
                {group.title}
              </h2>
              <ul className="mt-4 grid gap-3">
                {group.links.map((route) => (
                  <li key={route.pageId}>
                    <SmartLink
                      href={route.path}
                      className="text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                      {route.label}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 ZVolta. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <SmartLink href="/policy" className="hover:text-zinc-200">
              Policies
            </SmartLink>
            <SmartLink href="/contact-us" className="hover:text-zinc-200">
              Contact
            </SmartLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }) {
  return (
    <>
      <SiteHeader />
      <main className="site-main">{children}</main>
      <SiteFooterHost />
    </>
  );
}

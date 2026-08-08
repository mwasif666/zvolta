import { useEffect, useMemo, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { getRouteByPageId } from "../routes";
import { useScrollReveal } from "../lib/useScrollReveal";
import { SiteRouteLoader } from "./layout/SiteRouteLoader";
import { SiteFooter } from "./layout/SiteFooter";

const HOMEPAGE_PATHS = new Set(["/", "/home"]);

const MENU_CLOSE_DURATION_MS = 900;

function isRouteActive(route, pathname) {
  const normalizedPathname = pathname.toLowerCase();

  return route.paths.some(
    (routePath) => routePath.toLowerCase() === normalizedPathname,
  );
}

function MenuIcon({ isOpen }) {
  return (
    <span
      aria-hidden="true"
      className={`site-menu-toggle-icon relative h-4 w-4 ${
        isOpen ? "is-open" : ""
      }`}
    >
      <span className="site-menu-toggle-bar bar-1" />
      <span className="site-menu-toggle-bar bar-2" />
      <span className="site-menu-toggle-bar bar-3" />
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

  if (type === "briefcase") {
    return (
      <svg {...commonProps}>
        <path d="M9 4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2h4.25A2.75 2.75 0 0 1 22 8.75v8.5A2.75 2.75 0 0 1 19.25 20H4.75A2.75 2.75 0 0 1 2 17.25v-8.5A2.75 2.75 0 0 1 4.75 6H9V4Zm4 2V4h-2v2h2Zm7 6.2V8.75A.75.75 0 0 0 19.25 8H4.75A.75.75 0 0 0 4 8.75v3.45c2.35 1.12 4.94 1.68 8 1.68s5.65-.56 8-1.68ZM4 14.35v2.9c0 .41.34.75.75.75h14.5c.41 0 .75-.34.75-.75v-2.9c-2.42 1-5.02 1.5-8 1.5s-5.58-.5-8-1.5Z" />
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
  return (
    <NavLink
      to={route.path}
      className={({ isActive }) =>
        [
          "dock-pill-link relative z-10 rounded-full px-4 py-2 text-xs font-bold transition-colors",
          isActive || isRouteActive(route, pathname)
            ? "bg-white/10 text-white"
            : "text-white/60 hover:text-white",
          className,
        ].join(" ")
      }
      onClick={onClick}
    >
      {children ?? route.shortLabel}
    </NavLink>
  );
}

function MenuLink({ item, onClick, openDelay, closeDelay }) {
  const { route, label } = item;

  return (
    <NavLink
      to={route.path}
      style={{
        "--menu-link-delay": `${openDelay}ms`,
        "--menu-link-close-delay": `${closeDelay}ms`,
      }}
      className={[
        "mobile-menu-link site-menu-link flex items-center justify-between text-5xl font-bold transition-colors sm:text-6xl md:text-7xl",
        "text-white hover:text-emerald-500",
      ].join(" ")}
      onClick={onClick}
    >
      {label}
    </NavLink>
  );
}

function SiteHeader() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuMounted, setIsMenuMounted] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);
  const closeTimerRef = useRef(null);
  const menuDialogRef = useRef(null);
  const menuTriggerRef = useRef(null);
  const lastScrollYRef = useRef(0);
  const { pathname } = useLocation();
  const homeRoute = getRouteByPageId("index");
  const hostingRoute = getRouteByPageId("host");
  const chargingRoute = getRouteByPageId("charge");
  const softwareRoute = getRouteByPageId("software");
  const companyRoute = getRouteByPageId("about-us");
  const careersRoute = getRouteByPageId("careers");
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
    [careersRoute, chargingRoute, homeRoute, hostingRoute, softwareRoute],
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
              description: "Our mission and story.",
              icon: "people",
            }
          : null,
        careersRoute
          ? {
              route: careersRoute,
              title: "Careers",
              description: "Join the EV mobility team.",
              icon: "briefcase",
            }
          : null,
      ].filter(Boolean),
    [careersRoute, chargingRoute, companyRoute, hostingRoute, softwareRoute],
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

    if (isMenuMounted) {
      setIsHeaderVisible(true);
      window.requestAnimationFrame(() => {
        menuDialogRef.current
          ?.querySelector("button, a[href], input, select, textarea")
          ?.focus();
      });
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuMounted]);

  useEffect(() => {
    if (!isMenuMounted) {
      return undefined;
    }

    const handleMenuKeys = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMobileMenu();
        menuTriggerRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusable = [
        ...menuDialogRef.current.querySelectorAll(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ].filter((element) => element.offsetParent !== null);

      if (focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable.at(-1);

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleMenuKeys);
    return () => document.removeEventListener("keydown", handleMenuKeys);
  }, [isMenuMounted]);

  useEffect(() => {
    clearCloseTimer();
    setIsMobileMenuOpen(false);
    setIsMenuMounted(false);
    setIsMenuClosing(false);
    document.body.style.overflow = "";
    setIsHeaderVisible(true);
    lastScrollYRef.current = window.scrollY;
  }, [pathname]);

  useEffect(() => {
    const updateHeaderForScroll = (currentScrollY, scrollDelta) => {
      if (currentScrollY <= 24 || isMenuMounted) {
        setIsHeaderVisible(true);
        lastScrollYRef.current = currentScrollY;
        return;
      }

      if (Math.abs(scrollDelta) < 8) {
        return;
      }

      setIsHeaderVisible(scrollDelta < 0);
      lastScrollYRef.current = currentScrollY;
    };

    const handleScroll = () => {
      const currentScrollY = Math.max(0, window.scrollY);
      const scrollDelta = currentScrollY - lastScrollYRef.current;

      updateHeaderForScroll(currentScrollY, scrollDelta);
    };

    const handleVirtualScroll = (event) => {
      const currentScrollY = Math.max(0, event.detail?.scrollY ?? 0);
      const scrollDelta = Number(event.detail?.delta ?? 0);

      updateHeaderForScroll(currentScrollY, scrollDelta);
    };

    const handleWheelFallback = (event) => {
      if (document.querySelector("#smooth-wrapper")) {
        const currentScrollY = Math.max(
          0,
          lastScrollYRef.current + event.deltaY,
        );
        updateHeaderForScroll(currentScrollY, event.deltaY);
        return;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("zvolta:virtual-scroll", handleVirtualScroll);
    window.addEventListener("wheel", handleWheelFallback, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("zvolta:virtual-scroll", handleVirtualScroll);
      window.removeEventListener("wheel", handleWheelFallback);
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
        className="pointer-events-auto fixed left-1/2 top-6 flex max-w-[calc(100vw-2rem)] items-center gap-1 rounded-full border border-white/10 bg-[#111]/90 px-2 py-1.5 shadow-2xl ring-1 ring-white/5 backdrop-blur-xl transition-[transform,opacity] duration-500 ease-out"
        style={{
          transform: isHeaderVisible
            ? "translate(-50%, 0)"
            : "translate(-50%, -240%)",
          opacity: isHeaderVisible ? 1 : 0,
          pointerEvents: isHeaderVisible ? "auto" : "none",
        }}
        aria-label="Main"
      >
        {homeRoute ? (
          <Link
            to={homeRoute.path}
            className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white/80 transition-colors hover:text-white"
            aria-label="ZVolta home"
            onClick={closeMobileMenu}
          >
            <img
              src="/img/symbol logo.png"
              alt="ZVolta"
              className="h-6 w-auto"
            />
          </Link>
        ) : null}
        <div className="mx-1 hidden h-5 w-px bg-white/10 sm:block" />
        <div className="hidden items-center gap-1 sm:flex">
          {dockRoutes.map((route) => (
            <DockLink key={route.pageId} route={route} pathname={pathname}>
              {route.pageId === "charging-partners" || route.pageId === "host"
                ? "Hosting"
                : route.pageId === "charge"
                  ? "Charging"
                  : route.shortLabel}
            </DockLink>
          ))}
        </div>
        <div className="mx-1 h-5 w-px bg-white/10" />

        <button
          ref={menuTriggerRef}
          type="button"
          id="site-menu-button"
          className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full  text-white shadow-lg transition-all duration-300 hover:scale-105"
          aria-controls="site-mobile-menu"
          aria-expanded={isMobileMenuOpen && !isMenuClosing}
          onClick={toggleMobileMenu}
        >
          <span className="sr-only">
            {isMobileMenuOpen ? "Close menu" : "Open menu"}
          </span>
          <MenuIcon isOpen={isMobileMenuOpen} />
        </button>
      </nav>

      {isMenuMounted ? (
        <div
          ref={menuDialogRef}
          id="site-mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
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

          <div className="site-menu-shell h-[100dvh] overflow-y-auto overflow-x-hidden p-4 pt-16 sm:p-6 sm:pt-16 lg:p-10 lg:pt-14">
            <div className="mx-auto grid min-h-full w-full max-w-[1820px] grid-cols-1 gap-4 lg:grid-cols-12">
              <div className="site-menu-panel relative flex min-h-[500px] flex-col justify-between overflow-hidden rounded-[2rem] bg-black p-8 sm:p-10 lg:col-span-5">
                <div className="pointer-events-none absolute right-8 top-8 h-32 w-32 rounded-full bg-[radial-gradient(#16a34a_2px,transparent_2px)] opacity-20 [background-size:8px_8px]" />
                <nav className="relative z-10 mt-4 flex flex-col gap-4">
                  {menuLinks.map((route, index) => (
                    <div
                      key={route.route.pageId}
                      className="site-menu-nav-row"
                      style={{
                        "--menu-row-delay": `${340 + index * 100}ms`,
                        "--menu-row-close-delay": `${
                          Math.max(0, menuLinks.length - index - 1) * 70
                        }ms`,
                      }}
                    >
                      {index > 0 ? (
                        <div className="mb-4 h-px w-full bg-white/10" />
                      ) : null}
                      <MenuLink
                        item={route}
                        openDelay={380 + index * 100}
                        closeDelay={
                          Math.max(0, menuLinks.length - index - 1) * 70
                        }
                        onClick={closeMobileMenu}
                      />
                    </div>
                  ))}
                </nav>

                <div
                  className="site-menu-contact relative z-10 mt-12"
                  style={{
                    "--menu-contact-delay": `${420 + menuLinks.length * 100}ms`,
                  }}
                >
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                    Contact us
                  </p>
                  <a
                    href="mailto:support@zvolta.com"
                    className="border-b border-transparent pb-1 font-mono text-xl text-white transition-colors hover:border-emerald-400 hover:text-emerald-400 md:text-2xl"
                  >
                    support@zvolta.com
                  </a>
                </div>
              </div>

              <div className="grid content-start gap-4 md:grid-cols-2 lg:col-span-7">
                {menuCards.map((card, index) => (
                  <Link
                    key={card.title}
                    to={card.route.path}
                    style={{
                      "--menu-card-delay": `${520 + index * 120}ms`,
                      "--menu-card-close-delay": `${
                        Math.max(0, menuCards.length - index - 1) * 70
                      }ms`,
                    }}
                    className="menu-card site-menu-card group relative flex h-[160px] flex-col justify-center overflow-hidden rounded-[2rem] bg-black p-8 md:h-[160px]"
                    onClick={closeMobileMenu}
                  >
                    <div className="site-menu-card-hover-layer absolute inset-0 origin-bottom scale-y-0 bg-zinc-900 transition-transform duration-500 group-hover:scale-y-100" />
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
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export function SiteLayout({ children }) {
  const { pathname, search } = useLocation();
  const normalizedPathname = pathname.toLowerCase();
  const isHomepage = HOMEPAGE_PATHS.has(normalizedPathname);
  const usesPageReveal = normalizedPathname === "/charge";

  useScrollReveal(!isHomepage && !usesPageReveal, `${pathname}${search}`);

  return (
    <>
      <SiteRouteLoader />
      <SiteHeader />
      <main className="site-main">{children}</main>
      <SiteFooter />
    </>
  );
}

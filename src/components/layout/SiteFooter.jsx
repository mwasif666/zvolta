import { Link } from "react-router-dom";

const primaryColumns = [
  {
    title: "Host A Charger",
    links: [
      ["How it works", "/host#how"],
      ["Pricing and plans", "/host#chargers"],
      ["Site requirements", "/host#requirements"],
      ["3kW Charger", "/3kw-charger"],
      ["7kW Charger", "/7kw-charger"],
      ["22kW Charger", "/22kw-charger"],
      ["FAQs", "/support"],
      ["Start hosting", "/host#start-hosting"],
    ],
    cta: ["Start hosting", "/host#start-hosting"],
  },
  {
    title: "Charge your EV",
    links: [
      ["Charge your EV", "/charge"],
      ["Using the app", "/mobile"],
      ["Charging support", "https://wa.me/+923104446529"],
      ["FAQs", "/support"],
      ["Find a station", "/charge"],
    ],
    cta: ["Find a station", "/charge"],
  },
  {
    title: "Software For Operators",
    links: [
      ["Platform overview", "/software"],
      ["OCPP compatibility", "/software"],
      ["Integrations", "/software"],
      ["FAQs", "/support"],
      ["Book a demo", "/contact-us"],
    ],
    cta: ["Book a demo", "/contact-us"],
  },
];

function FooterLink({ href, children, className = "" }) {
  const isExternal = /^(?:https?:|mailto:|tel:)/.test(href);

  if (isExternal) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={className}>
      {children}
    </Link>
  );
}

function scrollToPolicySection(sectionId, attempt = 0) {
  const target = document.getElementById(sectionId);

  if (target) {
    target.style.scrollMarginTop = "112px";
    target.scrollIntoView({ behavior: "auto", block: "start" });
    return;
  }

  if (attempt < 18) {
    window.setTimeout(() => scrollToPolicySection(sectionId, attempt + 1), 90);
  }
}

function PolicySectionLink({ sectionId, children }) {
  return (
    <Link
      to={`/policy#${sectionId}`}
      className="hover:text-white transition-colors"
      onClick={() => {
        window.requestAnimationFrame(() => scrollToPolicySection(sectionId));
      }}
    >
      {children}
    </Link>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer bg-black text-white pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="border-t border-white/10 bg-black">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {primaryColumns.map((column) => (
            <div
              key={column.title}
              className="group p-8 md:p-12 hover:bg-white/5 transition-colors duration-300 flex flex-col h-full min-h-[300px]"
            >
              <div className="mb-auto">
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">
                  {column.title}
                </h3>
                <ul className="space-y-4 text-zinc-400">
                  {column.links.map(([label, href]) => (
                    <li key={`${label}:${href}`}>
                      <FooterLink
                        href={href}
                        className="hover:text-emerald-400 transition-colors block py-1"
                      >
                        {label}
                      </FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <FooterLink
                  href={column.cta[1]}
                  className="flex items-center justify-between text-white font-bold group-hover:text-emerald-400 transition-colors"
                >
                  {column.cta[0]}{" "}
                  <i className="bi bi-arrow-right -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </FooterLink>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-y border-white/10 bg-black">
        <div className="max-w-[1400px] mx-auto py-10 px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-4 text-zinc-400 text-base font-medium">
            <div className="flex flex-col gap-2">
              <Link to="/about-us" className="hover:text-white transition-colors">
                About
              </Link>
              <Link to="/careers" className="hover:text-white transition-colors">
                Careers
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link to="/stories" className="hover:text-white transition-colors">
                Stories
              </Link>
              <Link
                to="/contact-us"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link to="/team" className="hover:text-white transition-colors">
                Team
              </Link>
              <Link
                to="/charging-partners"
                className="hover:text-white transition-colors"
              >
                Partners
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <PolicySectionLink sectionId="terms-and-conditions">
                Terms and Conditions
              </PolicySectionLink>
              <PolicySectionLink sectionId="standard-service-policy">
                Standard Service Policy
              </PolicySectionLink>
            </div>
            <div className="flex flex-col gap-2">
              <PolicySectionLink sectionId="privacy-policy">
                Privacy Policy
              </PolicySectionLink>
              <PolicySectionLink sectionId="returns-policy">
                Returns Policy
              </PolicySectionLink>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src="/img/full_logowhite.png"
            alt="ZVolta"
            className="h-8 md:h-10 opacity-90"
          />
          <div className="hidden md:block w-px h-6 bg-zinc-800" />
          <div className="text-zinc-500 text-sm flex gap-6">
            <span>Copyright &copy; 2026 Zvolta. All rights reserved.</span>
          </div>
        </div>
        <div className="flex gap-6">
          <span className="text-zinc-500">Social Links</span>
          <a
            href="https://www.facebook.com/share/1FUNJfnPd5/?mibextid=wwXIfr"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <i className="bi bi-facebook text-xl" />
          </a>
          <a
            href="https://www.instagram.com/zvolta.pk"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <i className="bi bi-instagram text-xl" />
          </a>
          <a
            href="https://wa.me/+923104446529"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <i className="bi bi-whatsapp text-xl" />
          </a>
          <a
            href="mailto:support@zvolta.com"
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <i className="bi bi-envelope text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}

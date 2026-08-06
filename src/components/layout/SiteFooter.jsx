import { Link } from "react-router-dom";

export function SiteFooter() {
  return (
    <footer className="site-footer bg-black text-white pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="border-t border-white/10 bg-black">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="group p-8 md:p-12 hover:bg-white/5 transition-colors duration-300 flex flex-col h-full min-h-[300px]">
            <div className="mb-auto">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">
                Host A Charger
              </h3>
              <ul className="space-y-4 text-zinc-400">
                <li>
                  <Link
                    to="/host#how"
                    className="hover:text-emerald-400 transition-colors block py-1"
                  >
                    How it works
                  </Link>
                </li>
                <li>
                  <Link
                    to="/host#chargers"
                    className="hover:text-emerald-400 transition-colors block py-1"
                  >
                    Pricing and plans
                  </Link>
                </li>
                <li>
                  <Link
                    to="/host#requirements"
                    className="hover:text-emerald-400 transition-colors block py-1"
                  >
                    Site requirements
                  </Link>
                </li>
                <li>
                  <Link
                    to="/3kw-charger"
                    className="hover:text-emerald-400 transition-colors block py-1"
                  >
                    3kW Charger
                  </Link>
                </li>
                <li>
                  <Link
                    to="/7kw-charger"
                    className="hover:text-emerald-400 transition-colors block py-1"
                  >
                    7kW Charger
                  </Link>
                </li>
                <li>
                  <Link
                    to="/22kw-charger"
                    className="hover:text-emerald-400 transition-colors block py-1"
                  >
                    22kW Charger
                  </Link>
                </li>
                <li>
                  <Link
                    to="/support"
                    className="hover:text-emerald-400 transition-colors block py-1"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/host#start-hosting"
                    className="hover:text-emerald-400 transition-colors block py-1"
                  >
                    Start hosting
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10">
              <Link
                to="/host#start-hosting"
                className="flex items-center justify-between text-white font-bold group-hover:text-emerald-400 transition-colors"
              >
                Start hosting{" "}
                <i className="bi bi-arrow-right -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </Link>
            </div>
          </div>
          <div className="group p-8 md:p-12 hover:bg-white/5 transition-colors duration-300 flex flex-col h-full min-h-[300px]">
            <div className="mb-auto">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">
                Charge your EV
              </h3>
              <ul className="space-y-4 text-zinc-400">
                <li>
                  <Link
                    to="/charge"
                    className="hover:text-emerald-400 transition-colors block py-1"
                  >
                    Charge your EV
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mobile"
                    className="hover:text-emerald-400 transition-colors block py-1"
                  >
                    Using the app
                  </Link>
                </li>
                <li>
                  <a
                    href="https://wa.me/+923104446529"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-emerald-400 transition-colors block py-1"
                  >
                    Charging support
                  </a>
                </li>
                <li>
                  <Link
                    to="/support"
                    className="hover:text-emerald-400 transition-colors block py-1"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/charge"
                    className="hover:text-emerald-400 transition-colors block py-1"
                  >
                    Find a station
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10">
              <Link
                to="/charge"
                className="flex items-center justify-between text-white font-bold group-hover:text-emerald-400 transition-colors"
              >
                Find a station{" "}
                <i className="bi bi-arrow-right -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </Link>
            </div>
          </div>
          <div className="group p-8 md:p-12 hover:bg-white/5 transition-colors duration-300 flex flex-col h-full min-h-[300px]">
            <div className="mb-auto">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">
                Software For Operators
              </h3>
              <ul className="space-y-4 text-zinc-400">
                <li>
                  <Link
                    to="/software"
                    className="hover:text-emerald-400 transition-colors block py-1"
                  >
                    Platform overview
                  </Link>
                </li>
                <li>
                  <Link
                    to="/software"
                    className="hover:text-emerald-400 transition-colors block py-1"
                  >
                    OCPP compatibility
                  </Link>
                </li>
                <li>
                  <Link
                    to="/software"
                    className="hover:text-emerald-400 transition-colors block py-1"
                  >
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link
                    to="/support"
                    className="hover:text-emerald-400 transition-colors block py-1"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    className="hover:text-emerald-400 transition-colors block py-1"
                  >
                    Book a demo
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10">
              <Link
                to="/contact-us"
                className="flex items-center justify-between text-white font-bold group-hover:text-emerald-400 transition-colors"
              >
                Book a demo{" "}
                <i className="bi bi-arrow-right -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-y border-white/10 bg-black">
        <div className="max-w-[1400px] mx-auto py-10 px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-4 text-zinc-400 text-base font-medium">
            <div className="flex flex-col gap-2">
              <Link
                to="/about-us"
                className="hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                to="/careers"
                className="hover:text-white transition-colors"
              >
                Careers
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link
                to="/stories"
                className="hover:text-white transition-colors"
              >
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
              <Link
                to="/policy#terms-and-conditions"
                className="hover:text-white transition-colors"
              >
                Terms and Conditions
              </Link>
              <Link
                to="/policy#standard-service-policy"
                className="hover:text-white transition-colors"
              >
                Standard Service Policy
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link
                to="/policy#privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/policy#returns-policy"
                className="hover:text-white transition-colors"
              >
                Returns Policy
              </Link>
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

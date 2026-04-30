import { SmartLink } from "../components/SmartLink";

export default function DriverNetworkPage() {
  return (
    <>
      <style data-page-style="driver-network:1">{`html { scroll-behavior: smooth; }

        .steps-container::before {
            content: ''; position: absolute; top: 56px; left: 10%; right: 10%; height: 2px;
            background-image: linear-gradient(to right, #D1D5DB 50%, transparent 50%);
            background-size: 20px 2px; background-repeat: repeat-x; z-index: 0;
        }
        .step-card { position: relative; z-index: 1; }

        [data-scroll-animate], [data-load-animate] {
            opacity: 0; transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .is-visible { opacity: 1; transform: translateY(0); }

        /* Web Orbit: Dynamic Navbar Styles */
        #nav-container {
            /* This is the default state (at the top of the page) */
            transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            background-color: transparent;
            border-color: transparent;
            box-shadow: none;
        }
        header.scrolled #nav-container {
            /* This state is applied on scroll */
            background-color: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(16px);
            --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
            --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
            box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            border-color: rgba(229, 231, 235, 0.6);
        }`}</style>
      <div>
        <div id="orion-loader">
          <div className="orion-loader-logo">
            <img
              src="img/zvolta-loader.gif"
              alt="Loading..."
              draggable="false"
            />
          </div>
        </div>
        <header
          id="site-header"
          className="fixed top-0 left-0 right-0 z-50 w-full p-2 sm:p-3 transition-all duration-300"
        >
          <div className="container mx-auto">
            <div
              id="nav-container"
              className="rounded-full border backdrop-blur-md"
            >
              <nav className="flex items-center justify-between h-16 px-4 sm:px-6">
                <div className="flex-shrink-0">
                  <SmartLink
                    href="/"
                    className="flex items-center"
                    aria-label="ZVolta Home"
                  >
                    <img
                      src="img/full_Logoblack.png"
                      alt="ZVolta Full Logo"
                      className="navbar-logo"
                    />
                  </SmartLink>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                  <SmartLink
                    href="/about-us"
                    className="text-gray-700 hover:text-primary-emerald transition-colors"
                  >
                    About
                  </SmartLink>
                  <SmartLink
                    href="/charging-partners"
                    className="text-gray-700 hover:text-primary-emerald transition-colors"
                  >
                    Charge
                  </SmartLink>
                  <SmartLink
                    href="/vehicles"
                    className="text-gray-700 hover:text-primary-emerald transition-colors"
                  >
                    Rent
                  </SmartLink>
                  <SmartLink
                    href="/driver-network"
                    className="text-gray-700 hover:text-primary-emerald transition-colors"
                  >
                    Earn
                  </SmartLink>
                </div>
                <div className="flex items-center space-x-2">
                  <SmartLink
                    href="/contact-us"
                    className="hidden sm:inline-block bg-dark-text text-white px-6 py-2.5 rounded-full font-semibold hover:bg-gray-800 transition-colors"
                  >
                    Contact Us
                  </SmartLink>
                  <div className="md:hidden flex items-center">
                    <button
                      id="mobile-menu-button"
                      className="p-2 rounded-full text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
                      aria-controls="mobile-menu"
                      aria-expanded="false"
                    >
                      <span className="sr-only">open main menu</span>
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16m-7 6h7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </nav>
            </div>
            <div id="mobile-menu" className="hidden md:hidden mt-2">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg p-4 space-y-1">
                <SmartLink
                  href="/about-us"
                  className="block py-2 px-3 text-base text-gray-700 rounded-md hover:bg-gray-100 hover:text-primary-emerald"
                >
                  About
                </SmartLink>
                <SmartLink
                  href="/charging-partners"
                  className="block py-2 px-3 text-base text-gray-700 rounded-md hover:bg-gray-100 hover:text-primary-emerald"
                >
                  Charge
                </SmartLink>
                <SmartLink
                  href="/vehicles"
                  className="block py-2 px-3 text-base text-gray-700 rounded-md hover:bg-gray-100 hover:text-primary-emerald"
                >
                  Rent
                </SmartLink>
                <SmartLink
                  href="/driver-network"
                  className="block py-2 px-3 text-base text-gray-700 rounded-md hover:bg-gray-100 hover:text-primary-emerald"
                >
                  Earn
                </SmartLink>
              </div>
            </div>
          </div>
        </header>
        <main className="pt-24">
          <section
            className="grid grid-cols-1 lg:grid-cols-2"
            style={{ minHeight: "calc(100vh - 96px)" }}
          >
            <div className="flex flex-col justify-center bg-gray-50 px-6 sm:px-12 lg:px-16 py-20 lg:py-0">
              <div className="max-w-xl mx-auto lg:mx-0">
                <h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-medium text-dark-text leading-tight tracking-tighter"
                  data-load-animate
                >
                  Drive <b>Your</b> Future.
                  <br />
                  Earn On{" "}
                  <em className="not-italic text-primary-emerald font-bold">
                    Your
                  </em>
                  Terms.
                </h1>
                <p
                  className="mt-6 text-lg sm:text-xl text-gray-600 max-w-lg"
                  data-load-animate
                  data-delay={100}
                >
                  We've created a simple rent-and-earn model with zero
                  downpayment, so you can focus on what matters: driving and
                  earning.
                </p>
                <div
                  className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6"
                  data-load-animate
                  data-delay={200}
                >
                  <SmartLink
                    href="/contact-us"
                    className="bg-dark-text text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Get Started
                  </SmartLink>
                  <SmartLink
                    href="#steps"
                    className="group flex items-center gap-2 text-dark-text font-semibold"
                  >
                    <span>How It Works</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </SmartLink>
                </div>
              </div>
            </div>
            <div
              className="order-first lg:order-last h-64 lg:h-auto bg-cover bg-center"
              style={{ backgroundImage: 'url("img/zvolta-5.jpg")' }}
            >
              <img
                src="img/zvolta-5.jpg"
                alt="Electric rickshaw parked on a street"
                className="sr-only"
              />
            </div>
          </section>
          <section id="steps" className="py-20 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center mb-20">
                <h2
                  className="text-3xl md:text-4xl font-extrabold text-dark-text"
                  data-scroll-animate
                >
                  Your Journey in 3 Simple Steps
                </h2>
                <p
                  className="mt-4 text-lg text-gray-600"
                  data-scroll-animate
                  data-delay={100}
                >
                  Getting on the road with ZVolta is fast and straightforward.
                </p>
              </div>
              <div className="relative">
                <div className="hidden md:block steps-container" />
                <div className="grid md:grid-cols-3 gap-12">
                  <div
                    className="step-card text-center bg-white"
                    data-scroll-animate
                  >
                    <div className="mb-6 inline-block bg-accent-yellow text-primary-emerald-dark p-6 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ring-8 ring-white">
                      <svg
                        className="w-12 h-12"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      Step 1: Apply Online
                    </h3>
                    <p className="text-gray-600 px-4">
                      Fill out our quick online form. It takes just a few
                      minutes to tell us about yourself and get started.
                    </p>
                  </div>
                  <div
                    className="step-card text-center bg-white"
                    data-scroll-animate
                    data-delay={200}
                  >
                    <div className="mb-6 inline-block bg-accent-yellow text-primary-emerald-dark p-6 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ring-8 ring-white">
                      <svg
                        className="w-12 h-12"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      Step 2: Get Verified
                    </h3>
                    <p className="text-gray-600 px-4">
                      Our team will quickly review your application and guide
                      you through a simple and secure verification process.
                    </p>
                  </div>
                  <div
                    className="step-card text-center bg-white"
                    data-scroll-animate
                    data-delay={400}
                  >
                    <div className="mb-6 inline-block bg-accent-yellow text-primary-emerald-dark p-6 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ring-8 ring-white">
                      <svg
                        className="w-12 h-12"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                        <path d="M17.657 17.657L19.07 19.07M4.929 4.93L6.343 6.343m12.728 0l-1.414 1.414M6.343 17.657l1.414-1.414M12 21a9 9 0 100-18 9 9 0 000 18z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      Step 3: Start Driving
                    </h3>
                    <p className="text-gray-600 px-4">
                      Choose your EV, get the keys, and hit the road. You can
                      start earning from your very first day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div
                  className="pr-0 md:pr-10 order-2 md:order-1"
                  data-scroll-animate
                >
                  <h2 className="text-3xl md:text-4xl font-extrabold text-dark-text mb-6">
                    Why Drive With ZVolta?
                  </h2>
                  <p className="text-gray-600 mb-8 text-lg">
                    We're more than just a vehicle provider; we're your partner
                    in success. We handle the hassles so you can focus on
                    driving and earning.
                  </p>
                  <ul className="space-y-5 text-gray-700">
                    <li className="flex items-start">
                      <svg
                        className="w-6 h-6 text-primary-emerald mr-3 flex-shrink-0 mt-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div>
                        <span className="font-bold">Zero Downpayment.</span>{" "}
                        Save your self from initial up-front partial payment
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-6 h-6 text-primary-emerald mr-3 flex-shrink-0 mt-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div>
                        <span className="font-bold">Modern, Reliable EVs.</span>{" "}
                        Access our fleet of GPS-enabled, well-maintained
                        electric vehicles with 24/7 support and service.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-6 h-6 text-primary-emerald mr-3 flex-shrink-0 mt-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div>
                        <span className="font-bold">Rent and earn model.</span>
                        Earn an Income by simply renting or EVs
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-6 h-6 text-primary-emerald mr-3 flex-shrink-0 mt-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div>
                        <span className="font-bold">Join the Movement.</span> Be
                        a part of building a cleaner, greener transportation
                        future.
                      </div>
                    </li>
                  </ul>
                </div>
                <div
                  className="mt-10 md:mt-0 order-1 md:order-2"
                  data-scroll-animate
                  data-delay={200}
                >
                  <img
                    src="img/zvolta-9.png"
                    alt="Happy ZVolta driver with an electric rickshaw"
                    className="rounded-xl shadow-2xl object-cover w-full h-full"
                    data-inline-onerror="this.onerror=null;this.src='https://placehold.co/800x600/E0E0E0/BDBDBD?text=Image+Not+Found';"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>
          <section id="join" className="bg-white">
            <div
              className="container mx-auto px-6 py-20 text-center bg-accent-yellow rounded-2xl my-10"
              data-scroll-animate
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark-text mb-4">
                Ready To Earn Extra Income?
              </h2>
              <p className="text-lg text-gray-800 max-w-2xl mx-auto mb-10">
                Take the driver's seat in your career. Join ZVolta today and
                unlock a new way to earn.
              </p>
              <SmartLink
                href="/contact-us"
                className="group flex items-center justify-center gap-3 bg-primary-emerald text-white font-bold text-lg py-4 px-8 rounded-full shadow-lg hover:bg-primary-emerald-dark transition-all duration-300 transform hover:-translate-y-1 w-fit mx-auto"
              >
                Contact Us
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </SmartLink>
            </div>
          </section>
        </main>
        <footer className="bg-black text-gray-300">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
              <div className="lg:col-span-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                  Ready to power up your future with EVs?
                  <br />
                  <SmartLink
                    href="/contact-us"
                    className="text-green-400 hover:text-green-300 transition-colors"
                  >
                    Get in touch.
                  </SmartLink>
                </h2>
              </div>
              <div className="lg:col-span-8 lg:col-start-5">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div>
                    <h3 className="font-semibold text-white">Company</h3>
                    <ul className="mt-4 space-y-3">
                      <li>
                        <SmartLink
                          href="/"
                          className="hover:text-white transition-colors"
                        >
                          Home
                        </SmartLink>
                      </li>
                      <li>
                        <SmartLink
                          href="/about-us"
                          className="hover:text-white transition-colors"
                        >
                          About
                        </SmartLink>
                      </li>
                      <li>
                        <SmartLink
                          href="/invest"
                          className="hover:text-white transition-colors"
                        >
                          For Investors
                        </SmartLink>
                      </li>
                      <li>
                        <SmartLink
                          href="/charging-partners"
                          className="hover:text-white transition-colors"
                        >
                          Charging Partners
                        </SmartLink>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Learn More</h3>
                    <ul className="mt-4 space-y-3">
                      <li>
                        <SmartLink
                          href="/driver-network"
                          className="hover:text-white transition-colors"
                        >
                          Drivers
                        </SmartLink>
                      </li>
                      <li>
                        <SmartLink
                          href="/invest-form"
                          className="hover:text-white transition-colors"
                        >
                          Invest
                        </SmartLink>
                      </li>
                      <li>
                        <SmartLink
                          href="/contact-us"
                          className="hover:text-white transition-colors"
                        >
                          Contact
                        </SmartLink>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Connect</h3>
                    <div className="flex space-x-5 mt-4">
                      <SmartLink
                        href="https://www.facebook.com/share/1FUNJfnPd5/?mibextid=wwXIfr"
                        target="_blank"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Follow ZVolta on Facebook"
                      >
                        <i
                          className="bi bi-facebook"
                          style={{ fontSize: "1.5rem" }}
                          aria-hidden="true"
                        />
                      </SmartLink>
                      <SmartLink
                        href="https://www.instagram.com/zvolta.pk"
                        target="_blank"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Follow ZVolta on Instagram"
                      >
                        <i
                          className="bi bi-instagram"
                          style={{ fontSize: "1.5rem" }}
                          aria-hidden="true"
                        />
                      </SmartLink>
                      <SmartLink
                        href="https://wa.me/+923104446529"
                        target="_blank"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Contact ZVolta on WhatsApp"
                      >
                        <i
                          className="bi bi-whatsapp"
                          style={{ fontSize: "1.5rem" }}
                          aria-hidden="true"
                        />
                      </SmartLink>
                      <SmartLink
                        href="mailto:admin@zvolta.com"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Email ZVolta"
                      >
                        <i
                          className="bi bi-envelope"
                          style={{ fontSize: "1.5rem" }}
                          aria-hidden="true"
                        />
                      </SmartLink>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Contact Details
                    </h3>
                    <ul className="mt-4 space-y-3 text-sm">
                      <li className="flex items-center gap-x-2">
                        <i
                          className="bi bi-envelope text-lg"
                          aria-hidden="true"
                        />
                        <SmartLink
                          href="mailto:support@zvolta.com"
                          className="hover:text-white transition-colors"
                        >
                          support@zvolta.com
                        </SmartLink>
                      </li>
                      <li className="flex items-center gap-x-2">
                        <i
                          className="bi bi-telephone text-lg"
                          aria-hidden="true"
                        />
                        <SmartLink
                          href="tel:+923104446529"
                          className="hover:text-white transition-colors"
                        >
                          ‪+92 310 4446529‬
                        </SmartLink>
                      </li>
                      <li className="flex items-start gap-x-2 pt-1">
                        <i
                          className="bi bi-geo-alt text-lg mt-1"
                          aria-hidden="true"
                        />
                        <span className="leading-relaxed">
                          36F, Street 36, Block 6, P.E.C.H.S, Karachi, Pakistan
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 pt-8 border-t border-gray-800 flex flex-wrap justify-between items-center gap-4">
              <div className="flex items-center text-sm text-gray-400">
                <img
                  src="img/symbol logo2.png"
                  alt="ZVolta Symbol"
                  className="h-5 w-auto mr-3"
                  width={20}
                  height={20}
                />
                <span>© 2025 Z-Volta Pvt. Ltd. All rights reserved.</span>
              </div>
              <div className="text-sm text-gray-400">
                <ul className="flex flex-wrap justify-center sm:justify-end gap-x-4 gap-y-2">
                  <li>
                    <SmartLink
                      href="/policy#terms-and-conditions"
                      className="hover:text-white transition-colors"
                    >
                      Terms and Conditions
                    </SmartLink>
                  </li>
                  <li>
                    <SmartLink
                      href="/policy#standard-service-policy"
                      className="hover:text-white transition-colors"
                    >
                      Standard Service Policy
                    </SmartLink>
                  </li>
                  <li>
                    <SmartLink
                      href="/policy#privacy-policy"
                      className="hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </SmartLink>
                  </li>
                  <li>
                    <SmartLink
                      href="/policy#returns-policy"
                      className="hover:text-white transition-colors"
                    >
                      Returns Policy
                    </SmartLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

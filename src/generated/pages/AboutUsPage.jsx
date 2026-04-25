import { SmartLink } from '../../components/SmartLink';

export default function AboutUsPage() {
  return (
    <>
      <style data-page-style="about-us.html:1">{`body {
            font-family: 'Questrial', sans-serif;
            background-color: #f8fafc;
        }
        /* Loader Styles */
        #orion-loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #f1f1f1;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            transition: opacity 0.8s ease, visibility 0.8s ease;
        }
        #orion-loader.hidden {
            opacity: 0;
            visibility: hidden;
        }
        .orion-loader-logo img {
            width: 120px;
        }
        .hero-section {
            position: relative;
            overflow: hidden;
            background-image: linear-gradient(135deg, #e0f2f1 0%, #ffffff 100%);
        }
        .bg-ev-asset {
            position: absolute;
            z-index: 0;
            filter: blur(4px);
            -webkit-filter: blur(4px);
            transition: transform 0.5s ease-out;
            will-change: transform;
        }
        .asset-1 { width: 250px; top: 10%; left: 5%; }
        .asset-2 { width: 300px; top: 50%; right: 5%; transform: translateY(-50%); }
        .asset-3 { width: 200px; bottom: 5%; left: 20%; }

        @media (max-width: 768px) {
            .bg-ev-asset { filter: blur(3px); -webkit-filter: blur(3px); opacity: 0.7; }
            .asset-1 { width: 150px; top: 5%; left: -5%; }
            .asset-2 { width: 200px; top: 60%; right: -10%; }
            .asset-3 { display: none; }
        }

        .icon-card, .comparison-slider, .dark-cta-section {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .icon-card.is-visible, .comparison-slider.is-visible, .dark-cta-section.is-visible {
            opacity: 1;
            transform: translateY(0);
        }

        .icon-card {
            background: rgba(255, 255, 255, 0.6);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 1rem;
            padding: 2rem;
            box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.1);
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .icon-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
        }
        .dark-cta-section {
            background-color: #1a202c;
            position: relative;
            overflow: hidden;
        }
        .dark-cta-section::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image:
                linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
            background-size: 40px 40px;
            -webkit-mask-image: radial-gradient(ellipse 100% 80% at 50% 100%, black, transparent);
            mask-image: radial-gradient(ellipse 100% 80% at 50% 100%, black, transparent);
        }
        .dark-cta-section::after {
            content: '';
            position: absolute;
            bottom: -50%;
            left: 50%;
            width: 150%;
            height: 100%;
            transform: translateX(-50%);
            background: radial-gradient(ellipse at bottom, rgba(16, 185, 129, 0.35), transparent 70%);
            pointer-events: none;
            z-index: 0;
        }
        @keyframes shine {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .shiny-text {
            background-size: 200% auto;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            animation: shine 5s linear infinite;
        }
        .shiny-text.light-bg {
             background-image: linear-gradient(120deg, #1f2937 35%, #798698 50%, #1f2937 65%);
        }
        .shiny-text.dark-bg {
             background-image: linear-gradient(120deg, #9ca3af 35%, #ffffff 50%, #9ca3af 65%);
        }
        .user-select-none, img {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        /* Styles for the scrolled navbar */
        .navbar-scrolled {
            background-color: rgba(13, 13, 16, 0.85) !important;
            border-color: rgba(55, 65, 81, 0.5) !important;
        }
        .navbar-scrolled a,
        .navbar-scrolled button,
        .navbar-scrolled span {
            color: #e5e7eb !important;
        }
        .navbar-scrolled a:hover {
            color: #ffffff !important;
        }
        .navbar-scrolled #mobile-menu-button:hover {
            background-color: rgba(255, 255, 255, 0.1) !important;
            color: #ffffff !important;
        }
        .navbar-scrolled a.shimmer-effect {
            color: #ffffff !important;
        }

        /* Hamburger Menu Animation */
        .hamburger-icon span {
            transition: all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
            transform-origin: center;
        }
        .hamburger-icon.is-active span:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
        }
        .hamburger-icon.is-active span:nth-child(2) {
            opacity: 0;
        }
        .hamburger-icon.is-active span:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }

        /* Mobile Menu Animation */
        #mobile-menu {
            transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.4s ease;
            transform: translateY(-10px);
            opacity: 0;
            pointer-events: none;
        }
        #mobile-menu.is-open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
        }
        /* Footer Ellipse */
        footer {
            position: relative;
            overflow: hidden;
        }
        footer::after {
            content: '';
            position: absolute;
            bottom: -50px;
            left: 50%;
            transform: translateX(-50%) scaleY(0.5);
            width: 80%;
            height: 100px;
            background: radial-gradient(ellipse at center, rgba(34, 197, 94, 0.3) 0%, rgba(34, 197, 94, 0) 70%);
            pointer-events: none;
            z-index: 0;
        }`}</style>
      <div>
        <div id="orion-loader">
          <div className="orion-loader-logo">
            <img
              src="img/zvolta-loader.gif"
              alt="ZVolta is loading..."
              draggable="false"
            />
          </div>
        </div>
        <header className="sticky top-0 z-50 w-full transition-all duration-300">
          <div
            id="navbar-container"
            className="container mx-auto transition-all duration-300"
          >
            <div
              id="main-navbar"
              className="bg-white/80 backdrop-blur-md border border-gray-200/60 shadow-lg custom-navbar-glass transition-all duration-300"
            >
              <nav className="flex items-center justify-between h-16 px-4 sm:px-6">
                <div className="flex-shrink-0">
                  <SmartLink
                    href="/"
                    className="flex items-center"
                    aria-label="ZVolta Home"
                  >
                    <img
                      id="navbar-logo-img"
                      src="img/full_Logoblack.png"
                      alt="ZVolta Full Logo"
                      className="navbar-logo h-8 w-auto"
                      draggable="false"
                    />
                  </SmartLink>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                  <SmartLink
                    href="/about-us"
                    className="text-gray-700 hover:text-green-600 transition-colors"
                  >
                    About
                  </SmartLink>
                  <SmartLink
                    href="/charging-partners"
                    className="text-gray-700 hover:text-green-600 transition-colors"
                  >
                    Charge
                  </SmartLink>
                  <SmartLink
                    href="/vehicles"
                    className="text-gray-700 hover:text-green-600 transition-colors"
                  >
                    Rent
                  </SmartLink>
                </div>
                <div className="flex items-center space-x-2">
                  <SmartLink
                    href="/contact-us"
                    className="hidden sm:inline-block bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors shimmer-effect"
                  >
                    Contact Us
                  </SmartLink>
                  <div className="hidden md:flex relative group">
                    <button className="flex items-center text-gray-700 p-2 rounded-full">
                      <span>Pakistan</span>
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="md:hidden flex items-center">
                    <button
                      id="mobile-menu-button"
                      className="p-2 rounded-full text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 hamburger-icon"
                      aria-controls="mobile-menu"
                      aria-expanded="false"
                    >
                      <span className="sr-only">Open main menu</span>
                      <div className="space-y-1.5">
                        <span className="block w-6 h-0.5 bg-current" />
                        <span className="block w-6 h-0.5 bg-current" />
                        <span className="block w-6 h-0.5 bg-current" />
                      </div>
                    </button>
                  </div>
                </div>
              </nav>
            </div>
            <div id="mobile-menu" className="hidden md:hidden mt-2">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg p-4 space-y-1">
                <SmartLink
                  href="/about-us"
                  className="block py-2 px-3 text-base text-gray-700 rounded-md hover:bg-gray-100 hover:text-green-600"
                >
                  About
                </SmartLink>
                <SmartLink
                  href="/charging-partners"
                  className="block py-2 px-3 text-base text-gray-700 rounded-md hover:bg-gray-100 hover:text-green-600"
                >
                  Charge
                </SmartLink>
                <SmartLink
                  href="/vehicles"
                  className="block py-2 px-3 text-base text-gray-700 rounded-md hover:bg-gray-100 hover:text-green-600"
                >
                  Rent
                </SmartLink>
                <div className="border-t border-gray-200 my-2 pt-2">
                  <SmartLink
                    href="/contact-us"
                    className="block w-full text-left py-2 px-3 text-base text-gray-700 rounded-md hover:bg-gray-100 hover:text-green-600"
                  >
                    Contact Us
                  </SmartLink>
                  <SmartLink
                    href="#"
                    className="block w-full text-left py-2 px-3 text-base text-gray-700 rounded-md hover:bg-gray-100 hover:text-green-600"
                  >
                    Location: Pakistan
                  </SmartLink>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="hero-section pt-32 pb-20 md:pt-48 md:pb-32">
          <div className="bg-ev-asset asset-1" data-speed="0.05">
            <img
              src="img/biomas_energy.png"
              alt="Clean energy icon representing ZVolta's mission"
              draggable="false"
            />
          </div>
          <div className="bg-ev-asset asset-2" data-speed="-0.07">
            <img
              src="img/charging%20station.png"
              alt="EV charging station asset"
              draggable="false"
            />
          </div>
          <div className="bg-ev-asset asset-3" data-speed="0.04">
            <img
              src="img/charging%20station%20location.png"
              alt="Map location icon for charging network"
              draggable="false"
            />
          </div>
          <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
            <div className="inline-block bg-green-200 text-green-800 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              <i className="fas fa-info-circle mr-2" />
              About Us
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
              ZVolta is building the{' '}
              <span className="shiny-text light-bg">
                future of electric mobility.
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We are enabling Pakistan’s EV revolution, through our network of
              Charging Pods designed for convenience
            </p>
          </div>
        </section>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="icon-card flex flex-col">
                <div className="flex-grow">
                  <div className="text-green-600 mb-4">
                    <i className="fas fa-motorcycle fa-3x" />
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-gray-800">
                    Affordable Electric Vechicles
                  </h3>
                  <p className="text-gray-600">
                    Providing accessible and clean electric rickshaws for daily
                    rides across Pakistan.
                  </p>
                </div>
                <SmartLink
                  href="/vehicles"
                  className="inline-block bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors mt-6"
                >
                  Learn More
                </SmartLink>
              </div>
              <div className="icon-card flex flex-col">
                <div className="flex-grow">
                  <div className="text-green-600 mb-4">
                    <i className="fas fa-charging-station fa-3x" />
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-gray-800">
                    Clean Energy Access
                  </h3>
                  <p className="text-gray-600">
                    Building a network of charging hubs to ensure clean energy
                    is available in every neighborhood.
                  </p>
                </div>
                <SmartLink
                  href="/charging-partners"
                  className="inline-block bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors mt-6"
                >
                  Learn More
                </SmartLink>
              </div>
              <div className="icon-card flex flex-col">
                <div className="flex-grow">
                  <div className="text-green-600 mb-4">
                    <i className="fas fa-hand-holding-dollar fa-3x" />
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-gray-800">
                    Income Opportunities
                  </h3>
                  <p className="text-gray-600">
                    Creating new revenue streams for business through EV
                    charging at their locations
                  </p>
                </div>
                <SmartLink
                  href="/invest"
                  className="inline-block bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors mt-6"
                >
                  Learn More
                </SmartLink>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              From Pollution to Progress
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              We are actively replacing noisy, fume-emitting rickshaws with
              silent, clean, and efficient electric vehicles.
            </p>
            <div className="comparison-slider relative max-w-4xl mx-auto">
              <div className="relative w-full aspect-video overflow-hidden rounded-2xl shadow-2xl user-select-none">
                <div className="absolute inset-0">
                  <img
                    src="img/clean-volta.jpg"
                    alt="Clean city street with ZVolta's electric rickshaws"
                    className="object-cover w-full h-full user-select-none"
                    draggable="false"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white font-bold px-4 py-2 rounded-full">
                    With ZVolta
                  </div>
                </div>
                <div
                  className="absolute inset-0 user-select-none"
                  style={{ clipPath: 'inset(0 50% 0 0)' }}
                >
                  <img
                    src="https://th-i.thgim.com/public/migration_catalog/article13518136.ece/alternates/FREE_1200/HY19POLUTINGAUTO"
                    alt="Busy street with traditional, polluting auto rickshaws"
                    className="object-cover w-full h-full brightness-75 user-select-none"
                    draggable="false"
                  />
                  <div className="absolute top-4 left-4 bg-gray-800 text-white font-bold px-4 py-2 rounded-full">
                    Without ZVolta
                  </div>
                </div>
                <div
                  className="slider-handle absolute inset-y-0"
                  style={{ left: '50%' }}
                >
                  <div className="h-full w-1 bg-white" />
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 p-2 rounded-full bg-white shadow-lg cursor-pointer">
                    <i className="fas fa-arrows-alt-h text-gray-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="dark-cta-section py-20">
          <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold shiny-text dark-bg">
              Join the EV Revolution. Invest with ZVolta.
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Become a part of Pakistan's clean energy transformation. Invest in
              an asset-backed, high-return industry and empower your community
              while earning passive income.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <SmartLink
                href="/invest"
                className="w-full sm:w-auto px-8 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all duration-300 text-lg shadow-lg hover:shadow-green-500/50 transform hover:scale-105"
              >
                Become an Investor <i className="fas fa-arrow-right ml-2" />
              </SmartLink>
              <SmartLink
                href="/contact-us"
                className="w-full sm:w-auto px-8 py-4 bg-gray-800 border border-gray-600 text-gray-200 font-semibold rounded-lg hover:bg-gray-700 hover:border-gray-500 transition-all duration-300 text-lg shadow-lg transform hover:scale-105"
              >
                Book a Call
              </SmartLink>
            </div>
          </div>
        </section>
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
                          style={{ fontSize: '1.5rem' }}
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
                          style={{ fontSize: '1.5rem' }}
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
                          style={{ fontSize: '1.5rem' }}
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
                          style={{ fontSize: '1.5rem' }}
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

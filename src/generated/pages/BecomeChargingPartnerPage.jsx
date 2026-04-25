import { SmartLink } from '../../components/SmartLink';

export default function BecomeChargingPartnerPage() {
  return (
    <>
      <style data-page-style="become-charging-partner.html:1">{`body {
            font-family: 'Questrial', sans-serif;
        }
        .form-select {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
            background-position: right 0.5rem center;
            background-repeat: no-repeat;
            background-size: 1.5em 1.5em;
            padding-right: 2.5rem;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
        }
        .form-checkbox:checked {
            background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
        }
        .gradient-text {
            background: linear-gradient(to right, #3b82f6, #10b981, #3b82f6);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            background-size: 200% auto;
            animation: gradient 4s linear infinite;
        }
        @keyframes gradient {
          to {
            background-position: 200% center;
          }
        }`}</style>
      <div>
        {/* Loader */}
        <div
          id="orion-loader"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'white',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className="orion-loader-logo">
            <img
              src="img/zvolta-loader.gif"
              alt="Loading ZVolta..."
              draggable="false"
            />
          </div>
        </div>
        {/* Header */}
        <header className="sticky top-0 z-50 w-full p-2 sm:p-3 transition-all duration-300">
          <div className="container mx-auto">
            <div className="bg-white/80 backdrop-blur-md rounded-full border border-gray-200/60 shadow-lg custom-navbar-glass">
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
                      className="navbar-logo h-8 w-auto"
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
                    Charging Partners
                  </SmartLink>
                  <SmartLink
                    href="/vehicles"
                    className="text-gray-700 hover:text-green-600 transition-colors"
                  >
                    Our Vehicles
                  </SmartLink>
                </div>
                <div className="flex items-center space-x-2">
                  <SmartLink
                    href="/contact-us"
                    className="hidden sm:inline-block bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors"
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
                      className="p-2 rounded-full text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
                      aria-controls="mobile-menu"
                      aria-expanded="false"
                    >
                      <span className="sr-only">Open main menu</span>
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
                  className="block py-2 px-3 text-base text-gray-700 rounded-md hover:bg-gray-100 hover:text-green-600"
                >
                  About
                </SmartLink>
                <SmartLink
                  href="/charging-partners"
                  className="block py-2 px-3 text-base text-gray-700 rounded-md hover:bg-gray-100 hover:text-green-600"
                >
                  Charging Partners
                </SmartLink>
                <SmartLink
                  href="/vehicles"
                  className="block py-2 px-3 text-base text-gray-700 rounded-md hover:bg-gray-100 hover:text-green-600"
                >
                  Our Vehicles
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
        <main className="min-h-screen flex flex-col lg:flex-row">
          {/* Left Column: Information */}
          <div className="lg:w-1/2 w-full bg-white flex flex-col justify-center p-8 md:p-16">
            <div className="max-w-md mx-auto">
              <div className="mb-10">
                <SmartLink href="/" aria-label="ZVolta Home">
                  <img
                    src="img/full_Logoblack.png"
                    alt="ZVolta Logo"
                    className="h-12 w-auto"
                  />
                </SmartLink>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Become a{' '}
                <span className="gradient-text">Charging Partner.</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Join ZVolta’s nationwide charging network. Turn your property
                into a smart EV charging station and earn daily income. We
                handle installation, tech, and support.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Install an EV charger at your property
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Earn passive income from daily EV charging
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Be part of Pakistan’s clean energy network
                  </span>
                </li>
              </ul>
              <p className="mt-10 text-sm text-gray-500">
                ZVolta — “Invest. Charge. Empower. Drive the Future. Power the
                Present.”
              </p>
            </div>
          </div>
          {/* Right Column: Form */}
          <div
            className="lg:w-1/2 w-full relative flex items-center justify-center p-8"
            style={{
              backgroundImage: 'url("img/twisty-gradient-2-comp.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black opacity-25" />
            <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 md:p-12 z-10">
              <div id="form-container">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Let's get started.
                </h3>
                <p className="text-gray-600 mb-8">
                  Fill out this simple form. Our team will get back to you
                  shortly.
                </p>
                <form
                  id="partner-form"
                  action="https://formspree.io/f/movwbyqn"
                  method="POST"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        First Name*
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Last Name*
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Business Email*
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="company-name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Company Name*
                    </label>
                    <input
                      type="text"
                      name="company-name"
                      id="company-name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="property-type"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Property Type*
                      </label>
                      <select
                        id="property-type"
                        name="property-type"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition form-select"
                      >
                        <option value disabled selected>
                          Please Select
                        </option>
                        <option>Home</option>
                        <option>Shop / Business</option>
                        <option>Parking Lot</option>
                        <option>Petrol Pump</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="location"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Location (City)*
                      </label>
                      <select
                        id="location"
                        name="location"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition form-select"
                      >
                        <option value disabled selected>
                          Please Select
                        </option>
                        <option>Karachi</option>
                        <option>Lahore</option>
                        <option>Islamabad</option>
                        <option>Faisalabad</option>
                        <option>Multan</option>
                        <option>Peshawar</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
                      defaultValue={''}
                    />
                  </div>
                  <div className="mb-8">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        required
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 form-checkbox"
                      />
                      <span className="ml-3 text-sm text-gray-600">
                        Yes, I want to receive news and opportunities about
                        ZVolta’s clean mobility network.
                      </span>
                    </label>
                  </div>
                  <div>
                    <button
                      type="submit"
                      id="submit-button"
                      className="w-full text-white bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-md px-5 py-3 text-center transition-all duration-300 ease-in-out"
                    >
                      Become a Partner
                    </button>
                  </div>
                </form>
              </div>
              {/* Success Message Container */}
              <div id="success-message" className="hidden text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-lg leading-6 font-medium text-gray-900 mt-4">
                  Thank you!
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  We've received your partnership request and our team will be
                  in touch with you shortly.
                </p>
              </div>
              {/* Error Message Container */}
              <div id="error-message" className="hidden text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                  <svg
                    className="h-6 w-6 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <h3 className="text-lg leading-6 font-medium text-gray-900 mt-4">
                  Submission Failed
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Oops! There was a problem submitting your form. Please check
                  the fields and try again.
                </p>
              </div>
            </div>
          </div>
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

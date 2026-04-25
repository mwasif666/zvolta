import { SmartLink } from '../../components/SmartLink';

export default function InvestFormPage() {
  return (
    <>
      <style data-page-style="invest-form.html:1">{`body {
      font-family: 'Questrial', sans-serif;
    }
    .form-container-bg {
      /* A more subtle, professional gradient for the background */
      background-image: url('img/twisty-gradient.jpg');
      background-size: cover;
      background-position: center;
    }
    .animated-gradient-text {
      background-image: linear-gradient(90deg, #10b981, #22d3ee, #10b981);
      background-size: 200% auto;
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      animation: gradient 4s linear infinite;
    }
    @keyframes gradient {
      to {
        background-position: 200% center;
      }
    }
    .glare-hover {
      overflow: hidden;
      position: relative;
    }
    .glare-hover::before {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(120deg, hsla(0,0%,100%,0) 40%, hsla(0,0%,100%,.25) 50%, hsla(0,0%,100%,0) 60%);
      transition: 1.5s ease;
      background-size: 250% 250%, 100% 100%;
      background-repeat: no-repeat;
      background-position: -150% -150%, 0 0;
    }
    .glare-hover:hover::before {
      background-position: 150% 150%, 0 0;
    }
    /* Styling for the radio buttons to look like a segmented control */
    input[type="radio"].investor-type {
        display: none; /* Hide the actual radio button */
    }
    input[type="radio"].investor-type + label {
        cursor: pointer;
        display: inline-block;
        padding: 0.75rem 1rem;
        border: 1px solid #d1d5db; /* gray-300 */
        transition: all 0.2s ease-in-out;
        flex-grow: 1;
        text-align: center;
    }
    input[type="radio"].investor-type:checked + label {
        background-color: #10b981; /* green-500 */
        color: white;
        border-color: #10b981;
    }
    input[type="radio"]#individual + label {
        border-top-left-radius: 0.375rem;
        border-bottom-left-radius: 0.375rem;
    }
    input[type="radio"]#company + label {
        border-top-right-radius: 0.375rem;
        border-bottom-right-radius: 0.375rem;
        border-left-width: 0;
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
        <header className="fixed top-0 left-0 right-0 z-50 w-full p-2 sm:p-3 transition-all duration-300">
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
                      className="navbar-logo"
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
                  <SmartLink
                    href="/driver-network"
                    className="text-gray-700 hover:text-green-600 transition-colors"
                  >
                    Earn
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
                <SmartLink
                  href="/driver-network"
                  className="block py-2 px-3 text-base text-gray-700 rounded-md hover:bg-gray-100 hover:text-green-600"
                >
                  Earn
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
        <main>
          <div className="flex flex-wrap lg:flex-nowrap min-h-screen">
            {/* Left Column: Information (Elevated Design) */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-12 lg:p-16 bg-gray-50">
              <div className="max-w-md w-full">
                <p className="text-sm font-semibold text-green-600 uppercase tracking-wider">
                  INVEST WITH ZVOLTA
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight">
                  Invest in the Future of{' '}
                  <span className="animated-gradient-text">Mobility.</span>
                </h1>
                <p className="mt-6 text-gray-600">
                  ZVolta is pioneering the shift to sustainable transport in
                  Pakistan. By registering your interest, you gain exclusive
                  access to information about a high-growth opportunity at the
                  intersection of technology, energy, and mobility.
                </p>
                {/* Investment Highlights */}
                <div className="mt-10 space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-green-100 text-green-600">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-900">
                        High-Growth Market
                      </h3>
                      <p className="mt-1 text-gray-600">
                        Tap into the rapidly expanding EV market in one of the
                        world's most populous countries.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-green-100 text-green-600">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-900">
                        Proven Business Model
                      </h3>
                      <p className="mt-1 text-gray-600">
                        Our integrated ecosystem of vehicles, charging, and
                        driver networks is built for scalability.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-green-100 text-green-600">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-900">
                        Sustainable Impact
                      </h3>
                      <p className="mt-1 text-gray-600">
                        Drive meaningful change by investing in clean energy and
                        reducing carbon emissions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column: Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8 form-container-bg">
              <div className="bg-white/90 backdrop-blur-sm p-8 sm:p-10 rounded-2xl shadow-2xl max-w-xl w-full">
                {/* Form Container */}
                <div id="form-wrapper">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Register Your Interest
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Our team will be in touch with detailed information.
                  </p>
                  <form
                    id="invest-form"
                    action="https://formspree.io/f/xblyerpq"
                    method="POST"
                    className="mt-8 space-y-6"
                  >
                    <div>
                      <label
                        htmlFor="full-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Full Name*
                      </label>
                      <input
                        type="text"
                        name="full-name"
                        id="full-name"
                        required
                        autoComplete="name"
                        className="mt-1 block w-full bg-gray-100 border-gray-300 rounded-md shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email Address*
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          autoComplete="email"
                          className="mt-1 block w-full bg-gray-100 border-gray-300 rounded-md shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Phone Number*
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          required
                          autoComplete="tel"
                          className="mt-1 block w-full bg-gray-100 border-gray-300 rounded-md shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        I am investing as an*
                      </label>
                      <div className="mt-2 flex">
                        <input
                          type="radio"
                          id="individual"
                          name="investor-type"
                          defaultValue="Individual"
                          className="investor-type"
                          required
                        />
                        <label htmlFor="individual">Individual</label>
                        <input
                          type="radio"
                          id="company"
                          name="investor-type"
                          defaultValue="Company"
                          className="investor-type"
                        />
                        <label htmlFor="company">Company</label>
                      </div>
                    </div>
                    <div
                      id="company-name-field"
                      className="hidden transition-all duration-300"
                    >
                      <label
                        htmlFor="company-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Company Name*
                      </label>
                      <input
                        type="text"
                        name="company-name"
                        id="company-name"
                        autoComplete="organization"
                        className="mt-1 block w-full bg-gray-100 border-gray-300 rounded-md shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-lg font-semibold text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors glare-hover"
                      >
                        Request Information
                      </button>
                    </div>
                  </form>
                </div>
                {/* Success/Error Messages (Styled like Contact page) */}
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
                    Inquiry Received!
                  </h3>
                  <p className="mt-2 px-7 py-3 text-sm text-gray-600">
                    Thank you for your interest. Our investment relations team
                    will be in touch with you shortly.
                  </p>
                </div>
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
                  <p className="mt-2 px-7 py-3 text-sm text-gray-600">
                    Sorry, there was an error sending your message. Please try
                    again later.
                  </p>
                </div>
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
        {/* Scripts */}
      </div>
    </>
  );
}

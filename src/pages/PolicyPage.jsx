import { SmartLink } from "../components/SmartLink";

export default function PolicyPage() {
  return (
    <>
      <style data-page-style="policy:1">{`/* --- Base Styles --- */
        body {
            font-family: 'Questrial', sans-serif;
            background-color: #F8FAFC; /* Lighter Slate */
            color: #2a3b1e; /* Slate-800 */
            overflow-x: hidden;
            position: relative;
        }

        .main-container {
            position: relative;
            z-index: 1;
        }

        /* Top background glow */
        .main-container::before {
            content: '';
            position: absolute;
            top: -200px; /* Adjusted position */
            left: 50%;
            transform: translateX(-50%);
            width: 1500px;
            height: 500px; /* Increased height */
            background: radial-gradient(ellipse 50% 40% at 50% 30%, rgba(22, 163, 74, 0.12) 0%, rgba(22, 163, 74, 0) 70%); /* Adjusted gradient */
            z-index: -1;
            pointer-events: none;
            filter: blur(30px); /* Added subtle blur */
        }

        /* --- Refined Gradient Blobs --- */
        .gradient-blob-1, .gradient-blob-2, .gradient-blob-3 {
            position: absolute;
            width: 1300px; /* Slightly larger */
            height: 600px;
            background: radial-gradient(ellipse 50% 50% at 50% 50%, rgba(22, 163, 74, 0.09) 0%, rgba(22, 163, 74, 0) 70%); /* Softer color */
            z-index: -1;
            pointer-events: none;
            filter: blur(60px); /* Increased blur */
            opacity: 0.7; /* Slightly less opaque */
        }
        .gradient-blob-1 {
            top: 500px; /* Adjusted position */
            left: -300px;
            transform: rotate(-25deg);
        }
        .gradient-blob-2 {
            top: 1300px; /* Adjusted position */
            right: -400px;
            transform: rotate(15deg);
        }
        .gradient-blob-3 {
            top: 2100px; /* Adjusted position */
            left: -200px;
            transform: rotate(5deg);
        }

        .page-content h2 {
            font-size: 2rem;
            font-weight: bold;
            color: #0f2a11; /* Slate-900 */
            margin-top: 5rem; /* Standard spacing between sections */
            margin-bottom: 2rem; /* Increased spacing */
            padding-bottom: 0.75rem;
            border-bottom: 1px solid #E2E8F0; /* Slate-200 */
        }
        /* First heading needs less top margin */
        .page-content h2:first-of-type {
             margin-top: 0; /* Remove top margin for the very first h2 */
        }

        /* --- FAQ-Style Accordion --- */
        .accordion-item {
            background-color: #F5F3FF; /* Equivalent to bg-violet-50 */
            border-radius: 1.5rem; /* Equivalent to rounded-3xl */
            margin-bottom: 1rem;
        }

        .accordion-button {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding: 1.25rem; /* Equivalent to p-5 */
            text-align: left;
            background: transparent;
            border: none;
            cursor: pointer;
            font-size: 1.125rem; /* Equivalent to text-lg */
            font-weight: 600; /* Equivalent to font-semibold */
            color: #1F2937; /* Equivalent to text-gray-800 */
            font-family: 'Questrial', sans-serif;
        }

        .accordion-icon {
            flex-shrink: 0;
            width: 1.5rem; /* Equivalent to w-6 */
            height: 1.5rem; /* Equivalent to h-6 */
            color: #9CA3AF; /* Equivalent to text-gray-400 */
            transition: transform 0.3s ease-in-out;
        }

        .accordion-button.active .accordion-icon {
            transform: rotate(-180deg);
        }

        .accordion-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s ease-out;
        }

        .accordion-content-inner {
            padding: 0 1.25rem 1.25rem 1.25rem;
            line-height: 1.625; /* Equivalent to leading-relaxed */
        }

        .accordion-content-inner p,
        .accordion-content-inner li {
            color: #4B5563; /* Equivalent to text-gray-600 */
            line-height: 1.75;
            margin-bottom: 1rem;
        }

        .accordion-content-inner p:first-child,
        .accordion-content-inner ul:first-child {
            margin-top: 0;
        }

        .accordion-content-inner p:last-child,
        .accordion-content-inner ul:last-child {
            margin-bottom: 0;
        }

        .accordion-content-inner ul {
            list-style-type: disc;
            padding-left: 1.5rem;
        }

        .accordion-content-inner a {
            color: #16A34A; /* Equivalent to text-green-600 */
            text-decoration: underline;
            transition: color 0.2s ease;
            font-weight: 500;
        }

        .accordion-content-inner a:hover {
            color: #22C55E; /* Equivalent to text-green-500 */
        }


        /* --- STYLES FROM INDEX.HTML FOR NAVBAR --- */
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
        }`}</style>
      <div>
        <div className="gradient-blob-1" />
        <div className="gradient-blob-2" />
        <div className="gradient-blob-3" />
        <header className="sticky top-0 z-50 w-full">
          <div className="container mx-auto p-2 sm:p-3">
            <div
              id="main-navbar"
              className="bg-white/80 backdrop-blur-md rounded-full border border-gray-200/60 shadow-lg custom-navbar-glass transition-all duration-300"
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
                      className="navbar-logo"
                      width={120}
                      height={40}
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
                        aria-hidden="true"
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
        <main className="main-container relative container mx-auto px-4 pt-16 pb-24 lg:pt-20 lg:pb-32">
          <div className="max-w-4xl mx-auto page-content">
            <h2 id="terms-and-conditions">Terms and Conditions</h2>
            <div className="accordion-item">
              <button className="accordion-button">
                <span>1. Eligibility</span>
                <svg
                  className="accordion-icon"
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
              <div className="accordion-content">
                <div className="accordion-content-inner">
                  <p>
                    1.1. You must be at least 18 years of age (or the age of
                    majority in your jurisdiction) and have full legal capacity
                    to enter into binding contracts.
                  </p>
                  <p>
                    1.2. You must hold a valid driver's licence (or equivalent)
                    and operate or own an electric vehicle compatible with our
                    Services.
                  </p>
                  <p>
                    1.3. You are required to provide accurate, complete and
                    up-to-date information when registering for our Services.
                    Any misrepresentation may result in suspension or
                    termination of your account.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-button">
                <span>2. Account Registration</span>
                <svg
                  className="accordion-icon"
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
              <div className="accordion-content">
                <div className="accordion-content-inner">
                  <p>
                    2.1. When you register or open an account with Zvolta, you
                    agree to: provide true, accurate, current and complete
                    information as prompted by Zvolta's registration forms;
                    maintain and promptly update your account information to
                    keep it accurate and complete.
                  </p>
                  <p>
                    2.2. You are responsible for safeguarding your login
                    credentials, and for all activities that occur under your
                    account. You must notify Zvolta immediately of any
                    unauthorised use of your account or any other security
                    breach.
                  </p>
                  <p>
                    2.3. Zvolta reserves the right to suspend, restrict or
                    terminate your access or account if we suspect misuse,
                    fraudulent activity or a breach of these Terms.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-button">
                <span>3. Use of the Services</span>
                <svg
                  className="accordion-icon"
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
              <div className="accordion-content">
                <div className="accordion-content-inner">
                  <p>
                    3.1. You agree to use the Services only for lawful purposes,
                    in accordance with these Terms and applicable laws.
                  </p>
                  <p>3.2. You shall not use the Services in any way that:</p>
                  <ul>
                    <li>
                      causes damage, interruption or impairment of our Services
                      or charging stations;
                    </li>
                    <li>
                      attempts to gain unauthorised access to our systems or any
                      networks, servers or equipment connected thereto;
                    </li>
                    <li>
                      interferes with or bypasses any security or authentication
                      mechanism;
                    </li>
                    <li>
                      uses or attempts to use a station in a manner contrary to
                      its intended use or posted on-site instructions.
                    </li>
                  </ul>
                  <p>
                    3.3. Zvolta may temporarily or permanently suspend or
                    discontinue any part of the Services (including charging
                    stations, mobile app, website) without notice for
                    operational, security or technical reasons.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-button">
                <span>4. Payments</span>
                <svg
                  className="accordion-icon"
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
              <div className="accordion-content">
                <div className="accordion-content-inner">
                  <p>
                    4.1. Use of certain charging stations or Services may
                    require payment through our platform/third-party payment
                    gateway.
                  </p>
                  <p>
                    4.2. All payment processing is handled via third-party
                    payment service providers. Zvolta does not collect or store
                    any payment card data or other payment instrument details.
                  </p>
                  <p>
                    4.3. Payments once made are final unless otherwise expressly
                    agreed by Zvolta. Refunds are subject to Zvolta's discretion
                    and any applicable policy.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-button">
                <span>5. Data Collection, Use and Privacy</span>
                <svg
                  className="accordion-icon"
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
              <div className="accordion-content">
                <div className="accordion-content-inner">
                  <p>
                    5.1. In order to provide and improve our Services, Zvolta
                    collects certain personal and vehicle-related information,
                    including:
                  </p>
                  <ul>
                    <li>
                      your full name, contact information (phone number, email
                      address);
                    </li>
                    <li>
                      vehicle information (make, model, registration number,
                      charging history);
                    </li>
                    <li>
                      session data (station location, time, duration of charge,
                      energy consumed);
                    </li>
                    <li>
                      technical and device data (IP address, device identifiers,
                      software version).
                    </li>
                  </ul>
                  <p>
                    5.2. We will aggregate and anonymize data for analytics and
                    performance improvement, ensuring no personally identifiable
                    information is used in shared reports.
                  </p>
                  <p>
                    5.3. We do not sell or rent your personal information. We
                    will not share your personal data with third parties except:
                    to service providers performing functions on our behalf
                    under confidentiality obligations; when required by law or
                    governmental order; to protect our rights, property or
                    safety of users.
                  </p>
                  <p>
                    5.4. For full details on how we collect, use, store and
                    protect your data, please refer to our Privacy Policy.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-button">
                <span>6. Intellectual Property</span>
                <svg
                  className="accordion-icon"
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
              <div className="accordion-content">
                <div className="accordion-content-inner">
                  <p>
                    6.1. All content, trademarks, logos, service marks,
                    graphics, software and other intellectual property made
                    available through the Services are the property of Zvolta or
                    its licensors and are protected by applicable intellectual
                    property laws.
                  </p>
                  <p>
                    6.2. You may download or print any portion of the content
                    solely for your personal, non-commercial use, provided you
                    retain all copyright and other proprietary notices. No
                    right, title or interest in any downloaded content is
                    transferred to you.
                  </p>
                  <p>
                    6.3. You shall not copy, modify, distribute, transmit,
                    display, perform, reproduce, publish, license, create
                    derivative works from, transfer or sell any such
                    intellectual property without Zvolta's prior written
                    consent.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-button">
                <span>
                  7. Disclaimer of Warranties / Limitation of Liability
                </span>
                <svg
                  className="accordion-icon"
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
              <div className="accordion-content">
                <div className="accordion-content-inner">
                  <p>
                    7.1. The Services are provided on an "as is" and "as
                    available" basis. Zvolta does not represent or warrant that
                    the Services will be uninterrupted, error-free or free from
                    viruses or other harmful components.
                  </p>
                  <p>
                    7.2. To the fullest extent permitted under Pakistani law,
                    Zvolta, its officers, directors, employees, affiliates and
                    agents shall not be liable for any direct, indirect,
                    incidental, consequential or punitive damages (including
                    loss of data, revenue, goodwill or other intangible losses)
                    arising out of or in connection with your use of, or
                    inability to use, the Services.
                  </p>
                  <p>
                    7.3. Zvolta's total aggregate liability to you for any claim
                    arising out of or in connection with the Services shall not
                    exceed the total amount paid by you to Zvolta for the
                    specific charging session or service in dispute (if any).
                  </p>
                  <p>
                    7.4. Certain jurisdictions may not allow limitation or
                    exclusion of certain warranties or liabilities; in such
                    cases, the above limitations may not apply fully.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-button">
                <span>8. Indemnification</span>
                <svg
                  className="accordion-icon"
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
              <div className="accordion-content">
                <div className="accordion-content-inner">
                  <p>
                    You agree to indemnify, defend and hold harmless Zvolta, its
                    officers, directors, employees, agents and affiliates from
                    and against any and all losses, liabilities, claims,
                    demands, damages, costs or expenses (including reasonable
                    legal fees) arising out of or in connection with:
                  </p>
                  <ul>
                    <li>your use of the Services;</li>
                    <li>your violation of these Terms or applicable law;</li>
                    <li>your negligent or intentional misconduct;</li>
                    <li>
                      any third-party claim related to your account or use of
                      the Services.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-button">
                <span>9. Termination</span>
                <svg
                  className="accordion-icon"
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
              <div className="accordion-content">
                <div className="accordion-content-inner">
                  <p>
                    9.1. Zvolta may, at its sole discretion, suspend or
                    terminate your account and access to the Services for any
                    reason, including violation of these Terms, non-payment, or
                    request by you.
                  </p>
                  <p>
                    9.2. On termination: your right to use the Services will
                    immediately cease; any outstanding obligations will survive
                    termination (including indemnities, limitation of liability,
                    ownership and intellectual property provisions).
                  </p>
                  <p>
                    9.3. If you wish to terminate your account, you must contact
                    Zvolta using the contact details in Section 14.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-button">
                <span>10. Force Majeure</span>
                <svg
                  className="accordion-icon"
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
              <div className="accordion-content">
                <div className="accordion-content-inner">
                  <p>
                    Zvolta shall not be liable or deemed in breach of these
                    Terms for any delay or failure to perform its obligations if
                    such delay or failure arises from any cause beyond Zvolta's
                    reasonable control (including but not limited to acts of
                    God, governmental restrictions, power failures, network
                    failures, acts of terrorism, civil unrest, labour disputes
                    or other force majeure events).
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-button">
                <span>11. Changes to These Terms</span>
                <svg
                  className="accordion-icon"
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
              <div className="accordion-content">
                <div className="accordion-content-inner">
                  <p>
                    11.1. Zvolta reserves the right to amend or update these
                    Terms at any time, in its sole discretion. When changes are
                    made, we will revise the "Effective Date" at the top of this
                    document and post the revised Terms on our website/app.
                  </p>
                  <p>
                    11.2. Your continued use of the Services after the posting
                    of revised Terms constitutes acceptance of those changes. If
                    you do not agree with the changes, you must stop using the
                    Services.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-button">
                <span>12. Governing Law and Dispute Resolution</span>
                <svg
                  className="accordion-icon"
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
              <div className="accordion-content">
                <div className="accordion-content-inner">
                  <p>
                    12.1. These Terms shall be governed by and construed in
                    accordance with the laws of the Islamic Republic of
                    Pakistan.
                  </p>
                  <p>
                    12.2. Any dispute, claim or controversy arising out of or in
                    connection with these Terms shall be submitted exclusively
                    to the courts of Pakistan.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-button">
                <span>13. Miscellaneous</span>
                <svg
                  className="accordion-icon"
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
              <div className="accordion-content">
                <div className="accordion-content-inner">
                  <p>
                    13.1. These Terms constitute the entire agreement between
                    you and Zvolta regarding the subject matter herein and
                    supersede all prior or contemporaneous understandings,
                    communications or agreements, whether written or oral.
                  </p>
                  <p>
                    13.2. If any provision of these Terms is held invalid or
                    unenforceable, the remaining provisions shall continue in
                    full force and effect.
                  </p>
                  <p>
                    13.3. You may not assign or transfer your rights or
                    obligations under these Terms without Zvolta's prior written
                    consent. Zvolta may assign or transfer its rights under
                    these Terms at any time.
                  </p>
                  <p>
                    13.4. The failure of Zvolta to enforce any right or
                    provision of these Terms shall not be construed as a waiver
                    of such right or provision.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-button">
                <span>14. Contact Information</span>
                <svg
                  className="accordion-icon"
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
              <div className="accordion-content">
                <div className="accordion-content-inner">
                  <p>
                    If you have any questions, comments or concerns about these
                    Terms, you may contact us at:
                    <br />
                    Zvolta Private Limited
                    <br />
                    Email:{" "}
                    <SmartLink href="mailto:support@zvolta.com">
                      support@zvolta.com
                    </SmartLink>
                    <br />
                    Phone:{" "}
                    <SmartLink href="tel:+923104446529">
                      +923104446529
                    </SmartLink>
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-button">
                <span>15. Acceptance of Terms</span>
                <svg
                  className="accordion-icon"
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
              <div className="accordion-content">
                <div className="accordion-content-inner">
                  <p>
                    By clicking the "I Agree" button, checking the relevant box
                    or using the Services, you confirm that you have read,
                    understood and agree to be bound by these Terms and our
                    Privacy Policy.
                  </p>
                </div>
              </div>
            </div>
            <h2 id="returns-policy">Returns Policy</h2>
            <div className="accordion-item">
              <button className="accordion-button">
                <span>1. No Returns or Exchanges</span>
                <svg
                  className="accordion-icon"
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
              <div className="accordion-content">
                <div className="accordion-content-inner">
                  <p>
                    Electricity, once delivered and consumed through a charging
                    session, cannot be returned, recovered, or reversed. As
                    such, we do not offer returns or exchanges for any completed
                    charging transactions.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-button">
                <span>2. Exceptions</span>
                <svg
                  className="accordion-icon"
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
              <div className="accordion-content">
                <div className="accordion-content-inner">
                  <p>
                    While we do not offer returns, in certain cases you may be
                    eligible for a partial or full refund, solely at our
                    discretion, if:
                  </p>
                  <ul>
                    <li>
                      A charging session was not completed due to a technical
                      fault at the charging station, and you were billed
                      incorrectly;
                    </li>
                    <li>
                      The charging session was interrupted before any
                      electricity was delivered;
                    </li>
                    <li>
                      There was a system error or double charging occurred.
                    </li>
                  </ul>
                  <p>
                    To request a refund under these exceptional cases, please
                    contact our support team within 24 hours of the charging
                    session with the following information:
                  </p>
                  <ul>
                    <li>Date and time of charging session</li>
                    <li>Charging station location</li>
                    <li>Transaction ID or payment reference</li>
                    <li>Description of the issue</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-button">
                <span>3. Contact for Support</span>
                <svg
                  className="accordion-icon"
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
              <div className="accordion-content">
                <div className="accordion-content-inner">
                  <p>
                    For any queries regarding billing or technical faults,
                    please contact us at:
                    <br />
                    Zvolta Private Limited
                    <br />
                    Email:{" "}
                    <SmartLink href="mailto:support@zvolta.com">
                      support@zvolta.com
                    </SmartLink>
                    <br />
                    Phone:{" "}
                    <SmartLink href="tel:+923104446529">
                      +923104446529
                    </SmartLink>
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-button">
                <span>4. Governing Law</span>
                <svg
                  className="accordion-icon"
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
              <div className="accordion-content">
                <div className="accordion-content-inner">
                  <p>
                    This Returns Policy is governed by the laws of the Islamic
                    Republic of Pakistan, and any disputes will be subject to
                    the exclusive jurisdiction of the Pakistani courts.
                  </p>
                </div>
              </div>
            </div>
            <h2 id="standard-service-policy">Standard Service Policy</h2>
            <div className="accordion-item">
              <button className="accordion-button">
                <span>1. Scope of Services</span>
                <svg
                  className="accordion-icon"
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
              <div className="accordion-content">
                <div className="accordion-content-inner">
                  <p>Zvolta offers the following core services:</p>
                  <ul>
                    <li>Access to publicly available EV charging stations</li>
                    <li>
                      Mobile app for locating, reserving, and managing charging
                      sessions
                    </li>
                    <li>
                      Charging session management (start, stop, monitor usage)
                    </li>
                    <li>
                      Real-time updates on station availability and status
                    </li>
                    <li>
                      Customer support and assistance for charging-related
                      issues
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-button">
                <span>2. Service Availability</span>
                <svg
                  className="accordion-icon"
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
              <div className="accordion-content">
                <div className="accordion-content-inner">
                  <ul>
                    <li>
                      Charging stations are generally available 24/7 unless
                      otherwise indicated at a specific location.
                    </li>
                    <li>
                      Access to stations is subject to availability and on a
                      first-come, first-served basis unless a reservation has
                      been made through our platform.
                    </li>
                    <li>
                      Services may be temporarily unavailable due to:
                      Maintenance, Technical issues, Power supply interruptions,
                      or Regulatory requirements.
                    </li>
                  </ul>
                  <p>
                    Zvolta will make reasonable efforts to communicate service
                    outages or planned maintenance in advance through our app or
                    website.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-button">
                <span>3. Service Standards</span>
                <svg
                  className="accordion-icon"
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
              <div className="accordion-content">
                <div className="accordion-content-inner">
                  <p>Zvolta is committed to:</p>
                  <ul>
                    <li>
                      Providing safe, functional, and regularly maintained
                      charging equipment
                    </li>
                    <li>
                      Offering accurate information about station status and
                      availability
                    </li>
                    <li>
                      Responding to customer queries and support requests within
                      24 hours
                    </li>
                    <li>
                      Ensuring all energy provided meets the applicable local
                      standards and regulations
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-button">
                <span>4. Customer Responsibilities</span>
                <svg
                  className="accordion-icon"
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
              <div className="accordion-content">
                <div className="accordion-content-inner">
                  <p>Users of Zvolta services agree to:</p>
                  <ul>
                    <li>
                      Use the charging stations responsibly and in accordance
                      with posted instructions
                    </li>
                    <li>
                      Ensure that your vehicle is compatible with the charging
                      equipment
                    </li>
                    <li>Not damage, vandalize, or misuse any equipment</li>
                    <li>
                      Promptly remove your vehicle after the charging session is
                      complete
                    </li>
                    <li>
                      Maintain your mobile app credentials securely and notify
                      us of unauthorized use
                    </li>
                    <li>
                      Pay all applicable fees as displayed before or during the
                      charging session
                    </li>
                  </ul>
                  <p>
                    Zvolta reserves the right to suspend or deny service in the
                    event of non-compliance with these responsibilities.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-button">
                <span>5. Charging Fees and Payment</span>
                <svg
                  className="accordion-icon"
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
              <div className="accordion-content">
                <div className="accordion-content-inner">
                  <ul>
                    <li>
                      All charging sessions are subject to fees based on time,
                      energy delivered (kWh), or session type, as specified at
                      the time of use.
                    </li>
                    <li>
                      Payments must be made through the Zvolta app via
                      integrated third-party payment gateways.
                    </li>
                    <li>
                      Zvolta does not collect or store any card or banking
                      information.
                    </li>
                    <li>
                      Users must ensure sufficient account balance or linked
                      payment method before initiating a charging session.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-button">
                <span>6. Service Limitations and Liability</span>
                <svg
                  className="accordion-icon"
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
              <div className="accordion-content">
                <div className="accordion-content-inner">
                  <p>
                    While we strive for uninterrupted service, Zvolta does not
                    guarantee:
                  </p>
                  <ul>
                    <li>Continuous availability of charging stations</li>
                    <li>
                      Compatibility of all EV models with our infrastructure
                    </li>
                    <li>Error-free mobile or web application access</li>
                  </ul>
                  <p>
                    To the extent permitted by law, Zvolta is not liable for:
                  </p>
                  <ul>
                    <li>Indirect or consequential losses</li>
                    <li>
                      Vehicle damage resulting from misuse of our equipment
                    </li>
                    <li>
                      Delays, outages, or inability to charge due to factors
                      beyond our control (e.g., grid failure, weather,
                      third-party interference)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-button">
                <span>7. Safety and Compliance</span>
                <svg
                  className="accordion-icon"
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
              <div className="accordion-content">
                <div className="accordion-content-inner">
                  <p>
                    Zvolta complies with all national electrical safety
                    regulations and guidelines applicable in Pakistan.
                  </p>
                  <p>
                    Users must follow on-site safety signage, mobile app
                    instructions, and local laws during the charging process.
                  </p>
                  <p>
                    Any incidents, faults, or safety issues must be reported
                    immediately via our customer support channels.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-button">
                <span>8. Customer Support</span>
                <svg
                  className="accordion-icon"
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
              <div className="accordion-content">
                <div className="accordion-content-inner">
                  <p>Our customer support team is available to assist with:</p>
                  <ul>
                    <li>Technical issues at charging stations</li>
                    <li>Billing queries or payment errors</li>
                    <li>Reporting damaged or non-functional equipment</li>
                    <li>
                      General inquiries about locations, features, or account
                      management
                    </li>
                  </ul>
                  <p>
                    <b>Support Channels:</b>
                    <br />
                    Email:{" "}
                    <SmartLink href="mailto:support@zvolta.com">
                      support@zvolta.com
                    </SmartLink>
                    <br />
                    Phone:{" "}
                    <SmartLink href="tel:+923104446529">
                      +923104446529
                    </SmartLink>
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-button">
                <span>9. Modifications to Service</span>
                <svg
                  className="accordion-icon"
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
              <div className="accordion-content">
                <div className="accordion-content-inner">
                  <p>Zvolta reserves the right to:</p>
                  <ul>
                    <li>Modify service features</li>
                    <li>Change pricing structures</li>
                    <li>Add, remove, or relocate charging stations</li>
                    <li>Update this policy from time to time</li>
                  </ul>
                  <p>
                    We will notify users through our website or app when
                    significant changes occur.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-button">
                <span>10. Governing Law</span>
                <svg
                  className="accordion-icon"
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
              <div className="accordion-content">
                <div className="accordion-content-inner">
                  <p>
                    This policy is governed by the laws of the Islamic Republic
                    of Pakistan, and any disputes related to services shall fall
                    under the exclusive jurisdiction of Pakistani courts.
                  </p>
                </div>
              </div>
            </div>
            <h2 id="privacy-policy">Privacy Policy</h2>
            <div className="accordion-item">
              <button className="accordion-button">
                <span>1. Information We Collect</span>
                <svg
                  className="accordion-icon"
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
              <div className="accordion-content">
                <div className="accordion-content-inner">
                  <p>
                    We may collect and store the following types of information
                    when you use our EV charging services:
                  </p>
                  <p>
                    <b>a) Personal Information</b>
                  </p>
                  <ul>
                    <li>Full Name</li>
                    <li>Contact Information (Phone number, Email address)</li>
                    <li>
                      Vehicle Information (Make, Model, Registration Number,
                      Charging History)
                    </li>
                  </ul>
                  <p>
                    <b>b) Usage and Technical Data</b>
                  </p>
                  <ul>
                    <li>
                      Charging session details (e.g., time, duration, location,
                      energy consumed)
                    </li>
                    <li>
                      Device information (e.g., IP address, device identifiers)
                    </li>
                    <li>
                      Location data (if enabled and relevant to service
                      delivery)
                    </li>
                  </ul>
                  <p>
                    <b>Important:</b> We do not collect or store any
                    payment-related information, including credit or debit card
                    numbers. All payments are processed through secure,
                    third-party payment service providers in compliance with
                    applicable financial and cybersecurity regulations.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-button">
                <span>2. Purpose of Data Collection</span>
                <svg
                  className="accordion-icon"
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
              <div className="accordion-content">
                <div className="accordion-content-inner">
                  <p>
                    We collect and use your data for the following lawful
                    purposes:
                  </p>
                  <ul>
                    <li>
                      To provide, manage, and improve our EV charging services
                    </li>
                    <li>
                      To personalize your user experience and recommend charging
                      stations based on your usage
                    </li>
                    <li>
                      To facilitate support, troubleshooting, and customer care
                    </li>
                    <li>
                      To notify you about service updates, promotions, or
                      technical notices
                    </li>
                    <li>
                      To maintain network security and detect fraudulent or
                      unauthorized activity
                    </li>
                    <li>
                      To conduct aggregated data analytics and performance
                      optimization
                    </li>
                  </ul>
                  <p>
                    All data used for analytics is aggregated and anonymized. No
                    personally identifiable information is used for statistical
                    reporting or shared with third parties in an identifiable
                    form.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-button">
                <span>3. Data Sharing and Disclosure</span>
                <svg
                  className="accordion-icon"
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
              <div className="accordion-content">
                <div className="accordion-content-inner">
                  <p>
                    We do not sell or rent your personal information. We do not
                    share any personally identifiable information with third
                    parties, except in the following cases:
                  </p>
                  <ul>
                    <li>
                      <b>Service Providers:</b> Trusted vendors or contractors
                      who perform services on our behalf (e.g., hosting,
                      analytics, customer support), under strict confidentiality
                      obligations.
                    </li>
                    <li>
                      <b>Legal Compliance:</b> When required by law, court
                      order, or government authority under applicable Pakistani
                      legislation.
                    </li>
                    <li>
                      <b>Public Safety and Fraud Prevention:</b> To protect our
                      rights, property, and users or to detect and prevent fraud
                      or security issues.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-button">
                <span>4. Data Retention</span>
                <svg
                  className="accordion-icon"
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
              <div className="accordion-content">
                <div className="accordion-content-inner">
                  <p>
                    We retain personal data only as long as necessary for the
                    purposes stated in this policy, or as required by law or
                    legitimate business needs. Once no longer required, data is
                    securely deleted or anonymized.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-button">
                <span>5. Data Security</span>
                <svg
                  className="accordion-icon"
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
              <div className="accordion-content">
                <div className="accordion-content-inner">
                  <p>
                    Zvolta employs appropriate technical and organizational
                    measures to safeguard your personal data, including:
                  </p>
                  <ul>
                    <li>Encryption of data in transit</li>
                    <li>Secure servers and restricted access controls</li>
                    <li>Regular security audits and system updates</li>
                  </ul>
                  <p>
                    While we strive to protect your information, no system is
                    completely immune to risks. You are encouraged to take
                    precautions to protect your personal information as well.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-button">
                <span>6. Your Rights Under Pakistani Law</span>
                <svg
                  className="accordion-icon"
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
              <div className="accordion-content">
                <div className="accordion-content-inner">
                  <p>
                    Under applicable Pakistani data protection laws, you may
                    have the right to:
                  </p>
                  <ul>
                    <li>Access the personal data we hold about you</li>
                    <li>
                      Request correction of incorrect or outdated information
                    </li>
                    <li>
                      Withdraw your consent (where processing is based on
                      consent)
                    </li>
                    <li>
                      Request deletion of your data, subject to legal
                      obligations
                    </li>
                  </ul>
                  <p>
                    To exercise your rights, you may contact us using the
                    information provided in Section 8 below.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-button">
                <span>7. Third-Party Services</span>
                <svg
                  className="accordion-icon"
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
              <div className="accordion-content">
                <div className="accordion-content-inner">
                  <p>
                    Our platform may contain links or integrations with
                    third-party services, such as payment gateways or navigation
                    apps. These third parties have their own privacy policies
                    and practices, and we are not responsible for their data
                    handling procedures.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-button">
                <span>8. Contact Us</span>
                <svg
                  className="accordion-icon"
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
              <div className="accordion-content">
                <div className="accordion-content-inner">
                  <p>
                    If you have any questions about this Privacy Policy, your
                    personal data, or wish to exercise your rights, you may
                    contact us at:
                    <br />
                    Zvolta Private Limited
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-button">
                <span>9. Changes to This Privacy Policy</span>
                <svg
                  className="accordion-icon"
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
              <div className="accordion-content">
                <div className="accordion-content-inner">
                  <p>
                    We reserve the right to amend or update this Privacy Policy
                    at any time in response to legal, technical, or business
                    developments. When we make changes, we will revise the
                    "Effective Date" at the top of this page. Continued use of
                    our Services after such updates constitutes acceptance of
                    the revised policy.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-button">
                <span>10. Governing Law</span>
                <svg
                  className="accordion-icon"
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
              <div className="accordion-content">
                <div className="accordion-content-inner">
                  <p>
                    This Privacy Policy is governed by the laws of the Islamic
                    Republic of Pakistan, and any disputes arising under or
                    related to this policy shall be subject to the exclusive
                    jurisdiction of the courts of Pakistan.
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
                        href="https://www.instagram.com/orionedgedigital.pk"
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

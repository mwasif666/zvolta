export function InvestorInterestFormSection() {
  return (
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
            Thank you for your interest. Our investment relations team will be
            in touch with you shortly.
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
            Sorry, there was an error sending your message. Please try again
            later.
          </p>
        </div>
      </div>
    </div>
  );
}

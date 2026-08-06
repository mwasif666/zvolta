export function PartnerApplicationFormSection() {
  return (
    <div
      className="lg:w-1/2 w-full relative flex items-center justify-center p-8"
      style={{
        backgroundImage: 'url("/img/twisty-gradient-2-comp.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-25" />
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 md:p-12 z-10">
        <div id="form-container">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Let's get started.
          </h3>
          <p className="text-gray-600 mb-8">
            Fill out this simple form. Our team will get back to you shortly.
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
                  defaultValue=""
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition form-select"
                >
                  <option value="" disabled>
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
                  defaultValue=""
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition form-select"
                >
                  <option value="" disabled>
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
                defaultValue={""}
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
                  Yes, I want to receive news and opportunities about ZVolta’s
                  clean mobility network.
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
            We've received your partnership request and our team will be in
            touch with you shortly.
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
            Oops! There was a problem submitting your form. Please check the
            fields and try again.
          </p>
        </div>
      </div>
    </div>
  );
}

export function InvestmentOverviewSection() {
  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-12 lg:p-16 bg-gray-50">
      <div className="max-w-md w-full">
        <p className="text-sm font-semibold text-green-600 uppercase tracking-wider">
          INVEST WITH ZVOLTA
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight">
          Invest in the Future of{" "}
          <span className="animated-gradient-text">Mobility.</span>
        </h1>
        <p className="mt-6 text-gray-600">
          ZVolta is pioneering the shift to sustainable transport in Pakistan.
          By registering your interest, you gain exclusive access to information
          about a high-growth opportunity at the intersection of technology,
          energy, and mobility.
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
                Tap into the rapidly expanding EV market in one of the world's
                most populous countries.
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
                Our integrated ecosystem of vehicles, charging, and driver
                networks is built for scalability.
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
  );
}

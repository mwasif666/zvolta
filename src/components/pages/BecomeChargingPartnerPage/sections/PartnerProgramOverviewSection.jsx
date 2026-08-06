import { SmartLink } from "../../BecomeChargingPartnerPage.shared.jsx";
export function PartnerProgramOverviewSection() {
  return (
    <div className="lg:w-1/2 w-full bg-white flex flex-col justify-center p-8 md:p-16">
      <div className="max-w-md mx-auto">
        <div className="mb-10">
          <SmartLink href="/" aria-label="ZVolta Home">
            <img
              src="/img/full_Logoblack.png"
              alt="ZVolta Logo"
              className="h-12 w-auto"
            />
          </SmartLink>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
          Become a <span className="gradient-text">Charging Partner.</span>
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Join ZVolta’s nationwide charging network. Turn your property into a
          smart EV charging station and earn daily income. We handle
          installation, tech, and support.
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
  );
}

import { SmartLink } from "../../DriverNetworkPage.shared.jsx";
export function DriverHeroSection() {
  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-2"
      style={{
        minHeight: "calc(100vh - 96px)",
      }}
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
            <em className="not-italic text-primary-emerald font-bold">Your</em>
            Terms.
          </h1>
          <p
            className="mt-6 text-lg sm:text-xl text-gray-600 max-w-lg"
            data-load-animate
            data-delay={100}
          >
            We've created a simple rent-and-earn model with zero down payment,
            so you can focus on what matters: driving and earning.
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
        style={{
          backgroundImage: 'url("/img/zvolta-5.jpg")',
        }}
      >
        <img
          src="/img/zvolta-5.jpg"
          alt="Electric rickshaw parked on a street"
          className="sr-only"
        />
      </div>
    </section>
  );
}

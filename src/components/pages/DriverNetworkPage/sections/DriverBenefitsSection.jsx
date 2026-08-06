export function DriverBenefitsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="pr-0 md:pr-10 order-2 md:order-1" data-scroll-animate>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-text mb-6">
              Why Drive With ZVolta?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              We're more than just a vehicle provider; we're your partner in
              success. We handle the hassles so you can focus on driving and
              earning.
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
                  <span className="font-bold">Zero Down Payment.</span> Save
                  yourself from the initial up-front partial payment
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
                  Access our fleet of GPS-enabled, well-maintained electric
                  vehicles with 24/7 support and service.
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
                  <span className="font-bold">Join the Movement.</span> Be a
                  part of building a cleaner, greener transportation future.
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
              src="/img/zvolta-9.png"
              alt="Happy ZVolta driver with an electric rickshaw"
              className="rounded-xl shadow-2xl object-cover w-full h-full"
              data-inline-onerror="this.onerror=null;this.src='https://placehold.co/800x600/E0E0E0/BDBDBD?text=Image+Not+Found';"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

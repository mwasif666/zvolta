export function StepsSection() {
  return (
    <section id="steps" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-dark-text"
            data-scroll-animate
          >
            Your Journey in 3 Simple Steps
          </h2>
          <p
            className="mt-4 text-lg text-gray-600"
            data-scroll-animate
            data-delay={100}
          >
            Getting on the road with ZVolta is fast and straightforward.
          </p>
        </div>
        <div className="relative">
          <div className="hidden md:block steps-container" />
          <div className="grid md:grid-cols-3 gap-12">
            <div className="step-card text-center bg-white" data-scroll-animate>
              <div className="mb-6 inline-block bg-accent-yellow text-primary-emerald-dark p-6 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ring-8 ring-white">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Step 1: Apply Online</h3>
              <p className="text-gray-600 px-4">
                Fill out our quick online form. It takes just a few minutes to
                tell us about yourself and get started.
              </p>
            </div>
            <div
              className="step-card text-center bg-white"
              data-scroll-animate
              data-delay={200}
            >
              <div className="mb-6 inline-block bg-accent-yellow text-primary-emerald-dark p-6 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ring-8 ring-white">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Step 2: Get Verified</h3>
              <p className="text-gray-600 px-4">
                Our team will quickly review your application and guide you
                through a simple and secure verification process.
              </p>
            </div>
            <div
              className="step-card text-center bg-white"
              data-scroll-animate
              data-delay={400}
            >
              <div className="mb-6 inline-block bg-accent-yellow text-primary-emerald-dark p-6 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ring-8 ring-white">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                  <path d="M17.657 17.657L19.07 19.07M4.929 4.93L6.343 6.343m12.728 0l-1.414 1.414M6.343 17.657l1.414-1.414M12 21a9 9 0 100-18 9 9 0 000 18z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Step 3: Start Driving</h3>
              <p className="text-gray-600 px-4">
                Choose your EV, get the keys, and hit the road. You can start
                earning from your very first day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

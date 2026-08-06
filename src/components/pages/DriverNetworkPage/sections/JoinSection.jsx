import { SmartLink } from "../../DriverNetworkPage.shared.jsx";
export function JoinSection() {
  return (
    <section id="join" className="bg-white">
      <div
        className="container mx-auto px-6 py-20 text-center bg-accent-yellow rounded-2xl my-10"
        data-scroll-animate
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-dark-text mb-4">
          Ready To Earn Extra Income?
        </h2>
        <p className="text-lg text-gray-800 max-w-2xl mx-auto mb-10">
          Take the driver's seat in your career. Join ZVolta today and unlock a
          new way to earn.
        </p>
        <SmartLink
          href="/contact-us"
          className="group flex items-center justify-center gap-3 bg-primary-emerald text-white font-bold text-lg py-4 px-8 rounded-full shadow-lg hover:bg-primary-emerald-dark transition-all duration-300 transform hover:-translate-y-1 w-fit mx-auto"
        >
          Contact Us
          <svg
            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </SmartLink>
      </div>
    </section>
  );
}

import { SmartLink } from "../../IndexPage.shared.jsx";
export function HorizontalScrollSection() {
  return (
    <section
      id="horizontal-scroll-section"
      className="py-12 px-4 md:px-8 bg-transparent border-t border-white/10 md:min-h-screen flex flex-col justify-center"
    >
      <div className="max-w-[1600px] 3xl:max-w-[2200px] mx-auto w-full">
        <div
          id="cards-wrapper"
          className="flex flex-col md:grid md:grid-cols-3 gap-6 w-full"
        >
          <div className="card-hover-trigger group relative w-full md:w-auto h-[450px] md:h-[550px] 3xl:h-[750px] overflow-hidden bg-zinc-900 rounded-[2.5rem] transition-transform duration-500 hover:-translate-y-2 border border-white/5">
            <div className="absolute inset-0 w-full h-full card-slideshow">
              <img
                src="img/Host/03.jpg"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out scale-110 opacity-100"
                alt="Host Slide 1"
              />
              <img
                src="img/Host/02.png"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out scale-110 opacity-0"
                alt="Host Slide 2"
              />
              <img
                src="img/Host/03.png"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out scale-110 opacity-0"
                alt="Host Slide 3"
              />
              <img
                src="img/Host/04.png"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out scale-110 opacity-0"
                alt="Host Slide 4"
              />
              <img
                src="img/Host/05.png"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out scale-110 opacity-0"
                alt="Host Slide 5"
              />
              <img
                src="img/Host/Host.png"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out scale-110 opacity-0"
                alt="Host Slide 6"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-0 p-8 3xl:p-12 flex flex-col justify-between text-white z-20 pointer-events-none">
              <div className="pt-2">
                <h3 className="text-3xl md:text-4xl 3xl:text-6xl font-display font-bold mb-4 leading-tight">
                  Host A Charger
                </h3>
                <p className="text-gray-300 text-sm md:text-[15px] 3xl:text-xl leading-relaxed max-w-md font-light opacity-90">
                  Place a fully automated charger at your site and earn steady
                  revenue without human intervention. Whether you are a small
                  business looking to earn extra revenue or a large organization
                  taking visible climate action, Zvolta helps turn your location
                  into a smart charging point.
                </p>
              </div>
              <div className="flex justify-end pointer-events-auto">
                <SmartLink
                  href="/host"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-bold text-sm 3xl:text-lg transition-transform duration-300 hover:scale-105 hover:bg-emerald-400 hover:text-white shadow-lg"
                >
                  Start Hosting <i className="bi bi-arrow-right" />
                </SmartLink>
              </div>
            </div>
          </div>
          <div className="card-hover-trigger group relative w-full md:w-auto h-[450px] md:h-[550px] 3xl:h-[750px] overflow-hidden bg-zinc-900 rounded-[2.5rem] transition-transform duration-500 hover:-translate-y-2 border border-white/5">
            <div className="absolute inset-0 w-full h-full card-slideshow">
              <img
                src="img/Charge/01.png"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out scale-110 opacity-100"
                alt="Charge Slide 1"
              />
              <img
                src="img/Charge/02.png"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out scale-110 opacity-0"
                alt="Charge Slide 2"
              />
              <img
                src="img/Charge/03.png"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out scale-110 opacity-0"
                alt="Charge Slide 3"
              />
              <img
                src="img/Charge/04.png"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out scale-110 opacity-0"
                alt="Charge Slide 4"
              />
              <img
                src="img/Charge/05.png"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out scale-110 opacity-0"
                alt="Charge Slide 5"
              />
              <img
                src="img/Charge/06.png"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out scale-110 opacity-0"
                alt="Charge Slide 6"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-0 p-8 3xl:p-12 flex flex-col justify-between text-white z-20 pointer-events-none">
              <div className="pt-2">
                <h3 className="text-3xl md:text-4xl 3xl:text-6xl font-display font-bold mb-4 leading-tight">
                  Charge your vehicle
                </h3>
                <p className="text-gray-300 text-sm md:text-base 3xl:text-xl leading-relaxed max-w-sm font-light opacity-90">
                  Fast and simple charging for cars, bikes, and everything
                  electric.
                </p>
              </div>
              <div className="flex justify-end pointer-events-auto">
                <SmartLink
                  href="/charge"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-bold text-sm 3xl:text-lg transition-transform duration-300 hover:scale-105 hover:bg-emerald-400 hover:text-white shadow-lg"
                >
                  Find a station <i className="bi bi-arrow-right" />
                </SmartLink>
              </div>
            </div>
          </div>
          <div className="card-hover-trigger group relative w-full md:w-auto h-[450px] md:h-[550px] 3xl:h-[750px] overflow-hidden bg-zinc-900 rounded-[2.5rem] transition-transform duration-500 hover:-translate-y-2 border border-white/5">
            <div className="absolute inset-0 w-full h-full card-slideshow">
              <img
                src="img/Operate/01.png"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out scale-110 opacity-100"
                alt="Operate Slide 1"
              />
              <img
                src="img/Operate/02.png"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out scale-110 opacity-0"
                alt="Operate Slide 2"
              />
              <img
                src="img/Operate/03.png"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out scale-110 opacity-0"
                alt="Operate Slide 3"
              />
              <img
                src="img/Operate/04.png"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out scale-110 opacity-0"
                alt="Operate Slide 4"
              />
              <img
                src="img/Operate/05.png"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out scale-110 opacity-0"
                alt="Operate Slide 5"
              />
              <img
                src="img/Operate/Operate.png"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out scale-110 opacity-0"
                alt="Operate Slide 6"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-0 p-8 3xl:p-12 flex flex-col justify-between text-white z-20 pointer-events-none">
              <div className="pt-2">
                <h3 className="text-3xl md:text-4xl 3xl:text-6xl font-display font-bold mb-4 leading-tight">
                  Software for operators
                </h3>
                <p className="text-gray-300 text-sm md:text-[15px] 3xl:text-xl leading-relaxed max-w-md font-light opacity-90">
                  Have full control of your charging station with complete
                  visibility. Set your own pricing, manage timings, and track
                  every session from one clean dashboard.
                </p>
              </div>
              <div className="flex justify-end pointer-events-auto">
                <SmartLink
                  href="/software"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-bold text-sm 3xl:text-lg transition-transform duration-300 hover:scale-105 hover:bg-emerald-400 hover:text-white shadow-lg"
                >
                  Book A Demo <i className="bi bi-arrow-right" />
                </SmartLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

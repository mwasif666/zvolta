import { SmartLink } from "../../VehiclesPage.shared.jsx";
export function VehicleShowcaseSection() {
  return (
    <section
      id="vehicle-showcase"
      className="py-24 px-4 md:px-8 bg-zinc-50 border-t border-zinc-200 flex flex-col justify-center"
    >
      <div className="max-w-[1600px] 3xl:max-w-[2200px] mx-auto w-full">
        <div className="mb-12 md:mb-24 px-4">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-black mb-4">
            Choose Your EV
          </h2>
          <p className="text-zinc-500 text-xl max-w-xl">
            We offer a range of electric vehicles tailored to your needs.
          </p>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 w-full">
          <div className="group relative w-full md:w-auto h-[500px] 3xl:h-[700px] overflow-hidden bg-white rounded-[2.5rem] border border-gray-200 shadow-xl transition-transform duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 to-white z-0" />
            <div className="absolute inset-0 flex items-center justify-center p-8 z-10 transition-transform duration-700 group-hover:scale-105">
              <img
                src="/img/3-seater.png"
                alt="3-Seater Rickshaw"
                className="w-full h-auto max-h-[60%] object-contain drop-shadow-2xl"
                data-inline-onerror="this.src='https://placehold.co/600x400/transparent/333?text=3-Seater'"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full p-8 3xl:p-12 z-20 bg-white/80 backdrop-blur-md border-t border-gray-100">
              <h3 className="text-2xl md:text-4xl font-display font-bold mb-2">
                3-Seater Rickshaw
              </h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
                Compact and efficient. Perfect for city streets.
              </p>
              <SmartLink
                href="#contact-section"
                className="inline-flex items-center gap-2 font-bold text-emerald-600 hover:text-emerald-800 transition-colors"
              >
                View Details <i className="bi bi-arrow-right" />
              </SmartLink>
            </div>
          </div>
          <div className="group relative w-full md:w-auto h-[500px] 3xl:h-[700px] overflow-hidden bg-zinc-900 rounded-[2.5rem] border border-zinc-800 shadow-xl transition-transform duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/20 to-black z-0" />
            <div className="absolute inset-0 flex items-center justify-center p-8 z-10 transition-transform duration-700 group-hover:scale-105">
              <img
                src="/img/bike-ev.png"
                alt="Electric Bike"
                className="w-full h-auto max-h-[60%] object-contain drop-shadow-2xl"
                data-inline-onerror="this.src='https://placehold.co/600x400/transparent/fff?text=EV+Bike'"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full p-8 3xl:p-12 z-20 bg-zinc-900/90 backdrop-blur-md border-t border-white/10">
              <h3 className="text-2xl md:text-4xl font-display font-bold text-white mb-2">
                Electric Bike
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
                Ideal for delivery riders. Agile and cost-effective.
              </p>
              <SmartLink
                href="#contact-section"
                className="inline-flex items-center gap-2 font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                View Details <i className="bi bi-arrow-right" />
              </SmartLink>
            </div>
          </div>
          <div className="group relative w-full md:w-auto h-[500px] 3xl:h-[700px] overflow-hidden bg-white rounded-[2.5rem] border border-gray-200 shadow-xl transition-transform duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 to-white z-0" />
            <div className="absolute inset-0 flex items-center justify-center p-8 z-10 transition-transform duration-700 group-hover:scale-105">
              <img
                src="/img/Flux_Dev_a_highly_detailed_loader_rickshaw_with_a_sturdy_metal_3.jpg"
                alt="EV Loader"
                className="w-full h-auto max-h-[60%] object-contain drop-shadow-2xl"
                data-inline-onerror="this.src='https://placehold.co/600x400/transparent/333?text=Heavy+Loader'"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full p-8 3xl:p-12 z-20 bg-white/80 backdrop-blur-md border-t border-gray-100">
              <h3 className="text-2xl md:text-4xl font-display font-bold mb-2">
                EV Loader
              </h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
                800kg capacity. The perfect pickup replacement.
              </p>
              <SmartLink
                href="#contact-section"
                className="inline-flex items-center gap-2 font-bold text-emerald-600 hover:text-emerald-800 transition-colors"
              >
                View Details <i className="bi bi-arrow-right" />
              </SmartLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

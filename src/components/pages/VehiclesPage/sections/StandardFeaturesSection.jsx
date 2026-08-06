export function StandardFeaturesSection() {
  return (
    <section className="py-24 px-4 md:px-8 bg-white text-zinc-900">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Standard on All Vehicles
          </h2>
          <p className="text-gray-500 text-lg">
            Every ZVolta vehicle comes smart-enabled.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-50 border border-zinc-200 rounded-[2rem] p-8 hover:border-emerald-500/50 transition-colors group">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-emerald-600 text-2xl shadow-sm mb-6 group-hover:scale-110 transition-transform">
              <i className="fas fa-location-crosshairs" />
            </div>
            <h3 className="text-xl font-bold mb-2">GPS Tracking</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Real-time location updates via the ZVolta App.
            </p>
          </div>
          <div className="bg-zinc-900 text-white border border-zinc-800 rounded-[2rem] p-8 hover:border-emerald-500/50 transition-colors group">
            <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center text-emerald-400 text-2xl shadow-sm mb-6 group-hover:scale-110 transition-transform">
              <i className="fas fa-file-alt" />
            </div>
            <h3 className="text-xl font-bold mb-2">Daily Reporting</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Automated trip logs, earning reports, and efficiency metrics.
            </p>
          </div>
          <div className="bg-zinc-50 border border-zinc-200 rounded-[2rem] p-8 hover:border-emerald-500/50 transition-colors group">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-emerald-600 text-2xl shadow-sm mb-6 group-hover:scale-110 transition-transform">
              <i className="fas fa-battery-full" />
            </div>
            <h3 className="text-xl font-bold mb-2">Battery Health</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Predictive maintenance alerts. Monitor voltage and range.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

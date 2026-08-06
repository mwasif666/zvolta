export function PassiveIncomeProcessSection() {
  return (
    <section className="py-24 px-6 bg-white relative border-t border-gray-100">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-zinc-900 mb-6">
          A Simple Path to <br />{" "}
          <span className="text-emerald-600">Passive Income</span>
        </h2>
        <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
          In three easy steps, you can start earning from the green transport
          revolution.
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="group bg-white border border-zinc-100 rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-zinc-100 hover:shadow-2xl hover:shadow-zinc-200/50 hover:border-emerald-100 hover:-translate-y-2 transition-all duration-300 cursor-default relative overflow-hidden">
          <div className="w-20 h-20 rounded-2xl bg-zinc-900 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <i className="bi bi-check-circle-fill text-3xl text-white" />
          </div>
          <h3 className="text-2xl font-bold text-zinc-900 mb-4">
            Choose Your Rickshaw
          </h3>
          <p className="text-zinc-500 leading-relaxed">
            Select a 3 or 6-seater passenger model, or a versatile loader EV
            rickshaw to match your investment goals.
          </p>
        </div>
        <div className="group bg-white border border-zinc-100 rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-zinc-100 hover:shadow-2xl hover:shadow-zinc-200/50 hover:border-emerald-100 hover:-translate-y-2 transition-all duration-300 cursor-default relative overflow-hidden">
          <div className="w-20 h-20 rounded-2xl bg-zinc-900 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <i className="bi bi-currency-exchange text-3xl text-white" />
          </div>
          <h3 className="text-2xl font-bold text-zinc-900 mb-4">
            We Rent It Out
          </h3>
          <p className="text-zinc-500 leading-relaxed">
            Our team finds, verifies, and contracts professional drivers,
            ensuring your asset is in good hands.
          </p>
        </div>
        <div className="group bg-white border border-zinc-100 rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-zinc-100 hover:shadow-2xl hover:shadow-zinc-200/50 hover:border-emerald-100 hover:-translate-y-2 transition-all duration-300 cursor-default relative overflow-hidden">
          <div className="w-20 h-20 rounded-2xl bg-zinc-900 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <i className="bi bi-graph-up-arrow text-3xl text-white" />
          </div>
          <h3 className="text-2xl font-bold text-zinc-900 mb-4">
            Fixed Monthly Return
          </h3>
          <p className="text-zinc-500 leading-relaxed">
            Receive a consistent, fixed monthly return directly to your account.
            Predictable income, zero effort.
          </p>
        </div>
      </div>
    </section>
  );
}

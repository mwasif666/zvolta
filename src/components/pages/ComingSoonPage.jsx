import { SmartLink } from "./ComingSoonPage.shared.jsx";
export default function ComingSoonPage() {
  return (
    <>
      <div>
        <div className="fixed top-[-20%] left-[-20%] w-[120vw] h-[120vw] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none z-0 animate-pulse-slow" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[100vw] h-[100vw] bg-lime-500/5 blur-[120px] rounded-full pointer-events-none z-0" />
        <main className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-24 text-center">
          <div className="mb-8 w-24 h-24 rounded-full bg-zinc-900 border border-emerald-500/30 flex items-center justify-center shadow-[0_0_40px_rgba(22, 163, 74,0.15)] animate-pulse-slow">
            <i className="bi bi-cone-striped text-4xl text-emerald-500" />
          </div>
          <h1
            className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6"
          >
            Powering <br />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-400 to-emerald-600">
              Up Soon
            </span>
          </h1>
          <p
            className="text-zinc-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed"
          >
            This page is currently plugged in and charging. We are building
            something electric for you.
          </p>
          <SmartLink
            href="/"
            className="group relative px-8 py-4 bg-zinc-900 text-white rounded-full font-bold text-lg border border-zinc-700 hover:border-emerald-500 transition-all duration-300 hover:bg-emerald-600 hover:text-black hover:shadow-[0_0_30px_rgba(22, 163, 74,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Return Home{" "}
              <i className="bi bi-arrow-right transition-transform group-hover:translate-x-1" />
            </span>
          </SmartLink>
        </main>
      </div>
    </>
  );
}

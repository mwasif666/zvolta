import "../../MobilePage.module.css";
import { SmartLink } from "../../MobilePage.shared.jsx";
export function AppAccessOptionsSection() {
  return (
    <div className="w-full flex flex-col gap-3 px-6">
      <SmartLink
        href="https://play.google.com/store/apps/details?id=com.zvolta.app"
        // href="https://play.google.com/store/apps/details?id=app.zvolta.android"
        className="group relative w-full rounded-2xl overflow-hidden transform transition-transform active:scale-95 duration-200"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-lime-400 to-emerald-600 animate-gradient-x opacity-100" />
        <div className="relative m-[1px] bg-zinc-900 hover:bg-zinc-800 transition-colors rounded-[15px] px-5 py-3 flex items-center justify-between group-hover:bg-zinc-800/90">
          <div className="flex items-center gap-3">
            <i className="bi bi-google-play text-2xl text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
            <div className="text-left">
              <div className="text-[9px] uppercase tracking-wider text-emerald-400/80 font-bold mb-0.5">
                Recommended
              </div>
              <div className="text-base font-bold text-white leading-none">
                Get the App
              </div>
            </div>
          </div>
          <i className="bi bi-chevron-right text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
        </div>
      </SmartLink>
      <div className="flex items-center gap-4 w-full py-1">
        <div className="h-px bg-white/5 flex-grow" />
        <span className="text-zinc-600 text-[10px] font-mono uppercase tracking-widest">
          Or instant web access
        </span>
        <div className="h-px bg-white/5 flex-grow" />
      </div>
      <SmartLink
        href="https://evrental-app.orkofleet.com/login"
        className="group w-full glass-panel hover:bg-white/5 text-zinc-300 hover:text-white rounded-2xl px-5 py-3 flex items-center justify-between transition-all duration-200 active:scale-95 border border-white/5 hover:border-white/20"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center border border-white/5">
            <i className="bi bi-globe text-base" />
          </div>
          <div className="text-left">
            <div className="text-sm font-bold leading-none">
              Use Web Browser
            </div>
            <div className="text-[10px] text-zinc-500 mt-1">
              No download required
            </div>
          </div>
        </div>
        <i className="bi bi-box-arrow-up-right text-sm text-zinc-600 group-hover:text-zinc-300 transition-colors" />
      </SmartLink>
    </div>
  );
}

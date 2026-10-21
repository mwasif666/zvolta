"use client";

import React from "react";
import {
  LuArrowUpRight,
  LuGlobe,
  LuHouse,
  LuMonitorSmartphone,
  LuPlugZap,
  LuZap,
} from "react-icons/lu";

/**
 * The existing ZVolta project already ships Tailwind 3 and react-icons/lu
 * (Lucide icons). No extra runtime dependencies or fictional metrics required.
 */
export type StatsBentoProps = {
  className?: string;
};

export const StatsBento = ({ className = "" }: StatsBentoProps) => {
  return (
    <section
      className={`cita-reel-stats relative overflow-hidden bg-[#f6faf5] pb-16 pt-10 sm:pb-20 sm:pt-12 ${className}`}
      aria-label="CITA EV at a glance"
    >
      <div className="cita-shell">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:grid-rows-[172px_172px]">
          {/* Main metric, spanning both rows just like the reference bento. */}
          <article className="relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-3xl bg-[#08482d] p-7 text-white shadow-[0_22px_48px_-26px_rgba(8,72,45,0.45)] sm:col-span-2 sm:p-9 lg:col-span-3 lg:row-span-2 lg:min-h-0">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, #e8ffe5 0px, #e8ffe5 1px, transparent 1px, transparent 13px)",
                maskImage:
                  "radial-gradient(ellipse 85% 80% at 110% 0%, black 10%, transparent 100%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 85% 80% at 110% 0%, black 10%, transparent 100%)",
              }}
              aria-hidden="true"
            />
            <LuGlobe
              className="pointer-events-none absolute -bottom-12 -right-7 h-52 w-52 text-white/10 sm:h-64 sm:w-64"
              strokeWidth={0.8}
              aria-hidden="true"
            />
            <div className="relative z-10">
              <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/90">
                <LuGlobe className="h-4 w-4" aria-hidden="true" />
                Global Presence
              </span>
              <h2 className="text-[76px] font-semibold leading-none tracking-[-0.055em] sm:text-[92px] lg:text-[100px]">
                35<span className="text-[#6af0ae]">+</span>
              </h2>
              <p className="mt-2 text-lg font-semibold tracking-[-0.015em] text-white">
                Countries
              </p>
            </div>
            <div className="relative z-10 mt-8 flex items-end justify-between gap-4">
              <p className="max-w-xs text-sm leading-relaxed text-white/75">
                Global presence and growing.
              </p>
              <LuArrowUpRight
                className="h-6 w-6 shrink-0 text-[#6af0ae]"
                aria-hidden="true"
              />
            </div>
          </article>

          {/* Wide stat with visual AC/DC split; no invented performance chart. */}
          <article className="relative flex min-h-[170px] items-center justify-between gap-4 overflow-hidden rounded-3xl border border-[#e0eae3] bg-[#eaf2ec] p-6 sm:col-span-2 lg:col-span-3 lg:min-h-0 lg:p-8">
            <div className="relative z-10 min-w-0">
              <p className="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#537365]">
                <LuZap className="h-4 w-4 text-[#13834e]" aria-hidden="true" />
                Charging Hardware
              </p>
              <h3 className="text-[35px] font-semibold leading-none tracking-[-0.045em] text-[#10251a] sm:text-[43px]">
                AC &amp; DC
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#587064]">
                Complete charging portfolio
              </p>
            </div>
            <div className="relative flex shrink-0 items-center gap-2 sm:gap-3" aria-hidden="true">
              <span className="flex h-[72px] w-[54px] flex-col items-center justify-center gap-1 rounded-2xl border border-[#c9dfd1] bg-white text-[#0c6640] shadow-[0_7px_20px_rgba(13,67,37,0.06)] sm:h-[90px] sm:w-[68px]">
                <LuPlugZap className="h-6 w-6 sm:h-7 sm:w-7" />
                <span className="text-[10px] font-bold tracking-widest">AC</span>
              </span>
              <span className="flex h-[82px] w-[54px] flex-col items-center justify-center gap-1 rounded-2xl bg-[#0b7046] text-white shadow-[0_9px_22px_rgba(8,72,45,0.16)] sm:h-[104px] sm:w-[68px]">
                <LuZap className="h-6 w-6 sm:h-7 sm:w-7" />
                <span className="text-[10px] font-bold tracking-widest">DC</span>
              </span>
            </div>
          </article>

          {/* Narrow companion tile, same asymmetric 1-column reference layout. */}
          <article className="flex min-h-[165px] flex-col items-start justify-center gap-3 rounded-3xl border border-[#e1eae4] bg-white p-6 shadow-[0_10px_25px_rgba(8,72,45,0.035)] lg:col-span-1 lg:min-h-0">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#e5f7eb] text-[#108d52]">
              <LuMonitorSmartphone className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-[25px] font-semibold leading-tight tracking-[-0.04em] text-[#10251a]">
                CITA EV
              </h3>
              <p className="mt-1 text-xs font-medium leading-snug text-[#607669]">
                App &amp; CPMS
              </p>
            </div>
          </article>

          {/* Wide companion tile completes the lower row. */}
          <article className="relative flex min-h-[165px] items-center justify-between gap-4 overflow-hidden rounded-3xl bg-[#143a29] p-6 text-white lg:col-span-2 lg:min-h-0">
            <div className="relative z-10 min-w-0">
              <span className="mb-3 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-[#77f0ad]">
                <LuHouse className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="max-w-[210px] text-[22px] font-semibold leading-tight tracking-[-0.035em]">
                Home to Public
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-white/70">
                Charging for every environment
              </p>
            </div>
            <LuArrowUpRight
              className="relative z-10 h-6 w-6 shrink-0 text-[#6af0ae]"
              aria-hidden="true"
            />
            <span className="pointer-events-none absolute -bottom-16 -right-14 h-40 w-40 rounded-full border-[23px] border-white/[0.045]" aria-hidden="true" />
          </article>
        </div>
      </div>
    </section>
  );
};

export default StatsBento;

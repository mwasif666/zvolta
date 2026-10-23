"use client";

import React from "react";
import {
  LuGlobe,
  LuHouse,
  LuMonitorSmartphone,
  LuPlugZap,
  LuZap,
} from "react-icons/lu";

export type StatsBentoProps = {
  className?: string;
};

/**
 * An editorial overview, not a performance dashboard. Every label comes from
 * CITA's existing content; decorative hardware icons are NOT fake buttons.
 */
export const StatsBento = ({ className = "" }: StatsBentoProps) => (
  <section
    className={`cita-reel-stats bg-[#f6faf5] ${className}`}
    aria-labelledby="cita-at-a-glance"
  >
    <div className="cita-shell">
      <header className="mb-7 flex flex-col justify-between gap-4 md:mb-8 md:flex-row md:items-end md:gap-10">
        <div>
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#168653]">
            <span
              className="h-[2px] w-7 rounded-full bg-[#12c56b]"
              aria-hidden="true"
            />
            CITA EV at a glance
          </p>
          <h2
            id="cita-at-a-glance"
            className="max-w-[730px] text-[clamp(30px,3.1vw,46px)] font-semibold leading-[1.13] tracking-[-0.03em] text-[#11271b]"
          >
            Charging for every environment.
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-[#506658] md:pb-1 md:text-base">
          A connected range of AC and DC hardware, charging software and
          solutions from homes to public networks.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:grid-rows-[150px_150px]">
        {/* Only supplied metric in the collection. */}
        <article className="relative flex min-h-[278px] flex-col justify-between overflow-hidden rounded-[26px] bg-[#08482d] p-7 text-white shadow-[0_18px_38px_-26px_rgba(8,72,45,0.35)] sm:col-span-2 sm:p-8 lg:col-span-3 lg:row-span-2 lg:min-h-0">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #e8ffe5 0px, #e8ffe5 1px, transparent 1px, transparent 16px)",
              maskImage: "linear-gradient(120deg, transparent 30%, black 100%)",
              WebkitMaskImage:
                "linear-gradient(120deg, transparent 30%, black 100%)",
            }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute right-5 top-[74px] grid h-[142px] w-[142px] place-items-center rounded-full border border-white/[0.12] text-white/[0.14] sm:right-10 sm:h-[164px] sm:w-[164px]"
            aria-hidden="true"
          >
            <LuGlobe
              className="h-[106px] w-[106px] sm:h-[124px] sm:w-[124px]"
              strokeWidth={0.9}
            />
          </div>
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.13em] text-white/85">
              <LuGlobe className="h-4 w-4" aria-hidden="true" />
              Global reach
            </span>
            <h3 className="mt-5 text-[clamp(74px,7.2vw,102px)] font-semibold leading-none tracking-[-0.06em]">
              35<span className="text-[#6af0ae]">+</span>
            </h3>
            <p className="mt-1 text-lg font-semibold tracking-[-0.015em]">
              Countries
            </p>
          </div>
          <div className="relative z-10 mt-7 border-t border-white/15 pt-4">
            <p className="max-w-[365px] text-[13px] leading-[1.65] text-[#dcf1e4] sm:text-sm">
              Home, workplace, fleet and public charging solutions with a
              growing international presence.
            </p>
          </div>
        </article>

        {/* Decorative labels instead of selectable-looking AC/DC buttons. */}
        <article className="relative flex min-h-[150px] items-center justify-between gap-4 overflow-hidden rounded-[24px] border border-[#dce8df] bg-[#e9f3ed] p-6 sm:col-span-2 lg:col-span-3 lg:min-h-0 lg:p-7">
          <div className="relative z-10 min-w-0">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.13em] text-[#446a53]">
              Charging hardware
            </p>
            <h3 className="text-[clamp(31px,3vw,41px)] font-semibold leading-none tracking-[-0.04em] text-[#112a1b]">
              AC &amp; DC
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#506a5b]">
              Complete charging portfolio
            </p>
          </div>
          <div
            className="flex shrink-0 items-center gap-3 text-[#116f46]"
            aria-hidden="true"
          >
            <span className="flex flex-col items-center gap-1">
              <LuPlugZap className="h-8 w-8 sm:h-9 sm:w-9" strokeWidth={1.5} />
              <span className="text-[10px] font-bold tracking-[0.08em]">
                AC
              </span>
            </span>
            <span className="h-10 w-px bg-[#bdd8c7]" />
            <span className="flex flex-col items-center gap-1">
              <LuZap className="h-8 w-8 sm:h-9 sm:w-9" strokeWidth={1.5} />
              <span className="text-[10px] font-bold tracking-[0.08em]">
                DC
              </span>
            </span>
          </div>
        </article>

        {/* Make the software proposition useful without invented statistics. */}
        <article className="relative flex min-h-[160px] flex-col justify-between overflow-hidden rounded-[24px] border border-[#dce8df] bg-white p-6 shadow-[0_8px_25px_rgba(8,72,45,0.04)] lg:col-span-1 lg:min-h-0 lg:p-5">
          <span
            className="grid h-10 w-10 place-items-center rounded-xl bg-[#e5f7ed] text-[#088847]"
            aria-hidden="true"
          >
            <LuMonitorSmartphone className="h-5 w-5" />
          </span>
          <div className="mt-3">
            <h3 className="text-[19px] font-semibold leading-[1.16] tracking-[-0.035em] text-[#11271b]">
              App &amp; CPMS
            </h3>
            <p className="mt-1 text-[12px] font-medium leading-snug text-[#536b5c]">
              CITA EV · Monitor &amp; manage
            </p>
          </div>
        </article>

        <article className="relative flex min-h-[160px] items-center justify-between gap-4 overflow-hidden rounded-[24px] border border-[#dce8df] bg-[#eef5ee] p-6 lg:col-span-2 lg:min-h-0">
          <div className="relative z-10 min-w-0">
            <span
              className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#daf0e2] text-[#128050]"
              aria-hidden="true"
            >
              <LuHouse className="h-5 w-5" />
            </span>
            <h3 className="text-[21px] font-semibold leading-tight tracking-[-0.03em] text-[#153527]">
              Home to Public
            </h3>
            <p className="mt-1 text-[13px] leading-relaxed text-[#4c6c5a]">
              Charging for every environment
            </p>
          </div>
          <span
            className="pointer-events-none absolute -bottom-12 -right-12 h-36 w-36 rounded-full border-[18px] border-[#cde6d4]/50"
            aria-hidden="true"
          />
        </article>
      </div>
    </div>
  </section>
);

export default StatsBento;

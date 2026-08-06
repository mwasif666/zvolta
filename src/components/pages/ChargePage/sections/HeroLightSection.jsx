import {
  APP_LINK,
  HeroDownloadButton,
  HeroFindButton,
  HeroVisual,
  Icon,
  MAP_LINK,
} from "../../ChargePage.shared.jsx";
export function HeroLightSection() {
  return (
    <section
      className="charge-hero-light relative overflow-hidden pt-32 pb-20 md:pt-36 md:pb-28"
      data-no-reveal
    >
      <div className="pointer-events-none absolute right-0 top-0 h-[680px] w-[680px] translate-x-1/4 rounded-full bg-[#16a34a]/10 blur-[130px]" />
      <div className="charge-container relative grid items-center gap-12 lg:grid-cols-2">
        <div className="charge-hero-copy max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#16a34a]/10 px-4 py-2 text-sm font-semibold text-[#16a34a]">
            <Icon name="bolt" className="h-4 w-4" />
            Simple EV charging
          </p>
          <h1 className="mt-7 text-[44px] font-extrabold leading-[1.02] tracking-tight text-zinc-900 sm:text-[58px] md:text-[72px]">
            Charge Anywhere Your Day Takes You
          </h1>
          <p className="mt-6 max-w-md text-lg leading-8 text-zinc-500">
            Find nearby Zvolta chargers and start charging through the app in
            minutes.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <HeroDownloadButton href={APP_LINK}>
              Download App
            </HeroDownloadButton>
            <HeroFindButton href={MAP_LINK}>Find Charger</HeroFindButton>
          </div>
        </div>

        <div className="charge-hero-visual">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

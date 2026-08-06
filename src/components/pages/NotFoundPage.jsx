import { Link, PageSeo, useLocation } from "./NotFoundPage.shared.jsx";
export default function NotFoundPage() {
  const { pathname } = useLocation();
  return (
    <section className="flex min-h-[75vh] items-center justify-center overflow-hidden bg-black px-6 py-32 text-center text-white">
      <PageSeo
        pathname={pathname}
        meta={{
          title: "Page Not Found | ZVolta",
          description: "The requested ZVolta page could not be found.",
          noIndex: true,
        }}
      />
      <div className="relative max-w-2xl">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/15 blur-[100px]" />
        <p className="relative font-mono text-sm font-bold uppercase tracking-[0.3em] text-emerald-400">
          Error 404
        </p>
        <h1 className="relative mt-5 text-5xl font-bold tracking-tight sm:text-7xl">
          Page not found
        </h1>
        <p className="relative mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-400">
          The page may have moved or the link may be incorrect. Return to the
          homepage or contact our team for help.
        </p>
        <div className="relative mt-9 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="rounded-full bg-emerald-500 px-6 py-3 font-bold text-black transition hover:bg-emerald-400"
          >
            Back to home
          </Link>
          <Link
            to="/contact-us"
            className="rounded-full border border-white/15 px-6 py-3 font-bold text-white transition hover:border-white/40"
          >
            Contact support
          </Link>
        </div>
      </div>
    </section>
  );
}

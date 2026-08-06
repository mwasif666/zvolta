import { supportCards } from "../../SupportPage.shared.jsx";
export function SupportChannelsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {supportCards.map((card) => (
            <article
              key={card.title}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#07110d] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.28)]"
            >
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-5">
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">
                  {card.title}
                </span>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  {card.note}
                </p>
                <div className="mt-5 space-y-2 text-sm text-white/78">
                  <a
                    href={`tel:${card.phone.replace(/\s+/g, "")}`}
                    className="block hover:text-emerald-300"
                  >
                    {card.phone}
                  </a>
                  <a
                    href={`mailto:${card.email}`}
                    className="block hover:text-emerald-300"
                  >
                    {card.email}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

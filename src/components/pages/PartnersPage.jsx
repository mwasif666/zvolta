import { SmartLink } from "../SmartLink";

const CONTACT_LINK = "/contact-us";
const STORIES_LINK = "/stories";

const partnerLogos = [
  { src: "/img/Easypaisa.webp", alt: "Easypaisa" },
  { src: "/img/biomas_energy.png", alt: "Biomas Energy" },
  { src: "/img/blitz.png", alt: "Blitz" },
  { src: "/img/Black-logo.webp", alt: "Zvolta partner" },
  { label: "Host Partner" },
  { label: "Clean Energy Partner" },
];

const heroCards = [
  "Hosts",
  "Businesses",
  "Operators",
  "Communities",
  "Clean energy partners",
];

const partnershipCards = [
  {
    title: "Host chargers",
    copy: "Add Zvolta chargers to your location and earn from charging sessions.",
  },
  {
    title: "Use software",
    copy: "Run chargers with Zvolta's app, dashboard, payments, and controls.",
  },
  {
    title: "Grow the network",
    copy: "Work with Zvolta to bring charging to more people and places.",
  },
];

const benefits = [
  {
    title: "More people at your location",
    copy: "Bring EV users to your space and give them a reason to stay.",
  },
  {
    title: "Cleaner brand presence",
    copy: "Show real action toward ESG and sustainability goals.",
  },
  {
    title: "Simple charging operations",
    copy: "Use Zvolta's app, software, payments, support, and dashboard to manage everything with less effort.",
  },
  {
    title: "Support from a local team",
    copy: "Work with a team that understands Pakistan's roads, power, and EV users.",
  },
];

const stories = [
  {
    tag: "Host",
    title: "How a coworking space added EV charging as a new reason to visit.",
    image: "/img/host An EV charging.jpg",
  },
  {
    tag: "Place",
    title: "How a restaurant increased customer time with a charger outside.",
    image: "/img/charging-post.jpg",
  },
  {
    tag: "Impact",
    title: "How a business used charging income to support monthly costs.",
    image: "/img/Host/Host.png",
  },
  {
    tag: "Sustainability",
    title: "How a company supported its ESG goals by adding Zvolta chargers.",
    image: "/img/clean-volta.jpg",
  },
];

const testimonials = [
  [
    "Zvolta helped us add charging without making the process complicated.",
    "Restaurant owner",
  ],
  [
    "People now have another reason to stop at our location.",
    "Coworking space manager",
  ],
  [
    "The dashboard makes it easy to see usage, earnings, and charger activity.",
    "Apartment representative",
  ],
  [
    "We wanted something useful for our customers and better for the environment.",
    "Business partner",
  ],
];

const partnerTypes = [
  "Apartment buildings",
  "Restaurants and cafes",
  "Universities and schools",
  "Hospitals",
  "Offices and coworking spaces",
  "Parking spaces",
  "Malls and outlets",
  "Public spaces",
  "Charger companies",
  "Fleet operators",
  "Enterprises",
  "Brands working toward ESG goals",
];

const trustPoints = [
  "Local team",
  "Smart chargers",
  "App and dashboard",
  "Support for hosts and operators",
];

function Icon({ name = "check", className = "h-5 w-5" }) {
  const props = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  if (name === "arrow") {
    return (
      <svg {...props}>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    );
  }

  return (
    <svg {...props}>
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function PrimaryButton({ href = CONTACT_LINK, children, className = "" }) {
  return (
    <SmartLink
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#00E5A8] px-5 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#00E5A8]/45 ${className}`}
    >
      {children}
      <Icon name="arrow" className="h-4 w-4" />
    </SmartLink>
  );
}

function SecondaryButton({ href = CONTACT_LINK, children, className = "" }) {
  return (
    <SmartLink
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#1F1F1F] bg-[#111111] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-[1.02] hover:border-[#00E5A8]/50 focus:outline-none focus:ring-2 focus:ring-white/20 ${className}`}
    >
      {children}
      <Icon name="arrow" className="h-4 w-4" />
    </SmartLink>
  );
}

function Section({ children, className = "" }) {
  return (
    <section className={`partners-section ${className}`}>
      <div className="partners-container">{children}</div>
    </section>
  );
}

function SectionIntro({ eyebrow, title, copy, centered = false }) {
  return (
    <div
      className={`partners-reveal ${centered ? "mx-auto text-center" : ""} max-w-3xl`}
    >
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase text-[#00E5A8]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-[32px] font-semibold leading-[1.12] text-white md:text-[36px]">
        {title}
      </h2>
      {copy ? (
        <p
          className={`${centered ? "mx-auto" : ""} mt-4 max-w-2xl text-base leading-7 text-[#A1A1A1]`}
        >
          {copy}
        </p>
      ) : null}
    </div>
  );
}

export default function PartnersPage() {
  return (
    <>
      <style data-page-style="partners-page">{`
        .partners-page {
          background: #0B0B0B;
          color: #FFFFFF;
          letter-spacing: 0;
          max-width: 100vw;
          overflow-x: hidden;
        }

        .partners-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .partners-section {
          padding: 104px 0;
          border-bottom: 1px solid #1F1F1F;
        }

        .partners-story-scroll {
          scrollbar-width: none;
        }

        .partners-story-scroll::-webkit-scrollbar {
          display: none;
        }

        @media (max-width: 767px) {
          .partners-container {
            padding: 0 18px;
          }

          .partners-section {
            padding: 76px 0;
          }
        }
      `}</style>

      <div className="partners-page font-sans">
        <section className="relative overflow-hidden border-b border-[#1F1F1F] pt-32 md:pt-40">
          <div className="pointer-events-none absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#00E5A8]/8 blur-[120px]" />
          <div className="partners-container relative grid min-h-[calc(100vh-120px)] gap-14 pb-24 lg:grid-cols-[0.95fr_0.85fr] lg:items-center">
            <div className="partners-reveal max-w-3xl">
              <p className="text-xs font-semibold uppercase text-[#00E5A8]">
                Zvolta partners
              </p>
              <h1 className="mt-5 text-[42px] font-semibold leading-[1.04] text-white md:text-[62px]">
                Our partners are helping more people move electric.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[#A1A1A1] md:text-lg">
                From public places to private businesses, Zvolta works with
                people who want to bring charging closer to everyday life.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton>Become a partner</PrimaryButton>
                <SecondaryButton href={STORIES_LINK}>
                  See partner stories
                </SecondaryButton>
              </div>
            </div>

            <div className="partners-reveal grid gap-4 sm:grid-cols-2">
              {heroCards.map((card, index) => (
                <div
                  key={card}
                  className={`rounded-lg border border-[#1F1F1F] bg-[#111111] p-6 ${index === 4 ? "sm:col-span-2" : ""}`}
                >
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#0B0B0B] text-[#00E5A8]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <p className="mt-8 text-xl font-semibold text-white">
                    {card}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Section>
          <SectionIntro
            eyebrow="Logo grid"
            title="Trusted by people building the electric future."
            copy="Hosts, businesses, operators, communities, and companies use Zvolta to support charging, software, and cleaner transport."
          />
          <div className="partners-reveal mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {partnerLogos.map((logo) => (
              <div
                key={logo.alt ?? logo.label}
                className="flex h-28 items-center justify-center rounded-lg border border-[#1F1F1F] bg-[#111111] px-5 grayscale transition duration-300 hover:scale-[1.02] hover:border-[#00E5A8]/35 hover:grayscale-0"
              >
                {logo.src ? (
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-10 max-w-full object-contain opacity-70"
                  />
                ) : (
                  <p className="text-center text-sm font-semibold text-[#A1A1A1]">
                    {logo.label}
                  </p>
                )}
              </div>
            ))}
          </div>
          <PrimaryButton className="mt-10">Talk to us</PrimaryButton>
        </Section>

        <Section>
          <SectionIntro
            eyebrow="What partnership looks like"
            title="Partnership can look different for every business."
            copy="Some partners host chargers. Some use our software. Some help us bring charging to more places. Some do all three."
          />
          <p className="partners-reveal mt-5 max-w-2xl text-base leading-7 text-[#A1A1A1]">
            The goal stays the same. Make EV charging easier to access, easier
            to manage, and easier to trust.
          </p>
          <div className="partners-reveal mt-12 grid gap-6 lg:grid-cols-3">
            {partnershipCards.map((card) => (
              <article
                key={card.title}
                className="rounded-lg border border-[#1F1F1F] bg-[#111111] p-6 transition duration-300 hover:scale-[1.02] hover:border-[#00E5A8]/35"
              >
                <div className="mb-10 grid h-10 w-10 place-items-center rounded-lg bg-[#0B0B0B] text-[#00E5A8]">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="text-[24px] font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#A1A1A1]">
                  {card.copy}
                </p>
              </article>
            ))}
          </div>
          <PrimaryButton className="mt-10">Become a partner</PrimaryButton>
        </Section>

        <Section>
          <SectionIntro
            eyebrow="Why partners choose Zvolta"
            title="Why partners choose Zvolta."
            copy="EV charging partners in Pakistan work with Zvolta to host EV chargers, support cleaner energy, and make charging easier for people."
          />
          <div className="partners-reveal mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-lg border border-[#1F1F1F] bg-[#111111] p-6"
              >
                <h3 className="text-xl font-semibold text-white">
                  {benefit.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#A1A1A1]">
                  {benefit.copy}
                </p>
              </article>
            ))}
          </div>
          <PrimaryButton className="mt-10">Get in touch</PrimaryButton>
        </Section>

        <Section>
          <SectionIntro
            eyebrow="Partner stories"
            title="Real places. Real use. Real impact."
            copy="See how different partners use Zvolta to bring charging, software, and cleaner energy to their spaces."
          />
          <div className="partners-story-scroll mt-12 flex snap-x gap-6 overflow-x-auto pb-4">
            {stories.map((story) => (
              <article
                key={story.title}
                className="w-[320px] shrink-0 snap-start overflow-hidden rounded-lg border border-[#1F1F1F] bg-[#111111] sm:w-[390px]"
              >
                <img
                  src={story.image}
                  alt=""
                  className="h-52 w-full object-cover"
                />
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase text-[#00E5A8]">
                    {story.tag}
                  </p>
                  <h3 className="mt-4 text-[24px] font-semibold leading-tight text-white">
                    {story.title}
                  </h3>
                  <SmartLink
                    href={STORIES_LINK}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#00E5A8]"
                  >
                    Read story
                    <Icon name="arrow" className="h-4 w-4" />
                  </SmartLink>
                </div>
              </article>
            ))}
          </div>
          <SecondaryButton href={STORIES_LINK} className="mt-8">
            Explore all stories
          </SecondaryButton>
        </Section>

        <Section>
          <SectionIntro eyebrow="Testimonials" title="What our partners say." />
          <div className="partners-reveal mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map(([quote, label]) => (
              <figure
                key={quote}
                className="rounded-lg border border-[#1F1F1F] bg-[#111111] p-6"
              >
                <blockquote className="text-base leading-7 text-white">
                  "{quote}"
                </blockquote>
                <figcaption className="mt-8 text-sm font-semibold text-[#A1A1A1]">
                  {label}
                </figcaption>
              </figure>
            ))}
          </div>
          <PrimaryButton className="mt-10">Become a partner</PrimaryButton>
        </Section>

        <Section>
          <SectionIntro
            eyebrow="Who can partner"
            title="Who can partner with Zvolta."
            copy="If your space, business, or network can help more people access charging, we can talk."
          />
          <div className="partners-reveal mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {partnerTypes.map((type) => (
              <div
                key={type}
                className="rounded-lg border border-[#1F1F1F] bg-[#111111] px-4 py-4 text-sm font-semibold text-white"
              >
                {type}
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-6 text-[#A1A1A1]">
            We support EV charging for businesses, restaurants, apartments,
            offices, and public spaces. Zvolta partners can also use ESG
            charging solutions and clean energy partner programs.
          </p>
          <PrimaryButton className="mt-9">
            Check if we can work together
          </PrimaryButton>
        </Section>

        <Section>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr]">
            <div>
              <SectionIntro
                eyebrow="Partner form"
                title="Let's bring charging to more places."
                copy="Tell us what kind of space, business, or network you have. We will help you understand what kind of partnership makes sense."
              />
              <div className="partners-reveal mt-8 grid gap-3 sm:grid-cols-2">
                {trustPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-lg border border-[#1F1F1F] bg-[#111111] px-4 py-3 text-sm font-semibold text-white"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <form
              className="partners-reveal grid gap-5 rounded-lg border border-[#1F1F1F] bg-[#111111] p-6 md:p-8"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="grid gap-5 md:grid-cols-2">
                {[
                  "Name",
                  "Email",
                  "Phone",
                  "Company or location name",
                  "City",
                ].map((field) => (
                  <label key={field} className="grid gap-3">
                    <span className="text-sm font-semibold text-white">
                      {field}
                    </span>
                    <input
                      type={field === "Email" ? "email" : "text"}
                      className="h-12 rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] px-4 text-white outline-none transition focus:border-[#00E5A8]"
                    />
                  </label>
                ))}
              </div>
              <label className="grid gap-3">
                <span className="text-sm font-semibold text-white">
                  What are you interested in?
                </span>
                <select className="h-12 rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] px-4 text-white outline-none transition focus:border-[#00E5A8]">
                  <option>Host a charger</option>
                  <option>Use Zvolta software</option>
                  <option>Partner with Zvolta</option>
                  <option>Something else</option>
                </select>
              </label>
              <label className="grid gap-3">
                <span className="text-sm font-semibold text-white">
                  Message
                </span>
                <textarea
                  rows="5"
                  className="rounded-lg border border-[#1F1F1F] bg-[#0B0B0B] px-4 py-3 text-white outline-none transition focus:border-[#00E5A8]"
                />
              </label>
              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#00E5A8] px-5 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-[1.02]"
              >
                Submit
                <Icon name="arrow" className="h-4 w-4" />
              </button>
            </form>
          </div>
        </Section>

        <section className="relative overflow-hidden py-24 md:py-32">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00E5A8]/8 blur-[120px]" />
          <div className="partners-container relative">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-[40px] font-semibold leading-[1.04] text-white md:text-[56px]">
                Your space, network, or business could be part of what comes
                next.
              </h2>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <PrimaryButton>Become a partner</PrimaryButton>
                <SecondaryButton>Contact us</SecondaryButton>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

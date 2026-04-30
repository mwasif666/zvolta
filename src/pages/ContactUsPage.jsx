import { useEffect, useState } from "react";
import { SmartLink } from "../components/SmartLink";

const dockLinks = [
  {
    href: "#hero-section",
    label: "Home",
    icon: "bi bi-house-door-fill",
    isIcon: true,
  },
  { href: "/charging-partners", label: "Hosting" },
  { href: "/charge", label: "Charging" },
  { href: "/software", label: "Software" },
];

const menuLinks = [
  { href: "#hero-section", label: "Home" },
  { href: "/charging-partners", label: "Hosting" },
  { href: "/charge", label: "Charging" },
  { href: "/software", label: "Software" },
];

const menuCards = [
  {
    href: "/charging-partners",
    title: "Host A Charger",
    description: "Turn your parking into revenue.",
    icon: "bi bi-buildings-fill",
  },
  {
    href: "/charge",
    title: "Find Stations",
    description: "Locate chargers nearby instantly.",
    icon: "bi bi-geo-alt-fill",
  },
  {
    href: "/software",
    title: "Software",
    description: "Powerful tools for operators.",
    icon: "bi bi-laptop-fill",
  },
  {
    href: "/coming-soon",
    title: "Company",
    description: "Our mission and careers.",
    icon: "bi bi-people-fill",
  },
];

const socialLinks = [
  {
    href: "https://www.facebook.com/share/1FUNJfnPd5/?mibextid=wwXIfr",
    icon: "bi bi-facebook",
    label: "Follow ZVolta on Facebook",
  },
  {
    href: "https://www.instagram.com/zvolta.pk",
    icon: "bi bi-instagram",
    label: "Follow ZVolta on Instagram",
  },
  {
    href: "https://wa.me/+923104446529",
    icon: "bi bi-whatsapp",
    label: "Contact ZVolta on WhatsApp",
  },
  {
    href: "mailto:admin@zvolta.com",
    icon: "bi bi-envelope",
    label: "Email ZVolta",
  },
];

const footerCompanyLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About" },
  { href: "/invest", label: "For Investors" },
  { href: "/charging-partners", label: "Charging Partners" },
];

const footerLearnLinks = [
  { href: "/driver-network", label: "Drivers" },
  { href: "/invest-form", label: "Invest" },
  { href: "/contact-us", label: "Contact" },
];

const policyLinks = [
  { href: "/policy#terms-and-conditions", label: "Terms and Conditions" },
  { href: "/policy#standard-service-policy", label: "Standard Service Policy" },
  { href: "/policy#privacy-policy", label: "Privacy Policy" },
  { href: "/policy#returns-policy", label: "Returns Policy" },
];

const getFallbackHandler = (fallbackSrc) => (event) => {
  event.currentTarget.onerror = null;
  event.currentTarget.src = fallbackSrc;
};

export default function ContactUsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [submitState, setSubmitState] = useState("idle");

  useEffect(() => {
    const finishLoading = () => {
      window.setTimeout(() => {
        setIsLoaded(true);
      }, 250);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading);
    }

    return () => {
      window.removeEventListener("load", finishLoading);
    };
  }, []);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = isMenuOpen ? "hidden" : originalOverflow;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const openMenu = () => setIsMenuOpen(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitState("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setSubmitState("success");
    } catch (error) {
      setSubmitState("error");
    }
  };

  const resetFormState = () => setSubmitState("idle");

  return (
    <>
      <style data-page-style="contact-us:1">{`body {
        font-family: 'Questrial', sans-serif;
      }
      .form-container-bg {
        background-image: url('img/gradient-1.jpg');
        background-size: cover;
        background-position: center;
      }
      .custom-navbar-glass {
        background-color: rgba(255, 255, 255, 0.8);
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
      }
      .glare-hover {
        overflow: hidden;
        position: relative;
      }
      .glare-hover::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
          var(--gh-angle, 90deg),
          hsla(0, 0%, 100%, 0) 40%,
          var(--gh-rgba, hsla(0, 0%, 100%, 0.25)) 50%,
          hsla(0, 0%, 100%, 0) 60%
        );
        transition: var(--gh-duration, 1s) ease;
        background-size: var(--gh-size, 250%) var(--gh-size, 250%), 100% 100%;
        background-repeat: no-repeat;
        background-position: -150% -150%, 0 0;
      }
      .glare-hover:hover {
        cursor: pointer;
      }
      .glare-hover:hover::before {
        background-position: 150% 150%, 0 0;
      }
      .animated-gradient-text {
        position: relative;
        display: inline-block;
        cursor: pointer;
        background-image: linear-gradient(90deg, #10b981, #22d3ee, #c8fa8b, #10b981);
        background-size: 200% auto;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        animation: gradient 4s linear infinite;
      }
      @keyframes gradient {
        to {
          background-position: 200% center;
        }
      }
      .no-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .no-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      .contact-shell {
        background:
          linear-gradient(135deg, rgba(5, 10, 12, 0.98), rgba(7, 19, 16, 0.94)),
          url('img/gradient-1.jpg');
        background-size: cover;
        background-position: center;
      }
      .contact-glass-card {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.06));
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 30px 90px rgba(0, 0, 0, 0.42), inset 0 1px 0 rgba(255, 255, 255, 0.2);
        -webkit-backdrop-filter: blur(24px);
        backdrop-filter: blur(24px);
      }
      .contact-form-label {
        color: rgba(255, 255, 255, 0.82);
      }
      .contact-form-input {
        width: 100%;
        border-radius: 0.875rem;
        border: 1px solid rgba(255, 255, 255, 0.2);
        background: rgba(255, 255, 255, 0.12);
        color: #ffffff;
        padding: 0.9rem 1rem;
        outline: none;
        transition: border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
      }
      .contact-form-input::placeholder {
        color: rgba(255, 255, 255, 0.46);
      }
      .contact-form-input:focus {
        border-color: rgba(16, 185, 129, 0.85);
        background: rgba(255, 255, 255, 0.16);
        box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.1);
      }
      .contact-form-input:-webkit-autofill {
        -webkit-text-fill-color: #ffffff;
        transition: background-color 9999s ease-in-out 0s;
      }
      .contact-form-input[type='checkbox'] {
        width: 1rem;
        height: 1rem;
        padding: 0;
        accent-color: #10b981;
      }`}</style>

      <div>
        {!isLoaded && (
          <div
            id="orion-loader"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "white",
              zIndex: 9999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="orion-loader-logo">
              <img
                src="img/zvolta-loader.gif"
                alt="Loading ZVolta..."
                draggable="false"
              />
            </div>
          </div>
        )}

        <header className="sticky top-0 z-50 w-full p-2 sm:p-3 transition-all duration-300">
          <SmartLink
            id="dynamic-logo"
            href="#hero-section"
            onClick={closeMenu}
            className="fixed top-6 left-6 z-[900] flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-zinc-900/90 shadow-xl backdrop-blur-md transition-all duration-500 hover:scale-105"
          >
            <img
              src="img/symbol logo.png"
              alt="ZVolta"
              className="h-6 w-auto"
            />
          </SmartLink>

          <button
            id="dynamic-sidebar-btn"
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            onClick={openMenu}
            className="fixed top-6 right-6 z-[900] flex h-12 w-12 items-center justify-center rounded-full border border-emerald-500/30 bg-[#006b45] text-white shadow-xl backdrop-blur-md transition-all duration-500 hover:scale-105 hover:bg-[#008f5d] group bg-c1c1c3"
          >
            <i className="bi bi-list text-2xl transition-transform duration-500 group-hover:rotate-180" />
          </button>

          <div
            id="floating-dock-container"
            className={`fixed top-6 left-1/2 z-[900] hidden -translate-x-1/2 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] md:block ${
              isMenuOpen
                ? "-translate-y-[200%] opacity-0 pointer-events-none"
                : "translate-y-0 opacity-100"
            }`}
          >
            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-[#111]/90 p-1.5 px-2 shadow-2xl ring-1 ring-white/5 backdrop-blur-xl">
              {dockLinks.map((item, index) => (
                <div key={item.href} className="flex items-center">
                  <SmartLink
                    href={item.href}
                    onClick={closeMenu}
                    className={
                      item.isIcon
                        ? "dock-pill-link group relative z-10 flex h-10 w-10 items-center justify-center rounded-full text-white/60 transition-colors hover:text-white"
                        : "dock-pill-link relative z-10 rounded-full px-4 py-2 text-xs font-bold text-white/60 transition-colors hover:text-white"
                    }
                  >
                    {item.isIcon ? (
                      <i className={`${item.icon} text-lg`} />
                    ) : (
                      item.label
                    )}
                  </SmartLink>
                  {index === 0 && <div className="mx-1 h-5 w-px bg-white/10" />}
                </div>
              ))}
            </div>
          </div>

          <div
            className={`fixed inset-0 z-[950] transition-all duration-500 ${
              isMenuOpen
                ? "pointer-events-auto opacity-100"
                : "pointer-events-none opacity-0"
            }`}
          >
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={closeMenu}
              className={`absolute inset-0 h-full w-full bg-black/60 backdrop-blur-md ${
                isMenuOpen ? "opacity-100" : "opacity-0"
              }`}
            />

            <div
              className={`absolute inset-0 h-[100dvh] w-full overflow-y-auto overflow-x-hidden no-scrollbar transition-transform duration-500 ${
                isMenuOpen ? "translate-y-0" : "-translate-y-full"
              }`}
            >
              <div className="absolute top-6 right-6 z-50">
                <button
                  id="mobile-menu-close"
                  type="button"
                  aria-label="Close menu"
                  onClick={closeMenu}
                  className={`flex h-14 w-14 items-center justify-center rounded-full bg-black text-white shadow-2xl transition-all duration-300 hover:rotate-90 hover:bg-emerald-600 ${
                    isMenuOpen
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-5 opacity-0"
                  }`}
                >
                  <i className="bi bi-x-lg text-xl" />
                </button>
              </div>

              <div className="relative z-10 mx-auto grid min-h-full w-full max-w-[1600px] grid-cols-1 gap-4 p-4 pt-24 pb-24 md:p-6 lg:grid-cols-12 lg:p-10">
                <div className="menu-card group relative flex min-h-[500px] flex-col justify-between overflow-hidden rounded-[2.5rem] bg-black p-8 opacity-100 md:p-12 lg:col-span-5">
                  <div className="pointer-events-none absolute top-8 right-8 h-32 w-32 rounded-full bg-[radial-gradient(#10b981_2px,transparent_2px)] opacity-20 [background-size:8px_8px]" />

                  <nav className="relative z-10 mt-4 flex flex-col gap-4">
                    {menuLinks.map((item, index) => (
                      <div key={item.href}>
                        <SmartLink
                          href={item.href}
                          onClick={closeMenu}
                          className="mobile-menu-link group/link flex items-center justify-between text-5xl font-bold text-white transition-colors hover:text-emerald-500 md:text-6xl font-display"
                        >
                          {item.label}
                          <i className="bi bi-arrow-right -translate-x-8 text-3xl text-emerald-500 opacity-0 transition-all duration-300 group-hover/link:translate-x-0 group-hover/link:opacity-100" />
                        </SmartLink>
                        {index !== menuLinks.length - 1 && (
                          <div className="mt-4 h-px w-full bg-white/10" />
                        )}
                      </div>
                    ))}
                  </nav>

                  <div className="relative z-10 mt-12">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                      Contact us
                    </p>
                    <SmartLink
                      href="mailto:support@zvolta.com"
                      className="border-b border-transparent pb-1 font-mono text-xl text-white transition-colors hover:border-emerald-400 hover:text-emerald-400 md:text-2xl"
                    >
                      support@zvolta.com
                    </SmartLink>
                  </div>
                </div>

                <div className="grid h-full grid-cols-1 gap-4 content-start md:grid-cols-2 lg:col-span-7">
                  {menuCards.map((card) => (
                    <SmartLink
                      key={card.href}
                      href={card.href}
                      onClick={closeMenu}
                      className="menu-card group relative flex h-[280px] flex-col justify-end overflow-hidden rounded-[2.5rem] bg-black p-8 opacity-100 lg:h-auto"
                    >
                      <div className="absolute inset-0 origin-bottom scale-y-0 bg-zinc-900 transition-transform duration-500 ease-[cubic-bezier(0.2,0,0,1)] group-hover:scale-y-100" />
                      <div className="absolute top-8 right-8 z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-900 text-emerald-500 shadow-xl transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-black">
                        <i className={`${card.icon} text-3xl`} />
                      </div>
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-white transition-transform group-hover:translate-x-1">
                          {card.title}
                        </h3>
                        <p className="mt-2 text-zinc-500 transition-colors group-hover:text-zinc-300">
                          {card.description}
                        </p>
                      </div>
                    </SmartLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="pt-24 md:pt-28">
          {/* Contact Section */}
          <div className="contact-shell flex min-h-screen flex-wrap px-4 text-white lg:flex-nowrap md:px-6 lg:px-8">
            {/* Left Column: Information */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-12 lg:p-16">
              <div className="max-w-md w-full">
                <p className="text-sm font-semibold text-emerald-300/80 uppercase tracking-wider">
                  CONTACT US
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">
                  How can we{" "}
                  <span className="animated-gradient-text">help?</span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-zinc-300">
                  Want to know more about this EV revolution? Connect with our
                  experts who can help you find the best answers for your EV
                  related questions.
                </p>

                <div className="mt-10 relative h-64">
                  <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-56 sm:h-56">
                    <img
                      className="w-full h-full object-cover rounded-lg shadow-xl"
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="ZVolta support agent ready to assist"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src =
                          "https://placehold.co/224x224/EFEFEF/333333?text=Agent+1";
                      }}
                    />
                  </div>

                  <div className="absolute top-0 right-0 w-40 h-40 sm:w-48 sm:h-48 p-2 bg-white/10 backdrop-blur-md rounded-lg shadow-2xl border border-white/20">
                    <div className="w-full h-full bg-green-400/20 rounded-md">
                      <img
                        className="absolute inset-0 w-full h-full object-cover rounded-lg transform translate-x-3 -translate-y-3"
                        src="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="ZVolta customer support professional"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src =
                            "https://placehold.co/192x192/EFEFEF/333333?text=Agent+2";
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8">
              <div className="contact-glass-card w-full max-w-3xl rounded-[28px] p-6 sm:p-8 lg:p-10">
                {/* Form Container */}
                <div id="form-wrapper">
                  <h2 className="text-2xl font-semibold leading-snug text-white">
                    Fill out the form and an expert will be in touch right away.
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">
                    Share a few details so we can route your message to the
                    right ZVolta team.
                  </p>

                  <form
                    id="contact-form"
                    action="https://formspree.io/f/mvgrykro"
                    method="POST"
                    onSubmit={handleSubmit}
                    onChange={() => {
                      if (
                        submitState === "success" ||
                        submitState === "error"
                      ) {
                        resetFormState();
                      }
                    }}
                    className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2"
                  >
                    <div>
                      <label
                        htmlFor="first-name"
                        className="contact-form-label block text-sm font-medium"
                      >
                        First Name*
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        required
                        autoComplete="given-name"
                        className="contact-form-input mt-2"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="last-name"
                        className="contact-form-label block text-sm font-medium"
                      >
                        Last Name*
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        required
                        autoComplete="family-name"
                        className="contact-form-input mt-2"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="business-email"
                        className="contact-form-label block text-sm font-medium"
                      >
                        Business Email*
                      </label>
                      <input
                        type="email"
                        name="business-email"
                        id="business-email"
                        required
                        autoComplete="email"
                        className="contact-form-input mt-2"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone-number"
                        className="contact-form-label block text-sm font-medium"
                      >
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        name="phone-number"
                        id="phone-number"
                        required
                        autoComplete="tel"
                        className="contact-form-input mt-2"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label
                        htmlFor="company-name"
                        className="contact-form-label block text-sm font-medium"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company-name"
                        id="company-name"
                        autoComplete="organization"
                        className="contact-form-input mt-2"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label
                        htmlFor="how-can-we-help"
                        className="contact-form-label block text-sm font-medium"
                      >
                        How can we help?*
                      </label>
                      <textarea
                        id="how-can-we-help"
                        name="how-can-we-help"
                        rows={5}
                        required
                        className="contact-form-input mt-2 resize-none"
                        defaultValue=""
                      />
                    </div>

                    <div className="flex items-start md:col-span-2">
                      <div className="flex h-5 items-center">
                        <input
                          id="offers"
                          name="offers"
                          type="checkbox"
                          className="contact-form-input"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="offers"
                          className="font-medium text-zinc-300"
                        >
                          Yes, I'd like to receive occasional news and tips.
                        </label>
                      </div>
                    </div>

                    {submitState === "success" && (
                      <div className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100 md:col-span-2">
                        Message sent. We'll get back to you shortly.
                      </div>
                    )}

                    {submitState === "error" && (
                      <div className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-100 md:col-span-2">
                        Submission failed. Please try again.
                      </div>
                    )}

                    <div className="md:col-span-2">
                      <button
                        type="submit"
                        disabled={submitState === "loading"}
                        className="glare-hover flex w-full justify-center rounded-full bg-emerald-500 px-4 py-4 text-lg font-semibold text-black shadow-lg transition-colors hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-zinc-950 disabled:cursor-not-allowed disabled:opacity-70"
                        style={{
                          "--gh-angle": "120deg",
                          "--gh-duration": "1.5s",
                        }}
                      >
                        {submitState === "loading"
                          ? "Sending..."
                          : "Submit Inquiry"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="bg-black text-gray-300">
          <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-4">
                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Ready to power up your future with EVs?
                  <br />
                  <SmartLink
                    href="/contact-us"
                    className="text-green-400 transition-colors hover:text-green-300"
                  >
                    Get in touch.
                  </SmartLink>
                </h2>
              </div>

              <div className="lg:col-span-8 lg:col-start-5">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                  <div>
                    <h3 className="font-semibold text-white">Company</h3>
                    <ul className="mt-4 space-y-3">
                      {footerCompanyLinks.map((link) => (
                        <li key={link.href}>
                          <SmartLink
                            href={link.href}
                            className="transition-colors hover:text-white"
                          >
                            {link.label}
                          </SmartLink>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">Learn More</h3>
                    <ul className="mt-4 space-y-3">
                      {footerLearnLinks.map((link) => (
                        <li key={link.href}>
                          <SmartLink
                            href={link.href}
                            className="transition-colors hover:text-white"
                          >
                            {link.label}
                          </SmartLink>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">Connect</h3>
                    <div className="mt-4 flex space-x-5">
                      {socialLinks.map((item) => (
                        <SmartLink
                          key={item.href}
                          href={item.href}
                          target="_blank"
                          className="text-gray-400 transition-colors hover:text-white"
                          aria-label={item.label}
                        >
                          <i
                            className={item.icon}
                            style={{ fontSize: "1.5rem" }}
                            aria-hidden="true"
                          />
                        </SmartLink>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      Contact Details
                    </h3>
                    <ul className="mt-4 space-y-3 text-sm">
                      <li className="flex items-center gap-x-2">
                        <i
                          className="bi bi-envelope text-lg"
                          aria-hidden="true"
                        />
                        <SmartLink
                          href="mailto:support@zvolta.com"
                          className="transition-colors hover:text-white"
                        >
                          support@zvolta.com
                        </SmartLink>
                      </li>
                      <li className="flex items-center gap-x-2">
                        <i
                          className="bi bi-telephone text-lg"
                          aria-hidden="true"
                        />
                        <SmartLink
                          href="tel:+923104446529"
                          className="transition-colors hover:text-white"
                        >
                          ‪+92 310 4446529‬
                        </SmartLink>
                      </li>
                      <li className="flex items-start gap-x-2 pt-1">
                        <i
                          className="bi bi-geo-alt mt-1 text-lg"
                          aria-hidden="true"
                        />
                        <span className="leading-relaxed">
                          36F, Street 36, Block 6, P.E.C.H.S, Karachi, Pakistan
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-gray-800 pt-8">
              <div className="flex items-center text-sm text-gray-400">
                <img
                  src="img/symbol logo2.png"
                  alt="ZVolta Symbol"
                  className="mr-3 h-5 w-auto"
                  width={20}
                  height={20}
                />
                <span>© 2025 Z-Volta Pvt. Ltd. All rights reserved.</span>
              </div>

              <div className="text-sm text-gray-400">
                <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:justify-end">
                  {policyLinks.map((link) => (
                    <li key={link.href}>
                      <SmartLink
                        href={link.href}
                        className="transition-colors hover:text-white"
                      >
                        {link.label}
                      </SmartLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

import { useId, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useStorefrontSettings } from "../../context/StorefrontSettingsContext";
import { BrandLockup } from "../commerce/BrandLogo";
import { SmartLink } from "../SmartLink";

const copy = {
  login: {
    kicker: "ZVolta account",
    title: "Welcome back.",
    lead: "Sign in to manage your details, orders and delivery progress.",
    submit: "Sign in",
    busy: "Signing in…",
    switchText: "New to ZVolta?",
    switchLabel: "Create an account",
    switchHref: "/register",
  },
  register: {
    kicker: "ZVolta account",
    title: "Create your account.",
    lead: "Save your details, track every order and move through checkout faster.",
    submit: "Create account",
    busy: "Creating account…",
    switchText: "Already have an account?",
    switchLabel: "Sign in",
    switchHref: "/login",
  },
};

const highlights = [
  "Track every order from dispatch to installation",
  "Saved address and contact details for faster checkout",
  "Invoices and warranty records kept in one place",
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="m4.5 10.5 3.5 3.5 7.5-8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EyeIcon({ off }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
      {off ? (
        <path
          d="m4 4 16 16"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      ) : null}
    </svg>
  );
}

// `?next=` keeps a reader who was sent here mid-checkout on their way back.
function getNextPath(search) {
  const next = new URLSearchParams(search).get("next") || "";
  return next.startsWith("/") && !next.startsWith("//") ? next : "/my-account";
}

export default function AccountAuthPage({ mode = "login" }) {
  const text = copy[mode] || copy.login;
  const { login, register } = useAuth();
  const { settings } = useStorefrontSettings();
  const navigate = useNavigate();
  const location = useLocation();
  const errorsId = useId();
  const [status, setStatus] = useState({ submitting: false, errors: [] });
  const [showPassword, setShowPassword] = useState(false);

  const isRegister = mode === "register";
  const hasErrors = status.errors.length > 0;

  async function submit(event) {
    event.preventDefault();
    const fields = Object.fromEntries(new FormData(event.currentTarget));
    setStatus({ submitting: true, errors: [] });

    try {
      if (isRegister) {
        await register({
          name: fields.name,
          email: fields.email,
          password: fields.password,
          phone: fields.phone,
        });
      } else {
        await login({ email: fields.email, password: fields.password });
      }

      navigate(getNextPath(location.search), { replace: true });
    } catch (error) {
      setStatus({
        submitting: false,
        errors: error.errors?.length ? error.errors : [error.message],
      });
    }
  }

  return (
    <main className="commerce-page auth-page">
      <section className="commerce-container auth-shell">
        <aside className="auth-visual">
          <SmartLink className="auth-visual__logo" href="/">
            <BrandLockup />
          </SmartLink>
          <div className="auth-visual__copy">
            <span className="commerce-kicker">ZVolta Commerce</span>
            <h2>Everything you need after checkout.</h2>
            <p>
              Orders, delivery progress and account details in one secure place.
            </p>
            <ul className="auth-visual__list">
              {highlights.map((item) => (
                <li key={item}>
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="auth-visual__foot">
            Need a hand? {settings.supportEmail}
          </p>
        </aside>

        <div className="auth-card">
          <SmartLink className="auth-brand" href="/">
            <BrandLockup />
          </SmartLink>

          <div className="auth-card__head">
            <p className="commerce-kicker">{text.kicker}</p>
            <h1>{text.title}</h1>
            <p className="auth-lead">{text.lead}</p>
          </div>

          <form className="auth-form" onSubmit={submit}>
            {isRegister ? (
              <>
                <label>
                  Full name
                  <input
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Ahmed Raza"
                  />
                </label>
                <label>
                  Phone <span className="auth-form__optional">optional</span>
                  <input
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="0300 1234567"
                  />
                </label>
              </>
            ) : null}
            <label>
              Email
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="ahmed.raza@example.com"
                aria-invalid={hasErrors || undefined}
                aria-describedby={hasErrors ? errorsId : undefined}
              />
            </label>
            <label>
              Password
              <span className="auth-field">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  minLength={6}
                  autoComplete={
                    isRegister ? "new-password" : "current-password"
                  }
                  placeholder="At least 6 characters"
                  aria-invalid={hasErrors || undefined}
                  aria-describedby={hasErrors ? errorsId : undefined}
                />
                <button
                  type="button"
                  className="auth-field__toggle"
                  onClick={() => setShowPassword((shown) => !shown)}
                  aria-pressed={showPassword}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <EyeIcon off={showPassword} />
                </button>
              </span>
            </label>

            {hasErrors ? (
              <ul className="auth-errors" id={errorsId} role="alert">
                {status.errors.map((message) => (
                  <li key={message}>{message}</li>
                ))}
              </ul>
            ) : null}

            <button
              className="commerce-link-button"
              type="submit"
              disabled={status.submitting}
            >
              {status.submitting ? text.busy : text.submit}
            </button>
          </form>

          <p className="auth-switch">
            {text.switchText}{" "}
            <SmartLink href={`${text.switchHref}${location.search}`}>
              {text.switchLabel}
            </SmartLink>
          </p>
          <p className="auth-footnote">
            Secure access to your ZVolta Commerce account.
          </p>
        </div>
      </section>
    </main>
  );
}

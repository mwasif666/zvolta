import { useId, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useStorefrontSettings } from "../../context/StorefrontSettingsContext";
import { BrandLockup } from "../commerce/BrandLogo";
import { SmartLink } from "../SmartLink";

const copy = {
  login: {
    title: "Welcome back.",
    lead: "Enter your email and we’ll send you a secure sign-in code.",
    switchText: "New to ZVolta?",
    switchLabel: "Create an account",
    switchHref: "/register",
  },
  register: {
    title: "Create your account.",
    lead: "Add your details, then verify your email with a one-time code.",
    switchText: "Already have an account?",
    switchLabel: "Sign in",
    switchHref: "/login",
  },
};

const highlights = [
  "Track every order from dispatch to installation",
  "Saved details for faster checkout",
  "No password to remember",
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

function getNextPath(search) {
  const next = new URLSearchParams(search).get("next") || "";
  return next.startsWith("/") && !next.startsWith("//") ? next : "/my-account";
}

export default function EmailCodeAuthPage({ mode = "login" }) {
  const text = copy[mode] || copy.login;
  const { requestEmailCode, verifyEmailCode } = useAuth();
  const { settings } = useStorefrontSettings();
  const navigate = useNavigate();
  const location = useLocation();
  const errorsId = useId();
  const [status, setStatus] = useState({ submitting: false, errors: [] });
  const [pending, setPending] = useState(null);
  const [devCode, setDevCode] = useState("");
  const isRegister = mode === "register";
  const hasErrors = status.errors.length > 0;

  async function sendCode(details) {
    const result = await requestEmailCode({
      ...details,
      intent: isRegister ? "register" : "login",
    });
    setPending(details);
    setDevCode(result.devCode || "");
  }

  async function submit(event) {
    event.preventDefault();
    const fields = Object.fromEntries(new FormData(event.currentTarget));
    setStatus({ submitting: true, errors: [] });
    try {
      if (!pending) {
        await sendCode({
          email: fields.email,
          ...(isRegister
            ? { name: fields.name, phone: fields.phone || "" }
            : {}),
        });
        setStatus({ submitting: false, errors: [] });
        return;
      }
      await verifyEmailCode({
        email: pending.email,
        code: fields.code,
        intent: isRegister ? "register" : "login",
      });
      navigate(getNextPath(location.search), { replace: true });
    } catch (error) {
      setStatus({
        submitting: false,
        errors: error.errors?.length ? error.errors : [error.message],
      });
    }
  }

  async function resendCode() {
    setStatus({ submitting: true, errors: [] });
    try {
      await sendCode(pending);
      setStatus({ submitting: false, errors: [] });
    } catch (error) {
      setStatus({ submitting: false, errors: [error.message] });
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
            <p className="commerce-kicker">ZVolta account</p>
            <h1>{pending ? "Check your email." : text.title}</h1>
            <p className="auth-lead">
              {pending
                ? `Enter the 6-digit code sent to ${pending.email}.`
                : text.lead}
            </p>
          </div>

          <form className="auth-form" onSubmit={submit}>
            {!pending ? (
              <>
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
                      Phone{" "}
                      <span className="auth-form__optional">optional</span>
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
              </>
            ) : (
              <label>
                Verification code
                <input
                  name="code"
                  required
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  pattern="[0-9]{6}"
                  maxLength={6}
                  placeholder="6-digit code"
                  defaultValue={devCode}
                  aria-invalid={hasErrors || undefined}
                  aria-describedby={hasErrors ? errorsId : undefined}
                />
              </label>
            )}
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
              {status.submitting
                ? "Please wait…"
                : pending
                  ? isRegister
                    ? "Verify & create account"
                    : "Verify & sign in"
                  : "Email me a code"}
            </button>
          </form>

          {pending ? (
            <p className="auth-switch">
              Didn’t receive it?{" "}
              <button
                type="button"
                onClick={resendCode}
                disabled={status.submitting}
              >
                Resend code
              </button>
              {" · "}
              <button
                type="button"
                onClick={() => {
                  setPending(null);
                  setDevCode("");
                }}
              >
                Change email
              </button>
            </p>
          ) : (
            <p className="auth-switch">
              {text.switchText}{" "}
              <SmartLink href={`${text.switchHref}${location.search}`}>
                {text.switchLabel}
              </SmartLink>
            </p>
          )}
          <p className="auth-footnote">
            Secure password-free access to your ZVolta account.
          </p>
        </div>
      </section>
    </main>
  );
}

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
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

// `?next=` keeps a reader who was sent here mid-checkout on their way back.
function getNextPath(search) {
  const next = new URLSearchParams(search).get("next") || "";
  return next.startsWith("/") && !next.startsWith("//") ? next : "/my-account";
}

export default function AccountAuthPage({ mode = "login" }) {
  const text = copy[mode] || copy.login;
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [status, setStatus] = useState({ submitting: false, errors: [] });

  async function submit(event) {
    event.preventDefault();
    const fields = Object.fromEntries(new FormData(event.currentTarget));
    setStatus({ submitting: true, errors: [] });

    try {
      if (mode === "register") {
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
        <div className="auth-visual" aria-hidden="true">
          <div className="auth-visual__mark">Z</div>
          <div className="auth-visual__copy">
            <span>ZVolta Commerce</span>
            <h2>Everything you need after checkout.</h2>
            <p>
              Orders, delivery progress and account details in one secure place.
            </p>
          </div>
        </div>
        <div className="auth-card">
          <div className="auth-brand">
            <span>Z</span>
            <strong>ZVOLTA</strong>
          </div>
          <p className="commerce-kicker">{text.kicker}</p>
          <h1>{text.title}</h1>
          <p className="auth-lead">{text.lead}</p>
          <form className="auth-form" onSubmit={submit}>
            {mode === "register" ? (
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
                  Phone (optional)
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
              />
            </label>
            <label>
              Password
              <input
                name="password"
                type="password"
                required
                minLength={6}
                autoComplete={
                  mode === "register" ? "new-password" : "current-password"
                }
                placeholder="At least 6 characters"
              />
            </label>
            {status.errors.length ? (
              <ul className="auth-errors">
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

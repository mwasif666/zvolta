import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import {
  formatStoreCurrency,
  useStorefrontSettings,
} from "../../context/StorefrontSettingsContext";
import { BrandLockup } from "../commerce/BrandLogo";
import { SmartLink } from "../SmartLink";

const steps = [
  {
    title: "Order confirmed",
    body: "We have your details and the order is queued with our fulfilment team.",
  },
  {
    title: "Confirmation call",
    body: "Our team calls you to confirm delivery address, timing and installation needs.",
  },
  {
    title: "Delivery and installation",
    body: "Your charger is dispatched and a certified installer completes the setup.",
  },
];

function CopyIcon({ done }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      {done ? (
        <path
          d="m4.5 10.5 3.5 3.5 7.5-8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <>
          <rect
            x="7"
            y="7"
            width="9"
            height="9"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M13 4.5H6A1.5 1.5 0 0 0 4.5 6v7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}

export default function OrderSuccessPage() {
  const { state } = useLocation();
  const [params] = useSearchParams();
  const { settings } = useStorefrontSettings();
  const [copied, setCopied] = useState(false);

  const formatPkr = (value) => formatStoreCurrency(value, settings.currency);
  const order = state?.order;
  const orderNumber = order?.orderNumber || params.get("order") || "";
  // Only a real reference is worth offering a copy button for.
  const hasReference = Boolean(orderNumber);
  // Landing here from a shared link carries no order state, so the address is
  // only named when the checkout that just ran actually passed one through.
  const confirmationEmail = order?.customer?.email || "";
  const hasSummary = Boolean(
    hasReference || order?.grandTotal || confirmationEmail,
  );

  // Reset the transient "Copied" label without leaving a timer behind if the
  // reader navigates away mid-countdown.
  useEffect(() => {
    if (!copied) return undefined;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  async function copyReference() {
    try {
      await navigator.clipboard.writeText(orderNumber);
      setCopied(true);
    } catch {
      // Clipboard access can be blocked; the reference stays visible either way.
    }
  }

  return (
    <main className="commerce-page success-page">
      <section>
        <SmartLink className="success-brand" href="/">
          <BrandLockup />
        </SmartLink>

        <div className="success-mark" aria-hidden="true">
          <svg viewBox="0 0 32 32" fill="none">
            <path
              d="m9 16.5 5 5 9-11"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <p className="commerce-kicker">Order received</p>
        <h1>
          Thank you.
          <br />
          We&rsquo;ll take it from here.
        </h1>
        <p className="success-lead">
          Your ZVolta order has been created. Our team will contact you shortly
          to confirm delivery and installation details.
        </p>

        {hasSummary ? (
          <div className="success-summary">
            {hasReference ? (
              <div className="success-summary__row">
                <span>Order reference</span>
                <div className="success-summary__value">
                  <strong className="success-summary__reference">
                    {orderNumber}
                  </strong>
                  <button
                    type="button"
                    className="success-reference__copy"
                    onClick={copyReference}
                  >
                    <CopyIcon done={copied} />
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
              </div>
            ) : null}

            {order?.grandTotal ? (
              <div className="success-summary__row">
                <span>Order total</span>
                <strong className="success-summary__total">
                  {formatPkr(order.grandTotal)}
                </strong>
              </div>
            ) : null}

            {confirmationEmail ? (
              <div className="success-summary__row">
                <span>Confirmation sent to</span>
                <strong className="success-summary__email">
                  {confirmationEmail}
                </strong>
              </div>
            ) : null}
          </div>
        ) : null}

        <ol className="success-steps">
          {steps.map((step, index) => (
            <li key={step.title}>
              <span className="success-steps__index">{index + 1}</span>
              <strong>{step.title}</strong>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="success-actions">
          <SmartLink className="commerce-link-button" href="/products">
            Continue shopping
          </SmartLink>
          <SmartLink className="commerce-secondary-button" href="/my-account">
            View my orders
          </SmartLink>
        </div>

        <p className="success-support">
          Questions about this order?{" "}
          <a href={`mailto:${settings.supportEmail}`}>
            {settings.supportEmail}
          </a>
          {settings.supportPhone ? (
            <>
              {" · "}
              <a href={`tel:${settings.supportPhone}`}>
                {settings.supportPhone}
              </a>
            </>
          ) : null}
        </p>
      </section>
    </main>
  );
}

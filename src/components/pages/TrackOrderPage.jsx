import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  formatStoreCurrency,
  useStorefrontSettings,
} from "../../context/StorefrontSettingsContext";
import { accountApi } from "../../services/api";
import {
  OrderCard,
  StatusNotice,
  formatOrderDate,
} from "../commerce/OrderCard";
import { SmartLink } from "../SmartLink";

export default function TrackOrderPage() {
  const [params] = useSearchParams();
  const { settings } = useStorefrontSettings();
  const { user } = useAuth();
  const [orderNumber, setOrderNumber] = useState(params.get("order") || "");
  const [contact, setContact] = useState("");
  const [status, setStatus] = useState({ submitting: false, message: "" });
  const [order, setOrder] = useState(null);
  const mounted = useRef(true);

  const formatMoney = (value) => formatStoreCurrency(value, settings.currency);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  // A shopper who is already signed in should not have to retype the address
  // they placed the order with.
  useEffect(() => {
    if (user?.email) setContact((current) => current || user.email);
  }, [user]);

  async function submit(event) {
    event.preventDefault();
    setStatus({ submitting: true, message: "" });
    setOrder(null);

    try {
      const result = await accountApi.trackOrder({ orderNumber, contact });
      if (!mounted.current) return;
      setOrder(result.data);
      setStatus({ submitting: false, message: "" });
    } catch (error) {
      if (!mounted.current) return;
      setStatus({ submitting: false, message: error.message, error: true });
    }
  }

  const deliveredTo = [
    order?.shippingAddress?.city,
    order?.shippingAddress?.country,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <main className="commerce-page track-page">
      <section className="commerce-container track-head">
        <p className="commerce-kicker">Order tracking</p>
        <h1>Where is my order?</h1>
        <p>
          Enter your order number with the email or phone number you placed it
          with. No account needed.
        </p>
      </section>

      <section className="commerce-container track-body">
        <form className="track-form" onSubmit={submit}>
          <label>
            Order number
            <input
              name="orderNumber"
              required
              value={orderNumber}
              onChange={(event) => setOrderNumber(event.target.value)}
              placeholder="ZV-XXXXXXXX-XXXX"
              autoComplete="off"
              spellCheck="false"
            />
          </label>
          <label>
            Email or phone used on the order
            <input
              name="contact"
              required
              value={contact}
              onChange={(event) => setContact(event.target.value)}
              placeholder="you@example.com or 0300 1234567"
              autoComplete="email"
            />
          </label>
          <button
            className="commerce-link-button"
            type="submit"
            disabled={status.submitting}
          >
            {status.submitting ? "Checking…" : "Track order"}
          </button>
        </form>

        <StatusNotice status={status} />

        {order ? (
          <div className="track-result">
            <OrderCard order={order} formatMoney={formatMoney} />
            <dl className="track-facts">
              <div>
                <dt>Placed on</dt>
                <dd>{formatOrderDate(order.createdAt || order.placedAt)}</dd>
              </div>
              {deliveredTo ? (
                <div>
                  <dt>Delivering to</dt>
                  <dd>{deliveredTo}</dd>
                </div>
              ) : null}
              <div>
                <dt>Payment</dt>
                <dd>{order.paymentMethod || "COD"}</dd>
              </div>
              <div>
                <dt>Order total</dt>
                <dd>{formatMoney(order.grandTotal)}</dd>
              </div>
            </dl>
          </div>
        ) : null}

        <p className="track-support">
          Cannot find your order?{" "}
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
          {" · "}
          <SmartLink href="/my-account?tab=orders">
            See all orders in your account
          </SmartLink>
        </p>
      </section>
    </main>
  );
}

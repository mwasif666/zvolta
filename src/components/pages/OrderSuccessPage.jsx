import { useLocation, useSearchParams } from "react-router-dom";
import {
  formatStoreCurrency,
  useStorefrontSettings,
} from "../../context/StorefrontSettingsContext";
import { SmartLink } from "../SmartLink";

export default function OrderSuccessPage() {
  const { state } = useLocation();
  const [params] = useSearchParams();
  const { settings } = useStorefrontSettings();
  const formatPkr = (value) => formatStoreCurrency(value, settings.currency);
  const order = state?.order;
  const orderNumber = order?.orderNumber || params.get("order") || "Confirmed";
  return (
    <main className="commerce-page success-page">
      <section>
        <div className="success-mark">✓</div>
        <p className="commerce-kicker">Order received</p>
        <h1>
          Thank you.
          <br />
          We’ll take it from here.
        </h1>
        <p>
          Your ZVolta order <strong>{orderNumber}</strong> has been created. Our
          team will contact you to confirm delivery and installation details.
        </p>
        {order?.grandTotal ? (
          <div className="success-total">
            <span>Order total</span>
            <strong>{formatPkr(order.grandTotal)}</strong>
          </div>
        ) : null}
        <div className="success-actions">
          <SmartLink className="commerce-link-button" href="/products">
            Continue shopping
          </SmartLink>
          <SmartLink className="commerce-secondary-button" href="/contact-us">
            Contact support
          </SmartLink>
        </div>
      </section>
    </main>
  );
}

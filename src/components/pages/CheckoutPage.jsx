import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import {
  formatStoreCurrency,
  useStorefrontSettings,
} from "../../context/StorefrontSettingsContext";
import { useLiveCartItems } from "../../hooks/useLiveCartItems";
import { commerceApi, shippingApi } from "../../services/api";
import { SmartLink } from "../SmartLink";

export default function CheckoutPage() {
  const { clearCart, coupon, discountTotal, isServerCart, items, subtotal } =
    useCart();
  const { hasBlockingIssues, liveItems, liveSubtotal } = useLiveCartItems();
  const { settings } = useStorefrontSettings();
  const formatPkr = (value) => formatStoreCurrency(value, settings.currency);
  const navigate = useNavigate();
  const [status, setStatus] = useState({ submitting: false, error: "" });
  // The order endpoint prices delivery server-side, so the same endpoint is
  // asked for a quote here rather than guessing a figure in the summary.
  const [delivery, setDelivery] = useState({ quoted: false, fee: 0, city: "" });

  const payableSubtotal = isServerCart ? subtotal : liveSubtotal;
  const grandTotal = Math.max(
    0,
    payableSubtotal - discountTotal + (delivery.quoted ? delivery.fee : 0),
  );

  async function quoteDelivery(city) {
    const cleanCity = String(city || "").trim();

    if (!cleanCity || cleanCity === delivery.city) return;

    try {
      const result = await shippingApi.calculate({
        country: "Pakistan",
        city: cleanCity,
        subtotal: payableSubtotal,
      });
      setDelivery({
        quoted: true,
        fee: Number(result.data.shippingFee || 0),
        city: cleanCity,
      });
    } catch {
      setDelivery({ quoted: false, fee: 0, city: "" });
    }
  }

  async function submit(event) {
    event.preventDefault();
    const fields = Object.fromEntries(new FormData(event.currentTarget));
    setStatus({ submitting: true, error: "" });
    try {
      const result = await commerceApi.createOrder({
        items: items.map((item) => ({
          product: item.productId,
          quantity: item.quantity,
        })),
        couponCode: coupon?.code || "",
        customer: {
          name: fields.fullName,
          email: fields.email,
          phone: fields.phone,
        },
        shippingAddress: {
          fullName: fields.fullName,
          email: fields.email,
          phone: fields.phone,
          addressLine1: fields.addressLine1,
          addressLine2: fields.addressLine2,
          city: fields.city,
          state: fields.state,
          postalCode: fields.postalCode,
          country: "Pakistan",
        },
        paymentMethod: fields.paymentMethod,
        notes: fields.notes,
      });
      clearCart();
      navigate(
        `/order-success?order=${encodeURIComponent(result.data.orderNumber)}`,
        { state: { order: result.data } },
      );
    } catch (error) {
      setStatus({ submitting: false, error: error.message });
    }
  }

  if (!items.length)
    return (
      <main className="commerce-page">
        <div className="commerce-state full">
          <h1>Your cart is empty</h1>
          <SmartLink className="commerce-link-button" href="/products">
            Browse products
          </SmartLink>
        </div>
      </main>
    );

  return (
    <main className="commerce-page checkout-page">
      <section className="commerce-container checkout-head">
        <p className="commerce-kicker">Secure order</p>
        <h1>Checkout</h1>
        <p>Your order is verified against live product pricing and stock.</p>
      </section>
      <form className="commerce-container checkout-layout" onSubmit={submit}>
        <div className="checkout-form">
          <div className="checkout-section">
            <span>01</span>
            <div>
              <h2>Contact</h2>
              <div className="checkout-fields">
                <label>
                  Full name
                  <input
                    name="fullName"
                    required
                    autoComplete="name"
                    placeholder="Ahmed Raza"
                  />
                </label>
                <label>
                  Phone
                  <input
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="0300 1234567"
                  />
                </label>
                <label className="wide">
                  Email
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="ahmed.raza@example.com"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="checkout-section">
            <span>02</span>
            <div>
              <h2>Delivery address</h2>
              <div className="checkout-fields">
                <label className="wide">
                  Address
                  <input
                    name="addressLine1"
                    required
                    autoComplete="street-address"
                    placeholder="House 24, Street 7, DHA Phase 5"
                  />
                </label>
                <label className="wide">
                  Apartment, floor, landmark (optional)
                  <input
                    name="addressLine2"
                    placeholder="Flat 3-B, near Jinnah Park"
                  />
                </label>
                <label>
                  City
                  <input
                    name="city"
                    required
                    autoComplete="address-level2"
                    placeholder="Lahore"
                    onBlur={(event) => quoteDelivery(event.target.value)}
                  />
                </label>
                <label>
                  Province
                  <input
                    name="state"
                    autoComplete="address-level1"
                    placeholder="Punjab"
                  />
                </label>
                <label>
                  Postal code
                  <input
                    name="postalCode"
                    autoComplete="postal-code"
                    inputMode="numeric"
                    placeholder="54000"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="checkout-section">
            <span>03</span>
            <div>
              <h2>Payment</h2>
              <div className="payment-options">
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="COD"
                    defaultChecked
                  />{" "}
                  Cash on delivery
                </label>
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="BANK_TRANSFER"
                  />{" "}
                  Bank transfer
                </label>
              </div>
              <label>
                Order notes
                <textarea
                  name="notes"
                  placeholder="e.g. Deliver after 5pm, installation on the ground floor parking"
                />
              </label>
            </div>
          </div>
        </div>
        <aside className="cart-summary checkout-summary">
          <p className="commerce-kicker">Your order</p>
          {liveItems.map((item) => {
            const isInactive = item.unavailable || item.outOfStock;

            return (
              <div className="checkout-line" key={item.productId}>
                <img src={item.image} alt="" />
                <span>
                  <strong>{item.title}</strong>
                  <small>
                    {item.unavailable
                      ? "No longer sold"
                      : item.outOfStock
                        ? "Out of stock"
                        : item.exceedsStock
                          ? `Only ${item.stock} left`
                          : `Qty ${item.quantity}`}
                  </small>
                </span>
                <b>
                  {isInactive ? "—" : formatPkr(item.price * item.quantity)}
                </b>
              </div>
            );
          })}
          <hr />
          <div>
            <span>Subtotal</span>
            <strong>{formatPkr(payableSubtotal)}</strong>
          </div>
          {discountTotal > 0 ? (
            <div className="cart-summary__save">
              <span>Coupon {coupon?.code}</span>
              <strong>-{formatPkr(discountTotal)}</strong>
            </div>
          ) : null}
          <div>
            <span>Delivery</span>
            {delivery.quoted ? (
              <strong>
                {delivery.fee > 0 ? formatPkr(delivery.fee) : "Free"}
              </strong>
            ) : (
              <span>Enter your city</span>
            )}
          </div>
          <hr />
          <div className="cart-summary__total">
            <span>Total</span>
            <strong>{formatPkr(grandTotal)}</strong>
          </div>
          {status.error ? (
            <p className="checkout-error">{status.error}</p>
          ) : null}
          {hasBlockingIssues ? (
            <p className="checkout-error">
              Stock or pricing changed for an item in your order.{" "}
              <SmartLink href="/cart">Review your cart</SmartLink> before
              placing it.
            </p>
          ) : null}
          <button
            className="commerce-link-button"
            type="submit"
            disabled={status.submitting || hasBlockingIssues}
          >
            {status.submitting ? "Placing order…" : "Place order"}
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </button>
          <small>
            By ordering, you confirm that the delivery details are correct.
          </small>
        </aside>
      </form>
    </main>
  );
}

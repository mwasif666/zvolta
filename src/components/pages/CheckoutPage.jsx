import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import {
  formatStoreCurrency,
  useStorefrontSettings,
} from "../../context/StorefrontSettingsContext";
import { commerceApi } from "../../services/api";
import { SmartLink } from "../SmartLink";

export default function CheckoutPage() {
  const { clearCart, items, subtotal } = useCart();
  const { settings } = useStorefrontSettings();
  const formatPkr = (value) => formatStoreCurrency(value, settings.currency);
  const navigate = useNavigate();
  const [status, setStatus] = useState({ submitting: false, error: "" });

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
                  <input name="fullName" required autoComplete="name" />
                </label>
                <label>
                  Phone
                  <input name="phone" required autoComplete="tel" />
                </label>
                <label className="wide">
                  Email
                  <input name="email" type="email" autoComplete="email" />
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
                  />
                </label>
                <label className="wide">
                  Apartment, floor, landmark (optional)
                  <input name="addressLine2" />
                </label>
                <label>
                  City
                  <input name="city" required autoComplete="address-level2" />
                </label>
                <label>
                  Province
                  <input name="state" autoComplete="address-level1" />
                </label>
                <label>
                  Postal code
                  <input name="postalCode" autoComplete="postal-code" />
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
                  placeholder="Installation or delivery notes (optional)"
                />
              </label>
            </div>
          </div>
        </div>
        <aside className="cart-summary checkout-summary">
          <p className="commerce-kicker">Your order</p>
          {items.map((item) => (
            <div className="checkout-line" key={item.productId}>
              <img src={item.image} alt="" />
              <span>
                <strong>{item.title}</strong>
                <small>Qty {item.quantity}</small>
              </span>
              <b>{formatPkr(item.price * item.quantity)}</b>
            </div>
          ))}
          <hr />
          <div>
            <span>Subtotal</span>
            <strong>{formatPkr(subtotal)}</strong>
          </div>
          <div>
            <span>Delivery</span>
            <span>Calculated by location</span>
          </div>
          {status.error ? (
            <p className="checkout-error">{status.error}</p>
          ) : null}
          <button
            className="commerce-link-button"
            type="submit"
            disabled={status.submitting}
          >
            {status.submitting ? "Placing order…" : "Place order"}
            <span>↗</span>
          </button>
          <small>
            By ordering, you confirm that the delivery details are correct.
          </small>
        </aside>
      </form>
    </main>
  );
}

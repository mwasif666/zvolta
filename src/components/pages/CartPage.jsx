import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import {
  formatStoreCurrency,
  useStorefrontSettings,
} from "../../context/StorefrontSettingsContext";
import { useLiveCartItems } from "../../hooks/useLiveCartItems";
import { SmartLink } from "../SmartLink";

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

function ArrowIcon() {
  return (
    <svg {...iconProps} className="h-4 w-4">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

const trustPoints = [
  {
    label: "Secure checkout with live price verification",
    icon: <path d="M12 3 5 6v6c0 4.2 2.9 7.9 7 9 4.1-1.1 7-4.8 7-9V6z" />,
  },
  {
    label: "Nationwide delivery across Pakistan",
    icon: (
      <>
        <path d="M3 16V7a1 1 0 0 1 1-1h10v10" />
        <path d="M14 9h4l3 3.5V16h-3" />
        <circle cx="7.5" cy="17.5" r="1.7" />
        <circle cx="16.5" cy="17.5" r="1.7" />
      </>
    ),
  },
  {
    label: "Certified ZVolta installation support",
    icon: (
      <>
        <path d="M14.5 4.5a4 4 0 0 0-5.3 5.1L4 14.8 6.2 17l5.2-5.2a4 4 0 0 0 5.1-5.3L14 9l-2-2z" />
        <path d="m15 15 4.5 4.5" />
      </>
    ),
  },
];

// Coupons are validated and redeemed against the signed-in user, and the order
// endpoint rejects a coupon sent without a session, so guests are pointed at
// sign-in instead of being shown a discount they could not actually use.
function CouponBox({
  coupon,
  couponError,
  isAuthenticated,
  onApply,
  onRemove,
}) {
  const [code, setCode] = useState("");
  const [status, setStatus] = useState({ busy: false, error: "" });

  if (!isAuthenticated) {
    return (
      <div className="cart-coupon">
        <p className="cart-coupon__prompt">Have a coupon code?</p>
        <SmartLink
          className="commerce-secondary-button"
          href="/login?next=/cart"
        >
          Sign in to apply
          <ArrowIcon />
        </SmartLink>
      </div>
    );
  }

  if (coupon?.code) {
    return (
      <div className="cart-coupon">
        <div className="cart-coupon__applied">
          <span>
            <strong>{coupon.code}</strong> applied
          </span>
          <button
            type="button"
            className="cart-clear"
            onClick={async () => {
              setStatus({ busy: true, error: "" });
              try {
                await onRemove();
                setStatus({ busy: false, error: "" });
              } catch (error) {
                setStatus({ busy: false, error: error.message });
              }
            }}
            disabled={status.busy}
          >
            Remove
          </button>
        </div>
        {status.error ? (
          <p className="cart-coupon__error">{status.error}</p>
        ) : null}
      </div>
    );
  }

  return (
    <div className="cart-coupon">
      <form
        className="cart-coupon__row"
        onSubmit={async (event) => {
          event.preventDefault();
          setStatus({ busy: true, error: "" });
          try {
            await onApply(code.trim());
            setCode("");
            setStatus({ busy: false, error: "" });
          } catch (error) {
            setStatus({ busy: false, error: error.message });
          }
        }}
      >
        <input
          aria-label="Coupon code"
          value={code}
          onChange={(event) => setCode(event.target.value.toUpperCase())}
          placeholder="Coupon code"
        />
        <button
          className="commerce-secondary-button"
          type="submit"
          disabled={status.busy || !code.trim()}
        >
          {status.busy ? "Applying…" : "Apply"}
        </button>
      </form>
      {status.error || couponError ? (
        <p className="cart-coupon__error">{status.error || couponError}</p>
      ) : null}
    </div>
  );
}

export default function CartPage() {
  const {
    applyCoupon,
    cartError,
    clearCart,
    coupon,
    couponError,
    discountTotal,
    isServerCart,
    items,
    itemCount,
    removeCoupon,
    removeItem,
    subtotal,
    updateQuantity,
  } = useCart();
  const { isAuthenticated } = useAuth();
  const {
    error: syncError,
    hasBlockingIssues,
    liveItems,
    liveSubtotal,
    loading: syncing,
    priceUpdateCount,
    refetch,
    synced,
  } = useLiveCartItems();
  const { settings } = useStorefrontSettings();
  const formatPkr = (value) => formatStoreCurrency(value, settings.currency);
  // The account cart is priced by the API; the guest cart is priced from the
  // live product lookup this page already runs.
  const payableSubtotal = isServerCart ? subtotal : liveSubtotal;
  const payableTotal = Math.max(0, payableSubtotal - discountTotal);
  const savings = liveItems.reduce(
    (sum, item) =>
      item.unavailable || item.outOfStock
        ? sum
        : sum +
          Math.max(0, (item.originalPrice || 0) - item.price) * item.quantity,
    0,
  );

  const setQuantity = (item, next) => {
    const max = Number(item.stock) || 99;
    updateQuantity(item.productId, Math.min(max, Math.max(1, next)));
  };

  return (
    <main className="commerce-page cart-page">
      <section className="commerce-container cart-page__head">
        <div>
          <p className="commerce-kicker">Your selection</p>
          <h1>Shopping cart</h1>
          <p>
            {items.length
              ? "Review your charging equipment before checkout."
              : "Your cart is ready for something electric."}
          </p>
        </div>
        <SmartLink className="cart-page__back" href="/products">
          <svg {...iconProps} className="h-4 w-4">
            <path d="M19 12H5" />
            <path d="m11 6-6 6 6 6" />
          </svg>
          Continue shopping
        </SmartLink>
      </section>

      {items.length ? (
        <section className="commerce-container cart-layout">
          <div className="cart-list">
            <div className="cart-list__head">
              <span>
                {itemCount} item{itemCount === 1 ? "" : "s"} in cart
              </span>
              <button type="button" className="cart-clear" onClick={clearCart}>
                Clear cart
              </button>
            </div>
            <p
              className={`cart-sync${syncError ? " is-error" : ""}`}
              role="status"
            >
              {syncing
                ? "Checking the latest prices and stock…"
                : syncError
                  ? "Live prices are unavailable right now, showing your last saved prices."
                  : priceUpdateCount
                    ? `${priceUpdateCount} price${priceUpdateCount === 1 ? "" : "s"} updated since you added ${priceUpdateCount === 1 ? "this item" : "these items"}.`
                    : "Prices and stock are live from the ZVolta store."}
              {syncError ? (
                <button type="button" className="cart-clear" onClick={refetch}>
                  Retry
                </button>
              ) : null}
            </p>
            {liveItems.map((item) => {
              const max = Number(item.stock) || 99;
              const atMax = item.quantity >= max;
              const isInactive = item.unavailable || item.outOfStock;

              return (
                <article
                  className={`cart-item${isInactive ? " is-inactive" : ""}`}
                  key={item.productId}
                >
                  <SmartLink
                    className="cart-item__media"
                    href={`/products/${item.slug}`}
                  >
                    <img src={item.image} alt={item.title} />
                  </SmartLink>
                  <div className="cart-item__copy">
                    {item.sku ? (
                      <span className="cart-item__sku">{item.sku}</span>
                    ) : null}
                    <h2>
                      <SmartLink href={`/products/${item.slug}`}>
                        {item.title}
                      </SmartLink>
                    </h2>
                    <p className="cart-item__unit">
                      {formatPkr(item.price)}
                      <span>per unit</span>
                      {item.originalPrice > item.price ? (
                        <del>{formatPkr(item.originalPrice)}</del>
                      ) : null}
                    </p>
                    {item.unavailable ? (
                      <p className="cart-item__stock is-gone">
                        No longer sold — remove it to continue
                      </p>
                    ) : item.outOfStock ? (
                      <p className="cart-item__stock is-gone">
                        Out of stock right now
                      </p>
                    ) : item.exceedsStock ? (
                      <p className="cart-item__stock is-max">
                        Only {item.stock} left — reduce the quantity
                      </p>
                    ) : item.priceChanged ? (
                      <p className="cart-item__stock is-max">
                        Price updated from {formatPkr(item.previousPrice)}
                      </p>
                    ) : item.stock ? (
                      <p
                        className={`cart-item__stock${atMax ? " is-max" : ""}`}
                      >
                        {atMax
                          ? "Maximum available quantity"
                          : `${item.stock} in stock`}
                      </p>
                    ) : null}
                  </div>
                  <div className="cart-item__controls">
                    <div className="cart-item__qty">
                      <span className="cart-item__label">Qty</span>
                      <div className="qty-stepper">
                        <button
                          type="button"
                          aria-label={`Decrease quantity of ${item.title}`}
                          disabled={isInactive || item.quantity <= 1}
                          onClick={() => setQuantity(item, item.quantity - 1)}
                        >
                          <svg {...iconProps} className="h-4 w-4">
                            <path d="M5 12h14" />
                          </svg>
                        </button>
                        <input
                          type="text"
                          inputMode="numeric"
                          aria-label={`Quantity of ${item.title}`}
                          disabled={isInactive}
                          value={item.quantity}
                          onChange={(event) => {
                            const digits = event.target.value.replace(
                              /[^0-9]/g,
                              "",
                            );
                            if (!digits) return;
                            setQuantity(item, Number(digits));
                          }}
                        />
                        <button
                          type="button"
                          aria-label={`Increase quantity of ${item.title}`}
                          disabled={isInactive || atMax}
                          onClick={() => setQuantity(item, item.quantity + 1)}
                        >
                          <svg {...iconProps} className="h-4 w-4">
                            <path d="M12 5v14" />
                            <path d="M5 12h14" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="cart-item__total">
                      <span className="cart-item__label">Total</span>
                      <strong>
                        {isInactive
                          ? "—"
                          : formatPkr(item.price * item.quantity)}
                      </strong>
                    </div>
                    <button
                      type="button"
                      className="cart-item__remove"
                      aria-label={`Remove ${item.title} from cart`}
                      title="Remove"
                      onClick={() => removeItem(item.productId)}
                    >
                      <svg {...iconProps} className="h-4 w-4">
                        <path d="M4 7h16" />
                        <path d="M9 7V5h6v2" />
                        <path d="M6 7h12l-1 12H7z" />
                      </svg>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          <aside className="cart-summary">
            <p className="commerce-kicker">Order summary</p>
            <div>
              <span>
                Subtotal ({itemCount} item{itemCount === 1 ? "" : "s"})
              </span>
              <strong>{formatPkr(payableSubtotal)}</strong>
            </div>
            {savings > 0 ? (
              <div className="cart-summary__save">
                <span>You save</span>
                <strong>-{formatPkr(savings)}</strong>
              </div>
            ) : null}
            {discountTotal > 0 ? (
              <div className="cart-summary__save">
                <span>Coupon {coupon?.code}</span>
                <strong>-{formatPkr(discountTotal)}</strong>
              </div>
            ) : null}
            <div>
              <span>Delivery</span>
              <span>Calculated at checkout</span>
            </div>
            <CouponBox
              coupon={coupon}
              couponError={couponError}
              isAuthenticated={isAuthenticated}
              onApply={applyCoupon}
              onRemove={removeCoupon}
            />
            <hr />
            <div className="cart-summary__total">
              <span>Estimated total</span>
              <strong>{formatPkr(payableTotal)}</strong>
            </div>
            {cartError ? (
              <p className="cart-summary__notice">{cartError}</p>
            ) : null}
            {hasBlockingIssues ? (
              <p className="cart-summary__notice">
                Some items need attention before you can check out.
              </p>
            ) : null}
            {hasBlockingIssues ? (
              <span className="commerce-link-button is-disabled" aria-disabled>
                Continue to checkout
                <ArrowIcon />
              </span>
            ) : (
              <SmartLink className="commerce-link-button" href="/checkout">
                Continue to checkout
                <ArrowIcon />
              </SmartLink>
            )}
            <ul className="cart-summary__trust">
              {trustPoints.map((point) => (
                <li key={point.label}>
                  <svg {...iconProps} className="h-4 w-4">
                    {point.icon}
                  </svg>
                  {point.label}
                </li>
              ))}
            </ul>
            <small>
              {synced
                ? "Prices and stock above are read live from the ZVolta store, and are verified again when you place the order."
                : "Prices and availability are verified securely by the ZVolta API when you place the order."}
            </small>
          </aside>
        </section>
      ) : (
        <section className="commerce-container">
          <div className="cart-empty">
            <span className="cart-empty__icon">
              <svg {...iconProps} className="h-8 w-8">
                <circle cx="9" cy="20" r="1" />
                <circle cx="18" cy="20" r="1" />
                <path d="M3 4h2l2.4 10.2a2 2 0 0 0 2 1.5h7.8a2 2 0 0 0 2-1.6L21 7H6" />
              </svg>
            </span>
            <h2>Your cart is empty</h2>
            <p>
              Browse ZVolta home and commercial chargers, then add the setup
              that fits your vehicle and site.
            </p>
            <div className="cart-empty__actions">
              <SmartLink className="commerce-link-button" href="/products">
                Explore products
                <ArrowIcon />
              </SmartLink>
              <SmartLink className="commerce-secondary-button" href="/support">
                Talk to an expert
                <ArrowIcon />
              </SmartLink>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

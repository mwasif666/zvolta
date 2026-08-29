import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  formatStoreCurrency,
  useStorefrontSettings,
} from "../../context/StorefrontSettingsContext";
import { useAuth } from "../../context/AuthContext";
import { accountApi } from "../../services/api";
import { SmartLink } from "../SmartLink";

const tabs = [
  ["overview", "Overview", "Account summary"],
  ["orders", "Orders & tracking", "Delivery progress"],
  ["profile", "Profile details", "Contact and address"],
  ["security", "Password", "Account security"],
];

const orderSteps = [
  "pending",
  "confirmed",
  "processing",
  "shipped",
  "delivered",
];

const formatDate = (value, options = { dateStyle: "medium" }) =>
  value
    ? new Intl.DateTimeFormat("en-PK", options).format(new Date(value))
    : "-";

const labelStatus = (value = "pending") =>
  String(value)
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

function AccountIcon({ type }) {
  const paths = {
    overview: (
      <>
        <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />
      </>
    ),
    orders: (
      <>
        <path d="M5 7.5 12 4l7 3.5v9L12 20l-7-3.5z" />
        <path d="m5 7.5 7 3.5 7-3.5M12 11v9" />
      </>
    ),
    profile: (
      <>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M4.5 20a7.5 7.5 0 0 1 15 0" />
      </>
    ),
    security: (
      <>
        <rect x="5" y="10" width="14" height="10" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v2" />
      </>
    ),
    logout: (
      <>
        <path d="M14 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-3M10 12h11M18 9l3 3-3 3" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[type]}
    </svg>
  );
}

function StatusNotice({ status }) {
  if (!status?.message) return null;
  return (
    <div
      className={`account-notice ${status.error ? "is-error" : "is-success"}`}
      role={status.error ? "alert" : "status"}
    >
      {status.message}
    </div>
  );
}

function OrderProgress({ order }) {
  const terminal = ["cancelled", "returned"].includes(order.orderStatus);
  const currentIndex = orderSteps.indexOf(order.orderStatus);

  if (terminal) {
    return (
      <div className="account-order-terminal">
        This order is {order.orderStatus}. Contact support if you need
        assistance.
      </div>
    );
  }

  return (
    <ol
      className="account-order-progress"
      aria-label={`Order status: ${labelStatus(order.orderStatus)}`}
    >
      {orderSteps.map((step, index) => (
        <li key={step} className={index <= currentIndex ? "is-complete" : ""}>
          <span />
          <small>{labelStatus(step)}</small>
        </li>
      ))}
    </ol>
  );
}

function OrderCard({ order, formatMoney, compact = false }) {
  const image =
    order.items?.[0]?.image?.url || order.items?.[0]?.product?.images?.[0]?.url;
  return (
    <article className={`account-order-card ${compact ? "is-compact" : ""}`}>
      <div className="account-order-head">
        <div>
          <span className="account-label">Order</span>
          <strong>{order.orderNumber}</strong>
        </div>
        <span className={`account-status is-${order.orderStatus}`}>
          {labelStatus(order.orderStatus)}
        </span>
      </div>
      <div className="account-order-body">
        {image ? (
          <img src={image} alt="" />
        ) : (
          <div className="account-order-placeholder">Z</div>
        )}
        <div>
          <strong>{order.items?.[0]?.title || "ZVolta order"}</strong>
          <p>
            {Number(order.totalItems || order.items?.length || 0)} item
            {Number(order.totalItems || order.items?.length || 0) === 1
              ? ""
              : "s"}
            {order.items?.length > 1
              ? ` - plus ${order.items.length - 1} more`
              : ""}
          </p>
        </div>
        <div className="account-order-total">
          <span>{formatDate(order.createdAt || order.placedAt)}</span>
          <strong>{formatMoney(order.grandTotal)}</strong>
        </div>
      </div>
      <OrderProgress order={order} />
    </article>
  );
}

export default function MyAccountPage() {
  const {
    user,
    loading,
    isAuthenticated,
    updateProfile,
    changePassword,
    logout,
  } = useAuth();
  const { settings } = useStorefrontSettings();
  const navigate = useNavigate();
  const location = useLocation();
  const initialTab = new URLSearchParams(location.search).get("tab");
  const [activeTab, setActiveTab] = useState(
    tabs.some(([id]) => id === initialTab) ? initialTab : "overview",
  );
  const [orders, setOrders] = useState([]);
  const [ordersState, setOrdersState] = useState({ loading: true, error: "" });
  const [formStatus, setFormStatus] = useState({
    form: "",
    submitting: false,
    message: "",
    error: false,
  });
  const [trackedOrder, setTrackedOrder] = useState(null);
  const formatMoney = (value) => formatStoreCurrency(value, settings.currency);
  const defaultAddress = useMemo(
    () =>
      user?.addresses?.find((address) => address.isDefault) ||
      user?.addresses?.[0] ||
      {},
    [user],
  );

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate("/login?next=/my-account", { replace: true });
    }
  }, [isAuthenticated, loading, navigate]);

  useEffect(() => {
    if (!isAuthenticated) return undefined;
    let active = true;
    setOrdersState({ loading: true, error: "" });
    accountApi
      .orders()
      .then((result) => {
        if (active) setOrders(result.data || []);
      })
      .catch((error) => {
        if (active) setOrdersState({ loading: false, error: error.message });
      })
      .finally(() => {
        if (active)
          setOrdersState((current) => ({ ...current, loading: false }));
      });
    return () => {
      active = false;
    };
  }, [isAuthenticated]);

  function selectTab(tab) {
    setActiveTab(tab);
    setFormStatus({ form: "", submitting: false, message: "", error: false });
    navigate(`/my-account${tab === "overview" ? "" : `?tab=${tab}`}`, {
      replace: true,
    });
  }

  async function saveProfile(event) {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget));
    setFormStatus({
      form: "profile",
      submitting: true,
      message: "",
      error: false,
    });
    const address = {
      ...(defaultAddress._id ? { _id: defaultAddress._id } : {}),
      label: defaultAddress.label || "Home",
      fullName: values.name,
      phone: values.phone,
      addressLine1: values.addressLine1,
      addressLine2: values.addressLine2,
      city: values.city,
      state: values.state,
      postalCode: values.postalCode,
      country: "Pakistan",
      isDefault: true,
    };
    try {
      await updateProfile({
        name: values.name,
        email: values.email,
        phone: values.phone,
        addresses:
          values.addressLine1 || values.city
            ? [
                address,
                ...(user.addresses || []).filter(
                  (item) => item._id !== defaultAddress._id,
                ),
              ]
            : user.addresses,
      });
      setFormStatus({
        form: "profile",
        submitting: false,
        message: "Your details have been updated.",
        error: false,
      });
    } catch (error) {
      setFormStatus({
        form: "profile",
        submitting: false,
        message: error.message,
        error: true,
      });
    }
  }

  async function savePassword(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    if (values.newPassword !== values.confirmPassword) {
      setFormStatus({
        form: "security",
        submitting: false,
        message: "New passwords do not match.",
        error: true,
      });
      return;
    }
    setFormStatus({
      form: "security",
      submitting: true,
      message: "",
      error: false,
    });
    try {
      await changePassword({
        currentPassword: values.currentPassword,
        newPassword: values.newPassword,
      });
      form.reset();
      setFormStatus({
        form: "security",
        submitting: false,
        message: "Password changed successfully.",
        error: false,
      });
    } catch (error) {
      setFormStatus({
        form: "security",
        submitting: false,
        message: error.message,
        error: true,
      });
    }
  }

  async function trackOrder(event) {
    event.preventDefault();
    const orderNumber = new FormData(event.currentTarget).get("orderNumber");
    setFormStatus({
      form: "tracking",
      submitting: true,
      message: "",
      error: false,
    });
    setTrackedOrder(null);
    try {
      const result = await accountApi.trackOrder(orderNumber);
      setTrackedOrder(result.data);
      setFormStatus({
        form: "tracking",
        submitting: false,
        message: "Order found. Latest progress is shown below.",
        error: false,
      });
    } catch (error) {
      setFormStatus({
        form: "tracking",
        submitting: false,
        message: error.message,
        error: true,
      });
    }
  }

  async function signOut() {
    await logout();
    navigate("/", { replace: true });
  }

  if (loading || !user) {
    return (
      <main className="commerce-page account-loading">
        <span className="account-spinner" />
        Loading your account...
      </main>
    );
  }

  const firstName = user.name?.split(/\s+/)[0] || "there";

  return (
    <main className="commerce-page account-page">
      <section className="commerce-container account-hero">
        <div>
          <p className="commerce-kicker">My account</p>
          <h1>Welcome back, {firstName}.</h1>
          <p>Manage your details, orders and account security in one place.</p>
        </div>
        <div className="account-identity">
          <span>{user.name?.[0]?.toUpperCase() || "Z"}</span>
          <div>
            <strong>{user.name}</strong>
            <small>{user.email}</small>
          </div>
        </div>
      </section>

      <section className="commerce-container account-layout">
        <aside className="account-sidebar" aria-label="Account navigation">
          <div className="account-sidebar-title">Account menu</div>
          {tabs.map(([id, label, description]) => (
            <button
              key={id}
              type="button"
              aria-label={label}
              className={activeTab === id ? "is-active" : ""}
              onClick={() => selectTab(id)}
            >
              <AccountIcon type={id} />
              <span>
                <strong>{label}</strong>
                <small>{description}</small>
              </span>
            </button>
          ))}
          <button
            type="button"
            aria-label="Log out"
            className="account-signout"
            onClick={signOut}
          >
            <AccountIcon type="logout" />
            <span>
              <strong>Log out</strong>
              <small>Sign out securely</small>
            </span>
          </button>
        </aside>

        <div className="account-content">
          {activeTab === "overview" ? (
            <div className="account-section">
              <div className="account-section-head">
                <div>
                  <span className="account-label">Dashboard</span>
                  <h2>Account overview</h2>
                </div>
                <button type="button" onClick={() => selectTab("profile")}>
                  Edit details
                </button>
              </div>
              <div className="account-summary-grid">
                <article>
                  <span>Orders</span>
                  <strong>{ordersState.loading ? "-" : orders.length}</strong>
                  <small>Placed with this account</small>
                </article>
                <article>
                  <span>Latest status</span>
                  <strong className="is-text">
                    {orders[0]
                      ? labelStatus(orders[0].orderStatus)
                      : "No orders yet"}
                  </strong>
                  <small>
                    {orders[0]
                      ? orders[0].orderNumber
                      : "Start with the ZVolta shop"}
                  </small>
                </article>
                <article>
                  <span>Member since</span>
                  <strong className="is-text">
                    {formatDate(user.createdAt, {
                      month: "long",
                      year: "numeric",
                    })}
                  </strong>
                  <small>
                    {user.isActive ? "Account active" : "Account inactive"}
                  </small>
                </article>
              </div>
              <div className="account-details-card">
                <div>
                  <span className="account-label">Contact details</span>
                  <h3>{user.name}</h3>
                  <p>
                    {user.email}
                    <br />
                    {user.phone || "No phone number added"}
                  </p>
                </div>
                <div>
                  <span className="account-label">
                    Default delivery address
                  </span>
                  <h3>{defaultAddress.label || "Not added"}</h3>
                  <p>
                    {defaultAddress.addressLine1
                      ? [
                          defaultAddress.addressLine1,
                          defaultAddress.addressLine2,
                          defaultAddress.city,
                          defaultAddress.state,
                          defaultAddress.postalCode,
                        ]
                          .filter(Boolean)
                          .join(", ")
                      : "Add an address to make checkout faster."}
                  </p>
                </div>
              </div>
              <div className="account-subsection-head">
                <div>
                  <span className="account-label">Recent activity</span>
                  <h3>Latest order</h3>
                </div>
                <button type="button" onClick={() => selectTab("orders")}>
                  View all orders
                </button>
              </div>
              {ordersState.loading ? (
                <div className="account-inline-state">
                  <span className="account-spinner" />
                  Loading orders...
                </div>
              ) : orders[0] ? (
                <OrderCard
                  order={orders[0]}
                  formatMoney={formatMoney}
                  compact
                />
              ) : (
                <div className="account-empty">
                  <h3>No orders yet</h3>
                  <p>Your purchases and delivery progress will appear here.</p>
                  <SmartLink className="commerce-link-button" href="/products">
                    Explore products
                  </SmartLink>
                </div>
              )}
            </div>
          ) : null}

          {activeTab === "orders" ? (
            <div className="account-section">
              <div className="account-section-head">
                <div>
                  <span className="account-label">Purchase history</span>
                  <h2>Orders & tracking</h2>
                  <p>See every order and follow fulfillment progress.</p>
                </div>
              </div>
              <form className="account-track-form" onSubmit={trackOrder}>
                <div>
                  <strong>Track an order</strong>
                  <small>
                    Enter a ZVolta order number, for example ZV-12345678-ABCD.
                  </small>
                </div>
                <label>
                  <span className="sr-only">Order number</span>
                  <input
                    name="orderNumber"
                    required
                    placeholder="ZV-XXXXXXXX-XXXX"
                  />
                </label>
                <button
                  type="submit"
                  disabled={
                    formStatus.form === "tracking" && formStatus.submitting
                  }
                >
                  {formStatus.form === "tracking" && formStatus.submitting
                    ? "Checking..."
                    : "Track order"}
                </button>
              </form>
              {formStatus.form === "tracking" ? (
                <StatusNotice status={formStatus} />
              ) : null}
              {trackedOrder ? (
                <OrderCard order={trackedOrder} formatMoney={formatMoney} />
              ) : null}
              <div className="account-subsection-head">
                <div>
                  <span className="account-label">Order history</span>
                  <h3>
                    {orders.length} order{orders.length === 1 ? "" : "s"}
                  </h3>
                </div>
              </div>
              {ordersState.loading ? (
                <div className="account-inline-state">
                  <span className="account-spinner" />
                  Loading orders...
                </div>
              ) : ordersState.error ? (
                <div className="account-notice is-error">
                  {ordersState.error}
                </div>
              ) : orders.length ? (
                <div className="account-orders-list">
                  {orders.map((order) => (
                    <OrderCard
                      key={order._id || order.orderNumber}
                      order={order}
                      formatMoney={formatMoney}
                    />
                  ))}
                </div>
              ) : (
                <div className="account-empty">
                  <h3>No orders found</h3>
                  <p>
                    Once you place an order, its status and tracking details
                    will show here.
                  </p>
                  <SmartLink className="commerce-link-button" href="/products">
                    Shop chargers
                  </SmartLink>
                </div>
              )}
            </div>
          ) : null}

          {activeTab === "profile" ? (
            <div className="account-section">
              <div className="account-section-head">
                <div>
                  <span className="account-label">Personal information</span>
                  <h2>Profile details</h2>
                  <p>Keep your contact and delivery information current.</p>
                </div>
              </div>
              <form className="account-form" onSubmit={saveProfile}>
                <div className="account-form-grid">
                  <label>
                    Full name
                    <input
                      name="name"
                      required
                      autoComplete="name"
                      defaultValue={user.name}
                    />
                  </label>
                  <label>
                    Email address
                    <input
                      name="email"
                      required
                      type="email"
                      autoComplete="email"
                      defaultValue={user.email}
                    />
                  </label>
                  <label className="is-wide">
                    Phone number
                    <input
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      defaultValue={user.phone}
                      placeholder="0300 1234567"
                    />
                  </label>
                </div>
                <div className="account-form-divider">
                  <span>Default delivery address</span>
                </div>
                <div className="account-form-grid">
                  <label className="is-wide">
                    Address line 1
                    <input
                      name="addressLine1"
                      autoComplete="address-line1"
                      defaultValue={defaultAddress.addressLine1}
                      placeholder="House, street or building"
                    />
                  </label>
                  <label className="is-wide">
                    Address line 2 <small>Optional</small>
                    <input
                      name="addressLine2"
                      autoComplete="address-line2"
                      defaultValue={defaultAddress.addressLine2}
                      placeholder="Apartment, suite or landmark"
                    />
                  </label>
                  <label>
                    City
                    <input
                      name="city"
                      autoComplete="address-level2"
                      defaultValue={defaultAddress.city}
                    />
                  </label>
                  <label>
                    Province / state
                    <input
                      name="state"
                      autoComplete="address-level1"
                      defaultValue={defaultAddress.state}
                    />
                  </label>
                  <label>
                    Postal code
                    <input
                      name="postalCode"
                      autoComplete="postal-code"
                      defaultValue={defaultAddress.postalCode}
                    />
                  </label>
                  <label>
                    Country
                    <input value="Pakistan" disabled />
                  </label>
                </div>
                {formStatus.form === "profile" ? (
                  <StatusNotice status={formStatus} />
                ) : null}
                <div className="account-form-actions">
                  <button
                    type="submit"
                    disabled={
                      formStatus.form === "profile" && formStatus.submitting
                    }
                  >
                    {formStatus.form === "profile" && formStatus.submitting
                      ? "Saving changes..."
                      : "Save changes"}
                  </button>
                </div>
              </form>
            </div>
          ) : null}

          {activeTab === "security" ? (
            <div className="account-section">
              <div className="account-section-head">
                <div>
                  <span className="account-label">Security</span>
                  <h2>Change password</h2>
                  <p>
                    Use at least six characters and avoid reusing an old
                    password.
                  </p>
                </div>
              </div>
              <form
                className="account-form account-security-form"
                onSubmit={savePassword}
              >
                <label>
                  Current password
                  <input
                    name="currentPassword"
                    type="password"
                    required
                    minLength={6}
                    autoComplete="current-password"
                  />
                </label>
                <label>
                  New password
                  <input
                    name="newPassword"
                    type="password"
                    required
                    minLength={6}
                    autoComplete="new-password"
                  />
                </label>
                <label>
                  Confirm new password
                  <input
                    name="confirmPassword"
                    type="password"
                    required
                    minLength={6}
                    autoComplete="new-password"
                  />
                </label>
                {formStatus.form === "security" ? (
                  <StatusNotice status={formStatus} />
                ) : null}
                <div className="account-form-actions">
                  <button
                    type="submit"
                    disabled={
                      formStatus.form === "security" && formStatus.submitting
                    }
                  >
                    {formStatus.form === "security" && formStatus.submitting
                      ? "Updating password..."
                      : "Update password"}
                  </button>
                </div>
              </form>
              <div className="account-security-note">
                <AccountIcon type="security" />
                <div>
                  <strong>Your account is protected</strong>
                  <p>
                    ZVolta never displays or sends your password. If you did not
                    request a change, contact support.
                  </p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}

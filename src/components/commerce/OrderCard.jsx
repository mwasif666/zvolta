// Order rendering is shared by the account area and the public tracking page,
// so a status change only has to be described in one place.

export const orderSteps = [
  "pending",
  "confirmed",
  "processing",
  "shipped",
  "delivered",
];

export const formatOrderDate = (value, options = { dateStyle: "medium" }) =>
  value
    ? new Intl.DateTimeFormat("en-PK", options).format(new Date(value))
    : "-";

export const labelStatus = (value = "pending") =>
  String(value)
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

export function StatusNotice({ status }) {
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

export function OrderProgress({ order }) {
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

export function OrderCard({ order, formatMoney, compact = false }) {
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
          <span>{formatOrderDate(order.createdAt || order.placedAt)}</span>
          <strong>{formatMoney(order.grandTotal)}</strong>
        </div>
      </div>
      <OrderProgress order={order} />
    </article>
  );
}

export default OrderCard;

import "./ProductSkeleton.css";

export function ProductCardSkeletons({ count = 3 }) {
  return (
    <>
      <p className="sr-only" role="status">
        Loading products…
      </p>
      {Array.from({ length: count }, (_, index) => (
        <article
          className="commerce-card product-card-skeleton"
          key={index}
          aria-hidden="true"
        >
          <span className="commerce-card__index product-skeleton-block" />
          <div className="commerce-card__intro">
            <span className="product-skeleton-block product-skeleton-title" />
            <span className="product-skeleton-block product-skeleton-line" />
            <span className="product-skeleton-block product-skeleton-line product-skeleton-short" />
          </div>
          <div className="commerce-card__art">
            <span className="product-skeleton-block product-skeleton-image" />
          </div>
          <div className="commerce-card__specs">
            {Array.from({ length: 4 }, (_, row) => (
              <div className="commerce-card__spec-row" key={row}>
                <span className="product-skeleton-block product-skeleton-label" />
                <span className="product-skeleton-block product-skeleton-value" />
              </div>
            ))}
          </div>
          <div className="commerce-card__actions">
            <span className="product-skeleton-block product-skeleton-button" />
            <span className="product-skeleton-block product-skeleton-cart" />
          </div>
        </article>
      ))}
    </>
  );
}

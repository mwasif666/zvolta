import { useMemo, useState } from "react";
import { commerceApi } from "../../services/api";
import { useCommerceData } from "../../hooks/useCommerceData";
import { useCart } from "../../context/CartContext";
import {
  getChargerCardDetails,
  getChargerDetailHref,
} from "../../lib/chargerCatalog";
import { SmartLink } from "../SmartLink";
import {
  defaultStorefrontSettings,
  formatStoreCurrency,
  useStorefrontSettings,
} from "../../context/StorefrontSettingsContext";

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

export function formatPkr(value) {
  return formatStoreCurrency(value, defaultStorefrontSettings.currency);
}

export function ProductCard({ product, index = 0 }) {
  const { addItem } = useCart();
  const { settings } = useStorefrontSettings();
  const [added, setAdded] = useState(false);
  const price = product.discountPrice || product.price;
  const isAvailable = Number(product.stock) > 0;
  const details = getChargerCardDetails(product);
  const detailHref = getChargerDetailHref(product);
  const cartLabel = isAvailable
    ? added
      ? `${product.title} added to cart`
      : `Add ${product.title} to cart`
    : `${product.title} is out of stock`;

  return (
    <article className="commerce-card">
      <span className="commerce-card__index">
        {String(index + 1).padStart(2, "0")}
      </span>
      {product.isNewArrival ? (
        <span className="commerce-card__badge">New</span>
      ) : null}
      <div className="commerce-card__intro">
        <h2>
          <SmartLink href={detailHref}>{product.title}</SmartLink>
        </h2>
        <p>{product.shortDescription || product.description}</p>
      </div>
      <SmartLink className="commerce-card__art" href={detailHref}>
        <img
          src={product.images?.[0]?.url}
          alt={product.images?.[0]?.alt || product.title}
        />
      </SmartLink>
      <div className="commerce-card__specs">
        <div className="commerce-card__spec-row">
          <span>Power</span>
          <strong>{details.power}</strong>
        </div>
        <div className="commerce-card__spec-row">
          <span>Best for</span>
          <strong>{details.bestFor}</strong>
        </div>
        <div className="commerce-card__spec-row">
          <span>Location</span>
          <strong>{details.location}</strong>
        </div>
        <div className="commerce-card__spec-row">
          <span>Price</span>
          <strong>
            {formatStoreCurrency(price, settings.currency)}
            {product.discountPrice ? (
              <del>{formatStoreCurrency(product.price, settings.currency)}</del>
            ) : null}
          </strong>
        </div>
      </div>
      <div className="commerce-card__actions">
        <SmartLink className="commerce-card__learn" href={detailHref}>
          View details
          <svg {...iconProps} className="h-4 w-4">
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </SmartLink>
        <button
          type="button"
          className={`commerce-card__cart ${added ? "is-added" : ""}`}
          aria-label={cartLabel}
          title={cartLabel}
          disabled={!isAvailable}
          onClick={() => {
            addItem(product);
            setAdded(true);
          }}
        >
          {added ? (
            <svg {...iconProps} className="h-5 w-5">
              <path d="m5 12 4 4L19 6" />
            </svg>
          ) : (
            <svg {...iconProps} className="h-5 w-5">
              <circle cx="9" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
              <path d="M3 4h2l2.4 10.2a2 2 0 0 0 2 1.5h7.8a2 2 0 0 0 2-1.6L21 7H6" />
            </svg>
          )}
        </button>
      </div>
    </article>
  );
}

export default function ProductsPage() {
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const products = useCommerceData(
    () => commerceApi.allProducts({ sort: "featured" }),
    [],
  );
  const categories = useCommerceData(commerceApi.categories, []);
  const filters = useMemo(() => {
    const counts = new Map();

    (products.data || []).forEach((product) => {
      const slug = product.category?.slug;
      if (slug) counts.set(slug, (counts.get(slug) || 0) + 1);
    });

    return (categories.data || [])
      .filter((item) => item.isActive !== false)
      .filter((item) => !products.data || counts.has(item.slug))
      .sort(
        (a, b) =>
          Number(a.sortOrder || 0) - Number(b.sortOrder || 0) ||
          String(a.name).localeCompare(String(b.name)),
      )
      .map((item) => ({ ...item, count: counts.get(item.slug) || 0 }));
  }, [categories.data, products.data]);
  const filtered = useMemo(
    () =>
      (products.data || []).filter((product) => {
        const matchesCategory =
          !category || product.category?.slug === category;
        const term = search.trim().toLowerCase();
        return (
          matchesCategory &&
          (!term ||
            `${product.title} ${product.shortDescription || ""}`
              .toLowerCase()
              .includes(term))
        );
      }),
    [category, products.data, search],
  );

  return (
    <main className="commerce-page">
      <section className="commerce-hero">
        <div className="commerce-container">
          <p className="commerce-kicker">ZVolta hardware</p>
          <h1>
            Charging equipment.
            <br />
            <em>Ready for what’s next.</em>
          </h1>
          <p>
            Connected EV chargers and accessories, backed by ZVolta software and
            installation support.
          </p>
        </div>
      </section>
      <section className="commerce-catalog commerce-container">
        <div className="commerce-toolbar">
          <div className="commerce-filters">
            <button
              className={!category ? "active" : ""}
              onClick={() => setCategory("")}
            >
              All
              {products.data ? <small>{products.data.length}</small> : null}
            </button>
            {filters.map((item) => (
              <button
                className={category === item.slug ? "active" : ""}
                key={item._id}
                onClick={() => setCategory(item.slug)}
              >
                {item.name}
                <small>{item.count}</small>
              </button>
            ))}
            {categories.loading ? (
              <span className="commerce-filters__state">Loading filters…</span>
            ) : null}
            {categories.error ? (
              <span className="commerce-filters__state">
                Categories unavailable right now.
              </span>
            ) : null}
          </div>
          <label className="commerce-search">
            <span className="sr-only">Search products</span>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search products"
            />
          </label>
        </div>
        {products.loading ? (
          <div className="commerce-state">Loading ZVolta products…</div>
        ) : null}
        {products.error ? (
          <div className="commerce-state error">
            {products.error}
            <small>Start the API server at port 5000 and refresh.</small>
          </div>
        ) : null}
        {!products.loading && !products.error ? (
          <div className="commerce-grid">
            {filtered.map((product, index) => (
              <ProductCard product={product} index={index} key={product._id} />
            ))}
          </div>
        ) : null}
        {!products.loading && !products.error && filtered.length === 0 ? (
          <div className="commerce-state">
            No products match this selection.
          </div>
        ) : null}
      </section>
    </main>
  );
}

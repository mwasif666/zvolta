import { useMemo, useState } from "react";
import { commerceApi } from "../../services/api";
import { useCommerceData } from "../../hooks/useCommerceData";
import { useCart } from "../../context/CartContext";
import { SmartLink } from "../SmartLink";

export function formatPkr(value) {
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0,
  }).format(Number(value || 0));
}

export function ProductCard({ product }) {
  const { addItem } = useCart();
  const price = product.discountPrice || product.price;

  return (
    <article className="commerce-card">
      <SmartLink className="commerce-card__image" href={`/products/${product.slug}`}>
        <img src={product.images?.[0]?.url} alt={product.images?.[0]?.alt || product.title} />
        {product.isNewArrival ? <span>New</span> : null}
      </SmartLink>
      <div className="commerce-card__body">
        <p>{product.category?.name || "EV charging"}</p>
        <h2><SmartLink href={`/products/${product.slug}`}>{product.title}</SmartLink></h2>
        <div className="commerce-card__price">
          <strong>{formatPkr(price)}</strong>
          {product.discountPrice ? <del>{formatPkr(product.price)}</del> : null}
        </div>
        <button type="button" disabled={!product.stock} onClick={() => addItem(product)}>
          {product.stock ? "Add to cart" : "Out of stock"}<span>↗</span>
        </button>
      </div>
    </article>
  );
}

export default function ProductsPage() {
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const products = useCommerceData(() => commerceApi.products("limit=100&sort=featured"), []);
  const categories = useCommerceData(commerceApi.categories, []);
  const filtered = useMemo(() => (products.data || []).filter((product) => {
    const matchesCategory = !category || product.category?.slug === category;
    const term = search.trim().toLowerCase();
    return matchesCategory && (!term || `${product.title} ${product.shortDescription || ""}`.toLowerCase().includes(term));
  }), [category, products.data, search]);

  return (
    <main className="commerce-page">
      <section className="commerce-hero">
        <div className="commerce-container">
          <p className="commerce-kicker">ZVolta hardware</p>
          <h1>Charging equipment.<br /><em>Ready for what’s next.</em></h1>
          <p>Connected EV chargers and accessories, backed by ZVolta software and installation support.</p>
        </div>
      </section>
      <section className="commerce-catalog commerce-container">
        <div className="commerce-toolbar">
          <div className="commerce-filters">
            <button className={!category ? "active" : ""} onClick={() => setCategory("")}>All</button>
            {(categories.data || []).map((item) => <button className={category === item.slug ? "active" : ""} key={item._id} onClick={() => setCategory(item.slug)}>{item.name}</button>)}
          </div>
          <label className="commerce-search"><span className="sr-only">Search products</span><input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search products" /></label>
        </div>
        {products.loading ? <div className="commerce-state">Loading ZVolta products…</div> : null}
        {products.error ? <div className="commerce-state error">{products.error}<small>Start the API server at port 5000 and refresh.</small></div> : null}
        {!products.loading && !products.error ? <div className="commerce-grid">{filtered.map((product) => <ProductCard product={product} key={product._id} />)}</div> : null}
        {!products.loading && !products.error && filtered.length === 0 ? <div className="commerce-state">No products match this selection.</div> : null}
      </section>
    </main>
  );
}

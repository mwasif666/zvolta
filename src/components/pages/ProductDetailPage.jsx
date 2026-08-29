import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useCommerceData } from "../../hooks/useCommerceData";
import { commerceApi } from "../../services/api";
import { PageSeo } from "../seo/PageSeo";
import { SmartLink } from "../SmartLink";
import NotFoundPage from "./NotFoundPage";
import {
  formatStoreCurrency,
  useStorefrontSettings,
} from "../../context/StorefrontSettingsContext";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const { addItem } = useCart();
  const { settings } = useStorefrontSettings();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const product = useCommerceData(() => commerceApi.product(slug), [slug]);

  if (product.loading)
    return (
      <main className="commerce-page">
        <div className="commerce-state full">Loading product…</div>
      </main>
    );
  if (product.error || !product.data) return <NotFoundPage />;
  const item = product.data;
  const isAvailable = Number(item.stock) > 0;

  function addToCart() {
    addItem(item, quantity);
    setAdded(true);
  }

  function buyNow() {
    addItem(item, quantity);
    navigate("/checkout");
  }

  return (
    <main className="commerce-page product-detail">
      <PageSeo
        pathname={`/products/${item.slug}`}
        meta={{
          title: `${item.title} | ZVolta`,
          description: item.shortDescription,
          image: item.images?.[0]?.url,
        }}
      />
      <div className="commerce-container product-detail__crumb">
        <SmartLink href="/products">Products</SmartLink>
        <span>/</span>
        <span>{item.title}</span>
      </div>
      <section className="commerce-container product-detail__layout">
        <div className="product-detail__visual">
          <img
            src={item.images?.[0]?.url}
            alt={item.images?.[0]?.alt || item.title}
          />
          <span>{item.category?.name || "ZVolta"}</span>
        </div>
        <div className="product-detail__copy">
          <p className="commerce-kicker">{item.sku}</p>
          <h1>{item.title}</h1>
          <p className="product-detail__lead">{item.shortDescription}</p>
          <div className="product-detail__price">
            <strong>
              {formatStoreCurrency(
                item.discountPrice || item.price,
                settings.currency,
              )}
            </strong>
            {item.discountPrice ? (
              <del>{formatStoreCurrency(item.price, settings.currency)}</del>
            ) : null}
          </div>
          <div className="product-detail__purchase">
            <label>
              Quantity
              <input
                type="number"
                min="1"
                max={Math.max(1, item.stock)}
                value={quantity}
                onChange={(event) =>
                  setQuantity(Math.max(1, Number(event.target.value)))
                }
              />
            </label>
            <div className="product-detail__actions">
              <button
                className="commerce-action commerce-action--secondary"
                type="button"
                disabled={!isAvailable}
                onClick={addToCart}
              >
                {isAvailable
                  ? added
                    ? "Added to cart"
                    : "Add to cart"
                  : "Out of stock"}
                <span aria-hidden="true">{added ? "✓" : "+"}</span>
              </button>
              <button
                className="commerce-action commerce-action--primary"
                type="button"
                disabled={!isAvailable}
                onClick={buyNow}
              >
                {isAvailable ? "Buy now" : "Unavailable"}
                <span aria-hidden="true">↗</span>
              </button>
            </div>
          </div>
          <p className="product-detail__stock">
            {item.stock > 0
              ? `${item.stock} units ready to order`
              : "Currently unavailable"}
          </p>
          <div className="product-detail__description">
            <h2>Designed for effortless charging.</h2>
            <p>{item.longDescription || item.description}</p>
          </div>
          <div className="product-detail__assurance">
            <span>✓ Connected support</span>
            <span>✓ Secure checkout</span>
            <span>✓ Installation guidance</span>
          </div>
        </div>
      </section>
    </main>
  );
}

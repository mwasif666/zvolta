import { useCart } from "../../context/CartContext";
import { SmartLink } from "../SmartLink";
import { formatPkr } from "./ProductsPage";

export default function CartPage() {
  const { items, removeItem, subtotal, updateQuantity } = useCart();
  return (
    <main className="commerce-page cart-page">
      <section className="commerce-container cart-page__head"><p className="commerce-kicker">Your selection</p><h1>Shopping cart</h1><p>{items.length ? "Review your charging equipment before checkout." : "Your cart is ready for something electric."}</p></section>
      <section className="commerce-container cart-layout">
        <div className="cart-list">
          {items.length ? items.map((item) => <article className="cart-item" key={item.productId}><SmartLink href={`/products/${item.slug}`}><img src={item.image} alt={item.title} /></SmartLink><div className="cart-item__copy"><p>{item.sku}</p><h2><SmartLink href={`/products/${item.slug}`}>{item.title}</SmartLink></h2><strong>{formatPkr(item.price)}</strong></div><label>Qty<input type="number" min="1" max={item.stock || 99} value={item.quantity} onChange={(event) => updateQuantity(item.productId, event.target.value)} /></label><button className="cart-item__remove" onClick={() => removeItem(item.productId)}>Remove</button></article>) : <div className="commerce-state"><p>Your cart is empty.</p><SmartLink className="commerce-link-button" href="/products">Explore products</SmartLink></div>}
        </div>
        {items.length ? <aside className="cart-summary"><p className="commerce-kicker">Order summary</p><div><span>Subtotal</span><strong>{formatPkr(subtotal)}</strong></div><div><span>Delivery</span><span>Calculated at checkout</span></div><hr /><div className="cart-summary__total"><span>Estimated total</span><strong>{formatPkr(subtotal)}</strong></div><SmartLink className="commerce-link-button" href="/checkout">Continue to checkout <span>↗</span></SmartLink><small>Prices and availability are verified securely by the ZVolta API when you place the order.</small></aside> : null}
      </section>
    </main>
  );
}

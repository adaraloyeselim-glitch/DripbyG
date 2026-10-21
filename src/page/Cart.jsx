import { useState } from "react";
import { Link } from "react-router-dom";

function Cart({ cart, updateQuantity, clearCart }) {
    const [checkedOut, setCheckedOut] = useState(false);

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = subtotal > 0 ? 15 : 0;
    const total = subtotal + shipping;

    const handleCheckout = () => {
        setCheckedOut(true);
        clearCart();
    };

    if (checkedOut) {
        return (
            <main className="cart-page cart-state">
                <div className="cart-state-icon" aria-hidden="true">✓</div>
                <p className="cart-eyebrow">Thank you</p>
                <h2>Order placed successfully</h2>
                <p>Your purchase is confirmed and is being processed.</p>
                <Link to="/shop" className="cart-action">Continue Shopping</Link>
            </main>
        );
    }

    if (cart.length === 0) {
        return (
            <main className="cart-page cart-state">
                <div className="cart-state-icon" aria-hidden="true">🛒</div>
                <p className="cart-eyebrow">Your bag</p>
                <h2>Your cart is empty</h2>
                <p>Looks like you haven't added anything to your cart yet.</p>
                <Link to="/shop" className="cart-action">Browse Products</Link>
            </main>
        );
    }

    return (
        <main className="cart-page">
            <header className="cart-header">
                <div>
                    <p className="cart-eyebrow">Your bag</p>
                    <h2>Shopping Cart</h2>
                </div>
                <p className="cart-item-count">
                    {cart.reduce((count, item) => count + item.quantity, 0)} items
                </p>
            </header>

            <div className="cart-layout">
                <section className="cart-items" aria-label="Cart items">
                    {cart.map((item) => (
                        <article key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} />
                            <div className="cart-item-details">
                                <h3>{item.name}</h3>
                                <p className="cart-unit-price">${item.price.toFixed(2)} each</p>
                                <div className="quantity-controls" aria-label={`Quantity for ${item.name}`}>
                                    <button
                                        type="button"
                                        aria-label={`Decrease ${item.name} quantity`}
                                        onClick={() => updateQuantity(item.id, -1)}
                                    >
                                        −
                                    </button>
                                    <span aria-live="polite">{item.quantity}</span>
                                    <button
                                        type="button"
                                        aria-label={`Increase ${item.name} quantity`}
                                        onClick={() => updateQuantity(item.id, 1)}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <p className="cart-item-total">
                                ${(item.price * item.quantity).toFixed(2)}
                            </p>
                        </article>
                    ))}
                    <Link to="/shop" className="cart-continue-link">Continue shopping</Link>
                </section>

                <aside className="cart-summary">
                    <h3>Order Summary</h3>
                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="summary-row">
                        <span>Shipping</span>
                        <span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className="summary-row total-row">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                    <button type="button" onClick={handleCheckout} className="cart-action checkout-btn">
                        Proceed to Checkout
                    </button>
                    <p className="cart-shipping-note">Shipping is included in your total.</p>
                </aside>
            </div>
        </main>
    );
}

export default Cart;

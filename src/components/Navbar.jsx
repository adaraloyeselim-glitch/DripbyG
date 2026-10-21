import { useState } from "react"
import { FiMenu, FiShoppingCart, FiX } from "react-icons/fi"
import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar({ cartCount = 0 }){
    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => setMenuOpen(false)

    return(
        <header className="site-header">
            <h2 className="site-brand">Drip by G</h2>
            <div className="mobile-header-actions">
                <Link
                    to="/cart"
                    className="mobile-cart-link"
                    aria-label={`Cart, ${cartCount} ${cartCount === 1 ? "item" : "items"}`}
                    onClick={closeMenu}
                >
                    <FiShoppingCart aria-hidden="true" />
                    {cartCount > 0 && <span className="nav-cart-count">{cartCount}</span>}
                </Link>
                <button
                    type="button"
                    className="menu-toggle"
                    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={menuOpen}
                    aria-controls="primary-navigation"
                    onClick={() => setMenuOpen((isOpen) => !isOpen)}
                >
                    {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
                </button>
            </div>
            <nav
                id="primary-navigation"
                className={`site-nav${menuOpen ? " is-open" : ""}`}
                aria-label="Main navigation"
            >
                <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
                <Link to="/shop" className="nav-link" onClick={closeMenu}>Shop</Link>
                <Link
                    to="/cart"
                    className="nav-link cart-nav-link"
                    aria-label={`Cart, ${cartCount} ${cartCount === 1 ? "item" : "items"}`}
                    onClick={closeMenu}
                >
                    Cart
                    {cartCount > 0 && <span className="nav-cart-count" aria-hidden="true">{cartCount}</span>}
                </Link>
                <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
            </nav>
        </header>
    )
}

export default Navbar
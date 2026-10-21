import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar(){
     return(
        <div>
        <header>
                <h2>Drip by G</h2>
                <nav>
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/shop" className="nav-link">Shop</Link>
                    <Link to="/cart" className="nav-link">Cart</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </nav>
            </header>
            </div>
     )
}

export default Navbar
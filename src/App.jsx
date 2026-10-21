import Homepage from "./page/Homepage";
import "./App.css"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar"
import Cart from "./page/Cart"
import Shop from "./page/Shop"
import {useState} from "react"
import Contact from "./page/Contact"
import Footer from "./components/Footer";


  function App() {

  // Store the cart items and provide a function to update them.
  const [cart, setCart] = useState([]);

  // Add one product to the cart, or increase its quantity if already there.
  const addToCart = (product) => {
    // Use the latest cart value so updates do not overwrite each other.
    setCart((prevCart) => {
      // Look for the same product in the current cart.
      const existing = prevCart.find((item) => item.id === product.id);
      // If it is already in the cart, make a new cart with its quantity increased.
      if (existing) {
        return prevCart.map((item) => 
        item.id === product.id ? {...item, quantity: item.quantity + 1}:item
      );
      }
      // Otherwise, add the product with a starting quantity of one.
      return [...prevCart , {...product, quantity:1}]
    })
  }

  // Change an item's quantity, removing it if the new quantity is zero.
  const updateQuantity = (id, delta) =>{
    // Create an updated list using the latest cart.
    setCart((prevCart) =>
    // Check each item and change only the one with the matching id.
    prevCart.map((item) =>{
      if (item.id === id) {
        // Add the requested change to the item's current quantity.
        const newQty = item.quantity + delta;
        // Keep the item if its quantity is positive; otherwise mark it for removal.
        return newQty > 0 ? {...item, quantity: newQty }: [];
      }
      // Leave other items unchanged.
      return item;
    })
  // Remove any items marked for deletion above.
  .filter(Boolean)
)
  };

// Empty the cart after a successful checkout.
const clearCart = () => setCart([]);

  return(
   
      <div>
    
    <Router>
      <Navbar />
       
  
       <div>
      <Routes>
        <Route path="/" element={<Homepage addToCart={addToCart} />}/>
        <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity} clearCart={clearCart}/> }/>
        <Route path="/shop" element={<Shop addToCart={addToCart}/>}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      </div>

      <Footer />
    </Router>
    </div>

  );
}

export default App

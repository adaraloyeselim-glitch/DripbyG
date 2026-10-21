import {useState} from "react"
import { FiCheck } from "react-icons/fi"
// Store the products that visitors can buy in the shop.
   const products = [
    { image : "/first.jpg",
      name : "AirMax 2025",
      price : 80,
      id : 1
    },
    {
      image : "/second.jpg",
      name : "AirMax pro",
      price : 230,
      id : 2
    },
     {
      image : "/third.JPG",
      name : "AirMax pro",
      price : 30,
      id : 3
    },
     {
      image : "/sixth.jpg",
      name : "AirMax pro",
      price : 230,
      id : 4
    },
     {
      image : "/seventh.webp",
      name : "AirMax pro",
      price : 230,
      id : 5
    },
    
     {
      image : "/fourth.jpg",
      name : "AirMax pro",
      price : 230,
      id : 6
    },
    
     {
      image : "/fifth.jpg",
      name : "AirMax pro",
      price : 230,
      id : 7
    },
     {
      image : "/eight.jpg",
      name : "AirMax pro",
      price : 33,
      id : 8
    },
    {
      image : "/eight.jpg",
      name : "AirMax pro",
      price : 230,
      id : 9
    },
    {
      image : "/fourth.jpg",
      name : "AirMax Reloaded",
      price : 230,
      id : 10
    },
    {
      image : "/fifth.jpg",
      name : "AirMax Dash",
      price : 23,
      id : 11
    },
    {
      image : "/eight.jpg",
      name : "AirMax pro",
      price : 230,
      id : 12
    },
    {
      image : "/fourth.jpg",
      name : "AirMax pro",
      price : 230,
      id : 13
    },{
      image : "/eight.jpg",
      name : "AirMax pro",
      price : 230,
      id : 14
    },{
      image : "/first.jpg",
      name : "AirMax pro",
      price : 230,
      id : 15
    },{
      image : "/second.jpg",
      name : "AirMax pro",
      price : 30,
      id : 16
    },{
      image : "/fifth.jpg",
      name : "AirMax pro",
      price : 230,
      id : 17
    },{
      image : "/third.JPG",
      name : "AirMax pro",
      price : 230,
      id : 18
    },{
      image : "/fourth.jpg",
      name : "AirMax pro",
      price : 230,
      id : 19
    },{
      image : "/eight.jpg",
      name : "AirMax pro",
      price : 230,
      id : 20
    },{
      image : "/second.jpg",
      name : "AirMax pro",
      price : 230,
      id : 22
    },{
      image : "/eight.jpg",
      name : "AirMax pro",
      price : 30,
      id : 21
    },{
      image : "/fifth.jpg",
      name : "AirMax pro",
      price : 230,
      id : 23
    },{
      image : "/eight.jpg",
      name : "AirMax pro",
      price : 230,
      id : 24
    },{
      image : "/eight.jpg",
      name : "AirMax pro",
      price : 230,
      id : 25
    },{
      image : "/eight.jpg",
      name : "AirMax pro",
      price : 230,
      id : 26
    },{
      image : "/eight.jpg",
      name : "AirMax pro",
      price : 230,
      id : 27
    },{
      image : "/eight.jpg",
      name : "AirMax pro",
      price : 230,
      id : 28
    },
  ]

    // Define the shop page and accept the function that adds products to the cart.
    function Shop ({addToCart}){
    // Store the product name to display in the temporary notification.
    const [notification , setNotification] = useState(null);

    // Add a selected product to the cart and briefly show a confirmation.
    const handleAddToCart = (product) =>{
        // Ask the parent app to add the selected product.
        addToCart(product);

        // Set the notification message to the product's name.
        setNotification(product.name);

        // Hide the notification after two and a half seconds.
        setTimeout(() =>{
            setNotification(null);
    
        } ,2500)
    }
    // Return the shop content inside one wrapper, including its notification and product list.
    return(
        <main className="shop-page">
            {notification && (
            <div className="shop-notification" role="status" aria-live="polite">
              <FiCheck aria-hidden="true" />
              <span>Added {notification} to your cart</span>
                </div>
            )}

         <h2 className="shop-title">Explore Products</h2>
         <div className="shop-grid">
        {products.map((product) =>(
          <article key={product.id} className="shop-card">
            <img className="shop-image" src={product.image} alt={product.name} loading="lazy" />
            <div className="shop-product-details">
                   <h3>{product.name}</h3>
                   <p>${product.price.toFixed(2)}</p>
               <button type="button" onClick={() => handleAddToCart(product)} className="shop-add-button">Add to cart</button>
                </div>
          </article>
        ))}

       </div>
        </main>
    )
}


// Make the shop page available to the router.
export default Shop
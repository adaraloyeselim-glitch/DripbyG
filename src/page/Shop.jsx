import {Link} from "react-router-dom"

import {useState} from "react"
// Store the products that visitors can buy in the shop.
   const products = [
    { image : "first.jpg",
      name : "AirMax 2025",
      price : 80,
      id : 1
    },
    {
      image : "second.jpg",
      name : "AirMax pro",
      price : 230,
      id : 2
    },
     {
      image : "third.jpg",
      name : "AirMax pro",
      price : 30,
      id : 3
    },
     {
      image : "sixth.jpg",
      name : "AirMax pro",
      price : 230,
      id : 4
    },
     {
      image : "seventh.jpg",
      name : "AirMax pro",
      price : 230,
      id : 5
    },
    
     {
      image : "fourth.jpg",
      name : "AirMax pro",
      price : 230,
      id : 6
    },
    
     {
      image : "fifth.jpg",
      name : "AirMax pro",
      price : 230,
      id : 7
    },
     {
      image : "eight.jpg",
      name : "AirMax pro",
      price : 33,
      id : 8
    },
    {
      image : "eigth.jpg",
      name : "AirMax pro",
      price : 230,
      id : 9
    },
    {
      image : "fourth.jpg",
      name : "AirMax Reloaded",
      price : 230,
      id : 10
    },
    {
      image : "fifth.jpg",
      name : "AirMax Dash",
      price : 23,
      id : 11
    },
    {
      image : "eight.jpg",
      name : "AirMax pro",
      price : 230,
      id : 12
    },
    {
      image : "fourth.jpg",
      name : "AirMax pro",
      price : 230,
      id : 13
    },{
      image : "eight.jpg",
      name : "AirMax pro",
      price : 230,
      id : 14
    },{
      image : "first.jpg",
      name : "AirMax pro",
      price : 230,
      id : 15
    },{
      image : "second.jpg",
      name : "AirMax pro",
      price : 30,
      id : 16
    },{
      image : "fifth.jpg",
      name : "AirMax pro",
      price : 230,
      id : 17
    },{
      image : "third.jpg",
      name : "AirMax pro",
      price : 230,
      id : 18
    },{
      image : "fourth.jpg",
      name : "AirMax pro",
      price : 230,
      id : 19
    },{
      image : "eight.jpg",
      name : "AirMax pro",
      price : 230,
      id : 20
    },{
      image : "second.jpg",
      name : "AirMax pro",
      price : 230,
      id : 22
    },{
      image : "eight.jpg",
      name : "AirMax pro",
      price : 30,
      id : 21
    },{
      image : "fifth.jpg",
      name : "AirMax pro",
      price : 230,
      id : 23
    },{
      image : "eight.jpg",
      name : "AirMax pro",
      price : 230,
      id : 24
    },{
      image : "eight.jpg",
      name : "AirMax pro",
      price : 230,
      id : 25
    },{
      image : "eight.jpg",
      name : "AirMax pro",
      price : 230,
      id : 26
    },{
      image : "eight.jpg",
      name : "AirMax pro",
      price : 230,
      id : 27
    },{
      image : "eight.jpg",
      name : "AirMax pro",
      price : 230,
      id : 28
    },
  ]

    // Define the shop page and accept the function that adds products to the cart.
    function Shop ({addToCart}){
    // Store the product name to display in the temporary notification.
    const [notification , setNotification] = useState([]);

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
        <div>
            {/* Show this message only while a product name is set. */}
            {notification && (
                <div className="shop-cont">
                    <span>Added {notification} to cart!</span>
                </div>
            )}
        
       {/* Give the product list a heading. */}
       <h2>Explore Products</h2> 
       <div className="box-cont">
        {products.map((product) =>(
            <div key={product.id} className="box">
                <img src={product.image} alt="" />
                  <div className="text-cont">
                   <span className="product-category">${product.price}</span>
                   {/* Show the product name. */}
                   <h3>{product.name}</h3>
                   {/* Show the price with two digits after the decimal point. */}
                   <p>${product.price.toFixed(2)}</p>

                   {/* Add this product when the button is clicked. */}
                   <div><button onClick={() => handleAddToCart(product)} className="add-btn">add to cart</button></div>
                </div>
            </div>
        ))}

       </div>
       
        </div>
    )
}


// Make the shop page available to the router.
export default Shop
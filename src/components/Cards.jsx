import {useState} from "react";
import Shop from "/src/page/Shop"

function Cards({image , name , price, cart, setCart }){
   

    return(
        <div>
            
       <div className="box">
        <img src={image} />
        <h3>{name}</h3>
        <p>{price}</p>
        <div className="add-btn"><button onClick={() => setCart([...cart, product])}>Add to Cart</button></div>
       </div>
       </div>
    )
}

export default Cards
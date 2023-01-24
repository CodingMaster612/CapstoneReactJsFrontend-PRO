import axios from 'axios';
import { useState, useEffect } from "react";

import '../../css/view-cartBox.css'

function CartPurchase() {
    
  const [user, setUser] = useState({})

    const cartId = localStorage.getItem("Credentials")
    const handleClick = () => {
        axios.post(`http://localhost:8081/user/purchase/${cartId}`, user)
            .then((response) => {
                console.log(response);
                alert("Project successfully generated Cookie")
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
    <div>
        //make a use effect to get a cartId set the cart id to the cart
      
        <div key={user.id}>
          <button className="btn-name"onClick={() => handleClick(user.id)}>Buy</button>
          
        </div>
      
      
    </div>
// console.log("carts")


    )

            
}



    
          
        
            


  

export default CartPurchase
import axios from 'axios';
import { useState, useEffect } from "react";

import '../../css/view-cartBox.css'

function CartPurchase({userId}) {
    
  const [user, setUser] = useState([])

    
    const handleClick = (cartId) => {
        axios.post('http://localhost:8081/user/purchaseCart', { cartId: cartId, userId: userId }, user)
            .then((response) => {
                console.log(response);
                localStorage.setItem("Credentials", JSON.stringify(user))
                alert("Project successfully generated Cookie")
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
    <div>
        
      
        <div key={user.id}>
          <button className="btn-name"onClick={() => handleClick(user.id)}>Buy</button>
          
        </div>
      
      
    </div>
// console.log("carts")


    )

            
}



    
          
        
            


  

export default CartPurchase
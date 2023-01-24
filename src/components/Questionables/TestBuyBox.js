import axios from 'axios';
import { useState, useEffect } from "react";

import '../../css/view-cartBox.css'

function TestBuyBox({ userId, items= []}) {
    
    

    
    const handleClick = (itemId) => {
        axios.post('http://localhost:8081/user/purchaseTest', { userId: userId, itemId: itemId })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
    <div>
        
      {items.map((item) => (
        <div key={item.id}>
          <button className="btn"onClick={() => handleClick(item.id)}>Buy</button>
          
        </div>
      ))}
      
    </div>



    )

            
}



    
          
        
            


  

export default TestBuyBox
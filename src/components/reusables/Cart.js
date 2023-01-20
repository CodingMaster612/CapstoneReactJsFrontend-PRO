import React, {useState} from 'react'
import axios from 'axios'
import '../../css/Cart.css'



function Cart() {
    const [cart, setCart] = useState({
      currency: "",
      amount: ""
  
     })
  
  
     const changeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        const tempCart = { ...cart }
        tempCart[name] = value
        setCart(tempCart)
     }
  
     const submitHandler = () => {
  
  
  
        axios.post("http://localhost:8081/cart/addToCart", cart)
           .then((response) => {
  
  
  
              localStorage.setItem("Cart-Credentials", JSON.stringify(cart))
  
  
              console.log(response.data)
  
              alert("Cart created successfully")
           }).catch((e) => {
              console.log(e)
           })
  
     }
    
    
    
    
    
    
    
    
    return (

        
<div className="input-wrapper">
         <div className="input-group">
            
            <div className="currency-input">
               <input placeholder="Currency: " type="text" onChange={changeHandler} name="currency" value={cart.currency} />
            </div>
            <div className="amount-input">
               <input placeholder="Amount: " type="text" onChange={changeHandler} name="amount" value={cart.amount} />
            </div>
            
            <div className="btn-position">
               <button className="btn-size" onClick={submitHandler}>Submit</button>
            </div>
         </div>
      </div>
  
    )
}
export default Cart
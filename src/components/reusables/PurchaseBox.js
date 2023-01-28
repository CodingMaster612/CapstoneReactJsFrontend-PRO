import React, {useState} from 'react'
import '../../css/view-cartBox.css'
import Button from "../../components/reusables/Button"
import axios from 'axios'
function PurchaseBox(props) {
    
    const [cart, setCart] = useState({})

    
    
    const onClicking = (event) => {
        axios.get(`http://localhost:8081/cart/getCartById/${event.target.id}`)
            .then((response) => {
                setCart(response.data)
                localStorage.setItem("Buy-Currency", response.data.id)
                alert("Successfully retrieved from  Cart item from Database: ")
                console.log(event.target.id)
            }).catch((e) => {
                console.log(e)
            })


    }
    
    const onSubmitting = (event) => {
        const id = localStorage.getItem("Buy-Currency")
        axios.post(`http://localhost:8081/cart/CurrencyTransaction/${id}`, cart)
            .then((response) => {
                setCart(response.data)

                alert("Cart Items Successfully added to User")
            }).catch((e) => {
                console.log(e)
            })


    }

    const onClicks = (event) => {
        const id = localStorage.getItem("Buy-Currency")
        axios.delete(`http://localhost:8081/cart/deleteCartItemsById/${id}`, cart)
            .then((response) => {
                setCart(response.data)

                alert("Cart Item Successfully deleted")
            }).catch((e) => {
                console.log(e)
            })


    }
    
    
    return (
        <div>


            <div className='currency-box'>
                {/* <div className="box"> */}
                    <div className="text"><h5>Amount:  {props.cart.amount}</h5></div>
                    <div className='text'><h6>Currency: {props.cart.currency}</h6></div>
                    <div><img className='img' src={props.cart.image}></img></div>
                    <Button id={props.cart.id} className="result-button" onClick={onClicking} text={"Get Product"} />
                    <Button id={props.cart.id} className="result-button" onClick={onSubmitting} text={`Buy Product: ID: ${props.cart.id}`} />
                    <Button id={props.cart.id} className="result-button-2" onClick={onClicks} text={"Delete Item"} />
                </div>

            </div>

        // </div>

    )
}

export default PurchaseBox
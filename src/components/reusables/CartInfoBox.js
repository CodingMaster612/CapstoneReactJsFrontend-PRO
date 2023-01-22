import React from 'react'
import '../../css/view-cartBox.css'

function CartInfoBox(props) {
    return (
        <div className='cart-box'>
            
            <div className="text-Amount"><h5>Amount:  {props.cart.amount}</h5></div>
            <div className="text-Currency"><h6>Currency:  {props.cart.currency}</h6></div>
            
            
            
        </div>
    )
}

export default CartInfoBox
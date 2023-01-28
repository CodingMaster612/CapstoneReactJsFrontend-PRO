import React from 'react'
// import BuyCurrencyBox from '../../components/reusables/BuyBox'
import '../../css/view-cartBox.css'

function PurchaseBox(props) {
    return (
        <div>


            <div className='currency-box'>
                
                <div className="text"><h5>Amount:  {props.cart.amount}</h5></div>
                <div className='text'><h6>Currency: {props.cart.currency}</h6></div>
           <div><img className='img'  src={props.cart.image}></img></div>


                </div>

            </div>
       
    )
}

export default PurchaseBox
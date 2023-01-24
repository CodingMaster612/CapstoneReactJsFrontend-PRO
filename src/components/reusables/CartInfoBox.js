import React from 'react'
// import BuyCurrencyBox from '../../components/reusables/BuyBox'
import '../../css/view-cartBox.css'

function CartInfoBox(props) {
    return (
        <div>


            <div className='currency-box'>
                <div key= {props.cart.id}>
                <div className="text"><h5>Amount:  {props.cart.amount}</h5></div>
                <div className="text"><h6>Currency:  {props.cart.currency}</h6></div>
                {/* <BuyCurrencyBox/> */}
                </div>

            </div>
        </div>
    )
}

export default CartInfoBox
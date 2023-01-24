import React from 'react'
// import BuyCurrencyBox from '../../components/reusables/BuyBox'
import '../../css/view-cartBox.css'
import CartPurchase from '../Questionables/CartPurchase'

function PurchaseBox(props) {
    return (
        <div>


            <div className='currency-box'>
                <div key= {props.user.id}>
                <div className="text"><h5>boughtCurrency:  {props.user.boughtCurrency}</h5></div>
                {/* <BuyCurrencyBox/> */}
                <CartPurchase/>
                </div>

            </div>
        </div>
    )
}

export default PurchaseBox
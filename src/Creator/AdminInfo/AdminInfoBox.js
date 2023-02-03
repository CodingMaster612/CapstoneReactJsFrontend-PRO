import React from 'react'
import '../AdminInfo/AdminInfo.css'
import StylishRectangle from '../StyleishRect/StylishRectangle'

function AdminInfoBox(props) {
    return (
        <div>




            <div className="cart-wrapper">

                <div><img className="CoinImage" src={props.cart.image}></img></div>

                <div className="Amount-1"><h1> Amount: {props.cart.amount}</h1></div>
                <div className="Currency-1"><h2>Currency: {props.cart.currency}</h2></div>
            </div>

        </div>





    )
}

export default AdminInfoBox
//add key= cart.id
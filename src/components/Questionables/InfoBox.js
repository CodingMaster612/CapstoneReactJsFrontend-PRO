import React from 'react'
import '../../css/view-cartBox.css'

function InfoBox(props) {
    return (
        <div>


            <div className='currency-box'>
                <div key= {props.cart.id}>
                <div className="text"><h5>Amount:  {props.cart.amount}</h5></div>
                <div className="text"><h6>Currency:  {props.cart.currency}</h6></div>
                <button className="btn" key={props.cart.id}>Buy</button> 
                </div>

            </div>
        </div>
    )
}

export default InfoBox
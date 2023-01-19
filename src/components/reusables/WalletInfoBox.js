import React from 'react'
import "../../css/view-currecyBox.css"


function WalletInfoBox(props) {
    return (
        <div className=' flex-row currency-box'>
            
            <div><h5>COST:</h5>{props.currency.cost}</div>
            <div><h6>CRYPTO</h6>{props.currency.crypto}</div>
            <div><h7>PAYMENT</h7>{props.currency.payment}</div>
            
            <div className="currency-img" ><img src={props.currency.image} /></div>
            
        </div>
    )
}

export default WalletInfoBox

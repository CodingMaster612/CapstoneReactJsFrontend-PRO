import React from 'react'
import "../../css/view-currecyBox.css"


function WalletInfoBox(props) {
    return (
        <div className=' flex-row currency-box'>
            <div>{props.currency.cost}</div>
            <div>{props.currency.crypto}</div>
            <div>{props.currency.payment}</div>
            
            <div className="currency-img" ><img src={props.currency.image} /></div>
            
        </div>
    )
}

export default WalletInfoBox

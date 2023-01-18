import React from 'react'
import "../../css/view-currecyBox.css"


function WalletInfoBox(props) {
    return (
        <div className='currency-box'>
            <div>{props.currency.cost}</div>
            <div>{props.currency.crypto}</div>
            <div>{props.currency.payment}</div>
            
            <div><img src={props.currency.image} /></div>
            
        </div>
    )
}

export default WalletInfoBox

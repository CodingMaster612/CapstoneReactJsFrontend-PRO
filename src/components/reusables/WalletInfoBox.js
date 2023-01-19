import React from 'react'
import "../../css/view-currecyBox.css"


function WalletInfoBox(props) {
    return (
        <div className='currency-box'>
            
            <div className="text"><h5>COST:{props.currency.cost}</h5></div>
            <div className="text"><h6>CRYPTO:{props.currency.crypto}</h6></div>
            <div className="text"><h7>PAYMENT:{props.currency.payment}</h7></div>
            
            <div className="currency-img" ><img src={props.currency.image} /></div>
            
        </div>
    )
}

export default WalletInfoBox

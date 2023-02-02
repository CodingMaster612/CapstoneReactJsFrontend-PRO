import React from 'react'
import '../AdminInfo/AdminInfo.css'
function AdminInfoBox(props) {
    return (
        <div>
            <div className="Admin-Info-Wrapper">
                <div className="" >{props.cart.Bought_id}</div>
                <div className=""><img src={props.cart.image}></img></div>
                <div className="">{props.cart.amount}</div>
                <div className="">{props.cart.currency}</div>
            </div>
        </div>
    )
}

export default AdminInfoBox
//add key= cart.id
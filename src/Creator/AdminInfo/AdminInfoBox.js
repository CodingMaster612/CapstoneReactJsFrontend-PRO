import React from 'react'
import '../AdminInfo/AdminInfo.css'
function AdminInfoBox(props) {
    return (
        <div>
            <div className="Admin-Info-Wrapper">
                <div className="Bought-Style" >{props.cart.Bought_id}</div>
                <div className="Img-Style"><img src={props.cart.image}></img></div>
                <div className="Amount-Style"><h1 className="Amount-h1"> Amount: {props.cart.amount}</h1></div>
                <div className="Currency-Style"><h2 className="Currency-h2">Currency:{props.cart.currency}</h2></div>
            </div>
        </div>
    )
}

export default AdminInfoBox
//add key= cart.id
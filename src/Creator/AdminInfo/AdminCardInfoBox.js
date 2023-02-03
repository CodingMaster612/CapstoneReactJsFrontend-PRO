import React from 'react'
import '../AdminInfo/AdminCardInfo.css'
function AdminCardInfoBox(props) {
    return (
        <div>






            <div><img className="Card-Image" src={props.card.image}></img></div>

            <div className=" card-holder"><h1> Holder: {props.card.holder}</h1></div>
            <div className="card-name"><h2>Name: {props.card.name}</h2></div>


        </div>
    )
}

export default AdminCardInfoBox
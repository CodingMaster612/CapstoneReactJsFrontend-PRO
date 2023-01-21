import axios from 'axios'
import React, { useState } from 'react'
import '../../css/BuyBox.css'

function BuyCurrencyBox() {


    const [user, setUser] = useState({

    })


    const changeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        const tempUser = { ...user }
        tempUser[name] = value
        setUser(tempUser)
    }

    const submitHandler = (cartId, userId) => {

        axios.post(`http://localhost:8081/user/purchase/${cartId}/${userId}`, user)({
            cartId: cartId,
            userId: userId,

        })
            .then((response) => {
                console.log(response.data)

            }).catch((e) => {
                console.log(e.response)
            })

    }

    return (
       

            <div className="btn-position-1">
                <button className="btn" onClick={submitHandler}>Buy</button>
            </div>
        
    )
}




export default BuyCurrencyBox
import React, { useState } from 'react'
import axios from 'axios'
import "../../css/CreditCard.css"
import Button from "../../components/reusables/Button"
function WalletInfoBox(props) {
    const [card, setCard] = useState({})
    const [cart, setCart] = useState({})

    const onClicky = (event) => {

        axios.get(`http://localhost:8081/card/getCardById/${event.target.id}`)
            .then((response) => {
                setCard(response.data)
                localStorage.setItem("Cred", response.data.id)
                alert("Card Successfully retrieved from Database: ")
                console.log(event.target.id)
            }).catch((e) => {
                console.log(e)
            })


    }
//get teh id then buy with post

const submitHandler = (event) => {
 const id = localStorage.getItem("Cred")
    axios.post(`http://localhost:8081/card/Transactions/${id}`, card)
        .then((response) => {
            setCard(response.data)
            
            alert("Card Successfully added to User")
        }).catch((e) => {
            console.log(e)
        })


}

const handleClick = (event) => {
       
   const currency = prompt("Enter The Currency You want to Buy")
   axios.post(`http://localhost:8081/cart/buyWithCreditCard/${currency}`, cart)
        .then((response) => {
            setCart(response.data)
            
            alert("Cart Successfully added currency")
        }).catch((e) => {
            console.log(e)
        })

   
   
   
   
   //put crditcard forign key registerd to cart to use credit card to buy currency

   
   }


    return (
        <section>
            <div className="container">
                <div className="cardWrapper">
                    <div className="card">
                        <div className="bg">
                            <img src={props.cards.image} alt=""/>
                        </div>
                        <div className="card__name">
                            <p className="" >{props.cards.name}</p>
                        </div>
                        <div className="card__number">
                            <div className="card__number--stars">{props.cards.firstNumbers}</div>
                            <div className="card__number--stars">{props.cards.secondNumbers}</div>
                            <div className="card__number--stars">{props.cards.thirdNumbers}</div>
                            <div>{props.cards.fourthNumbers}</div>
                            <div className="card_holder"><p>{props.cards.holder}</p></div>
                        </div>
                        <div className="highlight"></div>
                    </div>
                </div>
                <Button id={props.cards.id} className="result-button" onClick={onClicky} text={"Get Card Id"}/>
                <Button id={props.cards.id} className="result-button" onClick={submitHandler} text={"Add Card"}/>
                <Button id={props.cards.id} className="result-button" onClick={handleClick} text={"Transaction"}/>

                
            </div>
        </section>



    )
}

export default WalletInfoBox

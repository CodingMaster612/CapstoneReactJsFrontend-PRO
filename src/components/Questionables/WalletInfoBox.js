import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "../../css/CreditCard.css"
import Button from "../../components/reusables/Button"
import PurchaseBox from '../reusables/PurchaseBox'
function WalletInfoBox(props) {
    const [card, setCard] = useState({})
    const [cart, setCart] = useState([])

    const onClicky = (event) => {
        //add useEffect to fix not registering issue
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
        //view all currency in cart on page with a buy button attached to it on click
        
        
            axios.get(`http://localhost:8081/cart/viewAllCart`)
                .then(function (response) {
                    setCart(response.data)
                    alert("Successfully rendered Cart")
                })
                .catch((e) => {
                    console.log(e)
                })
         




        //put crditcard forign key registerd to cart to use credit card to buy currency

        //make a add to cart page with display of currency and crypto when transaction is clicked it goes to another page for add to cart and has the current prices of currency and has a buy button registerd to teh props 


    }


    return (
        <section>
            <div className="container">
                <div className="cardWrapper">
                    <div className="card">
                        <div className="bg">
                            <img src={props.cards.image} alt="" />
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
                <Button id={props.cards.id} className="result-button" onClick={onClicky} text={"Get Card Id"} />
                <Button id={props.cards.id} className="result-button" onClick={submitHandler} text={"Add Card"} />
                <Button id={props.cards.id} className="result-button" onClick={handleClick} text={"Transaction"} />


            </div>
            <div>
    {cart.map((cart) => {
       return <PurchaseBox cart = {cart} />
    })}
    </div>
            <div>
                
            </div>
        </section>




    )
 
    
}



export default WalletInfoBox

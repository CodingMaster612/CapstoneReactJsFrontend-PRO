import React, { useState } from 'react'
import axios from 'axios'
import "../../css/CreditCard.css"
import Button from "../../components/reusables/Button"
function WalletInfoBox(props) {
    const [card, setCard] = useState({

    })

    const onClicky = (event) => {

        axios.get(`http://localhost:8081/card/getCardById/${event.target.id}`)
            .then((response) => {
                setCard(response.data)
                localStorage.setItem("Cred", response.data.id)
                alert("you are complete")
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
            
            alert("you are completed teh test")
        }).catch((e) => {
            console.log(e)
        })


}


    return (
        <section>
            <div className="container">
                <div className="cardWrapper">
                    <div className="card">
                        <div className="bg">
                            <img src={props.cards.image} />
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
                <Button id={props.cards.id} className="result-button" onClick={onClicky} />
                <Button id={props.cards.id} className="result-button-2" onClick={submitHandler} />

                
            </div>
        </section>



    )
}

export default WalletInfoBox

import React, {useState} from 'react'
import axios from 'axios'
import "../../css/CreditCard.css"
import Button from "../../components/reusables/Button"
function WalletInfoBox(props) {
    const [card, setCard] = useState({})
    
    const onClicky = (event) => {

        axios.post(`http://localhost:8081/card/transactionById/${event.target.id}`)
        .then((response) => {
        
        console.log("you are complete")
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
                            <p className="clickable-text" >{props.cards.name}</p>
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

            </div>
        </section>
        
    )
}

export default WalletInfoBox

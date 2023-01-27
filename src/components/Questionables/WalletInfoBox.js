import React from 'react'
import "../../css/CreditCard.css"


function WalletInfoBox(props) {
    
    
    
    
    return (
        <section>
            <div className="container">
                <div className="cardWrapper">
                    <div className="card">
                        <div className="bg">
                            {/* <img src="https://www.logo.wine/a/logo/Mastercard/Mastercard-Logo.wine.svg" alt="" /> */}
                            <img src={props.cards.image} />
                        </div>
                        <div className="card__name">
                            <p>{props.cards.name}</p>
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
            </div>
        </section>
    )
}

export default WalletInfoBox

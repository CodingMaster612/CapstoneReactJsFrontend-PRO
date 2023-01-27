import WalletInfoBox from './WalletInfoBox'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import LoadingSpinner from '../reusables/Loadingspinner'

function ViewCreditCards() {

    const [cards, setCards] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        axios.get('http://localhost:8081/card/viewAllCreditCards')
            .then((response) => {
                setTimeout(() => {
                    setCards(response.data)
                    setIsLoading(false)
                }, 3000)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])


    const renderContent = () => {

        if (isLoading) {
            return (
                <LoadingSpinner />
            )
        } else {
            return (
                cards.map((cards) => {
                    return (

                        <WalletInfoBox cards={cards} />
                       
                        

                    )
                })
            )
        }
    }

    return (

        <div>
            {renderContent()}
        </div>

    )
}

{/* */ }
export default ViewCreditCards
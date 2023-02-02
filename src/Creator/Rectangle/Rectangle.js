import '../Rectangle/Rectangle.css'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import LoadingSpinner from '../../components/reusables/Loadingspinner'
import AdminInfoBox from '../AdminInfo/AdminInfoBox'
const Rectangle = (props) => {

    const [cart, setCart] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const email = localStorage.getItem('Credentials')
        axios.get(`http://localhost:8081/cart/viewAllOwned/${email}`)
            .then((response) => {
                setTimeout(() => {
                    setCart(response.data)
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
                cart.map((carts) => {
                    return (

                        <AdminInfoBox cart={carts} />
                    
                        

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
    
    
    
  
    


export default Rectangle;



//1. Create a Rectangle 2. make props in rectangle to show information inside teh rectangle show credit card owners and currency owners
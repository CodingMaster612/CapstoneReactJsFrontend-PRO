import '../Rectangle/Rectangle.css'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import LoadingSpinner from '../../components/reusables/Loadingspinner'
import AdminInfoBox from '../AdminInfo/AdminInfoBox'
import MoveableChart from '../Graph/MovableChart'
import  AdminCardInfoBox from '../AdminInfo/AdminCardInfoBox'
import Sidebar from '../SideBar/Side'
import AdminLogo from '../../img/AdminLogo.png'



const Rectangle = (props) => {
    const [cart, setCart] = useState([])
    const [card, setCard] = useState([])
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


    useEffect(() => {
        const email = localStorage.getItem('Credentials')
        axios.get(`http://localhost:8081/card/viewOwnedCredit/${email}`)
            .then((response) => {
                setTimeout(() => {
                    setCard(response.data)
                    setIsLoading(false)
                }, 3000)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])


    
    
    
    
      const renderContentCard = () =>{
        return(
            card.map((cards) => {
                return(
                    <AdminCardInfoBox card= {cards}/>
                )
            })
        )
        
    }

    const renderGraphContent = () =>{
        return(
            <div className="MovableChart">
            <MoveableChart/>
            </div>
        )
    }

    
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
            {renderContentCard()}
            {renderGraphContent()}
            <div>
                <img  className=" Admin-image "src={AdminLogo} />
            </div>
            
            
         
        </div>

    )
}

{/* */ }
    
    
    
  
    


export default Rectangle;



//1. Create a Rectangle 2. make props in rectangle to show information inside teh rectangle show credit card owners and currency owners
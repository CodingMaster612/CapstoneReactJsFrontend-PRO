import CartInfoBox from "../../components/reusables/CartInfoBox"
import axios from 'axios'
import React, { useState , useEffect} from 'react'
import LoadingSpinner from '../reusables/Loadingspinner'

function ViewAllCart() {

  const [cart, setCart] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

      axios.get('http://localhost:8081/cart/viewAllCart')
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
              cart.map((cart) => {
                  return (
                    
                      <CartInfoBox cart={cart} />
                      
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
export default ViewAllCart
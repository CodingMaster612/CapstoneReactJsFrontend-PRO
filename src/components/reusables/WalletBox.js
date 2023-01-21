import WalletInfoBox from './WalletInfoBox'
import axios from 'axios'
import React, { useState , useEffect} from 'react'
import LoadingSpinner from '../reusables/Loadingspinner'

function ViewCurrency() {

  const [currency, setCurrency] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

      axios.get('http://localhost:8081/currency/viewAllCurrency')
          .then((response) => {
              setTimeout(() => {
                  setCurrency(response.data)
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
              currency.map((currency) => {
                  return (
                    
                      <WalletInfoBox currency={currency} />
                      
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
export default ViewCurrency
import axios from 'axios'
import '../../css/BuyBox.css'

function BuyCurrencyBox() {

    






    const submitHandler = (cartId) => {

        axios.post(`http://localhost:8081/user/purchase/${cartId}`, )({



        })
            .then((response) => {
                console.log(response.data)

            }).catch((e) => {
                console.log(e.response)
            })

    }

    
    return (
        
                
                    <button className="btn" onClick={submitHandler} />
                
        
    )
  }
  











export default BuyCurrencyBox
import React from 'react'
import CartPurchase from '../Questionables/CartPurchase'
export default function Buy() {
    return (
        <div>
            <header style={HeaderStyle}>
<CartPurchase/>
            </header>
        </div>
        
    )
}
const HeaderStyle = {
    width: "100%",
    height: "100vh",
    // background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "white"


}
import React from 'react'
import BuyCurrencyBox from '../reusables/BuyBox'

export default function Buy() {
    return (
        <div>
            <header style={HeaderStyle}>
            <BuyCurrencyBox/>

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
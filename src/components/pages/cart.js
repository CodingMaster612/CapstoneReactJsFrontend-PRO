import React from 'react'
import Cart from '../../components/reusables/Cart'
import BuyCurrencyBox from '../reusables/BuyBox'
import ViewAllCart from '../reusables/CartBox'

export default function cart() {
    return (
        <div>
            <header style={HeaderStyle}>
                <Cart />
                <ViewAllCart />

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
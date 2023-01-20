import React from 'react'
import BankHomeBox from '../../components/reusables/BankHomeBox'

import ImageSlider from "../../components/reusables/ImageSlider"

export default function cart() {
    const slides = [
        { url: "https://www.umassmed.edu/globalassets/human-resources/documents/immigration/images/bank-logo.jpg", title: "beach" },
        { url: "https://thefinancialbrand.com/wp-content/uploads/2012/08/community_southern_bank_billboard.jpg", title: "boat" },
        { url: "https://www.rd.com/wp-content/uploads/2022/08/bitcoin-cryptocurrency-GettyImages-1336750482.jpg", title: "forest" },
        { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/P103-2000Yen-%282000%29_front.jpg/640px-P103-2000Yen-%282000%29_front.jpg", title: "city" },
        
    ];
    const containerStyles = {
        width: "500px",
        height: "280px",
        margin: "0 auto",
        position: "relative",
        top: "200px"
    };

    return (
        <div>

            <header style={HeaderStyle}>
                <div style={containerStyles}>
                    <ImageSlider slides={slides} />
                </div>
                <BankHomeBox />
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
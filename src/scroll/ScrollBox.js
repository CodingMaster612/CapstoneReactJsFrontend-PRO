import { useRef } from "react";
import '../scroll/Scroll.css';
import pillow from '../img/pillowLogo.png'
import pillowLogo from '/Users/timliner/Desktop/Capstone-PRO/capstone/src/img/PIllow (2).png'
import ImageComponent from '../components/reusables/ImageComponent'
import SideBar from '../components/reusables/SideBar'
import SearchBar from '../components/reusables/SearchBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-solid-svg-icons'
import { faAmazon, faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'


import ScrollToTop from "../scroll/ScrollToTop";

function ScrollBox() {
    const services = useRef(null);
    const blog = useRef(null);
    const contact = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        });
    };

    return (
        <div className="App">
            <div className="hero">

                <div className="text">

                    {/* <h1>:Currency Converter:</h1> */}


                </div>



                <img src="https://cdn11.bigcommerce.com/s-v79u0/images/stencil/1280x1280/products/1133/1939/57046_Obv_ike__93249.1610578085.1280.1280__51957.1661486352.jpg?c=2" />
                <div className="img-2"><img src="https://media.istockphoto.com/id/951412868/photo/bitcoin-on-white-background.jpg?s=612x612&w=0&k=20&c=h6bSw-lkIDHle3Qz_6RXvluUttHEmsHsblMmwDra9sA=" /></div>
                <div className="img-3"><img src="https://static.vecteezy.com/system/resources/previews/007/153/309/original/gold-coin-of-chinese-yuan-yen-concept-of-internet-currency-vector.jpg" /></div>
            </div>
            <div ref={services} className="services">
                <div>
                    <div className="images">
                        <img src="https://cdn.britannica.com/79/82279-050-BDDED0BD/banknote-Japan.jpg" alt="Image 1" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdL-W-gfduFKcymK1wTB2OSahWUj8E0dfYZaR5QBXCUF56WQArAzbRcG6L4VmXFax1EQ8&usqp=CAU" alt="Image 2" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/US_one_dollar_bill%2C_obverse%2C_series_2009.jpg/640px-US_one_dollar_bill%2C_obverse%2C_series_2009.jpg" alt="Image 3" />
                    </div>
                    <div>
                        <div className="text-side-by-side">
                            <div className="text-box">PlaceHolder</div>
                            <div className="text-box">PlaceHolder</div>
                            <div className="text-box">PlaceHolder</div>
                        </div>
                    </div>
                    <div className="images">
                        <img src="https://academy-public.coinmarketcap.com/srd-optimized-uploads/ce3df4b2e6014929adc9c0c99be5c5fc.jpg" alt="Image 1" />
                        <img src="https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/20190227151811/money-foreigncurrency-cash_SOMN18112_624674912_is_1560x880.jpg" alt="Image 2" />
                        <img src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1653709480.jpg" alt="Image 3" />
                    </div>
                    <div className="text-side-by-side">
                            <div className="text-box">PlaceHolder</div>
                            <div className="text-box">PlaceHolder</div>
                            <div className="text-box">PlaceHolder</div>
                        </div>

                    {/* <SearchBar />
                    <img src={pillow} className="image-1" /> */}

                </div>

            </div>

            {/* <div className="blog">
              
            </div> */}
            <div className="contact">
                <footer className="footer-1">
                    <p className="footer-text">

                    </p>

                    <div className="helpful-links-tag">
                        <h1>Helpful Links_____________________________</h1>
                    </div>
                    <div className="helpful-links-wrapper">
                        <div className="column-1">

                            <a href="/"></a>
                            <a href="/"></a>
                            <a href="/"></a>
                            <a href="/"></a>
                            <a href="/"></a>
                            <a href="/"></a>

                        </div>


                    </div>
                    <div>
                        <div className="helpful-links-wrapper-2">
                            <div className="column-2">

                                <a href="/news">News</a>
                                <a href="/Bank"> Bank</a>


                            </div>
                        </div>

                    </div>
                    <div className="helpful-links-wrapper-3">
                        <div className="column-3">

                            <FontAwesomeIcon icon={faGithub} className="github-icon" />
                            <a href="https://github.com/CodingMaster612/CapstoneReactJsFrontend-PRO/tree/master">GitHub</a>
                            <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
                            <a href="https://www.linkedin.com/in/timothyliner">Linkedin</a>


                        </div>
                    </div>
                    <div>
                        <img src={pillowLogo} className="image-2" />

                    </div>
                </footer>
                <div className="icon-navbar-wrapper">
                    <FontAwesomeIcon icon={faFacebook} className="Facebook-icon" />
                    <FontAwesomeIcon icon={faAmazon} className="Amazon-icon" />
                    <FontAwesomeIcon icon={faInstagram} className="Instagram-icon" />
                    <FontAwesomeIcon icon={faTwitter} className="Twitter-icon" />
                </div>
            </div>

        </div>
    );
}

export default ScrollBox;
import { useRef } from "react";
import '../scroll/Scroll.css';
import pillow from '../img/pillowLogo.png'
import pillowLogo from '/Users/timliner/Desktop/Capstone-PRO/capstone/src/img/PIllow (2).png'
import ImageComponent from '../components/reusables/ImageComponent'
import SideBar from '../components/reusables/SideBar'
import SearchBar from '../components/reusables/SearchBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faNewspaper, faBank, faBlog, faAddressBook, faQuestion, faBell, faLock, faCoins, faNoteSticky, faRadio } from '@fortawesome/free-solid-svg-icons'
import { faAmazon, faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import Clock from "./Links/Clock";



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

    const handleClick = () => {
        window.location.href = 'https://dogecoin.com';

    }
    const submitClick = () => {
        window.location.href = 'https://bitcoin.org/en/';

    }

    const submitClicks = () => {
        window.location.href = "https://ethereum.org/en/"
    }

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
                        <img src="https://wallpaperaccess.com/full/1267683.png" alt="Image 1" onClick={submitClicks} />
                        <img src="https://static.vecteezy.com/system/resources/previews/002/774/878/original/bitcoin-logo-button-free-vector.jpg" alt="Image 2" onClick={submitClick} />
                        <img src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1653709480.jpg" onClick={handleClick} alt="Image 3" />
                    </div>
                    <div>
                        {/* <div className="text-side-by-side">
                            <div className="text-box">Ethereum Website</div>
                            <div className="text-box">Bitcoin Website</div>
                            <div className="text-box">Elon Musk Doge Coin</div>
                        </div> */}
                    </div>
                    {/* <div className="title-pillow">
                        <h3>Welcome to PILLOW</h3>
                        <SearchBar />
                    <img src={pillow} className="image-1" />
                    </div> */}
                    {/* <div className="images">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/US_one_dollar_bill%2C_obverse%2C_series_2009.jpg/640px-US_one_dollar_bill%2C_obverse%2C_series_2009.jpg" alt="Image 1" />
                        <img src="https://www.leftovercurrency.com/app/uploads/1970/01/50-indian-rupees-banknote-with-date-obverse.jpg" alt="Image 2" />
                        <img src="https://s.abcnews.com/images/Technology/CrytpoMain_A_v01_DP_1671045847375_hpMain_16x9_1600.jpg" alt="Image 3" />
                    </div> */}
                    {/* <div className="text-side-by-side">
                        <div className="text-box">PlaceHolder</div>
                        <div className="text-box">PlaceHolder</div>
                        <div className="text-box">PlaceHolder</div>
                    </div> */}

                    {/* <SearchBar />
                    <img src={pillow} className="image-1" /> */}

                </div>
                {/* <div className="images">
                    <img src="https://static.ffx.io/images/$zoom_0.788%2C$multiply_0.7725%2C$ratio_1.5%2C$width_756%2C$x_0%2C$y_0/t_crop_custom/q_86%2Cf_auto/49c3843d7d1abab72b60ccbaab743871ca6a74a8" alt="Image 1" />
                    <img src="https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/vddmtoxacaynp2rr_1629214003.jpeg" alt="Image 2" />
                    <img src="https://images.ctfassets.net/q33z48p65a6w/2fi3pKDcUs07RnA0XXwh8S/53809dd161bbf81fdbb7bdd9200ae9b4/2204_Crypto-Educational-Email-4-1920x1080-EN.png?w=1200&h=645&fit=thumb" alt="Image 3" />
                </div> */}

            

             <div className="blog">
              
            </div> 
            <div className="contact">
                <footer className="footer-1">
                    <p className="footer-text">

                    </p>

                    <div className="helpful-links-tag">
                        <h1>Helpful Links_______________________________________</h1>
                    </div>
                    <div className="helpful-links-wrapper">
                        <div className="column-1">
                            <p>
                                <FontAwesomeIcon icon={faQuestion} className="FAQ-icon" />

                                <a href="/FAQ"> FAQ</a>
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faLock} className="Lock-icon" />

                                <a href="/privacy"> Privacy</a>
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faAddressBook} className="Newspaper-icon" />

                                <a href="/terms"> Terms of Service</a>
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faBell} className="Newspaper-icon" />

                                <a href="/Alerts"> Alerts</a>
                            </p>
                            {/* <a href="/Clock"> Clock</a> */}


                        </div>


                    </div>
                    <div>
                        <div className="helpful-links-wrapper-2">
                            <div className="column-2">
                                <p>
                                    <FontAwesomeIcon icon={faNewspaper} className="Newspaper-icon" />
                                    <a href="/news"> Crypto News</a>
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={faBank} className="Bank-icon" />


                                    <a href="/Bank"> Bank</a>
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={faBlog} className="Blog-icon" />

                                    <a href="/blog"> Blog</a>
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={faAddressBook} className="Contact-icon" />


                                    <a href="/contact"> Contact</a>
                                </p>



                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="helpful-links-wrapper-4">
                            <div className="column-4">
                                <p>
                                    <FontAwesomeIcon icon={faCoins} className="Coins-icon" />
                                    <a href="/Compare"> Compare Currency</a>
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={faRadio} className="Radio-icon" />
                                    <a href="/CurrencyNews"> Currency News</a>
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={faNoteSticky} className="Notes-icon" />
                                    <a href="/Notes"> Note Pad</a>
                                </p>
                                {/* <a href="/Notify"> Notifications</a> */}



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

                    <a href="https://www.facebook.com/" className="t"> <FontAwesomeIcon icon={faFacebook} className="Facebook-icon" /></a>


                    <a href="https://www.amazon.com/" className="t"> <FontAwesomeIcon icon={faAmazon} className="Amazon-icon" /></a>


                    <a href="https://www.instagram.com/" className="t"><FontAwesomeIcon icon={faInstagram} className="Instagram-icon" /></a>


                    <a href="https://twitter.com/?lang=en" className="t"><FontAwesomeIcon icon={faTwitter} className="Twitter-icon" /></a>

                </div>
                <div className="Clock-Style">
                    <Clock />
                    <FontAwesomeIcon icon={faClock} className="Clock" />
                </div>
            </div>

        </div>
        </div>
    );
}

export default ScrollBox;
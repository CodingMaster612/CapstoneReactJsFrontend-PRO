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

    const handleClick= () => {
        window.location.href = 'https://dogecoin.com';

    }
    const submitClick= () => {
        window.location.href = 'https://bitcoin.org/en/';

    }

    const submitClicks= () => {
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
                        <img src="https://wallpaperaccess.com/full/1267683.png" alt="Image 1" onClick={submitClicks}/>
                        <img src="https://static.vecteezy.com/system/resources/previews/002/774/878/original/bitcoin-logo-button-free-vector.jpg" alt="Image 2" onClick={submitClick} />
                        <img src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1653709480.jpg"  onClick={handleClick}  alt="Image 3" />
                    </div>
                    <div>
                        <div className="text-side-by-side">
                            <div className="text-box">Ethereum Website</div>
                            <div className="text-box">Bitcoin Website</div>
                            <div className="text-box">Elon Musk Doge Coin</div>
                        </div>
                    </div>
                    <div className="images">
                        {/* <img src="" alt="Image 1" />
                        <img src="" alt="Image 2" />
                        <img src="" /> */}
                    </div>
                    <div className="text-side-by-side">
                        {/* <div className="text-box">PlaceHolder</div>
                        <div className="text-box">PlaceHolder</div> */}
                        {/* <div className="text-box">Elon Musk Doge Coin</div> */}
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

                            <a href="/FAQ"> FAQ</a>
                            <a href="/privacy"> Privacy</a>
                            <a href="/terms"> Terms of Service</a>

                        </div>


                    </div>
                    <div>
                        <div className="helpful-links-wrapper-2">
                            <div className="column-2">

                                <a href="/news">News</a>
                                <a href="/Bank"> Bank</a>
                                <a href="/blog"> Blog</a>
                                <a href="/contact"> Contact</a>
                                


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
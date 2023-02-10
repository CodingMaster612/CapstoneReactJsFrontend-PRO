import { useRef } from "react";
import '../scroll/Scroll.css';
import pillow from '../img/pillowLogo.png'
import ImageComponent from '../components/reusables/ImageComponent'
import SideBar from '../components/reusables/SideBar'
import SearchBar from '../components/reusables/SearchBar'


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
                        <SearchBar/>
                        <img src={pillow}  className="image-1"/>

                </div>
                 
                    
                
                <div className="blog">
                
                </div>
                <div className="contact">

                </div> 
            </div>
        </div>
    );
}

export default ScrollBox;
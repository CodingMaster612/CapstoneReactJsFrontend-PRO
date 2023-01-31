import { useRef } from "react";
import '../scroll/Scroll.css';
import pillow from '../img/pillowLogo.png'
import ImageComponent from '../components/reusables/ImageComponent'
import SideBar from '../components/reusables/SideBar'


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
                    {/* <h1>Currency Converter</h1> */}
                </div>
          
            
            
            <img src="https://img.freepik.com/free-vector/technology-bitcoin-background-with-holographic-effect_1017-31521.jpg?w=2000" />
            <div className="img-2"><img src="https://m.media-amazon.com/images/I/5170r5wKmtL._AC_SY580_.jpg"/></div>
            <div className="img-3"><img src="https://atlas-content1-cdn.pixelsquid.com/assets_v2/252/2522000106618623430/jpeg-600/G03.jpg"/></div>
            </div>
            <div ref={services} className="services">
                <div>
                   
                </div>
                <div ref={blog} className="blog">

                </div>
                <div ref={contact} className="contact">

                </div>
            </div>
            </div>
            );
}

            export default ScrollBox;
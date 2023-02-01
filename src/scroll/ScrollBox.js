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



                <img src="https://img.freepik.com/free-vector/technology-bitcoin-background-with-holographic-effect_1017-31521.jpg?w=2000" />
                <div className="img-2"><img src="https://img.freepik.com/free-vector/technology-bitcoin-background-with-holographic-effect_1017-31521.jpg?w=2000" /></div>
                <div className="img-3"><img src="https://img.freepik.com/free-vector/technology-bitcoin-background-with-holographic-effect_1017-31521.jpg?w=2000" /></div>
            </div>
            <div ref={services} className="services">
                <div>
                        <SearchBar/>
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
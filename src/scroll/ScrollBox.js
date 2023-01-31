import { useRef } from "react";
import '../scroll/Scroll.css';
import pillow from '../img/pillowLogo.png'
import ImageComponent from '../components/reusables/ImageComponent'

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
            {/* <ScrollToTop /> */}
            <div className="hero">
                
                    {/* <li onClick={() => scrollToSection(services)} className="link">
            How it Works
          </li>
          <li onClick={() => scrollToSection(blog)} className="link">
            What is Pillow?
          </li>
          <li onClick={() => scrollToSection(contact)} className="link">
            Goal 
          </li> */}
                          <img className="image-1"src={pillow} />

                          <h1>What is Pillow</h1>
                          <p>Pillow is a well known Currency Converter, which provides information in real time. Pillow uses a least 6 different api's to provide information to the user. Pillow is designed to be used at borders or personal use.  </p>

                
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
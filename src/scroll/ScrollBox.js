import { useRef } from "react";
import '../scroll/Scroll.css';
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
        <ul>
          {/* <li onClick={() => scrollToSection(services)} className="link">
            How it Works
          </li>
          <li onClick={() => scrollToSection(blog)} className="link">
            What is Pillow?
          </li>
          <li onClick={() => scrollToSection(contact)} className="link">
            Goal 
          </li> */}
        </ul>
      </div>
      <div ref={services} className="services">
      
      
      </div>
      <div ref={blog} className="blog">

      </div>
      <div ref={contact} className="contact">
        
      </div>
    </div>
  );
}

export default ScrollBox;
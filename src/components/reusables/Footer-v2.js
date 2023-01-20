import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "../../components/reusables/FooterSytles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
      </h1>
      <Container>
        <Row>
          <Column>
           
          </Column>
          <Column>
            {/* <Heading>Services</Heading> */}
            
          </Column>
          <Column>
            {/* <Heading>Contact Us</Heading> */}
            
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px", color: "black" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px", color: "black" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px", color: "black" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px", color: "black" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
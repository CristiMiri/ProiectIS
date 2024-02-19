import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-4  ">
      <Container>
        <Row className="py-3">
          <Col md={6} className="text-md-start text-center">
            &copy; {new Date().getFullYear()} Miritoiu Cristian
          </Col>
          <Col md={6} className="text-md-end text-center">
            <a href="https://twitter.com" className="text-light me-2">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://facebook.com" className="text-light me-2">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://instagram.com" className="text-light">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

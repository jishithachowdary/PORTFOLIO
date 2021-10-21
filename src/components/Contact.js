import React from "react";
import CustomNav from "./NavBar";
import { Container, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

import Particles from "../utils/particles";

const Contact = () => {
  return (
    <div >
      <CustomNav />
      <Container className="pt-lg-3  " >
        <Row className="mt-3 mt-lg-4 mb-3">
          <Col xs={12} md={9}>
            <div className="col-md-9 col-12">
              <div className="contact card-deck">
                <div className="contact-card card">
                  <a href="mailto:nemanijc@gmail.com?subject='Hello !'" class="text-link" target="_blank" rel="noreferrer">
                    <div class="shadow d-flex justify-content-center text-center flex-column py-3">
                      <div>
                      <FontAwesomeIcon className="contact-btns bg-custom-blue mr-2 shadow border-0 py-1 px-2" size="2x" icon={faEnvelope} />
                      </div>
                      <span class="text-muted mt-2 mb-3">Email</span>
                      <span class="color-custom-blue">nemanijc@gmail.com</span>
                    </div>
                  </a>
                </div>
              </div>
              <div class="contact-card card">
                <a href="https://www.linkedin.com/in/jishitha-chowdary-nemani-485925120" class="text-link" target="_blank" rel="noreferrer">
                  <div class="shadow d-flex justify-content-center text-center flex-column py-3">
                    <div>
                      <FontAwesomeIcon className="contact-btns bg-custom-blue mr-2 shadow border-0 py-1 px-2" size="2x" icon={faLinkedinIn} />
                    </div>
                    <span class="text-muted mt-2 mb-3">LinkedIn</span>
                    <span class="color-custom-blue">Jishitha Chowdary</span>
                  </div>
                </a>
              </div>
              <div class="contact-card card">
                <a href="tel:+918688626111" class="text-link" target="_blank" rel="noreferrer">
                  <div class="shadow d-flex justify-content-center text-center flex-column py-3">
                    <div>
                      <FontAwesomeIcon className="contact-btns bg-custom-blue mr-2 shadow border-0 py-1 px-2" size="2x" icon={faPhoneAlt} />
                    </div>
                    <span class="text-muted mt-2 mb-3">Contact Number</span>
                    <span class="color-custom-blue">+91 8688626111</span></div></a></div>
            </div>
          </Col>
          <Col className="float-md-right text-right">
            <h2 className="pr-lg-5 pr-xs-3 text-boldest color-custom-blue mb-4">
              Lets <br />Work <br /> Together!
            </h2>
            <div className="mt-3 mb-3 pr-lg-5 pr-xs-3">
              <Button className="contact-btns bg-custom-blue mr-2 shadow border-0 py-1">
                <FontAwesomeIcon size="1x" icon={faPhoneAlt} /><span><a href="tel:+918688626111" className="text-link">Phone</a></span>
              </Button>
              <Button className="contact-btns bg-custom-blue mr-2 shadow border-0 py-1 px-2" onClick={() => window.open('mailto:nemanijc@gmail.com?subject="Hello !"', '_blank')}>
                <FontAwesomeIcon size="1x" icon={faEnvelope} /><span>Email</span>
              </Button>
              <Button className="contact-btns bg-custom-blue shadow border-0 py-1" onClick={() => window.open('https://www.linkedin.com/in/jishitha-chowdary-nemani-485925120', '_blank')}>
                <FontAwesomeIcon size="1x" icon={faLinkedinIn} /><span>Linkedin</span>
              </Button>
            </div>
          </Col>
          <Particles />
        </Row>
      </Container>
      
    </div>
  )
};

export default Contact;
import React from "react";
import CustomNav from "./NavBar";
import { Container, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin, faHackerrank } from "@fortawesome/free-brands-svg-icons";
import DeveloperSvg from "../utils/developer";
import Particles from "../utils/particles";
import Typist from "react-typist";
import About from "./About"

const Home = () => {

  return (
    <>
      <CustomNav />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Container className="h-100 home-container" role="main">
        <Row xs={1} md={2} className="h-100">
          <Col className="my-auto">
            <div>
            <br></br>
            <br></br>
              <h5 className="color-custom-grey font-weight-bold mb-0">Hey !</h5>
              <h1 className="color-name-blue text-boldest">I'm Nemani Jishitha Chowdary</h1>
              <span className="color-custom-grey h4">
                <Typist className="TypistExample-message" cursor={{ show: false }}>
                  <span>I'm a </span><span className="font-weight-bold">
                    <span className="font-weight-bold">Front-end <span className="font-weight-normal">Developer</span></span>
                    <Typist.Backspace count={19} delay={3500} /> Full Stack</span> Developer </Typist></span><br />
              <span className="color-custom-grey h5">I specialized in developing pixel perfect user interfaces</span><br />
            </div>
            <div className="d-flex my-4">
              <Button variant="" className="color-custom-blue p-0 mr-3 border-0" aria-label="github" onClick={() => window.open('https://github.com/jishithachowdary', '_blank')}><FontAwesomeIcon size="2x" icon={faGithubSquare} /></Button>
              <Button variant="" className="color-custom-blue p-0 mr-3 border-0" aria-label="linkedin" onClick={() => window.open('https://www.linkedin.com/in/jishitha-chowdary-nemani-485925120', '_blank')}><FontAwesomeIcon size="2x" icon={faLinkedin} /></Button>
              <Button variant="" className="color-custom-blue p-0 mr-3 border-0" aria-label="hackerrank" onClick={() => window.open('https://hackerrank.com/nemanijc?hr_r=1', '_blank')}><FontAwesomeIcon spin size="2x" icon={faHackerrank} /></Button>
            </div>
            <Button className="bg-custom-blue font-weight-bold shadow-sm border-0 resume-btn" onClick={() => window.open('https://drive.google.com/file/d/1Ma5_w047H1LWSb1qBz0Uf4k1r2pdBBQz/view?usp=sharing', '_blank')}>View Resume</Button>
          </Col>
          <Col className="w-100 my-auto d-none d-md-block">
            <DeveloperSvg />
          </Col>
        </Row>
      </Container>
      <Particles />
      <About />
    </>
  )
};

export default Home;
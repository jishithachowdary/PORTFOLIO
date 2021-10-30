import React from "react";
import CustomNav from "./NavBar";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { projectsList } from "../utils/helperList";

const Projects = () => {
  return (
    <>
      <CustomNav />
      <Container className="mt-5">
        <h2 className="color-custom-blue ml-lg-5 proj-slide">Mern Stack projects</h2>
        
          <Row className="my-5 px-md-5 proj-opacity" xs={1} md={2} >
            <Col>
              <img className="img-fluid proj-image shadow" src="/assests/images/memories.jpg" alt="...." loading="lazy" />
            </Col>
            <Col className="pt-2">
              <h3 className="font-weight-bold color-custom-blue mb-0">Memories Blog</h3><br />
               <>
                <span>'Memorie blog is Mern Stack Project React js is used for front end and Mongoose is used as data base node js as back end'</span><br />
              </>
              Demo: <a href="https://distracted-ardinghelli-23b2a3.netlify.app" target="_blank" rel="noopener noreferrer">https://distracted-ardinghelli-23b2a3.netlify.app</a><br /><br />
              <>
                Source code Front end: <a href="https://github.com/jishithachowdary/Memories_Project_frontend" target="_blank" rel="noopener noreferrer">https://github.com/jishithachowdary/Memories_Project_frontend</a><br />
              </>
              <>
                Source code Back end: <a href="https://github.com/jishithachowdary/Memories_project_backend" target="_blank" rel="noopener noreferrer">https://github.com/jishithachowdary/Memories_project_backend</a><br />
              </>
            </Col>
          </Row>
          <Row className="my-5 px-md-5 proj-opacity" xs={1} md={2} >
            <Col>
              <img className="img-fluid proj-image shadow" src="/assests/images/student.jpg" alt="...." loading="lazy" />
            </Col>
            <Col className="pt-2">
              <h3 className="font-weight-bold color-custom-blue mb-0">Student Data Entry</h3><br />
               <>
                <span>'Student Data Entry is Mern Stack Project React js is used for front end and Mongoose is used as data base node js as back end'</span><br />
              </>
              Demo: <a href="https://keen-brahmagupta-cb90e9.netlify.app" target="_blank" rel="noopener noreferrer">https://keen-brahmagupta-cb90e9.netlify.app/</a><br /><br />
              <>
                Source code Front end: <a href="https://github.com/jishithachowdary/Studnet_Project_frontend" target="_blank" rel="noopener noreferrer">https://github.com/jishithachowdary/Studnet_Project_frontend</a><br />
              </>
              <>
                Source code Back end: <a href="https://github.com/jishithachowdary/Student_project_backend" target="_blank" rel="noopener noreferrer">https://github.com/jishithachowdary/Student_project_backend</a><br />
              </>
            </Col>
          </Row>
          <Row className="my-5 px-md-5 proj-opacity" xs={1} md={2} >
            <Col>
              <img className="img-fluid proj-image shadow" src="/assests/images/cooking.jpg" alt="...." loading="lazy" />
            </Col>
            <Col className="pt-2">
              <h3 className="font-weight-bold color-custom-blue mb-0">Recipe App</h3><br />
               <>
                <span>'Recipe App is designed using React js and fetch Api where the user can search for recipes'</span><br />
              </>
              Demo: <a href="https://quirky-hypatia-0a873d.netlify.app" target="_blank" rel="noopener noreferrer">https://quirky-hypatia-0a873d.netlify.app</a><br /><br />
              <>
                Source code: <a href="https://github.com/jishithachowdary/recipe-app" target="_blank" rel="noopener noreferrer">https://github.com/jishithachowdary/recipe-app</a><br />
              </>
              
            </Col>
          </Row>
          <Row className="my-5 px-md-5 proj-opacity" xs={1} md={2} >
            <Col>
              <img className="img-fluid proj-image shadow" src="/assests/images/weather.jpg" alt="...." loading="lazy" />
            </Col>
            <Col className="pt-2">
              <h3 className="font-weight-bold color-custom-blue mb-0">Weather Forecast</h3><br />
               <>
                <span>'Weather Forecast is designed using React js and fetch Api where the user can search for weather at a particular location'</span><br />
              </>
              Demo: <a href="https://jolly-hodgkin-2ffc95.netlify.app" target="_blank" rel="noopener noreferrer">https://jolly-hodgkin-2ffc95.netlify.app</a><br /><br />
              <>
                Source code: <a href="https://github.com/jishithachowdary/Weather-app" target="_blank" rel="noopener noreferrer">https://github.com/jishithachowdary/Weather-app</a><br />
              </>
            </Col>
          </Row>
          <Row className="my-5 px-md-5 proj-opacity" xs={1} md={2} >
            <Col>
              <img className="img-fluid proj-image shadow" src="/assests/images/shopping.jpg" alt="...." loading="lazy" />
            </Col>
            <Col className="pt-2">
              <h3 className="font-weight-bold color-custom-blue mb-0">Online Shopping</h3><br />
               <>
                <span>'Online Shopping is designed using React js and fetch Api where the user can add to to cart a fully functional cart is implemented'</span><br />
              </>
              Demo: <a href="https://naughty-beaver-7bcf4d.netlify.app" target="_blank" rel="noopener noreferrer">https://naughty-beaver-7bcf4d.netlify.app</a><br /><br />
              <>
                Source code: <a href="https://github.com/jishithachowdary/ecommerce-app" target="_blank" rel="noopener noreferrer">https://github.com/jishithachowdary/ecommerce-app</a><br />
              </>
            </Col>
          </Row>
      </Container>
    </>
  )
};

export default Projects;
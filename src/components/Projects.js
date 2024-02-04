import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import route from "../assets/img/best-route-optimization-software.png";
import micro from "../assets/img/microcontroller.jpeg";
import market from "../assets/img/retail-software.png";
import emp from "../assets/img/employee.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Rule-based Route Optimizer",
      description: "Our Rule-Based Route Optimization system is a software solution for improving routes with better efficiency and cost effectiveness. ",
      imgUrl: route,
    },
    {
      title: "Pest Plugger",
      description: "We introduced a machine which is fixed on the agricultural land throughout the day and has an oil applied board which emits yellow color light to attract bugs.",
      imgUrl: micro,
    },
    {
      title: "Employee Management System",
      description: "Developed an employee management application to maintain records of employee data. Built a CRUD (Create, Read, Update,Delete) system. ",
      imgUrl: emp,
    },
    {
      title: "Super Market System",
      description: "The EAD module integrates with the supermarket's point-of-saleand inventory management systems to always have up-to-date pricing, descriptions and other metadata for the thousands of products carried in the store.",
      imgUrl: market,
    }
   
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>These are the projects I have done so far</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    
                   
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

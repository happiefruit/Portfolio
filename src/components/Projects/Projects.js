import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import uipathlogo from "../../Assets/UiPath.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong> (WIP)
        </h1>
        <p style={{ color: "white" }}>
          Here are the automations I have developed for companies!
        </p>
		<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
		
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uipathlogo}
              isBlog={false}
              title="Booking.com Commission Checker"
              description="Automation project that helps Guest Services check if Booking.com is charging the correct commission to the properties."
              link=""
            />
          </Col>
		  
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uipathlogo}
              isBlog={false}
              title="Expedia Commission Checker"
              description="Automation project that helps Guest Services check if Expedia is charging the correct commission to the properties."
              link=""
            />
          </Col>	

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uipathlogo}
              isBlog={false}
              title="Onyx Commission Checker"
              description="Automation project that helps Guest Services check if Onyx is charging the correct commission to the properties."
              link=""
            />
          </Col>	
		  
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uipathlogo}
              isBlog={false}
              title="Competitor Set Analysis Extractor"
              description="Automation project that helps business development team extracts statuses and reviews of competitors in public travel agent sites."
              link=""
            />
          </Col>

		
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uipathlogo}
              isBlog={false}
              title="Reservation Maker"
              description="Automation project that helps Sales and Marketing Team create reservations in reservation management system."
              link=""
            />
          </Col>
		  
		 </Row>
		  
      </Container>
    </Container>
  );
}

export default Projects;

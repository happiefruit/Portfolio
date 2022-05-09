import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import otalogo from "../../Assets/Projects/ota-commission-check.jpg";
import comsetlogo from "../../Assets/Projects/competitorset.png";
import ccreconlogo from "../../Assets/Projects/creditcardreconciliation.png";
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
              imgPath={otalogo}
              isBlog={false}
              title="Overseas Travel Agent Commission Checker"
              description="Automation robot checks if travel agent(s) were charging the correct commission to the properties."
              link=""
            />
          </Col>
		  
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={comsetlogo}
              isBlog={false}
              title="Hotel Reviews and Statuses Extractor"
              description="Automation robot extracts details from well-known travel agent sites."
              link=""
            />
          </Col>

		
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uipathlogo}
              isBlog={false}
              title="Reservation Maker"
              description="Automation robot creates confirmed reservations in internal reservation management system."
              link=""
            />
          </Col>
		  
		  <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ccreconlogo}
              isBlog={false}
              title="Credit Card Reconciliation"
              description="Automation robot compares bank amounts against payment gateway transactions."
              link=""
            />
          </Col>
		 </Row>
		  
      </Container>
    </Container>
  );
}

export default Projects;

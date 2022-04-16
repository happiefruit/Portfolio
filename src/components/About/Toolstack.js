import React from "react";
import uipathLogo from "../../Assets/UiPath.png";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
		   <Col xs={4} md={2} className="tech-icons">
         <img
                src={uipathLogo}
                alt="uipath logo"
                style={{ maxHeight: "100px" }}
              />
            </Col>
    </Row>
  );
}

export default Toolstack;

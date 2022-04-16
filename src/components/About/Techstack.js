import React from "react";
import vbnetLogo from "../../Assets/vb.net.svg";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
  SiCsharp,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
      </Col>
		   <Col xs={4} md={2} className="tech-icons">
         <img
                src={vbnetLogo}
                alt="vb.net logo"
                style={{ maxHeight: "80px" }}
              />
            </Col>
    </Row>
  );
}

export default Techstack;

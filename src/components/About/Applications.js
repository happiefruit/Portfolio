import React from "react";
import oracleLogo from "../../Assets/Oracle.png";
import salesforceLogo from "../../Assets/Salesforce.png";
import { Col, Row } from "react-bootstrap";
import sabrelogo from "../../Assets/sabre-logo.png";
import {
	SiSap,
	SiMicrosoftword,
	SiMicrosoftoutlook,
	
} from "react-icons/si";

import {
	RiFileExcel2Fill,
	RiChromeFill
} from "react-icons/ri";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
		<Col xs={4} md={2} className="tech-icons">
        <RiChromeFill />
		</Col>
		
		<Col xs={4} md={2} className="tech-icons">
        <RiFileExcel2Fill />
		</Col>
		
		<Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftword />
		</Col>
		
		<Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftoutlook />
		</Col>
		
		<Col xs={4} md={2} className="tech-icons">
        <SiSap />
		</Col>
		
		<Col xs={4} md={2} className="tech-icons">
         <img
                src={oracleLogo}
                alt="oracle logo"
                style={{ maxHeight: "20px" }}
              />
        </Col>

		<Col xs={4} md={2} className="tech-icons">
         <img
                src={salesforceLogo}
                alt="salesforce logo"
                style={{ maxHeight: "100px" }}
              />
        </Col>
		
				<Col xs={4} md={2} className="tech-icons">
         <img
                src={sabrelogo}
                alt="sabre logo"
                style={{ maxHeight: "100px" }}
              />
        </Col>
		
    </Row>
  );
}

export default Toolstack;

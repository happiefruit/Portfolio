import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Greetings, I am <span className="purple">Michael Lee </span>
            from <span className="purple"> Singapore.</span>
            <br />I studied Mechanical Engineering in Nanyang Technological University.
            <br />
            <br />
            Apart from coding, these are some other activities that I love doing!
          </p>
          <ol>
            <li className="about-activity">
              <ImPointRight /> Completing Steam Games achievements
            </li>
            <li className="about-activity">
              <ImPointRight /> Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Rock-climbing
            </li>
            <li className="about-activity">
              <ImPointRight /> Animal Voluntary Work
            </li>
          </ol>

          <p style={{ color: "rgb(155 126 172)" }}>
            "There are always things to automate. It's just that we were to lazy to look into it."{" "}
          </p>
          <footer className="blockquote-footer">Michael</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

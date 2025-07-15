import React from "react";
import Card from "react-bootstrap/Card";
import { FiArrowRightCircle } from "react-icons/fi";
import './AboutCard.css';  // Import the CSS file for styling

function AboutCard() {
  return (
    <div className="about-card-container">
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              Hi Everyone, I am <span className="purple">PUJA RANI DAS </span>
              from <span className="purple"> Jamshedpur, India.</span>
              <br />
              I'm currently enrolled in the BTech program for Electronics and Communication Engineering at NIT Jamshedpur.
              <br />
              I have completed my Matriculation from Model School Nimdih and intermediate from +2 Govt Girl's High School Bariatu, Ranchi.
              <br />
              <br />
              Apart from coding, some other activities that I love to do!
            </p>
            <ul>
              <li style={{ textAlign: "left" }}className="about-activity">
              <FiArrowRightCircle /> Playing Chess
              </li>
              <li className="about-activity">
              <FiArrowRightCircle /> Competitive programming
              </li>
              <li className="about-activity">
              <FiArrowRightCircle /> Travelling
              </li>
            </ul>

            <p style={{ color: "rgb(155 126 172)" }}>
              "I always strive to build things that make a difference!"{" "}
            </p>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AboutCard;

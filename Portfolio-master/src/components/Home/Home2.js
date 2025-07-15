import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description text-center mx-auto">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I love to do programming and development. I have just started doing back-end development.
              <br />
              <br />
              I am fluent in languages like
              <i>
                <b className="purple"> C++, Javascript and C. </b>
              </i>
              <br />
              <br />
              My field of interest is building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products</b> and also exploring areas related to{" "}
                <b className="purple">Competitive Programming.</b>
              </i>
              <br />
              <br />
              Whenever possible, I apply my passion for developing products with
              <i>
                <b className="purple"> Modern Javascript Libraries and Frameworks</b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social text-center">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links d-flex justify-content-center list-unstyled">
              <li className="social-icons mx-3">
                <a
                  href="https://github.com/puja-24"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub size={30} />
                </a>
              </li>

              <li className="social-icons mx-3">
                <a
                  href="https://www.linkedin.com/in/puja-das-79b374289/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn size={30} />
                </a>
              </li>

              <li className="social-icons mx-3">
                <a
                  href="https://share.google/UAjcgXQoJQ89VKQ33"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram size={30} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import book from "../../Assets/Projects/book.png";
import chatting from "../../Assets/Projects/chatting.png";
import resume from "../../Assets/Projects/resume.png";
import bucket from "../../Assets/Projects/bucket.png";
import simon from "../../Assets/Projects/simon.png";
import sahayak from "../../Assets/Projects/sahayak.png";
import classImg from "../../Assets/Projects/class.png";
import innoreva from "../../Assets/Projects/innoreva.png";
import spotify from "../../Assets/Projects/spotify.png";
import LifeXcel from "../../Assets/Projects/LifeXcel.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={book}
              isBlog={false}
              title="Books4U"
              description="A hackathon-built MERN platform that smartly connects book donors with underserved schools using OCR, ML-based prioritization, and transparent, trackable logistics."
              ghLink="https://github.com/hackathon-india-2025/team-10"
              demoLink="https://drive.google.com/file/d/1pb_zNwqhHeY1JxzkSRDwZsOENe84f5Um/view"
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={LifeXcel}
              isBlog={false}
              title="LifeXcel"
              description="LifeXcel is an AI-powered blogging platform built with the MERN stack, enabling users to create, manage, and share inspiring content with ease through intelligent content generation and optimized image delivery."
              ghLink="https://github.com/puja-24/LifeXcel.git"
              demoLink="https://life-xcel-frontend.vercel.app/"
            />
           </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatting}
              isBlog={false}
              title="Jumping Minds"
              description="A MERN-based anonymous chat app designed to support emotional well-being through spontaneous, real-time peer conversations using Socket.io and JWT authentication."
              ghLink="https://github.com/puja-24/Jumping-Minds"
              demoLink="https://chit-chat-0ena.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resume}
              isBlog={false}
              title="Building Resume"
              description="A user-friendly web application that helps users create professional, customizable resumes using pre-designed templates and real-time editing tools."
              ghLink="https://github.com/puja-24/Building-Resume"
               demoLink="https://sage-halva-6bb87f.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bucket}
              isBlog={false}
              title="College Bucket"
              description="College Bucket is a MERN-based platform where college students can buy and sell used items within campus, featuring product listings, profiles, and real-time interactions."
              ghLink="https://github.com/puja-24/College-Bucket"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simon}
              isBlog={false}
              title="Simon Game"
              description="Simon Game is a memory-based color pattern game where players must repeat an increasingly long sequence of colors and sounds, testing their concentration and recall skills."
              ghLink="https://github.com/puja-24/Simon-Game"
              demoLink="https://66e6893ec95efb4b76688102--beautiful-quokka-571e26.netlify.app/"
               
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sahayak}
              isBlog={false}
              title="Sahayak"
              description="Sahaayak is an AI-powered mental health support platform for students, offering anonymous chat, mood tracking, peer support, and crisis intervention tools."
              ghLink="https://github.com/saumyajha-12/Sahayak-Mental-Health-Support"
              demoLink="https://drive.google.com/file/d/12kaf4jkZhHvxjYqaLWdx6we1IjIb0CYD/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={classImg}
              isBlog={false}
              title="Digital Attendance System"
              description="A smart attendance tracker using facial recognition and cloud sync. Enhances classroom transparency and reduces proxy chances."
              ghLink="https://github.com/puja-24/People-Counter-and-Tracker.git"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={innoreva}
              isBlog={false}
              title="Innoreva"
              description="The Innoreva Website is an interactive platform showcasing the events, initiatives, and achievements of the Innoreva Technical Club, designed to engage and inform students about innovation and technology."
              ghLink="https://github.com/Innoreva-2k21/Official_Website"
              demoLink="https://teaminnoreva.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotify}
              isBlog={false}
              title="Spotify Clone"
              description="A clone of the Spotify UI using Html and Css. Functional music player with styling and basic playback interface using dummy data."
              ghLink="https://github.com/puja-24/Spotify-Colon"
              demoLink="https://66e7273777c5c93510747f7c--jade-melomakarona-01ad5f.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

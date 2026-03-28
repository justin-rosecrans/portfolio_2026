import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      <Container id="about" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <Row>
          <Col className="p-5 shadow-sm">
            <h2 className="text-center mb-4">About Me</h2>
            <p className="lead text-center">
              I am a seasoned full-stack software engineer with over 15 years of experience in designing, developing, and deploying complex web applications.
            </p>
            <p>
              My expertise spans across the full software development lifecycle, from gathering requirements and designing system architecture to implementation, testing, and deployment. I am passionate about building high-quality, scalable, and maintainable software solutions that solve real-world problems.
            </p>
            <p>
              I have a strong background in a variety of technologies, including React, Node.js, Python, and AWS. I am always eager to learn new technologies and take on new challenges.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;

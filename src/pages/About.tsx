import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      <Container id="about" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <Row>
          <Col className="p-5 shadow-sm">
            <h2 className="text-center mb-4">About</h2>
            <p>
              Justin is a Lead Software Engineer with over 15 years of experience in building, developing and deploying to production web applications that improve usability and enhance performance.
            </p>
            <p>
              Justin has a strong background in a variety of full-stack technologies with a focus on Front End technologies. He is passionate about learning new technologies in Artificial Intelligence (AI) and implementing the emerging technologies into his web applications.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;

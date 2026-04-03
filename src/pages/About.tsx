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
              Justin has provided full-cycle web development solutions to leading companies in the Financial Services Industry for 8 years at TD Ameritrade, Charles Schwab, and JP Morgan Chase.
            </p>
            <p>
              Justin has obtained the following certifications: (1) Google AI Professional Certificate, 2026, (2) AWS Certified Cloud Practitioner, 2025 and (3) Advanced React from Meta, 2023.
            </p>
            <p>
              Justin has experience in building, developing and deploying to production web applications that improve usability and enhance performance for the company. He has a strong background in a variety of full stack web technologies with a focus on Front End. Justin is passionate about the application of new technologies in Artificial Intelligence (AI) and implementing the emerging technologies into web applications.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;

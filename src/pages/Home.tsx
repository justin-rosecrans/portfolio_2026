import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
import resume from '../assets/Justin_Rosecrans_Resume.pdf';

const Home: React.FC = () => {
  return (
    <Container style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <Row className="align-items-center text-center">
        <Col>
          <h1 className="display-3">Welcome to My Portfolio</h1>
          <p className="lead">A showcase of my 15 years of experience in software engineering.</p>
          <p>
            <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>
              <Button variant="primary" className="m-2">View My Work</Button>
            </Link>
            <a href={resume} download>
              <Button variant="primary" className="m-2">Download Resume</Button>
            </a>
            <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
              <Button variant="outline-secondary" className="m-2">Contact Me</Button>
            </Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

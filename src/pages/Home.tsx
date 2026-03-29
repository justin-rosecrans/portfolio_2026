import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
import resume from '../assets/Justin_Rosecrans_Resume.pdf';

const Home: React.FC = () => {
  return (
    <Container style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <Row className="align-items-center text-center">
        <Col>
          <h1 className="display-3">Welcome to Justin Rosecrans' Portfolio</h1>
          <p className="lead">A showcase of 15 years of experience in software engineering.</p>
          <p>
            <img 
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
              alt="Technical Workspace" 
              className="img-fluid rounded shadow-lg mb-4" 
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </p>
          <p>
            <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
              <Button variant="primary" className="m-2">About</Button>
            </Link>
            <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>
              <Button variant="primary" className="m-2">Projects</Button>
            </Link>
            <a href={resume} download>
              <Button variant="primary" className="m-2">Resume</Button>
            </a>
            <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
              <Button variant="primary" className="m-2">Contact</Button>
            </Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

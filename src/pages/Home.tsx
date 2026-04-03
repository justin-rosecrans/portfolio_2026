import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
import resume from '../assets/Justin_Rosecrans_Resume_2026.pdf';
import heroBanner from '../../dist/assets/hero_banner.jpg';

const Home: React.FC = () => {
  return (
    <Container style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <Row className="align-items-center text-center">
        <Col>
          <h1 className="display-3">Welcome to Justin Rosecrans' Portfolio</h1>
          <p className="lead">Justin is a Lead Software Engineer with 15+ years of experience focusing on Front End Web Development and Artificial Intelligence (AI) implementation.</p>
          <p>
            <img 
              src={heroBanner} 
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
            <a href={resume} target="_blank" rel="noopener noreferrer">
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

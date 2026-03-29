import React from 'react';
import { Link } from 'react-scroll';
import { Container, Row, Col } from 'react-bootstrap';
import resume from '../assets/Justin_Rosecrans_Resume.pdf';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center" style={{ backgroundColor: '#2c3e50' }}>
      <Container>
        <Row>
          <Col md={6}>
            <p>&copy; {new Date().getFullYear()} - Justin Rosecrans' Portfolio</p>
            <div className="mt-3">
              <p>Follow:</p>
              <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                GitHub
              </a>
              <a href="https://linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="text-white">
                LinkedIn
              </a>
            </div>
          </Col>
          <Col md={6}>
            <Row>
              <Col md={6}>
                <div className="mt-3">
                  <Link to="home" smooth={true} duration={500} className="text-white d-block" style={{cursor: 'pointer'}}>Home</Link>
                  <Link to="about" smooth={true} duration={500} className="text-white d-block" style={{cursor: 'pointer'}}>About</Link>
                  <Link to="projects" smooth={true} duration={500} className="text-white d-block" style={{cursor: 'pointer'}}>Projects</Link>
                </div>
              </Col>
              <Col md={6}>
                <div className="mt-3">
                  <a href={resume} download className="text-white d-block" style={{cursor: 'pointer'}}>Resume</a>
                  <Link to="contact" smooth={true} duration={500} className="text-white d-block" style={{cursor: 'pointer'}}>Contact</Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

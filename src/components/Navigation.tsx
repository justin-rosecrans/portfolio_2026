import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import resume from '../assets/Justin_Rosecrans_Resume.pdf';

const Navigation: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" style={{ backgroundColor: '#2c3e50' }}>
      <Container>
        <Navbar.Brand as={Link} to="home" smooth={true} duration={500} style={{cursor: 'pointer'}}>Justin Rosecrans' Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto main-nav">
            <Nav.Link as={Link} to="home" spy={true} smooth={true} offset={-70} duration={500} activeClass="active" style={{cursor: 'pointer'}}>Home</Nav.Link>
            <Nav.Link as={Link} to="about" spy={true} smooth={true} offset={-70} duration={500} activeClass="active" style={{cursor: 'pointer'}}>About</Nav.Link>
            <Nav.Link as={Link} to="projects" spy={true} smooth={true} offset={-70} duration={500} activeClass="active" style={{cursor: 'pointer'}}>Projects</Nav.Link>
            <a href={resume} target="_blank" rel="noopener noreferrer" className="nav-link">
              Resume
            </a>
            <Nav.Link as={Link} to="contact" spy={true} smooth={true} offset={-70} duration={500} activeClass="active" style={{cursor: 'pointer'}}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

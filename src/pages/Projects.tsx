import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  // Placeholder project data
  const projectData = [
    {
      title: 'Project One',
      description: 'A brief description of Project One. This project was built using React and Node.js.',
      imageUrl: 'https://via.placeholder.com/300x200',
      projectUrl: '#',
      sourceUrl: '#'
    },
    {
      title: 'Project Two',
      description: 'A brief description of Project Two. This project was built using Python and Django.',
      imageUrl: 'https://via.placeholder.com/300x200',
      projectUrl: '#',
      sourceUrl: '#'
    },
    {
      title: 'Project Three',
      description: 'A brief description of Project Three. This project was a mobile app built with React Native.',
      imageUrl: 'https://via.placeholder.com/300x200',
      projectUrl: '#',
      sourceUrl: '#'
    }
  ];

  return (
    <Container id="projects" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <h2 className="text-center mb-4">My Projects</h2>
      <Row className="justify-content-center">
        {projectData.map((project, index) => (
          <Col key={index} md="auto">
            <ProjectCard {...project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;

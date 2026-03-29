import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';
import aiChatImg from '../assets/aiChat.jpg';
import webAppImg from '../assets/webApp.jpg';
import mfeImg from '../assets/mfe.jpg';

const Projects: React.FC = () => {
  // Placeholder project data
  const projectData = [
    {
      title: 'AI Chat',
      description: 'Justin is currently building an AI chat for JPMorganChase Employees by using AI CoPilot in Spec-Driven Development (SDD) that connects to a Q&A API. The AI chat will increase efficiency and enhance productivity.',
      imageUrl: aiChatImg,
    },
    {
      title: 'Proprietary Web Application',
      description: 'Justin upgraded and enhanced a proprietary management web application from version 1 to version 2 to version 3 to improve usability and optimize workflow for JPMorganChase employees. Justin coordinated and executed the full migration and successful upgrades of the proprietary management web application.',
      imageUrl: webAppImg,
    },
    {
      title: 'Monolithic Repository',
      description: 'Justin improved a proprietary management web application by consolidating 4 Micro frontend(MFE) repositories into a single monolithic MFE repository. Merging the MFEs into a single repository increased productivity by 1,870% since the startup time decreased from 138 seconds to 7.5 seconds.',
      imageUrl: mfeImg,
    },
  ];
  return (
    <Container id="projects" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <h2 className="text-center mb-4">Projects</h2>
      <Row className="g-4">
        {projectData.map((project, index) => (
          <Col key={index} md={6} lg={4}>
            <ProjectCard {...project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;

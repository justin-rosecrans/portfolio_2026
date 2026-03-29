import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  // Placeholder project data
  const projectData = [
    {
      title: 'Monolithic MFE Project',
      description: 'I led a major improvement to our micro‑frontend workflow by consolidating four separate MFE repositories into a single monolithic codebase. This eliminated recurring issues where developers were tagging and deploying incorrect images through the Jules CI/CD pipeline. I also integrated Turborepo to optimize build orchestration, resulting in significantly faster local development builds and improved pipeline performance across the team.',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      projectUrl: '#',
      sourceUrl: '#'
    },
    {
      title: 'Documentation & Unit Testing Project',
      description: 'When I joined the team, the proprietary codebase had no documentation, unclear contribution standards, unit test coverage below 69%, and failing SonarQube checks — all of which led to developer confusion and unstable releases. I created comprehensive project documentation and a clear contribution guide, raised unit test coverage to over 85%, and restored full SonarQube compliance, significantly improving code quality and team productivity.',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      projectUrl: '#',
      sourceUrl: '#'
    },
    {
      title: 'Company Mandate Project',
      description: 'I led two major releases of our proprietary web application, collaborating closely with UX designers and product owners to deliver new features for version two. I managed and guided a team of 6+ developers through tight deadlines, ensuring high‑quality delivery and smooth rollout. Following a company‑wide mandate to adopt a new CSS framework, I coordinated and executed the full migration effort, successfully upgrading the application and maintaining release stability.',
      imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      projectUrl: '#',
      sourceUrl: '#'
    }
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

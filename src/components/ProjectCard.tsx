import React from 'react';
import { Card, Button } from 'react-bootstrap';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl?: string;
  sourceUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, projectUrl, sourceUrl }) => {
  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        {projectUrl && <Button variant="primary" href={projectUrl} target="_blank" rel="noopener noreferrer" className="m-1">View Project</Button>}
        {sourceUrl && <Button variant="secondary" href={sourceUrl} target="_blank" rel="noopener noreferrer" className="m-1">Source Code</Button>}
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;

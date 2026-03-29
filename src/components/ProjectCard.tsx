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
    <Card style={{ width: '100%' }} className="d-flex flex-column h-100">
      <Card.Img variant="top" src={imageUrl} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ minHeight: '150px' }}>
          {description}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-center">
        {projectUrl && <Button variant="primary" href={projectUrl} target="_blank" rel="noopener noreferrer" className="m-1">View Project</Button>}
        {sourceUrl && <Button variant="secondary" href={sourceUrl} target="_blank" rel="noopener noreferrer" className="m-1">Source Code</Button>}
      </Card.Footer>
    </Card>
  );
};

export default ProjectCard;

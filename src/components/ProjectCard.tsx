import React from 'react';
import { Card } from 'react-bootstrap';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl?: string;
  sourceUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl }) => {
  return (
    <Card style={{ width: '100%' }} className="d-flex flex-column h-100">
      <Card.Img variant="top" src={imageUrl} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title className='text-center'>{title}</Card.Title>
        <Card.Text style={{ minHeight: '150px' }}>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;

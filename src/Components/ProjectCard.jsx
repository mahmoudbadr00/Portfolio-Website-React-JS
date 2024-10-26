/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const ProjectCard = ({ project }) => {
  return (
    <StyledCard>
      <CardActionArea 
        onClick={() => window.open(project.gitHubLink, '_blank')}
        sx={{ height: '100%' }}
      >
        <CardMedia
          component="img"
          height="200"
          image={project.imgPath}
          alt={project.title}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontWeight="600">
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
};

export default ProjectCard;
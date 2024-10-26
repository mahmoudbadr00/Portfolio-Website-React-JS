import { Box, Container, Typography, Grid } from '@mui/material';
import ProjectCard from '../Components/ProjectCard';
import { projectData } from '../data/projectsData';

const Projects = () => {
  return (
    <Box sx={{ pt: 10, pb: 8 }}>
      <Container>
        <Typography
          variant="h2"
          textAlign="center"
          fontWeight="bold"
          sx={{ mb: 6, mt: 4 }}
        >
          My Projects
        </Typography>
        
        <Grid container spacing={4}>
          {projectData.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
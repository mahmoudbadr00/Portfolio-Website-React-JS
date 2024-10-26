import { Box, Container, Typography, Grid, Paper, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const skills = {
  'Frontend': ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Material-UI', 'Tailwind CSS'],
  'Mobile Development': ['React Native', 'Flutter'],
  'Backend & Database': ['Node.js', 'Express.js', 'MongoDB', 'Firebase', 'SQL'],
  'Tools & Others': ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Responsive Design', 'RESTful APIs']
};

const About = () => {
  return (
    <Box sx={{ pt: 10, pb: 8 }}>
      <Container>
        <Typography
          variant="h2"
          textAlign="center"
          fontWeight="bold"
          sx={{ mb: 6, mt: 4 }}
        >
          About Me
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <StyledPaper elevation={3}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Who I Am
              </Typography>
              <Typography paragraph>
                I&apos;m a passionate Frontend and Cross-Platform Mobile Developer with over 2 years of experience
                in creating responsive and user-friendly applications. My journey in software development
                started with web development and expanded into mobile development, allowing me to build
                comprehensive solutions across multiple platforms.
              </Typography>
              <Typography paragraph>
                I specialize in React, React Native, and Flutter development, focusing on creating
                seamless user experiences and maintaining high code quality. My experience includes
                working on e-learning platforms, mobile applications, and various web-based solutions.
              </Typography>
            </StyledPaper>
          </Grid>

          <Grid item xs={12} md={6}>
            <StyledPaper elevation={3}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                What I Do
              </Typography>
              <Typography paragraph>
                • Develop responsive web applications using React and Next.js
              </Typography>
              <Typography paragraph>
                • Create cross-platform mobile applications using React Native and Flutter
              </Typography>
              <Typography paragraph>
                • Implement modern UI/UX designs with Material-UI and custom CSS
              </Typography>
              <Typography paragraph>
                • Integrate RESTful APIs and manage application state
              </Typography>
              <Typography paragraph>
                • Optimize application performance and maintain code quality
              </Typography>
            </StyledPaper>
          </Grid>

          <Grid item xs={12}>
            <StyledPaper elevation={3}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Skills & Technologies
              </Typography>
              
              {Object.entries(skills).map(([category, skillList]) => (
                <Box key={category} sx={{ mb: 3 }}>
                  <Typography variant="h6" color="primary" gutterBottom>
                    {category}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {skillList.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        sx={{
                          fontWeight: 500,
                          fontSize: '0.9rem',
                          '&:hover': {
                            backgroundColor: 'primary.main',
                            color: 'white',
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              ))}
            </StyledPaper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
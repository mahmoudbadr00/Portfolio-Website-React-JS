/* eslint-disable no-unused-vars */
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import ProjectCard from '../Components/ProjectCard';
import { useState, useEffect } from 'react';
import cv from "../assets/Mahmoud Badr - Frontend Developer - CV.pdf";
import { projectData } from '../data/projectsData';


const HeroSection = styled(Box)(({ theme }) => ({
  height: '100vh',
  position: 'relative',
  top:-70,
  backgroundImage: 'url("/myimg2.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
}));

const HeroContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  color: 'white',
  textAlign: 'center',
  padding: theme.spacing(1),
  borderRadius: theme.spacing(2),
  backdropFilter: 'blur(2px)',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  border: '2px solid rgba(255, 255, 255, 0.1)',
  top:185
}));

const CVButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  bottom: 10,
  right:'20%',
  // left:'50%',
  marginTop: 0,
  padding: theme.spacing(1.5, 4),
  fontSize: '1.1rem',
  fontWeight: 600,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: 'white',
  width: '60%',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const HomePage = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCV, setShowCV] = useState(false);
  
  const fullText = "Hi, I'm Mahmoud Badr, a Front-End and Cross Platform Mobile Developer with React, JavaScript, Flutter and React Native with over 2 years of experience.";
  const cvText = "Take a look at my CV";

  useEffect(() => {
    let currentText = fullText;
    let currentIndex = 0;
    let isTypingFirst = true;

    const typeText = () => {
      if (currentIndex < currentText.length) {
        setDisplayText(currentText.slice(0, currentIndex + 1));
        currentIndex++;
      } else if (isTypingFirst) {

        setTimeout(() => {
          isTypingFirst = false;
          currentText = cvText;
          currentIndex = 0;
          setDisplayText('');
          setShowCV(true);
        }, 1000);
      }
    };

    const interval = setInterval(typeText, 50);

    return () => clearInterval(interval);
  }, []);


  const featuredProjects = projectData.slice(0, 3);

  return (
    <Box>
      <HeroSection>
        <HeroContent>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              marginBottom: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Mahmoud Badr
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 500,
              marginBottom: 4,
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            }}
          >
            Frontend Developer
          </Typography>
          <Typography
            variant="h6"
            sx={{
              maxWidth: '800px',
              margin: '0 auto',
              minHeight: '100px',
            }}
          >
            {displayText}
          </Typography>
          {showCV && (
            <CVButton
              variant="contained"
              href={cv}
              download="Mahmoud-Badr-Frontend-Developer-CV"
              sx={{
                opacity: 0,
                animation: 'fadeIn 0.5s ease forwards',
                '@keyframes fadeIn': {
                  '0%': {
                    opacity: 0,
                    transform: 'translateY(20px)'
                  },
                  '100%': {
                    opacity: 1,
                    transform: 'translateY(0)'
                  }
                }
              }}
            >
              Download CV
            </CVButton>
          )}
        </HeroContent>
      </HeroSection>

      <Container sx={{ py: 8 }}>
        <Typography
          variant="h3"
          textAlign="center"
          sx={{ mb: 6 }}
        >
          Some of my latest work
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {featuredProjects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6}}>
          <Button
            component={RouterLink}
            to="/projects"
            variant="contained"
            size="large"
            sx={{ 
              fontWeight: 600,
              padding: '12px 32px',
              width:'50%'
            }}
          >
            See More Projects
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState } from 'react';
import { 
  Card, 
  CardMedia, 
  Typography, 
  CardActionArea,
  Modal,
  Box,
  IconButton,
  Button,
  Stack
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Close } from "@mui/icons-material";
import GitHubIcon from '@mui/icons-material/GitHub';
import PreviewIcon from '@mui/icons-material/Preview';
import { motion } from 'framer-motion';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.4)',
  // backdropFilter: 'blur(5px)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const ModalContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: '800px',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '16px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
  padding: theme.spacing(4),
  outline: 'none',
}));

const ProjectTitle = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: theme.spacing(2),
  background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.7) 25%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.3) 75%, rgba(0,0,0,0) 100%)',
  color: 'white',
  fontWeight: 600,
}));

const ProjectCard = ({ project }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <>
      <StyledCard component={motion.div} whileHover={{ scale: 1.03 }}>
        <CardActionArea onClick={handleOpen}>
          <Box sx={{ position: 'relative' }}>
            <CardMedia
              component="img"
              height="300"
              image={project.imgPath}
              alt={project.title}
              sx={{ 
                objectFit: 'cover',
                filter: 'brightness(0.8)',
              }}
            />
            <ProjectTitle variant="h6">
              {project.title}
            </ProjectTitle>
          </Box>
        </CardActionArea>
      </StyledCard>

      <Modal
      // sx={{".MuiPaper-root":{minWidth:{xs:"100%",md:800}}}}
        open={modalOpen}
        onClose={handleClose}
        closeAfterTransition
        componentsProps={{
          backdrop: {
            sx: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(3px)',
            }
          }
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <ModalContent>
          <IconButton
            sx={{":hover":{color:"red",rotate:"180deg",transition:"0.1s"},
            position:"absolute",
            top:20,
            right:10,
            width:"auto",
        }} onClick={handleClose}
        >
            <Close />
        </IconButton>

            <Box sx={{ mb: 3 }}>
              <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom sx={{fontSize:{xs:28, sm:33}}}>
                {project.title}
              </Typography>
            </Box>

            <CardMedia
              component="img"
              image={project.imgPath}
              alt={project.title}
              sx={{ 
                borderRadius: '12px',
                mb: 3,
                objectFit: 'cover',
                height:{sm:300, xs:200}
              }}
            />

            <Typography variant="body1" sx={{ mb: 4, fontSize:{sm:"initial", xs:14 }}}>
              {project.description}
            </Typography>

            <Stack direction="row" spacing={2} justifyContent="center">
              <Button
                variant="contained"
                // startIcon={<GitHubIcon />}
                onClick={() => window.open(project.gitHubLink, '_blank')}
                sx={{
                  width:{xs:160, sm:200},
                  px:3,
                  color: 'white',
                  borderRadius: '8px',
                  fontWeight: 500,
                  fontSize: { xs: '0.9rem', md: '1.125rem' },
                  bgcolor: '#24292e',
                  '&:hover': { bgcolor: '#1a1f24' },
                }}
              >
                <GitHubIcon sx={{mr:{sm:2, xs:1}, fontSize:{xs:17, sm:22}}} />
                GitHub
              </Button>
              <Button
                variant="contained"
                onClick={() => window.open(project.demoLink, '_blank')}
                sx={{
                  width:{xs:160, sm:200},
                  px:3,
                  color: 'white',
                  borderRadius: '8px',
                  fontWeight: 500,
                  fontSize:{ xs: '0.9rem', md: '1.125rem' },
                  bgcolor: '#0070f3',
                  '&:hover': { bgcolor: '#0051cc' },
                }}
              >
                <PreviewIcon sx={{mr:{sm:2, xs:1}, fontSize:{xs:17, sm:22}}} />
                View Demo
              </Button>
            </Stack>
          </ModalContent>
        </motion.div>
      </Modal>
    </>
  );
};

export default ProjectCard;

import { Box, Typography, Paper } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { SocialLink } from './styles';

const SocialLinks = () => {
  return (
    <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Connect With Me
      </Typography>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 3 }}>
        <SocialLink href="mailto:mahmoud.tamer.badr2000@gmail.com" target="_blank">
          <EmailIcon />
          <Typography>My Email</Typography>
        </SocialLink>

        <SocialLink href="https://www.linkedin.com/in/mahmoud-badr-b73516242" target="_blank">
          <LinkedInIcon />
          <Typography>LinkedIn Profile</Typography>
        </SocialLink>

        <SocialLink href="https://github.com/mahmoudbadr00" target="_blank">
          <GitHubIcon />
          <Typography>GitHub Profile</Typography>
        </SocialLink>
      </Box>
    </Paper>
  );
};

export default SocialLinks;
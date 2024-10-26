/* eslint-disable no-unused-vars */
import { Grid, Typography, IconButton, Box, Container } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();

  const socialLinks = [
    { icon: FacebookRoundedIcon, url: "https://www.facebook.com/mahmoud.tamer.904", label: "Facebook" },
    { icon: GitHubIcon, url: "https://github.com/mahmoudbadr00", label: "GitHub" },
    { icon: WhatsAppIcon, url: "https://wa.me/201159603177", label: "WhatsApp" },
    { icon: LinkedInIcon, url: "https://www.linkedin.com/in/mahmoud-badr-b73516242", label: "LinkedIn" },
    { icon: EmailIcon, url: "mailto:mahmoud.tamer.badr2000@gmail.com", label: "Email" }
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: theme.palette.mode === 'light' ? 'grey.900' : 'grey.900',
        color: 'white',
        mt: 10,
        py: 6,
        mb:-30,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: { xs: 'center', md: 'left' }, mb: 4 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 300,
              fontSize: { xs: '1.75rem', md: '2.125rem' }
            }}
          >
            Contact me
          </Typography>
        </Box>

        <Grid container spacing={2} justifyContent="center">
          {socialLinks.map((link, index) => (
            <Grid item xs={6} sm={4} md={2} key={link.label}>
              <IconButton
                href={link.url}
                aria-label={link.label}
                sx={{
                  color: 'grey.400',
                  transition: 'all 0.2s',
                  '&:hover': {
                    color: 'primary.main',
                    transform: 'translateY(-3px)'
                  }
                }}
              >
                <link.icon sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }} />
              </IconButton>
            </Grid>
          ))}
        </Grid>

        <Typography
          variant="body2"
          color="grey.500"
          align="center"
          sx={{ mt: 4 }}
        >
          © {new Date().getFullYear()} Mahmoud Badr. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

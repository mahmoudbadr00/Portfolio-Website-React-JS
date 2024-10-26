import { useState } from 'react';
import { Box, Container, Typography, Grid, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import ContactForm from '../Components/Contact/ContactForm';
import SocialLinks from '../Components/Contact/SocialLinks';

const Contact = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleSubmitSuccess = () => {
    setSnackbarMessage('Message sent successfully!');
    setSnackbarSeverity('success');
    setOpenSnackbar(true);
  };

  const handleSubmitError = () => {
    setSnackbarMessage('Error sending message. Please try again.');
    setSnackbarSeverity('error');
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ pt: 10, pb: 8 }}>
      <Container>
        <Typography
          variant="h2"
          textAlign="center"
          fontWeight="bold"
          sx={{ mb: 6, mt: 4 }}
        >
          Contact Me
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <ContactForm 
              onSubmitSuccess={handleSubmitSuccess}
              onSubmitError={handleSubmitError}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <SocialLinks />
          </Grid>
        </Grid>

        <Snackbar 
          open={openSnackbar} 
          autoHideDuration={6000} 
          onClose={handleCloseSnackbar}
        >
          <MuiAlert 
            elevation={6} 
            variant="filled" 
            severity={snackbarSeverity} 
            onClose={handleCloseSnackbar}
          >
            {snackbarMessage}
          </MuiAlert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Contact;
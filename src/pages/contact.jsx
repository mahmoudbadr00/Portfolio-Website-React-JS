/* eslint-disable no-unused-vars */
import { Box, Container, Typography, Grid, TextField, Button, Paper, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBywU96XsEhRoeP663Mf4d5C6kRv-JtxiI",
  authDomain: "portifolio-90aa7.firebaseapp.com",
  projectId: "portifolio-90aa7",
  storageBucket: "portifolio-90aa7.appspot.com",
  messagingSenderId: "1072932940228",
  appId: "1:1072932940228:web:97a0b94bc1515378d05c91"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ContactButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 3),
  fontSize: '1.1rem',
  fontWeight: 600,
  marginTop: theme.spacing(2),
}));

const SocialLink = styled('a')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  color: theme.palette.text.primary,
  textDecoration: 'none',
  padding: theme.spacing(1.5),
  borderRadius: theme.spacing(1),
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
}));

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {

      const docRef = await addDoc(collection(db, 'message'), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date()
      });


      setSnackbarMessage('Message sent successfully!');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);


      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {

      setSnackbarMessage('Error sending message. Please try again.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      console.error('Error adding document: ', error);
    }

    setIsSubmitting(false);
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
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Get in Touch
              </Typography>
              
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  margin="normal"
                  required
                  disabled={isSubmitting}
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  margin="normal"
                  required
                  disabled={isSubmitting}
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  margin="normal"
                  required
                  disabled={isSubmitting}
                />
                <ContactButton
                  type="submit"
                  variant="contained"
                  fullWidth
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </ContactButton>
              </form>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
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
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { TextField, Paper, Typography } from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { ContactButton } from './styles';

const ContactForm = ({ onSubmitSuccess, onSubmitError }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
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
      await addDoc(collection(db, 'message'), {
        ...formData,
        timestamp: new Date()
      });
      
      onSubmitSuccess();
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error adding document: ', error);
      onSubmitError();
    }

    setIsSubmitting(false);
  };

  return (
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
  );
};

export default ContactForm;
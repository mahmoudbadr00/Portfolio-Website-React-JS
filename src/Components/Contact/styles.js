import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const ContactButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 3),
  fontSize: '1.1rem',
  fontWeight: 600,
  marginTop: theme.spacing(2),
}));

export const SocialLink = styled('a')(({ theme }) => ({
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
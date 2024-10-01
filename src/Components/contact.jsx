import { Box, Container} from '@mui/material';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
const Contact = () => {
  return (
    <Box sx={{
      marginLeft: '3rem' 
    }}>
      <Typography fontWeight="bold" variant="h2" color='primary'>
        Contact
      </Typography>
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center' , width :"30%" , margin:'auto' }}>
    <Box
      component="form"
      sx={{
        
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-read-only-input"
          label="E-mail"
          defaultValue="mahmoud.tamer.badr2000@gmail.com"
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
      <div>
        <TextField
          id="outlined-read-only-input"
          label="Phone number"
          defaultValue="01159603177"
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
      <div>
        <TextField
          id="outlined-read-only-input"
          label="linkedin"
          defaultValue="www.linkedin.com/in/mahmoud-badr-b73516242"
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
      <div>
        <TextField
          id="outlined-read-only-input"
          label="GitHub"
          defaultValue="https://github.com/mahmoudbadr00"
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
    </Box>    
    </Container>
    </Box>
  );
}

export default Contact;


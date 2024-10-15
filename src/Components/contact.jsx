import { Typography, Box, Container, TextField, Grid, useTheme } from "@mui/material";

const Contact = () => {
  const theme = useTheme();
  return (
    <Box sx={{ padding: "2rem", backgroundColor: theme.palette.background.default }}>
      <Typography fontWeight="bold" variant="h2" color="primary" align="center">
        Contact
      </Typography>
      <Container maxWidth="md" sx={{ marginTop: "2rem" }}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 2, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="email"
                label="E-mail"
                defaultValue="mahmoud.tamer.badr2000@gmail.com"
                InputProps={{
                  readOnly: true,
                }}
                fullWidth
                sx={{
                  backgroundColor: theme.palette.background.paper,
                  color: theme.palette.text.primary,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="phone"
                label="Phone Number"
                defaultValue="01159603177"
                InputProps={{
                  readOnly: true,
                }}
                fullWidth
                sx={{
                  backgroundColor: theme.palette.background.paper,
                  color: theme.palette.text.primary,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="linkedin"
                label="LinkedIn"
                defaultValue="www.linkedin.com/in/mahmoud-badr-b73516242"
                InputProps={{
                  readOnly: true,
                }}
                fullWidth
                sx={{
                  backgroundColor: theme.palette.background.paper,
                  color: theme.palette.text.primary,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="github"
                label="GitHub"
                defaultValue="https://github.com/mahmoudbadr00"
                InputProps={{
                  readOnly: true,
                }}
                fullWidth
                sx={{
                  backgroundColor: theme.palette.background.paper,
                  color: theme.palette.text.primary,
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
export default Contact;


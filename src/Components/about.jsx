import { Typography, Box, Stack, Grid, Avatar ,useTheme } from "@mui/material";
const About = () => {
  const theme = useTheme();
  return (
    <Box sx={{ padding: '2rem', backgroundColor: theme.palette.background.default }}>
      <Typography fontWeight="bold" variant="h2" color="primary" align="center">
        About Me
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={5}
        justifyContent="center"
        alignItems="center"
        sx={{ margin: '2rem 0' }}
      >
        <Avatar
          src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/computer-coding.jpg"
          sx={{
            width: { xs: '80%', sm: '40%' },
            height: 'auto',
            borderRadius: '50%',
          }}
          alt="Profile Picture"
        />
        <Typography
          variant="h6"
          sx={{ width: { xs: '100%', sm: '40%' }, textAlign: 'justify' }}
          color={theme.palette.mode === 'dark' ? 'textPrimary' : 'textSecondary'}
        >
          Passionate Frontend and Cross-Platform Mobile Developer with a strong background in creating
          responsive and user-friendly applications. Proficient in modern technologies such as React, React Native, and Flutter, with a focus on delivering high-quality solutions. Dedicated to continuous learning and adapting to the latest industry trends to ensure innovative and efficient development.
        </Typography>
      </Stack>
      <Box sx={{ marginTop: '2rem' }}>
        <Typography variant="h4" fontWeight="bold" color="primary" align="center">
          Skills
        </Typography>
        <Grid container spacing={2} justifyContent="center" sx={{ marginTop: '1rem' }}>
          {["React", "React Native", "Flutter", "JavaScript", "CSS", "HTML"].map((skill, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <Box
                sx={{
                  padding: '1rem',
                  textAlign: 'center',
                  backgroundColor: theme.palette.background.paper,
                  boxShadow: 3,
                  borderRadius: '8px',
                }}
              >
                <Typography variant="h6" color="textPrimary">{skill}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ marginTop: '3rem' }}>
        <Typography variant="h4" fontWeight="bold" color="primary" align="center">
          Experience
        </Typography>
        <Grid container spacing={3} justifyContent="center" sx={{ marginTop: '1rem' }}>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ padding: '1rem',  backgroundColor: theme.palette.background.paper, boxShadow: 3, borderRadius: '8px' }}>
              <Typography variant="h6" color="textPrimary">Frontend Developer at ITI</Typography>
              <Typography variant="body2" color="textSecondary">
                Worked on various frontend projects using React and Material UI. Built responsive and interactive UIs.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ padding: '1rem',  backgroundColor: theme.palette.background.paper, boxShadow: 3, borderRadius: '8px' }}>
              <Typography variant="h6" color="textPrimary">Mobile Developer at ITI</Typography>
              <Typography variant="body2" color="textSecondary">
                Developed cross-platform mobile apps using Flutter and React Native, ensuring smooth user experience across devices.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ marginTop: '3rem' }}>
        <Typography variant="h4" fontWeight="bold" color="primary" align="center">
          Certifications
        </Typography>
        <Grid container spacing={3} justifyContent="center" sx={{ marginTop: '1rem' }}>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ padding: '1rem',  backgroundColor: theme.palette.background.paper, boxShadow: 3, borderRadius: '8px' }}>
              <Typography variant="h6" color="textPrimary">React Developer Certificate</Typography>
              <Typography variant="body2" color="textSecondary">
                Completed an extensive React development course covering hooks, state management, and advanced concepts.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ padding: '1rem',  backgroundColor: theme.palette.background.paper, boxShadow: 3, borderRadius: '8px' }}>
              <Typography variant="h6" color="textPrimary">Flutter Developer Certification</Typography>
              <Typography variant="body2" color="textSecondary">
                Earned certification in Flutter development, with a focus on building performant and scalable mobile apps.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default About;


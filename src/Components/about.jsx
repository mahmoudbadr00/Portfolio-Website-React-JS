import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";
const About = () => {
  
  return (
    <Box sx={{
      marginLeft: '3rem'
    }} >
      <Typography fontWeight="bold" variant="h2" color='primary'>
        About Me
      </Typography>
      <Stack direction="row" flexWrap='wrap' spacing={5} justifyContent='center' alignItems='center' sx={{margin: '1rem',}}> 
        <img
          src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/computer-coding.jpg"
          style={{ width: "40%", height: "29rem", borderRadius: "50%" }}
          alt=""
        />
        <Typography variant="h6" sx={{width:'40%'}} color="textSecondary" >
        Passionate Frontend and Cross-Platform Mobile Developer with a strong background in creating
        responsive and user-friendly applications.<br />
        Proficient in modern technologies such as React, React
        Native, and Flutter, with a focus on delivering high-quality solutions.  <br />
        Dedicated to continuous learning
        and adapting to the latest industry trends to ensure innovative and efficient development.
        </Typography>
      </Stack>
    </Box>
  );
};

export default About;

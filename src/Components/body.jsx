import { Box, Container, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
const projectData = [
  {
    title: 'E-learning Website',
    description: 'As an ITI Graduation Project: built using React and Next.js for purchasing courses, managing scholarships, and registering students and instructors. The website was designed to be intuitive, allowing both students and instructors to easily navigate and interact with the platform features.',
    imgPath: '/Capture.PNG',
    gitHubLink: 'https://github.com/mahmoudbadr00/E-Learning-Website-Next-React-JS-ITI-Graduation-Project'
  },
  {
    title: 'E-learning Mobile App',
    description: 'As a continuation of the e-learning platform, the mobile version was developed using React Native to offer students and instructors the same functionality as the web platform but optimized for mobile devices.',
    imgPath: '/e-learning-app.jpg',
    gitHubLink: 'https://github.com/mahmoudbadr00/E-learning-App-ITI-Graduation-Project-React-Native'
  },
  {
    title: 'Adopt Pets Website',
    description: 'A website built with React for adopting pets, featuring browsing options and detailed pet information.',
    imgPath: '/adopt.PNG',
    gitHubLink: 'https://github.com/mahmoudbadr00/Adopt-pets-website-React'
  },
  {
    title: 'Portfolio Website',
    description: 'A professional Portfolio Website using React and Material UI to showcase my skills, projects, and experiences.',
    imgPath: '/Potifolio.PNG',
    gitHubLink: 'https://github.com/mahmoudbadr00/Portfolio-Website-React-JS'
  },
  {
    title: 'News App (Flutter & API Integration)',
    description: 'Developed a news application using Flutter, featuring real-time updates from various news sources through API integration.',
    imgPath: '/maxresdefault.jpg',
    gitHubLink: 'https://github.com/mahmoudbadr00/News-APP-Flutter'
  },
  {
    title: 'Muslim App',
    description: 'A Flutter-based app featuring the complete Quran, supplications, Tasbeeh counter, and daily prayers.',
    imgPath: '/muslimpro.jpg',
    gitHubLink: 'https://github.com/mahmoudbadr00/Muslim-app-Flutter'
  },
  {
    title: 'To-Do App',
    description: 'A simple task management app built with React Native for adding and organizing daily to-do items.',
    imgPath: '/To-Do-List-App.jpg',
    gitHubLink: 'https://github.com/mahmoudbadr00/To-Do-App-React-Native'
  },
  {
    title: 'Admin Dashboard',
    description: 'Admin Dashboard built with Next.js and React.js for managing users, products, and displaying real-time statistics with a responsive design.',
    imgPath: '/admin-dashboard.png',
    gitHubLink: 'https://github.com/mahmoudbadr00/E-Learning-Website-Next-React-JS-ITI-Graduation-Project'
  }
];

const Body = () => {
  return (
    <Box>
      <Typography fontWeight="bold" variant="h2" color="primary" style={{ margin: "2rem", textAlign: "center" }}>
        My Projects
      </Typography>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {projectData.map((project, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} display="flex" justifyContent="center">
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea onClick={() => window.open(project.gitHubLink, '_blank')}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={project.imgPath}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
export default Body;

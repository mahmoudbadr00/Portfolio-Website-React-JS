import { Stack, Typography, IconButton } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Footer = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{ backgroundColor: "black", minHeight: "14rem" , marginTop: "10rem" }}
      alignItems="center"
    >
      <div>
        <Typography
          variant="h2"
          component="h2"
          color="secondary"
          fontWeight="300"
          fontFamily="Quicksand"
          margin="2rem"
        >
          Contact me :
        </Typography>
        
      </div>

      <Stack direction="row">
        <IconButton
          href="https://www.facebook.com/mahmoud.tamer.904"
          className="icon"
        >
          <FacebookRoundedIcon
            style={{ fontSize: "3.8rem", color: "#c5b5ff" }}
          />
        </IconButton>
        <IconButton href="https://github.com/mahmoudbadr00" className="icon">
          <GitHubIcon style={{ fontSize: "3.8rem", color: "#c5b5ff" }} />
        </IconButton>
        <IconButton
          href="https://wa.me/201159603177"
          sx={{ maxWidth:'3rem'}}
        >
          <WhatsAppIcon
            style={{ fontSize: "3.8rem", color: "#c5b5ff" }}
            className="icon"
          />
        </IconButton>
        <IconButton
          href="www.linkedin.com/in/mahmoud-badr-b73516242"
          className="icon"
        >
          <LinkedInIcon style={{ fontSize: "3.8rem", color: "#c5b5ff" }} />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Footer;

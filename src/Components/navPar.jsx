import { AppBar, Toolbar, Box, Link, Button } from '@mui/material';
import { Stack} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import { useEffect, useRef, useState } from "react";
import cv from "./Mahmoud Badr - Frontend Developer - CV.pdf";
import "./style.css";
import { Link as RouterLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NavPar = ({ toggleThem, them }) => {

  const [placeholder, setPlaceholder] = useState("");
  const [adding, setAdding] = useState(true);
  const [counter, setCounter] = useState(0);
  const [addButton, setAddbutton] = useState(false);
  const [string, setString] = useState(
    `Hii, I'm Mahmoud Badr, a Front-End and Cross Platform Mobile Developer With React, JavaScript, Flutter and React Native with experience for more than 2 years.     `
  );
  const index = useRef(0);

  useEffect(() => {
    function tick() {
      if (adding && counter < 2) {
        setPlaceholder((prev) => prev + string[index.current]);
        index.current++;
        if (index.current === string.length - 1) {
          setAdding(false);
        }
        if (counter === 1) {
          setCounter((pre) => pre + 1);
        }
      } else if (counter === 0) {
        index.current--;
        setPlaceholder((prev) => prev.slice(0, -1));
        if (index.current === 0) {
          setString(" Take a look at my CV :");
          setAdding(true);
          setCounter((pre) => pre + 1);
        }
      }
    }
    const intervalId = setInterval(tick, !adding ? 100 : 150);

    if (counter > 1) {
      setAddbutton(true);
    }
    return () => clearInterval(intervalId);
  }, [adding]);

  const [scrollY, setScrollY] = useState(0.1);
  window.onscroll = () => {
    window.scrollY > 97
      ? setScrollY(0)
      : window.scrollY < 97
      ? setScrollY(0.1)
      : null;
  };

  const BackgroundImage = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '60vh',
    position: 'relative',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: `url(${theme === 'light' ? '/myimg2.jpg' : '/myimg3.jpg'}) no-repeat center center/cover`,
  }));

  return (
    <>
      <Box>
        <BackgroundImage theme={them}>
          <AppBar
            sx={{
              marginTop: scrollY + "rem",
              backgroundColor: scrollY ? "transparent" : "black",
              color: "white",
            }}
          >
            <Toolbar>
              <Stack
                spacing={1.5}
                direction="row"
                display="flex"
                justifyContent="space-around"
                alignItems="center"
                sx={{
                  width: "100%",
                  margin: "0 auto",
                  position: "relative",
                }}
              >
                <Link component={RouterLink} to="/" color="inherit" sx={{ mx: 2, fontWeight: 'bold', textDecoration:"none" }}>Home</Link>
                <Link component={RouterLink} to="/about" color="inherit" sx={{ mx: 2, fontWeight: 'bold', textDecoration:"none" }}>About</Link>
                <Link component={RouterLink} to="/contact" color="inherit" sx={{ mx: 2, fontWeight: 'bold', textDecoration:"none" }}>Contact</Link>
              </Stack>
              <Stack direction="row" sx={{ width: '10%' }}>
                <Brightness7Icon />
                <input
                  type="checkbox"
                  onChange={() => toggleThem()}
                  className="checkbox"
                  id="checkbox"
                />
                <label
                  htmlFor="checkbox"
                  className="checkbox-label"
                  style={{
                    backgroundColor: them === "light" ? "#455a64" : "#90a4ae",
                  }}
                >
                  <i className="fas fa-moon" />
                  <i className="fas fa-sun" />
                  <span className="ball" />
                </label>
                <Brightness4Icon />
              </Stack>
            </Toolbar>
          </AppBar>
        </BackgroundImage>
        <Typography
        variant="h2"
        color='primary'
        sx={{
          textAlign: "center",
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '0',
        }}
      >
        Mahmoud Badr - Frontend Developer
      </Typography>
        <Box 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '0',
          }}
        >
          <Typography
            component="h2"
            align="center"
            sx={{
              width: "80%",
              fontFamily: "Quicksand",
              fontSize: {
                sm: "1.8rem",
                md: "2.3rem",
                lg: "2.5rem",
                xl: "2.6rem",
              },
            }}
          >
            {placeholder}
          </Typography>
          {addButton && (
            <a style={{display: 'flex', flexDirection: 'column',
            alignItems: 'center' , textDecoration:'none' }} href={cv} download="Mahmoud Badr - Frontend Developer - CV">
              <Button
                variant="contained"
                size="small"
                style={{ background: "grey", margin: '1rem' , width: '90%' }}
              >
                My CV
              </Button>
            </a>
          )}
        </Box>
      </Box>
    </>
  );
}

export default NavPar;
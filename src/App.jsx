import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavPar from "./Components/navPar"
import { useState } from "react";
import {
  Stack,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import { blueGrey} from "@mui/material/colors";
import Body from "./Components/body";
import About from "./Components/about";
import Contact from "./Components/contact";
import Footer from "./Components/footer";

function App() {
  const [them, setThem] = useState("light");
  const theme = createTheme({
    typography: {
      fontFamily: ["Quicksand", "sans-serif"],
      h3: {
        fontWeight: 500,
      },
      h6: {
        fontFamily: "Quicksand",
      },
    },
    palette: {
      mode: them,
      background: {
        default: them === "light" ? "#f9f9f9" : blueGrey[900], 
        paper: them === "light" ? "#fff" : blueGrey[800],
      },
      text: {
        primary: them === "light" ? "#000" : "#fff", 
        secondary: them === "light" ? "#555" : "#ccc",
      },
    },
  });
  const toggleThem = () => {
    setThem(them === "light" ? "dark" : "light");
    theme.palette.mode = them;
    them == "light"
      ? (theme.palette.background.default = blueGrey[900])
      : (theme.palette.background.default = "#374850");
    return them;
  };
  return (
    <Router>

<ThemeProvider theme={theme}>
      <CssBaseline>
        <NavPar toggleThem={toggleThem} them={them}></NavPar>
        <Routes>
        <Route path="/" />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
        <Stack
          direction="column"
          sx={{ marginTop: "8rem" }}
          gap={15}
          justifyContent="center"
          flexWrap="wrap"
        >
          <Body></Body>
        </Stack>
        <Footer></Footer>
      </CssBaseline>
    </ThemeProvider>
    </Router>
  )
}

export default App

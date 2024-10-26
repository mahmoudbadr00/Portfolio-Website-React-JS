import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import Navbar from "./Components/navPar";
import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import About from "./pages/about";
import Contact from "./pages/contact";
import Footer from "./Components/footer";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  const [theme, setTheme] = useState("light");
  
  const themeConfig = createTheme({
    typography: {
      fontFamily: ["Poppins", "sans-serif"],
      h3: {
        fontWeight: 600,
      },
      h6: {
        fontFamily: "Poppins",
      },
    },
    palette: {
      mode: theme,
      background: {
        default: theme === "light" ? "#f9f9f9" : blueGrey[900],
        paper: theme === "light" ? "#fff" : blueGrey[800],
      },
      text: {
        primary: theme === "light" ? "#000" : "#fff",
        secondary: theme === "light" ? "#555" : "#ccc",
      },
    },
  });

  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  };

  return (
    <Router>
      <ThemeProvider theme={themeConfig}>
        <CssBaseline />
        <ScrollToTop />
        <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
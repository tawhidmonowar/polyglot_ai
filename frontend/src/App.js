import './App.css';
import { Routes, Route } from "react-router-dom";
import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

import Navbar from './components/Navbar';
import Homepage from "./pages/Homepage";

function App() {

  const theme = useMemo(() => createTheme(themeSettings()), []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;

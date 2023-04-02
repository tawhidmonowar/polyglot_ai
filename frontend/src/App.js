import './App.css';
import { Routes, Route } from "react-router-dom";
import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

import Homepage from "./pages/Homepage";
import Function from "./pages/function_generator";

function App() {

  const theme = useMemo(() => createTheme(themeSettings()), []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/function_generator" element={<Function />} />
        </Routes>

      </ThemeProvider>
    </>
  );
}

export default App;

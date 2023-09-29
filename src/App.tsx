import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import Offers from "./pages/Offers";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Offers />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

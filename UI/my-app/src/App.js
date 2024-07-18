import logo from "./logo.svg";
import "./App.css";
// import LandingPage from "./pages/LandingPage";
import Home from "./pages/LandingPage";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Box className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} exact={true}></Route>
          <Route path={"/report"} element={<Home />} exact={true}></Route>
          <Route path={"/landingpage"} element={<LandingPage />} exact={true}></Route>
        </Routes>
      </BrowserRouter>
    
    </Box>

  );
}

export default App;

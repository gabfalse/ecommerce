import React from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import theme from "./Theme/theme";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Keranjang from "./Pages/Keranjang";
import MySectionPage from "./Pages/MySectionPage";
import Notification from "./Pages/Notification";
import NavigationButton from "./Components/NavigationButton";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="min-h-screen bg-background-default text-white pb-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/keranjang" element={<Keranjang />} />
          <Route path="/saya" element={<MySectionPage />} />
          <Route path="/notifikasi" element={<Notification />} />
        </Routes>
      </Box>

      <NavigationButton />
    </ThemeProvider>
  );
}

export default App;

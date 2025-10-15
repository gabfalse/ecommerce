import React, { useMemo, useState } from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { getAppTheme } from "./Theme/theme"; // ✅ import fungsi pembuat theme
import "./index.css";
import { Route, Routes } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import Keranjang from "./Pages/Keranjang";
import MySectionPage from "./Pages/MySectionPage";
import NotificationPage from "./Pages/NotificationPage";

import NavigationButton from "./Components/NavigationButton";
import Navbar from "./Components/Navbar";

function App() {
  // ✅ state untuk toggle light/dark
  const [mode, setMode] = useState("light");

  // ✅ memoized theme agar tidak re-render terus
  const theme = useMemo(() => getAppTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* ✅ Navbar dapat tombol toggle mode bila mau */}

      <Box sx={{ pt: { xs: 7, sm: 8 } }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/keranjang" element={<Keranjang />} />
          <Route path="/saya" element={<MySectionPage />} />
          <Route path="/notif" element={<NotificationPage />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;

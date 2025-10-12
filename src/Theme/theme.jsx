import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark", // mode gelap
    primary: {
      main: "#1E88E5",
    },
    secondary: {
      main: "#F50057",
    },
    background: {
      default: "#0d1117",
      paper: "#161b22",
    },
    text: {
      primary: "#ffffff",
      secondary: "#a0a0a0",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;

import { createTheme } from "@mui/material/styles";

// =====================
// PALETTE LIGHT (biru pastel sangat muda + biru tebal + kuning)
// =====================
const lightPalette = {
  mode: "light",
  primary: {
    light: "#DCEBFA", // 🌸 biru pastel sangat muda
    main: "#4F81C7", // 🌊 biru tebal/kuat
    contrastText: "#FFFFFF",
  },
  secondary: { main: "#FFFFFF", contrastText: "#4F81C7" },
  background: { default: "#F8FBFF", paper: "#FFFFFF" },
  text: { primary: "#2C3E50", secondary: "#5D6D7E" },
  divider: "#C9DAEC",
  action: {
    active: "#4F81C7",
    hover: "rgba(79, 129, 199, 0.08)",
    selected: "rgba(79, 129, 199, 0.16)",
  },
  tertiary: { main: "#F1C40F", contrastText: "#2C3E50" }, // 🌟 kuning ceria

  chat: {
    ownBg: "#DCEBFA",
    ownText: "#2C3E50",
    otherBg: "#FFFFFF",
    otherText: "#2C3E50",
  },
};

// =====================
// PALETTE DARK (biru pastel terang + biru bold + kuning)
// =====================
const darkPalette = {
  mode: "dark",
  primary: {
    light: "#5A8DEE", // biru lebih lembut untuk background
    main: "#82B1FF", // biru terang/bold
    contrastText: "#FFFFFF",
  },
  secondary: { main: "#1E1E1E", contrastText: "#E8F1FA" },
  background: { default: "#121212", paper: "#1E1E1E" },
  text: { primary: "#E8F1FA", secondary: "#A9C1E3" },
  divider: "#5A8DEE",
  action: {
    active: "#82B1FF",
    hover: "rgba(130, 177, 255, 0.12)",
    selected: "rgba(130, 177, 255, 0.24)",
  },
  tertiary: { main: "#F1C40F", contrastText: "#121212" }, // 🌟 kuning

  chat: {
    ownBg: "#82B1FF",
    ownText: "#FFFFFF",
    otherBg: "#2C2C2C",
    otherText: "#E8F1FA",
  },
};

// =====================
// FUNGSI BUAT THEME
// =====================
export const getAppTheme = (mode = "light") => {
  const palette = mode === "dark" ? darkPalette : lightPalette;

  return createTheme({
    palette: { ...palette },
    typography: {
      fontFamily: "Roboto, Arial, sans-serif",
      h1: { fontSize: "2.5rem", fontWeight: 700, color: palette.text.primary },
      h2: { fontSize: "2rem", fontWeight: 600, color: palette.text.primary },
      body1: { fontSize: "1rem", color: palette.text.primary },
      body2: { fontSize: "0.875rem", color: palette.text.secondary },
      button: { textTransform: "none", fontWeight: 600 },
    },
    shape: { borderRadius: 12 },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            textTransform: "none",
            "&:hover": { backgroundColor: palette.action.hover },
          },
        },
      },
      MuiPaper: {
        styleOverrides: { root: { backgroundImage: "none", borderRadius: 12 } },
      },
      MuiDivider: {
        styleOverrides: {
          root: { borderColor: palette.divider, borderWidth: "0.3px" },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow:
              mode === "light"
                ? "0 4px 12px rgba(0,0,0,0.08)"
                : "0 4px 12px rgba(0,0,0,0.5)",
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: palette.primary.main,
            color: palette.primary.contrastText,
            boxShadow: "none",
            borderRadius: 0, // ✅ Navbar tanpa border radius
          },
        },
      },
    },

    // =====================
    // ✅ CUSTOM STYLE UNTUK RESUME
    // =====================
    resumeStyles: {
      container: {
        fontFamily: "Arial, sans-serif",
        fontSize: "12px",
        color: mode === "dark" ? "#E8F1FA" : "#000",
        lineHeight: 1.3,
        backgroundColor: mode === "dark" ? "#1E1E1E" : "#fff",
        padding: "16px",
        maxWidth: "595px",
        margin: "0 auto",
      },
      header: { textAlign: "center", marginBottom: "8px" },
      h1: { fontSize: "36px", fontWeight: "bold", margin: 0 },
      h2: { fontSize: "16px", fontWeight: "bold", marginBottom: "4px" },
      p: { fontSize: "12px", margin: "2px 0" },
      ul: { paddingLeft: "18px", margin: 0 },
      li: { fontSize: "11px", marginBottom: "2px" },
      divider: {
        borderTop: "0.3px solid",
        margin: "8px 0",
        borderColor: palette.divider,
      },
      link: {
        textDecoration: "none",
        fontSize: "11px",
        color: palette.primary.main,
      },
    },
  });
};

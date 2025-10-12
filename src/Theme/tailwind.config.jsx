/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#1E88E5", // biru elegan
          light: "#42A5F5",
          dark: "#1565C0",
        },
        secondary: {
          main: "#F50057", // merah muda aksen
        },
        background: {
          default: "#0d1117", // abu tua khas dark mode
          paper: "#161b22",
        },
        textColor: {
          primary: "#ffffff",
          secondary: "#a0a0a0",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        nav: "0 -2px 10px rgba(0, 0, 0, 0.3)", // bayangan ke atas untuk efek "melayang"
      },
    },
  },
  plugins: [],
};

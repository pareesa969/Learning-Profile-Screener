import { createTheme } from "@mui/material/styles"

export const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#00BFFF", // electric blue
    },

    secondary: {
      main: "#6A0DAD", // deep purple
    },

    background: {
      default: "#0A0A1A", // main app background
      paper: "#1A1A2E",   // cards / panels
    },

    text: {
      primary: "#FFFFFF",
      secondary: "#D1CFE8",
    },
  },

  typography: {
    fontFamily: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
    ].join(","),

    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 10,
          fontWeight: 600,
          padding: "10px 20px",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#1A1A2E",
          borderRadius: 16,
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        },
      },
    },

    MuiRadio: {
      styleOverrides: {
        root: {
          color: "#6A0DAD",
        },
      },
    },

    MuiSlider: {
      styleOverrides: {
        thumb: {
          color: "#00BFFF",
        },
        track: {
          color: "#00BFFF",
        },
        rail: {
          color: "#444",
        },
      },
    },

    MuiLinearProgress: {
      styleOverrides: {
        bar: {
          backgroundColor: "#00BFFF",
        },
      },
    },
  },
})

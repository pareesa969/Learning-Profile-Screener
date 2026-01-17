import { createTheme } from "@mui/material/styles"

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00BFFF",
    },
    secondary: {
      main: "#6A0DAD",
    },
    background: {
      default: "#0A0A1A",
      paper: "#F5F0FF",
    },
  },
  typography: {
    fontFamily: "Inter, system-ui, sans-serif",
  },
  shape: {
    borderRadius: 12,
  },
})

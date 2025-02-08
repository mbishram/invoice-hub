// Needed to make theme work
"use client";

// ** MUI Imports
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3c50e0",
    },
    background: {
      default: "#f1f5f9",
      dark: "#1c2434",
    },
    text: {
      secondaryDark: "#9d9d9d",
    },
  },
  typography: {
    fontFamily: "var(--font-open-sans)",
  },
});

export default theme;

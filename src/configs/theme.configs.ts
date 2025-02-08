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
      dark: "#1c2434",
    },
  },
  typography: {
    fontFamily: "var(--font-open-sans)",
  },
});

export default theme;

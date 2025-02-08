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
});

export default theme;

// Needed to make theme work
"use client";

// ** MUI Imports
import { createTheme } from "@mui/material";

const theme = createTheme({
  // Default color schemes
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
  // Specific color schemes
  colorSchemes: {
    dark: {
      palette: {
        background: {
          default: "#19191a",
          dark: "#161f29",
        },
      },
    },
  },
  typography: {
    fontFamily: "var(--font-open-sans)",
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
        },
      },
    },
  },
  cssVariables: {
    colorSchemeSelector: "class",
  },
});

export default theme;

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
    success: {
      main: "#34d399",
    },
    warning: {
      main: "#ffa70b",
    },
    background: {
      default: "#f1f5f9",
      dark: "#1c2434",
    },
    text: {
      secondaryDark: "#9d9d9d",
    },
  },
  // Specific theme color schemes
  colorSchemes: {
    dark: {
      palette: {
        background: {
          default: "#13181c",
          paper: "#13181c",
          dark: "#162029",
        },
      },
    },
  },
  typography: {
    fontFamily: "var(--font-open-sans)",
    button: {
      textTransform: "initial",
      fontWeight: "600",
    },
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
    MuiTypography: {
      styleOverrides: {
        h1: { fontSize: "1.625rem", fontWeight: "700" },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: "1rem 1.5rem",
          borderBottom: "1px solid",
          borderBottomColor: "var(--mui-palette-divider)",
        },
        title: {
          fontSize: "1rem",
          fontWeight: "600",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "1.25rem 1.5rem",
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: "0 1.5rem 1.5rem",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { paddingLeft: "3rem", paddingRight: "3rem" },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: { overflow: "hidden" },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: { paddingTop: "0.75rem", paddingBottom: "0.75rem" },
      },
    },
    MuiTextField: {
      defaultProps: { fullWidth: true, size: "medium" },
    },
    MuiAlert: {
      styleOverrides: {
        icon: {
          marginRight: "1rem",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
        },
        head: {
          fontWeight: "600",
          backgroundColor: "var(--mui-palette-background-default)",
        },
      },
    },
  },
  cssVariables: {
    colorSchemeSelector: "class",
  },
});

export default theme;

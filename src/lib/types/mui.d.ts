// ** MUI Imports
import "@mui/material/styles";

declare module "@mui/material/styles" {
  // Extend theme definition
  interface TypeBackground {
    dark: string;
  }

  interface TypeText {
    secondaryDark: string;
  }
}

import "@mui/material/styles";

declare module "@mui/material/styles" {
  // Extend theme background definition
  interface TypeBackground {
    dark: string;
  }
}

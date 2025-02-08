"use client";

// ** MUI Imports
import { useMediaQuery, useTheme } from "@mui/material";

export function useIsMobile() {
  // Hooks
  const theme = useTheme();

  return useMediaQuery(theme.breakpoints.down("md"), { noSsr: true });
}

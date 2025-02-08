"use client";

// ** MUI Imports
import { Button } from "@mui/material";

// ** Store Imports
import { setSideNav } from "@/stores/sideNav.store";

export default function SideNavToggleButton() {
  // Hooks
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  return (
    <OutlinedIconButton
      color="inherit"
      aria-label="Toggle side navigation"
      onClick={() => setSideNav(true)}
    >
      <Menu />
    </OutlinedIconButton>
  );
}

"use client";

// ** MUI Imports
import { Button } from "@mui/material";

// ** Store Imports
import { toggleSideNav } from "@/stores/sideNav.store";

export default function SideNavToggleButton() {
  return <Button onClick={() => toggleSideNav(true)}>Test</Button>;
}

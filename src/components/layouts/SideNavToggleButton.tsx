"use client";

// ** Component Imports
import OutlinedIconButton from "@/components/ui/OutlinedIconButton";

// ** Store Imports
import { setSideNav } from "@/stores/sideNav.stores";

// ** Icon Imports
import { Menu } from "@mui/icons-material";

// ** Hook Imports
import { useIsMobile } from "@/hooks/useIsMobile";

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

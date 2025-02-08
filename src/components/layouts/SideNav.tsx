"use client";

// ** MUI Imports
import { Box, Drawer, IconButton, List } from "@mui/material";

// ** Component Imports
import SideNavLogo from "@/components/layouts/SideNavLogo";
import SideNavLinkHeader from "@/components/layouts/SideNavLinkHeader";
import SideNavLinkItem from "@/components/layouts/SideNavLinkItem";

// ** Icon Imports
import { Close } from "@mui/icons-material";
import ListCheck from "@/components/icons/ListCheck";
import CapitalLetter from "@/components/icons/CapitalLetter";

// ** Hook Imports
import { useIsMobile } from "@/hooks/useIsMobile";

// ** Store Imports
import useSideNavStore, { setSideNav } from "@/stores/sideNav.store";

// ** Constant Imports
import { APP_SIDE_NAV_WIDTH } from "@/constants/app.constants";

export default function SideNav() {
  // Hook
  const { open } = useSideNavStore();
  const isMobile = useIsMobile();

  // Vars
  const handleClose = () => setSideNav(false);

  return (
    <Box width={{ md: APP_SIDE_NAV_WIDTH }}>
      {open && isMobile && (
        <IconButton
          size="small"
          sx={{
            position: "fixed",
            top: "0.5rem",
            right: "0.5rem",
            zIndex: "tooltip",
            color: "white",
          }}
          aria-label="Close navigation"
        >
          <Close fontSize="large" onClick={handleClose} />
        </IconButton>
      )}
      <Drawer
        open={open}
        onClose={handleClose}
        sx={(theme) => ({
          "& .MuiDrawer-paper": {
            width: { sm: APP_SIDE_NAV_WIDTH, xs: "100%" },
            bgcolor: "background.dark",
            color: theme.palette.getContrastText(theme.palette.background.dark),
          },
        })}
        variant={isMobile ? "temporary" : "permanent"}
      >
        <SideNavLogo py={3} px={4} mb={2} />

        <SideNavLinkHeader mb={1}>Menu</SideNavLinkHeader>
        <List sx={{ display: "grid", gap: 1 }}>
          <SideNavLinkItem
            icon={<CapitalLetter />}
            href="/invoices/add"
            title="Add Invoice"
          />
          <SideNavLinkItem
            icon={<ListCheck />}
            href="/invoices/list"
            title="My Invoice"
          />
        </List>
      </Drawer>
    </Box>
  );
}

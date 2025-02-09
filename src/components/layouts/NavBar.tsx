"use client";

// ** MUI Imports
import { AppBar, Badge, Box, Toolbar } from "@mui/material";

// ** Component Imports
import SideNavToggleButton from "@/components/layouts/SideNavToggleButton";
import OutlinedIconButton from "@/components/ui/OutlinedIconButton";
import NavBarAvatar from "@/components/layouts/NavBarAvatar";
import NavBarThemeModeSwitch from "@/components/layouts/NavBarThemeModeSwitch";

// ** Icon Imports
import Alarm from "@/components/icons/Alarm";
import Chat from "@/components/icons/Chat";

// ** Third Party Imports
import toast from "react-hot-toast";

export default function NavBar() {
  // Vars
  const notYetImplementedHandler = () =>
    toast.error(
      "This feature hasn't been implemented yet 😔. We're working hard on it! 💪",
    );

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "background.paper",
        color: "text.primary",
        borderBottomStyle: "solid",
        borderBottomWidth: 1,
        borderBottomColor: "divider",
      }}
    >
      <Toolbar sx={{ gap: 3 }}>
        <SideNavToggleButton />

        <Box ml="auto" display="flex" alignItems="center">
          <NavBarThemeModeSwitch sx={{ mr: 3 }} />

          <OutlinedIconButton
            color="inherit"
            aria-label="Notification"
            onClick={notYetImplementedHandler}
            sx={{ mr: 2 }}
          >
            <Alarm />
          </OutlinedIconButton>
          <Badge overlap="circular" variant="dot" color="error">
            <OutlinedIconButton
              color="inherit"
              aria-label="Notification"
              onClick={notYetImplementedHandler}
            >
              <Chat />
            </OutlinedIconButton>
          </Badge>

          <NavBarAvatar
            ml={3}
            sx={{ cursor: "pointer" }}
            onClick={notYetImplementedHandler}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

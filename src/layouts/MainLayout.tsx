// ** MUI Imports
import { Box, BoxProps } from "@mui/material";

// ** Component Imports
import SideNav from "@/components/layouts/SideNav";
import SideNavToggleButton from "@/components/layouts/SideNavToggleButton";

// ** Constant Imports
import { APP_SIDE_NAV_WIDTH } from "@/constants/app.constants";

export default function MainLayout({ children, ...props }: BoxProps) {
  return (
    <Box display="flex" flexGrow={1} {...props}>
      <SideNav />
      <Box
        width={{ md: `calc(100% - ${APP_SIDE_NAV_WIDTH})` }}
        display="flex"
        flexDirection="column"
        flexGrow={1}
      >
        <SideNavToggleButton />
        <Box display="flex" flexGrow={1}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}

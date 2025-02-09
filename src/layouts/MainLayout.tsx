// ** MUI Imports
import { Box, BoxProps, Container } from "@mui/material";

// ** Component Imports
import SideNav from "@/components/layouts/SideNav";
import NavBar from "@/components/layouts/NavBar";

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
        <NavBar />
        <Container
          sx={{ display: "flex", flexDirection: "column", flexGrow: 1, py: 6 }}
        >
          {children}
        </Container>
      </Box>
    </Box>
  );
}

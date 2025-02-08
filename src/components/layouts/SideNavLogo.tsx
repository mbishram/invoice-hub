// ** Next Imports
import Image from "next/image";

// ** MUI Imports
import { Box, BoxProps } from "@mui/material";

// ** Asset Imports
import logo from "@/assets/images/logo.svg";

// ** Config Imports
import { passionOne } from "@/configs/font.configs";

// ** Constant Imports
import { APP_NAME } from "@/constants/app.constants";

export default function SideNavLogo(props: Omit<BoxProps, "children">) {
  return (
    <Box
      className={passionOne.className}
      display="flex"
      gap={1.5}
      alignItems="center"
      fontSize="1.5rem"
      {...props}
    >
      <Image src={logo} alt={`${APP_NAME}'s logo`} height={44} />
      {APP_NAME}
    </Box>
  );
}

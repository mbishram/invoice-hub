// ** Next Imports
import Image from "next/image";

// ** MUI Imports
import { Box, BoxProps } from "@mui/material";

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
      <Image
        src="/images/logo.svg"
        alt={`${APP_NAME}'s logo`}
        height={44}
        width={42}
      />
      {APP_NAME}
    </Box>
  );
}

// ** MUI Imports
import { Avatar, Box, BoxProps, Typography } from "@mui/material";

// ** Icon Imports
import { KeyboardArrowDown } from "@mui/icons-material";

export default function NavBarAvatar(props: Omit<BoxProps, "children">) {
  return (
    <Box display="flex" alignItems="center" {...props}>
      <Box textAlign="right" display={{ sm: "block", xs: "none" }} mr={2}>
        <Typography fontWeight="600">John Does</Typography>
        <Typography variant="body2" fontWeight="600" color="text.secondary">
          Verified Member
        </Typography>
      </Box>
      <Avatar
        src="/images/avatar.png"
        alt="John Does"
        sx={{ width: 46, height: 46, mr: 1 }}
      />
      <KeyboardArrowDown />
    </Box>
  );
}

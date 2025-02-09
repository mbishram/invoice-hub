// ** MUI Imports
import { Typography, TypographyProps } from "@mui/material";

export default function SideNavLinkHeader({
  children,
  ...props
}: TypographyProps) {
  return (
    <Typography
      variant="body2"
      color="text.secondaryDark"
      px={4}
      fontWeight="600"
      textTransform="uppercase"
      {...props}
    >
      {children}
    </Typography>
  );
}

// ** MUI Imports
import { Typography, TypographyProps } from "@mui/material";

export default function SideNavLinkHeader({
  children,
  ...props
}: TypographyProps) {
  return (
    <Typography
      variant="button"
      color="text.secondaryDark"
      px={4}
      fontWeight="600"
      {...props}
    >
      {children}
    </Typography>
  );
}

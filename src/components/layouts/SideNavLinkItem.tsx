// ** React Imports
import { ReactNode } from "react";

// ** Next Imports
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

// ** MUI Imports
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemProps,
  ListItemText,
} from "@mui/material";

type SideNavLinkItemProps = Omit<
  {
    icon?: ReactNode;
    title: string;
  } & ListItemProps &
    LinkProps,
  "children"
>;

export default function SideNavLinkItem({
  icon,
  href,
  title,
  ...props
}: SideNavLinkItemProps) {
  // Hooks
  const pathname = usePathname();

  // Vars
  const isActive = href === pathname;

  return (
    <ListItem
      component={Link}
      href={href}
      disablePadding
      sx={{ color: isActive ? "white" : "text.secondaryDark" }}
      {...props}
    >
      <ListItemButton sx={{ px: 4 }}>
        {icon && (
          <ListItemIcon sx={{ minWidth: "unset", mr: 1.5, color: "inherit" }}>
            {icon}
          </ListItemIcon>
        )}
        <ListItemText
          primary={title}
          slotProps={{
            primary: {
              sx: {
                fontWeight: "600",
              },
            },
          }}
        />
      </ListItemButton>
    </ListItem>
  );
}

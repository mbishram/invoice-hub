// ** MUI Imports
import { IconButton, IconButtonProps } from "@mui/material";
import { SystemStyleObject } from "@mui/system";

export default function OutlinedIconButton({ sx, ...props }: IconButtonProps) {
  return (
    <IconButton
      sx={[
        {
          bgcolor: "grey.200",
          borderStyle: "solid",
          borderWidth: 1,
          borderColor: "divider",
          ...(sx as SystemStyleObject),
        },
        (theme) =>
          theme.applyStyles("dark", {
            bgcolor: "grey.800",
          }),
      ]}
      {...props}
    />
  );
}

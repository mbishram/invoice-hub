// ** MUI Imports
import { TextField, TextFieldProps } from "@mui/material";

// ** Util Imports
import { getSelectPlaceholderSX } from "@/utils/ui.utils";

export default function ToolbarTextField({ sx, ...props }: TextFieldProps) {
  return (
    <TextField
      sx={{
        "& .MuiInputBase-root": {
          borderRadius: "10px",
          backgroundColor: "background.paper",
          backgroundImage: "var(--mui-overlays-4)",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        ...getSelectPlaceholderSX(props.select, props.placeholder),
        ...sx,
      }}
      {...props}
    />
  );
}

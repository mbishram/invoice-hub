// ** MUI Imports
import { BaseTextFieldProps, Box, BoxProps, Typography } from "@mui/material";

export type LabeledFieldGroupProps = Pick<
  BaseTextFieldProps,
  "label" | "name" | "required"
> &
  BoxProps;
export default function LabeledFieldGroup({
  label,
  name,
  required,
  children,
  sx,
  ...props
}: LabeledFieldGroupProps) {
  return (
    <Box
      sx={{
        // Update styling of component with start adornment
        "& .MuiInputBase-adornedStart": {
          "&.MuiInputBase-root": {
            paddingLeft: 0,
            alignItems: "unset",
          },
          "& .MuiInputAdornment-root": {
            backgroundColor: "var(--mui-palette-divider)",
            maxHeight: "unset",
            padding: "0 1.5rem",
            margin: 0,
          },
        },
        "& .MuiOutlinedInput-input": {
          px: "1.25rem",
        },
        ...sx,
      }}
      {...props}
    >
      {label && (
        <Typography
          component="label"
          htmlFor={name}
          variant="body2"
          fontWeight="600"
          display="block"
          mb={1.5}
        >
          {label}
          {required && (
            <Box
              component="span"
              aria-label="Required"
              ml={0.5}
              color="error.main"
            >
              *
            </Box>
          )}
        </Typography>
      )}
      {children}
    </Box>
  );
}

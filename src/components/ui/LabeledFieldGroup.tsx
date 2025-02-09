// ** MUI Imports
import { BaseTextFieldProps, Box, BoxProps, Typography } from "@mui/material";

type LabeledFieldGroupProps = Pick<
  BaseTextFieldProps,
  "label" | "name" | "required"
> &
  BoxProps;
export default function LabeledFieldGroup({
  label,
  name,
  required,
  children,
  ...props
}: LabeledFieldGroupProps) {
  return (
    <Box {...props}>
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

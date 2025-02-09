// ** MUI Imports
import { TextField, TextFieldProps } from "@mui/material";

// ** Component Imports
import LabeledFieldGroup, {
  LabeledFieldGroupProps,
} from "@/components/ui/LabeledFieldGroup";

export type LabeledTextFieldProps = TextFieldProps & {
  GroupProps?: LabeledFieldGroupProps;
};

export default function LabeledTextField({
  label,
  name,
  sx,
  GroupProps,
  ...props
}: LabeledTextFieldProps) {
  return (
    <LabeledFieldGroup
      label={label}
      name={name}
      required={props.required}
      {...GroupProps}
    >
      <TextField
        id={name}
        name={name}
        sx={{
          // To add placeholder for select field
          ...(props.select &&
            props.placeholder && {
              "& .MuiSelect-select span::before": {
                content:
                  props.select && props.placeholder
                    ? `'${props.placeholder}'`
                    : undefined,
                color: "grey.400",
              },
            }),
          ...sx,
        }}
        {...props}
      />
    </LabeledFieldGroup>
  );
}

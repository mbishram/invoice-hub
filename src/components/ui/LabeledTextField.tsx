// ** MUI Imports
import { TextField, TextFieldProps } from "@mui/material";

// ** Component Imports
import LabeledFieldGroup, {
  LabeledFieldGroupProps,
} from "@/components/ui/LabeledFieldGroup";

type LabeledTextFieldProps = TextFieldProps & {
  GroupProps?: LabeledFieldGroupProps;
};

export default function LabeledTextField({
  label,
  name,
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
      <TextField id={name} name={name} {...props} />
    </LabeledFieldGroup>
  );
}

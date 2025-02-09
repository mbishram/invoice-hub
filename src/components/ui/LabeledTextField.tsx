// ** MUI Imports
import { TextField, TextFieldProps } from "@mui/material";

// ** Component Imports
import LabeledFieldGroup from "@/components/ui/LabeledFieldGroup";

export default function LabeledTextField({
  label,
  name,
  ...props
}: TextFieldProps) {
  return (
    <LabeledFieldGroup label={label} name={name} required={props.required}>
      <TextField id={name} name={name} {...props} />
    </LabeledFieldGroup>
  );
}

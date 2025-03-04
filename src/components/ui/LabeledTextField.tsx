// ** MUI Imports
import { TextField, TextFieldProps } from "@mui/material";

// ** Component Imports
import LabeledFieldGroup, {
  LabeledFieldGroupProps,
} from "@/components/ui/LabeledFieldGroup";
import FieldController from "@/components/ui/FieldController";

// ** Third Party Imports
import { Control, FieldValues, Path } from "react-hook-form";

// ** Util Imports
import { getSelectPlaceholderSX } from "@/utils/ui.utils";

export type LabeledTextFieldProps<TRegister extends FieldValues> =
  TextFieldProps & {
    GroupProps?: LabeledFieldGroupProps;
    control?: Control<TRegister>;
  };

export default function LabeledTextField<TRegister extends FieldValues>({
  label,
  name,
  required,
  sx,
  GroupProps,
  control,
  ...props
}: LabeledTextFieldProps<TRegister>) {
  return (
    <LabeledFieldGroup
      label={label}
      name={name}
      required={required}
      {...GroupProps}
    >
      <FieldController
        control={control}
        name={name as Path<TRegister>}
        render={(fieldProps, { fieldState }) => (
          <TextField
            id={name}
            sx={{
              ...getSelectPlaceholderSX(props.select, props.placeholder),
              ...sx,
            }}
            error={!!fieldState?.error}
            helperText={
              !!fieldState?.error ? fieldState.error.message : props.helperText
            }
            {...fieldProps}
            {...props}
          />
        )}
      />
    </LabeledFieldGroup>
  );
}

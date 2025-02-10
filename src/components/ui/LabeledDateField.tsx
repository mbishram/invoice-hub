// Needed to use @mui date field
"use client";

// ** MUI Imports
import {
  DateField,
  DateFieldProps,
  PickerValidDate,
} from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";

// ** Component Imports
import LabeledFieldGroup, {
  LabeledFieldGroupProps,
} from "@/components/ui/LabeledFieldGroup";
import FieldController from "@/components/ui/FieldController";

// ** Third Party Imports
import { Control, FieldValues, Path } from "react-hook-form";

type LabeledDateFieldProps<
  TDate extends PickerValidDate,
  TRegister extends FieldValues,
> = DateFieldProps<TDate> & {
  GroupProps?: LabeledFieldGroupProps;
  control?: Control<TRegister>;
};

export default function LabeledDateField<
  TDate extends PickerValidDate,
  TRegister extends FieldValues,
>({
  label,
  name,
  GroupProps,
  control,
  ...props
}: LabeledDateFieldProps<TDate, TRegister>) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <LabeledFieldGroup
        label={label}
        name={name}
        required={props.required}
        {...GroupProps}
      >
        <FieldController
          control={control}
          name={name as Path<TRegister>}
          render={({ onChange, ...fieldProps }) => (
            <DateField
              id={name}
              {...fieldProps}
              onChange={(value) => onChange?.(value)}
              {...props}
            />
          )}
        />
      </LabeledFieldGroup>
    </LocalizationProvider>
  );
}

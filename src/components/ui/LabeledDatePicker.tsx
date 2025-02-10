// Needed to use @mui date field
"use client";

// ** MUI Imports
import {
  DateFieldProps,
  DatePicker,
  DatePickerProps,
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

type LabeledDatePickerProps<
  TDate extends PickerValidDate,
  TRegister extends FieldValues,
> = DatePickerProps<TDate> &
  Pick<DateFieldProps<TDate>, "id" | "required" | "helperText"> & {
    GroupProps?: LabeledFieldGroupProps;
    control?: Control<TRegister>;
  };

export default function LabeledDatePicker<
  TDate extends PickerValidDate,
  TRegister extends FieldValues,
>({
  label,
  name,
  id,
  required,
  helperText,
  GroupProps,
  control,
  ...props
}: LabeledDatePickerProps<TDate, TRegister>) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <LabeledFieldGroup
        label={label}
        name={name}
        required={required}
        {...GroupProps}
      >
        <FieldController
          control={control}
          name={name as Path<TRegister>}
          render={({ onChange, ...fieldProps }, { fieldState }) => (
            <DatePicker
              {...fieldProps}
              onChange={(value) => onChange?.(value)}
              slotProps={{
                field: { id: id ?? name },
                textField: {
                  error: !!fieldState?.error,
                  helperText: !!fieldState?.error
                    ? fieldState.error.message
                    : helperText,
                },
              }}
              {...props}
            />
          )}
        />
      </LabeledFieldGroup>
    </LocalizationProvider>
  );
}

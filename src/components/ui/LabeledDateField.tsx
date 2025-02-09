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

type LabeledDateFieldProps<TDate extends PickerValidDate> =
  DateFieldProps<TDate> & { GroupProps?: LabeledFieldGroupProps };

export default function LabeledDateField<TDate extends PickerValidDate>({
  label,
  name,
  GroupProps,
  ...props
}: LabeledDateFieldProps<TDate>) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <LabeledFieldGroup
        label={label}
        name={name}
        required={props.required}
        {...GroupProps}
      >
        <DateField id={name} name={name} {...props} />
      </LabeledFieldGroup>
    </LocalizationProvider>
  );
}

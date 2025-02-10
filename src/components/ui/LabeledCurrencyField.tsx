// Needed for useNumberFormat hook
"use client";

// ** MUI Imports
import { InputAdornment } from "@mui/material";

// ** Component Imports
import LabeledTextField, {
  LabeledTextFieldProps,
} from "@/components/ui/LabeledTextField";

// ** Third Party Imports
import { useNumberFormat } from "@react-input/number-format";
import { FieldValues } from "react-hook-form";

// ** Constant Imports
import { APP_LOCALES } from "@/constants/app.constants";

/**
 * When using controlled field, remember to use "unformat" method from "@react-input/number-format" to get the unformatted version of the value
 * @constructor
 */
export default function LabeledCurrencyField<TRegister extends FieldValues>(
  props: Omit<LabeledTextFieldProps<TRegister>, "inputRef">,
) {
  // Hook
  const inputRef = useNumberFormat({
    locales: APP_LOCALES,
    maximumFractionDigits: 0,
  });

  return (
    <LabeledTextField
      inputRef={inputRef}
      slotProps={{
        input: {
          startAdornment: <InputAdornment position="start">Rp</InputAdornment>,
        },
      }}
      {...props}
    />
  );
}

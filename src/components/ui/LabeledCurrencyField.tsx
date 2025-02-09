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

export default function LabeledCurrencyField(
  props: Omit<LabeledTextFieldProps, "inputRef">,
) {
  // Hook
  const inputRef = useNumberFormat({ locales: "id", maximumFractionDigits: 0 });

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

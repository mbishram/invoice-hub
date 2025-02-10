// ** MUI Imports
import { Theme } from "@mui/material";
import { SystemStyleObject } from "@mui/system";

// ** Constant Imports
import { APP_CURRENCY, APP_LOCALES } from "@/constants/app.constants";

/**
 * To initiate placeholder for select field, can only be used on "sx" props on @mui
 * @param select {boolean}
 * @param placeholder {string}
 */
export const getSelectPlaceholderSX = (
  select?: boolean,
  placeholder?: string,
): SystemStyleObject<Theme> =>
  !!select && !!placeholder
    ? {
        "& .MuiSelect-select span::before": {
          content: select && placeholder ? `'${placeholder}'` : undefined,
          color: "grey.400",
        },
      }
    : {};

/**
 * Format number to currency string
 * @param amount {number}
 */
export const formatCurrency = (amount: number) =>
  new Intl.NumberFormat(APP_LOCALES, {
    style: "currency",
    currency: APP_CURRENCY,
    maximumFractionDigits: 0,
  }).format(amount);

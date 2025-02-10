// ** MUI Imports
import { Theme } from "@mui/material";
import { SystemStyleObject } from "@mui/system";

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

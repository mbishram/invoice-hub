// ** Component Imports
import { InlineAlertProps } from "@/components/ui/InlineAlert";

export type Alert = Pick<
  InlineAlertProps,
  "hidden" | "severity" | "header" | "content"
>;

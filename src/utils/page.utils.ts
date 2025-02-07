// ** Constant Imports
import { APP_NAME } from "@/constants/app.constants";

/**
 * Get formatted page title metadata
 * @param title {string} - Title without app name
 */
export const getTitleMeta = (title?: string) =>
  (title ? `${title} - ` : "") + APP_NAME;

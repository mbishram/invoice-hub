// ** Third Party Imports
import { format } from "date-fns";

// ** Constant Imports
import { INVOICE_NUMBER_PREFIX } from "@/constants/invoices.constants";

/**
 * Generate invoice number
 */
export const generateInvoiceNumber = () =>
  `${INVOICE_NUMBER_PREFIX}-${format(new Date(), "yyLLdd")}-${String(Math.random()).substring(2, 6)}`;

// ** Third Party Imports
import { endOfMonth, format, startOfMonth } from "date-fns";

// ** Schema Imports
import dbV1 from "@/lib/schemas/v1.schemas";

// ** Constant Imports
import { INVOICE_NUMBER_PREFIX } from "@/constants/invoices.constants";

/**
 * Generate invoice number
 */
export const generateInvoiceNumber = async () => {
  try {
    const currentMonthCount = await dbV1.invoices
      .where("createdAt")
      .between(startOfMonth(new Date()), endOfMonth(new Date()), true, true)
      .count();
    let countString = "000" + (currentMonthCount + 1);
    countString = countString.substring(countString.length - 4);
    return `${INVOICE_NUMBER_PREFIX}${format(new Date(), "yyyyLL")}${countString}`;
  } catch {
    return `${INVOICE_NUMBER_PREFIX}${format(new Date(), "yyyyLL")}0001`;
  }
};

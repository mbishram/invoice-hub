// ** Type Imports
import { FieldOptions } from "@/lib/types/form";
import { InvoiceStatus } from "@/lib/types/invoiceStatus";

export const INVOICE_STATUS_OPTIONS: FieldOptions<InvoiceStatus>[] = [
  { value: "PENDING", label: "Pending" },
  { value: "PAID", label: "Paid" },
  { value: "UNPAID", label: "Unpaid" },
] as const;

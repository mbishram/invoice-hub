// ** Type Imports
import { InvoiceStatus } from "@/lib/types/invoiceStatus";

export type Invoice = {
  id: number;
  name: string;
  number: string;
  dueDate: Date | "";
  amount: string;
  status: InvoiceStatus | "";
};

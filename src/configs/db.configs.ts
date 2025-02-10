// ** Third Party Imports
import Dexie, { EntityTable } from "dexie";

// ** Type Imports
import { Invoice } from "@/lib/types/invoice";

const db = new Dexie("invoiceHub") as Dexie & {
  invoices: EntityTable<Invoice, "id">;
};

export default db;

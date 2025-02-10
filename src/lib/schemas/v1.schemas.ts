// ** Config Imports
import dbV1 from "@/configs/db.configs";

dbV1.version(1).stores({
  invoices: "++id, name, number, dueDate, amount, status",
});

// Reexport to get db version with schema added
export default dbV1;

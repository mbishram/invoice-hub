// ** Next Imports
import { redirect } from "next/navigation";

export default function Home() {
  // Redirect to /invoice/add when opening web root.
  // This was done because there's nothing in web root.
  redirect("/invoices/add");
}

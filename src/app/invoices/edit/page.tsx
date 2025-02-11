// ** Next Imports
import type { Metadata } from "next";
import { redirect, RedirectType } from "next/navigation";

// ** Util Imports
import { getTitleMeta } from "@/utils/page.utils";

export const metadata: Metadata = {
  title: getTitleMeta("Edit Invoice"),
};

export default function InvoicesEditIndex() {
  redirect("/invoices/list", RedirectType.replace);
}

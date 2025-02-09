// ** Next Imports
import type { Metadata } from "next";

// ** MUI Imports
import { Typography } from "@mui/material";

// ** Component Imports
import InvoicesAddForm from "@/components/invoices/add/InvoicesAddForm";

// ** Util Imports
import { getTitleMeta } from "@/utils/page.utils";

export const metadata: Metadata = {
  title: getTitleMeta("Add Invoice"),
};

export default function InvoicesAdd() {
  return (
    <>
      <Typography variant="h1" mb={4}>
        Add Invoice
      </Typography>
      <InvoicesAddForm />
    </>
  );
}

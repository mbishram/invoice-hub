// ** Next Imports
import type { Metadata } from "next";

// ** MUI Imports
import { Typography } from "@mui/material";

// ** Component Imports
import InvoicesForm from "@/components/invoices/InvoicesForm";

// ** Util Imports
import { getTitleMeta } from "@/utils/page.utils";

type InvoicesEditProps = { params: Promise<{ id: string }> };

export const metadata: Metadata = {
  title: getTitleMeta("Edit Invoice"),
};

export default async function InvoicesEdit({ params }: InvoicesEditProps) {
  return (
    <>
      <Typography variant="h1" mb={4}>
        Edit Invoice
      </Typography>
      <InvoicesForm id={Number((await params).id)} />
    </>
  );
}

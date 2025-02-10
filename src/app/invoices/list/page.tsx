// ** React Imports
import { Suspense } from "react";

// ** Next Imports
import type { Metadata } from "next";

// ** MUI Imports
import { Box, Typography } from "@mui/material";

// ** Component Imports
import InvoicesListForm from "@/components/invoices/list/InvoicesListForm";
import InvoicesListTable from "@/components/invoices/list/InvoicesListTable";

// ** Util Imports
import { getTitleMeta } from "@/utils/page.utils";

export const metadata: Metadata = {
  title: getTitleMeta("My Invoice"),
};

export default function InvoicesList() {
  return (
    <>
      <Box
        display="flex"
        flexDirection={{ md: "row", xs: "column" }}
        justifyContent="space-between"
        alignItems={{ md: "center" }}
        gap={3}
        mb={4}
      >
        <Typography variant="h1">My Invoice</Typography>
        <Suspense>
          <InvoicesListForm />
        </Suspense>
      </Box>
      <InvoicesListTable />
    </>
  );
}

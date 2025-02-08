// ** Next Imports
import type { Metadata } from "next";

// ** MUI Imports
import { Box, Button, Typography } from "@mui/material";

// ** Util Imports
import { getTitleMeta } from "@/utils/page.utils";

export const metadata: Metadata = {
  title: getTitleMeta("Add Invoice"),
};

export default function InvoiceAdd() {
  return (
    <Box>
      <Button variant="contained">Lorem Ipsum</Button>
      <Typography>Invoice Add</Typography>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
      architecto asperiores cum dolore ducimus est, exercitationem harum id
      incidunt ipsa magni molestiae numquam odit quam quisquam, rerum similique
      temporibus unde.
    </Box>
  );
}

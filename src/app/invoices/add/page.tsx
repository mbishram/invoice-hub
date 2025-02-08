// ** Next Imports
import type { Metadata } from "next";
import Image from "next/image";

// ** MUI Imports
import { Box, Button, Typography } from "@mui/material";

// ** Util Imports
import { getTitleMeta } from "@/utils/page.utils";

// ** Asset Imports
import logo from "@/assets/images/logo.svg";

export const metadata: Metadata = {
  title: getTitleMeta("Add Invoice"),
};

export default function InvoiceAdd() {
  return (
    <Box bgcolor="background.dark">
      <Image src={logo} alt="App logo" width={500} height={500} />
      <Button variant="contained">Lorem Ipsum</Button>
      <Typography>Invoice Add</Typography>
    </Box>
  );
}

// ** React Imports
import { ReactNode } from "react";

// ** Next Imports
import type { Metadata } from "next";

// ** MUI Imports
import { CssBaseline } from "@mui/material";

// ** Util Imports
import { getTitleMeta } from "@/utils/page.utils";

// ** Font Imports
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const metadata: Metadata = {
  title: getTitleMeta(),
  description: "A sleek invoice management platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Normalize element */}
      <CssBaseline />
      <body>{children}</body>
    </html>
  );
}

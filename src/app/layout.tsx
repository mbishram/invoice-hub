// ** React Imports
import { ReactNode } from "react";

// ** Next Imports
import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

// ** MUI Imports
import { CssBaseline, ThemeProvider } from "@mui/material";

// ** Util Imports
import { getTitleMeta } from "@/utils/page.utils";

// ** Config Imports
import theme from "@/configs/theme.configs";
import { openSans } from "@/configs/font.configs";

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
      <body className={openSans.variable}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            {/* Normalize element */}
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

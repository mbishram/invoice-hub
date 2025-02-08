// ** React Imports
import { ReactNode } from "react";

// ** Next Imports
import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

// ** MUI Imports
import { Box, CssBaseline, ThemeProvider } from "@mui/material";

// ** Layout Imports
import MainLayout from "@/layouts/MainLayout";

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
    <Box component="html" lang="en" minHeight="100%" display="flex">
      <Box
        component="body"
        className={openSans.variable}
        display="flex"
        flexDirection="column"
        flexGrow={1}
      >
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <MainLayout>
              {/* Normalize element */}
              <CssBaseline />
              {children}
            </MainLayout>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </Box>
    </Box>
  );
}

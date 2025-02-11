// ** React Imports
import { ReactNode } from "react";

// ** Next Imports
import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

// ** MUI Imports
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";

// ** Layout Imports
import MainLayout from "@/layouts/MainLayout";

// ** Third Party Imports
import { Toaster } from "react-hot-toast";
import { NuqsAdapter } from "nuqs/adapters/next/app";

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
    <Box
      component="html"
      lang="en"
      minHeight="100%"
      display="flex"
      suppressHydrationWarning // Need to be set! Used because InitColorSchemeScript component
    >
      <Box
        component="body"
        className={openSans.variable}
        display="flex"
        flexDirection="column"
        flexGrow={1}
      >
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme} defaultMode="light">
            <NuqsAdapter>
              {/* Init script to prevent flicker when switching theme mode */}
              <InitColorSchemeScript attribute="class" />
              <MainLayout>
                <Toaster position="bottom-center" />
                {/* Normalize element */}
                <CssBaseline />
                {children}
              </MainLayout>
            </NuqsAdapter>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </Box>
    </Box>
  );
}

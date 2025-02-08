// ** React Imports
import { ReactNode } from "react";

// ** Next Imports
import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

// ** MUI Imports
import { CssBaseline, ThemeProvider } from "@mui/material";

// ** Util Imports
import { getTitleMeta } from "@/utils/page.utils";

// ** Font Imports
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// ** Config Imports
import theme from "@/configs/theme.configs";

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
      <body>
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

import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import ToastProvider from "./providers/toast.provider";
// import RootStyleRegistry from "./emotion";

export const metadata: Metadata = {
  title: "Code Tensai",
  description: "Code Tensai - Modern Web Designs for your new business!",
};

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="en">
      {/* <RootStyleRegistry>{children}</RootStyleRegistry> */}
      <body>
        <AppRouterCacheProvider>
          <ToastProvider>{children}</ToastProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
// import { Inter } from 'next/font/google'
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
// import RootStyleRegistry from "./emotion";

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Code Tensai",
  description: "Code Tensai webpage Generated by create next app",
};

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="en">
      {/* <RootStyleRegistry>{children}</RootStyleRegistry> */}
      <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      {/* <body className={inter.className}>{children}</body> */}
    </html>
  );
}

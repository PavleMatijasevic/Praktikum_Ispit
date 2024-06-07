import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ClerkProvider } from '@clerk/nextjs'
import "../styles/global.css"
import "./globals.css";
import { QueryProvider } from "@/providers/query-provider";
import { SheetProvider } from "@/providers/sheet-provider";
import { Header } from "@/components/header";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My clinic app",
  description: "App za ispit iz praktikuma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
           <body className={inter.className}>
           <QueryProvider>
           <SheetProvider />
      <Header/>
            <div className="layout">
              <div className="sidebar left-sidebar"></div>
              <div className="main-content">{children}</div>
              <div className="sidebar right-sidebar"></div>
            </div>
            </QueryProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}

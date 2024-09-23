import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header from "./components/header";
import { ReactNode } from "react";
import Footer from "./components/footer";
import { UserProvider } from "@/utils/userContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <Header />
          {children}
        </UserProvider>
        <Footer />
      </body>
    </html>
  );
}

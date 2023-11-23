import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from "@/components/Navbar/SideNav";
import { NextUIProvider } from "@nextui-org/react";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learningence Assignment",
  description: "Assignment for Learningence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout children={children} />
      </body>
    </html>
  );
}

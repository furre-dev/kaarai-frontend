
import type { Metadata } from "next";
import { Inter, Red_Hat_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/organisms/Navbar";

const RedHatDisplay = Red_Hat_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kaar.ai",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${RedHatDisplay.className} min-h-screen w-screen bg-kaar-50 overflow-x-hidden`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

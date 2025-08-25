import "../styles/globals.css";
import type { Metadata } from "next";
import React from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "Zhen Wei Yap | Portfolio",
  description: "Towards DeepMind 2026: embodied AI + science.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
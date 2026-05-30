import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";

export const metadata: Metadata = {
  title: "Apprelix | Global Apparel Sourcing Platform",
  description:
    "Connect with verified apparel manufacturers, manage RFQs, and scale your sourcing operations through an AI-driven B2B platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}

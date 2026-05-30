import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import TanStackQueryProvider from "@/components/providers/TanStackQueryProvider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import AOSInit from "@/lib/AOSInit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "apprelix",
  description: "b2b apparel sourcing platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-clip">
        <TanStackQueryProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
             <AOSInit />
            <main className="bg-ds-background overflow-x-clip">{children}</main>

            <Toaster />
          </ThemeProvider>
        </TanStackQueryProvider>
      </body>
    </html>
  );
}

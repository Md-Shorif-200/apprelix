import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import TanStackQueryProvider from "@/components/providers/TanStackQueryProvider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import AOSInit from "@/lib/AOSInit";
import NextAuthProvider from "@/components/providers/NextAuthProvider";
import ScrollLockFix from "@/components/providers/ScrollLockFix";

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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-clip bg-ds-background text-ds-text">
        <ScrollLockFix />
        <NextAuthProvider>
          <TanStackQueryProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <AOSInit />
              <main className=" bg-ds-background overflow-x-clip">
                {children}
              </main>

              <Toaster position="top-right" />
            </ThemeProvider>
          </TanStackQueryProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}

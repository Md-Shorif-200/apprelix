import AuthPageContent from "@/modules/auth/_components/AuthPageContent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="lg:h-dvh">
      <body className="lg:h-dvh lg:overflow-hidden">
        <main className="flex min-h-screen w-full flex-col lg:h-dvh lg:flex-row lg:overflow-hidden">
          {/* Marketing panel — always visible; fixed height + no scroll only on lg+ */}
          <div className="w-full lg:h-dvh lg:w-[45%] lg:shrink-0 lg:overflow-hidden">
            <AuthPageContent />
          </div>

          {/* Form — stacked below marketing on mobile; scrollable column on lg+ */}
          <div className="w-full lg:min-h-0 lg:h-dvh lg:w-[55%] lg:flex-1 lg:overflow-y-auto">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

import AuthPageContent from "@/modules/auth/_components/AuthPageContent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <main className="w-full flex flex-col lg:flex-row min-h-screen">
          <div className="w-full lg:w-1/2">
            <AuthPageContent />{" "}
          </div>

          <div className="w-full lg:w-1/2">{children}</div>
        </main>
      </body>
    </html>
  );
}

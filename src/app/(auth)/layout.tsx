import AuthPageContent from "@/modules/auth/_components/AuthPageContent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full bg-white lg:fixed lg:inset-0 lg:overflow-hidden">
      
      <main className="flex min-h-screen w-full flex-col lg:h-full lg:min-h-0 lg:flex-row">
        
        {/* Left Panel: Marketing */}
        <div className="w-full lg:h-full lg:w-[45%] lg:shrink-0 lg:overflow-hidden">
          <AuthPageContent />
        </div>

        <div className="w-full lg:h-full lg:w-[55%] lg:flex-1 lg:overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
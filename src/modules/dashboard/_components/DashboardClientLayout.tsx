// FILE: app/(dashboard)/_components/DashboardClientLayout.tsx

"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { SidebarContent } from "./SidebarContent";
import { TopNavbar } from "./TopNavbar";

export default function DashboardClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sheetOpen, setSheet] = useState(false);

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* -- Desktop Sidebar -- */}
      <aside className="hidden lg:flex w-60 flex-shrink-0 flex-col border-r border-slate-100 bg-white">
        <SidebarContent pathname={pathname} />
      </aside>

      {/* -- Mobile: Backdrop -- */}
      <div
        onClick={() => setSheet(false)}
        className={`
          fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden
          transition-opacity duration-300
          ${sheetOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* -- Mobile: Slide-in Sheet -- */}
      <div
        className={`
        fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-xl lg:hidden
        transition-transform duration-300 ease-in-out
        ${sheetOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <SidebarContent pathname={pathname} onClose={() => setSheet(false)} />
      </div>

      {/* -- Right side: Topnav + Content -- */}
      <div className="flex-1 flex flex-col min-w-0">
        <TopNavbar pathname={pathname} onMenuClick={() => setSheet(true)} />

        <main className="flex-1 overflow-y-auto bg-slate-50 p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

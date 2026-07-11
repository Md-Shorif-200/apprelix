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
    <div className="w-full max-w-[1600px] mx-auto fixed inset-0 flex bg-slate-50 overflow-hidden">
      {/* ── Desktop Sidebar ── */}
      <aside className="hidden lg:flex w-64 flex-shrink-0 flex-col bg-white shadow-[2px_0_20px_rgba(0,0,0,0.06)]">
        <SidebarContent pathname={pathname} />
      </aside>

      {/* ── Mobile: Backdrop ── */}
      <div
        onClick={() => setSheet(false)}
        className={`
          fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden
          transition-opacity duration-300
          ${sheetOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* ── Mobile: Slide-in Sheet ── */}
      <div
        className={`
          fixed top-0 left-0 z-50 h-full w-64 bg-white lg:hidden
          shadow-[4px_0_30px_rgba(0,0,0,0.12)]
          transition-transform duration-300 ease-in-out
          ${sheetOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <SidebarContent pathname={pathname} onClose={() => setSheet(false)} />
      </div>

      {/* ── Main Content Area ── */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <TopNavbar pathname={pathname} onMenuClick={() => setSheet(true)} />

        <main className="flex-1 overflow-y-auto bg-slate-50 p-3 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

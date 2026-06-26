// FILE: app/(dashboard)/_components/TopNavbar.tsx

"use client";

import { Menu, Bell } from "lucide-react";
import { getRoleFromPath, roleConfig } from "../config/nav";
import AuthButton from "@/components/shared/Navbar/Authbutton";

export function TopNavbar({
  pathname,
  onMenuClick,
}: {
  pathname: string;
  onMenuClick: () => void;
}) {
  const role = getRoleFromPath(pathname);
  const config = roleConfig[role];

  // find current page label from nav items
  const currentPage =
    config.navItems.find((item) => item.href === pathname)?.label ??
    "Dashboard";

  return (
    <header className="h-14 flex items-center justify-between px-4 md:px-6 border-b border-slate-100 bg-white flex-shrink-0">
      <div className="flex items-center gap-3">
        {/* Hamburger — mobile only */}
        <button
          onClick={onMenuClick}
          className="p-2 rounded-lg text-slate-500 hover:text-teal-600 hover:bg-teal-50 transition-colors lg:hidden cursor-pointer"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>

        {/* Current page title */}
        <span className="px-3 py-1 rounded-md bg-teal-50 text-sm font-medium text-teal-700">
          {currentPage}
        </span>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2">
        {/* Notification */}
        <button className="relative p-2 rounded-lg text-slate-500 hover:text-teal-600 hover:bg-teal-50 transition-colors">
          <Bell size={18} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-teal-500 ring-2 ring-white" />
        </button>

        <AuthButton />
      </div>
    </header>
  );
}

"use client";

import { Menu, Bell, Search } from "lucide-react";
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

  // Find current page label
  const currentPage =
    config.navItems.find((item) => item.href === pathname)?.label ??
    "Dashboard";

  return (
    <header
      className="
        h-16 flex items-center justify-between
        px-4 md:px-6
        bg-white
        border-b border-slate-200
        flex-shrink-0
        shadow-sm
      "
    >
      {/* ── LEFT SIDE ── */}
      <div className="flex items-center gap-3">
        {/* Hamburger — mobile only */}
        <button
          onClick={onMenuClick}
          className="
            p-2 rounded-xl
            text-slate-500
            hover:text-teal-600
            hover:bg-teal-50
            transition-colors
            lg:hidden
            cursor-pointer
          "
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>

        {/* Page Title with breadcrumb style */}
        <div className="flex items-center gap-2">
          <span
            className="
              px-3 py-1 rounded-lg
              bg-teal-50
              text-sm font-semibold
              text-teal-700
            "
          >
            {currentPage}
          </span>
        </div>
      </div>

      {/* ── RIGHT SIDE ── */}
      <div className="flex items-center gap-2">
        {/* Search button */}
        <button
          className="
            p-2 rounded-xl
            text-slate-400
            hover:text-teal-600
            hover:bg-teal-50
            transition-colors
            hidden sm:flex
          "
          aria-label="Search"
        >
          <Search size={18} />
        </button>

        {/* Notification Bell */}
        <button
          className="
            relative p-2 rounded-xl
            text-slate-400
            hover:text-teal-600
            hover:bg-teal-50
            transition-colors
          "
          aria-label="Notifications"
        >
          <Bell size={18} />
          {/* Notification dot */}
          <span
            className="
              absolute top-1.5 right-1.5
              w-2 h-2 rounded-full
              bg-teal-500
              ring-2 ring-white
            "
          />
        </button>

        {/* Divider */}
        <div className="w-px h-6 bg-slate-200 mx-1" />

        {/* User Avatar / Auth Button */}
        <AuthButton />
      </div>
    </header>
  );
}

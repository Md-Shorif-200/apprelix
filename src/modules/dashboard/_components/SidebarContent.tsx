// FILE: app/(dashboard)/_components/SidebarContent.tsx

"use client";

import { X, LogOut } from "lucide-react";
import Logo from "@/components/shared/Navbar/Logo";
import { NavLink } from "./NavLink";
import { getRoleFromPath, roleConfig } from "../config/nav";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

export function SidebarContent({
  pathname,
  onClose,
}: {
  pathname: string;
  onClose?: () => void; // only passed from mobile sheet
}) {
  const role = getRoleFromPath(pathname);
  const config = roleConfig[role];
  const router = useRouter();

  // ── Logout ────────────────────────────────────────────────────────────────
  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push("/login");
    router.refresh();
  };

  return (
    <div className="flex flex-col h-full">
      {/* Brand */}
      <div className="flex items-center justify-between px-4 py-5 border-b border-slate-100">
        <Logo section="navbar" />

        {/* Close button — only for mobile sheet */}
        {onClose && (
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        {config.navItems.map((item) => (
          <NavLink
            key={item.href}
            item={item}
            isActive={pathname === item.href}
            onClick={onClose} // close sheet on mobile after click
          />
        ))}
      </nav>

      {/* Logout */}
      <div className="px-3 py-4 border-t border-slate-100">
        <button
          onClick={handleLogout}
          className="
      group w-full flex items-center gap-3
       py-1.5 rounded-xl
      text-sm font-medium
      text-red-600
      hover:text-red-700
     bg-red-50
      hover:bg-red-100
      transition-all duration-200
      cursor-pointer
    "
        >
          <div
            className="
       
        h-8 w-8 
        flex items-center 
        px-2
        text-red-600
        group-hover:text-red-700
   
        transition-all duration-200
      "
          >
            <LogOut size={16} />
          </div>

          <span className="flex-1 text-left">Log out</span>
        </button>
      </div>
    </div>
  );
}

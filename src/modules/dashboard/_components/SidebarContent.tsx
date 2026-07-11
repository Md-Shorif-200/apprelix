// FILE: app/(dashboard)/_components/SidebarContent.tsx

"use client";

import { X, LogOut } from "lucide-react";
import Logo from "@/components/shared/Navbar/Logo";
import { getRoleFromPath, roleConfig } from "../config/nav";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { DashboardRouteLink } from "./DashboardRouteLink";
import { OpenMenuProvider } from "../context/OpenMenuContext";

export function SidebarContent({
  pathname,
  onClose,
}: {
  pathname: string;
  onClose?: () => void;
}) {
  const role = getRoleFromPath(pathname);
  const config = roleConfig[role];
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push("/login");
    router.refresh();
  };

  return (
    <OpenMenuProvider>
      <div className="flex flex-col h-full w-full bg-ds-primary">
        {/* ── Logo Area ── */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-teal-400/50">
          <Logo section="footer" />

          {onClose && (
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-teal-100 hover:text-white hover:bg-teal-400/50 transition-colors duration-150"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* ── Navigation ── */}
        <nav className="flex-1 overflow-y-auto px-3 py-3 space-y-2 scrollbar-hide">
          {config.navItems.map((item) => (
            <DashboardRouteLink
              key={item.href}
              item={item}
              pathname={pathname}
              onClick={onClose}
            />
          ))}
        </nav>

        {/* ── Logout Button ── */}
        <div className="px-3 py-4 border-t border-teal-400/50">
          <button
            onClick={handleLogout}
            className="group w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-teal-100 hover:bg-white/10 hover:text-white transition-all duration-200 cursor-pointer"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-400/40 text-teal-100 group-hover:bg-white/20 group-hover:text-white transition-all duration-200 shrink-0">
              <LogOut size={15} />
            </span>
            <span>Log out</span>
          </button>
        </div>
      </div>
    </OpenMenuProvider>
  );
}

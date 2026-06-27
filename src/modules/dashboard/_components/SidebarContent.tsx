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
    /*
      Main sidebar container
      - Full height, white background
      - Subtle right border
      - Rounded right corners for floating look
    */
    <div
      className="
        flex flex-col h-full w-full
        bg-white
        border-r border-slate-200
        lg:rounded-r-none
        shadow-xl lg:shadow-none
      "
    >

      {/* ── LOGO AREA ── */}
      <div
        className="
          flex items-center justify-between
          px-5 py-5
          border-b border-slate-100
        "
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
         
          <Logo section="navbar" />
        </div>

        {/* Close button (mobile only) */}
        {onClose && (
          <button
            onClick={onClose}
            className="
              p-1.5 rounded-lg
              text-slate-400
              hover:text-slate-700
              hover:bg-slate-100
              transition-colors
            "
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* ── NAVIGATION LINKS ── */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">

        {/* Optional: Section Label */}
        <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-widest text-slate-400">
          Main Menu
        </p>

        {config.navItems.map((item) => (
          <NavLink
            key={item.href}
            item={item}
            isActive={pathname === item.href}
            onClick={onClose}
          />
        ))}
      </nav>

      {/* ── USER / LOGOUT AREA ── */}
      <div className="px-3 py-4 border-t border-slate-100 space-y-2">

        {/* Upgrade Banner (Optional, looks professional) */}
        {/* <div
          className="
            mx-1 p-3 rounded-xl
            bg-gradient-to-br from-teal-500 to-emerald-600
            text-white
            mb-3
          "
        >
          <p className="text-xs font-semibold">Upgrade to Pro</p>
          <p className="text-[11px] opacity-80 mt-0.5">
            Unlock all premium features
          </p>
          <button
            className="
              mt-2 w-full py-1 rounded-lg
              bg-white/20 hover:bg-white/30
              text-xs font-medium text-white
              transition-colors
            "
          >
            Upgrade Now
          </button>
        </div> */}

        {/* Logout Button */}
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
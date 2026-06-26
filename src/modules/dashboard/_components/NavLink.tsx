// FILE: app/(dashboard)/_components/NavLink.tsx

"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { NavItemType } from "../types/dashboard.types";

export function NavLink({
  item,
  isActive,
  onClick,
}: {
  item: NavItemType;
  isActive: boolean;
  onClick?: () => void;
}) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={`
        group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium
        transition-all duration-200
        ${
          isActive
            ? "bg-teal-500 text-white shadow-sm"
            : "text-slate-600 hover:bg-teal-50 hover:text-teal-700"
        }
      `}
    >
      {/* Icon */}
      <Icon
        size={18}
        className={`
          flex-shrink-0 transition-transform duration-200 group-hover:scale-110
          ${isActive ? "text-white" : "text-teal-500"}
        `}
      />

      {/* Label */}
      <span className="flex-1">{item.label}</span>

      {/* Active indicator */}
      {isActive && <ChevronRight size={14} className="opacity-60" />}
    </Link>
  );
}

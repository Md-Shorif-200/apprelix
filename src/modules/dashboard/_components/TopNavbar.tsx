"use client";

import Link from "next/link";
import { Bell, ChevronRight, Menu, Search } from "lucide-react";
import AuthButton from "@/components/shared/Navbar/Authbutton";
import { generateBreadcrumbs } from "@/utils/breadcrumb";

type TopNavbarProps = {
  pathname: string;
  onMenuClick: () => void;
};

export function TopNavbar({ pathname, onMenuClick }: TopNavbarProps) {
  const breadcrumbs = generateBreadcrumbs(pathname);

  return (
    <header
      className="
        h-16
        flex
        items-center
        justify-between
        px-4
        md:px-6
        bg-white
        border-b
        border-slate-200
        shadow-sm
        flex-shrink-0
      "
    >
      {/* LEFT */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu */}
        <button
          onClick={onMenuClick}
          className="
            lg:hidden
            p-2
            rounded-xl
            text-slate-500
            hover:text-teal-600
            hover:bg-teal-50
            transition-colors
            cursor-pointer
          "
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center text-sm">
          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1;

            return (
              <div key={item.href} className="flex items-center">
                {index > 0 && (
                  <ChevronRight size={15} className="mx-1.5 text-slate-400" />
                )}

                {isLast ? (
                  <span className="font-semibold text-teal-700 whitespace-nowrap">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="
                      whitespace-nowrap
                      text-slate-500
                      hover:text-teal-600
                      transition-colors
                    "
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-2">
        {/* Search */}
        <button
          className="
            hidden
            sm:flex
            p-2
            rounded-xl
            text-slate-400
            hover:text-teal-600
            hover:bg-teal-50
            transition-colors
          "
          aria-label="Search"
        >
          <Search size={18} />
        </button>

        {/* Notifications */}
        <button
          className="
            relative
            p-2
            rounded-xl
            text-slate-400
            hover:text-teal-600
            hover:bg-teal-50
            transition-colors
          "
          aria-label="Notifications"
        >
          <Bell size={18} />

          <span
            className="
              absolute
              top-1.5
              right-1.5
              w-2
              h-2
              rounded-full
              bg-[#14b8a6]
              ring-2
              ring-white
            "
          />
        </button>

        {/* Divider */}
        <div className="mx-1 h-6 w-px bg-slate-200" />

        {/* User */}
        <AuthButton />
      </div>
    </header>
  );
}

// FILE: app/(dashboard)/_components/DashboardRouteLink.tsx

"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { NavItem } from "../types/dashboard.types";
import { useOpenMenu } from "../context/OpenMenuContext";

interface Props {
  item: NavItem;
  pathname: string;
  onClick?: () => void;
}

export function DashboardRouteLink({ item, pathname, onClick }: Props) {
  const { openMenu, setOpenMenu } = useOpenMenu();

  const hasChildren = Boolean(item.children?.length);
  const isOpen = openMenu === item.href;
  const isParentActive = hasChildren && pathname.startsWith(item.href);
  const isDirectActive = !hasChildren && pathname === item.href;

  // ── Parent with children (accordion) ─────────────────────────────────────
  if (hasChildren) {
    return (
      <div
        className={`transition-all duration-300 ${isOpen ? "mb-3" : "mb-0"}`}
      >
        {/* Toggle button */}
        <button
          onClick={() => setOpenMenu(isOpen ? null : item.href)}
          className={`
            group w-full flex items-center gap-3
            px-3 py-2 rounded-xl
            text-sm font-medium
            transition-all duration-200 cursor-pointer relative
            ${
              isParentActive || isOpen
                ? "bg-white/10 text-white"
                : "text-white hover:bg-white/10 hover:text-white"
            }
          `}
        >
          {/* Active left bar */}
          {/* {(isParentActive || isOpen) && (
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-full bg-white" />
          )} */}

          <span
            className={`
            flex h-7 w-7 items-center justify-center rounded-lg shrink-0 transition-all duration-200
           bg-white/20 text-white group-hover:bg-white/30 group-hover:text-white
          `}
          >
            <item.icon size={14} />
          </span>

          <span className="flex-1 text-left">{item.label}</span>

          <ChevronDown
            size={14}
            className={`
              shrink-0 transition-transform duration-300 text-white/70
              ${isOpen ? "rotate-180" : "rotate-0"}
            `}
          />
        </button>

        {/* ── Accordion children ── */}
        <div
          className={`
            overflow-hidden
            transition-all duration-300 ease-in-out
            ${isOpen ? "max-h-96 opacity-100 mt-1.5" : "max-h-0 opacity-0 mt-0"}
          `}
        >
          <div className="ml-[22px] pl-4 border-l-2 border-white/25 space-y-2 py-1">
            {item.children!.map((child) => {
              const isChildActive = pathname === child.href;

              return (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={onClick}
                  className={`
                    group flex items-center gap-2.5
                    px-3 py-2 rounded-lg
                    text-sm transition-all duration-150 relative
                    ${
                      isChildActive
                        ? "bg-white/10 text-white font-medium"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                    }
                  `}
                >
                  {/* Active left bar for child */}
                  {isChildActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-4 rounded-full bg-white" />
                  )}

                  <child.icon
                    size={13}
                    className={`
                      shrink-0 transition-colors duration-150
                      ${isChildActive ? "text-white" : "text-white/70 group-hover:text-white"}
                    `}
                  />
                  <span>{child.label}</span>

                  {isChildActive && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-teal-300" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // ── Flat nav link (no children) ───────────────────────────────────────────
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={`
        group flex items-center gap-3
        px-3 py-2 rounded-xl
        text-sm font-medium
        transition-all duration-200 relative
        ${
          isDirectActive
            ? "bg-white/10 text-white"
            : "text-white hover:bg-white/10 hover:text-white"
        }
      `}
    >
      {/* Active left bar */}
      {isDirectActive && (
        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-full bg-white" />
      )}

      <span
        className={`
        flex h-7 w-7 items-center justify-center rounded-lg shrink-0 transition-all duration-200
        ${
          isDirectActive
            ? "bg-white text-[#0f766e] shadow-sm shadow-teal-700/30"
            : "bg-white/20 text-white group-hover:bg-white/30 group-hover:text-white"
        }
      `}
      >
        <item.icon size={14} />
      </span>

      <span className="flex-1">{item.label}</span>

      {isDirectActive && (
        <span className="w-1.5 h-1.5 rounded-full bg-teal-300" />
      )}
    </Link>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
  Info,
  FileText,
  Users,
  BarChart2,
  ChevronDown,
} from "lucide-react";
import { useState, useRef } from "react";

// ── Main nav links (Insights sits between before / after) ───────
const navLinksBeforeInsights = [
  { label: "Home", href: "/", icon: House },
  { label: "About", href: "/about", icon: Info },
];

const navLinksAfterInsights = [
  { label: "RFQs", href: "/rfqs", icon: FileText },
  { label: "Suppliers", href: "/suppliers", icon: Users },
];

// ── Dropdown links under "Insights" ────────────────────────────
const insightLinks = [
  { label: "AI Insight", href: "/ai-insight" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Blogs", href: "/blogs" },
  { label: "Success Stories", href: "/success-story" },
  { label: "Compliance & Standards", href: "/compliance" },
];

// ───────────────────────────────────────────────────────────────
const NavLinks = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // We use a ref + timeout so the dropdown stays open while the
  // mouse moves from the button into the dropdown panel.
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startClose = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const renderNavLink = (
    link: (typeof navLinksBeforeInsights)[number],
    index: number,
  ) => {
    const isActive = pathname === link.href;
    const Icon = link.icon;

    return (
      <Link
        key={index}
        href={link.href}
        className={`
          relative px-3 py-1.5 rounded-md text-base font-medium
          transition-all duration-300 ease-out group
          flex flex-col items-start
          ${
            isActive
              ? "text-ds-primary tracking-widest font-semibold"
              : "text-ds-text hover:text-ds-primary hover:-translate-y-0.5 hover:tracking-wider"
          }
        `}
      >
        <span className="flex items-center gap-1.5">
          <Icon
            size={14}
            className={`transition-all duration-300 ${
              isActive ? "scale-110" : "group-hover:scale-110"
            }`}
          />
          <span>{link.label}</span>
        </span>

        <span
          className={`
            hidden lg:block h-[2px] bg-ds-primary rounded-full mt-0.5
            transition-all duration-300 ease-out
            ${isActive ? "w-full" : "w-0 group-hover:w-full"}
          `}
        />
      </Link>
    );
  };

  return (
    <div className="flex flex-col lg:flex-row gap-2">
      {navLinksBeforeInsights.map(renderNavLink)}

      {/* ── Insights dropdown ──────────────────────────────────── */}
      <div
        className="relative flex flex-col items-start"
        onMouseEnter={() => {
          cancelClose();
          setOpen(true);
        }}
        onMouseLeave={startClose}
      >
        {/* Trigger button */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className={`
            relative px-3 py-1.5 rounded-md text-base font-medium
            transition-all duration-300 ease-out group
            flex flex-col items-start cursor-pointer
            ${
              open
                ? "text-ds-primary tracking-widest font-semibold"
                : "text-ds-text hover:text-ds-primary hover:-translate-y-0.5 hover:tracking-wider"
            }
          `}
        >
          {/* Icon + Label + Arrow */}
          <span className="flex items-center gap-1.5">
            <BarChart2
              size={14}
              className={`transition-all duration-300 ${
                open ? "scale-110" : "group-hover:scale-110"
              }`}
            />
            <span>Insights</span>

            {/* Arrow toggles direction smoothly */}
            <ChevronDown
              size={13}
              className={`
                ml-0.5 transition-transform duration-300
                ${open ? "rotate-180" : "rotate-0"}
              `}
            />
          </span>

          {/* Animated underline — mirrors regular links */}
          <span
            className={`
              hidden lg:block h-[2px] bg-ds-primary rounded-full mt-0.5
              transition-all duration-300 ease-out
              ${open ? "w-full" : "w-0 group-hover:w-full"}
            `}
          />
        </button>

        {/* ── Dropdown panel ───────────────────────────────────── */}
        <div
          onMouseEnter={cancelClose}
          onMouseLeave={startClose}
          className={`
            absolute top-full left-0 mt-2 z-50
            w-52 rounded-xl border border-white/10
            bg-white/90 dark:bg-neutral-900/90
            backdrop-blur-md shadow-xl
            transition-all duration-300 ease-out origin-top
            ${
              open
                ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
                : "opacity-0 scale-y-95 -translate-y-1 pointer-events-none"
            }
          `}
        >
          {/* Small decorative top bar */}
          <div className="h-[3px] w-full rounded-t-xl bg-gradient-to-r from-ds-primary/80 to-ds-primary/20" />

          <ul className="py-2 px-1.5 flex flex-col gap-0.5">
            {insightLinks.map((item, idx) => {
              const isActive = pathname === item.href;

              return (
                <li key={idx}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`
                      flex items-center gap-2 px-3 py-2 rounded-lg
                      text-sm font-medium
                      transition-all duration-200 ease-out group/item
                      ${
                        isActive
                          ? "bg-ds-primary/10 text-ds-primary font-semibold"
                          : "text-ds-text hover:bg-ds-primary/8 hover:text-ds-primary hover:translate-x-1"
                      }
                    `}
                  >
                    {/* Dot indicator */}
                    <span
                      className={`
                        w-1.5 h-1.5 rounded-full flex-shrink-0
                        transition-all duration-200
                        ${
                          isActive
                            ? "bg-ds-primary scale-125"
                            : "bg-ds-text/30 group-hover/item:bg-ds-primary group-hover/item:scale-125"
                        }
                      `}
                    />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* ── End Insights ───────────────────────────────────────── */}

      {navLinksAfterInsights.map(renderNavLink)}
    </div>
  );
};

export default NavLinks;

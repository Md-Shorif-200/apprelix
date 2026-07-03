"use client";

import { useState, useRef, useEffect } from "react";
import { MoreHorizontal, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────
export type DropdownAction = {
  label: string;
  icon: LucideIcon;
  onClick: () => void;
  variant?: "default" | "danger";
};

type TableActionDropdownProps = {
  actions: DropdownAction[];
};

// ─── Component ────────────────────────────────────────────────────────────────
const TableActionDropdown = ({ actions }: TableActionDropdownProps) => {
  const [open, setOpen] = useState(false);
  const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});

  const btnRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // বাইরে ক্লিক করলে বা স্ক্রল করলে ড্রপডাউন বন্ধ করার লজিক
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        btnRef.current &&
        !btnRef.current.contains(e.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleScroll = () => {
      if (open) setOpen(false); // টেবিল বা পেজ স্ক্রল করলে ড্রপডাউন হাইড হবে
    };

    if (open) {
      document.addEventListener("mousedown", handleOutsideClick);
      // capture: true দেওয়া হয়েছে যেন টেবিলের ভেতরের স্ক্রলও ডিটেক্ট করতে পারে
      window.addEventListener("scroll", handleScroll, true);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [open]);

  // পজিশন ক্যালকুলেট করার ফাংশন
  const toggleDropdown = () => {
    if (!open && btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;

      // নিচে ২০০ পিক্সেলের কম জায়গা থাকলে এটি উপরের দিকে ওপেন হবে
      const isSpaceLimited = spaceBelow < 200;

      setDropdownStyle({
        position: "fixed",
        right: window.innerWidth - rect.right, // বাটনের ডানদিকের সাথে ড্রপডাউন এলাইন করবে
        ...(isSpaceLimited
          ? { bottom: window.innerHeight - rect.top + 4 } // বাটনের ঠিক উপরে বসবে
          : { top: rect.bottom + 4 }), // বাটনের ঠিক নিচে বসবে
      });
    }
    setOpen((prev) => !prev);
  };

  return (
    <>
      {/* Trigger button */}
      <button
        ref={btnRef}
        onClick={toggleDropdown}
        className="cursor-pointer rounded-full p-1.5 text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
      >
        <MoreHorizontal size={18} />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          ref={dropdownRef}
          style={dropdownStyle}
          className="z-[9999] w-44 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg"
        >
          {actions.map((action) => {
            const Icon = action.icon;
            const isDanger = action.variant === "danger";

            return (
              <button
                key={action.label}
                onClick={() => {
                  action.onClick();
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full cursor-pointer items-center gap-2.5 px-4 py-2.5 text-sm transition",
                  isDanger
                    ? "text-red-500 hover:bg-red-50 hover:text-red-700"
                    : "text-gray-700 hover:bg-teal-50 hover:text-teal-700",
                )}
              >
                <Icon size={15} />
                {action.label}
              </button>
            );
          })}
        </div>
      )}
    </>
  );
};

export default TableActionDropdown;

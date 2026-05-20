"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, Info, FileText, Users } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/", icon: House },
  { label: "About", href: "/about", icon: Info },
  { label: "RFQs", href: "/rfqs", icon: FileText },
  { label: "Suppliers", href: "/suppliers", icon: Users },
];

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <div
      className={`
        flex flex-col lg:flex-row gap-2
      `}
    >
      {navLinks.map((link, index) => {
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
            {/* ── Icon + Text Row ── */}
            <span className="flex items-center gap-1.5">
              <Icon
                size={14}
                className={`
                  transition-all duration-300
                  ${isActive ? "scale-110" : "group-hover:scale-110"}
                `}
              />
              <span>{link.label}</span>
            </span>

            {/* ── Underline ── sits below icon+text because parent is flex-col ── */}
            <span
              className={`
                hidden lg:block h-[2px] bg-ds-primary rounded-full mt-0.5
                transition-all duration-300 ease-out
                ${isActive ? "w-full" : "w-0 group-hover:w-full"}
              `}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
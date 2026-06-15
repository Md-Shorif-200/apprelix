"use client";

import { useState, useEffect, useRef } from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  CircleUserRound,
  User,
  Settings,
  CreditCard,
  LogOut,
  ChevronDown,
} from "lucide-react";

// ─── Dropdown Menu Items ──────────────────────────────────────────────────────
const dropdownMenus = [
  { label: "Profile", href: "/profile", icon: User },
  { label: "Billing", href: "/billing", icon: CreditCard },
  { label: "Settings", href: "/settings", icon: Settings },
];

// ─── Main Component ───────────────────────────────────────────────────────────
const AuthButton = () => {
  const { data: session, status } = useSession();
  console.log("user" , session)
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const user = session?.user;
  const userName = user?.name || "User";
  const userEmail = user?.email || "";
  const userImage = user?.image || "";

  // Two-letter initials for avatar fallback
  const initials = userName.slice(0, 2).toUpperCase();

  // ── Logout ────────────────────────────────────────────────────────────────
  const handleLogout = async () => {
    setIsOpen(false);
    await signOut({ redirect: false });
    router.push("/login");
    router.refresh();
  };

  // ── Close dropdown on outside click ──────────────────────────────────────
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (status === "loading") {
    return (
      <div className="flex items-center gap-2">
        {/* Pulsing skeleton avatar */}
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 animate-pulse" />
        {/* Pulsing skeleton text */}
        <div className="h-3.5 w-16 rounded-full bg-slate-200 animate-pulse" />
      </div>
    );
  }

  //  LOGGED-IN STATE

  if (user) {
    return (
      <div className="relative inline-block" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            group flex items-center gap-2 rounded-full px-1.5 py-1
            
            transition-all duration-300 ease-out cursor-pointer
       
           
          `}
        >
          {/* Avatar */}
          <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full ring-2 ring-white">
            {userImage ? (
              <Image
                src={userImage}
                alt={userName}
                fill
                unoptimized
                sizes="32px"
                className="object-cover"
              />
            ) : (
              // Gradient initials fallback
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-400 to-teal-500 text-[11px] font-bold text-white">
                {initials}
              </div>
            )}

            {/* Green "online" dot */}
            <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-emerald-400 ring-1 ring-white" />
          </div>
        </button>

        {/* ── Dropdown Panel ─────────────────────────────────────────────── */}

        <div
          className={`
            absolute right-0 top-[calc(100%+10px)]
            w-50 rounded-2xl
            bg-white
            border border-slate-100
            shadow-xl shadow-slate-200/60
            z-50
            transition-all duration-300 ease-out origin-top-right
            ${
              isOpen
                ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
            }
          `}
        >
          {/* ── User Info Header ─────────────────────────────────────────── */}
          <div className="relative px-4 py-3 border-b border-slate-100 overflow-hidden">
            {/* Decorative blurred background glow */}
            <div className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-cyan-300/20 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-teal-300/20 blur-2xl pointer-events-none" />

            {/* Role Badge */}
            <div className="mb-2.5 flex items-center gap-2">
              <span
                className="
    inline-flex items-center gap-1.5
    px-2.5 py-1 rounded-full
    bg-cyan-50 border border-cyan-200
    text-[10px] font-bold text-cyan-600
    uppercase tracking-widest
  "
              >
                {/* Animated pulsing dot */}
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 animate-ping opacity-75" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-cyan-500" />
                </span>
                {user?.role}
              </span>
            </div>

            {/* Email Row */}
            <div className="flex items-center gap-2">
              {/* Small email icon box */}
              <div
                className="
      flex h-6 w-6 shrink-0 items-center justify-center
      rounded-md bg-slate-100 text-slate-400
    "
              >
                {/* Simple @ symbol as icon */}
                <span className="text-[11px] font-bold">@</span>
              </div>

              {/* Email text */}
              <p className="text-xs font-medium text-slate-500 truncate">
                {userEmail}
              </p>
            </div>
          </div>

          {/* ── Menu Items ───────────────────────────────────────────────── */}
          <div className="px-1.5 pt-1.5 flex flex-col gap-0.5">
            {dropdownMenus.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="
                    group/item flex items-center gap-3 px-2 py-1.5 rounded-xl
                    text-sm font-medium text-black/90
                    hover:bg-[#00b4d8]
                    hover:text-white
                    transition-all duration-200 ease-out
                  "
                >
                  {/* Icon box */}
                  <span
                    className="
                  
                   text-black/90
                    group-hover/item:text-white 
                    transition-all duration-200
                  "
                  >
                    <Icon size={15} />
                  </span>

                  <span>{item.label}</span>

                  {/* Subtle right arrow that appears on hover */}
                  <ChevronDown
                    size={13}
                    className="ml-auto -rotate-90 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:text-white group-hover/item:translate-x-0 text-black/90  transition-all duration-200"
                  />
                </Link>
              );
            })}
          </div>

          {/* ── Logout Button ────────────────────────────────────────────── */}
          <div className="p-2">
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
      </div>
    );
  }

  return (
    <Link
      href="/login"
      className="group flex items-center gap-2.5 transition duration-200 ease-out cursor-pointer"
    >
      {" "}
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ds-primary/10 group-hover:bg-ds-primary/20">
        <CircleUserRound
          size={18}
          className="text-ds-primary transition-transform duration-200 group-hover:scale-110"
        />{" "}
      </span>
      <span className="text-sm font-bold text-ds-text group-hover:text-ds-primary">
        {" "}
        Login{" "}
      </span>
    </Link>
  );
};

export default AuthButton;

"use client";

import Container from "@/components/common/Container";
import { CustomButton } from "@/components/common/CustomButton";

import { Sparkles, Bell, Heart } from "lucide-react";

import ThemeToggle from "./ThemeToggle";
import NavSearch from "./NavSearch";

const BottomNavbar = () => {
  const wishlistCount = 10;
  const notificationCount = 10;

  return (
    <div className="bg-ds-navbar backdrop-blur-md border-t border-ds-border">
      <Container>
        <div className="flex items-center justify-between py-3">
          {/* ================= Left Side ================= */}
          <div className="flex items-center gap-4 lg:gap-6">
            {/* AI Insight Button */}
            <CustomButton
              variant="accent"
              text="AI Insight"
              icon={<Sparkles size={16} />}
              className="h-10 rounded-full px-5 text-sm font-semibold shadow-sm hover:scale-[1.02] transition-all duration-200"
            />
          </div>

          {/* ================= Right Side ================= */}
          <div className="flex items-center gap-2 lg:gap-3">
            {/* Search */}
            <div className="hidden sm:block">
              <NavSearch />
            </div>

            {/* Wishlist Icon Button */}
            <IconBadgeButton
              icon={<Heart size={17} />}
              count={wishlistCount}
              label="Wishlist"
              badgeColor="bg-[#14b8a6]"
            />

            {/* Notification Icon Button */}
            <IconBadgeButton
              icon={<Bell size={17} />}
              count={notificationCount}
              label="Notifications"
              badgeColor="bg-rose-500"
            />

            {/* Notification */}
            {/* <button className="ds-nav-action relative">
              <Bell size={18} />

            
              <span className="absolute right-2 top-2 flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
              </span>
            </button> */}

            {/* Theme Toggle */}
            <div className="rounded-full border border-ds-border bg-ds-card shadow-sm">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BottomNavbar;

type IconBadgeButtonProps = {
  icon: React.ReactNode;
  count: number;
  label: string;
  badgeColor?: string;
};

const IconBadgeButton = ({
  icon,
  count,
  label,
  badgeColor = "bg-rose-500",
}: IconBadgeButtonProps) => {
  return (
    <button
      aria-label={label}
      className="
        relative flex items-center justify-center
        w-9 h-9 rounded-full
        text-ds-muted-foreground
        hover:text-ds-text
        hover:bg-ds-card
        border border-transparent
        hover:border-ds-border
        transition-all duration-200
        group
      "
    >
      {/* Icon */}
      <span className="group-hover:scale-110 transition-transform duration-200">
        {icon}
      </span>

      {/* Badge */}
      {count > 0 && (
        <span
          className={`
            absolute -top-0.5 -right-0.5
            flex items-center justify-center
            min-w-[16px] h-4 px-1
            rounded-full text-white font-bold
            text-[9px] leading-none
            shadow-sm ring-1 ring-white dark:ring-ds-navbar
            ${badgeColor}
          `}
        >
          {count > 9 ? "9+" : count}
        </span>
      )}
    </button>
  );
};

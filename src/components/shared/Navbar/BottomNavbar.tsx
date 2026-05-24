"use client";

import Container from "@/components/common/Container";
import { CustomButton } from "@/components/common/CustomButton";

import { Sparkles, Bell } from "lucide-react";

import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";
// import { ThemeToggle } from "./ThemeToggle";

const BottomNavbar = () => {
  return (
    <Container>
      <div className="flex items-center justify-between py-2.5">
        {/* ── Left Side ── */}
        <div className="flex items-center gap-6">
          {/* AI Insight Button */}
          <CustomButton
            variant="accent"
            text="Ai Insight"
            icon={<Sparkles size={16} />}
            className=" w-28 lg:w-32 h-8 lg:h-10 text-sm font-medium px-4 py-3 rounded-full shadow-sm"
          />

          {/* Nav Links Component */}
          <div className="hidden lg:block">
            <NavLinks />
          </div>
        </div>

        {/* ── Right Side Icons ── */}
        <div className="flex items-center gap-3">
          {/* Notification Bell */}
          <button className="relative p-2 text-gray-500 hover:text-teal-600 hover:bg-teal-50 rounded-full transition-all duration-200">
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          <ThemeToggle />
        </div>
      </div>
    </Container>
  );
};

export default BottomNavbar;

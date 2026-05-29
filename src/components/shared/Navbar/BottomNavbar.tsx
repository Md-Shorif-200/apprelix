"use client";

import Container from "@/components/common/Container";
import { CustomButton } from "@/components/common/CustomButton";

import { Sparkles, Bell, ChevronDown, LayoutGrid } from "lucide-react";

// import ThemeToggle from "./ThemeToggle";
import NavSearch from "./NavSearch";

const BottomNavbar = () => {
  return (
    <div className="bg-[#F4F4F4] backdrop-blur-md">
      <Container>
        <div className="flex items-center justify-between py-3">
          {/* ================= Left Side ================= */}
          <div className="flex items-center gap-4 lg:gap-6">
            {/* Category Button */}
            {/* <button className="hidden lg:flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:border-teal-500 hover:bg-teal-50 hover:text-teal-600">
              <LayoutGrid size={16} />
              Categories
              <ChevronDown size={15} />
            </button> */}

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

            {/* Notification */}
            <button className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-all duration-200 hover:border-teal-500 hover:bg-teal-50 hover:text-teal-600">
              <Bell size={18} />

              {/* Notification Dot */}
              <span className="absolute right-2 top-2 flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
              </span>
            </button>

            {/* Theme Toggle */}
            {/* <div className="rounded-full border border-gray-200 bg-white shadow-sm">
              <ThemeToggle />
            </div> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BottomNavbar;

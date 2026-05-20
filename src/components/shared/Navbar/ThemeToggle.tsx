"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  const handleToggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      onClick={handleToggleTheme}
      className="
        relative flex items-center w-16 h-8 rounded-full p-1
        transition-all duration-300 ease-in-out
        bg-ds-background border border-ds-border hover:bg-gray-200
        dark:bg-[#0D3B38] dark:hover:bg-[#115E59]
        cursor-pointer
      "
      aria-label="Toggle Theme"
    >
      {/* Background Icons */}

      <Moon
        size={16}
        className={`
          absolute left-2 transition-all duration-300
          ${isDark ? "text-white/20" : "text-black"}
        `}
      />

      <Sun
        size={16}
        className={`
          absolute right-2 transition-all duration-300
          ${isDark ? "text-yellow-400" : "text-gray-400"}
        `}
      />

      {/* Sliding Circle */}

      <span
        className={`
          relative z-10 flex items-center justify-center
          w-6 h-6 rounded-full bg-ds-primary shadow-md
          transition-all duration-300 ease-in-out
          ${isDark ? "translate-x-0" : "translate-x-8"}
        `}
      >
        {isDark ? (
          <Moon size={14} className="text-white" />
        ) : (
          <Sun size={14} className="text-white" />
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;
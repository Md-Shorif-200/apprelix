"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

/** Changes theme with a smooth fade when the browser supports it. */
function changeThemeSmoothly(
  nextTheme: "light" | "dark",
  setTheme: (theme: string) => void,
) {
  const applyTheme = () => setTheme(nextTheme);

  if (typeof document !== "undefined" && "startViewTransition" in document) {
    document.startViewTransition(applyTheme);
    return;
  }

  applyTheme();
}

/** True only in the browser — avoids theme icon mismatch during SSR. */
function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const isClient = useIsClient();

  const isDark = resolvedTheme === "dark";

  const handleToggleTheme = () => {
    changeThemeSmoothly(isDark ? "light" : "dark", setTheme);
  };

  if (!isClient) {
    return (
      <div
        className="relative h-8 w-16 rounded-full border border-ds-border bg-ds-background"
        aria-hidden
      />
    );
  }

  return (
    <button
      type="button"
      onClick={handleToggleTheme}
      className="
        relative flex h-8 w-16 cursor-pointer items-center rounded-full border border-ds-border
        bg-ds-background p-1 transition-colors duration-500 ease-in-out
        hover:bg-gray-200 dark:bg-[#0D3B38] dark:hover:bg-[#115E59]
      "
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <Moon
        size={16}
        className={`
          absolute left-2 transition-colors duration-500 ease-in-out
          ${isDark ? "text-white/20" : "text-black"}
        `}
      />

      <Sun
        size={16}
        className={`
          absolute right-2 transition-colors duration-500 ease-in-out
          ${isDark ? "text-yellow-400" : "text-gray-400"}
        `}
      />

      <span
        className={`
          relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-ds-primary shadow-md
          transition-transform duration-500 ease-in-out
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

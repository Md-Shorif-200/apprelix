"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const THEME_TRANSITION_MS = 420;

function setRevealOrigin(origin?: HTMLElement) {
  const root = document.documentElement;

  if (origin) {
    const rect = origin.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius =
      Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y),
      ) + 24;

    root.style.setProperty("--theme-reveal-x", `${x}px`);
    root.style.setProperty("--theme-reveal-y", `${y}px`);
    root.style.setProperty("--theme-reveal-radius", `${radius}px`);
    return;
  }

  root.style.setProperty("--theme-reveal-x", "50%");
  root.style.setProperty("--theme-reveal-y", "50%");
  root.style.setProperty("--theme-reveal-radius", "100vmax");
}

/** Circular reveal from toggle — colors swap together, no border flash. */
function changeThemeSmoothly(
  nextTheme: "light" | "dark",
  setTheme: (theme: string) => void,
  origin?: HTMLElement,
) {
  const root = document.documentElement;

  const lockColorTransitions = () => root.classList.add("theme-changing");
  const unlockColorTransitions = () => root.classList.remove("theme-changing");

  const applyTheme = () => setTheme(nextTheme);

  setRevealOrigin(origin);
  lockColorTransitions();

  if ("startViewTransition" in document) {
    const transition = document.startViewTransition(applyTheme);
    transition.finished
      .then(unlockColorTransitions)
      .catch(unlockColorTransitions);
    return;
  }

  applyTheme();
  window.setTimeout(unlockColorTransitions, THEME_TRANSITION_MS);
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

  const handleToggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    changeThemeSmoothly(
      isDark ? "light" : "dark",
      setTheme,
      event.currentTarget,
    );
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
        relative flex h-7 w-14 cursor-pointer items-center rounded-full border border-ds-border
        bg-ds-background p-1 hover:bg-ds-border/60
      "
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <Moon
        size={14}
        className={`
          absolute left-2 transition-opacity duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)]
          ${isDark ? "text-white/20" : "text-ds-text/70"}
        `}
      />

      <Sun
        size={14}
        className={`
          absolute right-1 transition-opacity duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)]
          ${isDark ? "text-yellow-400" : "text-ds-muted-foreground"}
        `}
      />

      <span
        className={`
          relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-ds-primary shadow-md
          transition-transform duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)]
          ${isDark ? "translate-x-0" : "translate-x-6"}
        `}
      >
        {isDark ? (
          <Moon size={14} className="text-ds-primary-foreground" />
        ) : (
          <Sun size={14} className="text-ds-primary-foreground" />
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;

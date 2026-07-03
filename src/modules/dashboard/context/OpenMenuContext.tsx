"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface OpenMenuContextValue {
  openMenu: string | null;
  setOpenMenu: (href: string | null) => void;
}

const OpenMenuContext = createContext<OpenMenuContextValue | null>(null);

export function OpenMenuProvider({ children }: { children: ReactNode }) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <OpenMenuContext.Provider value={{ openMenu, setOpenMenu }}>
      {children}
    </OpenMenuContext.Provider>
  );
}

export function useOpenMenu(): OpenMenuContextValue {
  const ctx = useContext(OpenMenuContext);
  if (!ctx) {
    throw new Error("useOpenMenu must be used inside <OpenMenuProvider>");
  }
  return ctx;
}

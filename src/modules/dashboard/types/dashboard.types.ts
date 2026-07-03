// ─── Types ────────────────────────────────────────────────────────────────────

import { LucideIcon } from "lucide-react";

export type RoleType = "admin" | "buyer" | "supplier";

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  children?: NavItem[];
}

export interface RoleConfigtype {
  label: string;
  navItems: NavItem[];
}

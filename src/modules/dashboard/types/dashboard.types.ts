// ─── Types ────────────────────────────────────────────────────────────────────

export type RoleType = "admin" | "buyer" | "supplier";

export interface NavItemType {
  label: string;
  href: string;
  icon: React.ElementType;
}

export interface RoleConfigtype {
  label: string;
  navItems: NavItemType[];
}

import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Package,
  Settings,
  TrendingUp,
  Plus,
  FileText,
  // Clock,
  // CheckCircle,
  // XCircle,
  List,
  ShieldCheck,
  FileBadge,
} from "lucide-react";
import { RoleConfigtype, RoleType } from "../types/dashboard.types";

// ─── Config per role ──────────────────────────────────────────────────────────

export const roleConfig: Record<RoleType, RoleConfigtype> = {
  admin: {
    label: "Admin Panel",
    navItems: [
      { label: "Dashboard", href: "/dashboard/admin", icon: LayoutDashboard },
      {
        label: "User Management",
        href: "/dashboard/admin/users",
        icon: ShieldCheck,
        children: [
          { label: "Users", href: "/dashboard/admin/users", icon: Users },
        ],
      },
      {
        label: "Product Management",
        href: "/dashboard/admin/rfqs",
        icon: Package,
        children: [
          { label: "Rfqs", href: "/dashboard/admin/rfqs", icon: List },
          {
            label: "Quoations",
            href: "/dashboard/admin/rfqs",
            icon: FileBadge,
          },
        ],
      },

      { label: "Orders", href: "/dashboard/admin/orders", icon: ShoppingCart },

      { label: "Settings", href: "/dashboard/admin/settings", icon: Settings },
    ],
  },

  buyer: {
    label: "Buyer Portal",
    navItems: [
      { label: "Dashboard", href: "/dashboard/buyer", icon: LayoutDashboard },

      {
        label: "RFQs",
        href: "/dashboard/buyer/rfqs",
        icon: FileText,
        children: [
          {
            label: "My Rfqs",
            href: "/dashboard/buyer/rfq-lists",
            icon: List,
          },
          {
            label: "Create RFQ",
            href: "/dashboard/buyer/create-rfqs",
            icon: Plus,
          },
        ],
      },

      {
        label: "My Orders",
        href: "/dashboard/buyer/orders",
        icon: ShoppingCart,
      },
      { label: "Browse", href: "/dashboard/buyer/browse", icon: Package },
      { label: "Settings", href: "/dashboard/buyer/settings", icon: Settings },
    ],
  },

  supplier: {
    label: "Supplier Hub",
    navItems: [
      {
        label: "Dashboard",
        href: "/dashboard/supplier",
        icon: LayoutDashboard,
      },
      {
        label: "Products",
        href: "/dashboard/supplier/products",
        icon: Package,
      },
      {
        label: "Orders",
        href: "/dashboard/supplier/orders",
        icon: ShoppingCart,
      },
      {
        label: "Revenue",
        href: "/dashboard/supplier/revenue",
        icon: TrendingUp,
      },
      {
        label: "Settings",
        href: "/dashboard/supplier/settings",
        icon: Settings,
      },
    ],
  },
};

// ─── Helper: detect role from pathname ────────────────────────────────────────
// e.g. "/dashboard/admin/users" → "admin"

export function getRoleFromPath(pathname: string): RoleType {
  if (pathname.startsWith("/dashboard/buyer")) return "buyer";
  if (pathname.startsWith("/dashboard/supplier")) return "supplier";
  return "admin"; // default
}

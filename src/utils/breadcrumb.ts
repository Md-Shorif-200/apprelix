const LABELS: Record<string, string> = {
  dashboard: "Dashboard",

  buyer: "Buyer",
  supplier: "Supplier",
  admin: "Admin",

  "rfq-lists": "RFQ Lists",
  "create-rfq": "Create RFQ",
  "my-rfqs": "My RFQs",
  "my-orders": "My Orders",
  profile: "Profile",
  settings: "Settings",
};

export function generateBreadcrumbs(pathname: string) {
  const segments = pathname
    .split("/")
    .filter(Boolean)
    .filter(
      (segment) =>
        !/^[0-9a-fA-F]{24}$/.test(segment) && // Mongo ObjectId
        !/^\d+$/.test(segment), // Numeric ID
    );

  return segments.map((segment, index) => ({
    href: "/" + segments.slice(0, index + 1).join("/"),
    label:
      LABELS[segment] ??
      segment.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase()),
  }));
}

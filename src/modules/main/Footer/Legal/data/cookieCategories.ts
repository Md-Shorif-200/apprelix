export const cookieCategories = [
  {
    id: "essential",
    title: "Essential Cookies",
    badge: "Always Active",
    description:
      "Critical for securing user logins, handling RBAC (Role-Based Access Control) tokens, preserving active JWT handshakes, and rendering core dashboard layouts.",
  },
  {
    id: "functional",
    title: "Functional & Preference Cookies",
    badge: "Standard Layer",
    description:
      "Remembers structural layout states, side-panel toggles, currency defaults for pricing estimations, and temporary state configurations inside RFQ generation forms.",
  },
  {
    id: "analytics",
    title: "Performance & AI Analytics",
    badge: "Optimization Layer",
    description:
      "Monitors high-level anonymous operational traffic, system health metrics, and layout friction points. These cookies feed directly into improving our background demand forecasting model accuracy.",
  },
  {
    id: "marketing",
    title: "Targeting & Marketing Cookies",
    badge: "Public Channels",
    description:
      "Used strictly on our public channels to gauge marketing performance campaigns and present contextual apparel industry trend advertisements.",
  },
] as const;

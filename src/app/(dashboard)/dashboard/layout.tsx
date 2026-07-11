// FILE: app/(dashboard)/layout.tsx

import DashboardClientLayout from "@/modules/dashboard/_components/DashboardClientLayout";

// You can add metadata here, which is a best practice for Server Component layouts
export const metadata = {
  title: "Dashboard",
  description: "User dashboard area",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardClientLayout>{children}</DashboardClientLayout>;
}

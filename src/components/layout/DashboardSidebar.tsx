// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { cn } from "@/lib/utils";
// import type { IconType } from "@/components/icons/icons";
// import {
//   Mdl2GroupIcon,
//   AppointmentIcon,
//   // FreehandReceiptIcon,
//   PhHandWithdrawIcon,
//   PlumpCustomerSupportIcon,
//   CarbonNetworkIcon,
//   UilSettingIcon,
//   ChevronDownIcon,
//   FindJobIcon,
//   DispatchJobIcon,
//   MyGroupsNavIcon,
// } from "@/components/icons/RootIcons";

// type SubItem = { label: string; href: string };

// type NavItemBase = {
//   label: string;
//   icon: React.ComponentType<IconType>;
// };

// type NavLink = NavItemBase & {
//   href: string;
//   expandable?: false;
// };

// type NavAccordion = NavItemBase & {
//   expandable: true;
//   children: SubItem[];
// };

// type NavItem = NavLink | NavAccordion;

// function isAccordion(item: NavItem): item is NavAccordion {
//   return item.expandable === true && "children" in item;
// }

// const navItems: NavItem[] = [
//   { label: "My Groups", href: "/my-groups", icon: CarbonNetworkIcon },
//   {
//     label: "My Jobs",
//     icon: AppointmentIcon,
//     expandable: true,
//     children: [
//       { label: "Won", href: "/my-jobs/won" },
//       { label: "Dispatched", href: "/my-jobs/dispatched" },
//       { label: "Scheduled", href: "/my-jobs/scheduled" },
//       { label: "Draft", href: "/my-jobs/draft" },
//       { label: "Completed", href: "/my-jobs/completed" },
//     ],
//   },
//   {
//     label: "Billing & Statements",
//     icon: Mdl2GroupIcon,
//     expandable: true,
//     children: [
//       {
//         label: "My Subscriptions",
//         href: "/billing-statements/my-subscriptions",
//       },
//       {
//         label: "Fund Transfers",
//         href: "/billing-statements/fund-transfers",
//       },
//       {
//         label: "Credit Statement",
//         href: "/billing-statements/credit-statement",
//       },
//       {
//         label: "Point Statement",
//         href: "/billing-statements/point-statement",
//       },
//     ],
//   },
//   {
//     label: "Withdrawal Requests",
//     href: "/withdrawal-requests",
//     icon: PhHandWithdrawIcon,
//   },
//   {
//     label: "Suffort Tickets",
//     href: "/support-tickets",
//     icon: PlumpCustomerSupportIcon,
//   },
//   { label: "Price Guide", href: "/price-guide", icon: MyGroupsNavIcon },
//   {
//     label: "Account Settings",
//     icon: UilSettingIcon,
//     expandable: true,
//     children: [
//       { label: "My Profile", href: "/account/my-profile" },
//       {
//         label: "My Vehicles",
//         href: "/account/my-vehicles",
//       },
//       {
//         label: "My Drivers",
//         href: "/account/my-drivers",
//       },
//       {
//         label: "Blocked Drivers",
//         href: "/account/blocked-drivers",
//       },
//       {
//         label: "Notification Preferences",
//         href: "/account/notification-preferences",
//       },
//       {
//         label: "Change Password",
//         href: "/account/change-password",
//       },
//     ],
//   },
// ];

// const activeGradient =
//   "border border-[var(--ds-border-accent)]/80 bg-[#1a4131] text-[var(--ds-accent)]";
// const shouldHideSidebar = (pathname: string | null) => {
//   if (!pathname) return true;
//   if (pathname === "/login") return true;
//   return pathname.startsWith("/auth");
// };

// const getActiveAccordionLabel = (pathname: string | null) => {
//   if (!pathname) return null;

//   const activeAccordion = navItems.find(
//     (item) =>
//       isAccordion(item) &&
//       item.children.some(
//         (child) =>
//           pathname === child.href || pathname.startsWith(child.href + "/"),
//       ),
//   );

//   return activeAccordion && isAccordion(activeAccordion)
//     ? activeAccordion.label
//     : null;
// };

// const DashboardSidebar = () => {
//   const pathname = usePathname();
//   const router = useRouter();
//   const [expandedItem, setExpandedItem] = useState<string | null>(() =>
//     getActiveAccordionLabel(pathname),
//   );

//   useEffect(() => {
//     setExpandedItem(getActiveAccordionLabel(pathname));
//   }, [pathname]);

//   if (shouldHideSidebar(pathname)) {
//     return null;
//   }

//   const toggleExpand = (label: string) => {
//     setExpandedItem((prev) => (prev === label ? null : label));
//   };

//   const isSubItemActive = (href: string) =>
//     pathname === href || pathname.startsWith(href + "/");

//   const isAccordionActive = (item: NavAccordion) =>
//     item.children.some((child) => isSubItemActive(child.href));
//   const isFindJobActive = pathname === "/find-job";
//   const isDispatchJobActive = pathname === "/dispatch-job";

//   const sidebarContent = (
//     <>
//       <div className="py-2 border-b border-dashed border-[var(--ds-border-accent)] mb-4">
//         <Image
//           src="/assets/logo/splash.png"
//           alt="LimoZ Logo"
//           width={100}
//           height={10}
//           className="object-contain mx-auto"
//         />
//       </div>

//       <div className="mb-4 space-y-2 border-b border-dashed border-[var(--ds-border-accent)] pb-4">
//         <Link
//           href="/find-job"
//           type="button"
//           onClick={() => router.push("/")}
//           className={cn(
//             "flex justify-center w-full cursor-pointer items-center gap-2 rounded-md border border-[var(--ds-border-accent)]/80 bg-[#1a4131] px-3 py-2 text-sm font-medium text-[#d7e6df] transition-colors hover:border-[var(--ds-accent)] hover:text-[var(--ds-accent)] active:border-[var(--ds-accent)] active:text-[var(--ds-accent)]",
//             isFindJobActive &&
//               "border-[var(--ds-accent)] text-[var(--ds-accent)]",
//           )}
//         >
//           <FindJobIcon className="h-4 w-4 shrink-0 text-inherit" size="16" />
//           Find Job
//         </Link>

//         <Link
//           href="/dispatch-job"
//           className={cn(
//             "flex justify-center w-full cursor-pointer items-center gap-2 rounded-md border border-[var(--ds-border-accent)]/80 bg-[#1a4131] px-3 py-2 text-sm font-medium text-[#d7e6df] transition-colors hover:border-[var(--ds-accent)] hover:text-[var(--ds-accent)] active:border-[var(--ds-accent)] active:text-[var(--ds-accent)]",
//             isDispatchJobActive &&
//               "border-[var(--ds-accent)] text-[var(--ds-accent)]",
//           )}
//         >
//           <DispatchJobIcon
//             className="h-4 w-4 shrink-0 text-inherit"
//             size="16"
//           />
//           Dispatch Job
//         </Link>
//       </div>

//       <nav className="min-h-0 flex-1 space-y-0.5 pr-1">
//         {navItems.map((item) => {
//           const Icon = item.icon;

//           if (isAccordion(item)) {
//             const isExpanded = expandedItem === item.label;
//             const hasActiveChild = isAccordionActive(item);

//             return (
//               <div key={item.label} className="space-y-0.5">
//                 <button
//                   type="button"
//                   onClick={() => toggleExpand(item.label)}
//                   className={cn(
//                     "flex w-full items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-left border-l-2 cursor-pointer",
//                     hasActiveChild
//                       ? activeGradient
//                       : "border-l-transparent text-white/90 hover:bg-white/5 hover:text-white",
//                   )}
//                 >
//                   <Icon
//                     className={cn(
//                       "shrink-0 w-4 h-4",
//                       hasActiveChild
//                         ? "text-[var(--ds-accent)]"
//                         : "text-inherit",
//                     )}
//                     size="16"
//                   />
//                   <span className="flex-1 text-sm font-medium truncate">
//                     {item.label}
//                   </span>
//                   <ChevronDownIcon
//                     className={cn(
//                       "w-3.5 h-3.5 shrink-0 transition-transform",
//                       isExpanded && "rotate-180",
//                     )}
//                     size="16"
//                   />
//                 </button>

//                 {isExpanded && (
//                   <div className="relative pl-4 ml-2">
//                     {item.children.map((child) => {
//                       const active = isSubItemActive(child.href);
//                       return (
//                         <Link
//                           key={child.href}
//                           href={child.href}
//                           className={cn(
//                             "flex items-center py-2 pr-3 pl-3 -ml-px text-sm transition-colors border-l-2 ",
//                             active
//                               ? "border-r-[var(--ds-accent)] text-[var(--ds-accent)] font-semibold"
//                               : "border-white/20 text-white/80 hover:text-white hover:bg-white/5",
//                           )}
//                         >
//                           {child.label}
//                         </Link>
//                       );
//                     })}
//                   </div>
//                 )}
//               </div>
//             );
//           }

//           const isActive =
//             item.href === "/"
//               ? pathname === "/"
//               : pathname === item.href || pathname.startsWith(item.href + "/");

//           return (
//             <div key={item.label}>
//               <Link
//                 href={item.href}
//                 className={cn(
//                   "flex items-center gap-3 px-3 py-2.5 rounded-lg  transition-colors border-l-2",
//                   isActive
//                     ? activeGradient
//                     : "border-l-transparent text-white/90 hover:bg-white/5 hover:text-white",
//                 )}
//               >
//                 <Icon
//                   className={cn(
//                     "shrink-0 w-4 h-4",
//                     isActive ? "text-[var(--ds-accent)]" : "text-inherit",
//                   )}
//                   size="16"
//                 />
//                 <span className="flex-1 text-sm font-medium truncate">
//                   {item.label}
//                 </span>
//               </Link>
//             </div>
//           );
//         })}
//       </nav>
//     </>
//   );

//   return (
//     <>
//       {/* Sticky on md+ so long pages scroll only the main column; inner nav still scrolls if needed */}
//       <div className="hidden shrink-0 md:sticky md:top-4 md:ml-4 md:mt-4  md:block md:self-start">
//         <div
//           className="flex h-[calc(100vh-2rem)] max-h-[calc(100vh-2rem)] min-h-0 w-56 lg:w-60 flex-col overflow-y-auto overscroll-contain scrollbar-hide rounded-[24px] border-b border-r border-(--ds-border-accent) 
//          bg-(--ds-bg-elevated) px-3 pb-4 pt-1"
//         >
//           {sidebarContent}
//         </div>
//       </div>
//     </>
//   );
// };

// export default DashboardSidebar;
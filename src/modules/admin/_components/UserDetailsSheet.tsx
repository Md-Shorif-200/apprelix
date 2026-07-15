"use client";

import React from "react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { User, X, Info, Building, Calendar, Factory } from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────
// These match the shape of the data coming back from the API.
// If you already have a `UserType` defined somewhere in your project,
// feel free to import that instead of these local types.

interface Location {
  countryCode?: string;
  countryName?: string;
  stateCode?: string;
  stateName?: string;
  city?: string;
}

interface CompanyLogo {
  url?: string;
  publicId?: string;
}

interface CompanyInfo {
  companyName?: string;
  companyWebsite?: string;
  companyLogo?: CompanyLogo;
  location?: Location;
  streetAddress?: string;
}

interface RoleDetails {
  factoryName?: string;
  productionCapacity?: string;
  yearEstablished?: string;
  numberOfEmployees?: string;
  productCategories?: string[];
  factoryLocation?: string;
}

export interface UserType {
  _id: string;
  fullName: string;
  email: string;
  phone?: string;
  role: string;
  status: string;
  companyInfo?: CompanyInfo;
  profilePhoto?: { url?: string; publicId?: string };
  roleDetails?: RoleDetails;
  createdAt: string;
  updatedAt: string;
}

interface UserDetailsSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  user: UserType | null;
}

const PRIMARY_COLOR = "#0d9488"; // teal-600, matches the sample's theme

// ─── Helpers ──────────────────────────────────────────────────────────────

/**
 * Shows a dash '—' for empty, null, or undefined values so the UI stays clean.
 */
function showValue(value: unknown): string {
  if (value === null || value === undefined || value === "") {
    return "—";
  }
  return String(value);
}

/**
 * Turns a list of strings into a nice comma separated sentence.
 * e.g. ["shirts", "hoodies"] -> "shirts, hoodies"
 */
function showList(values?: string[]): string {
  if (!values || values.length === 0) return "—";
  return values.join(", ");
}

/**
 * Formats an ISO date string into a readable format (e.g., "August 23, 2024").
 */
function formatDate(dateString?: string): string {
  if (!dateString) return "—";

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "Invalid Date";

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Builds a single readable location string from the location object.
 * e.g. "Esenler, Istanbul, Turkey"
 */
function showLocation(location?: Location): string {
  if (!location) return "—";
  const parts = [
    location.city,
    location.stateName,
    location.countryName,
  ].filter(Boolean);
  return parts.length > 0 ? parts.join(", ") : "—";
}

/**
 * Makes sure a website value has "http(s)://" in front of it, so the
 * browser opens it as a link instead of searching for it.
 * e.g. "shorif.vercel.app" -> "https://shorif.vercel.app"
 */
function toClickableUrl(url?: string): string | null {
  if (!url) return null;
  return /^https?:\/\//i.test(url) ? url : `https://${url}`;
}

// Style mapping for different user statuses to display colored badges.
const statusStyles: Record<string, string> = {
  pending: "bg-amber-50 text-amber-700 border border-amber-200",
  accepted: "bg-blue-50 text-blue-700 border border-blue-200",
  rejected: "bg-red-50 text-red-700 border border-red-200",
  blocked: "bg-red-200 text-red-700 border border-red-200",
};

// Style mapping for different user roles to display colored badges.
const roleStyles: Record<string, string> = {
  supplier: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  buyer: "bg-sky-50 text-sky-700 border border-sky-200",
  admin: "bg-orange-100 text-orange-700 border border-orange-200",
};

// ─── Small Reusable Pieces ─────────────────────────────────────────────────

function SectionCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2.5 mb-4">
        <span
          className="flex items-center justify-center w-8 h-8 rounded-xl shrink-0"
          style={{
            backgroundColor: `${PRIMARY_COLOR}1A`,
            color: PRIMARY_COLOR,
          }}
        >
          {icon}
        </span>
        <h3 className="text-sm font-semibold text-slate-800 tracking-wide">
          {title}
        </h3>
      </div>
      {children}
    </div>
  );
}

function InfoGridItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col space-y-1">
      <span className="text-xs font-medium text-slate-400">{label}</span>
      <span className="text-sm font-medium text-slate-700 capitalize break-words">
        {value}
      </span>
    </div>
  );
}

function InfoGridLink({ label, url }: { label: string; url?: string }) {
  const href = toClickableUrl(url);

  return (
    <div className="flex flex-col space-y-1">
      <span className="text-xs font-medium text-slate-400">{label}</span>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-teal-600 hover:underline break-words"
        >
          {showValue(url)}
        </a>
      ) : (
        <span className="text-sm font-medium text-slate-700 break-words">
          —
        </span>
      )}
    </div>
  );
}

/**
 * A small colored badge for showing the user's role (admin, supplier, buyer...).
 */
function RoleBadge({ role }: { role: string }) {
  const roleClass =
    roleStyles[role] ?? "bg-slate-100 text-slate-600 border-slate-200";

  return (
    <span
      className={`inline-flex items-center w-fit rounded-full px-2.5 py-0.5 text-xs font-medium border capitalize tracking-wide ${roleClass}`}
    >
      {showValue(role)}
    </span>
  );
}

/**
 * Shows the user's profile photo, or a simple fallback icon if there isn't one.
 */
function Avatar({ url, name }: { url?: string; name: string }) {
  if (!url) {
    return (
      <div
        className="flex items-center justify-center w-[72px] h-[72px] rounded-2xl text-white shrink-0 shadow-md"
        style={{
          backgroundColor: PRIMARY_COLOR,
          boxShadow: `0 8px 16px -6px ${PRIMARY_COLOR}66`,
        }}
      >
        <User size={32} />
      </div>
    );
  }

  return (
    <div className="relative w-[72px] h-[72px] rounded-2xl overflow-hidden shrink-0 shadow-md">
      <Image
        src={url}
        alt={name || "Profile photo"}
        fill
        sizes="72px"
        className="object-cover"
      />
    </div>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────

const UserDetailsSheet = ({
  open,
  onOpenChange,
  user,
}: UserDetailsSheetProps) => {
  // If no user data is provided, don't render anything.
  if (!user) {
    return null;
  }

  const statusClass =
    statusStyles[user.status] ?? "bg-slate-100 text-slate-600 border-slate-200";

  const companyInfo = user.companyInfo;
  const roleDetails = user.roleDetails;

  // roleDetails is only present for suppliers/factories, so we only
  // show that section when there's actually something to show.
  const hasRoleDetails = Boolean(roleDetails);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-[90%] sm:w-[500px] p-0 flex flex-col bg-slate-50 border-l border-slate-100 shadow-2xl"
      >
        {/* Header */}
        <SheetHeader className="px-6 py-5 border-b border-slate-100 shrink-0 bg-white">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4 min-w-0">
              <Avatar url={user.profilePhoto?.url} name={user.fullName} />

              <div className="min-w-0 space-y-1.5 pt-1">
                <SheetTitle className="text-base font-semibold text-slate-800 leading-snug line-clamp-2">
                  {showValue(user.fullName)}
                </SheetTitle>
                <div className="flex items-center gap-2 flex-wrap">
                  <SheetDescription className="text-xs text-slate-400 normal-case">
                    {showValue(user.email)}
                  </SheetDescription>
                  <span className="text-slate-300 text-[10px]">•</span>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium border capitalize tracking-wide ${statusClass}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {user.status}
                  </span>
                </div>
              </div>
            </div>

            <SheetClose asChild>
              <button
                type="button"
                className="flex items-center justify-center w-8 h-8 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
              >
                <X size={16} />
                <span className="sr-only">Close</span>
              </button>
            </SheetClose>
          </div>
        </SheetHeader>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5">
          {/* User Details Section */}
          <SectionCard title="User Information" icon={<Info size={15} />}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
              <InfoGridItem
                label="Full Name"
                value={showValue(user.fullName)}
              />
              <InfoGridItem
                label="Email Address"
                value={showValue(user.email)}
              />
              <InfoGridItem
                label="Phone Number"
                value={showValue(user.phone)}
              />
              <div className="flex flex-col space-y-1">
                <span className="text-xs font-medium text-slate-400">Role</span>
                <RoleBadge role={user.role} />
              </div>
            </div>
          </SectionCard>

          {/* Company Section */}
          <SectionCard title="Company" icon={<Building size={15} />}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
              <InfoGridItem
                label="Company Name"
                value={showValue(companyInfo?.companyName)}
              />
              <InfoGridLink label="Website" url={companyInfo?.companyWebsite} />
              <InfoGridItem
                label="Street Address"
                value={showValue(companyInfo?.streetAddress)}
              />
              <InfoGridItem
                label="Location"
                value={showLocation(companyInfo?.location)}
              />
            </div>

            {/* Company logo, shown only if one was uploaded */}
            {companyInfo?.companyLogo?.url && (
              <div className="mt-4 relative w-16 h-16 rounded-xl overflow-hidden border border-slate-100">
                <Image
                  src={companyInfo.companyLogo.url}
                  alt={`${companyInfo.companyName || "Company"} logo`}
                  fill
                  sizes="64px"
                  className="object-contain bg-white"
                />
              </div>
            )}
          </SectionCard>

          {/* Factory / Role Details Section (only for roles that have it, e.g. suppliers) */}
          {hasRoleDetails && (
            <SectionCard title="Factory Details" icon={<Factory size={15} />}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                <InfoGridItem
                  label="Factory Name"
                  value={showValue(roleDetails?.factoryName)}
                />
                <InfoGridItem
                  label="Factory Location"
                  value={showValue(roleDetails?.factoryLocation)}
                />
                <InfoGridItem
                  label="Production Capacity"
                  value={showValue(roleDetails?.productionCapacity)}
                />
                <InfoGridItem
                  label="Number of Employees"
                  value={showValue(roleDetails?.numberOfEmployees)}
                />
                <InfoGridItem
                  label="Year Established"
                  value={formatDate(roleDetails?.yearEstablished)}
                />
                <InfoGridItem
                  label="Product Categories"
                  value={showList(roleDetails?.productCategories)}
                />
              </div>
            </SectionCard>
          )}

          {/* Timeline Section */}
          <SectionCard title="Activity Timeline" icon={<Calendar size={15} />}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InfoGridItem
                label="Date Created"
                value={formatDate(user.createdAt)}
              />
              <InfoGridItem
                label="Last Updated"
                value={formatDate(user.updatedAt)}
              />
            </div>
          </SectionCard>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default UserDetailsSheet;

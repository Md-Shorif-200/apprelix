"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { PackageOpen } from "lucide-react";

const sizeClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
};

// ─── Header Variant Color Map ──────────────────────────────────────────────
const headerVariantClasses = {
  default: "border-[#14b8a6]/20 bg-gradient-to-r from-teal-600 to-teal-400",
  primary: "border-teal-500/20 bg-gradient-to-r from-teal-700 to-teal-500",
  danger: "border-red-500/20 bg-gradient-to-r from-red-600 to-red-400",
  success: "border-green-500/20 bg-gradient-to-r from-green-600 to-green-400",
  warning: "border-amber-500/20 bg-gradient-to-r from-amber-600 to-amber-400",
  info: "border-blue-500/20 bg-gradient-to-r from-blue-600 to-blue-400",
} as const;

type ModalVariant = keyof typeof headerVariantClasses;

// Matching text/accent color for subtitle dot + subtitle text per variant
const subtitleVariantClasses: Record<ModalVariant, string> = {
  default: "text-teal-100",
  primary: "text-teal-100",
  danger: "text-red-100",
  success: "text-green-100",
  warning: "text-amber-100",
  info: "text-blue-100",
};

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;

  title: string;
  subtitle?: string;

  children?: React.ReactNode;

  footer?: React.ReactNode;

  size?:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl";

  variant?: ModalVariant;
}

// Empty State

const EmptyState = () => (
  <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 dark:bg-teal-500/10">
      <PackageOpen size={30} className="text-[#14b8a6] dark:text-teal-400" />
    </div>

    <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
      No content available
    </p>

    <p className="max-w-[200px] text-xs text-gray-400 dark:text-gray-500">
      There is nothing to display here yet.
    </p>
  </div>
);

// Main Component

const CustomModal = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  footer,
  size,
  variant = "default",
}: CustomModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className={`
          ${sizeClasses[size ?? "lg"]}
          w-full gap-0 overflow-hidden rounded-2xl border border-gray-100
          bg-white p-0 shadow-2xl ring-0
          dark:border-gray-800 dark:bg-gray-900
        `}
      >
        {/* Header */}
        <DialogHeader
          className={`relative overflow-hidden rounded-t-2xl border-b p-4 ${headerVariantClasses[variant]}`}
        >
          <div className="relative flex items-center justify-between gap-4">
            <div>
              <DialogTitle className="text-sm sm:text-base font-bold tracking-tight text-white">
                {title}
              </DialogTitle>
              {subtitle && (
                <p
                  className={`mt-0.5 flex items-center gap-1 text-xs sm:text-sm ${subtitleVariantClasses[variant]}`}
                >
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/80" />
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </DialogHeader>
        {/* Body */}
        <div className="max-h-[65vh] overflow-y-auto bg-white px-6 py-2 dark:bg-gray-900">
          {children ? children : <EmptyState />}
        </div>
        {/* Footer (Dynamic) */}
        {footer && (
          <DialogFooter className="mx-0 mb-0 flex flex-row items-center justify-end gap-3 rounded-b-2xl border-t border-gray-100 bg-white px-6 py-4 dark:border-gray-800 dark:bg-gray-900">
            {footer}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;
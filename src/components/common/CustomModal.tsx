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
}

// Empty State

const EmptyState = () => (
  <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50">
      <PackageOpen size={30} className="text-teal-500" />
    </div>

    <p className="text-sm font-semibold text-gray-700">No content available</p>

    <p className="max-w-[200px] text-xs text-gray-400">
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
}: CustomModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className={`
          ${sizeClasses[size ?? "lg"]}
          w-full gap-0 overflow-hidden rounded-2xl border border-gray-100
          bg-white p-0 shadow-2xl ring-0
        `}
      >
        {/* Header */}
        <DialogHeader className="relative overflow-hidden rounded-t-2xl border-b border-teal-500/20 bg-gradient-to-r from-teal-600 to-teal-400 p-4">
          <div className="relative flex items-center justify-between gap-4">
            <div>
              <DialogTitle className="text-sm sm:text-base font-bold tracking-tight text-white">
                {title}
              </DialogTitle>
              {subtitle && (
                <p className="mt-0.5 flex items-center gap-1 text-xs sm:text-sm text-teal-100">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/80" />
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </DialogHeader>
        {/* Body */}
        <div className="max-h-[65vh] overflow-y-auto px-6 py-2">
          {children ? children : <EmptyState />}
        </div>
        {/* Footer (Dynamic) */}
        {footer && (
          <DialogFooter className="mx-0 mb-0 flex flex-row items-center justify-end gap-3 rounded-b-2xl border-t border-gray-100 bg-white px-6 py-4">
            {footer}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;

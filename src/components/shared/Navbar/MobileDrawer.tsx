"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu, X } from "lucide-react";

import NavSearch from "./NavSearch";
import NavLinks from "./NavLinks";
import Support from "./Support";
import Logo from "./Logo";

export function MobileDrawer() {
  return (
    <Sheet>
      {/* Trigger */}
      <SheetTrigger asChild>
        <button className="cursor-pointer rounded-md p-2 transition hover:bg-gray-100">
          <Menu size={20} />
        </button>
      </SheetTrigger>

      {/* Drawer */}
      <SheetContent side="left" showCloseButton={false} className="p-0  ">
        {/* Custom Header */}
        <div className="flex items-center justify-between border-b border-ds-border px-4 py-4">
          {/* Logo Section */}
          <div>
            <Logo section="navbar" />
          </div>

          {/* Close Button Section */}
          <SheetClose asChild>
            <button className="cursor-pointer rounded-md p-2 transition hover:bg-gray-100">
              <X size={20} />
            </button>
          </SheetClose>
        </div>

        {/* Search */}
        <div className="px-4">
          <NavSearch />
        </div>

        {/* Nav Links */}
        <div className="px-4 ">
          <NavLinks />
        </div>

        <div className="px-4 mt-8">
          <Support />
        </div>
      </SheetContent>
    </Sheet>
  );
}

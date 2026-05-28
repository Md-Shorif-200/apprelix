"use client";

import NavHeader from "./NavHeader";
import BottomNavbar from "./BottomNavbar";

const Navbar = () => {
  return (
    <>
      {/* ── Main Navbar ── */}
      <nav className="bg-[#F4F4F4] sticky top-0 z-50">
        <NavHeader />

        <div className="border-t border-gray-200" />
      </nav>
      <BottomNavbar />
    </>
  );
};

export default Navbar;

"use client";

import NavHeader from "./NavHeader";
import BottomNavbar from "./BottomNavbar";

const Navbar = () => {
  return (
    <>
      {/* Sticky wrapper for both nav bars */}
      <div className="sticky top-0 z-50 overflow-visible">
        {/* Top Nav */}
        <nav className="bg-ds-navbar overflow-visible">
          <NavHeader />
        </nav>
      </div>
      {/* Bottom Nav */}
      <BottomNavbar />
    </>
  );
};

export default Navbar;

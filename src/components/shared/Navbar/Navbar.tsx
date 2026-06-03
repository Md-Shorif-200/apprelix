"use client";

import NavHeader from "./NavHeader";
import BottomNavbar from "./BottomNavbar";

const Navbar = () => {
  return (
    <>
      {/* Sticky wrapper for both nav bars */}
      <div className="sticky top-0 z-50">
        {/* Top Nav */}
        <nav className="bg-ds-navbar">
          <NavHeader />
        </nav>
      </div>
      {/* Bottom Nav */}
      <BottomNavbar />
    </>
  );
};

export default Navbar;

"use client";

// import { useState } from "react";
import NavHeader from "./NavHeader";
import BottomNavbar from "./BottomNavbar";
// import MobileDrawer from "./MobileDrawer";


const Navbar = () => {
  // Controls whether mobile drawer is open or closed
  // const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // // Open drawer
  // const openDrawer = () => setIsDrawerOpen(true);

  // // Close drawer
  // const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      {/* ── Main Navbar ── */}
      <nav className="bg-[#F4F4F4] sticky top-0 z-50">
      
        <NavHeader />

        <div className="border-t border-gray-200" />

    
        <div className="">
          <BottomNavbar />
        </div>
      </nav>

 
      {/* <MobileDrawer isOpen={isDrawerOpen} onClose={closeDrawer} /> */}
    </>
  );
};

export default Navbar;
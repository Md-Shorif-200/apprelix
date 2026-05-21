import { CircleUserRound } from "lucide-react";

import Container from "@/components/common/Container";

import NavSearch from "./NavSearch";
import { MobileDrawer } from "./MobileDrawer";
import Navlogo from "./Navlogo";
import Support from "./Support";

// NavHeader now accepts onMenuClick prop to trigger drawer open
const NavHeader = () => {
  return (
    <Container>
      <div className="flex items-center justify-between py-4 gap-6">
        {/* ── Logo ── */}
        <Navlogo />
        {/* ── Search Bar ── hidden below lg, visible lg+ ── */}
        <div className="hidden lg:flex flex-1 max-w-xl">
          <NavSearch />
        </div>

        {/* ── Right Section ── */}
        <div className="flex items-center gap-5 flex-shrink-0">
          {/* Support — hidden below lg */}
                  <div className="hidden lg:block">
                  <Support />
                  </div>
          {/* Divider — hidden below lg */}
          <div className="hidden lg:block h-8 w-px bg-ds-border" />

          {/* Login — always visible */}
          <div
         
            className="
              group flex items-center gap-2.5 
              transition-all duration-300 ease-out
              cursor-pointer "
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ds-primary/10 transition-colors duration-300 group-hover:bg-ds-primary/20">
              <CircleUserRound
                size={18}
                className="text-ds-primary transition-transform duration-300 group-hover:scale-110"
              />
            </span>
            <span className="text-sm font-bold text-ds-text transition-colors duration-300 group-hover:text-ds-primary">
              Login
            </span>
          </div>

       
          <div className="lg:hidden">
            <MobileDrawer />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NavHeader;

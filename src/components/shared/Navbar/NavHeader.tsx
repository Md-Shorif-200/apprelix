import { CircleUserRound, Headset } from "lucide-react";

import Container from "@/components/common/Container";

import NavSearch from "./NavSearch";
import { MobileDrawer } from "./MobileDrawer";
import Navlogo from "./Navlogo";

// NavHeader now accepts onMenuClick prop to trigger drawer open
const NavHeader = () => {
  return (
    <Container>
      <div className="flex items-center justify-between py-4 gap-6">
        {/* ── Logo ── */}
              <Navlogo/>
        {/* ── Search Bar ── hidden below lg, visible lg+ ── */}
        <div className="hidden lg:flex flex-1 max-w-xl">
          <NavSearch />
        </div>

        {/* ── Right Section ── */}
        <div className="flex items-center gap-5 flex-shrink-0">
          {/* Support — hidden below lg */}
          <div className="hidden lg:flex items-center gap-2 cursor-pointer group">
            <div className="relative">
              <Headset
                size={22}
                className="text-ds-primary group-hover:text-teal-700 transition-colors duration-200"
              />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full border border-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] text-ds-text font-semibold">
                Need Help?
              </span>
              <span className="text-xs font-semibold text-ds-text group-hover:text-ds-primary transition-colors duration-200">
                24/7 Support
              </span>
            </div>
          </div>

          {/* Divider — hidden below lg */}
          <div className="hidden lg:block h-6 w-px bg-gray-200" />

          {/* Login — always visible */}
          <button className="flex items-center gap-2 cursor-pointer group">
            <CircleUserRound
              size={22}
              className="text-ds-primary group-hover:text-teal-600 transition-colors duration-200"
            />
            <span className="text-base font-semibold text-ds-text group-hover:text-teal-600 transition-colors duration-200">
              Login
            </span>
          </button>

          {/* ── Menu Icon — visible only below lg ── */}
          {/* <button
            onClick={onMenuClick}
            className="lg:hidden flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            aria-label="Open menu"
          >
            <Menu size={24} className="text-gray-700" />
          </button> */}
          <div className="lg:hidden">
            <MobileDrawer />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NavHeader;

import { CircleUserRound } from "lucide-react";

import Container from "@/components/common/Container";

import { MobileDrawer } from "./MobileDrawer";

import NavLinks from "./NavLinks";
import Logo from "./Logo";
import ContactUs from "./ContactUs";
import Link from "next/link";

// NavHeader now accepts onMenuClick prop to trigger drawer open
const NavHeader = () => {
  return (
    <Container>
      <div className="flex items-center justify-between py-4 gap-6 ">
        {/* ── Logo ── */}
        <Logo section="navbar" />
        {/* ── Search Bar ── hidden below lg, visible lg+ ── */}
        <div className="hidden lg:flex flex-1 max-w-xl">
          {/* <NavSearch /> */}
          <NavLinks />
        </div>

        {/* ── Right Section ── */}
        <div className="flex items-center gap-5 flex-shrink-0">
          {/* Contact Us — hidden below lg */}
          <div className="hidden lg:block">
            <ContactUs />
          </div>
          {/* Divider — hidden below lg */}
          <div className="hidden lg:block h-8 w-px bg-ds-border" />

          {/* Login — always visible */}
          <Link
            href="/login"
            className="
              group flex items-center gap-2.5
              transition-[transform,opacity] duration-200 ease-out
              cursor-pointer"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ds-primary/10 group-hover:bg-ds-primary/20">
              <CircleUserRound
                size={18}
                className="text-ds-primary transition-transform duration-200 group-hover:scale-110"
              />
            </span>
            <span className="text-sm font-bold text-ds-text group-hover:text-ds-primary">
              Login
            </span>
          </Link>

          <div className="lg:hidden">
            <MobileDrawer />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NavHeader;

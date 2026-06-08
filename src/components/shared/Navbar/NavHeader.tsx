
import Container from "@/components/common/Container";

import { MobileDrawer } from "./MobileDrawer";

import NavLinks from "./NavLinks";
import Logo from "./Logo";
import ContactUs from "./ContactUs";
import Authbutton from "./Authbutton";


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

           <Authbutton />

          <div className="lg:hidden">
            <MobileDrawer />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NavHeader;

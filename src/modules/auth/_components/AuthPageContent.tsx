
import RegistrationContentTab from "./RegistrationContentTab";
import Logo from "@/components/shared/Navbar/Logo";




const AuthPageContent = () => {
  return (
    <div className="relative  w-full h-full min-h-screen bg-ds-primary ">
      {/* Banner */}
      <div className="absolute inset-0 z-0">
      

        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="  relative z-10 flex flex-col justify-center h-full min-h-screen px-8 py-12">
        {/* Logo */}
        <div className=" mb-3">
         <Logo section="footer" />
        </div>

        {/* Subtitle */}
        <h2 className="text-xl font-semibold text-white mb-3">
          AI-Powered Apparel Sourcing Platform
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-md">
          Connect with verified buyers and suppliers worldwide. Create RFQs,
          manage quotations, track production — all in one intelligent platform
          built for the modern apparel industry.
        </p>

        <RegistrationContentTab />
      </div>
    </div>
  );
};

export default AuthPageContent;
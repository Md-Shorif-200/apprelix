import Image from "next/image";
import Link from "next/link";

const logo = "/logo/logo.png";

const Navlogo = () => {
  return (
    <div>
      <Link href="/" className="flex items-end gap-1">
        {/* Icon */}
        <div
          className="relative 
  w-10 h-10 
  lg:w-12 lg:h-12 "
        >
          <Image
            src={logo}
            alt="Apprelix Logo"
            fill
            priority
            className="object-contain"
          />
        </div>
        {/* Text */}
        <div className="flex flex-col items-start leading-none">
          {/* Brand Name */}
          <div className=" text-lg sm:text-xl xl:text-2xl font-bold tracking-[.5px]">
            <span className="text-teal-500">Appre</span>
            <span className="text-gray-800">lix</span>
          </div>
          {/* Tagline */}
          <span className="w-full text-[8px] xl:text-[10px] font-bold uppercase tracking-[.8px] text-ds-text mt-.5">
            SMART SOURCING
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Navlogo;

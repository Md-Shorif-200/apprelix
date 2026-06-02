import Image from "next/image";
import Link from "next/link";

const logo = "/logo/logo.png";

const Logo = ({ section }: { section: "navbar" | "footer" }) => {
  return (
    <div>
      <Link href="/" className="flex items-end gap-1">
        {/* Icon */}
        <div
          className="relative w-9 h-9
  sm:w-10 sm:h-10"
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
          <div className=" text-lg sm:text-xl  font-bold tracking-[.5px]">
            <span className="text-teal-500">Appre</span>
            <span
              className={section === "navbar" ? "text-ds-text" : "text-white"}
            >
              lix
            </span>
          </div>
          {/* Tagline */}
          <span
            className={`w-full text-[8px] xl:text-[10px] font-bold uppercase tracking-[.8px]  mt-.5 ${section === "navbar" ? "text-ds-text" : "text-white"}`}
          >
            SMART SOURCING
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Logo;

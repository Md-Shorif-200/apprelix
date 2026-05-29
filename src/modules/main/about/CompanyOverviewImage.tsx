"use client";

import Image from "next/image";

const about_img_1 = "/about/about-img-1.webp";
const about_img_2 = "/about/about-img-2.webp";

export const CompanyOverviewImage = () => {
  return (
    <div className="relative w-full h-[640px] lg:h-full flex items-center justify-center">
      
      {/* Right Large Image */}
      <div className="absolute right-0 top-0 w-[70%]  h-[610px] lg:h-full rounded-[30px] overflow-hidden">
        <Image
          src={about_img_2}
          alt="Factory Image"
          fill
          priority = {true}
          quality={70}
          className="object-cover"
        />
      </div>

      {/* Left Floating Image */}
      <div className="absolute left-0 top-[70px] w-[62%] h-[470px] rounded-[30px] overflow-hidden border-[8px] border-white z-10">
        <Image
          src={about_img_1}
          alt="Textile Machine"
          fill
          priority = {true}
          quality={70}
          className="object-cover"
        />
      </div>
    </div>
  );
};
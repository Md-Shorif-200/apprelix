import Image from "next/image";
import { Play, PhoneCall } from "lucide-react";

const ABOUT_IMG_1 = "/about/about-img-1.webp";
const ABOUT_IMG_2 = "/about/about-img-2.webp";

export const SuccessStoryOverviewImage = () => (
  <div className="mx-auto flex w-full max-w-[650px] flex-row items-end justify-center gap-6">
    <div className="flex w-[280px] flex-col gap-5 sm:w-[300px] lg:w-[320px]">
      <div className="relative h-[320px] w-full overflow-hidden rounded-tr-[50px] rounded-bl-[50px] border-5 border-ds-card shadow-sm lg:h-[380px]">
        <Image
          src={ABOUT_IMG_1}
          alt="Global apparel sourcing success"
          fill
          priority
          quality={75}
          sizes="(max-width: 1024px) 300px, 320px"
          className="object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <button
            type="button"
            aria-label="Play video"
            className="flex h-20 w-20 items-center justify-center rounded-full bg-ds-card/90 shadow-xl backdrop-blur-sm transition motion-safe:hover:scale-105 lg:h-24 lg:w-24"
          >
            <Play size={30} className="ml-1 fill-ds-primary text-ds-primary" />
          </button>
        </div>
      </div>

      <div className="flex w-full items-center gap-4 rounded-tr-[50px] rounded-bl-[50px] bg-ds-primary p-5 text-ds-primary-foreground shadow-lg lg:p-6">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ds-card shadow-sm lg:h-14 lg:w-14">
          <PhoneCall size={22} className="text-ds-primary" />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-[10px] font-bold tracking-wider uppercase lg:text-xs text-ds-primary-foreground/90">
            Online Support
          </p>
          <h4 className="mt-0.5 text-xl font-bold whitespace-nowrap lg:text-2xl">
            +258 152 3659
          </h4>
        </div>
      </div>
    </div>

    <div className="relative mt-12 h-[300px] w-[240px] overflow-hidden rounded-tl-[50px] rounded-br-[50px] sm:w-[260px] lg:h-[390px] lg:w-[300px]">
      <Image
        src={ABOUT_IMG_2}
        alt="Buyers and suppliers collaborating"
        fill
        quality={70}
        sizes="(max-width: 1024px) 260px, 300px"
        className="object-cover"
      />
    </div>
  </div>
);

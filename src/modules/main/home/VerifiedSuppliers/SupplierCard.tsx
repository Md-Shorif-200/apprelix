import Image from "next/image";
import {
  ShieldCheck,
  MapPin,
  Star,
  ArrowUpRight,
  CheckCircle2,
  Zap,
  Clock,
} from "lucide-react";

import type { Supplier } from "../_data/suppliers";

interface SupplierCardProps {
  supplier: Supplier;
}

const SupplierCard = ({ supplier }: SupplierCardProps) => {
  return (
    <div className="group bg-ds-card rounded-2xl border border-ds-border shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_32px_-6px_rgba(0,0,0,0.12)] hover:border-ds-primary/30 transition-all duration-400 flex flex-col h-full overflow-visible relative">
      <div className="relative h-28 w-full overflow-hidden rounded-t-2xl bg-slate-900">
        <Image
          src={supplier.bannerImage}
          alt={`${supplier.name} Factory`}
          fill
          quality={75}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover opacity-40 motion-safe:group-hover:scale-105 motion-safe:transition-transform motion-safe:duration-700"
        />
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="inline-flex items-center gap-1 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md shadow-sm">
            <ShieldCheck className="w-3 h-3" /> Top Verified
          </span>
          <span className="inline-flex items-center gap-1 bg-white/10 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-0.5 rounded-md border border-white/10">
            <MapPin className="w-3 h-3 text-slate-300" /> {supplier.country}
          </span>
        </div>
      </div>

      <div className="absolute top-14 left-5 z-10">
        <div className="relative w-16 h-16 rounded-xl bg-ds-card p-1.5 shadow-[0_4px_12px_-3px_rgba(0,0,0,0.12)] border border-ds-border flex items-center justify-center overflow-hidden group-hover:border-ds-primary transition-colors duration-300">
          <Image
            src={supplier.logo}
            alt={`${supplier.name} Logo`}
            fill
            quality={75}
            sizes="64px"
            className="object-contain p-1"
          />
        </div>
      </div>

      <div className="pt-8 p-5 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="font-bold text-ds-text text-base lg:text-lg leading-snug tracking-tight hover:text-ds-primary transition-colors cursor-pointer line-clamp-1">
            {supplier.name}
          </h3>
          <div className="flex items-center gap-1.5 mt-1">
            <div className="flex items-center text-amber-500">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className="text-xs font-bold text-ds-text ml-1">
                {supplier.rating}
              </span>
            </div>
            <span className="text-[11px] text-ds-muted-foreground">
              ({supplier.reviewsCount} verified audits)
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5 mb-4">
          <div className="relative flex items-start gap-2.5 p-3 rounded-xl bg-ds-primary/10 border border-ds-primary/20 overflow-hidden">
            <div className="absolute -right-2 -bottom-2 w-10 h-10 rounded-full bg-ds-primary/10 blur-md" />
            <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-ds-primary/15 flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-ds-primary" />
            </div>
            <div className="min-w-0">
              <p className="text-[9.5px] font-semibold text-ds-primary/80 uppercase tracking-wider leading-none mb-1">
                Mo. Capacity
              </p>
              <p className="text-xs font-extrabold text-ds-text tracking-tight leading-tight truncate">
                {supplier.capacity}
              </p>
            </div>
          </div>

          <div className="relative flex items-start gap-2.5 p-3 rounded-xl bg-gradient-to-br from-violet-50 to-purple-50/60 border border-violet-100/80 overflow-hidden">
            <div className="absolute -right-2 -bottom-2 w-10 h-10 rounded-full bg-violet-100/50 blur-md" />
            <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-violet-500/10 flex items-center justify-center">
              <Clock className="w-3.5 h-3.5 text-violet-600" />
            </div>
            <div className="min-w-0">
              <p className="text-[9.5px] font-semibold text-violet-600/80 uppercase tracking-wider leading-none mb-1">
                Track Record
              </p>
              <p className="text-xs font-extrabold text-ds-text tracking-tight leading-tight truncate">
                {supplier.experience}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-3 border-t border-ds-border">
          <div className="flex flex-wrap gap-1.5">
            {supplier.certifications.map((cert) => (
              <div
                key={cert}
                className="group/cert inline-flex items-center gap-1 bg-ds-card hover:bg-emerald-500/10 border border-ds-border hover:border-emerald-500/30 px-2 py-1 rounded-lg transition-colors duration-200 cursor-default shadow-sm"
              >
                <CheckCircle2 className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                <span className="text-[9.5px] font-extrabold text-ds-muted-foreground group-hover/cert:text-emerald-400 tracking-wider uppercase transition-colors duration-200 whitespace-nowrap">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>

        <button className="mt-5 w-full bg-ds-foreground hover:bg-ds-primary text-ds-background hover:text-ds-primary-foreground text-xs font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 shadow-sm group-hover:shadow">
          Request Quotation / View Profile
          <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>
    </div>
  );
};

export default SupplierCard;

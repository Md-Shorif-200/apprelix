import {
  ShieldCheck,
  MapPin,
  Star,
  Award,
  Factory,
  ArrowUpRight,
  CheckCircle2,
  Zap,
  Clock,
} from "lucide-react";

interface Supplier {
  id: string;
  name: string;
  logo: string;
  bannerImage: string;
  category: string[];
  rating: number;
  reviewsCount: number;
  certifications: string[];
  country: string;
  capacity: string;
  experience: string;
}

interface SupplierCardProps {
  supplier: Supplier;
}

const SupplierCard = ({ supplier }: SupplierCardProps) => {
  return (
    <div className="group bg-white rounded-2xl border border-slate-200/60 shadow-[0_2px_8px_-3px_rgba(15,23,42,0.05)] hover:shadow-[0_16px_32px_-6px_rgba(15,23,42,0.08)] hover:border-slate-300/80 transition-all duration-400 flex flex-col h-full overflow-visible relative">
      {/* ---- ১. ফ্যাক্টরি ব্যানার সেকশন ---- */}
      <div className="relative h-28 w-full overflow-hidden rounded-t-2xl bg-slate-900">
        <img
          src={supplier.bannerImage}
          alt={`${supplier.name} Factory`}
          className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
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

      {/* ---- ২. ওভারল্যাপিং লোগো সেকশন ---- */}
      <div className="absolute top-14 left-5 z-10">
        <div className="w-16 h-16 rounded-xl bg-white p-1.5 shadow-[0_4px_12px_-3px_rgba(15,23,42,0.12)] border border-slate-100 flex items-center justify-center overflow-hidden group-hover:border-teal-500 transition-colors duration-300">
          <img
            src={supplier.logo}
            alt={`${supplier.name} Logo`}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* ---- ৩. মেইন কন্টেন্ট বডি ---- */}
      <div className="pt-8 p-5 flex flex-col flex-grow">
        {/* কোম্পানি নেম এবং রেটিং */}
        <div className="mb-4">
          <h3 className="font-bold text-slate-900 text-base lg:text-lg leading-snug tracking-tight hover:text-teal-600 transition-colors cursor-pointer line-clamp-1">
            {supplier.name}
          </h3>
          <div className="flex items-center gap-1.5 mt-1">
            <div className="flex items-center text-amber-500">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className="text-xs font-bold text-slate-700 ml-1">
                {supplier.rating}
              </span>
            </div>
            <span className="text-[11px] text-slate-400">
              ({supplier.reviewsCount} verified audits)
            </span>
          </div>
        </div>

        {/* ---- ৪. B2B ফ্যাক্টরি ম্যাট্রিক্স — REDESIGNED ---- */}
        <div className="grid grid-cols-2 gap-2.5 mb-4">
          {/* Capacity কার্ড */}
          <div className="relative flex items-start gap-2.5 p-3 rounded-xl bg-gradient-to-br from-teal-50 to-cyan-50/60 border border-teal-100/80 overflow-hidden">
            {/* সাটল ডেকোরেটিভ ব্লব */}
            <div className="absolute -right-2 -bottom-2 w-10 h-10 rounded-full bg-teal-100/50 blur-md" />
            <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-teal-500/10 flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-teal-600" />
            </div>
            <div className="min-w-0">
              <p className="text-[9.5px] font-semibold text-teal-600/80 uppercase tracking-wider leading-none mb-1">
                Mo. Capacity
              </p>
              <p className="text-xs font-extrabold text-slate-800 tracking-tight leading-tight truncate">
                {supplier.capacity}
              </p>
            </div>
          </div>

          {/* Experience কার্ড */}
          <div className="relative flex items-start gap-2.5 p-3 rounded-xl bg-gradient-to-br from-violet-50 to-purple-50/60 border border-violet-100/80 overflow-hidden">
            <div className="absolute -right-2 -bottom-2 w-10 h-10 rounded-full bg-violet-100/50 blur-md" />
            <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-violet-500/10 flex items-center justify-center">
              <Clock className="w-3.5 h-3.5 text-violet-600" />
            </div>
            <div className="min-w-0">
              <p className="text-[9.5px] font-semibold text-violet-600/80 uppercase tracking-wider leading-none mb-1">
                Track Record
              </p>
              <p className="text-xs font-extrabold text-slate-800 tracking-tight leading-tight truncate">
                {supplier.experience}
              </p>
            </div>
          </div>
        </div>

        {/* ---- ৫. সার্টিফিকেশনস — REDESIGNED (শুধু আইকন + ভ্যালু) ---- */}
        <div className="mt-auto pt-3 border-t border-slate-100/80">
          <div className="flex flex-wrap gap-1.5">
            {supplier.certifications.map((cert, index) => (
              <div
                key={index}
                className="group/cert inline-flex items-center gap-1 bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-200 px-2 py-1 rounded-lg transition-colors duration-200 cursor-default shadow-[0_1px_3px_rgba(15,23,42,0.04)]"
              >
                {/* ছোট রঙিন ডট ইন্ডিকেটর */}
                <CheckCircle2 className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                <span className="text-[9.5px] font-extrabold text-slate-600 group-hover/cert:text-emerald-700 tracking-wider uppercase transition-colors duration-200 whitespace-nowrap">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* অ্যাকশন বাটন */}
        <button className="mt-5 w-full bg-slate-900 hover:bg-teal-600 text-white text-xs font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 shadow-sm group-hover:shadow">
          Request Quotation / View Profile
          <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>
    </div>
  );
};

export default SupplierCard;

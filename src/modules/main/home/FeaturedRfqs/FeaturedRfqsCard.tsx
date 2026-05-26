// components/FeaturedRfqsCard.jsx

import Image from "next/image";
import {
  Calendar,
  Package,
  Layers,
  CircleDollarSign,
  MapPin,
  Send,
} from "lucide-react";

interface FeaturedRfqsCardProps {
  rfq: {
    id: number;
    image: string;
    title: string;
    description: string;
    category: string;
    status: string;
    quantity: string;
    budget: string;
    material: string;
    deadline: string;
    buyerName: string;
    location: string;
    quotesCount: number;
  };
}

const FeaturedRfqsCard = ({ rfq }: FeaturedRfqsCardProps) => {
  const isUrgent = rfq.status.toLowerCase() === "urgent";

  return (
    <div className="group flex flex-col bg-white rounded-2xl border border-slate-100 hover:border-teal-200 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_-8px_rgba(15,23,42,0.12)] transition-all duration-500 ease-out overflow-hidden h-full">
      
      {/* ==============================
          IMAGE + BADGE HEADER SECTION
      ============================== */}
      <div className="relative w-full h-48 overflow-hidden bg-slate-100">
        <Image
          src={rfq.image}
          alt={rfq.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />

        {/* Dark gradient overlay at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-slate-900/10" />

        {/* Category Badge - Top Left */}
        <div className="absolute top-3 left-3">
          <span className="bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1.5 rounded-lg tracking-wide">
            {rfq.category}
          </span>
        </div>

        {/* Status Badge - Top Right */}
        <div className="absolute top-3 right-3">
          <span
            className={`text-[11px] font-semibold px-3 py-1.5 rounded-lg tracking-wider uppercase border backdrop-blur-md ${
              isUrgent
                ? "bg-rose-500/15 border-rose-400/30 text-rose-500"
                : "bg-emerald-500/15 border-emerald-400/30 text-emerald-500"
            }`}
          >
            {rfq.status}
          </span>
        </div>

        {/* Quotes Count - Bottom Left (inside image) */}
        <div className="absolute bottom-3 left-3">
          <span className="bg-white/15 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg border border-white/20">
            {rfq.quotesCount} Quotes Received
          </span>
        </div>
      </div>

      {/* ==============================
          MAIN CONTENT SECTION
      ============================== */}
      <div className="p-5 flex flex-col flex-grow">

        {/* Title & Description */}
        <div className="mb-4">
          <h3 className="text-slate-900 font-bold text-base leading-snug tracking-tight mb-1.5 group-hover:text-teal-600 transition-colors duration-300 line-clamp-1">
            {rfq.title}
          </h3>
          <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
            {rfq.description}
          </p>
        </div>

        {/* ==============================
            DATA ROWS SECTION
        ============================== */}
        <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-4 text-xs">

          {/* Volume Required */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-400">
              <div className="w-6 h-6 rounded-md bg-slate-50 flex items-center justify-center">
                <Package className="w-3.5 h-3.5" />
              </div>
              <span>Vol. Required</span>
            </div>
            <span className="font-semibold text-slate-800">{rfq.quantity}</span>
          </div>

          {/* Estimated Budget */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-400">
              <div className="w-6 h-6 rounded-md bg-teal-50 flex items-center justify-center">
                <CircleDollarSign className="w-3.5 h-3.5 text-teal-500" />
              </div>
              <span>Est. Budget</span>
            </div>
            <span className="font-bold text-teal-600">{rfq.budget}</span>
          </div>

          {/* Material Spec */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-400">
              <div className="w-6 h-6 rounded-md bg-slate-50 flex items-center justify-center">
                <Layers className="w-3.5 h-3.5" />
              </div>
              <span>Material</span>
            </div>
            <span className="font-medium text-slate-700 truncate max-w-[130px]">
              {rfq.material}
            </span>
          </div>

          {/* Deadline */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-400">
              <div className="w-6 h-6 rounded-md bg-slate-50 flex items-center justify-center">
                <Calendar className="w-3.5 h-3.5" />
              </div>
              <span>Deadline</span>
            </div>
            <span className="font-medium text-slate-700">{rfq.deadline}</span>
          </div>
        </div>

     
        <div className="relative pt-4 border-t border-slate-100 h-14 overflow-hidden">

          {/* --- BUYER INFO FOOTER ---
              Visible by default
              Slides down & hides on hover
          */}
          <div className="absolute inset-0 flex items-center justify-between px-0 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:translate-y-4">

            {/* Buyer Avatar + Name + Location */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 text-white font-bold text-xs flex items-center justify-center shadow-sm">
                {rfq.buyerName.charAt(0)}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-slate-800 font-semibold text-xs tracking-tight truncate max-w-[100px]">
                  {rfq.buyerName}
                </span>
                <span className="text-slate-400 text-[10px] flex items-center gap-0.5 truncate max-w-[100px]">
                  <MapPin className="w-2.5 h-2.5 shrink-0" />
                  {rfq.location.split(",")[1]?.trim() || rfq.location}
                </span>
              </div>
            </div>

            {/* Quote Count Badge */}
            <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-50 text-slate-600 font-semibold text-[11px] border border-slate-200/80">
              {rfq.quotesCount} Quotes
            </span>
          </div>

       
          <div className="absolute inset-0 flex items-center opacity-0 translate-y-4 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
            <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold text-xs py-2.5 px-4 rounded-xl shadow-[0_4px_12px_-2px_rgba(20,184,166,0.4)] hover:shadow-[0_6px_16px_-2px_rgba(20,184,166,0.5)] transition-all duration-300 tracking-wide">
              <Send className="w-3.5 h-3.5" />
              Submit Proposal
            </button>
          </div>

        </div>
        {/* END FOOTER SECTION */}

      </div>
      {/* END MAIN CONTENT SECTION */}

    </div>
  );
};

export default FeaturedRfqsCard;
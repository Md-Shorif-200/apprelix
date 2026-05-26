// components/FeaturedRfqsCard.jsx

import Image from "next/image";
import { Calendar, Package, Layers, CircleDollarSign, MapPin } from "lucide-react";

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
    <div className="group flex flex-col bg-white rounded-xl border border-slate-100 hover:border-slate-200/80 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_24px_-4px_rgba(15,23,42,0.08)] transition-all duration-300 ease-out overflow-hidden h-full">
      
      {/* ---- Image & Badge Context Header ---- */}
      <div className="relative w-full h-44 overflow-hidden bg-slate-100">
        <Image
          src={rfq.image}
          alt={rfq.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {/* Soft elegant gradient shield */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-slate-950/10" />

        {/* Floating Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className="bg-slate-900/90 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-md tracking-wide">
            {rfq.category}
          </span>
        </div>

        <div className="absolute top-3 right-3">
          <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-md tracking-wider uppercase shadow-sm border backdrop-blur-md ${
            isUrgent 
              ? "bg-rose-500/10 border-rose-400/20 text-rose-600" 
              : "bg-emerald-500/10 border-emerald-400/20 text-emerald-600"
          }`}>
            {rfq.status}
          </span>
        </div>
      </div>

      {/* ---- Content Block ---- */}
      <div className="p-5 flex flex-col flex-grow">
        
        {/* Core Description Data */}
        <div className="mb-4 flex-grow">
          <h3 className="text-slate-900 font-bold text-base leading-snug tracking-tight mb-2 group-hover:text-teal-600 transition-colors duration-200 line-clamp-1">
            {rfq.title}
          </h3>
          <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
            {rfq.description}
          </p>
        </div>

        {/* ---- Clean Data Matrix Rows ---- */}
        <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-4 text-slate-600 text-xs">
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-400">
              <Package className="w-3.5 h-3.5" />
              <span>Vol. Required</span>
            </div>
            <span className="font-semibold text-slate-800">{rfq.quantity}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-400">
              <CircleDollarSign className="w-3.5 h-3.5" />
              <span>Est. Budget</span>
            </div>
            <span className="font-bold text-teal-600">{rfq.budget}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-400">
              <Layers className="w-3.5 h-3.5" />
              <span>Material Spec</span>
            </div>
            <span className="font-medium text-slate-700 truncate max-w-[130px]">{rfq.material}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-400">
              <Calendar className="w-3.5 h-3.5" />
              <span>Submission Due</span>
            </div>
            <span className="font-medium text-slate-700">{rfq.deadline}</span>
          </div>

        </div>

        {/* ---- User Attribution / Quote Status Footer ---- */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 text-teal-600 font-bold text-xs flex items-center justify-center shadow-inner">
              {rfq.buyerName.charAt(0)}
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-slate-800 font-semibold text-xs tracking-tight truncate max-w-[100px]">{rfq.buyerName}</span>
              <span className="text-slate-400 text-[10px] flex items-center gap-0.5 truncate max-w-[100px]">
                <MapPin className="w-2.5 h-2.5 shrink-0" />
                {rfq.location.split(',')[1] || rfq.location}
              </span>
            </div>
          </div>

          <div className="text-right shrink-0">
            <span className="inline-flex items-center px-2 py-1 rounded-md bg-slate-50 text-slate-700 font-bold text-xs border border-slate-200/60">
              {rfq.quotesCount} Received
            </span>
          </div>
        </div>

      </div>

      {/* ---- Premium Interactive Call to Action Layout ---- */}
      <div className="border-t border-slate-100 bg-slate-50/50 group-hover:bg-teal-600 p-3 text-center transition-all duration-300 ease-in-out cursor-pointer">
        <span className="text-slate-700 group-hover:text-white font-semibold text-xs tracking-wide flex items-center justify-center gap-1">
          Submit Proposal
          <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">→</span>
        </span>
      </div>

    </div>
  );
};

export default FeaturedRfqsCard;
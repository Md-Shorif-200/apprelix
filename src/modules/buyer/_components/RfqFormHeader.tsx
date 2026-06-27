import { FileText } from "lucide-react";
import React from "react";

const RfqFormHeader = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-teal-600 to-teal-500 px-8 py-7">
      <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/5" />
      <div className="absolute -bottom-10 right-12 h-24 w-24 rounded-full bg-white/5" />
      <div className="relative flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/25">
          <FileText size={22} className="text-white" />
        </div>
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-white">Create New RFQ</h1>
            <span className="rounded-full border border-white/25 bg-white/15 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
              Request For Quotation
            </span>
          </div>
          <p className="mt-1 text-sm text-teal-100">
            Fill in the details below to receive competitive quotations from
            verified suppliers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RfqFormHeader;

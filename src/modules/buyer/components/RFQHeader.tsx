"use client";

import { FileText } from "lucide-react";

export default function RFQHeader() {
  return (
    <div className="flex items-center gap-4">
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center shrink-0">
        <FileText size={22} className="text-white" />
      </div>

      {/* Content */}
      <div>
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-semibold text-white">Create New RFQ</h1>

          <span className="rounded-md border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-white uppercase">
            Request For Quotation
          </span>
        </div>

        <p className="mt-1 text-sm text-teal-50">
          Fill in the details below and receive competitive quotations from
          verified suppliers.
        </p>
      </div>
    </div>
  );
}

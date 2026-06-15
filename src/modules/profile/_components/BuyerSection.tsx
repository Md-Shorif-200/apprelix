"use client";

import { ShoppingBag, Pencil } from "lucide-react";
import { Tag, renderValue } from "./ProfileComponents";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
export interface BuyerFields {
  businessType?: string;
  industry?: string;
  monthlyPurchasingVolume?: string;
  companySize?: string;
  taxVatNumber?: string;
  expectedCategories?: string[];
}

// ─────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────
const BuyerSection = ({ user }: { user: BuyerFields }) => {
  return (
    <div className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      {/* Edit Button */}
      <button className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-gray-100 bg-gray-50 text-gray-400 transition hover:border-teal-200 hover:bg-teal-50 hover:text-teal-600">
        <Pencil size={13} />
      </button>

      {/* Header */}
      <div className="mb-5 flex items-center gap-3 border-b border-gray-100 pb-4 pr-10">
        <ShoppingBag size={18} className="text-teal-600" />
        <h2 className="text-base font-bold text-gray-800">
          Buyer Business Details
        </h2>
      </div>

      {/* Content Grid */}
      <dl className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
        {/* Business Type */}
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Business Type
          </dt>
          <dd className="mt-1 text-sm font-medium text-gray-700">
            {renderValue(user.businessType)}
          </dd>
        </div>

        {/* Industry */}
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Industry
          </dt>
          <dd className="mt-1 text-sm font-medium text-gray-700">
            {renderValue(user.industry)}
          </dd>
        </div>

        {/* Monthly Purchasing Volume */}
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Monthly Purchasing Volume
          </dt>
          <dd className="mt-1 text-sm font-medium text-gray-700">
            {renderValue(user.monthlyPurchasingVolume)}
          </dd>
        </div>

        {/* Company Size */}
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Company Size
          </dt>
          <dd className="mt-1 text-sm font-medium text-gray-700">
            {renderValue(user.companySize)}
          </dd>
        </div>

        {/* Tax / VAT Number */}
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Tax / VAT Number
          </dt>
          <dd className="mt-1 text-sm font-medium text-gray-700">
            {renderValue(user.taxVatNumber)}
          </dd>
        </div>

        {/* Expected Categories — full width */}
        <div className="sm:col-span-2">
          <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Expected Product Categories
          </dt>
          <dd className="mt-1">
            {user.expectedCategories && user.expectedCategories.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {user.expectedCategories.map((cat, i) => (
                  <Tag key={i} label={cat} />
                ))}
              </div>
            ) : (
              <span className="text-sm font-medium text-gray-700">N/A</span>
            )}
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default BuyerSection;

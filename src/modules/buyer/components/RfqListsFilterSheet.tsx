// components/rfq/RfqListsFilterSheet.tsx
"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import {
  SlidersHorizontal,
  Tag,
  CheckCircle2,
  Users,
  Layers,
  Palette,
  FlaskConical,
  Printer,
  Box,
  Globe,
  Anchor,
  CreditCard,
  RotateCcw,
  X,
} from "lucide-react";
import CustomSelect from "@/components/inputs/CustomSelect";
import CustomSearchSelectInput from "@/components/inputs/CustomSearchSelectInput";
// import CustomMultiSelectInput from "@/components/inputs/CustomMultiSelectInput";
import CustomColorSelectInput from "@/components/inputs/CustomColorSelectInput";
import {
  // allClothingSizesOptions,
  popularColorOptions,
  INCOTERMS_OPTIONS,
  materialFabricOptions,
  GENDER_OPTIONS,
  SAMPLE_OPTIONS,
  PRINTING_OPTIONS,
  PACKAGING_OPTIONS,
  COUNTRY_OPTIONS,
  PAYMENT_OPTIONS,
} from "../utils/rfq-form.select-options";
import { productCategoriesOptions } from "@/modules/auth/utils/register-select-options";
import { RfqFilterStateType, STATUS_OPTIONS } from "../types/rfq-list.type";
import { useRfqStore } from "../stores/rfq.store";

interface RfqListsFilterSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onApply?: (filters: RfqFilterStateType) => void;
}

function FilterSection({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2.5">
      {/* Section Title */}
      <div className="flex items-center gap-2">
        <span className="text-[#14b8a6]">{icon}</span>
        <h3 className="text-xs font-semibold text-slate-500 tracking-widest uppercase">
          {title}
        </h3>
      </div>

      {/* Input */}
      {children}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

const RfqListsFilterSheet = ({
  open,
  onOpenChange,
  // onApply,
}: RfqListsFilterSheetProps) => {
  const { filter, setFilter, resetFilters } = useRfqStore();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        showCloseButton={false}
        className=" w-[80%] min-[500px]:w-[60%] lg:w-[50%] xl:w-[45%]  p-0 flex flex-col bg-white border-l border-slate-200"
      >
        {/* ── Header ── */}
        <SheetHeader className="px-6 pt-6 pb-4 border-b border-slate-100 shrink-0 bg-gradient-to-r from-teal-50 via-white to-white">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#14b8a6] shadow-sm shadow-teal-500/30">
                <SlidersHorizontal size={18} className="text-white" />
              </div>
              <div>
                <SheetTitle className="text-[15px] font-semibold text-slate-800 leading-tight">
                  Filter RFQs
                </SheetTitle>
                <SheetDescription className="text-xs text-slate-400 mt-0.5">
                  Narrow down your RFQ list
                </SheetDescription>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={resetFilters}
                className="flex items-center gap-1.5 text-xs font-medium text-[#14b8a6] hover:text-white px-3 py-1.5 rounded-lg border border-teal-200 hover:bg-[#14b8a6] cursor-pointer transition-colors duration-200"
              >
                <RotateCcw size={13} />
                Reset
              </button>

              <SheetClose asChild>
                <button
                  type="button"
                  className="flex items-center justify-center w-8 h-8 rounded-lg border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer transition-colors duration-200"
                >
                  <X size={15} />
                  <span className="sr-only">Close</span>
                </button>
              </SheetClose>
            </div>
          </div>
        </SheetHeader>

        {/* ── Scrollable Body ── */}
        <div className="flex-1 overflow-y-auto px-6 py-5 grid grid-cols-1 md:grid-cols-2 gap-5 content-start">
          {/* 1. Status — CustomSelect */}
          <FilterSection title="Status" icon={<CheckCircle2 size={14} />}>
            <CustomSelect
              placeholder="Select status"
              options={STATUS_OPTIONS}
              value={filter.status}
              onChange={(val) => setFilter("status", val as string)}
            />
          </FilterSection>

          {/* 2. Product Category — CustomSearchSelectInput */}
          <FilterSection title="Product Category" icon={<Tag size={14} />}>
            <CustomSearchSelectInput
              placeholder="Select category"
              options={productCategoriesOptions}
              value={filter.product_category}
              onChange={(val) => setFilter("product_category", val as string)}
            />
          </FilterSection>

          {/* 3. Gender — CustomSelect */}
          <FilterSection title="Gender" icon={<Users size={14} />}>
            <CustomSelect
              placeholder="Select gender"
              options={GENDER_OPTIONS}
              value={filter.gender}
              onChange={(val) => setFilter("gender", val as string)}
            />
          </FilterSection>

          {/* 4. Material / Fabric — CustomSearchSelectInput */}
          <FilterSection title="Material / Fabric" icon={<Layers size={14} />}>
            <CustomSearchSelectInput
              placeholder="Select material"
              options={materialFabricOptions}
              value={filter.material_febric}
              onChange={(val) => setFilter("material_febric", val as string)}
            />
          </FilterSection>

          {/* 5. Colors — CustomColorSelectInput */}
          <FilterSection title="Colors" icon={<Palette size={14} />}>
            <CustomColorSelectInput
              placeholder="Select colors"
              options={popularColorOptions}
              value={filter.required_colors}
              onChange={(val) => setFilter("required_colors", val as string[])}
            />
          </FilterSection>

          {/* 6. Sample Requirement — CustomSelect */}
          <FilterSection
            title="Sample Requirement"
            icon={<FlaskConical size={14} />}
          >
            <CustomSelect
              placeholder="Select sample requirement"
              options={SAMPLE_OPTIONS}
              value={filter.sample_requirement}
              onChange={(val) => setFilter("sample_requirement", val as string)}
            />
          </FilterSection>

          {/* 7. Printing & Embroidery — CustomSelect */}
          <FilterSection
            title="Printing & Embroidery"
            icon={<Printer size={14} />}
          >
            <CustomSelect
              placeholder="Select printing method"
              options={PRINTING_OPTIONS}
              value={filter.printing_embroidery}
              onChange={(val) =>
                setFilter("printing_embroidery", val as string)
              }
            />
          </FilterSection>

          {/* 8. Packaging — CustomSelect */}
          <FilterSection title="Packaging" icon={<Box size={14} />}>
            <CustomSelect
              placeholder="Select packaging"
              options={PACKAGING_OPTIONS}
              value={filter.packaging_requirement}
              onChange={(val) =>
                setFilter("packaging_requirement", val as string)
              }
            />
          </FilterSection>

          {/* 9. Delivery Country — CustomSearchSelectInput */}
          <FilterSection title="Delivery Country" icon={<Globe size={14} />}>
            <CustomSearchSelectInput
              placeholder="Select country"
              options={COUNTRY_OPTIONS}
              value={filter.deliveryCountry}
              onChange={(val) => setFilter("deliveryCountry", val as string)}
            />
          </FilterSection>

          {/* 10. Incoterms — CustomSelect */}
          <FilterSection title="Incoterms" icon={<Anchor size={14} />}>
            <CustomSelect
              placeholder="Select Incoterms"
              options={INCOTERMS_OPTIONS}
              value={filter.Incoterms}
              onChange={(val) => setFilter("Incoterms", val as string)}
            />
          </FilterSection>

          {/* 11. Payment Terms — CustomSelect */}
          <FilterSection title="Payment Terms" icon={<CreditCard size={14} />}>
            <CustomSelect
              placeholder="Select payment terms"
              options={PAYMENT_OPTIONS}
              value={filter.payment_terms}
              onChange={(val) => setFilter("payment_terms", val as string)}
            />
          </FilterSection>
        </div>
        {/* No footer buttons — as requested */}
      </SheetContent>
    </Sheet>
  );
};

export default RfqListsFilterSheet;

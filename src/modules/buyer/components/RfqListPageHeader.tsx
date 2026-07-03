// components/rfq/RfqListPageHeader.tsx
"use client";

import { useEffect, useState } from "react";
import { ListFilter } from "lucide-react";
import CustomSearchInput from "@/components/inputs/CustomSearchInput";
import CustomSelect from "@/components/inputs/CustomSelect";
import RfqListsFilterSheet from "./RfqListsFilterSheet";
import { cn } from "@/lib/utils";
import { SortOptionsType } from "../types/rfq-list.type";
import { useRfqStore } from "../stores/rfq.store";
import { useDebounce } from "@/hooks/useDebounce";

const RfqListPageHeader = () => {
  const { sortBy, setSortBy, setSearchTerm } = useRfqStore();
  const [search, setSearch] = useState<string>("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    setSearchTerm(debouncedSearch);
  }, [debouncedSearch, setSearchTerm]);

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        {/* Search */}
        <div className="flex-grow">
          <CustomSearchInput
            placeholder="Search By RFQ Title..."
            className="bg-gray-50/80 border-gray-200"
            onChange={(value) => setSearch(value)}
          />
        </div>

        {/* Sort */}
        <div className="w-44 mb-4">
          <CustomSelect
            options={SortOptionsType}
            placeholder="Sort By"
            value={sortBy}
            onChange={(val) => setSortBy(val as string)}
          />
        </div>

        {/* Filter Button */}
        <button
          type="button"
          onClick={() => setIsFilterOpen(true)}
          className={cn(
            "inline-flex items-center gap-2 h-10 px-4 mb-4 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer",
            "bg-[#14b8a6] text-white border border-[#14b8a6]",
            "shadow-sm shadow-teal-500/10",
            "hover:bg-[#0d9488] hover:border-[#0d9488] hover:shadow-md hover:shadow-teal-600/20",
            "active:scale-[0.98]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/40 focus-visible:ring-offset-2",
          )}
        >
          <ListFilter size={16} strokeWidth={2.2} />
          <span>Filter</span>
        </button>
      </div>

      <RfqListsFilterSheet open={isFilterOpen} onOpenChange={setIsFilterOpen} />
    </>
  );
};

export default RfqListPageHeader;

"use client";

import { useEffect, useState } from "react";
import { ListFilter } from "lucide-react";
import CustomSearchInput from "@/components/inputs/CustomSearchInput";
import CustomSelect from "@/components/inputs/CustomSelect";
import RfqListsFilterSheet from "./RfqListsFilterSheet";
import { cn } from "@/lib/utils";
import { SortOptionsType } from "../types/rfq-list.type";
import { useDebounce } from "@/hooks/useDebounce";
import { UseRfqFiltersReturn } from "../hooks/useRfqFilters";

type RfqListPageHeaderProps = Pick<
  UseRfqFiltersReturn,
  "sortBy" | "setSortBy" | "setSearchTerm" | "filter" | "setFilter" | "resetFilters"
>;

const RfqListPageHeader = ({
  sortBy,
  setSortBy,
  setSearchTerm,
  filter,
  setFilter,
  resetFilters,
}: RfqListPageHeaderProps) => {
  const [search, setSearch] = useState<string>("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    setSearchTerm(debouncedSearch);
  }, [debouncedSearch, setSearchTerm]);

  return (
    <>
      <div className="mb-4 flex items-center gap-3">
        <div className="flex-grow">
          <CustomSearchInput
            placeholder="Search By RFQ Title..."
            className="border-gray-200 bg-gray-50/80"
            onChange={(value) => setSearch(value)}
          />
        </div>

        <div className="mb-4 w-44">
          <CustomSelect
            options={SortOptionsType}
            placeholder="Sort By"
            value={sortBy}
            onChange={(val) => setSortBy(val as string)}
          />
        </div>

        <button
          type="button"
          onClick={() => setIsFilterOpen(true)}
          className={cn(
            "mb-4 inline-flex h-10 cursor-pointer items-center gap-2 rounded-lg px-4 text-sm font-medium transition-all duration-200",
            "border border-[#14b8a6] bg-[#14b8a6] text-white",
            "shadow-sm shadow-teal-500/10",
            "hover:border-[#0d9488] hover:bg-[#0d9488] hover:shadow-md hover:shadow-teal-600/20",
            "active:scale-[0.98]",
            "focus-visible:ring-2 focus-visible:ring-teal-500/40 focus-visible:ring-offset-2 focus-visible:outline-none",
          )}
        >
          <ListFilter size={16} strokeWidth={2.2} />
          <span>Filter</span>
        </button>
      </div>

      <RfqListsFilterSheet
        open={isFilterOpen}
        onOpenChange={setIsFilterOpen}
        filter={filter}
        setFilter={setFilter}
        resetFilters={resetFilters}
      />
    </>
  );
};

export default RfqListPageHeader;

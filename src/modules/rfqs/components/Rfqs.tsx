"use client";
import { useState, useMemo } from "react";

import EmptyState from "@/components/common/EmptyState";

import { FileSearch } from "lucide-react";
import CustomPagination from "@/components/common/CustomPagination";
import { useRfqFilters } from "@/modules/buyer/hooks/useRfqFilters";
import { buildRfqQueryParams } from "@/modules/buyer/utils/rfq-query.utils";
import { useGetRfqs } from "@/modules/buyer/hooks/rfq.hooks";
import { RfqItem } from "@/modules/buyer/types/rfq-list.type";
import RfqListPageHeader from "@/modules/buyer/components/RfqListPageHeader";
import RfqCard, { RfqCardSkeleton } from "./RfqCard";

const ITEMS_PER_PAGE = 12;

const Rfqs = () => {
  const isDashboard = false;
  const rfqFilters = useRfqFilters();
  const { searchTerm, sortBy, filter } = rfqFilters;

  const [currentPage, setCurrentPage] = useState(1);
  //   const [selectedRfq, setSelectedRfq] = useState<RfqItem | null>(null);

  const filterKey = useMemo(
    () => JSON.stringify({ filter, searchTerm, sortBy }),
    [filter, searchTerm, sortBy],
  );
  const [prevFilterKey, setPrevFilterKey] = useState(filterKey);

  if (filterKey !== prevFilterKey) {
    setPrevFilterKey(filterKey);
    setCurrentPage(1);
  }

  const hasActiveFilters = useMemo(
    () =>
      Object.entries(filter).some(([key, value]) => {
        if (key === "required_colors" || key === "product_sizes") {
          return Array.isArray(value) && value.length > 0;
        }
        return value !== "" && value !== undefined;
      }) || Boolean(searchTerm),
    [filter, searchTerm],
  );

  const queryParams = buildRfqQueryParams({
    filter,
    searchTerm,
    sortBy,
    page: currentPage,
    limit: ITEMS_PER_PAGE,
  });

  const { data, isPending } = useGetRfqs(queryParams);

  const rfqList: RfqItem[] = data?.results || [];
  const totalRfqs = data?.count || 0;

  const isLoading = isPending || status === "loading";

  const hasNoData = !isLoading && totalRfqs === 0;

  const totalPages = Math.ceil(totalRfqs / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Optional: scroll to top when page changes
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full py-10">
      {/* --- Modified: Show total count in the header --- */}
      {/* <DashboardSectionHeader title="R" count={totalRfqs} /> */}
      <RfqListPageHeader isDashboard={isDashboard} {...rfqFilters} />

      {hasNoData ? (
        <EmptyState
          icon={FileSearch}
          title="No RFQs found"
          description={
            hasActiveFilters
              ? "No RFQs match your current filters. Try changing or resetting them."
              : "You haven't created any RFQs yet."
          }
        />
      ) : (
        <>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {isLoading
              ? Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
                  <RfqCardSkeleton key={index} />
                ))
              : rfqList.map((rfq) => <RfqCard key={rfq._id} rfq={rfq} />)}
          </div>

          {totalPages > 1 && (
            <CustomPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Rfqs;

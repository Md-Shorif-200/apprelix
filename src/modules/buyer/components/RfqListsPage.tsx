"use client";
import { useState } from "react"; // --- Added: Import useState ---
import { useGetRfqs } from "../hooks/rfq.hooks";
import CustomTable from "@/components/common/CustomTable";
import EmptyState from "@/components/common/EmptyState";
import { RfqItem } from "../types/rfq-list.type";
import { rfqTableColumns } from "../utils/rfq-table-columns.utils";
import DashboardSectionHeader from "@/modules/dashboard/components/DashboardSectionheader";
import { useSession } from "next-auth/react";
import RfqListPageHeader from "./RfqListPageHeader";
import { useRfqStore } from "../stores/rfq.store";
import { FileSearch } from "lucide-react";
import CustomPagination from "@/components/common/CustomPagination";

const ITEMS_PER_PAGE = 12;

const RfqListsPage = () => {
  const { searchTerm, sortBy, filter } = useRfqStore();
  const { data: session, status } = useSession();
  const userId = session?.user?.id;

  // --- Added: State for current page ---
  const [currentPage, setCurrentPage] = useState(1);

  type FilterValue = string | string[] | undefined;
  const activeFilters: Record<string, FilterValue> = {};
  for (const key in filter) {
    const value = filter[key as keyof typeof filter];
    if (value === "" || value === undefined) continue;
    if (Array.isArray(value) && value.length === 0) continue;
    activeFilters[key] = value;
  }

  const queryParams: Record<string, FilterValue | number> = {
    createdBy: userId,
    ...activeFilters,
    page: currentPage,
    limit: ITEMS_PER_PAGE,
  };

  if (searchTerm) queryParams.search = searchTerm;
  if (sortBy) queryParams.sort = sortBy;

  const { data, isPending } = useGetRfqs(queryParams, { enabled: !!userId });

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
    <div className="w-full">
      {/* --- Modified: Show total count in the header --- */}
      <DashboardSectionHeader title="My RFQ Lists" count={totalRfqs} />
      <RfqListPageHeader />

      {hasNoData ? (
        <EmptyState
          icon={FileSearch}
          title="No RFQs found"
          description="You haven't created any RFQs yet, or none match your current filters."
        />
      ) : (
        <>
          <CustomTable<RfqItem>
            columns={rfqTableColumns}
            data={rfqList}
            rowKey={(row) => row._id}
            isLoading={isLoading}
            loadingRows={ITEMS_PER_PAGE} // Set skeleton rows to match page limit
            headerClassName="bg-teal-500"
            rowClassName="bg-white hover:bg-teal-50 transition-colors duration-150 border-b border-gray-100"
            containerClassName="border border-gray-200 rounded-xl shadow-sm bg-white"
          />

          {/* --- Added: Render the CustomPagination component --- */}
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

export default RfqListsPage;

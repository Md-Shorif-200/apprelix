"use client";
import { useState, useMemo } from "react";
import {
  useCancelRfq,
  useDeleteSingleRfq,
  useGetRfqs,
  useReactivateRfq,
} from "../hooks/rfq.hooks";
import CustomTable from "@/components/common/CustomTable";
import EmptyState from "@/components/common/EmptyState";
import { RfqItem } from "../types/rfq-list.type";
import { getRfqTableColumns } from "../utils/rfq-table-columns.utils";
import DashboardSectionHeader from "@/modules/dashboard/components/DashboardSectionheader";
import { useSession } from "next-auth/react";
import RfqListPageHeader from "./RfqListPageHeader";
import { useRfqFilters } from "../hooks/useRfqFilters";
import { FileSearch } from "lucide-react";
import CustomPagination from "@/components/common/CustomPagination";
import ConfirmationModal, {
  type ConfirmationModalProps,
} from "@/components/shared/ConfirmationModal";
import RfqViiewDetailsSheet from "./RfqViiewDetailsSheet";
import EditRfqFormSheet from "../_components/EditRfqFormSheet";
import { deleteRfqCloudinaryAssets } from "../utils/rfq-file-cloudinary.utils";
import { buildRfqQueryParams } from "../utils/rfq-query.utils";

const ITEMS_PER_PAGE = 12;

type ConfirmationState = Omit<ConfirmationModalProps, "open" | "onOpenChange">;

const RfqListsPage = () => {
  const rfqFilters = useRfqFilters();
  const { searchTerm, sortBy, filter } = rfqFilters;
  const { data: session, status } = useSession();
  const userId = session?.user?.id;

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRfq, setSelectedRfq] = useState<RfqItem | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [editRfq, setEditRfq] = useState<RfqItem | null>(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [confirmation, setConfirmation] = useState<ConfirmationState | null>(
    null,
  );

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
    userId,
    filter,
    searchTerm,
    sortBy,
    page: currentPage,
    limit: ITEMS_PER_PAGE,
  });

  const { data, isPending } = useGetRfqs(queryParams, { enabled: !!userId });
  const { mutate: deleteRfq } = useDeleteSingleRfq();
  const { mutate: cancelRfq } = useCancelRfq();
  const { mutate: reactivateRfq } = useReactivateRfq();

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

  const handleReactivateRfq = (rfq: RfqItem) => {
    setConfirmation({
      title: "Reactivate RFQ",
      description: `Are you sure you want to reactivate "${rfq.rfq_title}"?`,
      loadingMessage: "Reactivating...",
      errorMessage: "Failed to reactivate RFQ",
      variant: "default",
      onConfirm: async () => {
        return new Promise((resolve, reject) => {
          reactivateRfq(rfq._id, {
            onSuccess: () => resolve(true),
            onError: (error) => reject(error),
          });
        });
      },
      onSuccess: () => {
        setCurrentPage(1);
      },
    });
  };

  const handleCancelRfq = (rfq: RfqItem) => {
    setConfirmation({
      title: "Cancel RFQ",
      description: `Are you sure you want to cancel "${rfq.rfq_title}"? This action cannot be undone.`,
      loadingMessage: "Canceling...",
      errorMessage: "Failed to cancel RFQ",
      variant: "destructive",
      onConfirm: async () => {
        return new Promise((resolve, reject) => {
          cancelRfq(rfq._id, {
            onSuccess: () => resolve(true),
            onError: (error) => reject(error),
          });
        });
      },
      onSuccess: () => {
        setCurrentPage(1);
      },
    });
  };

  const handleDeleteRfq = (rfq: RfqItem) => {
    setConfirmation({
      title: "Delete RFQ",
      description: `Are you sure you want to delete "${rfq.rfq_title}"? This action cannot be undone.`,
      loadingMessage: "Deleting...",
      errorMessage: "Failed to delete RFQ",
      variant: "destructive",
      onConfirm: async () => {
        return new Promise((resolve, reject) => {
          deleteRfq(rfq._id, {
            onSuccess: async () => {
              try {
                await deleteRfqCloudinaryAssets(rfq);
                resolve(true);
              } catch (error) {
                reject(error);
              }
            },
            onError: (error) => reject(error),
          });
        });
      },
      onSuccess: () => {
        setCurrentPage(1);
      },
    });
  };

  const handleViewDetails = (rfq: RfqItem) => {
    setSelectedRfq(rfq);
    setIsDetailsOpen(true);
  };

  const handleEditRfq = (rfq: RfqItem) => {
    setEditRfq(rfq);
    setIsEditOpen(true);
  };

  const columns = getRfqTableColumns(
    handleViewDetails,
    handleEditRfq,
    handleDeleteRfq,
    handleCancelRfq,
    handleReactivateRfq,
  );

  return (
    <div className="w-full">
      {/* --- Modified: Show total count in the header --- */}
      <DashboardSectionHeader title="My RFQ Lists" count={totalRfqs} />
      <RfqListPageHeader {...rfqFilters} />

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
          <CustomTable<RfqItem>
            columns={columns}
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

      {confirmation ? (
        <ConfirmationModal
          open
          onOpenChange={(open) => {
            if (!open) setConfirmation(null);
          }}
          {...confirmation}
        />
      ) : null}

      <RfqViiewDetailsSheet
        open={isDetailsOpen}
        onOpenChange={setIsDetailsOpen}
        rfq={selectedRfq}
      />

      <EditRfqFormSheet
        open={isEditOpen}
        onOpenChange={setIsEditOpen}
        rfq={editRfq}
      />
    </div>
  );
};

export default RfqListsPage;

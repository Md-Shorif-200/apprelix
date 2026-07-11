"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

type CustomPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const CustomPagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: CustomPaginationProps) => {
  if (totalPages <= 1) return null;

  // Build a compact page list with ellipses for large page counts
  const getPageList = (): (number | "ellipsis")[] => {
    const pages: (number | "ellipsis")[] = [];
    const siblings = 1;

    const start = Math.max(2, currentPage - siblings);
    const end = Math.min(totalPages - 1, currentPage + siblings);

    pages.push(1);
    if (start > 2) pages.push("ellipsis");
    for (let i = start; i <= end; i++) pages.push(i);
    if (end < totalPages - 1) pages.push("ellipsis");
    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

  const pages = getPageList();

  return (
    <div className="flex items-center justify-end gap-1 mt-6">
      {/* Prev */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex h-8 items-center gap-1 rounded-md border border-gray-200 px-2.5 text-xs font-medium text-gray-600 transition-colors hover:border-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent cursor-pointer"
      >
        <ChevronLeft className="h-3.5 w-3.5" strokeWidth={2} />
        <span>Prev</span>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {pages.map((page, idx) =>
          page === "ellipsis" ? (
            <span
              key={`ellipsis-${idx}`}
              className="flex h-8 w-8 items-center justify-center text-xs text-gray-400"
            >
              &#8230;
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              aria-current={currentPage === page ? "page" : undefined}
              className={`flex h-8 w-8 items-center justify-center rounded-md border text-xs font-medium transition-colors cursor-pointer ${
                currentPage === page
                  ? "border-teal-500 bg-teal-500 text-white shadow-sm"
                  : "border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          ),
        )}
      </div>

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex h-8 items-center gap-1 rounded-md border border-gray-200 px-2.5 text-xs font-medium text-gray-600 transition-colors hover:border-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent cursor-pointer"
      >
        <span>Next</span>
        <ChevronRight className="h-3.5 w-3.5" strokeWidth={2} />
      </button>
    </div>
  );
};

export default CustomPagination;

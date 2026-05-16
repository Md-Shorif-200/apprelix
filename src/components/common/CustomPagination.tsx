"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

const pageBtnBase =
  "min-w-9 rounded-lg border px-3 py-2.5 text-sm font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50 cursor-pointer";
const pageBtnActive =
  "border-[#ffd785] bg-[#ffd785] text-black hover:opacity-90";
const pageBtnInactive =
  "border-white/10 bg-transparent text-[#d1d1d1] hover:border-white/20 hover:bg-white/5";
const navBtnBase =
  "inline-flex items-center justify-center rounded-lg border border-white/10 bg-transparent p-2.5 text-[#d1d1d1] transition-colors hover:border-white/20 hover:bg-white/5 disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

export interface CustomPagination1Props {
  /** Total number of items across all pages */
  totalCount: number;
  /** Current page (1-based) */
  currentPage: number;
  /** Number of items per page */
  perPage: number;
  /** Called when Previous is clicked */
  onPrev: () => void;
  /** Called when Next is clicked */
  onNext: () => void;
  /** Called when a page number is clicked */
  onPageChange?: (page: number) => void;
  /** Optional aria-label for the nav */
  ariaLabel?: string;
  /** Optional class for the nav wrapper */
  className?: string;
}

function getVisiblePages(
  currentPage: number,
  totalPages: number,
): (number | "ellipsis")[] {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  const pages: (number | "ellipsis")[] = [1, 2, 3, 4];
  if (totalPages <= 4) return pages.slice(0, totalPages);
  pages.push("ellipsis");
  if (currentPage > 4 && currentPage < totalPages) {
    pages.push(currentPage);
    if (currentPage < totalPages - 1) pages.push("ellipsis");
  }
  pages.push(totalPages);
  return pages;
}

export const CustomPagination1 = ({
  totalCount,
  currentPage,
  perPage,
  onPrev,
  onNext,
  onPageChange,
  ariaLabel = "Pagination",
  className = "",
}: CustomPagination1Props) => {
  const totalPages = Math.ceil(totalCount / perPage) || 1;
  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  const start = totalCount === 0 ? 0 : (currentPage - 1) * perPage + 1;
  const end = Math.min(currentPage * perPage, totalCount);

  const visiblePages = getVisiblePages(currentPage, totalPages);

  return (
    <nav
      aria-label={ariaLabel}
      className={`mt-6 flex flex-wrap items-center justify-between gap-4 ${className}`.trim()}
    >
      <p className="text-sm text-[#d1d1d1]">
        Showing data {start} to {end} of {totalCount} entries.
      </p>

      {totalCount > 0 && totalPages > 1 && (
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={onPrev}
            disabled={!hasPrev}
            aria-label="Previous page"
            className={navBtnBase}
          >
            <ChevronLeft className="h-4 w-4 shrink-0" />
          </button>
          <div className="flex items-center gap-1">
            {visiblePages.map((item, idx) =>
              item === "ellipsis" ? (
                <span
                  key={`ellipsis-${idx}`}
                  className="min-w-9 rounded-lg border border-white/10 bg-transparent px-3 py-2.5 text-center text-sm font-semibold text-[#d1d1d1]"
                >
                  ...
                </span>
              ) : (
                <button
                  key={item}
                  type="button"
                  onClick={() => onPageChange?.(item)}
                  aria-label={`Page ${item}`}
                  aria-current={currentPage === item ? "page" : undefined}
                  className={`${pageBtnBase} ${
                    currentPage === item ? pageBtnActive : pageBtnInactive
                  }`}
                >
                  {item}
                </button>
              ),
            )}
          </div>
          <button
            type="button"
            onClick={onNext}
            disabled={!hasNext}
            aria-label="Next page"
            className={navBtnBase}
          >
            <ChevronRight className="h-4 w-4 shrink-0" />
          </button>
        </div>
      )}
    </nav>
  );
};

export default CustomPagination1;

"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

export type CustomTableColumn<T> = {
  key: keyof T | string;
  header: React.ReactNode;
  headerClassName?: string;
  cellClassName?: string;
  cell?: (row: T, index: number) => React.ReactNode;
  hidden?: boolean;
  width?: string; // Added width property for custom column widths
};

type CustomTableProps<T> = {
  columns: CustomTableColumn<T>[];
  data: T[];
  rowKey: (row: T) => React.Key;
  tableClassName?: string;
  containerClassName?: string;
  headerClassName?: string;
  headerRowClassName?: string;
  rowClassName?: string | ((row: T, index: number) => string);
  emptyMessage?: React.ReactNode;
  isLoading?: boolean;
  loadingRows?: number;
  onRowClick?: (row: T) => void;
  caption?: string;
};

function getNestedValue(obj: object, path: string): unknown {
  return path.split(".").reduce<unknown>(
    (acc, key) => {
      if (
        acc !== null &&
        acc !== undefined &&
        typeof acc === "object" &&
        key in acc
      ) {
        return (acc as Record<string, unknown>)[key];
      }
      return undefined;
    },
    obj as Record<string, unknown>,
  );
}

function toDisplayString(value: unknown): string {
  if (value === null || value === undefined) return "-";
  if (typeof value === "string") return value;
  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }
  return JSON.stringify(value);
}

// Professional Skeleton Loading Row
const SkeletonRow = ({ colCount }: { colCount: number }) => (
  <TableRow className="border-b border-gray-100 bg-white">
    {Array.from({ length: colCount }).map((_, i) => (
      <TableCell key={i} className="p-4">
        <div className="h-5 w-full animate-pulse rounded-md bg-gray-200" />
      </TableCell>
    ))}
  </TableRow>
);

const CustomTable = <T,>({
  columns,
  data,
  rowKey,
  tableClassName,
  containerClassName,
  headerClassName,
  headerRowClassName,
  rowClassName,
  emptyMessage = "No Data Available",
  isLoading = false,
  loadingRows = 5,
  onRowClick,
  caption,
}: CustomTableProps<T>) => {
  const visibleColumns = columns.filter((col) => !col.hidden);

  return (
    <div
      className={cn(
        "w-full overflow-x-auto rounded-xl table-horizontal-scrollbar",
        containerClassName,
      )}
    >
      {/* Added min-w-[1000px] or similar to force horizontal scroll if content exceeds container */}
      <Table className={cn("w-full min-w-[1000px]", tableClassName)}>
        {caption && (
          <caption className="mb-2 text-sm text-gray-500">{caption}</caption>
        )}

        <TableHeader className={headerClassName}>
          <TableRow className={headerRowClassName}>
            {visibleColumns.map((column) => (
              <TableHead
                key={String(column.key)}
                className={column.headerClassName}
                style={{ width: column.width, minWidth: column.width }}
              >
                {column.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {isLoading ? (
            Array.from({ length: loadingRows }).map((_, i) => (
              <SkeletonRow key={i} colCount={visibleColumns.length} />
            ))
          ) : data?.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={visibleColumns.length}
                className="py-12 text-center text-gray-500"
              >
                {emptyMessage}
              </TableCell>
            </TableRow>
          ) : (
            data.map((row, rowIndex) => (
              <TableRow
                key={rowKey(row)}
                onClick={onRowClick ? () => onRowClick(row) : undefined}
                className={cn(
                  onRowClick && "cursor-pointer",
                  typeof rowClassName === "function"
                    ? rowClassName(row, rowIndex)
                    : rowClassName,
                )}
              >
                {visibleColumns.map((column) => (
                  <TableCell
                    key={String(column.key)}
                    className={column.cellClassName}
                  >
                    {column.cell
                      ? column.cell(row, rowIndex)
                      : toDisplayString(
                          getNestedValue(
                            row as Record<string, unknown>,
                            String(column.key),
                          ),
                        )}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default CustomTable;

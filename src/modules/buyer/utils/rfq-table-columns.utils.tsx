import { Eye, Pencil, XCircle } from "lucide-react";
import Image from "next/image";
import { CustomTableColumn } from "@/components/common/CustomTable";
import { RfqItem } from "../types/rfq-list.type";
import TableActionDropdown, {
  DropdownAction,
} from "@/components/common/TableActionDropdown";

// ─── Helper: Format Date ──────────────────────────────────────────────────────

export const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

// ─── Helper: Status Badge ─────────────────────────────────────────────────────

const getStatusStyle = (status: string): string => {
  const styles: Record<string, string> = {
    pending: "bg-amber-50 text-amber-700 border border-amber-200",

    active: "bg-blue-50 text-blue-700 border border-blue-200",

    rejected: "bg-red-50 text-red-700 border border-red-200",

    selected: "bg-violet-50 text-violet-700 border border-violet-200",

    completed: "bg-emerald-50 text-emerald-700 border border-emerald-200",

    cancelled: "bg-rose-50 text-rose-700 border border-rose-200",

    expired: "bg-slate-100 text-slate-600 border border-slate-200",
  };

  return styles[status] ?? "bg-gray-100 text-gray-600 border border-gray-200";
};

// ─── RFQ Action Handlers ──────────────────────────────────────────────────────
// You can replace these console.logs with real router.push / API calls later

const getRfqActions = (row: RfqItem): DropdownAction[] => [
  {
    label: "View Details",
    icon: Eye,
    variant: "default",
    onClick: () => console.log("View Details", row._id),
  },
  {
    label: "Edit RFQ",
    icon: Pencil,
    variant: "default",
    onClick: () => console.log("Edit RFQ", row._id),
  },
  {
    label: "Cancel RFQ",
    icon: XCircle,
    variant: "danger",
    onClick: () => console.log("Cancel RFQ", row._id),
  },
];

// ─── Table Columns ────────────────────────────────────────────────────────────

export const rfqTableColumns: CustomTableColumn<RfqItem>[] = [
  {
    key: "sl",
    header: "Sl.",
    width: "60px",
    headerClassName: "text-white font-semibold text-center",
    cellClassName: "text-center text-gray-600 text-sm",
    cell: (_, index) => index + 1,
  },
  {
    key: "referenceImages",
    header: "Image",
    width: "80px",
    headerClassName: "text-white font-semibold",
    cell: (row) => {
      const firstImage = row.referenceImages?.[0]?.url;
      return firstImage ? (
        <Image
          src={firstImage}
          alt="RFQ reference"
          width={40}
          height={40}
          className="h-10 w-10 rounded-lg object-cover"
        />
      ) : (
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-xs text-gray-400">
          N/A
        </div>
      );
    },
  },
  {
    key: "rfq_title",
    header: "RFQ Title",
    width: "250px",
    headerClassName: "text-white font-semibold",
    cellClassName: "whitespace-normal break-words text-sm text-gray-800 pr-4",
  },
  {
    key: "product_category",
    header: "Category",
    width: "150px",
    headerClassName: "text-white font-semibold",
    cellClassName: "text-sm text-gray-600 capitalize",
  },
  {
    key: "total_quantity",
    header: "Qty",
    width: "100px",
    headerClassName: "text-white font-semibold",
    cellClassName: "text-sm text-gray-700",
  },
  {
    key: "total_budget",
    header: "Total Budget",
    width: "150px",
    headerClassName: "text-white font-semibold",
    cell: (row) => (
      <span className="font-medium text-teal-700">
        $ {row.total_budget?.toLocaleString()}
      </span>
    ),
  },
  {
    key: "required_delivery_date",
    header: "Delivery Date",
    width: "150px",
    headerClassName: "text-white font-semibold",
    cellClassName: "text-sm text-gray-600",
    cell: (row) => formatDate(row.required_delivery_date),
  },
  {
    key: "status",
    header: "Status",
    width: "120px",
    headerClassName: "text-white font-semibold",
    cell: (row) => (
      <span
        className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${getStatusStyle(row.status)}`}
      >
        {row.status}
      </span>
    ),
  },
  {
    key: "createdAt",
    header: "Created",
    width: "130px",
    headerClassName: "text-white font-semibold",
    cellClassName: "text-sm text-gray-500",
    cell: (row) => formatDate(row.createdAt),
  },
  {
    key: "action",
    header: "Action",
    width: "80px",
    headerClassName: "text-white font-semibold text-center",
    cellClassName: "text-center",
    cell: (row) => <TableActionDropdown actions={getRfqActions(row)} />,
  },
];

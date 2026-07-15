import Image from "next/image";
import { Ban, CircleCheckBig, CircleUser, Eye, Trash, Unlock, X } from "lucide-react";

import { CustomTableColumn } from "@/components/common/CustomTable";
import TableActionDropdown, {
  DropdownAction,
} from "@/components/common/TableActionDropdown";
import { UserType } from "@/modules/users/types/users.types";

// ─── Helper: Role Badge ───────────────────────────────────────────────────────
export const getRoleStyle = (role: string): string => {
  const styles: Record<string, string> = {
    supplier: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    buyer: "bg-sky-50 text-sky-700 border border-sky-200",
    admin: "bg-orange-100 text-orange-700 border border-orange-200",
  };
  return styles[role] ?? "bg-gray-100 text-gray-600 border border-gray-200";
};

// ─── Helper: Status Badge ─────────────────────────────────────────────────────
export const getStatusStyle = (status: string): string => {
  const styles: Record<string, string> = {
    pending: "bg-amber-50 text-amber-700 border border-amber-200",
    accepted: "bg-blue-50 text-blue-700 border border-blue-200",
    rejected: "bg-red-50 text-red-700 border border-red-200",
    blocked: "bg-red-200 text-red-700 border border-red-200",
  };
  return styles[status] ?? "bg-gray-100 text-gray-600 border border-gray-200";
};

// ─── User Action Handlers Type ────────────────────────────────────────────────
type UserActionHandlers = {
  onViewDetails: (u: UserType) => void;
  onAcceptUser: (u: UserType) => void;
  onRejectUser: (u: UserType) => void;
  onBlockUser: (u: UserType) => void;
  onUnblockUser: (u: UserType) => void;
  onDeleteUser: (u: UserType) => void;
};

// ─── User Actions ─────────────────────────────────────────────────────────────
const getUserActions = (
  row: UserType,
  handlers: UserActionHandlers,
): DropdownAction[] => {
  const actions: DropdownAction[] = [
    {
      label: "View Details",
      icon: Eye,
      variant: "default",
      onClick: () => handlers.onViewDetails(row),
    },
  ];

  if (row.status === "pending") {
    actions.push(
      {
        label: "Accept User",
        icon: CircleCheckBig,
        variant: "default",
        onClick: () => handlers.onAcceptUser(row),
      },
      {
        label: "Reject User",
        icon: X,
        variant: "default",
        onClick: () => handlers.onRejectUser(row),
      },
    );
  }

  if (row.status === "accepted") {
    actions.push({
      label: "Block User",
      icon: Ban,
      variant: "default",
      onClick: () => handlers.onBlockUser(row),
    });
  }

  if (row.status === "blocked") {
    actions.push({
      label: "Unblock User",
      icon: Unlock,
      variant: "default",
      onClick: () => handlers.onUnblockUser(row),
    });
  }

  actions.push({
    label: "Delete User",
    icon: Trash,
    variant: "danger",
    onClick: () => handlers.onDeleteUser(row),
  });

  return actions;
};

const getFormattedDate = (value: string): string => {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "N/A";
  }

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

// ─── Table Columns Definition ─────────────────────────────────────────────────
export const getUsersTableColumns = (
  currentPage = 1,
  itemsPerPage = 10,
  handlers: UserActionHandlers,
): CustomTableColumn<UserType>[] => [
  {
    key: "sl",
    header: "Sl.",
    width: "60px",
    headerClassName: "text-white font-semibold text-center",
    cellClassName: "text-center text-gray-600 text-sm",
    cell: (_, index) => (currentPage - 1) * itemsPerPage + index + 1,
  },
  {
    key: "image",
    header: "Image",
    width: "80px",
    headerClassName: "text-white font-semibold",
    cell: (row) =>
      row.profilePhoto?.url ? (
        <Image
          src={row.profilePhoto?.url}
          alt={row.fullName}
          width={40}
          height={40}
          className="h-10 w-10 rounded-full object-cover"
        />
      ) : (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-500">
          <CircleUser className="h-6 w-6" />
        </div>
      ),
  },
  {
    key: "contact",
    header: "Contact Info",
    width: "250px",
    headerClassName: "text-white font-semibold",
    cell: (row) => (
      <div className="whitespace-normal break-words pr-4">
        <p className="font-semibold text-gray-800">{row.fullName}</p>
        <p className="text-xs text-gray-500">{row.email}</p>
        <p className="text-xs text-gray-500">{row.phone}</p>
      </div>
    ),
  },
  {
    key: "company",
    header: "Company",
    width: "220px",
    headerClassName: "text-white font-semibold",
    cell: (row) => (
      <div className="whitespace-normal break-words pr-4">
        <p className="font-semibold text-gray-800">
          {row.companyInfo.companyName}
        </p>
        <p className="text-xs text-gray-500">
          {row.companyInfo.location.countryName}
        </p>
      </div>
    ),
  },
  {
    key: "role",
    header: "Role",
    width: "120px",
    headerClassName: "text-white font-semibold",
    cell: (row) => (
      <span
        className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${getRoleStyle(row.role)}`}
      >
        {row.role}
      </span>
    ),
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
    key: "created",
    header: "Created",
    width: "120px",
    headerClassName: "text-white font-semibold",
    cell: (row) => (
      <span className="text-sm text-gray-600">
        {getFormattedDate(row.createdAt)}
      </span>
    ),
  },
  {
    key: "action",
    header: "Action",
    width: "80px",
    headerClassName: "text-white font-semibold text-center",
    cellClassName: "text-center",
    cell: (row) => (
      <TableActionDropdown actions={getUserActions(row, handlers)} />
    ),
  },
];
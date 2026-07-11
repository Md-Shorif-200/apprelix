"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Eye,
  X,
  Tag,
  FileText,
  Paperclip,
  Calendar,
  DollarSign,
  Archive,
  Palette,
} from "lucide-react";
import { RfqItem } from "../types/rfq-list.type";
import { formatDate } from "../utils/rfq-table-columns.utils";
import { RfqColorValue } from "../schema/rfq-form.schema";

import RfqImageGallery from "./RfqImageGallery";

type UploadedFile = { url: string; publicId: string };

interface RfqViewDetailsSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  rfq: RfqItem | null;
}

const PRIMARY = "#14b8a6";

// ─── Helpers ──────────────────────────────────────────────────────────────

function showValue(value: unknown): string {
  if (value === null || value === undefined || value === "") return "—";
  if (typeof value === "boolean") return value ? "Yes" : "No";
  if (Array.isArray(value)) {
    const parts = value
      .map((item) => {
        if (typeof item === "string") return item;
        if (item && typeof item === "object") {
          const name = "name" in item ? String((item as { name?: unknown }).name ?? "").trim() : "";
          const code = "code" in item ? String((item as { code?: unknown }).code ?? "").trim() : "";
          return name && code ? `${name} (${code})` : name || code;
        }
        return String(item);
      })
      .filter(Boolean);
    return parts.length > 0 ? parts.join(", ") : "—";
  }
  return String(value);
}

function formatMoney(value: unknown): string {
  if (value === null || value === undefined || value === "") return "—";
  const num = Number(value);
  if (Number.isNaN(num)) return "—";
  return `$${num.toLocaleString()}`;
}

function toColorList(value: unknown): RfqColorValue[] {
  if (!value) return [];

  if (Array.isArray(value)) {
    return value
      .map((item) => {
        if (typeof item === "string") {
          return { name: item, code: item };
        }
        if (item && typeof item === "object") {
          const name = "name" in item ? String((item as { name?: unknown }).name ?? "").trim() : "";
          const code = "code" in item ? String((item as { code?: unknown }).code ?? "").trim() : "";

          if (name && code) {
            return { name, code };
          }
        }
        return null;
      })
      .filter(
        (item): item is RfqColorValue => Boolean(item?.name) && Boolean(item?.code),
      );
  }

  if (typeof value === "string") {
    return [{ name: value, code: value }].filter((item) => Boolean(item.name));
  }

  return [];
}


const COLOR_NAME_TO_HEX: Record<string, string> = {
  red: "#ef4444",
  blue: "#3b82f6",
  navy: "#1e3a8a",
  green: "#22c55e",
  "dark green": "#166534",
  black: "#0f172a",
  white: "#f8fafc",
  yellow: "#eab308",
  orange: "#f97316",
  purple: "#a855f7",
  pink: "#ec4899",
  gray: "#6b7280",
  grey: "#6b7280",
  brown: "#92400e",
  beige: "#e7d8c9",
  maroon: "#7f1d1d",
  teal: PRIMARY,
  cyan: "#06b6d4",
  gold: "#d4af37",
  silver: "#c0c0c0",
  cream: "#fdf6e3",
  khaki: "#c3b091",
  olive: "#556b2f",
  indigo: "#4f46e5",
  turquoise: "#2dd4bf",
};

function getColorHex(colorName: string): string {
  const key = colorName.trim().toLowerCase();
  return COLOR_NAME_TO_HEX[key] ?? "#94a3b8";
}

const statusStyles: Record<string, string> = {
  pending: "bg-amber-50 text-amber-700 border-amber-200",
  active: "bg-teal-50 text-teal-700 border-teal-200",
  rejected: "bg-rose-50 text-rose-700 border-rose-200",
  selected: "bg-indigo-50 text-indigo-700 border-indigo-200",
  completed: "bg-emerald-50 text-emerald-700 border-emerald-200",
  cancelled: "bg-slate-100 text-slate-600 border-slate-200",
  expired: "bg-slate-100 text-slate-500 border-slate-200",
};

// ─── Small Reusable Pieces ─────────────────────────────────────────────────

function SectionCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2.5 mb-4">
        <span
          className="flex items-center justify-center w-8 h-8 rounded-xl shrink-0"
          style={{ backgroundColor: `${PRIMARY}1A`, color: PRIMARY }}
        >
          {icon}
        </span>
        <h3 className="text-sm font-semibold text-slate-800 tracking-wide">
          {title}
        </h3>
      </div>
      {children}
    </div>
  );
}


function InfoGridItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col space-y-1">
      <span className="text-xs font-medium text-slate-400">{label}</span>
      <span className="text-sm font-medium text-slate-700 capitalize break-words">
        {value}
      </span>
    </div>
  );
}


function ColorSwatch({ color }: { color: RfqColorValue }) {
  const hex = color.code || getColorHex(color.name);
  return (
    <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-1.5 shadow-sm">
      <span
        className="w-4 h-4 rounded-lg border border-slate-200 shrink-0"
        style={{ backgroundColor: hex }}
      />
      <span className="text-xs font-medium text-slate-700 capitalize">
        {color.name}
      </span>
      {color.code ? (
        <span className="text-[11px] text-slate-400">{color.code}</span>
      ) : null}
    </div>
  );
}


function FileItem({ url, label }: { url: string; label: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2.5 text-sm text-slate-600 bg-slate-50 hover:bg-[#14b8a6]/5 px-3.5 py-2.5 rounded-xl border border-slate-100 hover:border-[#14b8a6]/30 transition-colors group"
    >
      <span
        className="flex items-center justify-center w-7 h-7 rounded-lg bg-white border border-slate-200 shrink-0 group-hover:border-[#14b8a6]/40"
      >
        <Paperclip size={13} className="text-slate-400 group-hover:text-[#14b8a6]" />
      </span>
      <span className="font-medium truncate group-hover:text-[#14b8a6]">
        {label}
      </span>
    </a>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────

const RfqViiewDetailsSheet = ({
  open,
  onOpenChange,
  rfq,
}: RfqViewDetailsSheetProps) => {
  if (!rfq) return null;

  const referenceImages = (rfq.referenceImages as UploadedFile[]) || [];
  const techSheet = rfq.techSheet as UploadedFile | null;
  const otherAttachments = (rfq.otherAttachments as UploadedFile[]) || [];
  const colorList = toColorList(rfq.required_colors);
  const statusClass =
    statusStyles[rfq.status] ?? "bg-slate-50 text-slate-600 border-slate-200";

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-[85%] min-[500px]:w-[70%] lg:w-[50%] xl:w-[45%] p-0 flex flex-col bg-slate-50 border-l border-slate-100 shadow-2xl"
      >
        {/* Header */}
        <SheetHeader className="px-6 py-5 border-b border-slate-100 shrink-0 bg-white">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3.5 min-w-0">
              <div
                className="flex items-center justify-center w-11 h-11 rounded-2xl text-white shrink-0 shadow-md"
                style={{
                  backgroundColor: PRIMARY,
                  boxShadow: `0 8px 16px -6px ${PRIMARY}66`,
                }}
              >
                <Eye size={20} />
              </div>
              <div className="min-w-0 space-y-1">
                <SheetTitle className="text-base font-semibold text-slate-800 leading-snug line-clamp-2">
                  {rfq.rfq_title}
                </SheetTitle>
                <div className="flex items-center gap-2 flex-wrap">
                  <SheetDescription className="text-xs text-slate-400">
                    RFQ Management
                  </SheetDescription>
                  <span className="text-slate-300 text-[10px]">•</span>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium border capitalize tracking-wide ${statusClass}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {rfq.status}
                  </span>
                </div>
              </div>
            </div>

            <SheetClose asChild>
              <button
                type="button"
                className="flex items-center justify-center w-8 h-8 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
              >
                <X size={16} />
                <span className="sr-only">Close</span>
              </button>
            </SheetClose>
          </div>
        </SheetHeader>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5">

          {referenceImages.length > 0 && (
            <RfqImageGallery images={referenceImages} />
          )}

          {/* Product Details */}
          <SectionCard title="Product Specifications" icon={<Tag size={15} />}>
            <div className="grid grid-cols-2 gap-x-4 gap-y-5">
              <InfoGridItem label="Category" value={showValue(rfq.product_category)} />
              <InfoGridItem label="Gender" value={showValue(rfq.gender)} />
              <InfoGridItem label="Material / Fabric" value={showValue(rfq.material_febric)} />
              <InfoGridItem label="Fabric GSM" value={showValue(rfq.febric_gsm)} />
              <InfoGridItem label="Total Quantity" value={showValue(rfq.total_quantity)} />
              <InfoGridItem label="Sizes" value={showValue(rfq.product_sizes)} />
              <InfoGridItem label="Printing & Embroidery" value={showValue(rfq.printing_embroidery)} />
              <InfoGridItem label="Packaging" value={showValue(rfq.packaging_requirement)} />
              <InfoGridItem label="Sample Required" value={showValue(rfq.sample_requirement)} />
            </div>

          
            <div className="mt-5 pt-5 border-t border-slate-100">
              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400 mb-2.5">
                <Palette size={13} />
                <span>Required Colors</span>
              </div>
              {colorList.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {colorList.map((color, index) => (
                    <ColorSwatch
                      key={`${color.name}-${color.code}-${index}`}
                      color={color}
                    />
                  ))}
                </div>
              ) : (
                <span className="text-sm text-slate-400">—</span>
              )}
            </div>
          </SectionCard>

          {/* Business & Logistics */}
          <SectionCard title="Logistics & Financials" icon={<DollarSign size={15} />}>
            <div className="grid grid-cols-2 gap-x-4 gap-y-5">
              <InfoGridItem label="Budget Per Piece" value={formatMoney(rfq.budget_per_piece)} />
              <InfoGridItem label="Total Budget" value={formatMoney(rfq.total_budget)} />
              <InfoGridItem
                label="Delivery Date"
                value={rfq.required_delivery_date ? formatDate(rfq.required_delivery_date) : "—"}
              />
              <InfoGridItem label="Delivery Country" value={showValue(rfq.deliveryCountry)} />
              <InfoGridItem label="Delivery Place" value={showValue(rfq.delivery_place)} />
              <InfoGridItem label="Incoterms" value={showValue(rfq.Incoterms)} />
              <InfoGridItem label="Payment Terms" value={showValue(rfq.payment_terms)} />
              <InfoGridItem label="Certifications" value={showValue(rfq.certifications)} />
            </div>
          </SectionCard>

          {/* Description */}
          <SectionCard title="Detailed Description" icon={<FileText size={15} />}>
            <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">
              {showValue(rfq.description)}
            </p>
          </SectionCard>

          {/* Attachments */}
          <SectionCard title="Documents & Attachments" icon={<Archive size={15} />}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {techSheet?.url ? (
                <FileItem url={techSheet.url} label="Technical Spec Sheet" />
              ) : (
                <div className="col-span-2 text-sm text-slate-400 bg-slate-50 border border-dashed border-slate-200 rounded-xl p-3 text-center">
                  No technical sheet uploaded
                </div>
              )}

              {otherAttachments.map((file, index) => (
                <FileItem
                  key={file.publicId || index}
                  url={file.url}
                  label={`Attachment ${index + 1}`}
                />
              ))}
            </div>
          </SectionCard>

          {/* Dates & Timeline */}
          <SectionCard title="Activity Timeline" icon={<Calendar size={15} />}>
            <div className="grid grid-cols-2 gap-4">
              <InfoGridItem
                label="Created Date"
                value={rfq.createdAt ? formatDate(rfq.createdAt) : "—"}
              />
              <InfoGridItem
                label="Last Updated"
                value={rfq.updatedAt ? formatDate(rfq.updatedAt as string) : "—"}
              />
            </div>
          </SectionCard>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default RfqViiewDetailsSheet;

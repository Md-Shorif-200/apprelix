import Image from "next/image";
import {
  Calendar,
  CircleDollarSign,
  Eye,
  ImageIcon,
  Layers,
  MapPin,
  Package,
} from "lucide-react";

import { RfqItem } from "@/modules/buyer/types/rfq-list.type";
import { formatDate } from "@/modules/buyer/utils/rfq-table-columns.utils";
import { materialFabricOptions } from "@/modules/buyer/utils/rfq-form.select-options";

type RfqCardProps = {
  rfq: RfqItem;
  onView?: (rfq: RfqItem) => void;
};

const formatLabel = (value?: string) => {
  if (!value) return "—";
  return value.replace(/_/g, " ");
};

const formatMaterial = (value?: string) => {
  if (!value) return "—";
  const option = materialFabricOptions.find((item) => item.value === value);
  return option?.label ?? formatLabel(value);
};

const formatBudget = (budget: number | null | undefined) => {
  if (budget == null) return "—";
  return `$${budget.toLocaleString()}`;
};

const formatLocation = (rfq: RfqItem) => {
  const place = rfq.delivery_place?.trim();
  const country = rfq.deliveryCountry?.trim();

  if (place && country) return `${place}, ${country}`;
  return place || country || "—";
};

const RfqCard = ({ rfq, onView }: RfqCardProps) => {
  const imageUrl = rfq.referenceImages?.[0]?.url;
  const footerTitle = rfq.buyerName || formatLabel(rfq.status);
  const footerInitial = footerTitle.charAt(0).toUpperCase();

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ds-border bg-ds-card text-ds-card-foreground shadow-sm transition-all duration-500 ease-out hover:border-ds-primary/30 hover:shadow-[0_20px_40px_-8px_rgba(0,0,0,0.25)]">
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden bg-ds-muted">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={rfq.rfq_title}
            fill
            quality={75}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out motion-safe:group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-ds-muted-foreground">
            <ImageIcon className="h-10 w-10" />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-slate-900/10" />

        <div className="absolute top-3 left-3">
          <span className="rounded-lg bg-slate-900/80 px-3 py-1.5 text-[11px] font-medium tracking-wide text-white capitalize backdrop-blur-md">
            {formatLabel(rfq.product_category)}
          </span>
        </div>

        {rfq.quotesCount !== undefined && (
          <div className="absolute bottom-3 left-3">
            <span className="rounded-lg border border-white/20 bg-white/15 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
              {rfq.quotesCount} Quotes Received
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-grow flex-col p-5">
        <div className="mb-4">
          <h3 className="mb-1.5 line-clamp-1 text-base font-bold leading-snug tracking-tight text-ds-text transition-colors duration-300 group-hover:text-ds-primary">
            {rfq.rfq_title}
          </h3>
          <p className="line-clamp-2 text-xs leading-relaxed text-ds-muted-foreground">
            {rfq.description?.trim() || "No description provided."}
          </p>
        </div>

        <div className="mb-4 space-y-2.5 border-t border-ds-border pt-4 text-xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-ds-muted-foreground">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-ds-muted/10">
                <Package className="h-3.5 w-3.5 text-ds-muted-foreground" />
              </div>
              <span>Total Quantity</span>
            </div>
            <span className="font-semibold text-ds-text">
              {rfq.total_quantity?.toLocaleString() ?? "—"}pcs
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-ds-muted-foreground">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-ds-primary/10">
                <CircleDollarSign className="h-3.5 w-3.5 text-ds-primary" />
              </div>
              <span>Est. Budget</span>
            </div>
            <span className="font-bold text-ds-primary">
              {formatBudget(rfq.total_budget)}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-ds-muted-foreground">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-ds-muted/10">
                <Layers className="h-3.5 w-3.5 text-ds-muted-foreground" />
              </div>
              <span>Material</span>
            </div>
            <span className="max-w-[130px] truncate font-medium capitalize text-ds-text">
              {formatMaterial(rfq.material_febric)}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-ds-muted-foreground">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-ds-muted/10">
                <Calendar className="h-3.5 w-3.5 text-ds-muted-foreground" />
              </div>
              <span>Deadline</span>
            </div>
            <span className="font-medium text-ds-text">
              {rfq.required_delivery_date
                ? formatDate(rfq.required_delivery_date)
                : "—"}
            </span>
          </div>
        </div>

        <div className="relative h-14 overflow-hidden border-t border-ds-border pt-4">
          <div className="absolute inset-0 flex items-center justify-between px-0 transition-all duration-500 ease-in-out group-hover:translate-y-4 group-hover:opacity-0">
            <div className="flex min-w-0 items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 text-xs font-bold text-white shadow-sm">
                {footerInitial}
              </div>
              <div className="flex min-w-0 flex-col">
                <span className="max-w-[100px] truncate text-xs font-semibold tracking-tight text-ds-text capitalize">
                  {footerTitle}
                </span>
                <span className="flex max-w-[100px] items-center gap-0.5 truncate text-[10px] text-ds-muted-foreground">
                  <MapPin className="h-2.5 w-2.5 shrink-0" />
                  {formatLocation(rfq)}
                </span>
              </div>
            </div>

            {rfq.quotesCount !== undefined && (
              <span className="inline-flex items-center rounded-lg border border-ds-border bg-ds-muted/10 px-2.5 py-1 text-[11px] font-semibold text-ds-muted-foreground">
                {rfq.quotesCount} Quotes
              </span>
            )}
          </div>

          <div className="absolute inset-0 flex translate-y-4 items-center opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
            <button
              type="button"
              onClick={() => onView?.(rfq)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#14b8a6] to-teal-600 px-4 py-2.5 text-xs font-semibold tracking-wide text-white shadow-[0_4px_12px_-2px_rgba(20,184,166,0.4)] transition-all duration-300 hover:from-teal-600 hover:to-teal-700 hover:shadow-[0_6px_16px_-2px_rgba(20,184,166,0.5)]"
            >
              <Eye className="h-3.5 w-3.5" />
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const RfqCardSkeleton = () => (
  <div className="overflow-hidden rounded-2xl border border-ds-border bg-ds-card shadow-sm">
    <div className="h-48 animate-pulse bg-ds-muted" />
    <div className="space-y-3 p-5">
      <div className="h-4 w-3/4 animate-pulse rounded bg-ds-muted" />
      <div className="h-3 w-full animate-pulse rounded bg-ds-muted/70" />
      <div className="h-3 w-5/6 animate-pulse rounded bg-ds-muted/70" />
      <div className="h-3 w-2/3 animate-pulse rounded bg-ds-muted/70" />
      <div className="mt-4 h-10 animate-pulse rounded-xl bg-ds-muted/70" />
    </div>
  </div>
);

export default RfqCard;

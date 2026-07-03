import { RfqStatus } from "./rfq-form.types";

export type RfqItem = {
  _id: string;
  rfq_title: string;
  product_category: string;
  total_quantity: number;
  total_budget: number | null;
  required_delivery_date: string;
  status: string;
  createdAt: string;
  referenceImages: { url: string; publicId: string }[];
  [key: string]: unknown;
};

export type GetRfqQueryType = {
  createdBy?: string;
  status?: RfqStatus;
  sort?: string;
  page?: number;
  limit?: number;
};

export type UseGetRfqsOptions = {
  enabled?: boolean;
};

export interface RfqFilterStateType {
  status: string;
  product_category: string;
  gender: string;
  material_febric: string;
  required_colors: string[];
  sample_requirement: string;
  printing_embroidery: string;
  packaging_requirement: string;
  deliveryCountry: string;
  Incoterms: string;
  payment_terms: string;
}

// filter default value
export const DEFAULT_FILTERS: RfqFilterStateType = {
  status: "",
  product_category: "",
  gender: "",
  material_febric: "",
  required_colors: [],
  sample_requirement: "",
  printing_embroidery: "",
  packaging_requirement: "",
  deliveryCountry: "",
  Incoterms: "",
  payment_terms: "",
};

// filter status options
export const STATUS_OPTIONS = [
  { label: "Active", value: "active" },
  { label: "Pending", value: "pending" },
  { label: "Closed", value: "closed" },
  { label: "Draft", value: "draft" },
];

// rfq sort options
export const SortOptionsType = [
  { label: "Newest", value: "newest" },
  { label: "Urgent Delivery", value: "due_soon" },
  { label: "Quantity (Low to High)", value: "quantity_asc" },
  { label: "Quantity (High to Low)", value: "quantity_desc" },
  { label: "Budget (Low to High)", value: "budget_asc" },
  { label: "Budget (High to Low)", value: "budget_desc" },
];

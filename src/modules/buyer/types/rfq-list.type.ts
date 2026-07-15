import { CreateRfqResponse, RfqStatus, UploadedFile } from "./rfq-form.types";

export interface locationType {
  countryCode: string;
  countryName: string;
  stateCode: string;
  stateName: string;
  city: string;
}

interface IPopulatedCreator {
  _id: string;
  fullName: string;
  email: string;
  role: "buyer" | "supplier" | "admin";
  profilePhoto: UploadedFile;
  companyInfo?: {
    companyLogo?: UploadedFile;
    location?: locationType;
  };
}

export type RfqItem = Omit<CreateRfqResponse, "createdBy"> & {
  createdBy: IPopulatedCreator;
  quotesCount?: number;
};

export type GetRfqQueryType = {
  createdBy?: string;
  status?: RfqStatus;
  sort?: string;
  page?: number;
  limit?: number;
  search?: string;
  color_codes?: string;
  [key: string]: string | number | string[] | undefined;
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
  product_sizes: string[];
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
  product_sizes: [],
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
  { label: "Rejected", value: "rejected" },
  { label: "Selected", value: "selected" },
  { label: "Completed", value: "completed" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Expired", value: "expired" },
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

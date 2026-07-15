import { RfqEditFormValues, RfqFormValues } from "../schema/rfq-form.schema";
import { RfqItem } from "./rfq-list.type";

export type RfqStatus =
  | "pending"
  | "active"
  | "rejected"
  | "supplier_selected"
  | "completed"
  | "cancelled"
  | "expired";

export type UploadedFile = {
  url: string;
  publicId: string;
};

export type CreateRfqPayload = Omit<
  RfqFormValues,
  "referenceImages" | "techSheet" | "otherAttachments"
> & {
  createdBy: string | undefined;
  total_budget: number | null;
  referenceImages: UploadedFile[];
  techSheet: UploadedFile | null;
  otherAttachments: UploadedFile[];
};

export type EditRfqApiPayload = Omit<
  RfqEditFormValues,
  "referenceImages" | "techSheet" | "otherAttachments"
> & {
  total_budget: number | null;
  referenceImages: UploadedFile[];
  techSheet: UploadedFile | null;
  otherAttachments: UploadedFile[];
};

export type EditRfqPayload = EditRfqApiPayload & {
  _id: string;
  newReferenceImages?: File[];
  newTechSheet?: File;
  newOtherAttachments?: File[];
};

// Single RFQ
export type CreateRfqResponse = CreateRfqPayload & {
  _id: string;
  status: RfqStatus;
  createdAt: string;
  updatedAt: string;
};

// API Response Wrapper
export type GetRfqsResponse = {
  success: boolean;
  message: string;
  count: number;
  next: number | null;
  previous: number | null;
  results: RfqItem[];
};

export type ApiResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};

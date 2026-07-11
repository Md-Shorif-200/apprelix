import { RfqEditFormValues, RfqFormValues } from "../schema/rfq-form.schema";

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
  data: {
    success: boolean;
    message: string;
    count: number;
    next: string | null;
    previous: string | null;
    results: CreateRfqResponse[];
  };
};

export type ApiResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};


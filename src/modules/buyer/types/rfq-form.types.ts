import { RfqFormValues } from "../schema/rfq-form.schema";


export type RfqStatus =
  | "pending"
  | "active"
  | "rejected"
  | "supplier_selected"
  | "completed"
  | "cancelled"
  | "expired";


// ─── Type Definitions for Final Payload ────────
export type UploadedFile = {
  url: string;
  publicId: string;
};

export type CreateRfqPayload = Omit<
  RfqFormValues,
  "referenceImages" | "techSheet" | "otherAttachments"
> & {
  createdBy : string | undefined;
  referenceImages: UploadedFile[];
  techSheet: UploadedFile | null;
  otherAttachments: UploadedFile[];
};



export type RfqApiResponse = {
  success: boolean;
  message: string;
  data?: CreateRfqPayload & {
    status: RfqStatus;
    createdAt: string;
    updatedAt: string;
  };
};
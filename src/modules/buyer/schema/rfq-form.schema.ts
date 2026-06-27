// src/lib/validations/rfqForm.schema.ts

import { z } from "zod";

export const rfqFormSchema = z.object({
  // ── Section 1: Product Details ──────────────────────────────────────────────
  rfq_title: z.string().min(1, "RFQ title is required."),
  product_category: z.string().min(1, "Product category is required."),
  gender: z.string().min(1, "Target gender is required."),
  material_febric: z.string().min(1, "Material/Fabric is required."),
  febric_gsm: z
    .union([
      z.number().positive("GSM must be a positive number."),
      z.literal(""),
    ])
    .optional(),
  total_quantity: z
    .number({ message: "Quantity must be a number." })
    .positive("Quantity must be a positive number."),
  required_colors: z.array(z.string()).optional(),
  product_sizes: z.array(z.string()).optional(),
  printing_embroidery: z.string().optional(),
  packaging_requirement: z.string().optional(),
  sample_requirement: z.boolean({
    message: "Please specify if a sample is required.",
  }),
  // ── Section 2: Business & Logistics ────────────────────────────────────────
  budget_per_piece: z
    .union([
      z.number().positive("Budget must be a positive number."),
      z.literal(""),
    ])
    .optional(),
  total_budget: z
    .union([
      z.number().positive("Budget must be a positive number."),
      z.literal(""),
    ])
    .optional(),
  required_delivery_date: z.string().min(1, "Delivery date is required."),
  deliveryCountry: z.string().min(1, "Delivery country is required."),
  delivery_place: z.string().optional(),
  Incoterms: z.string().optional(),
  payment_terms: z.string().optional(),
  certifications: z.array(z.string()).optional(),

  // ── Section 3: Description & Attachments ───────────────────────────────────
  description: z
    .string()
    .min(20, "Description must be at least 20 characters long."),

  referenceImages: z.any().refine((files) => files && files.length >= 2, {
    message: "Please upload at least 2 reference images.",
  }),

  techSheet: z.any().refine((file) => file instanceof File, {
    message: "Please upload a tech spec sheet.",
  }),

  otherAttachments: z.any().refine((files) => files && files.length > 0, {
    message: "Please upload at least one attachment.",
  }),
});

export type RfqFormValues = z.infer<typeof rfqFormSchema>;

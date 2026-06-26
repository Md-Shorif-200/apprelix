// src/lib/validations/rfqForm.schema.ts

import { z } from "zod";

export const rfqFormSchema = z.object({
  // ── Section 1: Product Details ──────────────────────────────────────────────
  refq_title: z.string().min(1, "RFQ title is required."),
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
  sample_requirement: z
    .string()
    .min(1, "Please specify if a sample is required."),

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
    .min(50, "Description must be at least 50 characters long."),
  referenceImages: z.any().optional(),
  techSheet: z.any().optional(),
  otherAttachments: z.any().optional(),
});

export type RfqFormValues = z.infer<typeof rfqFormSchema>;

import { z } from "zod";

export type RfqColorValue = {
  name: string;
  code: string;
};

export const rfqFormSchema = z.object({
  // ── Section 1: Product Details ──────────────────────────────────────────────
  rfq_title: z.string().min(1, "RFQ title is required."),

  product_category: z
    .string({ error: "Product category is required." })
    .min(1, "Product category is required."),

  gender: z
    .string({ error: "Target gender is required." })
    .min(1, "Target gender is required."),

  material_febric: z
    .string({ error: "Material/Fabric is required." })
    .min(1, "Material/Fabric is required."),

  febric_gsm: z
    .number({ error: "GSM must be a number." })
    .positive("GSM must be a positive number.")
    .optional()
    .or(z.nan().transform(() => undefined))
    .optional(),

  total_quantity: z
    .number({ error: "Quantity must be a number." })
    .positive("Quantity must be a positive number."),

  required_colors: z
    .array(
      z.object({
        name: z.string().min(1, "Color name is required."),
        code: z.string().min(1, "Color code is required."),
      }),
    )
    .optional(),
  product_sizes: z.array(z.string()).optional(),

  printing_embroidery: z.string().optional(),
  packaging_requirement: z.string().optional(),

  sample_requirement: z.boolean({
    error: "Please specify if a sample is required.",
  }),

  // ── Section 2: Business & Logistics ────────────────────────────────────────
  budget_per_piece: z
    .number({ error: "Budget must be a number." })
    .positive("Budget must be a positive number.")
    .optional()
    .or(z.nan().transform(() => undefined))
    .optional(),

  required_delivery_date: z
    .string({ error: "Delivery date is required." })
    .min(1, "Delivery date is required.")
    .refine(
      (val) => {
        if (!val) return false;
        const selected = new Date(val);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return selected > today;
      },
      { message: "Delivery date must be in the future." },
    ),

  deliveryCountry: z
    .string({ error: "Delivery country is required." })
    .min(1, "Delivery country is required."),

  delivery_place: z.string().optional(),

  Incoterms: z
    .string({ error: "Incoterms is required." })
    .min(1, "Incoterms is required."),

  payment_terms: z
    .string({ error: "Payment terms is required." })
    .min(1, "Payment terms is required."),

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

// Edit mode — files are optional (existing files are kept separately)
export const rfqEditFormSchema = rfqFormSchema
  .omit({
    referenceImages: true,
    techSheet: true,
    otherAttachments: true,
    required_delivery_date: true,
  })
  .extend({
    required_delivery_date: z
      .string({ error: "Delivery date is required." })
      .min(1, "Delivery date is required."),
    referenceImages: z.array(z.any()).optional(),
    techSheet: z.any().optional(),
    otherAttachments: z.array(z.any()).optional(),
  });

export type RfqEditFormValues = z.infer<typeof rfqEditFormSchema>;

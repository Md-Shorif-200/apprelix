import { z } from "zod";
import { parsePhoneNumberFromString } from "libphonenumber-js";
/* ─────────────── Base Schema ─────────────── */
const baseRegistrationSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .nonempty("name is required")
      .min(2, "name must be at least 2 characters")
      .max(20, "name is too long"),

    email: z
      .string()
      .trim()
      .nonempty("Email address is required")
      .email("Enter a valid email address")
      .transform((value) => value.toLowerCase()),

    phone: z
      .string()
      .trim()
      .min(1, "Phone number is required")
      .superRefine((value, ctx) => {
        try {
          const phoneNumber = parsePhoneNumberFromString(value);
          if (!phoneNumber?.isValid()) {
            ctx.addIssue({
              code: "custom",
              message: "Please enter a valid phone number",
              fatal: true,
            });
          }
        } catch {
          ctx.addIssue({
            code: "custom",
            message: "Please enter a valid phone number",
            fatal: true,
          });
        }
      })
      .transform((value) => parsePhoneNumberFromString(value)!.format("E.164")),

    password: z
      .string()
      .nonempty("Password is required")
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Must contain uppercase, lowercase and number",
      ),

    role: z
      .string()
      .min(1, "Please select an account type")
      .refine(
        (value) => ["buyer", "supplier"].includes(value),
        "Invalid account type",
      ),

    companyName: z
      .string()
      .trim()
      .nonempty("Company name is required")
      .min(2, "Company name must be at least 2 characters"),

    companyWebsite: z
      .string()
      .url("Enter a valid URL")
      .optional()
      .or(z.literal("")),

    location: z.object({
      country: z.string().nonempty("Country is required"),
      state: z.string().nonempty("State is required"),
      city: z.string().nonempty("City is required"),
    }),

    streetAddress: z
      .string()
      .trim()
      .nonempty("Company address is required")
      .min(10, "Please enter a full address"),

    // Supplier specific fields (validated in superRefine when role is supplier)
    factoryName: z.string().optional(),
    productionCapacity: z.string().optional(),
    yearEstablished: z.string().optional(),
    numberOfEmployees: z.string().optional(),
    productCategories: z.array(z.string()).optional(),
    factoryLocation: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.role !== "supplier") return;

    if (!data.factoryName || data.factoryName.trim().length < 2) {
      ctx.addIssue({
        code: "custom",
        message: "Factory name is required",
        path: ["factoryName"],
        fatal: true,
      });
    }

    if (!data.productionCapacity) {
      ctx.addIssue({
        code: "custom",
        message: "Please select production capacity",
        path: ["productionCapacity"],
        fatal: true,
      });
    }

    if (!data.yearEstablished?.trim()) {
      ctx.addIssue({
        code: "custom",
        message: "Please select a valid date",
        path: ["yearEstablished"],
        fatal: true,
      });
    } else {
      const dateResult = z.string().datetime().safeParse(data.yearEstablished);
      if (!dateResult.success) {
        ctx.addIssue({
          code: "custom",
          message: "Invalid date format. Please select from the calendar.",
          path: ["yearEstablished"],
          fatal: true,
        });
      } else if (new Date(data.yearEstablished).getFullYear() < 1950) {
        ctx.addIssue({
          code: "custom",
          message: "Year must be 1950 or later",
          path: ["yearEstablished"],
          fatal: true,
        });
      }
    }

    if (!data.numberOfEmployees) {
      ctx.addIssue({
        code: "custom",
        message: "Please select number of employees",
        path: ["numberOfEmployees"],
        fatal: true,
      });
    }

    if (!data.productCategories || data.productCategories.length === 0) {
      ctx.addIssue({
        code: "custom",
        message: "Please select at least one product category",
        path: ["productCategories"],
        fatal: true,
      });
    }

    if (!data.factoryLocation || data.factoryLocation.trim().length < 10) {
      ctx.addIssue({
        code: "custom",
        message: "Please enter a full factory address",
        path: ["factoryLocation"],
        fatal: true,
      });
    }
  });

/* ─────────────── With Confirm Password ─────────────── */
export const registrationSchema = baseRegistrationSchema
  .extend({
    confirmPassword: z.string().nonempty("Confirm password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

/* ─────────────── Types ─────────────── */
export type RegisterUserData = z.output<typeof baseRegistrationSchema>;
export type RegistrationFormInput = z.input<typeof registrationSchema>;
export type RegistrationFormOutput = z.output<typeof registrationSchema>;
/** Validated registration payload after Zod transforms (e.g. phone E.164). */
export type RegistrationFormData = RegistrationFormOutput;

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .nonempty("Email is required")
    .email("Enter a valid email address")
    .transform((v) => v.toLowerCase()),

  password: z
    .string()
    .nonempty("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

export type LoginFormData = z.infer<typeof loginSchema>;

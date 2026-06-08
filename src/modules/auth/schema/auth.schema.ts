import { z } from "zod";

/* ─────────────── Base Schema ─────────────── */
const baseRegistrationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .nonempty("First name is required")
    .min(2, "First name must be at least 2 characters")
    .max(20, "First name is too long"),

  lastName: z
    .string()
    .trim()
    .nonempty("Last name is required")
    .min(2, "Last name must be at least 2 characters")
    .max(20, "Last name is too long"),

  email: z
    .string()
    .trim()
    .nonempty("Email address is required")
    .email("Enter a valid email address")
    .transform((value) => value.toLowerCase()),

  phone: z
    .string()
    .trim()
    .nonempty("Phone number is required")
    .min(8, "Phone number is too short")
    .max(20, "Phone number is too long"),

  password: z
    .string()
    .nonempty("Password is required")
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Must contain uppercase, lowercase and number"
    ),

  role: z
    .string()
    .min(1, "Please select an account type")
    .refine(
      (value) => ["buyer", "supplier"].includes(value),
      "Invalid account type"
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

  country: z
    .string()
    .trim()
    .nonempty("Country is required")
    .min(2, "Country must be at least 2 characters"),

  city: z
    .string()
    .trim()
    .nonempty("City is required")
    .min(2, "City must be at least 2 characters"),

  companyAddress: z
    .string()
    .trim()
    .nonempty("Company address is required")
    .min(10, "Please enter a full address"),
});

/* ─────────────── With Confirm Password ─────────────── */
export const registrationSchema = baseRegistrationSchema
  .extend({
    confirmPassword: z
      .string()
      .nonempty("Confirm password is required"),
  })
  .refine(
    (data) => data.password === data.confirmPassword,
    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    }
  );

/* ─────────────── Types ─────────────── */
export type RegisterUserData = z.infer<
  typeof baseRegistrationSchema
>;

export type RegistrationFormData = z.infer<
  typeof registrationSchema
>;




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
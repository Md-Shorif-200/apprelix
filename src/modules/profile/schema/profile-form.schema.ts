import z from "zod";

const profileFormUpdate = z.object({
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
    .nonempty("Phone number is required")
    .min(8, "Phone number is too short")
    .max(20, "Phone number is too long"),
});

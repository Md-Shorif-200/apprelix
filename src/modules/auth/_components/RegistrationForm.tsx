"use client";

import CustomInput from "@/components/inputs/CustomInput";
import CustomTextArea from "@/components/inputs/CustomTextArea";
import FormInputSectionTitle from "@/components/inputs/FormInputSectionTitle";
import {
  ArrowRight,
  Building2,
  Camera,
  CheckCircle2,
  Factory,
  Globe,
  Loader2,
  Lock,
  Mail,
  MapPin,
  Phone,
  ShoppingBag,
  User,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

// ─── Form shape ───────────────────────────────────────────────────────────────

type RegistrationFormData = {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  profilePhoto?: FileList;
  companyLogo?: FileList;
  accountType: "buyer" | "supplier";
  companyName: string;
  companyWebsite: string;
  country: string;
  city: string;
  companyAddress: string;
};

const defaultValues: RegistrationFormData = {
  fullName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  accountType: "buyer",
  companyName: "",
  companyWebsite: "",
  country: "",
  city: "",
  companyAddress: "",
};

const accountTypes = [
  {
    value: "buyer" as const,
    label: "Buyer",
    description: "Source & purchase products",
    icon: ShoppingBag,
  },
  {
    value: "supplier" as const,
    label: "Supplier",
    description: "Sell & fulfill orders",
    icon: Factory,
  },
];

function Divider() {
  return <div className="my-6 border-t border-gray-100" />;
}

// ─── Main form ────────────────────────────────────────────────────────────────

export default function RegistrationForm() {
  const [formKey, setFormKey] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationFormData>({
    defaultValues,
    mode: "onBlur",
  });

  const selectedAccountType = watch("accountType");

  async function onSubmit(data: RegistrationFormData) {
    // Replace with your real API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Registration data:", data);
    reset(defaultValues);
    setFormKey((key) => key + 1);
  }

  return (
    <div className="flex  items-center justify-center bg-gradient-to-br from-teal-50/60 via-white to-gray-50 px-4 py-6">
      <div className="w-full">
        <div className="mb-7">
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
            <CheckCircle2 size={12} />
            Free to join — no credit card needed
          </div>

          <h1 className="mb-1 text-2xl font-bold text-gray-900">
            Create your account
          </h1>
          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-teal-600 hover:underline"
            >
              Log in here
            </Link>
          </p>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm">
          <form key={formKey} onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* Step 1 — Personal */}
            <FormInputSectionTitle
              step={1}
              title="Personal Information"
              subtitle="Tell us a bit about yourself"
            />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <CustomInput
                label="Full Name"
                placeholder="John Doe"
                leftIcon={<User size={15} />}
                error={errors.fullName?.message}
                {...register("fullName", {
                  required: "Full name is required",
                  minLength: { value: 2, message: "Name is too short" },
                })}
              />

              <CustomInput
                label="Email Address"
                type="email"
                placeholder="john@example.com"
                leftIcon={<Mail size={15} />}
                error={errors.email?.message}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />

              <CustomInput
                label="Phone Number"
                type="tel"
                placeholder="+1 234 567 890"
                leftIcon={<Phone size={15} />}
                error={errors.phone?.message}
                {...register("phone", {
                  required: "Phone number is required",
                  minLength: { value: 8, message: "Phone number is too short" },
                })}
              />

              <CustomInput
                label="Profile Photo"
                type="file"
                accept="image/*"
                leftIcon={<Camera size={15} />}
                error={errors.profilePhoto?.message}
                {...register("profilePhoto")}
              />

              <CustomInput
                label="Password"
                type="password"
                placeholder="Create a strong password"
                leftIcon={<Lock size={15} />}
                error={errors.password?.message}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
              />

              <CustomInput
                label="Confirm Password"
                type="password"
                placeholder="Repeat your password"
                leftIcon={<Lock size={15} />}
                error={errors.confirmPassword?.message}
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value, formValues) =>
                    value === formValues.password || "Passwords do not match",
                })}
              />
            </div>

            <Divider />

            {/* Step 2 — Account type */}
            <FormInputSectionTitle
              step={2}
              title="Account Type"
              subtitle="Choose how you'll use the platform"
            />

            <div className="grid grid-cols-2 gap-3">
              {accountTypes.map((type) => {
                const Icon = type.icon;
                const isSelected = selectedAccountType === type.value;

                return (
                  <label
                    key={type.value}
                    className={`relative flex cursor-pointer items-center gap-2.5 rounded-xl border-2 py-2.5 pl-2.5 pr-8 transition-all duration-200
                      ${isSelected
                        ? "border-teal-500 bg-teal-50/50"
                        : "border-gray-200 bg-white hover:border-gray-300"
                      }`}
                  >
                    <input
                      type="radio"
                      value={type.value}
                      className="hidden"
                      {...register("accountType", {
                        required: "Please select an account type",
                      })}
                    />

                    <div
                      className={`shrink-0 rounded-md p-1.5 transition-colors ${isSelected ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-500"}`}
                    >
                      <Icon size={14} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p
                        className={`text-xs font-bold leading-tight ${isSelected ? "text-teal-700" : "text-gray-700"}`}
                      >
                        {type.label}
                      </p>
                      <p className="mt-0.5 text-[11px] leading-tight text-gray-400">
                        {type.description}
                      </p>
                    </div>

                    {isSelected && (
                      <div className="absolute right-2 top-1/2 -translate-y-1/2">
                        <CheckCircle2 size={14} className="text-teal-500" />
                      </div>
                    )}
                  </label>
                );
              })}
            </div>
            {errors.accountType && (
              <p className="mt-2 text-xs text-red-500">
                {errors.accountType.message}
              </p>
            )}

            <Divider />

            {/* Step 3 — Company */}
            <FormInputSectionTitle
              step={3}
              title="Company Information"
              subtitle="Help buyers and suppliers find you easily"
            />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <CustomInput
                label="Company Name"
                placeholder="Acme Textiles Ltd."
                leftIcon={<Building2 size={15} />}
                error={errors.companyName?.message}
                {...register("companyName", {
                  required: "Company name is required",
                })}
              />

              <CustomInput
                label="Website (Optional)"
                type="url"
                placeholder="https://yourwebsite.com"
                leftIcon={<Globe size={15} />}
                error={errors.companyWebsite?.message}
                {...register("companyWebsite")}
              />

              <CustomInput
                label="Country"
                placeholder="United States"
                leftIcon={<MapPin size={15} />}
                error={errors.country?.message}
                {...register("country", { required: "Country is required" })}
              />

              <CustomInput
                label="City"
                placeholder="New York"
                leftIcon={<MapPin size={15} />}
                error={errors.city?.message}
                {...register("city", { required: "City is required" })}
              />

              <div className="sm:col-span-2">
                <CustomInput
                  label="Company Logo"
                  type="file"
                  accept="image/*"
                  leftIcon={<Camera size={15} />}
                  error={errors.companyLogo?.message}
                  {...register("companyLogo")}
                />
              </div>

              <div className="sm:col-span-2">
                <CustomTextArea
                  label="Company Address"
                  placeholder="Enter your full company address..."
                  error={errors.companyAddress?.message}
                  {...register("companyAddress", {
                    required: "Company address is required",
                    minLength: {
                      value: 10,
                      message: "Please enter a complete address",
                    },
                  })}
                />
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-600/20 transition-all duration-200 hover:bg-teal-700 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting && (
                  <Loader2 size={16} className="animate-spin" />
                )}
                Create My Account
                {!isSubmitting && (
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                )}
              </button>
            </div>
          </form>
        </div>

        <p className="mt-5 text-center text-xs leading-relaxed text-gray-400">
          By registering, you agree to our{" "}
          <a href="#" className="underline transition-colors hover:text-teal-600">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline transition-colors hover:text-teal-600">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}

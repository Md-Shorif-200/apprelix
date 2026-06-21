"use client";

import CustomInput from "@/components/inputs/CustomInput";
import CustomTextArea from "@/components/inputs/CustomTextArea";
import FormInputSectionTitle from "@/components/inputs/FormInputSectionTitle";
import {
  ArrowRight,
  Building2,
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
import {
  useForm,
  Controller,
  useWatch,
  SubmitHandler,
  FieldErrors,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RegistrationFormInput,
  RegistrationFormOutput,
  registrationSchema,
} from "../schema/auth.schema";
import { toast } from "sonner";
import { useRegister } from "../hooks/useAuth";
import { handleError } from "@/lib/error/errorHandler";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import CustomSelect from "@/components/inputs/CustomSelect"; // Assuming this is the correct path
import CustomCalanderInput from "@/components/inputs/CustomCalanderInput";
import CustomMultiSelectInput from "@/components/inputs/CustomMultiSelectInput";
import {
  numberOfEmployeesOptions,
  productCategoriesOptions,
  productionCapacityOptions,
} from "../utils/register-select-options";
import CustomTelInput from "@/components/inputs/CustomTelInput";
import LocationSelector from "./LocationSelector";
import { Country, State } from "country-state-city";
import { RoleDetailsType } from "@/modules/users/types/users.types";

const defaultValues: RegistrationFormInput = {
  fullName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  role: "",
  companyName: "",
  companyWebsite: "",
  location: { country: "", state: "", city: "" },
  streetAddress: "",

  // Supplier
  factoryName: "",
  productionCapacity: "",
  yearEstablished: "",
  numberOfEmployees: "",
  productCategories: [],
  factoryLocation: "",
};

const roles = [
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

function getFirstErrorMessage(errors: FieldErrors): string | undefined {
  for (const value of Object.values(errors)) {
    if (!value) continue;

    if (typeof value === "object" && "message" in value && value.message) {
      return String(value.message);
    }

    if (typeof value === "object") {
      const nested = getFirstErrorMessage(value as FieldErrors);
      if (nested) return nested;
    }
  }
}

function Divider() {
  return <div className="my-6 border-t border-gray-100" />;
}

export default function RegistrationForm() {
  const [formKey, setFormKey] = useState(0);
  const { mutateAsync, isPending } = useRegister();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<RegistrationFormInput, unknown, RegistrationFormOutput>({
    defaultValues,
    mode: "onSubmit",
    reValidateMode: "onChange",
    shouldFocusError: true,
    resolver: zodResolver(registrationSchema),
  });

  const selectedRole = useWatch({ control, name: "role" });

  const onInvalid = (formErrors: FieldErrors<RegistrationFormInput>) => {
    const message = getFirstErrorMessage(formErrors);
    if (message) {
      toast.error(message);
    }
  };

  const onSubmit: SubmitHandler<RegistrationFormOutput> = async (data) => {
    console.log(data);
    try {
      const {
        role,
        factoryName,
        productionCapacity,
        yearEstablished,
        numberOfEmployees,
        productCategories,
        factoryLocation,
        fullName,
        email,
        phone,
        password,
        companyName,
        companyWebsite,
        location,
        streetAddress,
      } = data;

      // country name
      const countryName =
        Country.getCountryByCode(location.country)?.name ?? "";
      const stateName =
        State.getStateByCodeAndCountry(location.state, location.country)
          ?.name ?? "";

      // role details

      const roleDetails: RoleDetailsType | undefined =
        role === "supplier"
          ? {
              factoryName: factoryName!,
              productionCapacity: productionCapacity!,
              yearEstablished: yearEstablished!,
              numberOfEmployees: numberOfEmployees!,
              productCategories: productCategories!,
              factoryLocation: factoryLocation!,
            }
          : undefined;

      // submited payload

      const payload = {
        fullName,
        email,
        phone,
        password,

        companyInfo: {
          companyName,
          companyWebsite: companyWebsite ?? "",
          location: {
            countryCode: location.country,
            countryName: countryName,
            stateCode: location.state,
            stateName: stateName,
            city: location.city,
          },
          streetAddress,
        },
        role,
        roleDetails,
      };

      await mutateAsync(payload);

      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (res?.ok) {
        toast.success("Registration & Login successful");
        router.push("/");
        router.refresh();
      } else {
        toast.error("Login failed after registration");
      }

      reset();
      setFormKey((k) => k + 1);
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <div className="flex min-h-full flex-col bg-gradient-to-br from-teal-50/60 via-white to-gray-50 p py-8  px-4">
      <div className="m-auto w-full">
        {/* Header */}
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
          <form
            key={formKey}
            onSubmit={handleSubmit(onSubmit, onInvalid)}
            noValidate
          >
            {/* Step 1 */}
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
                {...register("fullName")}
              />
              <CustomInput
                label="Email Address"
                type="email"
                placeholder="john@example.com"
                leftIcon={<Mail size={15} />}
                error={errors.email?.message}
                {...register("email")}
              />

              <div className="sm:col-span-2">
                <Controller
                  name="phone"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <CustomTelInput
                      label="Phone Number"
                      value={field.value}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      error={error?.message ?? errors.phone?.message}
                    />
                  )}
                />
              </div>

              <CustomInput
                label="Password"
                type="password"
                placeholder="Create a strong password"
                leftIcon={<Lock size={15} />}
                error={errors.password?.message}
                {...register("password")}
              />
              <CustomInput
                label="Confirm Password"
                type="password"
                placeholder="Repeat your password"
                leftIcon={<Lock size={15} />}
                error={errors.confirmPassword?.message}
                {...register("confirmPassword")}
              />
            </div>

            <Divider />

            {/* Step 2 */}
            <FormInputSectionTitle
              step={2}
              title="Account Type"
              subtitle="Choose how you'll use the platform"
            />
            <div className="grid grid-cols-2 gap-3">
              {roles.map((type) => {
                const Icon = type.icon;
                const isSelected = selectedRole === type.value;
                return (
                  <label
                    key={type.value}
                    className={`relative flex cursor-pointer items-center gap-2.5 rounded-xl border-2 py-2.5 pl-2.5 pr-8 transition-all duration-200
                      ${
                        isSelected
                          ? "border-teal-500 bg-teal-50/50"
                          : "border-gray-200 bg-white hover:border-gray-300"
                      }`}
                  >
                    <input
                      type="radio"
                      value={type.value}
                      className="hidden"
                      {...register("role")}
                    />
                    <div
                      className={`shrink-0 rounded-md p-1.5 ${
                        isSelected
                          ? "bg-teal-600 text-white"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      <Icon size={14} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p
                        className={`text-xs font-bold ${
                          isSelected ? "text-teal-700" : "text-gray-700"
                        }`}
                      >
                        {type.label}
                      </p>
                      <p className="text-[11px] text-gray-400">
                        {type.description}
                      </p>
                    </div>
                    {isSelected && (
                      <CheckCircle2
                        size={14}
                        className="text-teal-500 absolute right-2"
                      />
                    )}
                  </label>
                );
              })}
            </div>
            {errors.role && (
              <p className="mt-2 text-xs text-red-500">{errors.role.message}</p>
            )}

            <Divider />

            {/* Step 3 */}
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
                {...register("companyName")}
              />
              <CustomInput
                label="Website (Optional)"
                type="url"
                placeholder="https://yourwebsite.com"
                leftIcon={<Globe size={15} />}
                error={errors.companyWebsite?.message}
                {...register("companyWebsite")}
              />
              <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Controller
                  name="location"
                  control={control}
                  render={({ field }) => (
                    <LocationSelector
                      value={field.value}
                      onChange={field.onChange}
                      errors={{
                        country: errors.location?.country,
                        state: errors.location?.state,
                        city: errors.location?.city,
                      }}
                    />
                  )}
                />
              </div>
              <div className="sm:col-span-2">
                <CustomTextArea
                  label="Street  Address"
                  placeholder="House #12, Road #5, Bahadderhat"
                  error={errors.streetAddress?.message}
                  {...register("streetAddress")}
                />
              </div>
            </div>

            {/* Role Specific Information */}
            {selectedRole === "supplier" && (
              <>
                <Divider />
                <FormInputSectionTitle
                  step={4}
                  title="Supplier Information"
                  subtitle="Provide additional details based on your role"
                />

                {/* Supplier Fields */}

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <CustomInput
                    label="Factory Name"
                    placeholder="ABC Garments Ltd."
                    leftIcon={<Factory size={15} />}
                    error={errors.factoryName?.message}
                    {...register("factoryName")}
                  />

                  {/* Production Capacity - UPDATED to CustomSelect */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Production Capacity
                    </label>
                    <Controller
                      name="productionCapacity"
                      control={control}
                      render={({ field }) => (
                        <CustomSelect
                          placeholder="Select capacity"
                          options={productionCapacityOptions}
                          onChange={field.onChange}
                        />
                      )}
                    />
                    {errors.productionCapacity && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.productionCapacity.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Date Established
                    </label>
                    <Controller
                      control={control}
                      name="yearEstablished"
                      render={({
                        field: { value, onChange },
                        fieldState: { error },
                      }) => {
                        const parsedDate = value?.trim()
                          ? new Date(value)
                          : undefined;

                        return (
                          <CustomCalanderInput
                            value={parsedDate}
                            onChange={(date) =>
                              onChange(date ? date.toISOString() : undefined)
                            }
                            error={error?.message}
                          />
                        );
                      }}
                    />
                  </div>

                  {/* Number of Employees - UPDATED to CustomSelect */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Number of Employees
                    </label>
                    <Controller
                      name="numberOfEmployees"
                      control={control}
                      render={({ field }) => (
                        <CustomSelect
                          placeholder="Select employee range"
                          options={numberOfEmployeesOptions}
                          onChange={field.onChange}
                        />
                      )}
                    />
                    {errors.numberOfEmployees && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.numberOfEmployees.message}
                      </p>
                    )}
                  </div>

                  {/* Product Categories - UPDATED to CustomSelect */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Product Categories
                    </label>
                    <Controller
                      name="productCategories"
                      control={control}
                      render={({ field }) => (
                        <CustomMultiSelectInput
                          placeholder="Select categories"
                          options={productCategoriesOptions}
                          value={(field.value ?? []) as string[]} // ensure non-undefined array
                          onChange={field.onChange}
                        />
                      )}
                    />
                    {errors.productCategories && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.productCategories.message}
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <CustomTextArea
                      label="Factory Location"
                      placeholder="Enter your full factory address..."
                      error={errors.factoryLocation?.message}
                      {...register("factoryLocation")}
                    />
                  </div>
                </div>
              </>
            )}

            {/* Submit */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isPending}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-600/20 hover:bg-teal-700 disabled:opacity-70"
              >
                {isPending ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Creating...
                  </>
                ) : (
                  <>
                    Create Account
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition"
                    />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        <p className="mt-5 text-center text-xs text-gray-400">
          By registering, you agree to our Terms and Privacy Policy
        </p>
      </div>
    </div>
  );
}

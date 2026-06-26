"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FileText,
  Send,
  Package,
  Truck,
  Paperclip,
  Image as ImageIcon,
  File,
  Plus,
  User,
} from "lucide-react";
import { Country } from "country-state-city";

// ─── Schema and Types ─────────────────────────────────────────────────────────
import CustomInput from "@/components/inputs/CustomInput";
import CustomSelect from "@/components/inputs/CustomSelect";
import CustomSearchSelectInput from "@/components/inputs/CustomSearchSelectInput";
import CustomMultiSelectInput from "@/components/inputs/CustomMultiSelectInput";
import CustomCalanderInput from "@/components/inputs/CustomCalanderInput";
import DropZone from "./DropZone";
import { rfqFormSchema, RfqFormValues } from "../schema/rfq-form.schema";

import CustomTextArea from "@/components/inputs/CustomTextArea";
import { productCategoriesOptions } from "@/modules/auth/utils/register-select-options";
import {
  allClothingSizesOptions,
  popularColorOptions,
  INCOTERMS_OPTIONS,
  materialFabricOptions,
  GENDER_OPTIONS,
  SAMPLE_OPTIONS,
  PRINTING_OPTIONS,
  PACKAGING_OPTIONS,
  COUNTRY_OPTIONS,
  PAYMENT_OPTIONS,
} from "../utils/rfq-form.select-options";
import CustomColorSelectInput from "@/components/inputs/CustomColorSelectInput";

// ─── Reusable: Section Header ─────────────────────────────────────────────────
function SectionHeader({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: React.ElementType;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 ring-1 ring-teal-100">
        <Icon size={17} className="text-teal-600" />
      </div>
      <div>
        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-700">
          {title}
        </h3>
        {subtitle && <p className="mt-0.5 text-xs text-gray-400">{subtitle}</p>}
      </div>
    </div>
  );
}

// ─── Field Label ──────────────────────────────────────────────────────────────
function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-sm font-medium text-gray-700 mb-1.5">
      {children}
    </label>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function CreateRfqForm() {
  const {
    control,
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = useForm<RfqFormValues>({
    resolver: zodResolver(rfqFormSchema),
    defaultValues: {
      required_colors: [],
      product_sizes: [],
      certifications: [],
    },
  });

  const description = watch("description", "");

  const onSubmit = (data: RfqFormValues) => {
    console.log("✅ RFQ Payload:", data);
    alert("RFQ published successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 font-sans md:p-8">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
        {/* ── Header ── */}
        <div className="relative overflow-hidden bg-gradient-to-br from-teal-600 to-teal-500 px-8 py-7">
          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/5" />
          <div className="absolute -bottom-10 right-12 h-24 w-24 rounded-full bg-white/5" />
          <div className="relative flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/25">
              <FileText size={22} className="text-white" />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-xl font-bold text-white">Create New RFQ</h1>
                <span className="rounded-full border border-white/25 bg-white/15 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
                  Request For Quotation
                </span>
              </div>
              <p className="mt-1 text-sm text-teal-100">
                Fill in the details below to receive competitive quotations from
                verified suppliers.
              </p>
            </div>
          </div>
        </div>

        {/* ── Form ── */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="divide-y divide-gray-100"
        >
          {/* ═══════════════════════════════════════════════════════════════════
              SECTION 1: Product Details
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="p-8">
            <SectionHeader
              icon={Package}
              title="Product Details"
              subtitle="Basic specifications of your product"
            />

            {/* Row 1: RFQ Title (full width) */}
            <div className="mb-4">
              <CustomInput
                label="RFQ Title"
                placeholder="e.g. Men's Polo Shirts — Summer Collection 2025"
                leftIcon={<User size={15} />}
                error={errors.refq_title?.message}
                {...register("refq_title")}
              />
            </div>

            {/* Row 2: Product Category + Gender */}
            <div className="mb-4 grid gap-4 md:grid-cols-2">
              <div>
                <FieldLabel>Product Category</FieldLabel>
                <Controller
                  name="product_category"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <CustomSearchSelectInput
                      placeholder="Select category"
                      options={productCategoriesOptions}
                      value={field.value}
                      onChange={field.onChange}
                      error={error?.message}
                    />
                  )}
                />
              </div>
              <div>
                <FieldLabel>Gender</FieldLabel>
                <Controller
                  name="gender"
                  control={control}
                  render={({ field }) => (
                    <CustomSelect
                      placeholder="Select gender"
                      options={GENDER_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />

                {errors.gender && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.gender.message}
                  </p>
                )}
              </div>
            </div>

            {/* Row 3: Material / Fabric + Fabric GSM */}
            <div className="mb-4 grid gap-4 md:grid-cols-2">
              <div>
                <FieldLabel>Material / Fabric</FieldLabel>
                <Controller
                  name="material_febric"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <CustomSearchSelectInput
                      placeholder="Select material"
                      options={materialFabricOptions}
                      value={field.value}
                      onChange={field.onChange}
                      error={error?.message}
                    />
                  )}
                />
              </div>
              <div>
                <CustomInput
                  label="Fabric GSM"
                  type="number"
                  placeholder="e.g. 160"
                  leftIcon={<User size={15} />}
                  error={errors.febric_gsm?.message}
                  {...register("febric_gsm", { valueAsNumber: true })}
                />
              </div>
            </div>

            {/* Row 4: Required Colors + Product Sizes */}
            <div className="mb-4 grid gap-4 md:grid-cols-2">
              <div>
                <FieldLabel>Required Colors</FieldLabel>
                <Controller
                  name="required_colors"
                  control={control}
                  render={({ field }) => (
                    <CustomColorSelectInput
                      placeholder="Select colors"
                      options={popularColorOptions}
                      value={(field.value ?? []) as string[]}
                      onChange={field.onChange}
                    />
                  )}
                />
              </div>
              <div>
                <FieldLabel>Product Sizes</FieldLabel>
                <Controller
                  name="product_sizes"
                  control={control}
                  render={({ field }) => (
                    <CustomMultiSelectInput
                      placeholder="Select sizes"
                      options={allClothingSizesOptions}
                      value={(field.value ?? []) as string[]}
                      onChange={field.onChange}
                    />
                  )}
                />
              </div>
            </div>

            {/* Row 5: Total Quantity + Sample Requirement */}
            <div className="mb-4 grid gap-4 md:grid-cols-2">
              <div>
                <CustomInput
                  label="Total Quantity (Pcs)"
                  type="number"
                  placeholder="e.g. 5000"
                  leftIcon={<User size={15} />}
                  error={errors.total_quantity?.message}
                  {...register("total_quantity", { valueAsNumber: true })}
                />
              </div>
              <div>
                <FieldLabel>Sample Requirement</FieldLabel>
                <Controller
                  name="sample_requirement"
                  control={control}
                  render={({ field }) => (
                    <CustomSelect
                      placeholder="Select sample requirement"
                      options={SAMPLE_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />

                {errors.sample_requirement && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.sample_requirement.message}
                  </p>
                )}
              </div>
            </div>

            {/* Row 6: Printing & Embroidery + Packaging Requirement */}
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <FieldLabel>Printing &amp; Embroidery</FieldLabel>
                <Controller
                  name="printing_embroidery"
                  control={control}
                  render={({ field }) => (
                    <CustomSelect
                      placeholder="Select printing method"
                      options={PRINTING_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />

                {errors.printing_embroidery && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.printing_embroidery.message}
                  </p>
                )}
              </div>
              <div>
                <FieldLabel>Packaging Requirement</FieldLabel>
                <Controller
                  name="packaging_requirement"
                  control={control}
                  render={({ field }) => (
                    <CustomSelect
                      placeholder="Select packaging"
                      options={PACKAGING_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />

                {errors.packaging_requirement && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.packaging_requirement.message}
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════
              SECTION 2: Business & Logistics
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="p-8">
            <SectionHeader
              icon={Truck}
              title="Business & Logistics"
              subtitle="Budget, delivery, and trade terms"
            />

            {/* Row 1: Budget per piece + Total Budget */}
            <div className="mb-4 grid gap-4 md:grid-cols-2">
              <CustomInput
                label="Budget per Piece (USD)"
                type="number"
                placeholder="e.g. 3.50"
                leftIcon={<User size={15} />}
                error={errors.budget_per_piece?.message}
                {...register("budget_per_piece", { valueAsNumber: true })}
              />
              <CustomInput
                label="Total Budget (USD)"
                type="number"
                placeholder="e.g. 17500"
                leftIcon={<User size={15} />}
                error={errors.total_budget?.message}
                {...register("total_budget", { valueAsNumber: true })}
              />
            </div>

            {/* Row 2: Required Delivery Date + Delivery Country */}
            <div className="mb-4 grid gap-4 md:grid-cols-2">
              <div>
                <FieldLabel>Required Delivery Date</FieldLabel>
                <Controller
                  control={control}
                  name="required_delivery_date"
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
              <div>
                <Controller
                  name="deliveryCountry"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <CustomSearchSelectInput
                      label="Delivery Country"
                      placeholder="Select country"
                      options={COUNTRY_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                      error={error?.message}
                    />
                  )}
                />
              </div>
            </div>

            {/* Row 3: Delivery Port + Incoterms */}
            <div className="mb-4 grid gap-4 md:grid-cols-2">
              <CustomInput
                label="Delivery Port / City / Airport"
                placeholder="e.g. Hamburg, Los Angeles"
                leftIcon={<User size={15} />}
                error={errors.delivery_place?.message}
                {...register("delivery_place")}
              />
              <div>
                <FieldLabel>Trade Terms (Incoterms)</FieldLabel>
                <Controller
                  name="Incoterms"
                  control={control}
                  render={({ field }) => (
                    <CustomSelect
                      placeholder="Select Incoterms"
                      options={INCOTERMS_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />

                {errors.Incoterms && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.Incoterms.message}
                  </p>
                )}
              </div>
            </div>

            {/* Row 4: Payment Terms (half width) */}
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <FieldLabel>Payment Terms</FieldLabel>
                <Controller
                  name="payment_terms"
                  control={control}
                  render={({ field }) => (
                    <CustomSelect
                      placeholder="Select payment terms"
                      options={PAYMENT_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════
              SECTION 3: Description & Attachments
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="p-8">
            <SectionHeader
              icon={Paperclip}
              title="Description & Attachments"
              subtitle="Describe your product and upload references"
            />

            {/* Row 1: Product Description (full width) */}
            <div className="mb-5">
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                Product Description
              </label>
              <CustomTextArea
                placeholder="Describe your product in detail — fabric feel, fit, design intent, special requirements…"
                error={errors.description?.message}
                {...register("description")}
              />
              <div className="mt-1.5 flex items-center justify-between">
                <p className="text-xs text-gray-400">Minimum 50 characters</p>
                <p
                  className={`text-xs font-medium ${
                    (description?.length ?? 0) >= 50
                      ? "text-teal-600"
                      : "text-gray-400"
                  }`}
                >
                  {description?.length ?? 0} / 50+
                </p>
              </div>
            </div>

            {/* Row 2: Reference Images (full width) */}
            <div className="mb-4">
              <Controller
                name="referenceImages"
                control={control}
                render={({ field }) => (
                  <DropZone
                    label="Reference Images"
                    hint="JPG, PNG — max 5 files, 5 MB each"
                    accept="image/jpeg,image/png"
                    multiple
                    icon={ImageIcon}
                    onChange={field.onChange}
                  />
                )}
              />
            </div>

            {/* Row 3: Tech Sheet + Other Attachments */}
            <div className="grid gap-4 md:grid-cols-2">
              <Controller
                name="techSheet"
                control={control}
                render={({ field }) => (
                  <DropZone
                    label="Technical Spec Sheet"
                    hint="PDF only — max 10 MB"
                    accept="application/pdf"
                    icon={File}
                    onChange={(files) => field.onChange(files[0])}
                  />
                )}
              />
              <Controller
                name="otherAttachments"
                control={control}
                render={({ field }) => (
                  <DropZone
                    label="Other Attachments"
                    hint="CAD, size charts, lab dips — PDF, XLS, DXF — max 10 MB"
                    accept=".pdf,.xls,.xlsx,.dxf"
                    icon={Plus}
                    multiple
                    onChange={field.onChange}
                  />
                )}
              />
            </div>
          </section>

          {/* ── Submit ── */}
          <div className="flex items-center justify-between bg-gray-50/70 px-8 py-6">
            <p className="text-xs text-gray-400">
              Your RFQ will be visible to verified suppliers only.
            </p>
            <button
              type="submit"
              className="flex items-center gap-2.5 rounded-xl bg-teal-600 px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-teal-700 hover:shadow-md active:scale-95"
            >
              <Send size={15} />
              Publish RFQ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

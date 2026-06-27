"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Package,
  Truck,
  Paperclip,
  Image as ImageIcon,
  File,
  Plus,
  User,
} from "lucide-react";

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
import { CustomButton } from "@/components/common/CustomButton";
import { useState } from "react";
import { uploadImageClient } from "@/utils/uploadImageClient";
import { RfqFileType } from "@/types/image";
import { toast } from "sonner";
import RfqFormHeader from "./RfqFormHeader";
import { CreateRfqPayload, UploadedFile } from "../types/rfq-form.types";
import { RfqFormSectionHeader } from "./RfqFormSectionHeader";
import { handleError } from "@/lib/error/errorHandler";
import { useCreateRfq } from "../hooks/rfq.hooks";
import { useSession } from "next-auth/react";

// ─── Field Label ────────────
function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="mb-1.5 block text-sm font-medium text-gray-700">
      {children}
    </label>
  );
}

// ─── Main Component ───────────
export default function CreateRfqForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { mutateAsync } = useCreateRfq();
  const { data: session } = useSession();

  const {
    control,
    handleSubmit,
    watch,
    reset,
    register,
    formState: { errors },
  } = useForm<RfqFormValues>({
    resolver: zodResolver(rfqFormSchema),
    defaultValues: {
      // ... your default values
      referenceImages: [],
      otherAttachments: [],
    },
  });

  const description = watch("description", "");

  // Helper function to upload multiple files in parallel
  const uploadFiles = async (
    files: File[],
    type: RfqFileType,
  ): Promise<UploadedFile[]> => {
    if (!files || files.length === 0) return [];

    const uploadPromises = files.map((file) => uploadImageClient(file, type));
    const results = await Promise.all(uploadPromises);

    // Check for any upload errors
    const failedUpload = results.find((result) => result.error);
    if (failedUpload) {
      throw new Error(`Failed to upload ${type}: ${failedUpload.error}`);
    }

    // Map to the final structure
    return results.map((result) => ({
      url: result.url,
      publicId: result.public_id,
    }));
  };

  const onSubmit = async (data: RfqFormValues) => {
    setIsSubmitting(true);

    try {
      // 1. Upload all files concurrently
      const [referenceImageResults, techSheetResult, otherAttachmentResults] =
        await Promise.all([
          uploadFiles(data.referenceImages || [], "referenceImage"),
          data.techSheet
            ? uploadFiles([data.techSheet], "techSheet")
            : Promise.resolve([]),
          uploadFiles(data.otherAttachments || [], "otherAttachment"),
        ]);

      // 2. Construct the final payload for the backend
      const payload: CreateRfqPayload = {
        createdBy: session?.user?.id,
        rfq_title: data.rfq_title,
        product_category: data.product_category,
        gender: data.gender,
        material_febric: data.material_febric,
        febric_gsm: data.febric_gsm,
        required_colors: data.required_colors,
        product_sizes: data.product_sizes,
        total_quantity: data.total_quantity,
        sample_requirement: data.sample_requirement,
        printing_embroidery: data.printing_embroidery,
        packaging_requirement: data.packaging_requirement,
        budget_per_piece: data.budget_per_piece,
        total_budget: data.total_budget,
        required_delivery_date: data.required_delivery_date,
        deliveryCountry: data.deliveryCountry,
        delivery_place: data.delivery_place,
        Incoterms: data.Incoterms,
        payment_terms: data.payment_terms,
        description: data.description,
        certifications: data.certifications, // Assuming this field exists in your schema
        // Replace file objects with uploaded file data
        referenceImages: referenceImageResults,
        techSheet: techSheetResult.length > 0 ? techSheetResult[0] : null,
        otherAttachments: otherAttachmentResults,
      };

      const res = await mutateAsync(payload);

      console.log("Rfq submited reuslt", res);

      if (res?.success) {
        toast.success(res.message);
        setIsSubmitting(false);
          reset();
      } else {
        toast.error("faild to Create Rfq");
      }
    } catch (error) {
      handleError(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
      {/* ── Header ── */}
      <RfqFormHeader />

      {/* ── Form ── */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="divide-y divide-gray-100"
      >
        {/* SECTION 1: Product Details */}

        <section className="p-8">
          <RfqFormSectionHeader
            icon={Package}
            title="Product Details"
            subtitle="Basic specifications of your product"
          />

          <div className="mb-4">
            <CustomInput
              label="RFQ Title"
              placeholder="e.g. Men's Polo Shirts — Summer Collection 2025"
              leftIcon={<User size={15} />}
              error={errors.rfq_title?.message}
              {...register("rfq_title")}
            />
          </div>

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

        {/* SECTION 2: Business & Logistics */}
        <section className="p-8">
          <RfqFormSectionHeader
            icon={Truck}
            title="Business & Logistics"
            subtitle="Budget, delivery, and trade terms"
          />

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

        {/* SECTION 3: Description & Attachments */}

        <section className="p-8">
          <RfqFormSectionHeader
            icon={Paperclip}
            title="Description & Attachments"
            subtitle="Describe your product and upload references"
          />

          <div className="mb-5">
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-500">
              Product Description
            </label>
            <CustomTextArea
              placeholder="Describe your product in detail — fabric feel, fit, design intent, special requirements…"
              error={errors.description?.message}
              {...register("description")}
            />
            <div className="mt-1.5 flex items-center justify-end">
              {/* <p className="text-xs text-gray-400">Minimum 20 characters</p> */}
              <p
                className={`text-xs font-medium ${
                  (description?.length ?? 0) >= 20
                    ? "text-teal-600"
                    : "text-gray-400"
                }`}
              >
                {description?.length ?? 0} / 20+
              </p>
            </div>
          </div>

          <div className="mb-4">
            <Controller
              name="referenceImages"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <DropZone
                  label="Reference Images"
                  hint="JPG, PNG — max 5 files, 5 MB each"
                  accept="image/jpeg,image/png,image/webp"
                  multiple
                  icon={ImageIcon}
                  onChange={field.onChange}
                  error={error?.message}
                />
              )}
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Controller
              name="techSheet"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <DropZone
                  label="Technical Spec Sheet"
                  hint="PDF only — max 10 MB"
                  accept="application/pdf"
                  icon={File}
                  onChange={(files) => field.onChange(files[0])}
                  error={error?.message}
                />
              )}
            />
            <Controller
              name="otherAttachments"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <DropZone
                  label="Other Attachments"
                  hint="CAD, size charts, lab dips — PDF, XLS, DXF"
                  accept=".pdf,.xls,.xlsx,.dxf"
                  icon={Plus}
                  multiple
                  onChange={field.onChange}
                  error={error?.message}
                />
              )}
            />
          </div>
        </section>

        {/* ── Submit ── */}
        <div className="flex justify-end bg-gray-50/70 px-8 py-6">
          <CustomButton
            text={`${isSubmitting ? "Submitting..." : "Create RFQ"}`}
            type="submit"
            variant="primary"
            isLoading={isSubmitting}
            icon={<Plus size={15} strokeWidth={2.75} />}
            className="w-38 px-4 py-3 font-semibold "
          />
        </div>
      </form>
    </div>
  );
}

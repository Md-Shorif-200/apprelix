"use client";

import { useEffect, useMemo, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Package,
  Truck,
  Paperclip,
  Image as ImageIcon,
  File,
  Plus,
  FileText,
  Gauge,
  Hash,
  DollarSign,
  Wallet,
  MapPin,
  Pencil,
  X,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";

import CustomInput from "@/components/inputs/CustomInput";
import CustomSelect from "@/components/inputs/CustomSelect";
import CustomSearchSelectInput from "@/components/inputs/CustomSearchSelectInput";
import CustomMultiSelectInput from "@/components/inputs/CustomMultiSelectInput";
import CustomCalanderInput from "@/components/inputs/CustomCalanderInput";
import CustomTextArea from "@/components/inputs/CustomTextArea";
import CustomColorSelectInput from "@/components/inputs/CustomColorSelectInput";
import { CustomButton } from "@/components/common/CustomButton";
import DropZone from "./DropZone";
import { RfqReferenceImagesPreview } from "./RfqReferenceImagesPreview";
import { RfqFormSectionHeader } from "./RfqFormSectionHeader";
import {
  rfqEditFormSchema,
  RfqColorValue,
  RfqEditFormValues,
} from "../schema/rfq-form.schema";
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
import { EditRfqApiPayload, UploadedFile } from "../types/rfq-form.types";
import { RfqItem } from "../types/rfq-list.type";
import { toast } from "sonner";
import { handleError } from "@/lib/error/errorHandler";
import { useEditRfq } from "../hooks/rfq.hooks";
import {
  emptyRemovedRfqFiles,
  RemovedRfqFiles,
  resolveRfqFileUpdates,
} from "../utils/rfq-file-cloudinary.utils";

// ─── Props ────────────────────────────────────────────────────────────────────

interface EditRfqFormSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  rfq: RfqItem | null;
}

type ExistingFiles = {
  referenceImages: UploadedFile[];
  techSheet: UploadedFile | null;
  otherAttachments: UploadedFile[];
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="mb-1.5 block text-sm font-medium text-gray-700">
      {children}
    </label>
  );
}

function getExistingFiles(rfq: RfqItem): ExistingFiles {
  return {
    referenceImages: (rfq.referenceImages as UploadedFile[]) || [],
    techSheet: (rfq.techSheet as UploadedFile | null) || null,
    otherAttachments: (rfq.otherAttachments as UploadedFile[]) || [],
  };
}

function normalizeColorValues(value: unknown): RfqColorValue[] {
  if (!Array.isArray(value)) return [];

  return value
    .map((item) => {
      if (typeof item === "string") {
        const trimmed = item.trim();
        const matchedColor = popularColorOptions.find(
          (option) =>
            option.value.toLowerCase() === trimmed.toLowerCase() ||
            option.label.toLowerCase() === trimmed.toLowerCase(),
        );

        return {
          name: matchedColor?.label ?? trimmed,
          code: matchedColor?.value ?? trimmed,
        };
      }

      if (
        typeof item === "object" &&
        item !== null &&
        "name" in item &&
        "code" in item
      ) {
        return {
          name: String((item as { name?: unknown }).name ?? ""),
          code: String((item as { code?: unknown }).code ?? ""),
        };
      }

      return null;
    })
    .filter(
      (item): item is RfqColorValue => Boolean(item?.name) && Boolean(item?.code),
    );
}

function mapRfqToFormValues(rfq: RfqItem): RfqEditFormValues {
  return {
    rfq_title: rfq.rfq_title,
    product_category: rfq.product_category,
    gender: (rfq.gender as string) || "",
    material_febric: (rfq.material_febric as string) || "",
    febric_gsm: rfq.febric_gsm as number | undefined,
    total_quantity: rfq.total_quantity,
    required_colors: normalizeColorValues(rfq.required_colors),
    product_sizes: (rfq.product_sizes as string[]) || [],
    sample_requirement: Boolean(rfq.sample_requirement),
    printing_embroidery: (rfq.printing_embroidery as string) || "",
    packaging_requirement: (rfq.packaging_requirement as string) || "",
    budget_per_piece: rfq.budget_per_piece as number | undefined,
    required_delivery_date: rfq.required_delivery_date || "",
    deliveryCountry: (rfq.deliveryCountry as string) || "",
    delivery_place: (rfq.delivery_place as string) || "",
    Incoterms: (rfq.Incoterms as string) || "",
    payment_terms: (rfq.payment_terms as string) || "",
    certifications: (rfq.certifications as string[]) || [],
    description: (rfq.description as string) || "",
    referenceImages: [],
    techSheet: undefined,
    otherAttachments: [],
  };
}

// ─── Existing Files Preview ───────────────────────────────────────────────────

function ExistingFileItem({
  file,
  label,
  onRemove,
}: {
  file: UploadedFile;
  label: string;
  onRemove: () => void;
}) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl border border-gray-100 bg-white px-3 py-2">
      <File size={13} className="shrink-0 text-[#14b8a6]" />
      <a
        href={file.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 truncate text-xs text-teal-600 hover:underline"
      >
        {label}
      </a>
      <button
        type="button"
        onClick={onRemove}
        className="text-gray-300 hover:text-red-400"
      >
        <X size={13} />
      </button>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

const EditRfqFormSheet = ({
  open,
  onOpenChange,
  rfq,
}: EditRfqFormSheetProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { mutateAsync } = useEditRfq();
  const [existingFiles, setExistingFiles] = useState<ExistingFiles>({
    referenceImages: [],
    techSheet: null,
    otherAttachments: [],
  });
  const [removedFiles, setRemovedFiles] = useState<RemovedRfqFiles>(
    emptyRemovedRfqFiles(),
  );

  const {
    control,
    handleSubmit,
    watch,
    reset,
    register,
    formState: { errors },
  } = useForm<RfqEditFormValues>({
    resolver: zodResolver(rfqEditFormSchema),
    defaultValues: {
      referenceImages: [],
      otherAttachments: [],
    },
  });

  const description = watch("description", "");
  const totalQuantity = watch("total_quantity");
  const budgetPerPiece = watch("budget_per_piece");

  const totalBudget = useMemo(() => {
    if (
      typeof totalQuantity === "number" &&
      typeof budgetPerPiece === "number" &&
      totalQuantity > 0 &&
      budgetPerPiece > 0
    ) {
      return totalQuantity * budgetPerPiece;
    }
    return null;
  }, [totalQuantity, budgetPerPiece]);

  // Fill form when RFQ changes
  useEffect(() => {
    if (open && rfq) {
      reset(mapRfqToFormValues(rfq));
      setExistingFiles(getExistingFiles(rfq));
      setRemovedFiles(emptyRemovedRfqFiles());
    }
  }, [open, rfq, reset]);

  const onSubmit = async (data: RfqEditFormValues) => {
    if (!rfq) return;

    setIsSubmitting(true);

    try {
      const updatedFiles = await resolveRfqFileUpdates({
        newReferenceImages: data.referenceImages || [],
        newTechSheet: data.techSheet,
        newOtherAttachments: data.otherAttachments || [],
        existingFiles,
        removedFiles,
      });

      const payload: EditRfqApiPayload = {
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
        total_budget: totalBudget,
        required_delivery_date: data.required_delivery_date,
        deliveryCountry: data.deliveryCountry,
        delivery_place: data.delivery_place,
        Incoterms: data.Incoterms,
        payment_terms: data.payment_terms,
        certifications: data.certifications,
        description: data.description,
        referenceImages: updatedFiles.referenceImages,
        techSheet: updatedFiles.techSheet,
        otherAttachments: updatedFiles.otherAttachments,
      };

      const res = await mutateAsync({ id: rfq._id, payload });

      if (res?.success) {
        toast.success(res?.message);
        onOpenChange(false);
      } else {
        toast.error("Failed to update RFQ");
      }
    } catch (error) {
      handleError(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!rfq) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-[90%] min-[500px]:w-[75%] lg:w-[65%] xl:w-[55%] p-0 flex flex-col bg-white border-l border-slate-200"
      >
        {/* Header */}
        <SheetHeader className="px-6 pt-6 pb-4 border-b border-slate-100 shrink-0 bg-gradient-to-r from-teal-50 via-white to-white">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3 min-w-0">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#14b8a6] shadow-sm shadow-teal-500/30 shrink-0">
                <Pencil size={18} className="text-white" />
              </div>
              <div className="min-w-0">
                <SheetTitle className="text-[15px] font-semibold text-slate-800 leading-tight">
                  Edit RFQ
                </SheetTitle>
                <SheetDescription className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                  {rfq.rfq_title}
                </SheetDescription>
              </div>
            </div>

            <SheetClose asChild>
              <button
                type="button"
                className="flex items-center justify-center w-8 h-8 rounded-lg border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer transition-colors duration-200 shrink-0"
              >
                <X size={15} />
                <span className="sr-only">Close</span>
              </button>
            </SheetClose>
          </div>
        </SheetHeader>

        {/* Form Body */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex-1 overflow-y-auto divide-y divide-gray-100"
        >
          {/* SECTION 1: Product Details */}
          <section className="p-6">
            <RfqFormSectionHeader
              icon={Package}
              title="Product Details"
              subtitle="Basic specifications of your product"
            />

            <div className="mb-4">
              <CustomInput
                label="RFQ Title"
                placeholder="e.g. Men's Polo Shirts — Summer Collection 2025"
                leftIcon={<FileText size={15} />}
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
                  leftIcon={<Gauge size={15} />}
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
                      value={(field.value ?? []) as Array<{ name: string; code: string }>}
                      onChange={field.onChange}
                      emitObjects
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

            <div className="grid gap-4 md:grid-cols-2">
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
              </div>

              <div className="md:col-span-2">
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
              </div>
            </div>
          </section>

          {/* SECTION 2: Business & Logistics */}
          <section className="p-6">
            <RfqFormSectionHeader
              icon={Truck}
              title="Business & Logistics"
              subtitle="Budget, delivery, and trade terms"
            />

            <div className="mb-4 grid gap-4 md:grid-cols-2">
              <div className="md:col-span-2">
                <CustomInput
                  label="Total Quantity (Pcs)"
                  type="number"
                  placeholder="e.g. 5000"
                  leftIcon={<Hash size={15} />}
                  error={errors.total_quantity?.message}
                  {...register("total_quantity", { valueAsNumber: true })}
                />
              </div>

              <CustomInput
                label="Budget per Piece (USD)"
                type="number"
                placeholder="e.g. 3.50"
                leftIcon={<DollarSign size={15} />}
                error={errors.budget_per_piece?.message}
                {...register("budget_per_piece", { valueAsNumber: true })}
              />
              <CustomInput
                label="Total Budget (USD)"
                value={totalBudget ?? ""}
                placeholder="Auto-calculated"
                leftIcon={<Wallet size={15} />}
                readOnly
                className="bg-gray-50 cursor-not-allowed"
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
                        startMonth={new Date()}
                        endMonth={new Date(new Date().getFullYear() + 10, 11)}
                        disablePastDates={false}
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
                leftIcon={<MapPin size={15} />}
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
          <section className="p-6">
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
              <RfqReferenceImagesPreview
                images={existingFiles.referenceImages}
                title="Current Reference Images"
                onRemove={(index) => {
                  const removedImage = existingFiles.referenceImages[index];
                  if (!removedImage) return;

                  setRemovedFiles((prev) => ({
                    ...prev,
                    referenceImages: [...prev.referenceImages, removedImage],
                  }));
                  setExistingFiles((prev) => ({
                    ...prev,
                    referenceImages: prev.referenceImages.filter(
                      (_, i) => i !== index,
                    ),
                  }));
                }}
              />
              <Controller
                name="referenceImages"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <>
                    <RfqReferenceImagesPreview
                      images={field.value || []}
                      title="New Reference Images"
                      onRemove={(index) => {
                        const currentImages =
                          (field.value as File[] | undefined) ?? [];
                        const updated = currentImages.filter((_, i) => i !== index);
                        field.onChange(updated.length > 0 ? updated : undefined);
                      }}
                    />
                    <DropZone
                      label="Add More Reference Images"
                      hint="JPG, PNG — max 5 files, 5 MB each"
                      accept="image/jpeg,image/png,image/webp"
                      multiple
                      icon={ImageIcon}
                      onChange={field.onChange}
                      value={field.value}
                      hideFileList
                      error={error?.message}
                    />
                  </>
                )}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                {existingFiles.techSheet && (
                  <div className="mb-3 space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Current Tech Sheet
                    </p>
                    <ExistingFileItem
                      file={existingFiles.techSheet}
                      label="Tech Spec Sheet"
                      onRemove={() => {
                        setRemovedFiles((prev) => ({
                          ...prev,
                          techSheet: existingFiles.techSheet,
                        }));
                        setExistingFiles((prev) => ({
                          ...prev,
                          techSheet: null,
                        }));
                      }}
                    />
                  </div>
                )}
                <Controller
                  name="techSheet"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <DropZone
                      label="Replace Technical Spec Sheet"
                      hint="PDF only — max 10 MB"
                      accept="application/pdf"
                      icon={File}
                      onChange={field.onChange}
                      value={field.value}
                      error={error?.message}
                    />
                  )}
                />
              </div>

              <div>
                {existingFiles.otherAttachments.length > 0 && (
                  <div className="mb-3 space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Current Attachments
                    </p>
                    {existingFiles.otherAttachments.map((file, index) => (
                      <ExistingFileItem
                        key={file.publicId || index}
                        file={file}
                        label={`Attachment ${index + 1}`}
                        onRemove={() => {
                          setRemovedFiles((prev) => ({
                            ...prev,
                            otherAttachments: [...prev.otherAttachments, file],
                          }));
                          setExistingFiles((prev) => ({
                            ...prev,
                            otherAttachments: prev.otherAttachments.filter(
                              (_, i) => i !== index,
                            ),
                          }));
                        }}
                      />
                    ))}
                  </div>
                )}
                <Controller
                  name="otherAttachments"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <DropZone
                      label="Add More Attachments"
                      hint="CAD, size charts, lab dips — PDF, XLS, DXF"
                      accept=".pdf,.xls,.xlsx,.dxf"
                      icon={Plus}
                      multiple
                      onChange={field.onChange}
                      value={field.value}
                      error={error?.message}
                    />
                  )}
                />
              </div>
            </div>
          </section>

          {/* Submit */}
          <div className="flex justify-end bg-gray-50/70 px-6 py-5 shrink-0">
            <CustomButton
              text={isSubmitting ? "Submitting..." : "Update RFQ"}
              isLoading={isSubmitting}
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              icon={<Pencil size={15} strokeWidth={2.75} />}
              className="w-38 px-4 py-3 font-semibold"
            />
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default EditRfqFormSheet;

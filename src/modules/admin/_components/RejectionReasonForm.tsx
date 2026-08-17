// src/modules/users/_components/RejectionReasonForm.tsx
"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { AlertTriangle, Loader2, X } from "lucide-react";
import CustomSelect from "@/components/inputs/CustomSelect";
import CustomInput from "@/components/inputs/CustomInput";
import CustomTextArea from "@/components/inputs/CustomTextArea";

import type { UserType } from "@/modules/users/types/users.types";
import { useRejectUser } from "../hooks/users-management.hooks";
import { handleError } from "@/lib/error/errorHandler";
import { RejectionPayload } from "../types/user-management.type";
import { rejectionReasons } from "../utils/user-management.utils";

const rejectionSchema = z
  .object({
    reasonCategory: z.string().min(1, "Select the reason for rejection!"),
    customReason: z.string().optional(),
    reasonDetails: z.string().min(1, "Description is required"),
  })
  .refine(
    (data) => {
      if (data.reasonCategory === "Other") {
        return data.customReason && data.customReason.trim().length > 0;
      }
      return true;
    },
    {
      message: "Please specify the reason when 'Other' is selected.",
      path: ["customReason"],
    },
  );

type RejectionFormValues = z.infer<typeof rejectionSchema>;

interface Props {
  user: UserType;
  closeModal: () => void;
}

// ---- The Main Component ----

const RejectionReasonForm = ({ user, closeModal }: Props) => {
  const { data: session } = useSession();
  const { mutateAsync: rejectUser, isPending } = useRejectUser();

  const isAdmin = session?.user?.role === "admin";
  const adminId = session?.user?.id;

  const {
    control,
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = useForm<RejectionFormValues>({
    resolver: zodResolver(rejectionSchema),
    defaultValues: {
      reasonCategory: "",
      customReason: "",
      reasonDetails: "",
    },
  });

  const watchedReasonCategory = watch("reasonCategory");

  const onSubmit = async (data: RejectionFormValues) => {
    if (!isAdmin || !user || !adminId) {
      toast.error("You are not authorized to perform this action.");
      return;
    }

    const finalReason =
      data.reasonCategory === "Other"
        ? data.customReason!
        : data.reasonCategory;

    const payload: RejectionPayload = {
      reasonCategory: finalReason,
      reasonDetails: data.reasonDetails,
      rejectedAt: new Date(),
      rejectedBy: adminId,
    };

    try {
      const result = await rejectUser({ userId: user._id, payload });


       console.log(result)

      toast.success(result?.message || "User rejected successfully.");
      closeModal();
    } catch (err) {
      handleError(err);
    }
  };

  // ...rest of the component (form JSX) unchanged, use `isPending` for button disabled/loading state
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
      {/* Form Fields */}
      <div className="flex flex-col gap-4">
        <Controller
          name="reasonCategory"
          control={control}
          render={({ field }) => (
            <div>
              <Label
                htmlFor="reasonCategory"
                className="mb-1.5 block text-xs font-medium text-gray-500"
              >
                Rejection Reason
              </Label>
              <CustomSelect
                placeholder="Select a reason..."
                options={rejectionReasons}
                value={field.value}
                onChange={field.onChange}
              />
              {errors.reasonCategory && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.reasonCategory.message}
                </p>
              )}
            </div>
          )}
        />

        {watchedReasonCategory === "Other" && (
          <CustomInput
            label="Please Specify Other Reason"
            {...register("customReason")}
            error={errors.customReason?.message}
            placeholder="e.g., Violation of terms of service"
          />
        )}

        <div>
          <Label
            htmlFor="reasonDetails"
            className="mb-1.5 block text-xs font-medium text-gray-500"
          >
            Description (Optional)
          </Label>
          <CustomTextArea
            id="reasonDetails"
            {...register("reasonDetails")}
            error={errors.reasonDetails?.message}
            placeholder="Add more details about the rejection..."
            rows={3}
          />
        </div>
      </div>

      {!isAdmin && (
        <div className="rounded-md bg-yellow-50 p-3 text-center text-sm text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300">
          <AlertTriangle className="mr-2 inline-block size-4" />
          Only an administrator can perform this action.
        </div>
      )}

      <div className="flex w-full justify-end gap-3 border-t border-gray-100 pt-4 dark:border-gray-800">
        <Button
          type="button"
          variant="outline"
          disabled={isPending}
          onClick={closeModal}
          className="gap-1.5 border-gray-200 text-gray-600 hover:bg-gray-100 hover:text-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 cursor-pointer"
        >
          {/* <X size={16} /> */}
          Cancel
        </Button>

        <Button
          type="submit"
          disabled={isPending || !isAdmin}
          variant="destructive"
          className="min-w-[150px] cursor-pointer"
        >
          {isPending ? (
            <Loader2 size={16} className="mr-1.5 animate-spin" />
          ) : null}
          {isPending ? "Rejecting..." : "Confirm & Reject"}
        </Button>
      </div>
    </form>
  );
};

export default RejectionReasonForm;

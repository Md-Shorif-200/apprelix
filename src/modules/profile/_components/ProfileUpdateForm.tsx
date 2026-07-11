"use client";

import { Controller, useForm } from "react-hook-form";
import { User, Mail, Camera } from "lucide-react";
import CustomInput from "@/components/inputs/CustomInput";
import { uploadImageClient } from "@/utils/uploadImageClient";
import { useUpdateUserProfileData } from "@/modules/users/hooks/useUpdateUserProfile";
import { handleError } from "@/lib/error/errorHandler";

import { toast } from "sonner";
import { Update_UserProfile_Payload_Type } from "@/modules/users/types/users.types";
import { ProfileFormValues } from "../types/profile.types";
import CustomTelInput from "@/components/inputs/CustomTelInput";
import { useState } from "react";
import { useSession } from "next-auth/react";

interface Props {
  user: ProfileFormValues;
  closeModal: () => void;
}

const ProfileUpdateForm = ({ user, closeModal }: Props) => {
  const { mutateAsync } = useUpdateUserProfileData();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { data: session, update } = useSession();

  const {
    register,
    handleSubmit,
    watch,
    control,
    setError,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    defaultValues: {
      fullName: user.fullName,
      email: user.email,
      phone: user.phone,
    },
  });

  // FILE WATCH
  const newProfileFile = watch("newProfilePhoto");

  const onSubmit = async (data: ProfileFormValues) => {
    try {
      setIsSubmitting(true);
      const oldPublicId = user.profilePhoto?.publicId;
      let profilePhoto = user.profilePhoto;
      const file = data.newProfilePhoto?.[0];

      if (file) {
        const { url, public_id } = await uploadImageClient(
          file,
          "profile",
          oldPublicId,
        );

        profilePhoto = {
          url: url,
          publicId: public_id,
        };
      }

      const updatedProfile = {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        city: data.city,
        profilePhoto,
      };

      const vars: { userId: string; payload: Update_UserProfile_Payload_Type } =
        {
          userId: user.id,
          payload: updatedProfile,
        };

      const result = await mutateAsync(vars);

      if (result?.success) {
        toast.success(result.message);

        await update({
          ...session,
          user: {
            ...session?.user,
            name: updatedProfile.fullName,
            phone: updatedProfile.phone,
            image: updatedProfile.profilePhoto?.url,
          },
        });

        setIsSubmitting(false);
        closeModal();
      } else {
        toast.error("faild to Update profile");
      }
    } catch (err) {
      handleError(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {/* First Name */}
        <CustomInput
          label="Full Name"
          placeholder="John"
          leftIcon={<User size={15} />}
          error={errors.fullName?.message}
          {...register("fullName", { required: "Full name is required" })}
        />

        {/* Email (READ ONLY) */}
        <CustomInput
          label="Email Address"
          type="email"
          placeholder="john@example.com"
          leftIcon={<Mail size={15} />}
          readOnly
          className="cursor-not-allowed opacity-80"
          error={errors.email?.message}
          {...register("email")}
        />

        {/* Phone */}
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

        <div className="sm:col-span-2">
          <CustomInput
            label="Profile Photo (Optional)"
            type="file"
            // accept="image/*"
            leftIcon={<Camera size={15} />}
            fileName={newProfileFile?.[0]?.name}
            error={errors.newProfilePhoto?.message}
            {...register("newProfilePhoto")}
          />
        </div>
      </div>

      <div className="flex justify-end gap-3 w-full">
        <button
          type="button"
          onClick={closeModal}
          className="rounded-xl border border-gray-200 px-4 py-2 text-gray-600 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-4 py-2 rounded-xl text-white ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-ds-primary hover:bg-teal-700"
          }`}
        >
          {isSubmitting ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </form>
  );
};

export default ProfileUpdateForm;

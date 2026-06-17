"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { User, Mail, Phone, Camera } from "lucide-react";
import CustomInput from "@/components/inputs/CustomInput";
import { uploadImageClient } from "@/utils/uploadImageClient";
import { useUpdateUserProfileData } from "@/modules/users/hooks/useUpdateUserProfile";
import { handleError } from "@/lib/error/errorHandler";

import { toast } from "sonner";
import { Update_UserProfile_Payload_Type } from "@/modules/users/types/users.types";
import { ProfileFormValues } from "../types/profile.types";

interface Props {
  user: ProfileFormValues;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setUpdatingData: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProfileUpdateForm = ({
  user,
  setIsModalOpen,
  setUpdatingData,
}: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    defaultValues: {
      fullName: user.fullName,
      email: user.email,
      phone: user.phone,
    },
  });

  const { mutateAsync } = useUpdateUserProfileData();

  // FILE WATCH
  const profileFile = watch("profilePhoto");

  const onSubmit = async (data: ProfileFormValues) => {
    try {
      setUpdatingData(true);

      let profilePhotoUrl = "";
      const file = data.profilePhoto?.[0];

      // Image Upload (Optional)
      if (file) {
        const uploadResult = await uploadImageClient(file, "profile");

        if (!uploadResult) {
          setError("profilePhoto", {
            type: "manual",
            message: uploadResult?.error || "Upload failed",
          });

          return; // stop form submit
        }
        profilePhotoUrl = uploadResult.url;
      }

      const updatedProfile = {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        city: data.city,
        profilePhoto: profilePhotoUrl,
      };

      const vars: { userId: string; payload: Update_UserProfile_Payload_Type } =
        {
          userId: user.id,
          payload: updatedProfile,
        };

      const result = await mutateAsync(vars);

      if (result?.success) {
        toast.success(result.message);
        setIsModalOpen(false);
        setUpdatingData(false);
      } else {
        toast.error("faild to Update profile");
      }
    } catch (err) {
      handleError(err);
    } finally {
      setUpdatingData(false);
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
        <CustomInput
          label="Phone Number"
          type="tel"
          placeholder="+1 234 567 890"
          leftIcon={<Phone size={15} />}
          error={errors.phone?.message}
          {...register("phone")}
        />

        <CustomInput
          label="Profile Photo (Optional)"
          type="file"
          // accept="image/*"
          leftIcon={<Camera size={15} />}
          fileName={profileFile?.[0]?.name}
          error={errors.profilePhoto?.message}
          {...register("profilePhoto")}
        />
      </div>

      {/* Hidden submit trigger for modal footer */}
      <button type="submit" id="profile-submit" className="hidden" />
    </form>
  );
};

export default ProfileUpdateForm;

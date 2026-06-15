"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { User, Mail, Phone, MapPin, Camera } from "lucide-react";
import CustomInput from "@/components/inputs/CustomInput";
import { uploadImageClient } from "@/utils/uploadImageClient";
import { useUpdateUserProfileData } from "@/modules/users/hooks/useUpdateUserProfile";
import { handleError } from "@/lib/error/errorHandler";
import { UpdateUserProfilePayload } from "@/modules/users/types/users.types";
import { toast } from "sonner";

type ProfileFormValues = {
  id : string;
  fullName: string;
  email: string;
  phone?: string;
  country?: string;
  city?: string;
  profilePhoto?: FileList;
};

interface Props {
  user: ProfileFormValues;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;

}

const ProfileUpdateForm = ({ user,setIsModalOpen }: Props) => {
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
      country: user.country,
      city: user.city,
    },
  });

    const { mutateAsync } = useUpdateUserProfileData();


  // FILE WATCH
  const profileFile = watch("profilePhoto");

  const onSubmit = async (data: ProfileFormValues) => {
    try {
      let profilePhotoUrl = "";

      const file = data.profilePhoto?.[0];

      // Image Upload (Optional)
      if (file) {
        const uploadResult = await uploadImageClient(file, "profile");
         
        console.log( "52",uploadResult)
        
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
        country: data.country,
        city: data.city,
        profilePhoto: profilePhotoUrl,
      };

      const vars: { userId: string; payload: UpdateUserProfilePayload } = {
        userId: user.id,
        payload: updatedProfile,
      };

      const result = await mutateAsync(vars);

         if(result?.success) {
          toast.success(result.message)
          setIsModalOpen(false)
         }else {
          toast.error('faild to Update profile')
         }




     

      
    } catch (err) {
      handleError(err);
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

        {/* Country */}
        <CustomInput
          label="Country"
          placeholder="Bangladesh"
          leftIcon={<MapPin size={15} />}
          error={errors.country?.message}
          {...register("country")}
        />

        {/* city */}
        <CustomInput
          label="City"
          placeholder="Bangladesh"
          leftIcon={<MapPin size={15} />}
          error={errors.city?.message}
          {...register("city")}
        />
      </div>

      {/* Hidden submit trigger for modal footer */}
      <button type="submit" id="profile-submit" className="hidden" />
    </form>
  );
};

export default ProfileUpdateForm;

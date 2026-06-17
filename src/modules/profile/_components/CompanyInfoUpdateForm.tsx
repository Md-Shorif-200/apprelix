"use client";

import { useForm } from "react-hook-form";
import { Building2, Camera, Globe, MapPin } from "lucide-react";
import CustomInput from "@/components/inputs/CustomInput";
import CustomTextArea from "@/components/inputs/CustomTextArea";
import { uploadImageClient } from "@/utils/uploadImageClient";
import { useUpdateUserProfileData } from "@/modules/users/hooks/useUpdateUserProfile";
import { toast } from "sonner";
import { handleError } from "@/lib/error/errorHandler";
import { Update_UserProfile_Payload_Type } from "@/modules/users/types/users.types";
import { Company_Information_FormValues_Type } from "../types/profile.types";

interface Props {
  user: Company_Information_FormValues_Type;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CompanyInfoUpdateForm = ({ user, setIsModalOpen }: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<Company_Information_FormValues_Type>({
    defaultValues: {
      companyName: user.companyName,
      companyWebsite: user.companyWebsite,
      country: user.country,
      city: user.city,
      companyAddress: user.companyAddress,
    },
  });

  const { mutateAsync } = useUpdateUserProfileData();

  // FILE WATCH
  const companyLogoFile = watch("companyLogo");

  const onSubmit = async (data: Company_Information_FormValues_Type) => {
    try {
      let companyLogoUrl = "";

      const file = data.companyLogo?.[0];

      // Image Upload (Optional)
      if (file) {
        const uploadResult = await uploadImageClient(file, "logo");

        console.log("52", uploadResult);

        if (!uploadResult) {
          setError("companyLogo", {
            type: "manual",
            message: uploadResult?.error || "Upload failed",
          });

          return; // stop form submit
        }
        companyLogoUrl = uploadResult.url;
      }

      const updatedProfile = {
        companyName: data.companyName,
        companyWebsite: data.companyWebsite,
        country: data.country,
        city: data.city,
        companyAddress: data.companyAddress,
        companyLogo: companyLogoUrl,
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
      } else {
        toast.error("faild to Update Company Information");
      }
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {/* company Name */}
        <CustomInput
          label="Company Name"
          placeholder="Pvh"
          leftIcon={<Building2 size={15} />}
          error={errors.companyName?.message}
          {...register("companyName", { required: "First name is required" })}
        />

        {/* company website  */}
        <CustomInput
          label="Company Website"
          placeholder="Doe"
          leftIcon={<Globe size={15} />}
          error={errors.companyWebsite?.message}
          {...register("companyWebsite")}
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

        <div className="sm:col-span-2">
          <CustomInput
            label="Company Logo (Optional)"
            type="file"
            // accept="image/*"
            leftIcon={<Camera size={15} />}
            fileName={companyLogoFile?.[0]?.name}
            error={errors.companyLogo?.message}
            {...register("companyLogo")}
          />
        </div>

        {/* address  */}
        <div className="sm:col-span-2">
          <CustomTextArea
            label="Company Address"
            placeholder="Enter your full company address..."
            error={errors.companyAddress?.message}
            {...register("companyAddress")}
          />
        </div>
      </div>

      {/* Hidden submit trigger for modal footer */}
      <button type="submit" id="profile-submit" className="hidden" />
    </form>
  );
};

export default CompanyInfoUpdateForm;

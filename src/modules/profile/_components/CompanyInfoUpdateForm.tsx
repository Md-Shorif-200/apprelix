"use client";

import { Controller, useForm } from "react-hook-form";
import { Building2, Camera, Globe, MapPin } from "lucide-react";
import CustomInput from "@/components/inputs/CustomInput";
import CustomTextArea from "@/components/inputs/CustomTextArea";
import { uploadImageClient } from "@/utils/uploadImageClient";
import { useUpdateUserProfileData } from "@/modules/users/hooks/useUpdateUserProfile";
import { toast } from "sonner";
import { handleError } from "@/lib/error/errorHandler";
import { Update_UserProfile_Payload_Type } from "@/modules/users/types/users.types";
import { Company_Information_FormValues_Type } from "../types/profile.types";
import LocationSelector from "@/modules/auth/_components/LocationSelector";
import { Country, State } from "country-state-city";
import { useProfileModalActions } from "@/stores/profile-modal/profile-modal.hooks";

interface Props {
  companyInfo: {
    id: string;
    companyName: string;
    companyWebsite: string;
    location: {
      countryName: string;
      countryCode: string;
      stateName: string;
      stateCode: string;
      city: string;
    };
    companyLogo?: FileList;
    streetAddress: string;
  };
}

const CompanyInfoUpdateForm = ({ companyInfo }: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    setError,
    formState: { errors },
  } = useForm<Company_Information_FormValues_Type>({
    defaultValues: {
      companyName: companyInfo.companyName,
      companyWebsite: companyInfo.companyWebsite,
      streetAddress: companyInfo.streetAddress,
      location: {
        country: companyInfo.location.countryCode,
        state: companyInfo.location.stateCode,
        city: companyInfo.location.city,
      },
    },
  });

  const { mutateAsync } = useUpdateUserProfileData();
  const { closeModal, setUpdating } = useProfileModalActions();

  // FILE WATCH
  const companyLogoFile = watch("companyLogo");

  const onSubmit = async (data: Company_Information_FormValues_Type) => {
    try {
      setUpdating(true);
      let companyLogoUrl = "";
      const file = data.companyLogo?.[0];

      // Image Upload (Optional)
      if (file) {
        const uploadResult = await uploadImageClient(file, "logo");

        console.log("52", uploadResult);

        if (!uploadResult || !uploadResult.url) {
          setError("companyLogo", {
            type: "manual",
            message: uploadResult?.error || "Upload failed",
          });

          return;
        }
        companyLogoUrl = uploadResult.url;
      }

      // get country and state name

      const countryName =
        Country.getCountryByCode(data.location.country)?.name ?? "";
      const stateName =
        State.getStateByCodeAndCountry(
          data.location.state,
          data.location.country,
        )?.name ?? "";

      //  creat payload
      const updatedProfile = {
        companyInfo: {
          companyName: data.companyName,
          companyWebsite: data.companyWebsite,
          streetAddress: data.streetAddress,
          ...(companyLogoUrl && { companyLogo: companyLogoUrl }),
          location: {
            countryCode: data.location.country,
            countryName: countryName,
            stateCode: data.location.state,
            stateName: stateName,
            city: data.location.city,
          },
        },
      };

      const vars: { userId: string; payload: Update_UserProfile_Payload_Type } =
        {
          userId: companyInfo.id,
          payload: updatedProfile,
        };

      const result = await mutateAsync(vars);

      console.log(result);

      if (result?.success) {
        toast.success(result.message);
        closeModal();
      } else {
        toast.error("faild to Update Company Information");
      }
    } catch (err) {
      handleError(err);
    } finally {
      setUpdating(false);
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

        <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2  gap-3">
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
                cityFullWidth={true}
              />
            )}
          />
        </div>

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
            label="Street  Address"
            placeholder="House #12, Road #5, Bahadderhat"
            error={errors.streetAddress?.message}
            {...register("streetAddress")}
          />
        </div>
      </div>

      {/* Hidden submit trigger for modal footer */}
      <button type="submit" id="profile-submit" className="hidden" />
    </form>
  );
};

export default CompanyInfoUpdateForm;

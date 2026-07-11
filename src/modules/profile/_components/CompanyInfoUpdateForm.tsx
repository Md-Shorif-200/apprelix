"use client";

import { Controller, useForm } from "react-hook-form";
import { Building2, Camera, Globe } from "lucide-react";
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
import { useState } from "react";

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
    companyLogo?: {
      // ← object
      url: string;
      publicId: string;
    };
    streetAddress: string;
  };
  closeModal: () => void;
}

const CompanyInfoUpdateForm = ({ companyInfo, closeModal }: Props) => {
  const { mutateAsync } = useUpdateUserProfileData();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    watch,
    control,
    setError,
    formState: { errors },
  } = useForm<Company_Information_FormValues_Type>({
    defaultValues: {
      companyName: companyInfo?.companyName,
      companyWebsite: companyInfo?.companyWebsite,
      streetAddress: companyInfo?.streetAddress,
      location: {
        country: companyInfo?.location?.countryCode,
        state: companyInfo?.location?.stateCode,
        city: companyInfo?.location?.city,
      },
    },
  });

  const companyNewLogoFile = watch("companyNewLogo");

  const onSubmit = async (data: Company_Information_FormValues_Type) => {
    try {
      setIsSubmitting(true);

      const oldPublicId = companyInfo.companyLogo?.publicId;
      let companyLogo = companyInfo.companyLogo;

      const file = data.companyNewLogo?.[0];

      if (file) {
        const { url, public_id } = await uploadImageClient(
          file,
          "logo",
          oldPublicId,
        );

        companyLogo = {
          url: url,
          publicId: public_id,
        };
      }

      const countryName =
        Country.getCountryByCode(data.location.country)?.name ?? "";
      const stateName =
        State.getStateByCodeAndCountry(
          data.location.state,
          data.location.country,
        )?.name ?? "";

      const updatedProfile: Update_UserProfile_Payload_Type = {
        companyInfo: {
          companyName: data.companyName,
          companyWebsite: data.companyWebsite,
          streetAddress: data.streetAddress,
          ...(companyLogo?.url && { companyLogo }),
          location: {
            countryCode: data.location.country,
            countryName,
            stateCode: data.location.state,
            stateName,
            city: data.location.city,
          },
        },
      };

      const result = await mutateAsync({
        userId: companyInfo.id,
        payload: updatedProfile,
      });

      if (result?.success) {
        toast.success(result.message);
        closeModal();
      } else {
        toast.error("Failed to update company information");
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
        <CustomInput
          label="Company Name"
          placeholder="Pvh"
          leftIcon={<Building2 size={15} />}
          error={errors.companyName?.message}
          {...register("companyName", { required: "Company name is required" })}
        />

        <CustomInput
          label="Company Website"
          placeholder="https://example.com"
          leftIcon={<Globe size={15} />}
          error={errors.companyWebsite?.message}
          {...register("companyWebsite")}
        />

        <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
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

        {/* Company Logo — companyNewLogo field */}
        <div className="sm:col-span-2">
          <CustomInput
            label="Company Logo (Optional)"
            type="file"
            leftIcon={<Camera size={15} />}
            fileName={companyNewLogoFile?.[0]?.name}
            error={errors.companyNewLogo?.message}
            {...register("companyNewLogo")} // ← ঠিক field name
          />
        </div>

        <div className="sm:col-span-2">
          <CustomTextArea
            label="Street Address"
            placeholder="House #12, Road #5, Bahadderhat"
            error={errors.streetAddress?.message}
            {...register("streetAddress")}
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

export default CompanyInfoUpdateForm;

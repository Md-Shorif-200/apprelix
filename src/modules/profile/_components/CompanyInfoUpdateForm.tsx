"use client";

import { useForm } from "react-hook-form";
import { Building2, Globe } from "lucide-react";
import CustomInput from "@/components/inputs/CustomInput";
import CustomTextArea from "@/components/inputs/CustomTextArea";

type FormValuesType = {
  companyName?: string;
  companyWebsite?: string;
  companyAddress?: string;
};

interface Props {
  user: FormValuesType;
}

const CompanyInfoUpdateForm = ({ user }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValuesType>({
    defaultValues: {
      companyName: user.companyName,
      companyWebsite: user.companyWebsite,
      companyAddress: user.companyAddress,
    },
  });

  const onSubmit = (data: FormValuesType) => {
    console.log("Profile Updated Data:", data);
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

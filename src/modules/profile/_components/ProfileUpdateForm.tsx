"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { User, Mail, Phone, MapPin } from "lucide-react";
import CustomInput from "@/components/inputs/CustomInput";

type ProfileFormValues = {
  fullName: string;
  email: string;
  phone?: string;
  country?: string;
  city?:string;
};

interface Props {
  user: ProfileFormValues;
}

const ProfileUpdateForm = ({ user }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    defaultValues: {
      fullName: user.fullName,
      email: user.email,
      phone: user.phone,
      country: user.country,
      city:user.city
    },
  });

  const onSubmit = (data: ProfileFormValues) => {
    console.log("Profile Updated Data:", data);
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
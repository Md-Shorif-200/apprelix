"use client";

import React from "react";
import { useForm } from "react-hook-form";
import {
  User,
  Mail,
  Phone,
  Lock,
  Building2,
  Globe,
  MapPin,
  Camera,
} from "lucide-react";
import Link from "next/link";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  profilePhoto: FileList;
  companyLogo: FileList;
  accountType: string;
  companyName: string;
  companyWebsite: string;
  country: string;
  city: string;
  companyAddress: string;
};

const InputField = ({
  icon: Icon,
  ...props
}: {
  icon: React.ElementType;
} & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div className="relative">
    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
      <Icon size={16} />
    </div>
    <input
      {...props}
      className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-all bg-gray-50 focus:bg-white placeholder-gray-400"
    />
  </div>
);

const SectionTitle = ({ title }: { title: string }) => (
  <div className="flex items-center gap-3 mb-4">
    <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
      {title}
    </h3>
    {/* <div className="flex-1 h-px bg-gray-100" /> */}
  </div>
);

const RegistrationForm = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Submitted Data:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-white to-gray-50 px-4 py-10">
      <div className="w-full">
        <div className=" mb-6 flex   gap-3">
          <div className="flex items-center justify-center w-12 h-12 bg-teal-600 rounded-2xl mb-3 shadow-lg shadow-teal-200">
            <User size={22} className="text-white" />
          </div>
          <div className="flex flex-col ">
            <h1 className="text-2xl font-bold text-ds-primary">
              Create Your Account
            </h1>

            <p className="text-sm text-gray-500">
              Already have an account? 
              <Link
                href="/login"
                className="text-teal-600 font-semibold hover:underline ml-0.5"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow  border border-gray-100 p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
            {/* Personal Info */}
            <div>
              <SectionTitle title="Personal Information" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <InputField
                  icon={User}
                  {...register("fullName")}
                  placeholder="Full Name"
                />
                <InputField
                  icon={Mail}
                  {...register("email")}
                  type="email"
                  placeholder="Email Address"
                />
                <InputField
                  icon={Phone}
                  {...register("phone")}
                  placeholder="Phone Number"
                />

                {/* File Upload */}
                <label className="relative flex items-center gap-2 pl-9 pr-4 py-2.5 text-sm border border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-teal-400 hover:bg-teal-50 transition-all bg-gray-50 text-gray-400">
                  <div className="absolute left-3 text-gray-400">
                    <Camera size={16} />
                  </div>
                  <span>Upload Profile Photo</span>
                  <input
                    {...register("profilePhoto")}
                    type="file"
                    accept="image/*"
                    className="hidden"
                  />
                </label>

                <InputField
                  icon={Lock}
                  {...register("password")}
                  type="password"
                  placeholder="Password"
                />
                <InputField
                  icon={Lock}
                  {...register("confirmPassword")}
                  type="password"
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            {/* Account Type */}
            <div>
              <SectionTitle title="Account Type" />
              <div className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-3">
                {["buyer", "supplier"].map((type) => (
                  <label
                    key={type}
                    className="flex items-center gap-3 p-3.5 border border-gray-200 rounded-lg cursor-pointer  hover:bg-teal-50 transition-all has-[:checked]:border-teal-500 has-[:checked]:bg-teal-50"
                  >
                    <input
                      type="radio"
                      value={type}
                      {...register("accountType")}
                      defaultChecked={type === "buyer"}
                      className="accent-teal-600"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-700 capitalize">
                        {type}
                      </p>
                      <p className="text-xs text-gray-400">
                        {type === "buyer"
                          ? "Purchase products"
                          : "Sell your products"}
                      </p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Company Info */}
            <div>
              <SectionTitle title="Company Information" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <InputField
                  icon={Building2}
                  {...register("companyName")}
                  placeholder="Company Name"
                />
                <InputField
                  icon={Globe}
                  {...register("companyWebsite")}
                  placeholder="Website Link (Optional)"
                />
                <InputField
                  icon={MapPin}
                  {...register("country")}
                  placeholder="Country"
                />
                <InputField
                  icon={MapPin}
                  {...register("city")}
                  placeholder="City"
                />

                <div className="md:col-span-2 relative">
                 {/* File Upload */}
                <label className="relative flex items-center gap-2 pl-9 pr-4 py-2.5 text-sm border border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-teal-400 hover:bg-teal-50 transition-all bg-gray-50 text-gray-400">
                  <div className="absolute left-3 text-gray-400">
                    <Camera size={16} />
                  </div>
                  <span>Upload Company Logo</span>
                  <input
                    {...register("companyLogo")}
                    type="file"
                    accept="image/*"
                    className="hidden"
                  />
                </label>
                </div>
                <div className="md:col-span-2 relative">
                  <div className="absolute left-3 top-3 text-gray-400">
                    <MapPin size={16} />
                  </div>
                  <textarea
                    {...register("companyAddress")}
                    placeholder="Company Address"
                    rows={3}
                    className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-all bg-gray-50 focus:bg-white placeholder-gray-400 resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 active:scale-[0.99] text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-lg shadow-teal-100 text-sm"
            >
              Create Account
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-gray-400 mt-5">
          By registering, you agree to our{" "}
          <a href="#" className="underline hover:text-teal-600">
            Terms
          </a>{" "}
          and{" "}
          <a href="#" className="underline hover:text-teal-600">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;

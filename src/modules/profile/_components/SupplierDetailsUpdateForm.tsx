"use client";

import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Factory } from "lucide-react";
import CustomInput from "@/components/inputs/CustomInput";
import CustomTextArea from "@/components/inputs/CustomTextArea";
import CustomMultiSelectInput from "@/components/inputs/CustomMultiSelectInput";
import CustomSelect from "@/components/inputs/CustomSelect";
import CustomCalanderInput from "@/components/inputs/CustomCalanderInput";
import {
  productionCapacityOptions,
  numberOfEmployeesOptions,
  productCategoriesOptions,
} from "@/modules/auth/utils/register-select-options";

type ProfileFormValues = {
  factoryName?: string;
  productionCapacity?: string;
  yearEstablished?: string;
  numberOfEmployees?: string;
  productCategories?: string[];
  factoryLocation?: string;
};

interface Props {
  roleDetails: ProfileFormValues;
}

const SupplierDetailsUpdateForm = ({ roleDetails }: Props) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    defaultValues: {
      factoryName: roleDetails.factoryName,
      productionCapacity: roleDetails.productionCapacity,
      yearEstablished: roleDetails.yearEstablished,
      numberOfEmployees: roleDetails.numberOfEmployees,
      productCategories: roleDetails.productCategories,
      factoryLocation: roleDetails.factoryLocation,
    },
  });

  const onSubmit = (data: ProfileFormValues) => {
    console.log("Profile Updated Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <CustomInput
                    label="Factory Name"
                    placeholder="ABC Garments Ltd."
                    leftIcon={<Factory size={15} />}
                    error={errors.factoryName?.message}
                    {...register("factoryName")}
                  />

                  {/* Production Capacity - UPDATED to CustomSelect */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Production Capacity
                    </label>
                    <Controller
                      name="productionCapacity"
                      control={control}
                      render={({ field }) => (
                        <CustomSelect
                          placeholder="Select capacity"
                          options={productionCapacityOptions}
                          onChange={field.onChange}
                          value={field.value}
                        />
                      )}
                    />
                    {errors.productionCapacity && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.productionCapacity.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Date Established
                    </label>
                    <Controller
                      control={control}
                      name="yearEstablished"
                      render={({
                        field: { value, onChange },
                        fieldState: { error },
                      }) => {
                        const parsedDate = value ? new Date(value) : undefined;

                        return (
                          <CustomCalanderInput
                            value={parsedDate}
                            onChange={(date) =>
                              onChange(date ? date.toISOString() : undefined)
                            }
                            error={error?.message}
                          />
                        );
                      }}
                    />
                  </div>

                  {/* Number of Employees - UPDATED to CustomSelect */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Number of Employees
                    </label>
                    <Controller
                      name="numberOfEmployees"
                      control={control}
                      render={({ field }) => (
                        <CustomSelect
                          placeholder="Select employee range"
                          options={numberOfEmployeesOptions}
                          onChange={field.onChange}
                          value={field.value}
                        />
                      )}
                    />
                    {errors.numberOfEmployees && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.numberOfEmployees.message}
                      </p>
                    )}
                  </div>

                  {/* Product Categories - UPDATED to CustomSelect */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Product Categories
                    </label>
                    <Controller
                      name="productCategories"
                      control={control}
                      render={({ field }) => (
                        <CustomMultiSelectInput
                          placeholder="Select categories"
                          options={productCategoriesOptions}
                          value={(field.value ?? []) as string[]} // ensure non-undefined array
                          onChange={field.onChange}
                        />
                      )}
                    />
                    {errors.productCategories && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.productCategories.message}
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <CustomTextArea
                      label="Factory Location"
                      placeholder="Enter your full factory address..."
                      error={errors.factoryLocation?.message}
                      {...register("factoryLocation")}
                    />
                  </div>
      </div>

      {/* Hidden submit trigger for modal footer */}
      <button type="submit" id="profile-submit" className="hidden" />
    </form>
  );
};

export default SupplierDetailsUpdateForm;

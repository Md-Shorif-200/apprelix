"use client";

import Image from "next/image";
import { Building2, Globe, MapPin, Pencil } from "lucide-react";
import { getInitials, renderValue } from "./ProfileComponents";
import CustomModal from "@/components/common/CustomModal";
import CompanyInfoUpdateForm from "./CompanyInfoUpdateForm";
import { UserType } from "@/modules/users/types/users.types";
import { useIsModalOpen, useModalActions } from "@/stores/modal/modal.hooks";

interface CompanyInformationProps {
  user: UserType;
}

const CompanyInformation = ({ user }: CompanyInformationProps) => {
  const isOpenModal = useIsModalOpen("profile:company:edit");
  const { openModal, closeModal } = useModalActions();

  return (
    <div className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      {/* Edit Button */}
      <button
        onClick={() => openModal("profile:company:edit")}
        className="absolute top-4 right-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-gray-100 bg-gray-50 text-gray-400 transition hover:border-teal-200 hover:bg-teal-50 hover:text-teal-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-500 dark:hover:border-teal-500/30 dark:hover:bg-teal-500/10 dark:hover:text-teal-400"
      >
        <Pencil size={13} />
      </button>

      {/* Section Title */}
      <div className="mb-5 flex items-center gap-2 border-b border-gray-100 pb-4 dark:border-gray-800">
        <Building2 size={18} className="text-teal-600 dark:text-teal-400" />
        <h2 className="text-base font-bold text-gray-800 dark:text-gray-100">
          Company Information
        </h2>
      </div>

      {/* Company Logo + Name Side by Side */}
      <div className="mb-5 flex items-center gap-4">
        {/* Logo */}
        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gray-100 bg-gray-50 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          {user.companyInfo?.companyLogo?.url ? (
            <Image
              src={user.companyInfo.companyLogo?.url}
              alt="Company Logo"
              fill
              className="rounded-xl object-cover p-1"
            />
          ) : (
            <span className="text-lg font-bold text-teal-600 dark:text-teal-400">
              {getInitials(user.companyInfo?.companyName ?? "")}
            </span>
          )}
        </div>

        {/* Company Name + Country & City */}
        <div>
          <p className="text-base font-bold text-gray-800 dark:text-gray-100">
            {user.companyInfo?.companyName || "N/A"}
          </p>
          <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
            {user.companyInfo?.location?.city || "N/A"},{" "}
            {user.companyInfo?.location?.countryName || "N/A"}
          </p>
        </div>
      </div>

      {/* Info Grid */}
      <dl className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
        {/* Website */}
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
            Website
          </dt>
          <dd className="mt-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            {user.companyInfo?.companyWebsite ? (
              <a
                href={user.companyInfo?.companyWebsite}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 break-all text-teal-600 hover:underline dark:text-teal-400"
              >
                <Globe size={13} />
                {user.companyInfo?.companyWebsite.replace("https://", "")}
              </a>
            ) : (
              "N/A"
            )}
          </dd>
        </div>

        {/* Country */}
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
            Country
          </dt>
          <dd className="mt-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            {renderValue(user?.companyInfo?.location?.countryName)}
          </dd>
        </div>

        {/* state */}
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
            State
          </dt>
          <dd className="mt-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            {renderValue(user?.companyInfo?.location?.stateName)}
          </dd>
        </div>
        {/* City */}
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
            City
          </dt>
          <dd className="mt-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            {renderValue(user?.companyInfo?.location?.city)}
          </dd>
        </div>

        {/* Street Address — full width */}
        <div className="sm:col-span-2">
          <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
            Street Address
          </dt>
          <dd className="mt-1">
            <div className="flex items-start gap-2 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm text-gray-600 dark:border-gray-700 dark:bg-gray-800/60 dark:text-gray-300">
              <MapPin
                size={14}
                className="mt-0.5 shrink-0 text-teal-600 dark:text-teal-400"
              />
              <span>{user?.companyInfo?.streetAddress || "N/A"}</span>
            </div>
          </dd>
        </div>
      </dl>

      {/* Edit Modal */}
      <CustomModal
        isOpen={isOpenModal}
        onClose={closeModal}
        size="lg"
        title="Edit Company Information"
        subtitle="Update your company information"
      >
        <CompanyInfoUpdateForm
          companyInfo={{
            id: user?._id,
            companyName: user?.companyInfo?.companyName,
            companyWebsite: user?.companyInfo?.companyWebsite,
            location: user?.companyInfo?.location,
            streetAddress: user?.companyInfo?.streetAddress,
            companyLogo: user?.companyInfo?.companyLogo,
          }}
          closeModal={closeModal}
        />
      </CustomModal>
    </div>
  );
};

export default CompanyInformation;

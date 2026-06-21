"use client";

import Image from "next/image";
import { Building2, Globe, MapPin, Pencil } from "lucide-react";
import { getInitials, renderValue } from "./ProfileComponents";
import CustomModal from "@/components/common/CustomModal";
import CompanyInfoUpdateForm from "./CompanyInfoUpdateForm";
import { UserType } from "@/modules/users/types/users.types";
import {
  useProfileModalActions,
  useProfileModalState,
} from "@/stores/profile-modal/profile-modal.hooks";

interface CompanyInformationProps {
  user: UserType;
}

const CompanyInformation = ({ user }: CompanyInformationProps) => {
  const { isModalOpen, updatingData } = useProfileModalState();
  const { openModal, closeModal } = useProfileModalActions();

  return (
    <div className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      {/* Edit Button */}
      <button
        onClick={openModal}
        className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-gray-100 bg-gray-50 text-gray-400 transition hover:border-teal-200 hover:bg-teal-50 hover:text-teal-600 cursor-pointer"
      >
        <Pencil size={13} />
      </button>

      {/* Section Title */}
      <div className="mb-5 flex items-center gap-2 border-b border-gray-100 pb-4">
        <Building2 size={18} className="text-teal-600" />
        <h2 className="text-base font-bold text-gray-800">
          Company Information
        </h2>
      </div>

      {/* Company Logo + Name Side by Side */}
      <div className="mb-5 flex items-center gap-4">
        {/* Logo */}
        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-gray-50 overflow-hidden shadow-sm">
          {user.companyInfo.companyLogo ? (
            <Image
              src={user.companyInfo.companyLogo}
              alt="Company Logo"
              fill
              className="object-contain p-1"
            />
          ) : (
            <span className="text-lg font-bold text-teal-600">
              {getInitials(user.companyInfo.companyName ?? "")}
            </span>
          )}
        </div>

        {/* Company Name + Country & City */}
        <div>
          <p className="text-base font-bold text-gray-800">
            {user.companyInfo?.companyName || "N/A"}
          </p>
          <p className="mt-0.5 text-sm text-gray-500">
            {user.companyInfo?.location?.city || "N/A"},{" "}
            {user.companyInfo?.location?.countryName || "N/A"}
          </p>
        </div>
      </div>

      {/* Info Grid */}
      <dl className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
        {/* Website */}
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Website
          </dt>
          <dd className="mt-1 text-sm font-medium text-gray-700">
            {user.companyInfo.companyWebsite ? (
              <a
                href={user.companyInfo.companyWebsite}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-teal-600 hover:underline break-all"
              >
                <Globe size={13} />
                {user.companyInfo.companyWebsite.replace("https://", "")}
              </a>
            ) : (
              "N/A"
            )}
          </dd>
        </div>

        {/* Country */}
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Country
          </dt>
          <dd className="mt-1 text-sm font-medium text-gray-700">
            {renderValue(user?.companyInfo?.location?.countryName)}
          </dd>
        </div>

        {/* City */}
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            City
          </dt>
          <dd className="mt-1 text-sm font-medium text-gray-700">
            {renderValue(user?.companyInfo?.location?.city)}
          </dd>
        </div>

        {/* Office Address — full width */}
        <div className="sm:col-span-2">
          <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Office Address
          </dt>
          <dd className="mt-1">
            <div className="flex items-start gap-2 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm text-gray-600">
              <MapPin size={14} className="mt-0.5 shrink-0 text-teal-600" />
              <span>{user?.companyInfo?.streetAddress || "N/A"}</span>
            </div>
          </dd>
        </div>
      </dl>

      {/* Edit Modal */}
      <CustomModal
        isOpen={isModalOpen}
        onClose={closeModal}
        size="lg"
        title="Edit Company Information"
        subtitle="Update your company information"
        footer={
          <div className="flex justify-end gap-3 w-full">
            <button
              onClick={closeModal}
              className="px-4 py-2 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
              disabled={updatingData}
              onClick={() => {
                document.getElementById("profile-submit")?.click();
              }}
              className={`px-4 py-2 rounded-xl text-white ${
                updatingData
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-ds-primary hover:bg-teal-700"
              }`}
            >
              {updatingData ? "Saving..." : "Save Changes"}
            </button>
          </div>
        }
      >
        <CompanyInfoUpdateForm
          companyInfo={{
            id: user?._id,
            companyName: user?.companyInfo?.companyName,
            companyWebsite: user?.companyInfo?.companyWebsite,
            location: user?.companyInfo?.location,
            streetAddress: user?.companyInfo?.streetAddress,
          }}
        />
      </CustomModal>
    </div>
  );
};

export default CompanyInformation;

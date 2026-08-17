"use client";

import Image from "next/image";
import { Pencil, Phone, Calendar, RefreshCw } from "lucide-react";
import { getInitials, InfoPill, StatusBadge } from "./ProfileComponents";
import CustomModal from "@/components/common/CustomModal";
import ProfileUpdateForm from "./ProfileUpdateForm";
import {
  getUserDisplayName,
  UserType,
} from "@/modules/users/types/users.types";

import { useIsModalOpen, useModalActions } from "@/stores/modal/modal.hooks";

interface ProfileHeroProps {
  user: UserType;
}

const ProfileHero = ({ user }: ProfileHeroProps) => {
  const isOpenModal = useIsModalOpen("profile:edit");
  const { openModal, closeModal } = useModalActions();

  const displayName = getUserDisplayName(user);
  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
      {/* ── Banner ── */}
      <div className="h-28 w-full bg-gradient-to-r from-teal-600 to-teal-400" />

      {/* ── Edit Button (top-right of banner) ── */}
      <button
        onClick={() => openModal("profile:edit")}
        className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-white/30 cursor-pointer"
      >
        <Pencil size={15} />
      </button>

      {/* ── Avatar + Info Block ── */}
      <div className="px-6 pb-6 sm:px-8">
        {/* Top row: Avatar + Name/Email + Badges */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-end">
          {/* Avatar — overlaps banner */}
          <div className="relative -mt-14 shrink-0">
            <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border-4 border-white bg-teal-50 shadow-md dark:border-gray-900 dark:bg-teal-500/10">
              {user.profilePhoto?.url ? (
                <Image
                  src={user.profilePhoto?.url}
                  alt={displayName}
                  fill
                  className="rounded-2xl object-cover"
                />
              ) : (
                <span className="text-3xl font-bold text-teal-600 dark:text-teal-400">
                  {getInitials(displayName)}
                </span>
              )}
            </div>

            {/* Role badge */}
            <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-teal-600 px-3 py-0.5 text-xs font-semibold text-white shadow capitalize">
              {user.role || "N/A"}
            </span>
          </div>

          {/* Name & Email */}
          <div className="mt-2 text-center sm:pb-1 sm:text-left">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              {displayName}
            </h1>
            <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
              {user.email}
            </p>
          </div>

          {/* Status Badges — pushed right */}
          <div className="sm:ml-auto sm:pb-1 flex flex-wrap items-center gap-2">
            <StatusBadge status={user.status} />
          </div>
        </div>

        {/* ── Info Pills Row ── */}
        <div className="mt-5 flex flex-wrap gap-3">
          {/* Phone */}
          <InfoPill
            icon={
              <Phone size={13} className="text-teal-600 dark:text-teal-400" />
            }
          >
            {user.phone || "N/A"}
          </InfoPill>

          {/* Member Since */}
          <InfoPill
            icon={
              <Calendar
                size={13}
                className="text-teal-600 dark:text-teal-400"
              />
            }
          >
            Joined{" "}
            {user.createdAt
              ? new Date(user.createdAt).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })
              : "N/A"}
          </InfoPill>

          {/* Last Updated */}
          <InfoPill
            icon={
              <RefreshCw
                size={13}
                className="text-teal-600 dark:text-teal-400"
              />
            }
          >
            Updated{" "}
            {user.updatedAt
              ? new Date(user.updatedAt).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })
              : "N/A"}
          </InfoPill>
        </div>
      </div>

      <CustomModal
        isOpen={isOpenModal}
        onClose={closeModal}
        size="lg"
        title="Edit Profile"
        subtitle="Update your profile information"
      >
        <ProfileUpdateForm
          user={{
            id: user._id,
            fullName: displayName,
            email: user.email,
            phone: user.phone,
            city: user?.companyInfo?.location?.city,
          }}
          closeModal={closeModal}
        />
      </CustomModal>
    </div>
  );
};

export default ProfileHero;

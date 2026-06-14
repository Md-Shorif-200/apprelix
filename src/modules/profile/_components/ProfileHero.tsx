"use client"

import Image from "next/image"
import { Pencil, Phone, MapPin, Calendar, RefreshCw } from "lucide-react"
import { getInitials, InfoPill } from "./ProfileComponents"
import { useState } from "react"
import CustomModal from "@/components/common/CustomModal"
import ProfileUpdateForm from "./ProfileUpdateForm"
import { User, getUserDisplayName } from "@/modules/users/types/users.types"

interface ProfileHeroProps {
  user: User
}

const ProfileHero = ({ user }: ProfileHeroProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const displayName = getUserDisplayName(user);
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100">

      {/* ── Banner ── */}
      <div className="h-28 w-full bg-gradient-to-r from-teal-600 to-teal-400" />

      {/* ── Edit Button (top-right of banner) ── */}
      <button 
        onClick={() => setIsModalOpen(true)}
      className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-white/30 cursor-pointer">
        <Pencil size={15} />
      </button>

      {/* ── Avatar + Info Block ── */}
      <div className="px-6 pb-6 sm:px-8">

        {/* Top row: Avatar + Name/Email + Badges */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-end">

          {/* Avatar — overlaps banner */}
          <div className="relative -mt-14 shrink-0">
            <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-white bg-teal-50 shadow-md overflow-hidden">
              {user.profile_img ? (
                <Image
                  src={user.profile_img}
                  alt={displayName}
                  fill
                  className="object-cover rounded-2xl"
                />
              ) : (
                <span className="text-3xl font-bold text-teal-600">
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
          <div className="mt-2 text-center sm:text-left sm:pb-1">
            <h1 className="text-2xl font-bold text-gray-800">
              {displayName}
            </h1>
            <p className="mt-0.5 text-sm text-gray-500">{user.email}</p>
          </div>

          {/* Status Badges — pushed right */}
          <div className="sm:ml-auto sm:pb-1 flex flex-wrap items-center gap-2">

            {/* Profile Setup */}
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold border ${
                user.profileCompleted
                  ? "bg-green-50 text-green-700 border-green-100"
                  : "bg-orange-50 text-orange-600 border-orange-100"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  user.profileCompleted ? "bg-green-500" : "bg-orange-400"
                }`}
              />
              {user.profileCompleted ? "Profile Complete" : "Profile Incomplete"}
            </span>

            {/* Admin Approval */}
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold border ${
                user.adminApproved
                  ? "bg-blue-50 text-blue-700 border-blue-100"
                  : "bg-yellow-50 text-yellow-600 border-yellow-100"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  user.adminApproved ? "bg-blue-500" : "bg-yellow-400"
                }`}
              />
              {user.adminApproved ? "Approved" : "Pending Approval"}
            </span>
          </div>
        </div>

        {/* ── Info Pills Row ── */}
        <div className="mt-5 flex flex-wrap gap-3">

          {/* Phone */}
          <InfoPill icon={<Phone size={13} className="text-teal-600" />}>
            {user.phone || "N/A"}
          </InfoPill>

          {/* Country */}
          <InfoPill icon={<MapPin size={13} className="text-teal-600" />}>
            {user.country || "N/A"}
          </InfoPill>

          {/* Member Since */}
          <InfoPill icon={<Calendar size={13} className="text-teal-600" />}>
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
          <InfoPill icon={<RefreshCw size={13} className="text-teal-600" />}>
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
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  size="lg"
  title="Edit Profile"
  subtitle="Update your profile information"
  footer={
    <div className="flex justify-end gap-3 w-full">
      <button
        onClick={() => setIsModalOpen(false)}
        className="px-4 py-2 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50"
      >
        Cancel
      </button>

      <button
        onClick={() => {
          document.getElementById("profile-submit")?.click();
        }}
        className="px-4 py-2 rounded-xl bg-teal-600 text-white hover:bg-teal-700"
      >
        Save Changes
      </button>
    </div>
  }
>
  <ProfileUpdateForm
    user={{
      fullName: displayName,
      email: user.email,
      phone: user.phone,
      country: user.country,
      city: user.city,
    }}
  />
</CustomModal>

    </div>

    
  )


}

export default ProfileHero


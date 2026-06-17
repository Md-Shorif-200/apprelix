"use client";

import { useSingleUser } from "@/modules/users/hooks/useSingleUser";
import ProfileHero from "../_components/ProfileHero";
import CompanyInformation from "../_components/CompanyInformation";
import RoleBasedSection from "../_components/RoleBasedSection";
import { ProfilePageSkeleton } from "./ProfilePageSkeleton";

const ProfilePage = () => {
  const { data, isPending, isError } = useSingleUser();

  // ── Loading ──
  if (isPending) {
    return <ProfilePageSkeleton />;
  }

  // ── Error ──
  if (isError) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md rounded-2xl border border-red-100 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-50">
            <span className="text-2xl">⚠️</span>
          </div>
          <h3 className="text-lg font-bold text-gray-800">
            Failed to load profile
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Something went wrong while fetching your data.
          </p>
        </div>
      </div>
    );
  }

  const user = data?.data;

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">
          <h3 className="text-lg font-bold text-gray-800">Profile not found</h3>
          <p className="mt-2 text-sm text-gray-500">
            We could not find your profile data.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-6">
        {/* ── Section 1: Profile Hero ── */}
        <ProfileHero user={user} />

        {/* ── Section 2 & 3: Company + Role ── */}
        <div className="space-y-6">
          <CompanyInformation user={user} />
          <RoleBasedSection user={user} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

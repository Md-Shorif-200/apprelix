// ProfileSkeleton.tsx
"use client";

// ─── Single Primitive ────────────────────────────────────────────────────────

const Sk = ({ className = "" }: { className?: string }) => (
  <div className={`animate-pulse bg-gray-200 rounded-lg ${className}`} />
);

// ─── ProfileHero Skeleton ────────────────────────────────────────────────────

const ProfileHeroSkeleton = () => (
  <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100">
    {/* Banner */}
    <div className="h-28 w-full animate-pulse bg-gray-200" />

    <div className="px-6 pb-6 sm:px-8">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-end">
        {/* Avatar */}
        <Sk className="relative -mt-12 h-24 w-24 rounded-2xl shrink-0" />

        {/* Name & Email */}
        <div className="flex flex-col gap-2 mt-2">
          <Sk className="h-6 w-36" />
          <Sk className="h-4 w-48" />
        </div>

        {/* Status */}
        <Sk className="h-6 w-20 rounded-full sm:ml-auto" />
      </div>

      {/* Pills */}
      <div className="mt-5 flex flex-wrap gap-3">
        <Sk className="h-8 w-24 rounded-full" />
        <Sk className="h-8 w-32 rounded-full" />
        <Sk className="h-8 w-28 rounded-full" />
      </div>
    </div>
  </div>
);

// ─── Card Skeleton (reused for Company & RoleBased) ──────────────────────────

const CardSkeleton = ({ rows = 4 }: { rows?: number }) => (
  <div className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
    {/* Title */}
    <div className="mb-5 flex items-center gap-2 border-b border-gray-100 pb-4">
      <Sk className="h-5 w-5 rounded-full" />
      <Sk className="h-5 w-40" />
    </div>

    {/* Grid Fields */}
    <div className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex flex-col gap-2">
          <Sk className="h-3 w-16" />
          <Sk className="h-4 w-32" />
        </div>
      ))}
    </div>
  </div>
);

// ─── Full Page Skeleton ──────────────────────────────────────────────────────

export const ProfilePageSkeleton = () => (
  <div className="mx-auto max-w-5xl space-y-5 p-4 sm:p-6">
    <ProfileHeroSkeleton />
    <div className="grid gap-5 lg:grid-cols-2">
      <CardSkeleton rows={4} />
      <CardSkeleton rows={4} />
    </div>
  </div>
);

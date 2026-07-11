// ProfileSkeleton.tsx
"use client";

// ─── Single Primitive ────────────────────────────────────────────────────────

const Sk = ({ className = "" }: { className?: string }) => (
  <div
    className={`animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800 ${className}`}
  />
);

// ─── ProfileHero Skeleton ────────────────────────────────────────────────────

const ProfileHeroSkeleton = () => (
  <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
    {/* Banner */}
    <div className="h-28 w-full animate-pulse bg-gray-200 dark:bg-gray-800" />

    <div className="px-6 pb-6 sm:px-8">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-end">
        {/* Avatar */}
        <Sk className="relative -mt-12 h-24 w-24 shrink-0 rounded-2xl" />

        {/* Name & Email */}
        <div className="mt-2 flex flex-col gap-2">
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
  <div className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
    {/* Title */}
    <div className="mb-5 flex items-center gap-2 border-b border-gray-100 pb-4 dark:border-gray-800">
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
  <div className="mx-auto max-w-5xl space-y-5 bg-gray-50 p-4 sm:p-6 dark:bg-gray-950">
    <ProfileHeroSkeleton />
    <div className="grid gap-5 lg:grid-cols-2">
      <CardSkeleton rows={4} />
      <CardSkeleton rows={4} />
    </div>
  </div>
);

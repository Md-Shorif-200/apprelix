"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-100 transition cursor-pointer"
      >
        <ArrowLeft size={15} />
        Go Back
      </button>
    </div>
  );
};

export default BackButton;

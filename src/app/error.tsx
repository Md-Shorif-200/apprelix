// app/error.tsx
"use client";

import Link from "next/link";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="h-20 w-20 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center">
            <AlertTriangle size={40} className="text-red-400" />
          </div>
        </div>

        {/* Text */}
        <h1 className="text-xl font-semibold text-gray-800 mb-2">
          Something Went Wrong
        </h1>
        <p className="text-gray-500 text-sm mb-2">
          An unexpected error occurred. Please try again or return home.
        </p>

        {/* Error Message */}
        {/* {error?.message && (
          <p className="text-xs text-red-400 bg-red-50 border border-red-100 rounded-xl px-4 py-2 mb-8 break-words">
            {error.message}
          </p>
        )} */}

        {/* Actions */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <button
            onClick={reset}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-500 text-white text-sm font-medium hover:bg-teal-600 transition cursor-pointer"
          >
            <RefreshCw size={15} />
            Try Again
          </button>

          <Link
            href="/"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-100 transition"
          >
            <Home size={15} />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

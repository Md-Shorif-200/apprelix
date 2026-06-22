// app/not-found.tsx

import Link from "next/link";
import { FileQuestion, Home } from "lucide-react";
import BackButton from "@/components/common/BackButton";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="h-20 w-20 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center">
            <FileQuestion size={40} className="text-teal-500" />
          </div>
        </div>

        {/* Text */}
        <h1 className="text-6xl font-bold text-teal-500 mb-3">404</h1>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-500 text-sm mb-8">
          The page you are looking for does not exist or has been moved.
        </p>

        {/* Actions */}
        <div className="flex items-center justify-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-500 text-white text-sm font-medium hover:bg-teal-600 transition"
          >
            <Home size={15} />
            Go Home
          </Link>

          <BackButton />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;

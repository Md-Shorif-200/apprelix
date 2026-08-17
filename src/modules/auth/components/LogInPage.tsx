// Replace with
import { LogIn } from "lucide-react";
import Link from "next/link";
import LogInForm from "@/modules/auth/_components/LogInForm";


export default function LogInPage() {
  return (
    <div className="flex min-h-full w-full items-center justify-center bg-gradient-to-br from-teal-50/60 via-white to-gray-50 px-4 py-7 lg:min-h-dvh">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="mb-8 text-center lg:text-left">
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
            <LogIn size={12} />
            Welcome back
          </div>

          <h1 className="mb-2 text-2xl font-bold text-gray-900">
            Log in to your account
          </h1>

          {/* <p className="mb-3 text-sm leading-relaxed text-gray-500">
            Access your dashboard to manage sourcing, quotations, and production
            — built for modern apparel businesses.
          </p> */}

          <p className="text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-teal-600 hover:underline"
            >
              Create one here
            </Link>
          </p>
        </div>

        <LogInForm />

{/* Demo Login Credentials */}
<div className="mt-8 rounded-2xl border border-teal-100 bg-white p-6 shadow-sm">
  <h2 className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-teal-700 lg:text-left">
    Demo Login Credentials
  </h2>

  <div className="space-y-4">
    <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
      <p className="text-sm font-semibold text-gray-800">Buyer Account</p>
      <p className="mt-2 text-sm text-gray-600">
        <span className="font-medium">Email:</span> shorif.buyer@gmail.com
      </p>
      <p className="text-sm text-gray-600">
        <span className="font-medium">Password:</span> Aa123456
      </p>
    </div>

    <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
      <p className="text-sm font-semibold text-gray-800">Supplier Account</p>
      <p className="mt-2 text-sm text-gray-600">
        <span className="font-medium">Email:</span> shorif.supplier@gmail.com
      </p>
      <p className="text-sm text-gray-600">
        <span className="font-medium">Password:</span> Sr123456
      </p>
    </div>

    <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
      <p className="text-sm font-semibold text-gray-800">Admin Account</p>
      <p className="mt-2 text-sm text-gray-600">
        <span className="font-medium">Email:</span> shorif.admin@gmail.com
      </p>
      <p className="text-sm text-gray-600">
        <span className="font-medium">Password:</span> Aa123456
      </p>
    </div>
  </div>
</div> 
        

        <p className="mt-6 text-center text-xs leading-relaxed text-gray-400 lg:text-left">
          Protected sign-in with encrypted credentials. Need help?{" "}
          <Link
            href="/contact"
            className="font-medium text-teal-600 transition-colors hover:underline"
          >
            Contact support
          </Link>
        </p>
      </div>
    </div>
  );
}

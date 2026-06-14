import { FileText, LogIn, ShieldCheck, Truck } from "lucide-react";
import Link from "next/link";
import LogInForm from "@/modules/auth/_components/LogInForm";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Secure Access",
    description: "Enterprise-grade encryption keeps your account safe",
  },
  {
    icon: FileText,
    title: "RFQ & Quotes",
    description: "Manage sourcing requests and supplier offers in one place",
  },
  {
    icon: Truck,
    title: "Live Tracking",
    description: "Monitor production and shipment updates in real time",
  },
];

export default function LogInPage() {
  return (
    <div className="flex min-h-full w-full items-center justify-center bg-gradient-to-br from-teal-50/60 via-white to-gray-50 px-4 py-10 lg:min-h-dvh">
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

          <p className="mb-3 text-sm leading-relaxed text-gray-500">
            Access your dashboard to manage sourcing, quotations, and production
            — built for modern apparel businesses.
          </p>

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

        {/* Platform highlights */}
        <div className="mt-8 space-y-3">
          <p className="text-center text-xs font-semibold tracking-widest text-gray-400 uppercase lg:text-left">
            Why professionals choose Apprelix
          </p>

          <ul className="grid gap-2.5">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <li
                  key={item.title}
                  className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white/70 px-4 py-3 backdrop-blur-sm"
                >
                  <div className="mt-0.5 rounded-lg bg-teal-50 p-2 text-teal-600">
                    <Icon size={14} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
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

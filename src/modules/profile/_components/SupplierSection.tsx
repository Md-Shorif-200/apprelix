"use client"

import { Factory, FileText, MapPin, Pencil } from "lucide-react"
import { Tag, renderValue } from "./ProfileComponents"

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
export interface SupplierFields {
  factoryName?: string
  manufacturingCountry?: string
  manufacturingCapacity?: string
  moq?: string
  exportExperience?: string
  numberOfEmployees?: string
  mainMarkets?: string
  factoryAddress?: string
  productCategories?: string[]
  certifications?: string[]
  tradeLicense?: string
  companyRegistrationCertificate?: string
}

// ─────────────────────────────────────────────
// Document Card Component
// ─────────────────────────────────────────────
const DocumentCard = ({ label, url }: { label: string; url?: string }) => (
  <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-gray-100 bg-gray-50 p-5 text-center">
    <FileText size={22} className="text-teal-600" />
    <span className="text-xs font-semibold text-gray-500">{label}</span>
    {url ? (
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="text-xs font-semibold text-teal-600 hover:underline"
      >
        View Document
      </a>
    ) : (
      <span className="text-xs text-gray-400">Not uploaded</span>
    )}
  </div>
)

// ─────────────────────────────────────────────
// Supplier Factory Details Sub-Section
// ─────────────────────────────────────────────
const SupplierFactoryDetails = ({ user }: { user: SupplierFields }) => {
  return (
    <div className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      {/* Edit Button */}
      <button className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-gray-100 bg-gray-50 text-gray-400 transition hover:border-teal-200 hover:bg-teal-50 hover:text-teal-600">
        <Pencil size={13} />
      </button>

      {/* Header */}
      <div className="mb-5 flex items-center gap-3 border-b border-gray-100 pb-4 pr-10">
        <Factory size={18} className="text-teal-600" />
        <h2 className="text-base font-bold text-gray-800">Supplier Factory Details</h2>
      </div>

      {/* Content Grid */}
      <dl className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
        {/* Factory Name */}
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Factory Name
          </dt>
          <dd className="mt-1 text-sm font-medium text-gray-700">
            {renderValue(user.factoryName)}
          </dd>
        </div>

        {/* Manufacturing Country */}
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Manufacturing Country
          </dt>
          <dd className="mt-1 text-sm font-medium text-gray-700">
            {renderValue(user.manufacturingCountry)}
          </dd>
        </div>

        {/* Monthly Production Capacity */}
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Monthly Production Capacity
          </dt>
          <dd className="mt-1 text-sm font-medium text-gray-700">
            {renderValue(user.manufacturingCapacity)}
          </dd>
        </div>

        {/* MOQ */}
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Minimum Order Quantity (MOQ)
          </dt>
          <dd className="mt-1 text-sm font-medium text-gray-700">
            {renderValue(user.moq)}
          </dd>
        </div>

        {/* Export Experience */}
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Export Experience
          </dt>
          <dd className="mt-1 text-sm font-medium text-gray-700">
            {renderValue(user.exportExperience)}
          </dd>
        </div>

        {/* Number of Employees */}
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Number of Employees
          </dt>
          <dd className="mt-1 text-sm font-medium text-gray-700">
            {renderValue(user.numberOfEmployees)}
          </dd>
        </div>

        {/* Main Markets */}
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Main Markets
          </dt>
          <dd className="mt-1 text-sm font-medium text-gray-700">
            {renderValue(user.mainMarkets)}
          </dd>
        </div>

        {/* Factory Address — full width */}
        <div className="sm:col-span-2">
          <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Factory Address
          </dt>
          <dd className="mt-1">
            <div className="flex items-start gap-2 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm text-gray-600">
              <MapPin size={14} className="mt-0.5 shrink-0 text-teal-600" />
              <span>{renderValue(user.factoryAddress)}</span>
            </div>
          </dd>
        </div>

        {/* Product Categories — full width */}
        <div className="sm:col-span-2">
          <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Product Categories
          </dt>
          <dd className="mt-1">
            {user.productCategories && user.productCategories.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {user.productCategories.map((cat, i) => (
                  <Tag key={i} label={cat} />
                ))}
              </div>
            ) : (
              <span className="text-sm font-medium text-gray-700">N/A</span>
            )}
          </dd>
        </div>

        {/* Certifications — full width */}
        <div className="sm:col-span-2">
          <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Certifications
          </dt>
          <dd className="mt-1">
            {user.certifications && user.certifications.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {user.certifications.map((cert, i) => (
                  <Tag key={i} label={cert} variant="teal" />
                ))}
              </div>
            ) : (
              <span className="text-sm font-medium text-gray-700">N/A</span>
            )}
          </dd>
        </div>
      </dl>
    </div>
  )
}

// ─────────────────────────────────────────────
// Verification Documents Sub-Section
// ─────────────────────────────────────────────
const SupplierDocuments = ({ user }: { user: SupplierFields }) => {
  return (
    <div className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-5 flex items-center gap-3 border-b border-gray-100 pb-4">
        <FileText size={18} className="text-teal-600" />
        <h2 className="text-base font-bold text-gray-800">Verification Documents</h2>
      </div>

      {/* Document Cards Grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        <DocumentCard
          label="Trade License"
          url={user.tradeLicense}
        />
        <DocumentCard
          label="Registration Certificate"
          url={user.companyRegistrationCertificate}
        />
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// Main Export — combines both supplier sub-sections
// ─────────────────────────────────────────────
const SupplierSection = ({ user }: { user: SupplierFields }) => {
  return (
    <>
      <SupplierFactoryDetails user={user} />
      <SupplierDocuments user={user} />
    </>
  )
}

export default SupplierSection
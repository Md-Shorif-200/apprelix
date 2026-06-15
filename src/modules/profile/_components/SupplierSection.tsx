"use client";
import { Factory, MapPin, Pencil } from "lucide-react";
import { Tag, renderValue } from "./ProfileComponents";
import CustomModal from "@/components/common/CustomModal";
import { useState } from "react";
import SupplierDetailsUpdateForm from "./SupplierDetailsUpdateForm";

//  Types

export interface SupplierRoleDetails {
  factoryName?: string;
  productionCapacity?: string;
  yearEstablished?: string;
  numberOfEmployees?: string;
  factoryLocation?: string;
  productCategories?: string[];
}

export interface SupplierFields {
  roleDetails?: SupplierRoleDetails;
}

// Document Card Component

// const DocumentCard = ({ label, url }: { label: string; url?: string }) => (
//   <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-gray-100 bg-gray-50 p-5 text-center">
//     <FileText size={22} className="text-teal-600" />
//     <span className="text-xs font-semibold text-gray-500">{label}</span>
//     {url ? (
//       <a
//         href={url}
//         target="_blank"
//         rel="noreferrer"
//         className="text-xs font-semibold text-teal-600 hover:underline"
//       >
//         View Document
//       </a>
//     ) : (
//       <span className="text-xs text-gray-400">Not uploaded</span>
//     )}
//   </div>
// );


const SupplierFactoryDetails = ({ user, setIsModalOpen }: { user: SupplierFields; setIsModalOpen: (value: boolean) => void }) => {





  return (
    <div className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      {/* Edit Button */}
      <button
       onClick={() => setIsModalOpen(true)}
      className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-gray-100 bg-gray-50 text-gray-400 transition hover:border-teal-200 hover:bg-teal-50 hover:text-teal-600 cursor-pointer">
        <Pencil size={13} />
      </button>

      {/* Header */}
      <div className="mb-5 flex items-center gap-3 border-b border-gray-100 pb-4 pr-10">
        <Factory size={18} className="text-teal-600" />
        <h2 className="text-base font-bold text-gray-800">
          Supplier Details
        </h2>
      </div>

     <dl className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
  {/* Factory Name */}
  <div>
    <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400">
      Factory Name
    </dt>
    <dd className="mt-1 text-sm font-medium text-gray-700">
      {renderValue(user?.roleDetails?.factoryName)}
    </dd>
  </div>

  {/* Production Capacity */}
  <div>
    <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400">
      Production Capacity
    </dt>
    <dd className="mt-1 text-sm font-medium text-gray-700">
      {renderValue(user?.roleDetails?.productionCapacity)}
    </dd>
  </div>

  {/* Established Year */}
  <div>
    <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400">
      Year Established
    </dt>
    <dd className="mt-1 text-sm font-medium text-gray-700">
      {user?.roleDetails?.yearEstablished
        ? new Date(user?.roleDetails?.yearEstablished).getFullYear()
        : "N/A"}
    </dd>
  </div>

  {/* Employees */}
  <div>
    <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400">
      Number of Employees
    </dt>
    <dd className="mt-1 text-sm font-medium text-gray-700">
      {renderValue(user?.roleDetails?.numberOfEmployees)}
    </dd>
  </div>

  {/* Factory Location */}
  <div className="sm:col-span-2">
    <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
      Factory Location
    </dt>
    <dd className="mt-1">
      <div className="flex items-start gap-2 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm text-gray-600">
        <MapPin size={14} className="mt-0.5 shrink-0 text-teal-600" />
        <span>{renderValue(user?.roleDetails?.factoryLocation)}</span>
      </div>
    </dd>
  </div>

  {/* Product Categories */}
  <div className="sm:col-span-2">
    <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
      Product Categories
    </dt>
    <dd className="mt-1">
      {user?.roleDetails?.productCategories?.length ? (
        <div className="flex flex-wrap gap-2">
          {user?.roleDetails?.productCategories.map((category, index) => (
            <Tag
              key={index}
              variant="teal"
              label={category
                .replaceAll("_", " ")
                .replace(/\b\w/g, (c) => c.toUpperCase())}
            />
          ))}
        </div>
      ) : (
        <span className="text-sm font-medium text-gray-700">N/A</span>
      )}
    </dd>
  </div>
</dl>
    </div>
  );
};


// const SupplierDocuments = ({ user }: { user: SupplierFields }) => {
//   return (
//     <div className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
//       {/* Header */}
//       <div className="mb-5 flex items-center gap-3 border-b border-gray-100 pb-4">
//         <FileText size={18} className="text-teal-600" />
//         <h2 className="text-base font-bold text-gray-800">
//           Verification Documents
//         </h2>
//       </div>

//       {/* Document Cards Grid */}
//       <div className="grid gap-4 sm:grid-cols-2">
//         <DocumentCard label="Trade License" url={user.tradeLicense} />
//         <DocumentCard
//           label="Registration Certificate"
//           url={user.companyRegistrationCertificate}
//         />
//       </div>
//     </div>
//   );
// };


const SupplierSection = ({ user }: { user: SupplierFields }) => {
      const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <SupplierFactoryDetails user={user} setIsModalOpen={setIsModalOpen} />
      {/* <SupplierDocuments user={user} /> */}


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
              {user.roleDetails && (
                <SupplierDetailsUpdateForm
                  roleDetails={user.roleDetails}
                />
              )}
            </CustomModal>
    </>
  );
};

export default SupplierSection;

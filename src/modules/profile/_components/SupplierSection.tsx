"use client";
import CustomModal from "@/components/common/CustomModal";
import SupplierDetailsUpdateForm from "./SupplierDetailsUpdateForm";
import { SupplierFactoryDetails } from "./SupplierFactoryDetails";
import { UserType } from "@/modules/users/types/users.types";
import { useProfileModalActions, useProfileModalState } from "@/stores/profile-modal/profile-modal.hooks";

export interface SupplierSectionProps {
  user: UserType;
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

const SupplierSection = ({ user }: SupplierSectionProps) => {
const {isModalOpen,updatingData} = useProfileModalState();
const {closeModal} = useProfileModalActions();
  return (
    <>
      <SupplierFactoryDetails user={user}  />
      {/* <SupplierDocuments user={user} /> */}

      <CustomModal
        isOpen={isModalOpen}
        onClose={closeModal}
        size="lg"
        title="Edit Profile"
        subtitle="Update your profile information"
        footer={
          <div className="flex justify-end gap-3 w-full">
            <button
              onClick={closeModal}
              className="px-4 py-2 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
              disabled={updatingData}
              onClick={() => {
                document.getElementById("profile-submit")?.click();
              }}
              className={`px-4 py-2 rounded-xl text-white ${
                updatingData
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-ds-primary hover:bg-teal-700"
              }`}
            >
              {updatingData ? "Saving..." : "Save Changes"}
            </button>

          </div>
        }
      >
        {user.roleDetails && (
          <SupplierDetailsUpdateForm
            id={user._id}
            roleDetails={user.roleDetails}
     
          />
        )}
      </CustomModal>
    </>
  );
};

export default SupplierSection;

"use client";
import CustomModal from "@/components/common/CustomModal";
import SupplierDetailsUpdateForm from "./SupplierDetailsUpdateForm";
import { SupplierFactoryDetails } from "./SupplierFactoryDetails";
import { UserType } from "@/modules/users/types/users.types";
import { useIsModalOpen, useModalActions } from "@/stores/modal/modal.hooks";

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
    const isOpenModal = useIsModalOpen("profile:role:edit");
    const { openModal, closeModal } = useModalActions();
  return (
    <>
      <SupplierFactoryDetails user={user} openModal={openModal} />
      {/* <SupplierDocuments user={user} /> */}

      <CustomModal
        isOpen={isOpenModal}
        onClose={closeModal}
        size="lg"
        title="Edit Profile"
        subtitle="Update your profile information"
      
      >
        {user.roleDetails && (
          <SupplierDetailsUpdateForm
            id={user._id}
            roleDetails={user.roleDetails}
            closeModal ={closeModal}
          />
        )}
      </CustomModal>
    </>
  );
};

export default SupplierSection;

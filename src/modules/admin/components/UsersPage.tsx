// src/app/dashboard/users/page.tsx
"use client";
import { useState } from "react";
import { useGetAllUsers } from "@/modules/users/hooks/useGetAllUsers";
import CustomTable from "@/components/common/CustomTable";
import EmptyState from "@/components/common/EmptyState";
import DashboardSectionHeader from "@/modules/dashboard/components/DashboardSectionheader";
import { Users } from "lucide-react";
import CustomPagination from "@/components/common/CustomPagination";
import ConfirmationModal, {
  type ConfirmationModalProps,
} from "@/components/shared/ConfirmationModal";
import CustomModal from "@/components/common/CustomModal";
import { UserType } from "@/modules/users/types/users.types";
import { getUsersTableColumns } from "../utils/users-table-columns.utils";
import UserDetailsSheet from "../_components/UserDetailsSheet";
import RejectionReasonForm from "../_components/RejectionReasonForm";
import {
  useAcceptUser,
  useBlockUser,
  useDeleteUser,
  useUnBlockUser,
} from "../hooks/users-management.hooks";
import BlockReasonForm from "../_components/BlockReasonForm";

// -------------------------------------------------------------

const ITEMS_PER_PAGE = 10;
type ConfirmationState = Omit<ConfirmationModalProps, "open" | "onOpenChange">;

const UsersPage = () => {

  // ------------ states
  const [currentPage, setCurrentPage] = useState(1);
  const [confirmation, setConfirmation] = useState<ConfirmationState | null>(
    null,
  );
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null);
  const [isDetailsSheetOpen, setIsDetailsSheetOpen] = useState(false);
  const [isRejectionModalOpen, setIsRejectionModalOpen] = useState(false);
  const [isBlockModalOpen, setIsBlockModalOpen] = useState(false);


// ------------- hooks
  const { data, isPending, isError } = useGetAllUsers();
  const { mutate: acceptUser } = useAcceptUser();
  const { mutate: blockUser } = useBlockUser();
  const { mutate: unblockUser } = useUnBlockUser();
  const { mutate: deleteUser } = useDeleteUser();

  const usersList: UserType[] = data?.data?.results || [];
  const totalUsers = data?.data?.count || 0;
  const isLoading = isPending;
  const hasNoData = !isLoading && totalUsers === 0;
  const totalPages = Math.ceil(totalUsers / ITEMS_PER_PAGE);



// pagination
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };


  // close modal function
  
  const handleCloseRejectionModal = () => {
    setIsRejectionModalOpen(false);
    setSelectedUser(null);
  };

  
  const handleCloseBlockModal = () => {
    setIsBlockModalOpen(false);
    setSelectedUser(null);
  };
  
  
  //  -------------------------  table actions
  
  //   accept user
  const handleAcceptUser = (user: UserType) => {
    setConfirmation({
      title: "Accept User",
      description: `Are you sure you want to Accept "${user.email}"?`,
      loadingMessage: "Processing...",
      errorMessage: "Failed to accept User",
      variant: "default",
      onConfirm: async () => {
        return new Promise((resolve, reject) => {
          acceptUser(user?._id, {
            onSuccess: () => resolve(true),
            onError: (error) => reject(error),
          });
        });
      },
      onSuccess: () => {
        setCurrentPage(1);
      },
    });
  };

  // reject user 
  const handleRejectUser = (user: UserType) => {
    setSelectedUser(user);
    setIsRejectionModalOpen(true);
  };


  // block user 
  const handleBlockUser = (user: UserType) => {
    setSelectedUser(user);
    setIsBlockModalOpen(true);
  };

  

  //   unblock single user
  const handleUnblockUser = (user: UserType) => {
    setConfirmation({
      title: "Unblock User",
      description: `Are you sure you want to unblock "${user.email}"?`,
      loadingMessage: "Processing...",
      errorMessage: "Failed to unblock User",
      variant: "default",
      onConfirm: async () => {
        return new Promise((resolve, reject) => {
          unblockUser(user?._id, {
            onSuccess: () => resolve(true),
            onError: (error) => reject(error),
          });
        });
      },
      onSuccess: () => {
        setCurrentPage(1);
      },
    });
  };

  //   delete user
  const handleDeleteUser = (user: UserType) => {
    setConfirmation({
      title: "Delete User",
      description: `Are you sure you want to delete "${user.email}"? This action cannot be undone.`,
      loadingMessage: "Deleting...",
      errorMessage: "Failed to delete User",
      variant: "destructive",
      onConfirm: async () => {
        return new Promise((resolve, reject) => {
          deleteUser(user?._id, {
            onSuccess: () => resolve(true),
            onError: (error) => reject(error),
          });
        });
      },
      onSuccess: () => {
        setCurrentPage(1);
      },
    });
  };

  // view user details
  const handleViewDetails = (user: UserType) => {
    setSelectedUser(user);
    setIsDetailsSheetOpen(true);
  };

  const columns = getUsersTableColumns(currentPage, ITEMS_PER_PAGE, {
    onViewDetails: handleViewDetails,
    onAcceptUser: handleAcceptUser,
    onRejectUser: handleRejectUser,
    onBlockUser: handleBlockUser,
    onUnblockUser: handleUnblockUser,
    onDeleteUser: handleDeleteUser,
  });

  return (
    <div className="w-full">
      <DashboardSectionHeader title="Users" count={totalUsers} />

      {hasNoData ? (
        <EmptyState
          icon={Users}
          title="No Users Found"
          description={
            isError
              ? "There was an error fetching users."
              : "There are currently no users to display."
          }
        />
      ) : (
        <>
          <CustomTable<UserType>
            columns={columns}
            data={usersList}
            rowKey={(row) => row._id}
            isLoading={isLoading}
            loadingRows={ITEMS_PER_PAGE}
            headerClassName="bg-teal-500"
            rowClassName="bg-white hover:bg-gray-50 transition-colors duration-150 border-b border-gray-100 dark:bg-gray-900 dark:border-gray-800 dark:hover:bg-gray-800/50"
            containerClassName="border border-gray-200 rounded-xl shadow-sm bg-white dark:border-gray-800 dark:bg-gray-900"
          />

          {totalPages > 1 && (
            <CustomPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}

      {/* Confirmation Modal for simple actions */}
      {confirmation && (
        <ConfirmationModal
          open
          onOpenChange={(open) => !open && setConfirmation(null)}
          {...confirmation}
        />
      )}

      {/* Rejection Modal with custom form */}
      <CustomModal
        isOpen={isRejectionModalOpen}
        onClose={handleCloseRejectionModal}
        size="lg"
        title="Reject User Account"
        subtitle="Please provide a reason for rejecting this user."
        variant="danger"
      >
        {selectedUser && (
          <RejectionReasonForm
            user={selectedUser}
            closeModal={handleCloseRejectionModal}
          />
        )}
      </CustomModal>


      {/* block Modal with custom form */}
      <CustomModal
        isOpen={isBlockModalOpen}
        onClose={handleCloseBlockModal}
        size="lg"
        title="Block User Account"
        subtitle="Please provide a reason for rejecting this user."
        variant="danger"
      >
        {selectedUser && (
          <BlockReasonForm
            user={selectedUser}
            closeModal={handleCloseBlockModal}
          />
        )}
      </CustomModal>



      {/* User Details Side Sheet */}
      <UserDetailsSheet
        open={isDetailsSheetOpen}
        onOpenChange={(isOpen) => {
          setIsDetailsSheetOpen(isOpen);
          if (!isOpen) setSelectedUser(null);
        }}
        user={selectedUser}
      />
    </div>
  );
};

export default UsersPage;

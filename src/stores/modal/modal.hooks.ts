import { useModalStore } from "./modal.store";
import { ModalType } from "./modal.types";

// return zustand modal state
export const useModalState = () => {
  const activeModal = useModalStore((s) => s.activeModal);
  // const isSubmitting = useModalStore((s) => s.isSubmitting);

  return {
    activeModal,
    // isSubmitting,
  };
};

// return zustand modal actions
export const useModalActions = () => {
  return useModalStore((s) => s.actions);
};

// current active modal type
export const useIsModalOpen = (type: ModalType) =>
  useModalStore((s) => s.activeModal === type);

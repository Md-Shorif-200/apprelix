import { create } from "zustand";

export type ModalType =
  // Profile Section
  | "profile:edit"
  | "profile:company:edit"
  | "profile:role:edit"
  // Settings Section
  | "settings:password"
  | "settings:notification"
  // Dashboard Section
  | "dashboard:invite"
  | "dashboard:export"
  | null;

interface ModalStoreType {
  activeModal: ModalType;
  isSubmitting: boolean;

  actions: {
    openModal: (type: ModalType) => void;
    closeModal: () => void;
    setSubmitting: (status: boolean) => void;
  };
}


export const useModalStore = create<ModalStoreType>((set) => ({
  activeModal: null,
  isSubmitting: false,

  actions: {
    openModal: (type) => set({ activeModal: type }),
    closeModal: () => set({ activeModal: null}),
    setSubmitting: (status) => set({ isSubmitting: status }),
  },
}));

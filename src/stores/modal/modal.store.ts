import { create } from "zustand";
import { ModalStoreType } from "./modal.types";

export const useModalStore = create<ModalStoreType>((set) => ({
  activeModal: null,
  // isSubmitting: false,

  actions: {
    openModal: (type) => set({ activeModal: type }),
    closeModal: () => set({ activeModal: null }),
    // setSubmitting: (status) => set({ isSubmitting: status }),
  },
}));

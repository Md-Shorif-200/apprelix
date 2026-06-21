// src/stores/profile-modal.store.ts

import { create } from "zustand";

interface ProfileModalStore {
  isModalOpen: boolean;
  updatingData: boolean;

  actions: {
    openModal: () => void;
    closeModal: () => void;
    setUpdating: (status: boolean) => void;
  };
}

export const useProfileModalStore = create<ProfileModalStore>((set) => ({
  isModalOpen: false,
  updatingData: false,

  actions: {
    openModal: () =>
      set({
        isModalOpen: true,
      }),

    closeModal: () =>
      set({
        isModalOpen: false,
      }),

    setUpdating: (status) =>
      set({
        updatingData: status,
      }),
  },
}));
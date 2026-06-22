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

export interface ModalStoreType {
  activeModal: ModalType;
  //   isSubmitting: boolean;

  actions: {
    openModal: (type: ModalType) => void;
    closeModal: () => void;
    // setSubmitting: (status: boolean) => void;
  };
}

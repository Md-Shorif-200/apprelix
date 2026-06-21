import { useProfileModalStore } from "./profileModalStore";

export const useProfileModalState = () => {
const isModalOpen = useProfileModalStore((state) => {
  return state.isModalOpen;
});

  const updatingData = useProfileModalStore((state) => state.updatingData);

  return {
    isModalOpen,
    updatingData,
  };
};

export const useProfileModalActions = () => {
 return useProfileModalStore(
    (state) => state.actions
  );
};

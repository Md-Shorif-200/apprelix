import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserProfileData } from "../services/users-services";
import {
  Update_UserProfile_Payload_Type,
  Update_UserProfile_Response_Type,
} from "../types/users.types";

type UpdateUserProfileType = {
  userId: string;
  payload: Update_UserProfile_Payload_Type;
};

export const useUpdateUserProfileData = () => {
  const queryClient = useQueryClient();

  return useMutation<
    Update_UserProfile_Response_Type,
    Error,
    UpdateUserProfileType
  >({
    mutationFn: async (vars) => {
      return updateUserProfileData(vars.userId, vars.payload);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};

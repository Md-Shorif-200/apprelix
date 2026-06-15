import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserProfileData } from "../services/users-services";
import {
  UpdateUserProfilePayload,
  UpdateUserProfileResponse,
} from "../types/users.types";

type UpdateUserProfileType = {
  userId: string;
  payload: UpdateUserProfilePayload;
};

export const useUpdateUserProfileData = () => {
  const queryClient = useQueryClient();

  return useMutation<UpdateUserProfileResponse, Error, UpdateUserProfileType>({
    mutationFn: async (vars) => {
      return updateUserProfileData(vars.userId, vars.payload);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};

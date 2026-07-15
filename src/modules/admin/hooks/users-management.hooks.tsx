import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AcceptUserService, BlockUserService, DeleteUserService, RejectUserService, UnBlockUserService } from "../service/users-management.service";
import { BlockUserVariables, RejectionPayload, RejectUserVariables } from "../types/user-management.type";

// accept user

export const useAcceptUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: AcceptUserService,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};



export const useRejectUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ userId, payload }: RejectUserVariables) =>
      RejectUserService(userId, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

// blocked  user

export const useBlockUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({userId,payload}:BlockUserVariables) => BlockUserService(userId,payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};


// unblock  user

export const useUnBlockUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: UnBlockUserService,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

// delete user
export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: DeleteUserService,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

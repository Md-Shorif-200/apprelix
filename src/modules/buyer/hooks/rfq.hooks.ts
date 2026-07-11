import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  cancelRfqService,
  createRfqService,
  deleteRfqService,
  editRfqService,
  getRfqService,
  reactivateRfqService,
} from "../services/RfqServices";
import { GetRfqQueryType, UseGetRfqsOptions } from "../types/rfq-list.type";

// create rfq
export const useCreateRfq = () => {
  return useMutation({
    mutationFn: createRfqService,
  });
};

// edit rfq
export const useEditRfq = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editRfqService,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["rfqs"] });
    },
  });
};

// get all rfqs

export const useGetRfqs = (
  queryParams?: GetRfqQueryType,
  options: UseGetRfqsOptions = {},
) => {
  return useQuery({
    queryKey: ["rfqs", queryParams],
    queryFn: () => getRfqService(queryParams),
    ...options,
  });
};

// delete rfq

export const useDeleteSingleRfq = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteRfqService,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["rfqs"] });
    },
  });
};


// cancel rfq 
export const useCancelRfq = () => {
  const queryClient = useQueryClient();

   return useMutation({
    mutationFn: cancelRfqService,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["rfqs"] });
    },
   })
}


// cancel rfq 
export const useReactivateRfq = () => {
  const queryClient = useQueryClient();

   return useMutation({
    mutationFn: reactivateRfqService,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["rfqs"] });
    },
   })
}
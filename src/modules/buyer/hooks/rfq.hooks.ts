import { useMutation, useQuery } from "@tanstack/react-query";
import { createRfqService, getRfqService } from "../services/RfqServices";
import { GetRfqQueryType, UseGetRfqsOptions } from "../types/rfq-list.type";

export const useCreateRfq = () => {
  return useMutation({
    mutationFn: createRfqService,
  });
};

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

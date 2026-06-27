import { useMutation } from "@tanstack/react-query";
import { createRfqService } from "../services/RfqServices";

export const useCreateRfq = () => {
  return useMutation ({
    mutationFn: createRfqService,
  });
};

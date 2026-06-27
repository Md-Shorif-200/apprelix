import axiosRequest from "@/lib/api/axiosRequest";
import { CreateRfqPayload, RfqApiResponse } from "../types/rfq-form.types";

export const createRfqService = (
  payload: CreateRfqPayload,
): Promise<RfqApiResponse> => {
  return axiosRequest({
    method: "POST",
    url: "/api/v1/buyer/rfq",
    data: payload,
  });
};

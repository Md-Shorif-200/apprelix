import axiosRequest from "@/lib/api/axiosRequest";
import {
  CreateRfqPayload,
  CreateRfqApiResponse,
  GetRfqsResponse,
} from "../types/rfq-form.types";
import { GetRfqQueryType } from "../types/rfq-list.type";

export const createRfqService = (
  payload: CreateRfqPayload,
): Promise<CreateRfqApiResponse> => {
  return axiosRequest({
    method: "POST",
    url: "/api/v1/buyer/rfq",
    data: payload,
  });
};

export const getRfqService = async (queryParams?: GetRfqQueryType) => {
  const res = await axiosRequest<GetRfqsResponse>({
    method: "GET",
    url: "/api/v1/buyer/rfq",
    params: queryParams,
  });

  return res.data;
};

import axiosRequest from "@/lib/api/axiosRequest";
import {
  CreateRfqPayload,
  EditRfqApiPayload,
  GetRfqsResponse,
  ApiResponse,
  CreateRfqResponse,
} from "../types/rfq-form.types";
import { GetRfqQueryType } from "../types/rfq-list.type";

export const createRfqService = (
  payload: CreateRfqPayload,
): Promise<ApiResponse<CreateRfqResponse>> => {
  return axiosRequest({
    method: "POST",
    url: "/api/v1/buyer/rfq",
    data: payload,
  });
};

// get all rfqs
export const getRfqService = async (queryParams?: GetRfqQueryType) => {
  const searchParams = new URLSearchParams();

  if (queryParams) {
    Object.entries(queryParams).forEach(([key, value]) => {
      if (value === undefined || value === null || value === "") return;
      searchParams.append(key, String(value));
    });
  }

  const queryString = searchParams.toString();
  const url = queryString
    ? `/api/v1/buyer/rfq?${queryString}`
    : "/api/v1/buyer/rfq";

  const res = await axiosRequest<{ data: GetRfqsResponse }>({
    method: "GET",
    url,
  });

  return res.data;
};

// delete Single Rfq
export const deleteRfqService = async (id: string) => {
  const res = await axiosRequest<ApiResponse<CreateRfqResponse>>({
    method: "DELETE",
    url: `/api/v1/buyer/rfq/${id}`,
  });
  return res.data;
};

// cancel rfq

export const cancelRfqService = async (id: string) => {
  const res = await axiosRequest<ApiResponse<CreateRfqResponse>>({
    method: "PATCH",
    url: `/api/v1/buyer/rfq/${id}/cancel`,
  });
  return res.data;
};

// reactivate rfq
export const reactivateRfqService = async (id: string) => {
  const res = await axiosRequest<ApiResponse<CreateRfqResponse>>({
    method: "PATCH",
    url: `/api/v1/buyer/rfq/${id}/reactivate`,
  });
  return res.data;
};

// edit rfq
export const editRfqService = ({
  id,
  payload,
}: {
  id: string;
  payload: EditRfqApiPayload;
}): Promise<ApiResponse<CreateRfqResponse>> => {
  return axiosRequest<ApiResponse<CreateRfqResponse>>({
    method: "PATCH",
    url: `/api/v1/buyer/rfq/${id}`,
    data: payload,
  });
};

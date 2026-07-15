import axiosRequest from "@/lib/api/axiosRequest";
import { UserTableActionResponseType } from "@/modules/users/types/users.types";
import { blockFormPayload, RejectionPayload } from "../types/user-management.type";


// accept  user service 
export const AcceptUserService = async (id: string) => {
  const res = await axiosRequest<UserTableActionResponseType>({
    method: "PATCH",
    url: `api/v1/users/${id}/accept`,
  });
  return res;
};



// reject user service
export const RejectUserService = async (
  id: string,
  payload: RejectionPayload,
) => {
  const res = await axiosRequest<UserTableActionResponseType>({
    method: "PATCH",
    url: `api/v1/users/${id}/reject`,
    data: payload,
  });
  return res;
};


// blocked user service 
export const BlockUserService = async (id: string,payload: blockFormPayload,) => {
  const res = await axiosRequest<UserTableActionResponseType>({
    method: "PATCH",
    url: `api/v1/users/${id}/block`,
    data : payload
  });
  return res;
};


// unblockend user service 
export const UnBlockUserService = async (id: string) => {
  const res = await axiosRequest<UserTableActionResponseType>({
    method: "PATCH",
    url: `api/v1/users/${id}/unblock`,
  });
  return res;
};




// delete user service 
export const DeleteUserService = async (id: string) => {
  const res = await axiosRequest<UserTableActionResponseType>({
    method: "DELETE",
    url: `api/v1/users/${id}`,
  });
  return res.data;
};

import axiosRequest from "@/lib/api/axiosRequest";
import {
  UsersResponse,
  SingleUserResponse,
  UpdateUserProfilePayload,
  UpdateUserProfileResponse,
} from "../types/users.types";

export const getAllUsers = () => {
  return axiosRequest<UsersResponse>({
    method: "GET",
    url: "/api/v1/users/",
  });
};

// get single user
export const getSingleUser = (userId: string) => {
 

  return axiosRequest<SingleUserResponse>({
    method: "GET",
    url: `/api/v1/users/${userId}`,
  });
};


// update user profile data
export const updateUserProfileData = (
  userId: string,
  payload: UpdateUserProfilePayload,
) => {
  return axiosRequest<UpdateUserProfileResponse>({
    method: "PATCH",
    url: `/api/v1/users/${userId}`,
    data: payload,
  });
};